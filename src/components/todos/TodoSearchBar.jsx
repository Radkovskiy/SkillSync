import { useDispatch } from 'react-redux'
import { changeFilterValue } from '../../redux/searchValueSlice/searchValueSlice';



const TodoSearchBar = () => {
  const dispatch = useDispatch()

  const onFilter = ({ target: { value } }) => {
    dispatch(changeFilterValue(value));
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