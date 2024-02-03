import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'


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

const filterTodos = (todos, searchValue) => {
  return todos.filter(todo =>
    todo.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    todo.description.toLowerCase().includes(searchValue.toLowerCase()))
}

const RenderTodos = () => {
  const dispatch = useDispatch()
  const store = useSelector((state) => state)
  const { todoArr, searchValue } = store
  console.log('store :>> ', store);

  const handleRemove = (id) => {
    dispatch({
      type: 'removeTodo',
      payload: {
        id
      }
    })
  }

  const filteredTodos = filterTodos(todoArr, searchValue)

  return (
    <TodoList>
      {filteredTodos?.map(({ name, description, id }) => (
        <TodoItem key={id}>
          <TodoName>{name}</TodoName>
          <p>{description}</p>
          <DeleteBtn onClick={() => handleRemove(id)}></DeleteBtn>
        </TodoItem>
      ))}
    </TodoList>
  )
}

export default RenderTodos