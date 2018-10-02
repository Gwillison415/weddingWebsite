import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { setRedirectUrl } from '../../redux/actions/login';
import Auth from './Auth';

const mapStateToProps = state => ({
  loginStatus: state.user.loginStatus,
  user: state.user,
});

const didMount = lifecycle({
  componentDidMount() {
    const { user } = this.props;
    if (!user.loginStatus) {
      this.props.setRedirectUrl(this.props.location.pathname);
      this.props.history.push('/?loginModal=true');
    }
  },
});

const connectToStore = connect(mapStateToProps, { setRedirectUrl });

export default compose(connectToStore, didMount)(Auth);
