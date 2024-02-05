import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';


const ContactForm = () => {
  const dispatch = useDispatch()
  const { contacts: { newName, newNumber } } = useSelector(state => state);

  const handleChange = ({ target: { value } }, type) => {
    dispatch({
      type,
      payload: { [type === 'setName' ? 'name' : 'number']: value }
    });
    /*     switch (type) {
          case 'setName':
            dispatch({
              type: 'setName',
              payload: {
                name: value
              }
            })
            break;
    
          case 'setNumber':
            dispatch({
              type: 'setNumber',
              payload: {
                number: value
              }
            })
            break;
    
          default:
            break;
        } */
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isEmptyInputValue = newName.trim() && newNumber.trim()

    if (isEmptyInputValue) {
      dispatch({
        type: 'addContact',
        payload: {
          name: newName,
          number: newNumber,
          id: uuidv4()
        }
      })
    } else {
      alert("Заполни оба поля!")
      return
    }


  }

  return (
    <>
      <form
        onSubmit={handleSubmit}>
        <input
          className='input'
          type="text"
          name='name'
          value={newName}
          onChange={e => handleChange(e, 'setName')} />
        <input
          className='input'
          type="tel"
          name='number'
          pattern="[0-9+]+"
          value={newNumber}
          onChange={e => handleChange(e, 'setNumber')} />
        <button
          type='submit'
          className='button'>
          Создать
        </button>
      </form>
    </>
  )
}

export default ContactForm