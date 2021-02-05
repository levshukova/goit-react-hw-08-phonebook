import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/selectors';
import operations from '../../redux/operations';

import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  const onDeleteContact = id => dispatch(operations.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.listItem}>
            <span className={s.name}>{name}:</span>
            <span className={s.number}>{number}</span>
            <button className={s.button} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
