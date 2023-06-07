// actionTypes
export const ADD_CONTACT = 'ADD_CONTACT';

// actionCreators
export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
})