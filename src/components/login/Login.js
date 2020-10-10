import React from 'react';
import {Button} from '@material-ui/core';
import imsgLogo from './img/imessage.jpg';
import {auth, provider} from '../../server/firebase';

import './Login.css';

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error)=>alert(error.message));
  }
  return (
    <div className='login'>
      <div className='login__logo'>
        <img src={imsgLogo} alt='imessage' />
        <h1>iMessage</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login;
