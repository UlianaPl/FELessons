import SingleMovie from "../layouts/SingleMovie";
import {useEffect} from "react";

function Movies () {
    useEffect(() => {
        document.title = 'Movie';
    },[]);

    return (
        <SingleMovie />
    )
}

export default Movies;