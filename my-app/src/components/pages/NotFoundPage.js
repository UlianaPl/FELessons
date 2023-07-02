import {useEffect} from "react";

function NotFound () {

    useEffect(() => {
        document.title = '404';
    },[]);
    
    return (
        <div>404 Page</div>
    )
}

export default NotFound;