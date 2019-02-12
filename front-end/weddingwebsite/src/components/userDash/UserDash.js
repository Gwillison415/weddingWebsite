import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateUserPropsFromForms} from '../../redux/actions/forms';

import {
  Grid,
  Icon,
  Container
} from 'semantic-ui-react';

class UserDash extends Component {
constructor(props){
  super(props)
  this.state = {
    mobileColWidth: 5,
    laptopColWidth: this.assignColWidth(this.props.user)
  }
}

  finalRsvpStatus = (user) => {
    if (user.final_rsvp === true) {
      return 'Yes!'
    } else if (user.final_rsvp === false) {
      return 'No'
    }
    else {
      return '???'
    }
  }

  assignColWidth = (user) => {
    const totalCols = 16;
    let cols = 4;
    if (user.additional_guest_count > 0 ){
      cols++
    }
    if (user.onsite_invite) {
      cols++
    }
    return Math.floor(totalCols / cols)
  }
  render() {
    const {user, firstRSVP, hasOnsiteInvite} = this.props;
    const { laptopColWidth} = this.state;
    console.log('laptopColWidth', laptopColWidth);
    

    return (<Container>
      <Grid >
        <Grid.Row>
          {user.additional_guest_count > 0 ? <Grid.Column mobile={5} largeScreen={laptopColWidth}>
              <h5>Additional Guests</h5>
             <Icon name='plus square' size='small' /> {user.additional_guest_count}
          </Grid.Column> : null}
          <Grid.Column mobile={5} largeScreen={laptopColWidth}>
            <h5>Initial RSVP</h5>
             <Icon name='envelope square' size='small' /> {firstRSVP}
          </Grid.Column>
          <Grid.Column mobile={5} largeScreen={laptopColWidth}>
              <h5>Final RSVP</h5>
             <Icon name='heart' size='small' >{this.finalRsvpStatus(user)} </Icon>

          </Grid.Column>
          <Grid.Column mobile={5} largeScreen={laptopColWidth}>
              <h5>Lodging</h5>
             <Icon name='suitcase' size='small' />
          </Grid.Column>
          <Grid.Column mobile={5} largeScreen={laptopColWidth}>
              <h5>Carpooling</h5>
             <Icon name='car' size='small' />
          </Grid.Column>
           {hasOnsiteInvite? <Grid.Column mobile={5} largeScreen={laptopColWidth}>
              <h5>Family Dinner</h5>
             <Icon name='handshake outline' size='small' />
          </Grid.Column> : null} 
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
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    updateUserPropsFromForms,

  }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UserDash);
// export default connect(mapStateToProps, null)(UserDash);
