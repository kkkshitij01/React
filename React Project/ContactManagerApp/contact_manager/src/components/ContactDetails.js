import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import user from "../images/user.png"
export default function ContactDetails() {
    const { state } = useLocation();
    console.log(state);

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{state.name}</div>
                    <div className="description">{state.email}</div>
                </div>
            </div>
            <div class="ui center aligned container">
                <Link to={"/"}>
                    <button class="ui button blue">Back to ContactList</button>
                </Link>
            </div>
        </div>
    )
}
