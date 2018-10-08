import React, {Component} from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
  Reveal
} from 'semantic-ui-react'
import AccountModal from '../account/AccountModal';
import { connect } from 'react-redux';

import renderIf from 'render-if';
const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '2em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease'
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'
}

 class Nav extends Component {
  constructor(props) {
    super(props)
      this.state = {
        menuFixed: false,
        showAccountModal: false
      }

  }
  // componentDidUpdate(prevprops) {
  //   if (this.props.user.userName !== this.prevprops.user.userName) {
  //
  //   }
  // }
stickTopMenu = () => this.setState({menuFixed: true});
unStickTopMenu = () => this.setState({menuFixed: false});
// showAccountModal = () => this.setState({showAccountModal: true})
closeAccountModal = () => this.setState({showAccountModal: false})

    render() {
      const {menuFixed, overlayFixed} = this.state;
      const { loginStatus, userName, user } = this.props;
      return (<div>
        <Visibility onBottomPassed={this.stickTopMenu} onBottomVisible={this.unStickTopMenu} once={false}>
        <Menu borderless="borderless" fixed={menuFixed && 'top'} style={menuFixed
            ? fixedMenuStyle
            : menuStyle}>
          <Container text="text">

            <Menu.Item header="header">Welcome {userName? userName : 'Friend'}</Menu.Item>
            <Menu.Menu postion='left'>
              <Dropdown text='Venue' pointing="pointing" className='link item'>
                <Dropdown.Menu>

                  <Dropdown.Item link="link" href="http://yokayoranch.com/" target="_blank">The Venue</Dropdown.Item>
                  <Dropdown.Item link="link" href='https://www.linkedin.com/pulse/why-we-chose-oauth-20-databraid-little-open-source-could-willison/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_post_details%3B%2FPDbr34GRV6qZB%2BX%2Bxer7A%3D%3D'>OAuth 2.0</Dropdown.Item>

                  <Dropdown.Item link="link" href="https://www.linkedin.com/pulse/how-study-any-subject-larger-net-learning-efficiency-grant-willison/">Studying Efficiency</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
            <Menu.Menu postion='center'>
              <Dropdown text='FAQ' pointing="pointing" className='link item'>
                <Dropdown.Menu>

                  <Dropdown.Item >FAQ Page</Dropdown.Item>
                  <Dropdown.Item link="link" href='mailto:keenewillison2019@gmail.com?subject=Question%20about%20___%20from%20____&body=let%20us%20know%20if%20you%20dont%20want%20us%20to%20put%20your%20question%20on%20our%20FAQ'>Ask a question</Dropdown.Item>
                  <Dropdown.Item ></Dropdown.Item>
                  <Dropdown.Item ></Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
            <Menu.Menu center="center">
              <Dropdown text='????' pointing="pointing" className='link item'>
                <Dropdown.Menu>

                  <Dropdown.Item link="link"> another dropdown
                  </Dropdown.Item>
                  {/* <Dropdown.Item >
                    <a href={GrantWillisonResume} download="download" name="GrantWillisonResume.pdf">
                      Download</a>
                  </Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
            <Menu.Menu position='right'>

                <AccountModal closeAccountModal={this.closeAccountModal}></AccountModal>
              {/*  showAccountModal={this.state.showAccountModal}

                <Dropdown text='Projects' pointing="pointing" className='link item'>
                <Dropdown.Menu>
                  <Dropdown.Item link="link" href='https://dashboard.grantwillison.tech/'>DataBraid Dashboard
                  </Dropdown.Item>
                  <Dropdown.Divider/>
                  <Dropdown.Item href='http://gaminganalytics.grantwillison.tech/'>Highcharts Project</Dropdown.Item>
                  <Dropdown.Item href='http://moogsoft.grantwillison.tech/'>
                    De-Duped Data Project</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </Menu.Menu>
          </Container>
        </Menu>
          </Visibility>

      </div>)
    }
  }
  const mapStateToProps = state => ({
    // loginStatus: state.user.loginStatus,
    // user: state.user,
    userName: state.user.full_name,
    redirect: state.loginRedirect.redirectURL,
    // error: state.user.error,
  });

  export default connect(mapStateToProps, null)(Nav)
