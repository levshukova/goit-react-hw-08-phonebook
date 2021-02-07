import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import s from './LoginView.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      {/* <h1 className={s.title}>Sign in</h1> */}

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="Email"
          type="email"
          name="email"
          value={email}
          variant="outlined"
          className={s.label}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          name="password"
          value={password}
          variant="outlined"
          className={s.label}
          onChange={handleChange}
        />
        <Button variant="outlined" color="primary" type="submit">
          Sign in
        </Button>
      </form>
    </div>
  );
}
