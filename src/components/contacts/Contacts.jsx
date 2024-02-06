import React from 'react'
import RenderContacts from './RenderContacts'
import ContactsSearchBar from './ContactsSearchBar'
import ContactForm from './ContactForm'

const Contacts = () => {
  return (
    <div className="container">
      <ContactForm />
      <ContactsSearchBar />
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