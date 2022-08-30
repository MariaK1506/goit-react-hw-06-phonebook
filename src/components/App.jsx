import { GlobalStyle } from './GlobalStyle';
import { Container } from 'components/Container/Container';
import { Section } from './Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export default function App() {
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
