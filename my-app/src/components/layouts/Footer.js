import NavWithImg from "../nav/NavWithImg";
import instagram from '../../img/insta.png';
import facebook from '../../img/fb.png';
import twitter from '../../img/twitter.png';
import logo from '../../img/logo.png';

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
        <div className={'footer-top container'}>
        <div className={'mail'}>
            <a href={"mailTo:"+ email.mail}>{email.mail}</a>
            <span>{email.description}</span>
        </div>
        <div className={'phone'}>
        <a href={"tel.:" + phone.phone}>{phone.phone}</a>
            <span>{phone.description}</span>
        </div>
        </div>
        <div className={'footer-wrapper'}>
        <div className={'footer-content container'}>
           <img className={'logo'} src={logo} alt="logo"></img>
           <div className={'address'}>
            <h2>{address.title}</h2>
            <p>{address.description}</p>
           </div>
           <NavWithImg links={links} class={links.class}/>
        </div>
        <div className={'footer-copyright'}></div>
        </div>
        </footer>
   )
}

export default footer;