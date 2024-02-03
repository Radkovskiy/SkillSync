import React, { useState } from 'react'
import { useDispatch } from 'react-redux'



const SearchBar = () => {
  const dispatch = useDispatch()
  const [filteredTodos, setFilteredTodos] = useState([]);

  const onFilter = ({ target: { value } }) => {

    dispatch({
      type: 'filter',
      payload: {
        value
      }
    })
  }

  return (
    <div>
      Поиск
      <input
        type='text'
        onChange={onFilter}
      />
    </div>
  )
}

export default SearchBar