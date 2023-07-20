import { Link } from 'react-router-dom';
import NavWithImg from "../nav/NavWithImg";
import instagram from '../../img/insta.png';
import facebook from '../../img/fb.png';
import twitter from '../../img/twit.png';
import logo from '../../img/logo.png';

const currentYear = new Date().getFullYear();

const links = {
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
const email = {
    mail:'more@film.ua',
    description:'Immediate response',
}
const address = {
    title:'',
    description:'',
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