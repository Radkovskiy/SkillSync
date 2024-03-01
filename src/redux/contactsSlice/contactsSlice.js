import { createSlice } from "@reduxjs/toolkit";
import { contactsTemplate } from "../templateArrs";

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsArr: contactsTemplate,
    newName: '',
    newNumber: '',
  },
  reducers: {
    addContact(state, action) {
      state.contactsArr.push(action.payload);
      state.newName = '';
      state.newNumber = ''
    },
    removeContact(state, action) {
      state.contactsArr = state.contactsArr.filter(contact => contact.id !== action.payload)
      /*       
            return {
              ...state,
              contacts: {
                contactsArr: state.contacts.contactsArr.filter(contact =>
                  contact.id !== action.payload.id
                ),
                newName: state.contacts.newName,
                newNumber: state.contacts.newNumber
              }
            } */
    },
    setName(state, action) {
      state.newName = action.payload
      /*  
       return {
         ...state,
         contacts: {
           ...state.contacts,
           newName: action.payload.name
         }
       } */
    },
    setNumber(state, action) {
      state.newNumber = action.payload
    }
  }
})


export const contactSliceReducer = contactSlice.reducer
export const {
  addContact,
  removeContact,
  setName,
  setNumber
} = contactSlice.actions