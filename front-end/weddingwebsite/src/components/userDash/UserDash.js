import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUserPropsFromForms } from '../../redux/actions/forms';
import { DependentGuestRow } from "./DependentDash";
import {
  Grid,
  Icon,
  Container,
  Divider
} from 'semantic-ui-react';
const colStyle = { textAlign: "center" }
class UserDash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileColWidth: 5,
      laptopColWidth: this.assignColWidthMain(this.props.user)
    }
  }

  rsvpStatus = (rsvp) => {
    if (rsvp === true) {
      return 'Yes!'
    } else if (rsvp === false) {
      return 'No'
    }
    else {
      return '???'
    }
  }
  lodging = (user) => {
    // q1 = vip arrival
    switch (user.poll_q1) {
      case 'yes':
        return 'I\'m Sorted!';
      case 'yesEasy':
        return 'Yes + Flexible';
      case 'no':
        return 'Working on it';
      case 'yesBut':
        return 'It\'s complicated'
      default:
        break;
    }
  }
  assignColWidthMain = (user) => {
    const totalCols = 16;
    let cols = 4;
    if (user.additional_guest_count > 0) {
      cols++
    }
    if (user.onsite_invite) {
      cols++
    }
    return Math.floor(totalCols / cols)
  }
  assignColWidthDependentGuest = (guests) => {
    let numbGuests = guests.length
    const totalCols = 16;
    if (numbGuests > 4) {
      numbGuests /= 2
    }
    return Math.floor(totalCols / numbGuests);
  }
  render() {
    const { user, firstRSVP, finalRSVP, hasOnsiteInvite, hasRehersalInvite, dependentGuests, rehersalRSVP, mealPreference } = this.props;
    // const { laptopColWidth, mobileColWidth } = this.state;

    return (<Container>
      <Grid centered stackable columns={4}>
        <Grid.Row >
          <Grid.Column style={colStyle} >
            <h5>Initial RSVP</h5>
            <Icon name='heart' size='small' /> {firstRSVP}
          </Grid.Column>
          <Grid.Column style={colStyle} >
            <h5>Final RSVP</h5>
            <Icon name='envelope square' size='small' />{this.rsvpStatus(finalRSVP)}
          </Grid.Column>

          {hasOnsiteInvite ? <Grid.Column style={colStyle} >
            <h5>Lodging Status: </h5>
            <Icon name='suitcase' size='small' />
            {this.lodging(user)}
          </Grid.Column> : null}
          {hasRehersalInvite ? <Grid.Column style={colStyle} >
            <h5>Family Dinner</h5>
            <Icon name='handshake outline' size='small' /> {this.rsvpStatus(rehersalRSVP)}
          </Grid.Column> : null}
          {/* </Grid.Row>
          <Grid.Row> */}
          <Grid.Column style={colStyle} >
            <h5>Carpooling</h5>
            <Icon name='car' size='small' /> TBD..
          </Grid.Column>
          <Grid.Column style={colStyle} >
            <h5>Meal Preference</h5>
            <Icon name='food' size='small' /> {mealPreference}
          </Grid.Column>

          {user.additional_guest_count > 0 ? <Grid.Column style={colStyle} >
            <h5>Additional Guests</h5>
            <Icon name='plus square' size='small' /> {user.additional_guest_count}
          </Grid.Column> : null}

        </Grid.Row>
      </Grid>
      <Divider></Divider>
      <Grid centered columns='equal'>
        <DependentGuestRow guests={dependentGuests} dependentGuestsColWidth={this.assignColWidthDependentGuest(dependentGuests)} rsvpStatus={this.rsvpStatus}></DependentGuestRow>

      </Grid>
    </Container>)
  }
}

const mapStateToProps = state => ({
  user: state.user,
  error: state.user.error,
  dependentGuests: state.user.dependentGuests,
  hasRehersalInvite: state.user.rehersal_invite,
  hasOnsiteInvite: state.user.onsite_invite,
  firstRSVP: state.user.first_rsvp,
  finalRSVP: state.user.final_rsvp,
  rehersalRSVP: state.user.rehersal_rsvp,
  mealPreference: state.user.meal_pref
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    updateUserPropsFromForms,

  }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UserDash);

