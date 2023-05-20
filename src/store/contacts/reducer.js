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
      // console.log('start', state)
      // const updatedState = state.filter(el => el.id !== String(action.payload));
      // console.log(action.payload);
      // console.log('return',updatedState)
      // return [...updatedState];
      return state.filter(contact => contact.id !== action.payload);
    default: 
      return state;
  }
}