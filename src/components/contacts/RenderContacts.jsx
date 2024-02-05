import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const ContactList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`
const ContactItem = styled.li`
padding: 5px 50px;
background-color:#BFB4AA;
border-radius: 10px;
box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.3);
`

const RenderContacts = () => {
  const store = useSelector(state => state)
  console.log('store :>> ', store);
  const { contacts: { contactsArr } } = store

  return (
    <ContactList>
      {contactsArr.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <p>{name}</p>
          <p>{number}</p>
        </ContactItem>
      ))}
    </ContactList>
  )
}

export default RenderContacts