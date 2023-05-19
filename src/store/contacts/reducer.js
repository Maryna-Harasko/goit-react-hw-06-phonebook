import { ADD_CONTACT } from "./constants";
import { nanoid } from "nanoid";

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
    default: 
      return state;
  }
}