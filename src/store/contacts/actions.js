import { ADD_CONTACT } from "./constants";
import { REMOVE_CONTACT } from "./constants";

export const addContacts = (data) =>{
  return{
    type: ADD_CONTACT,
    payload: data,
  }
}


export const removeContact = (id) =>{
  return{
    type: REMOVE_CONTACT,
    payload: id,
  }
}