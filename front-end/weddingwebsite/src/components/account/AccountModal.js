import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import Login from '../login/LoginContainer';
import SignUp from '../signup/SignupContainer';
import Reset from '../reset/ResetContainer';
import './AccountModal.css';

class AccountModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      showSignUp: false,
      showLogin: true,
      showReset: false,
    };
    this.showResetModal = this.showResetModal.bind(this);
    this.showSignupModal = this.showSignupModal.bind(this);
    this.showLoginModal = this.showLoginModal.bind(this);
  }
  showSignupModal() {
    this.setState({ showSignUp: true, showReset: false, showLogin: false });
  }

  showResetModal() {
    this.setState({ showReset: true, showSignUp: false, showLogin: false });
  }

  showLoginModal() {
    this.setState({ showReset: false, showSignUp: false, showLogin: true });
  }
  render() {
    const { closeAccountModal, history } = this.props;
    const { showSignUp, showLogin, showReset } = this.state;
    return (
      <Modal
        className="accountmodal"
        title={[
          <div
            className="accountmodal__menu accountmodal__menu--close"
            onClick={() => closeAccountModal()}
          >
          </div>,
        ]
        }
        modal
        open={this.props.showAccountModal}
      >
        <div className="accountmodal__content">
          <img src={require('../../assets/images/HomeSlice_Final_Orange.png')} alt="Logo" className="accountmodal__content--image" />
          <div className="accountmodal__content--button-container">
            <div
              className={'accountmodal__content--buttons'.concat(showLogin ? ' isActive' : '')}
              onClick={() => this.showLoginModal()}
            >Log In</div>
            <div
              className={'accountmodal__content--buttons'.concat(showSignUp ? ' isActive' : '')}
              onClick={() => this.showSignupModal()}
            >Sign Up</div>
          </div>
          {showLogin && <Login closeAccountModal={closeAccountModal} showResetModal={this.showResetModal} showSignupModal={this.showSignupModal} />}
          {showSignUp && <SignUp closeAccountModal={closeAccountModal} />}
          {showReset && <Reset />}
        </div>
      </Modal>
    );
  }
}

export default AccountModal;
