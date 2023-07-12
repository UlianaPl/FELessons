import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const baseURL = 'https://api.themoviedb.org/3/movie/';
const apiKey = '1e79267383f70ef8a56646ec52d362c1';
const imgBaseURL = "https://image.tmdb.org/t/p/w500";

const WishList = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData(id) {
    axios
      .get(baseURL + id, {
        params: {
          api_key: apiKey,
        },
      })
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (!key.indexOf('movie-')) {
        fetchData(localStorage.getItem(key));
      }
    }
  }, []);

  if (error) {
    return (
      <div className="error">
        <h2>{error}</h2>
      </div>
    );
  } else if (movies) {
    const items = movies.map((movie, index) => {
      return (
        <div key={index} className="movie">
          <img src={imgBaseURL + movie.poster_path} alt={movie.title} />
          <h2>{movie.title}</h2>
          <Link to={"/movie/" + movie.id}>More</Link>
          <button onClick={setWishList} data-id={movie.id}>More</button>
        </div>
      );
    });

    return <div className="movies">{items}</div>;
  } else {
    return null;
  }
};

export default WishList;