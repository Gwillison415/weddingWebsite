import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import User from '../user/User';
import {bindActionCreators} from 'redux'
import {setRedirectUrl} from '../../redux/actions/login';
import HomepageLayout from '../home/HomepageLayout';

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
  render() {

    if (this.props.loginStatus) {
      return (<Switch>
        <Route path="/user" component={User}/>

      </Switch>);
    } else {

      return (<Switch>
        <Route path="/" component={HomepageLayout}/>

      </Switch>);

    };
  }
}

const mapStateToProps = state => ({loginStatus: state.user.loginStatus})
const mapDispatchToProps = dispatch => bindActionCreators({
  setRedirectUrl
}, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));
