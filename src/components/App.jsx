import { useEffect, useState } from 'react';
import { FormContact } from './FormContact/FormContact';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Container, TitleOne, TitleTwo } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'store/contacts/selectors';
import { addContacts } from 'store/contacts/actions';
import { removeContact } from 'store/contacts/actions';

const initialStates = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

const getInitialContacts = () => {
  const contacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contacts);

  if (parsedContacts && parsedContacts.length !== 0) {
    return parsedContacts;
  }
  return initialStates;
};

export const App = () => {
  // const [contacts, setContacts] = useState(getInitialContacts());
  const [filter, setFilter] = useState('');


  const dispatch = useDispatch();
  const dataContacts = useSelector(getContacts);
  console.log(dataContacts)

  // const handleClick = () =>{
  //   dispatch(addContacts(5))
  // }




  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const listenerForm = data => {
    console.log(dataContacts)
    const isExist = dataContacts.some(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );
    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    dispatch(addContacts({ id: nanoid(), ...data }))
  };

  const deleteContact = id => {
    console.log(id)
    dispatch(removeContact(id))
    // setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };
  
  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return dataContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  // const filteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  return (
    <Container>
      <TitleOne>Phonebook</TitleOne>
      <FormContact onSubmit={listenerForm} />
      <Filter value={filter} onChange={changeFilter} />
      <TitleTwo>Contacts</TitleTwo>
      <ContactList
        contacts={filteredContacts()}
        deleteContact={deleteContact}
      />
    </Container>
  );
};
