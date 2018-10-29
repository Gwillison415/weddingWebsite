import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Image } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import AccountModal from './components/account/AccountModal';
import HomepageLayout from './components/home/HomepageLayout';
import Nav from './components/nav/Nav';
import User from './components/user/User';
import Auth from './components/auth/Auth';
import {AccomodationsInfo} from './components/info/AccomodationsInfo';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {loginStatus} = this.props;
    return (
      <div className="App">

        {/* <Container>
          <Route exact path="/" component={HomepageLayout}/> */}
        {/* <Route exact path="/faq" component={Faq} />
        <Route path="/user" component={AuthContainer} /> */}
        {/* </Container> */}
        <Container>
          <Route exact path="/" component={HomepageLayout}/>

          <Route path="/user" component={Auth} />
          <Route path="/info/accomodations" component={AccomodationsInfo} />

        </Container>

        {/* <Image wrapped size='large' src={burn2018} /> */}
      </div>
    );
  }
}
export default App;
