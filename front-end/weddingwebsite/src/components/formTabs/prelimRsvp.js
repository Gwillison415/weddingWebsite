import React from 'react'
import MainGuestRSVPForm from '../forms/MainGuestRSVPForm';
import {
  Grid,
  Header,
  Image,
  Segment
} from 'semantic-ui-react';
import thaiTemple from '../../assets/images/thaiTemple.jpg';
import DependentGuestRSVPForm from '../forms/DependentGuestRSVPForm';


const PreliminaryRSVP =(props) =>{
  let {user, dependentGuests} = props;
  return (<div>
    <Segment style={{ padding: '2em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Roll Call! This is your first Chance to tell us where you stand!
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            We're planning a gleeful weekend celebration around our nuptials that will take place on Saturday July 13th. Our guestlist is full and our venue limited. So let us know what you know/think about your plans that weekend.
          </p>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column  width={9}>
            <Image src={thaiTemple} size='large' >

            </Image>
          </Grid.Column>
          <Grid.Column width={7}>
            <MainGuestRSVPForm/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment>
      <Grid container stackable verticalAlign='middle'>
      {dependentGuests.length ? <Grid.Row > <Grid.Column textAlign='center'>But Wait? What about the other people we know, that you know?</Grid.Column> </Grid.Row> : null }
      <Grid.Row>
        {dependentGuests.map((guest, idx) =>
          {console.log("guest", guest);
          if (guest.rehersal_invite) {
            return (<div key={idx} style={{display: 'inline-flex'}}>
              <Grid.Column style={{ padding: '.5em 2em' }} width={6}>
                 <DependentGuestRSVPForm guest={guest} mainGuest={user.full_name} isRehersalInvite={false} rehersalInvite={'the celebration July 13th?'}>
                    </DependentGuestRSVPForm>
                     </Grid.Column>
              <Grid.Column style={{ padding: '.5em 2em' }} width={6}>
                <DependentGuestRSVPForm guest={guest} mainGuest={user.full_name} isRehersalInvite={true} rehersalInvite={'family dinner July 11th?'}  >
                   </DependentGuestRSVPForm>
              </Grid.Column>
            </div>)
          } else {
            return  (<div  key={idx}style={{display: 'inline-flex'}}>
            <Grid.Column style={{ padding: '.5em 2em' }} width={6}>
               <DependentGuestRSVPForm guest={guest} mainGuest={user.full_name} isRehersalInvite={false} rehersalInvite={'the celebration July 13th?'}>
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
export default  PreliminaryRSVP;
