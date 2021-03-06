import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { changePageLocation } from '../../redux/actions/login';
import { bindActionCreators } from 'redux';

import {
  Container,
  Dropdown,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import HomepageHeading from './HomepageHeading';
import AccountModal from '../account/AccountModal';

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  scroll = () => {
    window.scrollTo({
      top: 200,
      left: 0,
      behavior: 'smooth'
    })
  }


  render() {
    const { children, userName, changePageLocation, signInMessage, user, profileIsActive, homeIsActive } = this.props
    const { fixed } = this.state
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onTopPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
          onTopVisible={this.hideFixedMenu}
        >

          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 500, padding: '1em 0em', backgroundColor: '#034b5b' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item header>Welcome {userName ? userName : signInMessage ? signInMessage : 'Friend'}</Menu.Item>
                <Menu.Item active={homeIsActive} onClick={() => {
                  changePageLocation('home')
                  this.props.history.push('/')
                }}> Home
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
                <Dropdown text='Places' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item link="link" href="http://yokayoranch.com/" target="_blank">The Venue</Dropdown.Item>
                    <Dropdown.Item link="link" href="http://www.vichysprings.com/" target="_blank">Vichy Hot Springs</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown text='Guest Info' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item style={{ color: 'black' }}>
                      <Link to="/info/timeline" style={{ color: 'black' }}
                      > Timeline </Link>
                    </Dropdown.Item>
                    <Dropdown.Item >
                      <Link to="/info/accomodations" style={{ color: 'black' }} onClick={this.scroll}
                      > Accomodations </Link>
                    </Dropdown.Item>
                    <Dropdown.Item >
                      <Link to="/info/travel" style={{ color: 'black' }} onClick={this.scroll}
                      > Travel </Link>
                    </Dropdown.Item>
                    <Dropdown.Item style={{ color: 'black' }}>
                      <Link to="/info/faq" style={{ color: 'black' }} onClick={this.scroll}
                      > FAQ Page </Link>
                    </Dropdown.Item>
                    <Dropdown.Item link="link" href='mailto:keenewillison2019@gmail.com?subject=Question%20about%20___%20from%20____&body=let%20us%20know%20if%20you%20dont%20want%20us%20to%20put%20your%20question%20on%20our%20FAQ' style={{ color: 'black' }}>Email a question</Dropdown.Item>
                    <Dropdown.Item ></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item position='right'>
                  <AccountModal modalStyle={{ marginTop: "-250px" }}></AccountModal>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}
const mapStateToProps = state => ({
  // loginStatus: state.user.loginStatus,
  user: state.user,
  homeIsActive: state.user.homeIsActive,
  profileIsActive: state.user.profileIsActive,
  userName: state.user.full_name,
  redirect: state.user.redirectURL,
  // error: state.user.error,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  changePageLocation,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DesktopContainer))
