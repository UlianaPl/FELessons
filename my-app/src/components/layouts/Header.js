import MainMenu from "../nav/MainMenu";
import Search from "../layouts/Search";
import {useState} from "react";
import logo from "../../img/logo.png"

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

    function toggleBurger () {
        setActive(!isActive);
    }
    return (
     <header className={isActive ? 'active container' : 'container'}>
        <div className="logo">
            <img src={logo} alt="logo"></img>
        </div>
        <MainMenu links={links}/>
        <div className="search">
            <Search />
        </div>
        <div className={isActive ? 'burger-menu active' : 'burger-menu'}
             onClick={toggleBurger}
             >
            <span></span>
            <span></span>
            <span></span>
        </div>
        </header>
    )
 }
 
 export default Header;