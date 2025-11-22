import Header from "./Header"
import api from "./api/contacts.js"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import '../style/App.css';
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"
import ContactDetails from "./ContactDetails";


function App() {

  const [contacts, setContacts] = useState([]);

  const removeContact = async (id) => {
    await api.delete(`/contacts/${id}`);
    const contactCopy = contacts.filter((contact) => contact.id !== id);
    setContacts(contactCopy);
  }

  const addContainerHandler = async (contact) => {
    const request = {
      id: Date.now(),
      ...contact,
    }
    const response = await api.post("/contacts", request);
    setContacts((prev) => [...prev, response.data]);

  }

  //Retrieve contacts
  const retrieverContacts = async () => {
    const response = await api.get("/contacts")
    console.log(response);
    return response.data;
  }
  useEffect(() => {
    const getAllContact = async () => {
      const allContact = await retrieverContacts();
      if (allContact) {
        setContacts(allContact);
      }
    }
    getAllContact();
  }, [])





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
