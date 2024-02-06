import React from 'react'
import { useDispatch } from 'react-redux'



const SearchBar = () => {
  const dispatch = useDispatch()

  const onFilter = ({ target: { value } }) => {
    dispatch({
      type: 'filterByValue',
      payload: {
        value
      }
    })
  }


  return (
    <div>
      <p>Поиск</p>
      <input
        onChange={onFilter}
        type="text" />
    </div>
  )
}

export default SearchBar