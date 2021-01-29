import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../helpers/axiosWithAuth';

const initialCredentials = {
  username: '',
  password: '',
};

const Login = (e) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState(initialCredentials);
  const history = useHistory();

  const handleChanges = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', credentials)
      .then((res) => {
        window.localStorage.setItem('token', res.data.payload);
        history.push('/bubbles');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='login-form'>
      <form onSubmit={login}>
        <label>Username</label>
        <input
          type='text'
          name='username'
          placeholder='Enter your username'
          value={credentials.username}
          onChange={handleChanges}
        />
        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Enter your password'
          value={credentials.password}
          onChange={handleChanges}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.