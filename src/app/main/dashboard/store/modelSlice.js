import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContacts = createAsyncThunk(
  'contactsApp/contacts/getContacts',
  async (routeParams, { getState }) => {
    routeParams = routeParams || getState().contactsApp.contacts.routeParams;
    const response = await axios.get('/api/contacts-app/contacts', {
      params: routeParams,
    });
    const data = await response.data;

    return { data, routeParams };
  }
);

export const addContact = createAsyncThunk(
  'contactsApp/contacts/addContact',
  async (contact, { dispatch, getState }) => {
    const response = await axios.post('/api/contacts-app/add-contact', { contact });
    const data = await response.data;

    dispatch(getContacts());

    return data;
  }
);

export const updateContact = createAsyncThunk(
  'contactsApp/contacts/updateContact',
  async (contact, { dispatch, getState }) => {
    const response = await axios.post('/api/contacts-app/update-contact', { contact });
    const data = await response.data;

    dispatch(getContacts());

    return data;
  }
);

export const removeContact = createAsyncThunk(
  'contactsApp/contacts/removeContact',
  async (contactId, { dispatch, getState }) => {
    await axios.post('/api/contacts-app/remove-contact', { contactId });

    return contactId;
  }
);

const contactsAdapter = createEntityAdapter({});

const contactsSlice = createSlice({
  name: 'contactsApp/contacts',
  initialState: contactsAdapter.getInitialState({
    searchText: '',
    routeParams: {},
    ModelDialog: {
      type: 'new',
      props: {
        open: false,
      },
      data: null,
    },
  }),
  reducers: {
    setContactsSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
    openNewModelDialog: (state, action) => {
      state.ModelDialog = {
        type: 'new',
        props: {
          open: true,
        },
        data: null,
      };
    },
    closeNewModelDialog: (state, action) => {
      state.ModelDialog = {
        type: 'new',
        props: {
          open: false,
        },
        data: null,
      };
    },
    openEditModelDialog: (state, action) => {
      state.ModelDialog = {
        type: 'edit',
        props: {
          open: true,
        },
        data: action.payload,
      };
    },
    closeEditModelDialog: (state, action) => {
      state.ModelDialog = {
        type: 'edit',
        props: {
          open: false,
        },
        data: null,
      };
    },
  },
  extraReducers: {
    [updateContact.fulfilled]: contactsAdapter.upsertOne,
    [addContact.fulfilled]: contactsAdapter.addOne,
    [removeContact.fulfilled]: (state, action) => contactsAdapter.removeOne(state, action.payload),
    [getContacts.fulfilled]: (state, action) => {
      const { data, routeParams } = action.payload;
      contactsAdapter.setAll(state, data);
      state.routeParams = routeParams;
      state.searchText = '';
    },
  },
});

export const {
  setContactsSearchText,
  openNewModelDialog,
  closeNewModelDialog,
  openEditModelDialog,
  closeEditModelDialog,
} = contactsSlice.actions;

export default contactsSlice.reducer;
