import React from 'react'
import RenderContacts from '../components/contacts/RenderContacts'
import ContactsSearchBar from '../components/contacts/ContactsSearchBar'
import ContactForm from '../components/contacts/ContactForm'

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