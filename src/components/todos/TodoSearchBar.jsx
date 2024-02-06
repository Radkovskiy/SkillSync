import { useDispatch } from 'react-redux'



const TodoSearchBar = () => {
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
        className='searchInput input'
        type='text'
        onChange={onFilter}
      />
    </div>
  )
}

export default TodoSearchBar