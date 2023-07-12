import axios from "axios";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Stack';

const baseURL = 'https://api.themoviedb.org/3/discover/movie';
const baseSearchURL = 'https://api.themoviedb.org/3/search/movie';
const apiKey = '1e79267383f70ef8a56646ec52d362c1';
const imgBaseURL = "https://image.tmdb.org/t/p/w500";
const genresURL = 'https://api.themoviedb.org/3/genre/movie/list';

function MoviesList () {
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [total_pages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("");
    const [genre_ids, setGenreIds] = useState([]);
    const [genre, setGenre] = useState("");
   
async function fetchData(currentPage, search = null, genre) {

    axios.get(genresURL, {
        params: {
            api_key:apiKey,
        }
    })
            .then(response => {
             setGenreIds(response.data.genres);
            })

            .catch(error => {
                setError(error.message);
            })  

            if(!search) {

                axios.get(baseURL, {
                    params: {
                        api_key:apiKey,
                        page: currentPage,
                        with_genres: genre,
                    }
                })
                        .then(response => {
                         setMovies(response.data.results);
                         let totalPages =  response.data.total_pages
                         if (totalPages && totalPages <= 500) {
                            setTotalPages(totalPages);
                         } else {
                            setTotalPages(500);
                         }
                        })
            
                        .catch(error => {
                            setError(error.message);
                        })  
            
                } else if(search) {
                    axios.get(baseSearchURL, {
                        params: {
                            api_key:apiKey,
                            page: currentPage,
                            query: search,
                        }
                    })
                            .then(response => {
                             setGenreIds()
                             setMovies(response.data.results);
                             let totalPages =  response.data.total_pages
                             if (totalPages && totalPages <= 500) {
                                setTotalPages(totalPages);
                             } else {
                                setTotalPages(500);
                             }
                            })
                
                            .catch(error => {
                                setError(error.message);
                            })  
                    }
                }
          
        useEffect(() => {
            fetchData(page);
        }, [page]);
        
        const handleChange = (event, value) => {
            setPage(value);
            fetchData(value,search,genre);
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            fetchData(page, search, genre);
        };

        const setWishList = (event) => {
            event.preventDefault();
            let id = event.target.attributes.getNamedItem('data-id').value;
            window.localStorage.setItem('movie-'+id, id);
        };

    if (error) {
        return( <div className="error"> <h2>{ error }</h2> </div>)
    } else if (movies && genre_ids) {
        const items = movies.map((movie, index) => {
          let genre = [];
          let genreids = movie.genre_ids;
          if (genre_ids) {
          for (let i = 0; i < genreids.length; i++) {
            let id = genreids[i];
            for (let g = 0; g < genre_ids.length; g++) {
                let api_id = genre_ids[g].id;
                if (id === api_id) {
                    genre.push(genre_ids[g].name);
                }
              }
            }
          }  
          genre = genre.toString();

        return (
          <div key={index} className="movie">
            <img src={imgBaseURL + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{genre}</p>
            <Link to={"/movie/" + movie.id}>More</Link>
            <button onClick={setWishList} data-id={movie.id}>Like</button>
          </div>
        )
    });

    const genre_option = genre_ids.map((genre, index) =>
         <option key={genre.id} value={genre.id}>{genre.name}</option>
    );
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>
            <input type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            </label>
            <label>
                <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                   <option value="">All Genres</option>
                   {genre_option}
                </select>
            </label>
            <input type="submit" 
                   value="Search" 
                   id="searchInput"  
                   name="searchInput" 
                   />
            </form>
           <div className="movies">{ items }</div>
        <Stack spacing={2}>
           <Typography>Page: {page}</Typography>
           <Pagination count={total_pages} page={page} onChange={handleChange} />
        </Stack>
        </div>
    )
}

}

export default MoviesList;