import ContactCard from "./ContactCard"
import { Link } from "react-router-dom";


export default function ContactList(props) {

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }


    return (
        <div className="main">
            <h2>
                Contact list
                <Link to="/add">
                    <button className="ui right floated button blue">Add Contact</button>
                </Link>
            </h2>
            <div className="ui celled list">{props.contacts.map(contact =>
                <ContactCard contact={contact} onDelete={deleteContactHandler} key={contact.id} />
            )}</div>
        </div>
    )
}
