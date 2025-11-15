import { useState } from "react"


export default function AddContact(prop) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("Enter Valid Inputs")
            return;
        }
        prop.contactDataToParent({ name, email });
        setName("");
        setEmail("");
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="ui main">
            <h2> Add Contact </h2>
            <form className="ui form">
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name || ""} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email || ""} />
                </div>
                <button type="submit" onClick={handleSubmit} className="ui button blue">Add</button>
            </form>
        </div>
    )
}
