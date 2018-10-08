import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../login/Login';
import Signup from '../signup/Signup';
// import Login from '../login/LoginContainer';
// import SignUp from '../signup/SignupContainer';
// import Reset from '../reset/ResetContainer';
import './AccountModal.css';
import burn2018 from '../../assets/images/burn2018.png';

import { Button, Header, Image, Modal, Segment } from 'semantic-ui-react'

class AccountModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      showSignUp: false,
      showLogin: true,
      showReset: false,
      modalMessage: 'Login to change your details'
    };

  }
  showSignupModal = () => {
    this.setState({ showSignUp: true, showReset: false, showLogin: false, modalMessage: 'Sign Up to confirm your account' });
  }

  showResetModal = () => {
    this.setState({ showReset: true, showSignUp: false, showLogin: false });
  }

  showLoginModal = () => {
    this.setState({ showReset: false, showSignUp: false, showLogin: true, modalMessage: 'Login to change your details' });
  }
  render () {
  const { closeAccountModal, error } = this.props;
  const { showLogin, showSignUp, open, modalMessage, redirect} = this.state
  return (<Modal style={{marginTop: "-250px"}} trigger={<Button>Guest Login</Button>} centered={false}>
    <Modal.Header centered='true' >A Portal To your RSVP Info
    <Button onClick={() => {this.showSignupModal()}}>Sign up</Button>
    <Button onClick={() => {this.showLoginModal()}}>Login</Button>
    </Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={burn2018}/>
      <Modal.Description>
        <Header>{modalMessage}</Header>
        {showLogin && <Login closeAccountModal={closeAccountModal} showResetModal={this.showResetModal} showSignupModal={this.showSignupModal} />}
          {showSignUp && <Signup closeAccountModal={closeAccountModal} />}
      </Modal.Description>
    </Modal.Content>
    <Segment>
      <h4>Go ahead and use a simple password that you don't use anywhere else </h4>
      <h4>or a complicated unique one with a password manager</h4>
      <div>error msg: {error}</div></Segment>
  </Modal>)}
}
const mapStateToProps = state => ({
  // loginStatus: state.user.loginStatus,
  // user: state.user,
  // userName: state.user.full_name,
  redirect: state.loginRedirect.redirectURL,
  error: state.user.error,
});

export default connect(mapStateToProps, null)(AccountModal)
// export default AccountModal
