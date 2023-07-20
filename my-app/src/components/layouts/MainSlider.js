import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const baseURL = 'https://api.themoviedb.org/3/discover/movie';
const apiKey = '1e79267383f70ef8a56646ec52d362c1';
const imgBaseURL = "https://image.tmdb.org/t/p/w500";

function MainSlider() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(baseURL, {
                    params: {
                        api_key: apiKey,
                        page: 1,
                    },
                });
                setMovies(response.data.results);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return (
            <div className="error">
                <h2>{error}</h2>
            </div>
        );
    } else if (movies.length > 0) {
        const items = movies
            .slice(0, 6) // Limit to 6 movies
            .map((movie, index) => (
                <SwiperSlide key={index}>
                    <Link to={"/movie/" + movie.id}>
                        <img src={imgBaseURL + movie.poster_path} alt={movie.title} />
                    </Link>
                </SwiperSlide>
            ));

        return (
            <Swiper 
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={50} 
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')} >
                {items}
            </Swiper>
        );
    } else {
        return null;
    }
}

export default MainSlider;