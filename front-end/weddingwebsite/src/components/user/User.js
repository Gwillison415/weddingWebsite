import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import ResponsiveContainer from '../home/ResponsiveContainer';
import RSVPTabs from './TabWrapper';
import {getDependents, accomodationsFormSubmit} from '../../redux/actions/forms.js';
import UserDash from '../userDash/UserDash';

class User extends Component {

  componentDidMount() {
    this.props.getDependents(this.props.userName)
  }
  render() {
    const { loginStatus, dependentGuests, user, hasOnsiteInvite} = this.props;

    return (<div>
      <ResponsiveContainer>
        {loginStatus? <UserDash/> : <div></div>}
        <RSVPTabs dependentGuests={dependentGuests} user={user} hasOnsiteInvite={hasOnsiteInvite}/>
      </ResponsiveContainer>
    </div>)
  }
}
const mapStateToProps = state => ({
  user: state.user,
  loginStatus: state.user.loginStatus,
  userName: state.user.full_name,
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
