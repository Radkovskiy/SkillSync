import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/todos">Todos</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/counter">Counter</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout