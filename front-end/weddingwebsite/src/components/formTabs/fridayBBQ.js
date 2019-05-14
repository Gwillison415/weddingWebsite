import React from 'react'
import FinalRSVPForm from '../forms/FinalMainGuestRSVPForm';
import {
  Grid,
  Header,
  Image,
  Segment
} from 'semantic-ui-react';
import dubaiDesert from '../../assets/images/dubaiDesert.jpg';
import BBQForm from '../forms/BBQForm';

const FinalRSVP = (props) => {
  let { user, dependentGuests } = props;

  return (<div>
    <Segment style={{ padding: '2em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Welcome BBQ  July 12th  6-9pm
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            We'll be welcoming guests with a barbeque hosted by the bride\'s family 6-9pm July 12th. If you think you'll make it with an apetite, mark yourself yes! Otherwise, just show up for a beverage when you can or we'll see you Saturday!
          </p>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
        <Grid.Column style={{ padding: '.5em 1em' }} width={6}>
          <BBQForm guest={user} inviteMessage={'the welcome BBQ July 12th?'}/>
        </Grid.Column>
          {dependentGuests.map((guest, idx) => {

              return (<div key={idx} style={{ display: 'inline-flex' }}>
                <Grid.Column style={{ padding: '.5em 1em' }} width={6}>
                  <BBQForm guest={guest} mainGuest={user.full_name}  isFinalRsvp={true} inviteMessage={'the welcome BBQ July 12th?'}>
                  </BBQForm>
                </Grid.Column>
              </div>)
          })
          }
        </Grid.Row>
      </Grid>
    </Segment>
  </div>)
}
export default FinalRSVP;
