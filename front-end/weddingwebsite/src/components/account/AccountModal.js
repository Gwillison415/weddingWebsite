import React, { Component } from 'react';
// import { Modal, Header } from 'semantic-ui-react';
import Login from '../login/LoginContainer';
// import SignUp from '../signup/SignupContainer';
// import Reset from '../reset/ResetContainer';
import './AccountModal.css';
import burn2018 from '../../assets/images/burn2018.png';

import { Button, Header, Image, Modal } from 'semantic-ui-react'

const AccountModal = () => (
  <Modal trigger={<Button>Guest Login</Button>} centered={false}>
    <Modal.Header centered='true' >A Portal To your RSVP Info</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={burn2018}/>
      <Modal.Description>
        <Header>Sign in to change your deets up until may!</Header>
        <Login></Login>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default AccountModal
// class AccountModal extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       open: false,
//       showSignUp: false,
//       showLogin: true,
//       showReset: false,
//     };
//     this.showResetModal = this.showResetModal.bind(this);
//     this.showSignupModal = this.showSignupModal.bind(this);
//     this.showLoginModal = this.showLoginModal.bind(this);
//   }
//   showSignupModal() {
//     this.setState({ showSignUp: true, showReset: false, showLogin: false });
//   }
//
//   showResetModal() {
//     this.setState({ showReset: true, showSignUp: false, showLogin: false });
//   }
//
//   showLoginModal() {
//     this.setState({ showReset: false, showSignUp: false, showLogin: true });
//   }
//   render() {
//     const { closeAccountModal, showAccountModal } = this.props;
//     const { showSignUp, showLogin, showReset } = this.state;
//     return (
//       <Modal
//         // className="accountmodal"
//         // trigger={showAccountModal}
//         onClick={() => showAccountModal()}
//         // title={[
//         //   <div
//         //     className="accountmodal__menu accountmodal__menu--close"
//         //     onClick={() => closeAccountModal()}
//         //   >
//         //   </div>,
//         // ]
//         // }
//       >
//         {/* className="accountmodal__menu accountmodal__menu--close" */}
//         <Modal.Header  onClick={() => closeAccountModal()}> Close</Modal.Header>
//         <Modal.Content className="accountmodal__content">
//
//           {/* <div className="accountmodal__content--button-container">
//             <div
//               className={'accountmodal__content--buttons'.concat(showLogin ? ' isActive' : '')}
//               onClick={() => this.showLoginModal()}
//             >Log In</div>
//             <div
//               className={'accountmodal__content--buttons'.concat(showSignUp ? ' isActive' : '')}
//               onClick={() => this.showSignupModal()}
//             >Sign Up</div>
//           </div> */}
//           {showLogin && <Login closeAccountModal={closeAccountModal} showResetModal={this.showResetModal} showSignupModal={this.showSignupModal} />}
//           {/* {showSignUp && <SignUp closeAccountModal={closeAccountModal} />}
//           {showReset && <Reset />} */}
//         </Modal.Content>
//       </Modal>
//     );
//   }
// }

// export default AccountModal;
