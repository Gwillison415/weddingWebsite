import React from 'react'
import FormCard from '../cards/FormCard';
import {
  Tab,
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Responsive,
  Segment
} from 'semantic-ui-react';
import Mccrarywedding from '../../assets/images/Mccrarywedding.jpg';
import DependentGuestRSVPForm from '../cards/DependentGuestRSVPForm';


const PreliminaryRSVP =(props) =>{
  let {user, dependentGuests} = props;
  return (<div>
    <Segment style={{ padding: '2em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Header as='h3' style={{ fontSize: '2em' }}>
            first ask ehadline
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            explanation of what we're getting at
            esn’t interest me what you do for a living. I want to know what you ache for and if you dare to dream of meeting your heart’s longing.

            It doesn’t interest me how old you are. I want to know if you will risk looking like a fool for love, for your drea
          </p>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column floated='left' width={4}>
            <Image src={Mccrarywedding} style={{'marginLeft': '4rem', 'marginTop': '-2rem'}}>

            </Image>
          </Grid.Column>
          <Grid.Column floated='right' width={9}>
            <FormCard></FormCard>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment>
      <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        {dependentGuests.map((guest, idx) =>
          {console.log("guest", guest);
          if (guest.rehersal_invite) {
            return (<div key={idx} style={{display: 'inline-flex'}}>
              <Grid.Column style={{ padding: '.5em 2em' }} width={6}>
                 <DependentGuestRSVPForm guest={guest} mainGuest={user.full_name} isRehersalInvite={false} rehersalInvite={'the celebration jully 13th?'}>
                    </DependentGuestRSVPForm>
                     </Grid.Column>
              <Grid.Column style={{ padding: '.5em 2em' }} width={6}>
                <DependentGuestRSVPForm guest={guest} mainGuest={user.full_name} isRehersalInvite={true} rehersalInvite={' family dinner Jull 11th?'}  >
                   </DependentGuestRSVPForm>
              </Grid.Column>
            </div>)
          } else {
            return  (<div  key={idx}style={{display: 'inline-flex'}}>
            <Grid.Column style={{ padding: '.5em 2em' }} width={6}>
               <DependentGuestRSVPForm guest={guest} mainGuest={user.full_name} isRehersalInvite={false} rehersalInvite={'the celebration jully 13th?'}>
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
