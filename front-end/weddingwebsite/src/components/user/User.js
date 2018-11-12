import React, {Component} from 'react';
import {Form, Text} from 'informed';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import ResponsiveContainer from '../home/ResponsiveContainer';
import TabExampleSecondaryPointing from './TabWrapper';
import {getDependents, accomodationsFormSubmit} from '../../redux/actions/forms.js';
import UserDash from '../userDash/UserDash';

class User extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getDependents(this.props.userName)
  }
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
// export default connect(mapStateToProps, null)(User);
