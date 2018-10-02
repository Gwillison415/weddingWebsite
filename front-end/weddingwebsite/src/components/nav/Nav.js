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

export default class Nav extends Component {
  constructor(props) {
    super(props)
      this.state = {
        menuFixed: false,
        overlayFixed: false
      }

  }
stickTopMenu = () => this.setState({menuFixed: true});
unStickTopMenu = () => this.setState({menuFixed: false});

    render() {
      const {menuFixed, overlayFixed} = this.state;
      return (<div>
        <Visibility onBottomPassed={this.stickTopMenu} onBottomVisible={this.unStickTopMenu} once={false}>
        <Menu borderless="borderless" fixed={menuFixed && 'top'} style={menuFixed
            ? fixedMenuStyle
            : menuStyle}>
          <Container text="text">

            <Menu.Item header="header">Grant Willison</Menu.Item>
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
              <Dropdown text='Guest Portal' pointing="pointing" className='link item'>
                <Dropdown.Menu>

                  <Dropdown.Item link="link" href="https://docs.google.com/document/d/1hBBb6wgTOE_MvfRzYYuAswTksmGsoMjhkcoI_d-M2xM/edit?usp=sharing">sign in
                  </Dropdown.Item>
                  {/* <Dropdown.Item >
                    <a href={GrantWillisonResume} download="download" name="GrantWillisonResume.pdf">
                      Download</a>
                  </Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
            <Menu.Menu position='right'>
              {/* <Dropdown text='Projects' pointing="pointing" className='link item'>
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
