import axios from "axios";
import {useEffect, useState} from "react";

const baseURL = 'https://api.themoviedb.org/3/discover/movie/';
const apiKey = '1e79267383f70ef8a56646ec52d362c1';
const imgBaseURL = "http://http://image.tmdb.org/t/p/w500";

function MoviesList () {
    const [movies, setMovies] = useState('initialState:null');
    const [error, setError] = useState('initialState:null');
   
async function fetchData() {
    axios.get(baseURL, {
        params: {
            api_key:apiKey,
        }
    })
            .then(response => {
             setMovies(response.data.results);   
            })
            .catch(error => {
                setError(error.message);
            })  
        }
        console.log(error);
        useEffect(() => {
            fetchData()
        },[]);

    if (error) {
        return( <div className="error"> <h2>{ error }</h2> </div>)
    } else if (movies) {
        const items = movies.map((movie, index) =>
        <div key={index} className="movie">
        <img src={imgBaseURL + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        </div>
        );

    return (
        <div className="movies">{ items }</div>
    )
}

}

export default MoviesList;