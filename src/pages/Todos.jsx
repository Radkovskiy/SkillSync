import React from 'react'
import TodoSearchBar from '../components/todos/TodoSearchBar'
import TodoForm from '../components/todos/TodoForm'
import RenderTodos from '../components/todos/RenderTodos'
import FilterButtons from '../components/todos/FilterButtons'
import styled from 'styled-components'

const FiltersWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
`


const Todos = () => {
  return (
    <div className='container'>
      <TodoForm />
      <FiltersWrapp>
        <TodoSearchBar />
        <FilterButtons />
      </FiltersWrapp>
      <RenderTodos />
    </div>
  )
}

export default Todos

/* 
🟢поиск тудушек 
🟢сортировка по чекбоксам
🟢изменение тудушек
🔴local storage
🟢удаление тудушек
*/