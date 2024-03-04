import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteContacts,
  deleteTodos,
  getContacts,
  getTodos,
  postContacts,
  postTodos,
  putTodos
} from "../fetchAPI";

export const getTodosThunk = createAsyncThunk('todos/getTodos', getTodos)
export const postTodoThunk = createAsyncThunk('todos/addTodo', postTodos)
export const putTodoThunk = createAsyncThunk('todos/editTodo', putTodos)
export const deleteTodoThunk = createAsyncThunk('todos/deleteTodo', deleteTodos)

export const getContactsThunk = createAsyncThunk('contacts/getContacts', getContacts)
export const postContactThunk = createAsyncThunk('contacts/addContact', postContacts)
export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', deleteContacts)