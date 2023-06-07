import { combineReducers } from 'redux';
import { ADD_CONTACT } from '../actions';

const INITIAL_STATE = [];

// const INITIAL_STATE_2 = {}

// const user = (state = INITIAL_STATE_2, action) => {
//   switch (action.type) {
//     default: 
//       return state;
//   }
// }

const contacts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    default: 
      return state;
  }
}

// const rootReducer = combineReducers({
//   contacts, user
// });

const rootReducer = combineReducers({
  contacts
});


export default rootReducer;