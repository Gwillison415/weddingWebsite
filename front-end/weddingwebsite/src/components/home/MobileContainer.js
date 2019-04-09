import React, {Component} from 'react';
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { changePageLocation } from '../../redux/actions/login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomepageHeading from './HomepageHeading';
import AccountModal from '../account/AccountModal';

class MobileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  handlePusherClick = () => {
    const { sidebarOpened } = this.state
    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children, signInMessage, user, profileIsActive, homeIsActive, userName, changePageLocation } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item header>Welcome {userName ? userName : signInMessage ? signInMessage : 'Friend'}</Menu.Item>
            <Menu.Item active={homeIsActive} onClick={() => {
              changePageLocation('home')
              this.props.history.push('/')
            }}> Home
                  {/* <Link to="/">Home </Link> */}
            </Menu.Item>
            <Menu.Item active={profileIsActive} onClick={() => {
              if (!user.loginStatus) {
                window.alert('Ya gotta log in to see your profile silly')
              } else {
                changePageLocation('profile')
                this.props.history.push('/user')
              }
            }} > Profile
            </Menu.Item>
            <Menu.Item as='a' link href='mailto:keenewillison2019@gmail.com?subject=Question%20about%20___%20from%20____&body=let%20us%20know%20if%20you%20dont%20want%20us%20to%20put%20your%20question%20on%20our%20FAQ'>Email a question</Menu.Item>
            <Menu.Item >
              <Link to="/info/timeline"> Timeline </Link>
            </Menu.Item>
           <Menu.Item >
              <Link to="/info/accomodations" >Accomodations </Link>
            </Menu.Item>
            <Menu.Item >
              <Link to="/info/faq" > FAQ Page </Link>
            </Menu.Item>
            <Menu.Item >
              <Link to="/info/travel" > Travel </Link>
            </Menu.Item>
            <Menu.Item as='a' href="http://yokayoranch.com/" target="_blank">The Venue</Menu.Item>
            <Menu.Item as='a'><AccountModal modalStyle={{ marginTop: "-290px" }}></AccountModal></Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <AccountModal modalStyle={{marginTop: "-150px"}}></AccountModal>
                    {/* <Button as='a' inverted>
                    </Button> */}
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}
const mapStateToProps = state => ({
  user: state.user,
  homeIsActive: state.user.homeIsActive,
  profileIsActive: state.user.profileIsActive,
  userName: state.user.full_name,
  redirect: state.user.redirectURL,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  changePageLocation,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MobileContainer))
