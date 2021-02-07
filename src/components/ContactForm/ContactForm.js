import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';

import s from './ContactForm.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !number) return;

    const contactNames = contacts.map(contact => contact.name.toLowerCase());
    if (contactNames.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(operations.addContact(name, number));

    setName('');
    setNumber('');
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit} className={s.form}>
        <TextField
          id="standard-basic"
          label="Name"
          type="text"
          value={name}
          name="name"
          className={s.formInput}
          onChange={handleNameChange}
        />

        <TextField
          id="standard-basic"
          label="Number"
          type="tel"
          value={number}
          name="number"
          className={s.formInput}
          onChange={handleNumberChange}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          size="small"
          className={s.button}
        >
          Add contact
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
