import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const ContactList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const DeleteBtn = styled.button`
position: absolute;
width: 15px;
height: 15px;
border-radius: 5px;
background-color: #8C7549;
right: 10px;
top: 10px;
`

const ContactItem = styled.li`
position: relative;
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
          <div>
            <p>{name}</p>
            <p>{number}</p>
          </div>
          <DeleteBtn></DeleteBtn>
        </ContactItem>
      ))}
    </ContactList>
  )
}

export default RenderContacts