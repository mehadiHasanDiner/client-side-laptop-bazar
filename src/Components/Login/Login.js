import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { GoogleLoginButton, FacebookLoginButton } from "react-social-login-buttons";
import './Login.css'


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }


const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then (res => {
            console.log(res);
            
        })
    }

    return (
        <div  className="login-btn">
            <h3>This is login Page</h3>
            <GoogleLoginButton style={{ border: '1px solid' }} onClick={handleGoogleSignIn} />
        </div>
    );
};

export default Login;