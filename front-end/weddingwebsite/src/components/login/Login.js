import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Form, Text} from 'informed';
import {Redirect} from 'react-router-dom';
import renderIf from 'render-if';
import {login} from '../../redux/actions/login';
import './Login.css';

 class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAccountModal: false,
      loggedIn:
    }
    this.handleClick = this.handleClick.bind(this)
  }
  setFormApi = (formApi) =>{
    console.log('setFormApi called');
    this.formApi = formApi;
  }



  handleClick(){
    console.log(this.formApi.getState());
    const formState = this.formApi.getState();
    const {password, email} = formState.values;
    const {invalid, submits} = formState;
    if (password && email && !invalid && submits === 1) {
      this.props.login()
    } else {
      console.log(this.formState, '1st password pass');
      // this.formApi.setValue('password', '')
      // this.formApi.setValue('submits', 0)
      // console.log(formState.values.password, '2nd password pass');
    }
  }
  closeAccountModal = () => {
  this.setState({showAccountModal: false})
}
  render(){

    const validatePassword = value => {
    console.log('value', value);
      return (!value || value.length < 5) ? "Password must be longer than 5 characters" : null;
     };
    const validateEmail = value => { return (!value || !/@/.test(value))
        ? "Email Address must contain '@ symbol'"
        : null;
    }
    return (
      <Form id="form-state-form" getApi={this.setFormApi}>
    {
      ({formState}) => (<div >
        <label htmlFor="email-text">Email</label>
        <Text field="email" id="email-text" validate={validateEmail}></Text>
        <div style={{
            margin: '20px'
          }}></div>
        <label htmlFor="password">password
        </label>
        <Text field="password" id="password" type="password" validate={validatePassword}/>
        <div style={{
            margin: '20px'
          }}></div>
        <button type="submit" onClick={this.handleClick()}>
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
  }
};

// export const mapStateToProps = (state) => {
//   const
// }

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    login,
  }, dispatch);

export default connect(null, mapDispatchToProps)(Login)
