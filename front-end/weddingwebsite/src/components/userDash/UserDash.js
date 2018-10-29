import React, {Component} from 'react';
import {Form, Text} from 'informed';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateUserPropsFromForms} from '../../redux/actions/forms';

import {
  Tab,
  Button,
  Container,
  Grid,
  Icon,
  Image,
  List,
  Responsive,
  Segment
} from 'semantic-ui-react';

class UserDash extends Component {
  constructor(props) {
    super(props)
  }
//   componentDidUpdate(prevProps) {
//   // Typical usage (don't forget to compare props):
//   if (this.props.use !== prevProps.loginStatus) {
//     console.log('you prob just logged in');
//   }
// }
  render() {
    const {user, rehersalInvite, firstRSVP, hasOnsiteInvite} = this.props;
    return (<Container>
      <Grid celled='internally'>
        <Grid.Row>
          {user.additional_guest_count > 0 ? <Grid.Column width={3}>
              <h5>Additional Guests</h5>
             <Icon name='plus square' size='small' /> {user.additional_guest_count}
          </Grid.Column> : null}
          <Grid.Column width={2}>
            <h5>Initial RSVP</h5>
             <Icon name='envelope square' size='small' /> {firstRSVP}
          </Grid.Column>
          <Grid.Column width={2}>
              <h5>Final RSVP</h5>
             <Icon name='heart' size='small' />
          </Grid.Column>
          <Grid.Column width={2}>
              <h5>Lodging</h5>
             <Icon name='suitcase' size='small' />
          </Grid.Column>
          <Grid.Column width={2}>
              <h5>Carpooling</h5>
             <Icon name='car' size='small' />
          </Grid.Column>
          {hasOnsiteInvite? <Grid.Column width={2}>
              <h5>Family Dinner</h5>
             <Icon name='handshake outline ' size='small' />
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
  hasOnsiteInvite: state.user.onsite_invite,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    updateUserPropsFromForms,

  }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UserDash);
// export default connect(mapStateToProps, null)(UserDash);
