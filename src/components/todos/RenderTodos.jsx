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

display: flex;

background-color:#BFB4AA;

width: 420px;
border-radius: 10px;
padding: 25px 50px;
box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.3);
`
const TodoName = styled.p`
margin-bottom: 20px;
font-weight: bold;
`
const InputEditName = styled.input`
    font-weight: bold;
  font-size: 16px;
`
const CheckboxCompleted = styled.input`
margin-left: auto;
margin-right: 10px;
width: 18px;
`
const DeleteBtn = styled.button`
position: absolute;
width: 20px;
height: 20px;
border-radius: 7px;
background-color: #8C7549;
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
  const { todoArr, searchValue, statusFilter } = useSelector(state => state)
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingEl, setEditingEl] = useState(null);

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

  const changeValue = (e, id, typeEdit) => {
    const value = e.currentTarget.value
    if (!value.length) return

    switch (typeEdit) {
      case 'name':
        dispatch({
          type: 'editName',
          payload: {
            value, id
          }
        });
        break;


      case 'description':
        dispatch({
          type: 'editDescription',
          payload: {
            value, id
          }
        });
        break;

      default:
        break;
    }

  }

  const filteredTodosByValue = onFilterTodosByValue(todoArr, searchValue)
  const visibleTodos = onFilterTodosByStatus(filteredTodosByValue, statusFilter)

  return (
    <TodoList>
      {visibleTodos.map(({ name, description, id, completed }) => (
        <TodoItem key={id}>
          <div>
            <TodoName onDoubleClick={() => {
              setEditingEl('name')
              setEditingTodo(id)
            }}>{editingEl === 'name' && editingTodo === id ?
              <InputEditName
                className='input inputEditName'
                placeholder={`${name}`}
                onBlur={e => {
                  setEditingTodo(null)
                  changeValue(e, id, 'name')
                }} />
              : name}</TodoName>
            <p
              onDoubleClick={() => {
                setEditingEl('description')
                setEditingTodo(id)
              }}>
              {editingEl === 'description' && editingTodo === id ?
                <input
                  className='input'
                  placeholder={`${description}`}
                  onBlur={e => {
                    setEditingTodo(null)
                    changeValue(e, id, 'description')
                  }} />
                : description}
            </p>
          </div>
          <CheckboxCompleted
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