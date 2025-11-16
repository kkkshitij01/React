import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import '../style/App.css';
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"
import ContactDetails from "./ContactDetails";


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
    <div className="ui container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ContactList contacts={contacts} getContactId={removeContact} />}
        />
        <Route
          path="/add"
          element={<AddContact contactDataToParent={addContainerHandler} />}
        />
        <Route path="/contact/:id" element={<ContactDetails />} />
      </Routes>
    </div>
  );

}

export default App;
