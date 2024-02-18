import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeFilterValue } from '../../redux/searchValueSlice/searchValueSlice'

const SearchWrapp = styled.div`
  padding: 10px 40px;
`

const ContactsSearchBar = () => {
  const dispatch = useDispatch()

  const onFilter = ({ target: { value } }) => {
    dispatch(changeFilterValue(value))
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