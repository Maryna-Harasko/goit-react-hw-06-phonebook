// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { filterReducer } from "./filter/filterReducer";
import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactsReducer } from "./contacts/reducer";

const enhancer = devToolsEnhancer();

const rootReducer = combineReducers({
  contacts: contactsReducer,
})

export const store = createStore(rootReducer, enhancer)

// const rootReducer = combineReducers({
//   // contacts: contactsReducer,
//   filter: filterReducer,
// });
