import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'store/contacts/selectors';
import { addContacts } from 'store/contacts/reducer';
import { nanoid } from 'nanoid';
import {
  FormContainer,
  FormEl,
  FormLabel,
  FormInput,
  FormButton,
} from './FormContact.styled';

export const FormContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const dataContacts = useSelector(getContacts);

  const listenerForm = event => {
    event.preventDefault();
    const isExist = dataContacts.some(
      ({ name }) => name.toLowerCase() === event.target.name.value.toLowerCase()
    );
    if (isExist) {
      alert(`${event.name} is already in contacts.`);
      return;
    }
    dispatch(addContacts({ id: nanoid(), name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer>
      <FormEl onSubmit={listenerForm}>
        <FormLabel>
          Name{' '}
          <FormInput
            type="text"
            name="name"
            placeholder="Please enter name"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          Number{' '}
          <FormInput
            type="tel"
            name="number"
            placeholder="Please enter number"
            value={number}
            onChange={({ target: { value } }) => setNumber(value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </FormEl>
    </FormContainer>
  );
};
