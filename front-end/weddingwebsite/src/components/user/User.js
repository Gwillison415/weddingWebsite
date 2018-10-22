import React, { Component } from 'react';
import {Form, Text} from 'informed';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FormCard from '../cards/FormCard';
import AccomodationCard from '../cards/AccomodationCard';
import {saveTheDateFormSubmit, getDependents, accomodationsFormSubmit} from '../../redux/actions/forms.js';

class User extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getDependents(this.props.userName)
  }
  setFormApi = (formApi) =>{
    this.formApi = formApi;
  }

  triggerRSVPSubmit = () => {

    const formState = this.formApi.getState();
    console.log('formState====', formState);
    const {RSVP} = formState.values;
    const {invalid} = formState;
    console.log("RSVP===", RSVP, "Invalid?==", invalid);

    if (RSVP && !invalid ) {
      let formAnswers = Object.assign({}, {RSVP}, {name: this.props.userName})
      this.props.saveTheDateFormSubmit(formAnswers)
    } else {
      console.log('failed handleClick unexpectedly');
    }
     this.formApi.reset()
  }
  triggerAccomodationSubmit = () => {

    const formState = this.formApi.getState();
    console.log('formState====', formState);
    const {RSVP} = formState.values;
    const {invalid} = formState;
    console.log("RSVP===", RSVP, "Invalid?==", invalid);
    if (RSVP && !invalid ) {
      let formAnswers = Object.assign({}, {RSVP}, {name: this.props.userName})
      this.props.saveTheDateFormSubmit(formAnswers)
    } else {
      console.log('failed handleClick unexpectedly');
    }
     this.formApi.reset()
  }
  render() {
    const {user, dependentGuests} = this.props;
    return( <div>
      <FormCard triggerSubmit={this.triggerRSVPSubmit} getApi={this.setFormApi} user={user} dependentGuests={dependentGuests} ></FormCard>
      {/* <AccomodationCard triggerSubmit={this.triggerAccomodationSubmit} getApi={this.setFormApi} user={user} dependentGuests={dependentGuests} ></AccomodationCard> */}
    </div>)
  }
}
const mapStateToProps = state => ({
  // loginStatus: state.user.loginStatus,
  user: state.user,
  userName: state.user.full_name,
  redirect: state.loginRedirect.redirectURL,
  error: state.user.error,
  dependentGuests: state.user.dependentGuests,
  rehersal_invite: state.saveTheDateForm.rehersal_invite,

});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    saveTheDateFormSubmit,
    accomodationsFormSubmit,
    getDependents,
  }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(User);
// export default connect(mapStateToProps, null)(User);
