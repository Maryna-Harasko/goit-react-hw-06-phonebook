import { ADD_CONTACT, REMOVE_CONTACT } from "./constants";
import { nanoid } from "nanoid";
import { getContacts } from "./selectors";

const initialState = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = (state=initialState, action) =>{
  switch (action.type){
    case ADD_CONTACT:
      return[
        ...state,
         action.payload];
    case REMOVE_CONTACT:
      const index = state.find((contact) => contact.id !== action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        return [...state]
      }
    default: 
      return state;
  }
}