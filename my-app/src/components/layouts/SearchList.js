import axios from "axios";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Stack';

const baseSearchURL = 'https://api.themoviedb.org/3/search/movie';
const apiKey = '1e79267383f70ef8a56646ec52d362c1';
const imgBaseURL = "https://image.tmdb.org/t/p/w500";

function SearchList () {
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [total_pages, setTotalPages] = useState(1);
    const params = useParams();
    const query = params.query;
    const [search, setSearch] = useState(query);

   
async function fetchData(currentPage, search = null) {
  
    axios.get(baseSearchURL, {
        params: {
            api_key:apiKey,
            page: currentPage,
            query: search,
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
    }      

        useEffect(() => {
            fetchData(page, search);
        }, [fetchData, page, search]);
        
        const handleChange = (event, value) => {
            setPage(value);
            fetchData(value, search);
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            fetchData(page, search);
        };

    if (error) {
        return( <div className="error"> <h2>{ error }</h2> </div>)
    } else if (movies) {
        const items = movies.map((movie, index) =>
        <div key={index} className="movie">
        <img src={imgBaseURL + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <Link to={"/movie/" + movie.id}>More</Link>
        </div>
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
            <input type="submit" value="Search" />
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

export default SearchList;