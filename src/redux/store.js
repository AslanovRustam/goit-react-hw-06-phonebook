import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './reducer';

const reducer = combineReducers({
  contacts: contactReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
