import { FormContact } from './FormContact/FormContact';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, TitleOne, TitleTwo } from './App.styled';

export const App = () => {

  return (
    <Container>
      <TitleOne>Phonebook</TitleOne>
      <FormContact/>
      <Filter/>
      <TitleTwo>Contacts</TitleTwo>
      <ContactList/>
    </Container>
  );
};
