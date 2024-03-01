import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: 'https://65db89083ea883a15291e054.mockapi.io/skillsync',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export const getTodosThunk = createAsyncThunk('todos/getTodos', async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get('todos')
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const postTodoThunk = createAsyncThunk('todos/addTodo', async (newTodo, { rejectWithValue }) => {
  try {
    const body = JSON.stringify(newTodo)
    const { data } = await instance.post('todos', body)
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const deleteTodoThunk = createAsyncThunk('todos/deleteTodo', async (id, { rejectWithValue }) => {
  try {
    const { data } = await instance.delete(`todos/${id}`)
    console.log('delete data :>> ', data);
    return id
  } catch (error) {
    return rejectWithValue(error)
  }
})

/* export const addTodoThunk = createAsyncThunk('todos/addTodo', async (body) =>
  await instance.post('todos', body)) */
