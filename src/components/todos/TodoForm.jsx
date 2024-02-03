import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const NameInput = styled.input`
margin-right: 10px;
`


const TodoForm = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value)
    }

    if (name === 'description') {
      setDescription(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isEmptyInputValue = name.trim() && description.trim()

    if (isEmptyInputValue) {
      dispatch({
        type: 'addTodo',
        payload: {
          name,
          description,
          completed: false,
          id: uuidv4()
        }
      })
      reset()
    } else {
      alert("Заполни оба поля!")
    }
  }

  const reset = () => {
    setName('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <NameInput
        type='text'
        name='name'
        onChange={handleChange}
        value={name}
      />
      <input
        type='text'
        name='description'
        onChange={handleChange}
        value={description}
      />
      <button type='submit'>
        Создать
      </button>
    </form>
  )
}

export default TodoForm