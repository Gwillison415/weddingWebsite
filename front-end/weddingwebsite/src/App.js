import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import HomepageLayout from './components/home/HomepageLayout';
import Auth from './components/auth/Auth';
import {AccomodationsInfo} from './components/info/AccomodationsInfo';
import {TravelInfo} from './components/info/TravelInfo';
import { TimelineInfo } from './components/info/TimelineInfo';
import {Faq} from './components/info/Faq';
import {Charity} from './components/info/Charity';
import {Registry} from './components/info/Registry';

class App extends Component {

  render() {
    const { user} = this.props;

    return (
      <div className="App">
        <Container>
          <Route exact path="/"
          render={() => <HomepageLayout user={user} />}/>
           <Route exact path="/info/accomodations" component={AccomodationsInfo} />
           <Route exact path="/info/timeline" component={TimelineInfo} />
           <Route exact path="/info/travel" component={TravelInfo} />
           <Route exact path="/info/faq" component={Faq} />
           <Route exact path="/gifting/charity" component={Charity} />
           <Route exact path="/gifting/registry" component={Registry} />
          <Route path="/user" component={Auth} />
        </Container>

      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});
export default withRouter(connect(mapStateToProps, null)(App));
