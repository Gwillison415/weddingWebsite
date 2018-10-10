import React, { Component } from 'react';
import {Form, Text} from 'informed';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FormCard from '../cards/FormCard';
import {saveTheDateSubmit} from '../../redux/actions/forms.js';

class User extends Component {
  constructor(props) {
    super(props)
  }

  setFormApi = (formApi) =>{
    console.log('setFormApi called');
    this.formApi = formApi;
  }

  triggerRSVPSubmit = () => {

    const formState = this.formApi.getState();
    console.log('formState====', formState);
    const {RSVP} = formState.values;
    const {invalid} = formState;
    if (RSVP && !invalid ) {
      let formAnswers = Object.assign({}, {RSVP}, {name: this.props.userName})
      this.props.saveTheDateSubmit(formAnswers)
    } else {
      console.log('failed handleClick unexpectedly');
    }
     this.formApi.reset()
  }
  render() {
    const {user} = this.props;
    return( <div> <FormCard triggerSubmit={this.triggerRSVPSubmit} getApi={this.setFormApi} user={user}></FormCard></div>)
  }
}
const mapStateToProps = state => ({
  // loginStatus: state.user.loginStatus,
  user: state.user,
  userName: state.user.full_name,
  redirect: state.loginRedirect.redirectURL,
  error: state.user.error,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    saveTheDateSubmit,
  }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(User);
// export default connect(mapStateToProps, null)(User);
