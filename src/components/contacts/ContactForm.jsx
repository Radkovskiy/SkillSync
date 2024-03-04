
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { addContact, setName, setNumber } from '../../redux/contactsSlice/contactsSlice';
import { newContactData } from '../../redux/contactsSlice/contactsSelectors';
import { useState } from 'react';
import { postContactThunk } from '../../redux/thunk';

const FormWrapp = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  
  padding: 20px 40px 20px 40px;
`


const ContactForm = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value)
    }

    if (name === 'number') {
      setNumber(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isEmptyInputValue = name.trim() && number.trim()

    if (isEmptyInputValue) {
      const newContact = {
        name,
        number,
      }
      dispatch(postContactThunk(newContact))
      reset()
    } else {
      alert("Заполни оба поля!")
      return
    }
  }

  const reset = () => {
    setName('')
    setNumber('')
  }

  return (
    <>
      <FormWrapp
        onSubmit={handleSubmit}>
        Имя
        <input
          className='input contactInput'
          type="text"
          name='name'
          value={name}
          onChange={handleChange} />
        Телефон
        <input
          className='input contactInput'
          type="tel"
          name='number'
          pattern="[0-9+]+"
          value={number}
          onChange={handleChange} />
        <button
          type='submit'
          className='button'>
          Создать
        </button>
      </FormWrapp>
    </>
  )
}

export default ContactForm