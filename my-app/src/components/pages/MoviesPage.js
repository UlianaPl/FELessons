import MoviesList from "../layouts/MoviesList";
import {useEffect} from "react";

function Movies () {
    
    useEffect(() => {
        document.title = 'Movies';
    },[]);
    
    return (
        <MoviesList />
    )
}

export default Movies;








/*import {useEffect} from "react";

function Movies () {
    useEffect(effect: () => {
       document
    }, deps[]);
}*/