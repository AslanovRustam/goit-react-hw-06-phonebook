import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './reducer';

// const contactsFirstRender = [
//   { id: 'id-1', name: 'Barak Obama', number: '459-12-56' },
//   { id: 'id-2', name: 'Donald Trump', number: '443-89-12' },
//   { id: 'id-3', name: 'George Washington', number: '645-17-79' },
//   { id: 'id-4', name: 'Thomas Jefferson', number: '227-91-26' },
// ];

const reducer = combineReducers({
  contacts: contactReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
