import React, {Component} from 'react';
import {Form, Text} from 'informed';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import FormCard from '../cards/FormCard';
import ResponsiveContainer from '../home/ResponsiveContainer';
import TabExampleSecondaryPointing from './TabWrapper';
import {getDependents, accomodationsFormSubmit} from '../../redux/actions/forms.js';
import UserDash from '../userDash/UserDash';

class User extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.user.loginStatus !== prevProps.user.loginStatus) {
      console.log('you prob just logged in');
    }
  }

  componentDidMount() {
    this.props.getDependents(this.props.userName)
  }
  // triggerAccomodationSubmit = () => {
  //
  //   const formState = this.formApi.getState();
  //   console.log('formState====', formState);
  //   const {RSVP} = formState.values;
  //   const {invalid} = formState;
  //   console.log("RSVP===", RSVP, "Invalid?==", invalid);
  //   if (RSVP && !invalid ) {
  //     let formAnswers = Object.assign({}, {RSVP}, {name: this.props.userName})
  //     this.props.saveTheDateFormSubmit(formAnswers)
  //   } else {
  //     console.log('failed handleClick unexpectedly');
  //   }
  //    this.formApi.reset()
  // }
  render() {
    const {user, dependentGuests, hasOnsiteInvite} = this.props;

    return (<div>
      <ResponsiveContainer>
        {user.loginStatus? <UserDash/> : <div></div>}
        <TabExampleSecondaryPointing user={user} dependentGuests={dependentGuests} hasOnsiteInvite={hasOnsiteInvite}>
          {/* <FormCard triggerSubmit={this.triggerRSVPSubmit} getApi={this.setFormApi} user={user} dependentGuests={dependentGuests} ></FormCard> */}

        </TabExampleSecondaryPointing>
      </ResponsiveContainer>
    </div>)
  }
}
const mapStateToProps = state => ({
  // loginStatus: state.user.loginStatus,
  user: state.user,
  userName: state.user.full_name,
  redirect: state.user.redirectURL,
  error: state.user.error,
  dependentGuests: state.user.dependentGuests,
  rehersal_invite: state.saveTheDateForm.rehersal_invite,
  hasOnsiteInvite: state.user.onsite_invite
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  accomodationsFormSubmit,
  getDependents
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(User);
// export default connect(mapStateToProps, null)(User);
