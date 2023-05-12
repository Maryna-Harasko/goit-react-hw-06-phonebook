import { useState } from 'react';
import {
  FormContainer,
  FormEl,
  FormLabel,
  FormInput,
  FormButton,
} from './FormContact.styled';

export const FormContact = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer>
      <FormEl onSubmit={handleSubmit}>
        <FormLabel>
          Name{' '}
          <FormInput
            type="text"
            name="name"
            placeholder="Please enter name"
            value={name}
            onChange={event => setName(event.target.value)}
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
            onChange={event => setNumber(event.target.value)}
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
