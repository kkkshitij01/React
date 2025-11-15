import user from "../images/user.png"
export default function ContactCard({ contact, onDelete }) {
    return (
        <div className="item" >
            <img className="ui avatar image" src={user} alt="userImg" />
            <div className="content">
                <div className="header">{contact.name}</div>
                <div>{contact.email}</div>
            </div>
            <i style={{ color: "red" }} className="trash alternate outline icon"
                onClick={() => { onDelete(contact.id) }}
            />
        </div>
    )
}
