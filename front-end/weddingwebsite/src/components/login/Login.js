import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {Form, Text} from 'informed';
import {Redirect} from 'react-router-dom';
import {login} from '../../redux/actions/login';
import './Login.css';

 class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount(){
    if (this.props.loginStatus) {
      this.props.closeAccountModal()
    }
  }
  componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.loginStatus !== prevProps.loginStatus) {
    this.props.history.push('/user')
    this.props.closeAccountModal()
  }
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
    const {password, email} = formState.values;
    const {invalid, submits} = formState;
    if (password && email && !invalid ) {
      let loginProps = Object.assign({}, {password}, {email})
      this.props.login(loginProps)
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
  const loginStatus = state.user.loginStatus;

  return {loginStatus}
}

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    login,
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
