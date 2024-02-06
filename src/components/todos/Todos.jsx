import React from 'react'
import TodoSearchBar from './TodoSearchBar'
import TodoForm from './TodoForm'
import RenderTodos from './RenderTodos'
import FilterButtons from './FilterButtons'
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