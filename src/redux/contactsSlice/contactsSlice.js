import { createSlice } from "@reduxjs/toolkit";
import { PENDING, FULFILLED, REJECTED } from "../../utils/StatusConstants";
import { deleteContactThunk, getContactsThunk, postContactThunk, putContactThunk } from "../thunk";

const initialState = {
  contactsArr: [],
  status: 'init',
  error: ''
}

const handlePendidng = (state) => {
  state.status = PENDING
}

const handleGetFulfilled = (state, { payload }) => {
  state.status = FULFILLED
  state.contactsArr = payload
  state.error = ''
}

const handlePostFulfilled = (state, { payload }) => {
  state.contactsArr = [...state.contactsArr, payload]
  state.status = FULFILLED
}

const handleDeleteFulfilled = (state, { payload }) => {
  state.contactsArr = state.contactsArr.filter(todo => todo.id !== payload)
  state.status = FULFILLED
}

const handleRejected = (state, { payload }) => {
  state.status = REJECTED
  state.error = payload
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContactsThunk.fulfilled, handleGetFulfilled)
      .addCase(postContactThunk.fulfilled, handlePostFulfilled)
      .addCase(deleteContactThunk.fulfilled, handleDeleteFulfilled)
      .addMatcher(action => action.type.endsWith('/pending'), handlePendidng)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
  }
  // reducers: {
  //   addContact(state, action) {
  //     state.contactsArr.push(action.payload);
  //     state.newName = '';
  //     state.newNumber = ''
  //   },
  //   removeContact(state, action) {
  //     state.contactsArr = state.contactsArr.filter(contact => contact.id !== action.payload)
  //     /*       
  //           return {
  //             ...state,
  //             contacts: {
  //               contactsArr: state.contacts.contactsArr.filter(contact =>
  //                 contact.id !== action.payload.id
  //               ),
  //               newName: state.contacts.newName,
  //               newNumber: state.contacts.newNumber
  //             }
  //           } */
  //   },
  //   setName(state, action) {
  //     state.newName = action.payload
  //     /*  
  //      return {
  //        ...state,
  //        contacts: {
  //          ...state.contacts,
  //          newName: action.payload.name
  //        }
  //      } */
  //   },
  //   setNumber(state, action) {
  //     state.newNumber = action.payload
  //   }
  // }
})


export const contactSliceReducer = contactSlice.reducer
export const {
  addContact,
  removeContact,
  setName,
  setNumber
} = contactSlice.actions