import {useEffect} from "react";
import ContactForm from "../form/ContactForm";

function Contacts () {
    useEffect(() => {
        document.title = 'Contacts Page';
    },[]);

    return (
        <div className={'contact-page container'}>
            <h2>Contacts Page:</h2>
            <div className={'content'}>
                <p>We are open for cooperation and any questions</p>             
                <p>Address:79000 Lviv</p>
                <p>User support: support@more.tv</p>
                <p>Tel.:+9 (495) 941-64-00</p>
                <p>Marketing cooperation:marketing@more.tv</p>
                <p>Public relations and subscription to our news:pr@more.tv</p>
                <p>Partnership and distribution:partners@more.tv</p>
                <p>Purchasing and production of content:content@more.tv</p>
                <p>Contact us:</p>
        </div>
            <ContactForm />
        </div>
    )
}

export default Contacts;