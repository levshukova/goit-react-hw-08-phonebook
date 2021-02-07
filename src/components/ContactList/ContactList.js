import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import operations from '../../redux/contacts/contacts-operations';

import s from './ContactList.module.css';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

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

            <Button
              variant="contained"
              color="default"
              size="small"
              onClick={() => onDeleteContact(id)}
              className={s.button}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
