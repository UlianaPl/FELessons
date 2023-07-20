import {useEffect} from "react";
import wellcome from "../../img/wellcome.png";

function About () {
    useEffect(() => {
        document.title = 'About Page';
    },[]);

    return (
        <div className="about container">
            <div className="content">
                <div>
                    <img src={wellcome} alt="wellcome"/>
                </div>
                <div>
            <h2>Welcome to the About Page!</h2>
            At More.tv, we are passionate about all things film. We believe in the power of storytelling and the magic that movies bring to our lives. Our platform is dedicated to providing film enthusiasts like you with a unique and immersive cinematic experience.
            Discover a vast collection of films spanning various genres, from timeless classics to the latest blockbusters. Immerse yourself in captivating narratives, explore diverse cultures, and embark on unforgettable journeys through the art of cinema.
            Our team of dedicated film aficionados carefully curates the content available on our platform to ensure a rich and diverse selection. We strive to bring you a combination of critically acclaimed masterpieces, hidden gems, and thought-provoking independent films. Whether you're a casual viewer or a dedicated cinephile, there's something for everyone to enjoy.
            With our user-friendly interface, navigating through our extensive film library is a breeze. Find your favorite films, discover new releases, and create personalized watchlists to curate your own cinematic journey. Dive into our intuitive search and recommendation features, designed to help you explore films that align with your unique preferences and interests.
            Join our vibrant film community and connect with fellow movie lovers from around the globe. Engage in lively discussions, share your thoughts and recommendations, and stay up-to-date with the latest industry news and trends. At [Company Name], we believe in the power of community and the shared love for film.
            Whether you're seeking entertainment, inspiration, or simply a delightful escape, we invite you to embark on a cinematic adventure with us. Explore, discover, and celebrate the magic of film on our platform. Sit back, relax, and let the movies transport you to new worlds, evoke emotions, and leave a lasting impact.
            Thank you for being a part of our film-loving community. We look forward to sharing many unforgettable film experiences with you.
            Lights, camera, action!
            <p>More.tv TEAM</p>
                </div>
            </div>
        </div>
    )
}

export default About;