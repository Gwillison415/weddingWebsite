import React from 'react';
import {Form, Text} from 'react-form';
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
    closeAccountModal,
    loginFB
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
  })
  return (<div className="form-container">

    <Form className="login">
      {
        formApi => (<form onSubmit={formApi.submitForm} id="login-form" className="mb-4">
          <label htmlFor="email">Email</label>
          <Text field="email" id="email-text" validate={validate}/>
          <div style={{margin: '20px'}}></div>
          <label htmlFor="password">Password</label>
          <Text field="password" id="password-text" validate={validatePassword}/>
          <div style={{margin: '20px'}}></div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>)
      }

    </Form>

    {/* {
      renderIf(user.loginStatus === true)(<div>
        {user.loginStatus && closeAccountModal()}
        <Redirect to={redirect || '/'}/>
      </div>,)
    } */}

  </div>);
};

export default Login;
