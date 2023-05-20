import React from "react";
import { ContactItem } from "components/ContactItem/ContactItem";
import PropTypes from 'prop-types';
import { ContactsList, ListItem } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { getContacts } from "store/contacts/selectors";
import { removeContact } from "store/contacts/actions";

export const ContactList = ( {deleteContact} ) => {
  
  const dataContacts = useSelector(getContacts)

  return (
    <ContactsList>
      {dataContacts.map((contact) => (
        <ListItem key={contact.id}>
        <ContactItem 
        name={contact.name}
        number={contact.number}
        onDelete={() => deleteContact(removeContact(contact.id))}
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