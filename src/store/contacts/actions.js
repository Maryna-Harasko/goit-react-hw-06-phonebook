import { ADD_CONTACT } from "./constants"

export const addContacts = (data) =>{
  return{
    type: ADD_CONTACT,
    payload: data,
  }
}