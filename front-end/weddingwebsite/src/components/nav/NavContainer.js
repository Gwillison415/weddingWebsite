import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { logout } from '../../redux/actions/account';
import { toggleNav, closeNav } from 'redux/actions/nav';
import Nav from './Nav';

const mapStateToProps = state => ({
  loginStatus: state.user.loginStatus,
  user: state.user,
  userName: state.user.full_name,
  // navIsOpen: state.navState.navIsOpen,
});

export default connect(mapStateToProps, { logout, toggleNav, closeNav })(Nav);
