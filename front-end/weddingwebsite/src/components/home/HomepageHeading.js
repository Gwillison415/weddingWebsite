import React from 'react';
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
} from 'semantic-ui-react'
import Countdown from '../countdown/CountDown.js';
import header from '../../assets/images/header.png';

const HomepageHeading = ({ mobile }) => (
  <div>
    <Container>
      <Image src={header} style={{'marginRight': '2rem'}}>

      </Image>
    </Container>
    <Container style={{backgroundColor: '#034b5b'}} text>
      <Header
        as='h1'
        content='Imagine, a wedding'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '1.5em',
        }}
      />
      <Header
        as='h2'
        content='where you Do whatever you want.'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1em',
        }}
      />
      <Header
        as='h3'
        content='Except that this is about us'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1em',
        }}
      />
      <Countdown minVisible={{visibility:'visible'}} endDate={'Sat, 13 Jul 2019 00:00:00'}></Countdown>
    </Container>
  </div>
)

 export default HomepageHeading;
