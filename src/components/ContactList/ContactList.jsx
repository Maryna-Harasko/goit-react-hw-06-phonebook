import React from "react";
import { ContactItem } from "components/ContactItem/ContactItem";
import { ContactsList, ListItem } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { getContacts } from "store/contacts/selectors";
import { selectFilter } from "store/filter/selector";

export const ContactList = ( ) => {
 
  const dataContacts = useSelector(getContacts);
  const dataFilter = useSelector(selectFilter);

  const filteredContacts = () => {
    const normalizedFilter = dataFilter.toLowerCase();
    console.log(normalizedFilter);
    return dataContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


  return (
    <ContactsList>
      {filteredContacts().map((contact) => (
        <ListItem key={contact.id}>
        <ContactItem 
        id={contact.id}
        name={contact.name}
        number={contact.number}
        />
        </ListItem>
      ))}
    </ContactsList>
  )
}
