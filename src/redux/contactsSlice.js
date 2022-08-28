import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { DEFAULT_CONTACTS } from 'data/defaultContacts';

const initialState = {
  items: DEFAULT_CONTACTS,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.items,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },

    deleteContact(state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const { changeFilter } = filterSlice.actions;

const persistConfig = {
  key: 'root',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const getContacts = state => state.items;
export const getFilter = state => state.filter;
