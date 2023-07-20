import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Pagination from '@mui/material/Pagination/index';
import Stack from '@mui/material/Stack/index';
import Typography from '@mui/material/Typography/index';
import like from "../../img/icon_like.png"
import dislike from "../../img/icon_dislike.png"

const baseURL = 'https://api.themoviedb.org/3/discover/movie';
const apiKey = 'b03d508a9e788070ca877f98f3f8bbba';
const imgBaseURL = "https://image.tmdb.org/t/p/w400";
const genresURL = 'https://api.themoviedb.org/3/genre/movie/list';

function MoviesList() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total_pages, setTotalPages] = useState(1);
  const [genre_ids, setGenreIds] = useState([]);
  const [liked, setLiked] = useState(() => {
    let items = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (!key.indexOf('movie-')) {
        items.push(Number(localStorage.getItem(key)));
      }
    }
    return items;
  });

  async function fetchData(currentPage) {
    axios.get(genresURL, {
      params: {
        api_key: apiKey,
      }
    })
        .then(response => {
          setGenreIds(response.data.genres);
        })
        .catch(error => {
          setError(error.message);
        })
    axios.get(baseURL, {
      params: {
        api_key: apiKey,
        page: currentPage,
      }
    })
        .then(response => {
          setMovies(response.data.results);
          let totalPages = response.data.total_pages
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
    fetchData(page)
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
    fetchData(value);
  };

  const setWishList = (event) => {
    event.preventDefault()
    let id = Number(event.target.attributes.getNamedItem('data-id').value);
    let isFavourited = liked.includes(id)
    if (!isFavourited) {
      let newItem = [...liked, id]
      setLiked(newItem);
      window.localStorage.setItem('movie-' + id, id);
    } else {
      let newItem = liked.filter((savedId) => savedId !== id)
      setLiked(newItem);
      window.localStorage.removeItem('movie-' + id, id);
    }
  }

  if (error) {
    return (<div className="error"><h2>{error}</h2></div>)
  } else if (movies && genre_ids) {

    const items = movies.map((movie, index) => {
      let genre = [];
      let genreids = movie.genre_ids;
      if (genre_ids) {
        for (let i = 0; i < genreids.length; i++) {
          let id = genreids[i];
          for (let q = 0; q < genre_ids.length; q++) {
            let api_id = genre_ids[q].id
            if (id === api_id) {
              genre.push(genre_ids[q].name);
            }
          }
        }
      }

      genre = genre.toString();
      return (
          <div key={index} className="movie">
            <Link to={"/movie/" + movie.id}>
              <img src={imgBaseURL + movie.poster_path}/>
              <h2>{movie.title}</h2>
              <p>{genre}</p>
              <img src={liked.includes(movie.id) ? dislike : like} onClick={setWishList} data-id={movie.id} />
            </Link>
          </div>)
    });
    return (
        <div>
          <div className="movies">{items}</div>
          <Stack spacing={2}>
            <Typography>Page: {page}</Typography>
            <Pagination className={'my-pagination'} count={total_pages} page={page} onChange={handleChange}/>
          </Stack>
        </div>
    )
  }
}

export default MoviesList;