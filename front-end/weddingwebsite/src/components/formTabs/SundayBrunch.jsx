import React from 'react'
import {
  Grid,
  Header,
  Image,
  Segment
} from 'semantic-ui-react';
import dubaiDesert from '../../assets/images/dubaiDesert.jpg';
import BrunchForm from '../forms/BrunchForm';

const SundayBrunch = (props) => {
  let { user, dependentGuests } = props;

  return (<div>
    <Segment style={{ padding: '2em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Header as='h3' style={{ fontSize: '2em' }}>
            GoodBye Brunch July 14th  10am - 1pm
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Good Morning Campers! We've officialy been wed, and whatever state you're in - we'd love to know if you'd like to come by and partake in a little poolside brunch featuring burritos, breakfast burritos and tacos, provided by El Coyote in their Taco Truck, and the father of the groom.
          </p>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
        <Grid.Column style={{ padding: '.5em 1em' }} width={6}>
          <BrunchForm guest={user} inviteMessage={'the Goodbye Brunch July 14th?'}/>
        </Grid.Column>
          {dependentGuests.map((guest, idx) => {
              return (<div key={idx} style={{ display: 'inline-flex' }}>
                <Grid.Column style={{ padding: '.5em 1em' }} width={6}>
                  <BrunchForm guest={guest} mainGuest={user.full_name}  isFinalRsvp={true} inviteMessage={'the Goodbye Brunch July 14th?'}>
                  </BrunchForm>
                </Grid.Column>
              </div>)
          })
          }
        </Grid.Row>
      </Grid>
    </Segment>
  </div>)
}
export default SundayBrunch;
