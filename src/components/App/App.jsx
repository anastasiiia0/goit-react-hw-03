import { useState, useEffect } from 'react';

// import contactsCollection from '../../contacts.json';
import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts =
      JSON.parse(window.localStorage.getItem('saved-contacts')) || {};
    return savedContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevValues => {
      return [...prevValues, newContact];
    });
  };

  const deleteContact = idToDelete => {
    setContacts(prevValues => {
      return prevValues.filter(value => value.id !== idToDelete);
    });
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}
