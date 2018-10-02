import React from 'react';
import {Form, Text} from 'informed';
// import MediaQuery from 'react-responsive';

import {Redirect} from 'react-router-dom';
import renderIf from 'render-if';
// import Button from '../forms/custom/Button';
// import {required, email, minValue7} from '../../validations/account-validations';

import './Login.css';

const Login = (props) => {
  const {
    handleSubmit,
    user,
    redirect,
    showSignup,
    showSignupModal,
    showResetModal,
    showResetEmail,
    closeAccountModal
  } = props;
  const validate = value => ({
    error: !value || /@/.test(value)
      ? "Input must contain '@ symbol'"
      : null,
    success: value && /@/.test(value)
      ? "Thanks for entering your email!"
      : null
  })

  const validatePassword = value => ({
    error: !value || value.length < 5
      ? "Input must be longer than 5 characters"
      : null,
    success: value && value.length >= 5
      ? "Thanks for entering your password!"
      : null
  });
  return (<Form id="form-state-form">
    {
      ({formState}) => (<div>
        <label htmlFor="form-state-name">First name:</label>
      <Text field="name" id="form-state-name" validate={validate}/>

        <label htmlFor="email-text">Email</label>
        <Text field="email" id="email-text" validate={validate}></Text>
        <div style={{
            margin: '20px'
          }}></div>
          <label htmlFor="password">password </label>
  <Text field="name" id="password" validate={validatePassword}/>
        <div style={{
            margin: '20px'
          }}></div>
        <button type="submit">
          Submit
        </button>
        <label>Values:</label>
        <code>
          {JSON.stringify(formState.values)}
        </code>
        <label>Touched:</label>
        <code>
          {JSON.stringify(formState.touched)}
        </code>
        <label>Errors:</label>
        <code>
          {JSON.stringify(formState.errors)}
        </code>
        <label>Async Errors:</label>
        <code>
          {JSON.stringify(formState.asyncErrors)}
        </code>
        <label>Invalid:</label>
        <code>
          {JSON.stringify(formState.invalid)}
        </code>
        <label>Pristine:</label>
        <code>
          {JSON.stringify(formState.pristine)}
        </code>
        <label>Dirty:</label>
        <code>
          {JSON.stringify(formState.dirty)}
        </code>
      </div>)
    }
  </Form>)
};

export default Login;
