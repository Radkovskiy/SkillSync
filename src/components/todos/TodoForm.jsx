import React, { useState } from 'react'

const TodoForm = () => {
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

  return (
    <form onSubmit={null}>
      <input type='text'
        name='name'
        onChange={handleChange}
      />
      <input
        type='text'
        name='description'
        onChange={handleChange}
      />
      <button type='submit'>
        Создать
      </button>
    </form>
  )
}

export default TodoForm