import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {Form, Text} from 'informed';
import {login} from '../../redux/actions/login';
import './Login.css';

 class Login extends Component {

  componentDidMount(){
    if (this.props.loginStatus) {
      this.props.closeAccountModal()
    }
  }
  componentDidUpdate(prevProps) {
  if (this.props.loginStatus !== prevProps.loginStatus) {
    this.props.history.push('/user')
    this.props.closeAccountModal()
  }
}
  setFormApi = (formApi) =>{
    this.formApi = formApi;
  }

  validatePassword = value => {
    return (!value || value.length < 5) ? "Password must be longer than 5 characters" : null;
   };

   validateEmail = value => { return (!value || !/@/.test(value))
       ? "Email Address must contain '@ symbol'"
       : null;
   }
  triggerSubmit = () => {
    const formState = this.formApi.getState();
    const {password, email} = formState.values;
    email.toLowerCase();
    const {invalid} = formState;
    if (password && email && !invalid ) {
      let loginProps = Object.assign({}, {password}, {email})
      this.props.login(loginProps)
    } else {
      console.log('failed triggerSubmit unexpectedly');
    }
     this.formApi.reset()
  }


  render(){
    return (
      <Form id="form-state-form" getApi={this.setFormApi} onSubmit={() => {this.triggerSubmit()}}>
    {({formState}) => (<div >
        <label htmlFor="email-text">Email</label>
        <Text field="email" id="email-text" validate={this.validateEmail}></Text>
        <div style={{
            margin: '20px'
          }}></div>
        <label htmlFor="password">password
        </label>
        <Text field="password" id="password" type="password" validate={this.validatePassword}/>
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
       
      </div>)
    }
  </Form>)}
};

export const mapStateToProps = (state) => {
  const loginStatus = state.user.loginStatus;

  return {loginStatus}
}

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    login,
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
