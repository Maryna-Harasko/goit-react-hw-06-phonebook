import { FormContact } from './FormContact/FormContact';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, TitleOne, TitleTwo } from './App.styled';

// const initialStates = [
//   { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//   { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//   { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//   { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
// ];

// const getInitialContacts = () => {
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);

//   if (parsedContacts && parsedContacts.length !== 0) {
//     return parsedContacts;
//   }
//   return initialStates;
// };

export const App = () => {
  // const [contacts, setContacts] = useState(getInitialContacts());
  // const [filter, setFilter] = useState('');

  // const dataContacts = useSelector(getContacts);

  // const handleClick = () =>{
  //   dispatch(addContacts(5))
  // }




  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);


  // const deleteContact = id => {
  //   dispatch(removeContact(id))
  // };

  // const changeFilter = event => {
  //   dataFilter(event.currentTarget.value);
  // };
  
  // const filteredContacts = () => {
  //   // const normalizedFilter = dataFilter.toLowerCase();
  //   dispatch(filterContact())
  //   // return dataContacts.filter(contact =>
  //   //   contact.name.toLowerCase().includes(normalizedFilter)
  //   // );
  // };
  
  // const filteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  return (
    <Container>
      <TitleOne>Phonebook</TitleOne>
      <FormContact/>
      <Filter/>
      <TitleTwo>Contacts</TitleTwo>
      <ContactList
        // contacts={filteredContacts()}
        // deleteContact={deleteContact}
      />
    </Container>
  );
};
