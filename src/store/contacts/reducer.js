import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name:'contacts',
  initialState,
  reducers:{
    addContacts:(state,action)=>{
      state.push(action.payload)
    },
    removeContact:(state,action)=>{
      const index = state.findIndex(contact => contact.id === action.payload)
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  }
});

export const { addContacts, removeContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
