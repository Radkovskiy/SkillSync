
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { contactsState } from '../../redux/contactsSlice/selectors'
import { selectFilterValue } from '../../redux/searchValueSlice/selectors'
import { removeContact } from '../../redux/contactsSlice/contactsSlice'

const ContactList = styled.ul`
  display: flex;
  flex-wrap:wrap;

  gap: 10px;
  padding: 10px 20px;
`
const ContactItem = styled.li`
  position: relative;
  padding: 5px 50px;

  background-color:#BFB4AA;
  color: #331C06;

  border-radius: 10px;
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.3);
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

const onFilterContactsByValue = (contacts, searchValue) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    contact.number.toLowerCase().includes(searchValue.toLowerCase()))
}

const RenderContacts = () => {
  const dispatch = useDispatch()
  const { contactsArr } = useSelector(contactsState);
  const searchValue = useSelector(selectFilterValue);

  const handleClick = (id) => {
    dispatch(removeContact(id))
  }

  const visibleContacts = onFilterContactsByValue(contactsArr, searchValue)

  return (
    <ContactList>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <div>
            <p>{name}</p>
            <p>{number}</p>
          </div>
          <DeleteBtn onClick={() => handleClick(id)}></DeleteBtn>
        </ContactItem>
      ))}
    </ContactList>
  )
}

export default RenderContacts