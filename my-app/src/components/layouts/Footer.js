import NavWithImg from "../nav/NavWithImg";
import instagram from '../../img/insta.png';
import facebook from '../../img/fb.png';
import twitter from '../../img/twitter.png';

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

function footer () {
   return (
    <footer><NavWithImg links={links} class={links.class}/></footer>
   )
}

export default footer;