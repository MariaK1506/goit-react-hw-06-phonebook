import PropTypes from 'prop-types';
import { Item, Name, Number, Button } from './ContactItem.styled';

export const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;
  return (
    <Item key={id}>
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
