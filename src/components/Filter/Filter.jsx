import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Label, Input } from './Filter.styled';
import { changeFilter, getFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const filterInputId = nanoid();

  const dispatch = useDispatch();
  const filterSearch = useSelector(getFilter);

  const changeFilterSearch = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <Label htmlFor={filterInputId}>
      Find contacts by name
      <Input
        value={filterSearch}
        onChange={changeFilterSearch}
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
