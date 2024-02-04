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
      Поиск
      <input
        type='text'
        onChange={onFilter}
      />
    </div>
  )
}

export default SearchBar