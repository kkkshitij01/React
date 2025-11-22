import user from "../images/user.png"
import { Link } from "react-router-dom"

export default function ContactCard({ contact, onDelete }) {
    return (
        <div className="item  ">
            <img className="ui avatar image" src={user} alt="userImg" />
            <div className="content">
                <Link to={{ pathname: `/contact/${contact.id}` }} state={contact}>
                    <div className="header">{contact.name}</div>
                    <div style={{ color: "black" }}>{contact.email}</div>
                </Link>
            </div>

            <i
                className="right floated  trash alternate icon "
                style={{ color: "red", marginTop: "6px" }}
                onClick={() => onDelete(contact.id)}
            />
            <i
                className="right floated  edit alternate icon "
                style={{ color: "blue", marginTop: "6px", marginRight: "10px" }}
                onClick={() => onDelete(contact.id)}
            />
        </div >
    );
}
