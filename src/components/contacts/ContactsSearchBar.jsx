import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const SearchWrapp = styled.div`
  padding: 10px 40px;
`

const ContactsSearchBar = () => {
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
    <SearchWrapp>
      <p>Поиск</p>
      <input
        className='input'
        onChange={onFilter}
        type="text" />
    </SearchWrapp>
  )
}

export default ContactsSearchBar