import { Link } from 'react-router-dom';
import NavWithImg from "../nav/NavWithImg";
import instagram from '../../img/instagram.png';
import facebook from '../../img/facebook.png';
import twitter from '../../img/twitter.png';
import logo from '../../img/logo.png';
const currentYear = new Date().getFullYear();

const links = {
    class: 'social',
    links: [
        {
            link: "instagram",
            path: "/",
            img: instagram,
        },
        {
            link: "facebook",
            path: "/",
            img: facebook,
        },
        {
            link: "twitter",
            path: "/",
            img: twitter,
        },
    ]
}
const email = {
    mail:'more@film.ua',
    description:'Immediate response',
}
const address = {
    title:'Main location:',
    description:'79000 Lviv',
}
const phone = {
    phone:'+380999999999',
    description:'Immediate response',
}

function footer () {
   return (
    <footer>
        <div className={'footer-content container'}>
          <Link className={'logo'} to={"/"}>
            <img src={logo} alt="logo" />
            <h2>What is Lorem Ipsum?</h2>
          </Link>
           <div className={'address'}>
            <h2>{address.title}</h2>
            <p>{address.description}</p>
           </div>
           <NavWithImg links={links} class={links.class}/>
        </div>
        <div className={'footer-copyright'}>
        © { currentYear } <Link to={'/'}>More.tv</Link> All Rights Reserved.
      </div>
    </footer>
   )
}

export default footer;