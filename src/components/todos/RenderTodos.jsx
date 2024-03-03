import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { statusFilters } from './constants'
import { useEffect, useState } from 'react'
import { editDescription, editName, removeTodo, toggleStatus } from '../../redux/todoSlice/todoSlice'
import { selectFilterValue } from '../../redux/searchValueSlice/selectors'
import { todoState } from '../../redux/todoSlice/todosSelectors'
import { deleteTodoThunk, getTodosThunk, putTodoThunk } from '../../redux/thunk'


const TodoList = styled.ul`
display: flex;
flex-wrap: wrap;

gap: 20px;
padding: 20px;
margin-left: auto;
margin-right: auto;
`
const TodoItem = styled.li`
position: relative;

display: flex;

background-color:#BFB4AA;
color: #331C06;

width: 360px;
border-radius: 10px;
padding: 25px 35px 25px 20px;
box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.3);
`
const TodoName = styled.p`
margin-bottom: 10px;
font-weight: bold;
`
const InputEditName = styled.input`
  font-weight: bold;
  font-size: 16px;
`
const CheckboxCompleted = styled.input`
margin-top: 5px;
margin-right: 10px;
width: 13px;
height: 13px;
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


const RenderTodos = () => {
  const dispatch = useDispatch()
  const { todoArr, statusFilter, status, error } = useSelector(todoState)
  const filterValue = useSelector(selectFilterValue)
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingEl, setEditingEl] = useState(null);

  useEffect(() => {
    dispatch(getTodosThunk())
  }, [dispatch]);



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
  }

  const handleRemove = (id) => {
    dispatch(deleteTodoThunk(id))
  }

  const handleToggle = (id) => {
    dispatch(toggleStatus(id))
  }

  const changeValue = (e, id, typeEdit) => {
    const value = e.currentTarget.value
    if (!value.length) return

    const todoForSwitch = todoArr.find(todo => todo.id === id)

    switch (typeEdit) {
      case 'name':
        const todoWidthNewName = {
          ...todoForSwitch,
          name: value
        }
        dispatch(putTodoThunk(todoWidthNewName))
        break;


      case 'description':
        const todoWidthNewDesc = {
          ...todoForSwitch,
          description: value
        }
        dispatch(putTodoThunk(todoWidthNewDesc))
        break;

      default:
        break;
    }

  }


  const filteredTodosByValue = onFilterTodosByValue(todoArr, filterValue)
  const visibleTodos = onFilterTodosByStatus(filteredTodosByValue, statusFilter)

  return (
    <TodoList>
      {visibleTodos.map(({ name, description, id, completed }) => (
        <TodoItem key={id}>
          <CheckboxCompleted
            type="checkbox"
            checked={completed}
            onChange={() => handleToggle(id)}
          />
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

          <DeleteBtn onClick={() => handleRemove(id)}></DeleteBtn>
        </TodoItem>
      ))}
    </TodoList>
  )
}

export default RenderTodos