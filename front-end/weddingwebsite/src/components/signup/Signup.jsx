import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Text } from 'informed';
import { signup } from '../../redux/actions/login';
// import './Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAccountModal: false,
      loginStatus: false,
    }

  }
  setFormApi = (formApi) => {
    this.formApi = formApi;
  }

  validatePassword = value => {
    return (!value || value.length < 5) ? "Password must be longer than 5 characters" : null;
  };

  validateEmail = value => {
    return (!value || !/@/.test(value))
      ? "Email Address must contain '@ symbol'"
      : null;
  }
  triggerSubmit = () => {

    const formState = this.formApi.getState();
    const { password, email } = formState.values;
    const { invalid } = formState;
    if (password && email && !invalid) {
      let signUpProps = Object.assign({}, { password }, { email })
      this.props.signup(signUpProps)
    } else {
      console.log('failed handleClick unexpectedly');
    }
    this.formApi.reset()
  }

  render() {
    return (
      <Form id="form-state-form" getApi={this.setFormApi} onSubmit={() => { this.triggerSubmit() }}>
        {({ formState }) => (<div >
          <label htmlFor="email-text">Email</label>
          <Text field="email" id="email-text" validate={this.validateEmail}></Text>
          <div style={{
            margin: '20px'
          }}></div>
          <label htmlFor="password">password
        </label>
          <Text field="password" id="password" type="password" validate={this.validatePassword} />
          <div style={{
            margin: '20px'
          }}></div>
          <button type="submit" >
            Submit
        </button>

          <p>{
            formState.errors.email
              ? JSON.stringify(formState.errors.email)
              : ''
          }</p>
          <p>{
            formState.errors.password
              ? JSON.stringify(formState.errors.password)
              : ''
          }</p>
          <h4>Use a simple password that you don't use anywhere else </h4>
          <b>OR</b>
          <h4>  a complicated unique one with a password manager</h4>
          <h4>Use only the email we have for you</h4>

        </div>)
        }
      </Form>)
  }
};

export const mapStateToProps = (state) => {
  const loginStatus = state.loginStatus;

  return { loginStatus }
}

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    signup,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
