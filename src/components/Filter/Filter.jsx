import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  const filterInputId = nanoid();
  return (
    <Label htmlFor={filterInputId}>
      Find contacts by name
      <Input
        value={value}
        onChange={onChange}
        id={filterInputId}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
