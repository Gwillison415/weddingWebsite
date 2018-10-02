
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { login, setRedirectUrl } from '../../redux/actions/login';
import Login from './Login';

const mapStateToProps = state => ({
  user: state.user,
});


const connectToStore = connect(mapStateToProps, { login });

const didMount = lifecycle({
  componentDidMount() {
    const { user, redirect } = this.props;
    console.log('in reg lgin user===', user);
    // if (!redirect) {
    //   this.props.setRedirectUrl('/');
    // }
    if (user.loginStatus) {
      console.log('logged in via LoginContainer');
    // console.log('in confirmed lgin user===', user);
      // this.props.history.replace(redirect);
    }

  },
});

export default compose(connectToStore, didMount)(Login);
