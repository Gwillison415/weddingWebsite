import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUserPropsFromForms } from '../../redux/actions/forms';

import {
  Grid,
  Icon,
  Container,
  Divider
} from 'semantic-ui-react';

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
    const { user, firstRSVP, finalRSVP, hasOnsiteInvite, dependentGuests, rehersalRSVP } = this.props;
    const { laptopColWidth, mobileColWidth } = this.state;
    const dependentGuestsColWidth = this.assignColWidthDependentGuest(dependentGuests)

    return (<Container>
      <Grid centered>
        <Grid.Row>
          <Grid.Column mobile={mobileColWidth} computer={laptopColWidth}>
            <h5>Initial RSVP</h5>
            <Icon name='heart' size='small' /> {firstRSVP}
          </Grid.Column>
          <Grid.Column mobile={mobileColWidth} computer={laptopColWidth}>
            <h5>Final RSVP</h5>
            <Icon name='envelope square' size='small' />{this.rsvpStatus(finalRSVP)}
          </Grid.Column>
          <Grid.Column mobile={mobileColWidth} computer={laptopColWidth}>
            <h5>Lodging Status: </h5>
            <Icon name='suitcase' size='small' />
            {this.lodging(user)}
          </Grid.Column>
          <Grid.Column mobile={mobileColWidth} computer={laptopColWidth}>
            <h5>Carpooling</h5>
            <Icon name='car' size='small' />
          </Grid.Column>
          {hasOnsiteInvite ? <Grid.Column mobile={mobileColWidth} computer={laptopColWidth}>
            <h5>Family Dinner</h5>
            <Icon name='handshake outline' size='small' /> {this.rsvpStatus(rehersalRSVP)}
          </Grid.Column> : null}
          {user.additional_guest_count > 0 ? <Grid.Column mobile={mobileColWidth} computer={laptopColWidth}>
            <h5>Additional Guests</h5>
            <Icon name='plus square' size='small' /> {user.additional_guest_count}
          </Grid.Column> : null}

        </Grid.Row>
        <Divider></Divider>
        <Grid.Row>
          {user.dependentGuests.map((guest, idx) => {
            return (<Grid.Column key={idx} mobile={8} computer={dependentGuestsColWidth}>
              <h5>{guest.full_name} </h5>

              <Grid.Row>
                <h5>
                  <span>
                    <Icon name='food' size='small' ></Icon>
                    Meal Preference: {guest.meal_pref}
                  </span>
                </h5>
              </Grid.Row>
              {guest.rehersal_invite ? <Grid.Row>
                <h5><span>
                  <Icon name='envelope square' size='small' > </Icon>
                </span>
                  Rehersal RSVP: {this.rsvpStatus(guest.rehersal_rsvp)}
                </h5>

              </Grid.Row> : null}
              {guest.food_allergies.length ? <Grid.Row>
                <h5> <span>
                  <Icon name='bullhorn' size='small' > </Icon>
                </span>
                  Allergies: {guest.food_allergies}
                </h5>

              </Grid.Row> : null}

            </Grid.Column>)
          })}

        </Grid.Row>
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
  rehersalRSVP: state.user.rehersal_rsvp
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    updateUserPropsFromForms,

  }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UserDash);
// export default connect(mapStateToProps, null)(UserDash);
