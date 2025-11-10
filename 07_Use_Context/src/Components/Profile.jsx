import { useContext } from "react"
import UserContext from "../context/userContext";

export default function Profile() {
    const { user, setUser } = useContext(UserContext);
    if (!user) {
        return <div>LOGIN FIRST</div>
    }
    return <div>Wellcome {user.username}</div>
}
