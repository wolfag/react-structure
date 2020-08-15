import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { StyledFirebaseAuth } from 'react-firebaseui';

SignIn.propTypes = {};

const uiConfig = {
  signInFlow: 'redirect',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  signInSuccessUrl: '/photos',
};

function SignIn(props) {
  return (
    <div>
      <div className='text-center'>
        <h2>Login Form</h2>
        <p>or login with social accounts</p>
      </div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignIn;
