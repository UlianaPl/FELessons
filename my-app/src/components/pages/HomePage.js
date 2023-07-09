import {useEffect} from "react";
import MainSlider from "../layouts/MainSlider";

function Home () {
    useEffect(() => {
        document.title = 'Home Page';
    },[]);
    
    return (
        <div>
            <MainSlider />
        </div>
    )
}

export default Home;