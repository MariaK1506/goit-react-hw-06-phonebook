import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { Container } from 'components/Container/Container';
import { Section } from './Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

const DEFAULT_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) || DEFAULT_CONTACTS
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFiltredContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const addContact = (name, number) => {
    /* Получили в App доступ к state формы */

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : setContacts([newContact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <Section>
        <Container>
          <ContactForm onSubmit={addContact} />
        </Container>
      </Section>
      <Section title="Contacts">
        <Container>
          <Filter value={filter} onChange={changeFilter} />
          <ContactsList
            contacts={getFiltredContact()}
            onDeleteContact={deleteContact}
          />
        </Container>
      </Section>
    </>
  );
}

// export class OldApp extends Component {
// state = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// componentDidMount() {
//   // console.log('App componentDidMount');
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);
//   // console.log(parsedContacts);

//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }
// переделано

// componentDidUpdate(prevProps, prevState) {
//   // console.log('App componentDidUpdate');

//   if (this.state.contacts !== prevState.contacts) {
//     // console.log('обновилось поле contacts');
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }

// addContact = ({ name, number }) => {
//   /* Получили в App доступ к state формы */

//   const newContact = {
//     id: nanoid(),
//     name: name,
//     number: number,
//   };
//   const { contacts } = this.state;

//   contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
//     ? alert(`${name} is already in contacts`)
//     : this.setState(({ contacts }) => ({
//         contacts: [newContact, ...contacts],
//       }));
// };

// deleteContact = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   }));
// };

// changeFilter = event => {
//   this.setState({ filter: event.currentTarget.value });
// };

// getFiltredContact = () => {
//   const { filter, contacts } = this.state;

//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// render() {
// const filteredContacts = this.getFiltredContact();

// return (
//   <>
//     <GlobalStyle />
//     <h1>Phonebook</h1>
//     <Section>
//       <Container>
//         <ContactForm onSubmit={this.addContact} />
//       </Container>
//     </Section>
//     <Section title="Contacts">
//       <Container>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactsList
//           contacts={filteredContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </Container>
//     </Section>
//   </>
// );
//   }
// }
