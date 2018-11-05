import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {changePageLocation} from '../../redux/actions/login';
import { bindActionCreators } from 'redux';

import {
  Button,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
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


  render() {
    const { children, userName, changePageLocation, signInMessage, user } = this.props
    const { fixed } = this.state
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
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
                <Menu.Item header>Welcome {userName? userName : signInMessage? signInMessage : 'Friend'}</Menu.Item>
                <Menu.Item active={this.props.homeIsActive} onClick={() => {
                  changePageLocation('home')
                  this.props.history.push('/')
                }}> Home
                  {/* <Link to="/">Home </Link> */}
                </Menu.Item>
                <Menu.Item active={this.props.profileIsActive} onClick={() => {
                  changePageLocation('profile')
                  this.props.history.push('/user')
                  if (!user.loginStatus) {
                    console.log('nay logged in');
                    window.alert('Ya gotta log in to see your profile silly')
                  }
                }} > Profile

                  {/* <Link to="/user">Profile  </Link> */}
                </Menu.Item>
                <Dropdown text='Venue' pointing className='link item'>
                  <Dropdown.Menu>

                    <Dropdown.Item link="link" href="http://yokayoranch.com/" target="_blank">The Venue</Dropdown.Item>
                    <Dropdown.Item link="link" href='https://www.linkedin.com/pulse/why-we-chose-oauth-20-databraid-little-open-source-could-willison/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_post_details%3B%2FPDbr34GRV6qZB%2BX%2Bxer7A%3D%3D'>another link</Dropdown.Item>

                    <Dropdown.Item link="link" href="https://www.linkedin.com/pulse/how-study-any-subject-larger-net-learning-efficiency-grant-willison/">Studying Efficiency</Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown text='Guest Info' pointing className='link item'>
                  <Dropdown.Menu>

                    <Dropdown.Item style={{color: 'black'}}>FAQ Page</Dropdown.Item>
                    <Dropdown.Item link="link" href='mailto:keenewillison2019@gmail.com?subject=Question%20about%20___%20from%20____&body=let%20us%20know%20if%20you%20dont%20want%20us%20to%20put%20your%20question%20on%20our%20FAQ' style={{color: 'black'}}>Email a question</Dropdown.Item>
                    <Dropdown.Item >
                      <Link to="/info/accomodations" style={{color: 'black'}} > Accomodations </Link>
                      </Dropdown.Item>
                    <Dropdown.Item ></Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>

                <Menu.Item position='right'>
                  <AccountModal modalStyle={{marginTop: "-250px"}}></AccountModal>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>
        { children }
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
