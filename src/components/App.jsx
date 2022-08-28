import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Container } from 'components/Container/Container';
import { Section } from './Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { DEFAULT_CONTACTS } from 'data/defaultContacts';

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     JSON.parse(window.localStorage.getItem('contacts')) || DEFAULT_CONTACTS
  //   );
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <GlobalStyle />

      <h1>Phonebook</h1>
      <Section>
        <Container>
          <ContactForm />
        </Container>
      </Section>
      <Section title="Contacts">
        <Container>
          <Filter />
          <ContactsList />
        </Container>
      </Section>
    </>
  );
}
