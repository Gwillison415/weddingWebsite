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
    if (!this.props.loginStatus) {
      this.props.setRedirectUrl(this.props.location.pathname);
      this.props.history.push('/');
    }
  }
//   componentDidUpdate(prevProps) {
//   if (this.props !== prevProps) {
//       console.log('this.props.location.pathname in auth', this.props.location.pathname);
//     console.log('you prob just logged in');
//   }
// }
  render() {
    if (this.props.loginStatus) {
      return (<Switch>
        <Route path="/user" component={User}/>
       <Route path="/info/accomodations" component={withRouter(AccomodationsInfo)} />
      </Switch>);

    }

    else {
    console.log('switched in auth');

      return (

        <Switch>
         <Route path="/info/accomodations" component={withRouter(AccomodationsInfo)} />
         <HomepageLayout exact path={'/'} user={this.props.user}></HomepageLayout>
        </Switch>
      );

    };
  }
}


const mapStateToProps = state => ({
  loginStatus: state.user.loginStatus,
  user: state.user
})
const mapDispatchToProps = dispatch => bindActionCreators({
  setRedirectUrl
}, dispatch)
// export default connect(mapStateToProps, mapDispatchToProps)(Auth);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));
