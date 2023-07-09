import SearchList from "../layouts/SearchList";
import {useEffect} from "react";


function SearchPage () {
    
        useEffect(() => {
            document.title = 'Search';
        },[]);

    return (
        <SearchList />
    )
}

export default SearchPage;