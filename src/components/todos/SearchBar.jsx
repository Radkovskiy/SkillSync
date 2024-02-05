import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const SearchText = styled.p`
  color: #BFB4AA;
  
`


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
      <SearchText className='search'>Поиск</SearchText>
      <input
        className='searchInput input'
        type='text'
        onChange={onFilter}
      />
    </div>
  )
}

export default SearchBar