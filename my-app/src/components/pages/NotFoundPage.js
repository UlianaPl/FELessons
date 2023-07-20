import {useEffect} from "react";

function NotFound () {

    useEffect(() => {
        document.title = '404';
    },[]);
    
    return (
        <div className='not-found'>
            <h2>404 Page</h2>
            <p>Oops!...I did it again</p>
        </div>
    )
}

export default NotFound;