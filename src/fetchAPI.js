import axios from "axios";

const instance = axios.create({
  baseURL: 'https://65db89083ea883a15291e054.mockapi.io/skillsync',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
export const getTodos = async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get('todos')
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
}
export const postTodos = async (newTodo, { rejectWithValue }) => {
  try {
    const body = JSON.stringify(newTodo)
    const { data } = await instance.post('todos', body)
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
}
export const putTodos = async (body, { rejectWithValue }) => {
  try {
    const { data } = await instance.put(`todos/${body.id}`, body)
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
}
export const deleteTodos = async (id, { rejectWithValue }) => {
  try {
    const { data } = await instance.delete(`todos/${id}`)
    console.log('delete data :>> ', data);
    return id
  } catch (error) {
    return rejectWithValue(error)
  }
}

export const getContacts = async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get('contacts')
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
}
export const postContacts = async (newContact, { rejectWithValue }) => {
  try {
    const body = JSON.stringify(newContact)
    const { data } = await instance.post('contacts', body)
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
}
export const deleteContacts = async (id, { rejectWithValue }) => {
  try {
    const { data } = await instance.delete(`contacts/${id}`)
    console.log('delete data :>> ', data);
    return id
  } catch (error) {
    return rejectWithValue(error)
  }
}