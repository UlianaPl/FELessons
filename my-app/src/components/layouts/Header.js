import MainMenu from "../nav/MainMenu";
import SearchPopup from "./SearchPopUp";
import {useState} from "react";
import logo from "../../img/logo.png"
import heart from "../../img/svg/heart.svg"
import { Link } from 'react-router-dom';

const links = [
        {
            link: "Home",
            path: "/"
        },
        {
            link: "Movies",
            path: "/movies"
        },
        {
            link: "About",
            path: "/about"
        },
        {
            link: "Contacts",
            path: "/contacts"
        },
    ];

function Header () {
    const [isActive, setActive] = useState(false);
    const [liked, setLiked] = useState(() => {
    let items = [];
    for(let i=0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (!key.indexOf('movie-')) {
        items.push(Number(localStorage.getItem(key)));
      }
    }
    return items;
  });

    function toggleBurger () {
        setActive(!isActive);
    }
    return (
     <header className={isActive ? 'active' : ''}>
       <div className="container">
         <img className="logo" src={logo} alt="logo"/>
         <MainMenu links={links}/>
         <div className="btn">
           <SearchPopup />
           <Link to="/wishlist">
             <img src={heart} alt="heart"/>
             {liked.length}
           </Link>
         </div>
         <div
             className={isActive ? 'burger-menu active' : 'burger-menu'}
             onClick={toggleBurger}
         >
           <span></span>
           <span></span>
           <span></span>
         </div>
       </div>
        </header>
    )
 }

 export default Header;