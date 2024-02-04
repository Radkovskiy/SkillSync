import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { statusFilters } from './constants'


const TodoList = styled.ul`
width: 1340px ;
display: flex;
flex-wrap: wrap;
/* background-color: darkgray; */
/* flex-direction: column; */
gap: 20px;
padding: 20px;
margin-left: auto;
margin-right: auto;
`

const TodoItem = styled.li`
position: relative;
background-color: #fff9de;
width: 420px;
/* margin-bottom: 20px; */
border-radius: 10px;
padding: 25px;
`

const TodoName = styled.p`
margin-bottom: 20px;
font-weight: bold;
`

const DeleteBtn = styled.button`
position: absolute;
width: 20px;
height: 20px;
border-radius: 7px;
background-color: #7186e4;
right: 10px;
top: 10px;
`

const onFilterTodosByValue = (todos, searchValue) => {
  return todos.filter(todo =>
    todo.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    todo.description.toLowerCase().includes(searchValue.toLowerCase()))
}

const getVisibleTodos = (todos, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return todos.filter(todo => !todo.completed);
    case statusFilters.completed:
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};


const RenderTodos = () => {
  const dispatch = useDispatch()
  const { todoArr, searchValue, status } = useSelector((state) => state)
  console.log('todoArr :>> ', todoArr);

  const handleRemove = (id) => {
    dispatch({
      type: 'removeTodo',
      payload: {
        id
      }
    })
  }

  const handleToggle = (id) => {
    dispatch({
      type: `toggleStatus`,
      payload: {
        id
      }
    })
  }

  const filteredTodosByValue = onFilterTodosByValue(todoArr, searchValue)
  const visibleTodos = getVisibleTodos(filteredTodosByValue, status)

  return (
    <TodoList>
      {visibleTodos.map(({ name, description, id, completed }) => (
        <TodoItem key={id}>
          <TodoName>{name}</TodoName>
          <p>{description}</p>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => handleToggle(id)}
          />
          <DeleteBtn onClick={() => handleRemove(id)}></DeleteBtn>
        </TodoItem>
      ))}
    </TodoList>
  )
}

export default RenderTodos