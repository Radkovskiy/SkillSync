import React from 'react'
import SearchBar from './SearchBar'
import TodoForm from './TodoForm'
import RenderTodos from './RenderTodos'
import FilterButtons from './FilterButtons'



const Todos = () => {
  return (
    <>
      <TodoForm />
      <SearchBar />
      <FilterButtons/>
      <RenderTodos />
    </>
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