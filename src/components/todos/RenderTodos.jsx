import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { statusFilters } from './constants'
import { useState } from 'react'


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
background-color: #eb8787;
right: 10px;
top: 10px;
`

const onFilterTodosByValue = (todos, searchValue) => {
  return todos.filter(todo =>
    todo.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    todo.description.toLowerCase().includes(searchValue.toLowerCase()))
}

const onFilterTodosByStatus = (todos, status) => {
  switch (status) {
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
  const { todoArr, searchValue, statusFilter } = useSelector((state) => state)
  const [editingTodo, setEditingTodo] = useState(null);

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

  const changeValue = (e, id) => {
    const value = e.currentTarget.value
    if (!value.length) return
    dispatch({
      type: 'editDescription',
      payload: {
        value, id
      }
    })
  }

  const filteredTodosByValue = onFilterTodosByValue(todoArr, searchValue)
  const visibleTodos = onFilterTodosByStatus(filteredTodosByValue, statusFilter)

  return (
    <TodoList>
      {visibleTodos.map(({ name, description, id, completed }) => (
        <TodoItem key={id}>
          <TodoName>{name}</TodoName>
          <p
            onDoubleClick={() => setEditingTodo(id)}>
            {editingTodo === id ?
              <input
                placeholder={`${description}`}
                onBlur={e => {
                  setEditingTodo(null)
                  changeValue(e, id)
                }} />
              : description}
          </p>
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