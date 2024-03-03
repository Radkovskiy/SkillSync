import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
import { addTodo } from '../../fetchAPI';
import { getTodosThunk,  postTodoThunk } from '../../redux/thunk';

const FormWrapp = styled.form`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;

  padding: 20px;
`
const NameInput = styled.input`
  margin-right: 10px;
`
const InputDescription = styled.textarea`
  min-width: 275px;
  min-height: 50px;
  max-width: 360px;
  max-height: 110px;
  margin-bottom: 10px;
  border-radius: 10px;
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    const isEmptyInputValue = name.trim() && description.trim()

    if (isEmptyInputValue) {
      const newTodo = {
        name,
        description,
        completed: false
      }
      dispatch(postTodoThunk(newTodo))
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
    <FormWrapp
      onSubmit={handleSubmit}>
      <NameInput
        className='inputName input'
        type='text'
        name='name'
        onChange={handleChange}
        value={name}
      />
      <InputDescription
        className='input'
        type='text'
        name='description'
        onChange={handleChange}
        value={description}
      />
      <button
        className='button'
        type='submit'>
        Создать
      </button>
    </FormWrapp>
  )
}

export default TodoForm