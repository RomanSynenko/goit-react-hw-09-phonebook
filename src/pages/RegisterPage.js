import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperation } from '../redux/auth';


export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Type input name- ${name} not exist`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.register({ name: name, email: email, password: password }));
    setName('');
    setEmail('');
    setPassword('');
  };


  return (
    <div>
      <h1 className='title-login'>Register page</h1>
      <form
        onSubmit={handleSubmit}
        className='login_form'
        autoComplete="off"
      >
        <label >
          Name
        <input
            className='login_input'
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label >
          Email
        <input
            className='login_input'
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label >
          Password
        <input
            className='login_input'
            type="password"
            name="password"
            placeholder="Enter password at least eight symbol"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className='login-bth' type="submit">Register</button>
      </form>
    </div >
  )
};

// const mapDispatchToProps = {
//   onRegister: authOperation.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);
