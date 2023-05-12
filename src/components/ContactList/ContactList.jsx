import React from "react";
import { ContactItem } from "components/ContactItem/ContactItem";
import PropTypes from 'prop-types';
import { ContactsList, ListItem } from "./ContactList.styled";

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactsList>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
        <ContactItem 
        name={contact.name}
        number={contact.number}
        onDelete={() => deleteContact(contact.id)}
        />
        </ListItem>
      ))}
    </ContactsList>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};