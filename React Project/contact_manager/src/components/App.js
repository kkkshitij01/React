import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import '../style/App.css';
import { useEffect, useState } from "react";

function App() {

  const [contacts, setContacts] = useState([]);

  const removeContact = (id) => {
    let contactCopy = contacts.filter((contact) => contact.id !== id);
    setContacts(contactCopy);
  }

  const addContainerHandler = (contact) => {
    setContacts((prev) => [...prev, { id: Date.now(), ...contact }]);
    console.log(contact)

  }
  useEffect(() => {
    let retriveData = localStorage.getItem("example");
    if (retriveData) {
      setContacts(JSON.parse(retriveData));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("example", JSON.stringify(contacts));
  }, [contacts])





  return (
    < div className="ui container">
      <Header />
      <AddContact contactDataToParent={addContainerHandler} />
      <ContactList contacts={contacts} getContactId={removeContact} />
    </div>
  );
}

export default App;
