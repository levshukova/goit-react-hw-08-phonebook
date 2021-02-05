import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/operations';
import { getContacts } from '../../redux/selectors';

import s from './ContactForm.module.css';

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
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.formLabel}>
        Name
        <input
          type="text"
          value={name}
          name="name"
          className={s.formInput}
          placeholder=" "
          onChange={handleNameChange}
        />
      </label>
      <label className={s.formLabel}>
        Number
        <input
          type="tel"
          value={number}
          name="number"
          className={s.formInput}
          placeholder=" "
          onChange={handleNumberChange}
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
