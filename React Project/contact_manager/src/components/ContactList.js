import ContactCard from "./ContactCard"


export default function ContactList(props) {

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }


    return (
        <div className="ui celled list">{props.contacts.map(contact =>
            <ContactCard contact={contact} onDelete={deleteContactHandler} key={contact.id} />
        )}</div>
    )
}
