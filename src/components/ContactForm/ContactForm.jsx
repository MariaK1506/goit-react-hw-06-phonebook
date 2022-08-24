import { useState, useMemo } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const nameInputId = useMemo(() => nanoid(), []);
  const numberInputId = useMemo(() => nanoid(), []);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(name, number); /* даем доступ к state в App */
    formReset();
  };

  return (
    <Form action="" onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name
        <Input
          value={name}
          onChange={handleInputChange}
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor={numberInputId}>
        Number
        <Input
          value={number}
          onChange={handleInputChange}
          id={numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// handleNameChange = event => {
//   console.log(event.currentTarget.value);
//   this.setState({ name: event.currentTarget.value });
// };

// handleNumberChange = event => {
//   this.setState({ number: event.currentTarget.value });
// };

// handleInputChange = event => {
//   const { name, value } = event.currentTarget;
//   this.setState({
//     [name]: value,
//   });
// };

// handleSubmit = event => {
//   event.preventDefault();

//   this.props.onSubmit(this.state); /* даем доступ к state в App */
//   this.formReset();
// };

// formReset = () => {
//   this.setState({ name: '', number: '' });
// };

//   render() {
//     return (
//       <Form action="" onSubmit={this.handleSubmit}>
//         <Label htmlFor={this.nameInputId}>
//           Name
//           <Input
//             value={this.state.name}
//             onChange={this.handleInputChange}
//             id={this.nameInputId}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </Label>
//         <Label htmlFor={this.numberInputId}>
//           Number
//           <Input
//             value={this.state.number}
//             onChange={this.handleInputChange}
//             id={this.numberInputId}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </Label>
//         <Button type="submit">Add contact</Button>
//       </Form>
//     );
//   }
// }
