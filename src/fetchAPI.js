// import axios from "axios";
// import { getTodosThunk } from "./redux/thunk";

// export const instance = axios.create({
//   baseURL: 'https://65db89083ea883a15291e054.mockapi.io/skillsync',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
// })

// export const addTodo = async (newTodo) => {
//   try {
//     const body = JSON.stringify(newTodo)
//     const data = await instance.post('todos', body)
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }

/* export const addTodoDefaultFetch = async (newTodo) => {
  fetch('https://65db89083ea883a15291e054.mockapi.io/skillsync/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTodo)
  }).then(r => {
    if (!r.ok) {
      throw new Error(`HTTP error! Status: ${r.status}`);
    }
    return r.json()
  }).then(r => {
    // getTodosThunk()
    console.log('Success:', r);
  })
    .catch(error => {
      console.error('Error:', error);
    });
} */