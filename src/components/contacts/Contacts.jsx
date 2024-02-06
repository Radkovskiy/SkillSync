import React from 'react'
import RenderContacts from './RenderContacts'
import SearchBar from './SearchBar'
import ContactForm from './ContactForm'

const Contacts = () => {
  return (
    <div className="container">
      <ContactForm />
      <SearchBar />
      <RenderContacts />
    </div>
  )
}

export default Contacts

/* 
🟢поиск
🟢удаление
🔴локалсторейдж
*/