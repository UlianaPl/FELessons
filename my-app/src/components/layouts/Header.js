import MainMenu from "../nav/MainMenu";
import SearchPopup from "./SearchPopUp";
import {useState} from "react";
import logo from "../../img/logo.png"
import heart from "../../img/svg/heart.svg"
import NavWithImg from "../nav/NavWithImg";
import { Link } from 'react-router-dom';
import instagram from "../../img/insta.png";
import facebook from "../../img/fb.png";
import twitter from "../../img/twit.png";

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
const linksSocial = {
  class: 'social',
  links: [
    {
      link: "",
      path: "/",
      img: instagram,
    },
    {
      link: "",
      path: "/",
      img: facebook,
    },
    {
      link: "",
      path: "/",
      img: twitter,
    },
  ]
}

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
         <Link className="logo" to={"/"}>
           <img src={logo} alt="logo"/>
         </Link>
         <MainMenu links={links}/>
         <NavWithImg links={linksSocial} class={linksSocial.class}/>
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