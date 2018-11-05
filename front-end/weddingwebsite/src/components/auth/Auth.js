import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import User from '../user/User';
import {bindActionCreators} from 'redux'
import {setRedirectUrl} from '../../redux/actions/login';
import HomepageLayout from '../home/HomepageLayout';
import {AccomodationsInfo} from '../info/AccomodationsInfo';

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {}

  }
  componentDidMount() {
    console.log('this.props.location.pathname in auth', this.props.location.pathname);
    if (!this.props.loginStatus) {
      this.props.setRedirectUrl(this.props.location.pathname);
      this.props.history.push('/');
    }
  }
  // componentDidUpdate(prevProps) {
  // if (this.props.loginStatus !== prevProps.loginStatus) {
  //   console.log('you prob just logged in');
  // }
// }
  render() {

    console.log('in app loginStatus');
    if (this.props.loginStatus) {
      return (<Switch>
        <Route path="/user" component={User}/>
       <Route path="/info/accomodations" component={AccomodationsInfo} />
      </Switch>);
      // return ( <User></User>)
    }
    return null
    // else {
    // console.log('switched in auth');
    //   return ( <HomepageLayout user={this.props.user}></HomepageLayout>
    //   );
    //
    // };
  }
}

{/* <Switch>
  <Route exact path="/"
  render={(props) =>
    <HomepageLayout {...props} signInMessage={'Sign in Silly!'} user={this.props.user}/>
    }
  />

</Switch> */}

const mapStateToProps = state => ({
  loginStatus: state.user.loginStatus,
  user: state.user
})
const mapDispatchToProps = dispatch => bindActionCreators({
  setRedirectUrl
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));
