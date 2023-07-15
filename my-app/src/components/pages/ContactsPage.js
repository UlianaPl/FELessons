import {useEffect} from "react";
import ContactForm from "../form/ContactForm";

function Contacts () {
    useEffect(() => {
        document.title = 'Contacts Page';
    },[]);

    return (
        <div className={'contact-page container'}>
            <h2>Contacts Page</h2>
            <ContactForm />
        </div>
    )
}

export default Contacts;