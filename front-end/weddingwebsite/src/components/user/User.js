import React, { Component } from 'react';
import {Form, Text} from 'informed';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FormCard from '../cards/FormCard';
class User extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return( <div> <FormCard></FormCard></div>)
  }
}
const mapStateToProps = state => ({
  // loginStatus: state.user.loginStatus,
  user: state.user,
  userName: state.user.full_name,
  redirect: state.loginRedirect.redirectURL,
  error: state.user.error,
});

// export const mapDispatchToProps = dispatch =>
//   bindActionCreators({
//     saveTheDateSubmit,
//   }, dispatch);
// export default connect(mapStateToProps, mapDispatchToProps)(User);
export default connect(mapStateToProps, null)(User);
