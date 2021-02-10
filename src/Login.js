import React from 'react';
import { Button } from "@material-ui/core"
import "./Login.css";
import { auth, provider } from './firebase';
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message))
  }
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="/flow_logo.png"
          alt="LOGO"
        />
      </div>
      <Button onClick={signIn}>Sign in</Button>
    </div>
  );
}

export default Login
