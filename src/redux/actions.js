// export const myAction = value => ({
//   type: 'my action',
//   payload: value,
// });
import types from './types';
import shortid from 'shortid';

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
  // // setContact([contactWithId, ...contacts]);

  // const getContacts = contacts.map(contact =>
  //   contact.name.toLocaleLowerCase(),
  // );

  // const isGetContactAlready = getContacts.includes(name.toLocaleLowerCase());

  // if (isGetContactAlready) {
  //   alert(`${name} is already in contacts!`);
  //   return;
  // } else {
  //   setContact([contactWithId, ...contacts]);
  // }
  // }
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
