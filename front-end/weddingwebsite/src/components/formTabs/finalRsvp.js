import React from 'react'
import FinalRSVPForm from '../forms/FinalMainGuestRSVPForm';
import {
  Grid,
  Header,
  Image,
  Segment
} from 'semantic-ui-react';
import dubaiDesert from '../../assets/images/dubaiDesert.jpg';
import DependentGuestRSVPForm from '../forms/DependentGuestRSVPForm';

const FinalRSVP = (props) => {
  let { user, dependentGuests } = props;
  
  return (<div>
    <Segment style={{ padding: '2em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Header as='h3' style={{ fontSize: '2em' }}>
            So Are We Doing This or Nah?
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Ok, the time has come to give us a solid answer. No Cali Flakin’ on this one, you’re in or you’re out. We’ve got to know how many mouths the caterer needs to feed and how many rugrats will be dancing to their heart's content on Saturday! If your plans have changed, update your info now. If everything's the same just click ‘Yes, I’ll be there!’ and get your dance moves in order.
          </p>
        </Grid.Row>
        <Grid.Row>
          {/* <Grid.Column floated='left' width={9}>
            <Image src={dubaiDesert} size='huge'>

            </Image>
          </Grid.Column> */}
          <Grid.Column floated='right' width={7}>
            <FinalRSVPForm isFinalRsvp={true} />
          </Grid.Column>
          {user.rehersal_invite? <Grid.Column floated='left' width={7}>
            <FinalRSVPForm isRehersalInvite={true} />
          </Grid.Column>:null}
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          {dependentGuests.map((guest, idx) => {
            if (guest.rehersal_invite) {
              return (<div key={idx} style={{ display: 'inline-flex' }}>
                <Grid.Column style={{ padding: '.5em 2em' }} width={6}>
                  <DependentGuestRSVPForm guest={guest} mainGuest={user.full_name} isRehersalInvite={false} isFinalRsvp={true} rehersalInvite={'  the celebration July 13th?'}>
                  </DependentGuestRSVPForm>
                </Grid.Column>
                <Grid.Column style={{ padding: '.5em 2em' }} width={6}>
                  <DependentGuestRSVPForm guest={guest} mainGuest={user.full_name} isRehersalInvite={true} isFinalRsvp={true} rehersalInvite={'  family dinner July 11th?'}  >
                  </DependentGuestRSVPForm>
                </Grid.Column>
              </div>)
            } else {
              return (<div key={idx} style={{ display: 'inline-flex' }}>
                <Grid.Column style={{ padding: '.5em 2em' }} width={6}>
                  <DependentGuestRSVPForm guest={guest} mainGuest={user.full_name} isRehersalInvite={guest.rehersal_invite} isFinalRsvp={true} rehersalInvite={'the celebration July 13th?'}>
                  </DependentGuestRSVPForm>
                </Grid.Column>
              </div>)
            }
          })
          }
        </Grid.Row>
      </Grid>
    </Segment>
  </div>)
}
export default FinalRSVP;
