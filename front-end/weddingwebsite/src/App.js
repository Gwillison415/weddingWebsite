import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import { Container, Image } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import AccountModal from './components/account/AccountModal';
import HomepageLayout from './components/home/HomepageLayout';
import Nav from './components/nav/Nav';
import User from './components/user/User';
import Auth from './components/auth/Auth';
import {AccomodationsInfo} from './components/info/AccomodationsInfo';
import {TravelInfo} from './components/info/TravelInfo';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {loginStatus, user} = this.props;
    return (
      <div className="App">
        <Container>
          <Route exact path="/"
          render={(props) => <HomepageLayout user={user} />}/>
           <Route exact path="/info/accomodations" component={AccomodationsInfo} />
           <Route exact path="/info/travel" component={TravelInfo} />
          <Route path="/user" component={Auth} />
        </Container>

      </div>
    );
  }
}
// export default App;
const mapStateToProps = state => ({
  user: state.user
});
export default withRouter(connect(mapStateToProps, null)(App));
