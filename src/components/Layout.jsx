import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className='nav'>
            <NavLink className={'navLink'} to="/todos">Todos</NavLink>
            <NavLink className={'navLink'} to="/contacts">Contacts</NavLink>
            <NavLink className={'navLink'} to="/counter">Counter</NavLink>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout