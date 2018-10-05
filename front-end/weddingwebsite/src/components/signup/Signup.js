import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Form, Text} from 'informed';
import {Redirect} from 'react-router-dom';
import {signup} from '../../redux/actions/login';
// import './Signup.css';

 class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAccountModal: false,
      loginStatus: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }
  setFormApi = (formApi) =>{
    console.log('setFormApi called');
    this.formApi = formApi;
  }

  validatePassword = value => {
  console.log('validatePassword value', value);
    return (!value || value.length < 5) ? "Password must be longer than 5 characters" : null;
   };

   validateEmail = value => { return (!value || !/@/.test(value))
       ? "Email Address must contain '@ symbol'"
       : null;
   }
  triggerSubmit = () => {

    const formState = this.formApi.getState();
    console.log("formState=", formState);
    const {password, email} = formState.values;
    const {invalid, submits} = formState;
    if (password && email && !invalid ) {
      let signUpProps = Object.assign({}, {password}, {email})
      console.log('validated signUpProps', signUpProps);
      this.props.signup(password, email)
    } else {
      console.log('failed handleClick unexpectedly');
      // this.formApi.setValue('password', '')
      // this.formApi.setValue('submits', 0)
      // console.log(formState.values.password, '2nd password pass');
    }
     this.formApi.reset()
  }
  handleClick(){
    console.log(this.formApi.getState());
  }
  closeAccountModal = () => {
  this.setState({showAccountModal: false})
}

  render(){
    return (
      <Form id="form-state-form" getApi={this.setFormApi} onSubmit={() => {this.triggerSubmit()}}>
    {({formState}) => (<div >
        <p>Signup page</p>
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
        {/* <label>Async Errors:</label>
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
        </code> */}
      </div>)
    }
  </Form>)}
};

export const mapStateToProps = (state) => {
  const loginStatus = state.loginStatus;

  return {loginStatus}
}

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    signup,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
