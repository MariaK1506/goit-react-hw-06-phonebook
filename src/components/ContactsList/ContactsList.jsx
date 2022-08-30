import { useSelector, useDispatch } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactsList.styled';
import { deleteContact, getContacts, getFilter } from 'redux/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filtredContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactsList = filtredContact();
  // console.log(contactsList);

  return (
    <List>
      {contactsList.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={removeContact}
        />
      ))}
    </List>
  );
};
