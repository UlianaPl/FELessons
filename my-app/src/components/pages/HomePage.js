import {useEffect} from "react";
import MainSlider from "../layouts/MainSlider";


function Home () {
    useEffect(() => {
        document.title = 'Home Page';
    },[]);
    
    return (
        <div className='home'>
            <MainSlider />
        </div>
    )
}

export default Home;