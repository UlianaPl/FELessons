import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const baseURL = 'https://api.themoviedb.org/3/movie/';
const apiKey = '1e79267383f70ef8a56646ec52d362c1';
const imgBaseURL = "https://image.tmdb.org/t/p/w500";

const SingleMovie = () => {
    const params = useParams();
    const id = params.id;
    const [movie, setMovies] = useState(null);
    const [error, setError] = useState(null);
   
async function fetchData() {
    axios.get(baseURL + id, {
        params: {
            api_key:apiKey,
        }
    })
            .then(response => {
             setMovies(response.data);   
            })
            .catch(error => {
                setError(error.message);
            })  
        }
        
        useEffect(() => {
            fetchData()
        },);

    if (error) {
        return( <div className="error"> <h2>{ error }</h2> </div>)
    } else if (movie) {
    return (
        <div className="movie">
            <img src={imgBaseURL + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
        </div>
    )
}
};

export default SingleMovie;