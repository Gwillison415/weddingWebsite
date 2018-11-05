import React, {Component} from 'react'
import {Form, Text, RadioGroup, Radio} from 'informed';
import {Card, Icon, Image} from 'semantic-ui-react'
import saveTheDate from '../../assets/images/saveTheDate.jpeg';
import logowedcel from '../../assets/images/logowedcel.png';
import logofamdin from '../../assets/images/logofamdin.png';
import {saveTheDateDependentFormSubmit} from '../../redux/actions/forms.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import renderIf from 'render-if';
class DependentGuestRSVPForm extends Component {
  constructor(props) {
    super(props)
  }
  triggerRSVPSubmit = () => {

    const formState = this.formApi.getState();
    console.log('formState====', formState);
    const {RSVP} = formState.values;
    const {invalid} = formState;
    console.log("RSVP===", RSVP, "Invalid?==", invalid);
    let type;
    if (this.props.isRehersalInvite) {
      type = 'rehersal_rsvp';
    } else if (this.props.isFinalRsvp) {
      type = 'final_rsvp';
    } else {
      type = 'rsvp'
    }

    if (RSVP && !invalid) {
      let formAnswers = Object.assign({}, {
        RSVP
      }, {
        dependentGuest: this.props.guest.full_name
      }, {
        mainGuest: this.props.mainGuest
      }, {type: type})
      this.props.saveTheDateDependentFormSubmit(formAnswers)
    } else {
      console.log('failed handleClick unexpectedly');
    }
    // this.formApi.reset()
  }
  setFormApi = (formApi) => {
    this.formApi = formApi;
  }

  render() {
    const {guest, rehersalInvite, isRehersalInvite} = this.props;
    return (<Card>
      <Image src={isRehersalInvite
          ? logofamdin
          : logowedcel}/>
      <Card.Content>
        <Card.Header>
          So, will {guest.full_name}
          be able to join us for
          <u>{rehersalInvite}</u>
        </Card.Header>
        <Card.Meta>
          <span className='date'></span>
        </Card.Meta>
        <Card.Description>
          <Form id="radio-form" getApi={this.setFormApi} onSubmit={() => {
              this.triggerRSVPSubmit()
            }}>
            {
              ({formState}) => (<div >

                <RadioGroup field="RSVP">
                  <label htmlFor="radio-yes">Most Definitely</label>
                  <Radio value="yes" id="radio-yes"/> {
                    renderIf(isRehersalInvite)(<div>
                      <label htmlFor="radio-maybe">Maybe</label>
                      <Radio value="maybe" id="radio-maybe"/>
                    </div>)
                  }
                  <label htmlFor="radio-no">Me Thinks Not</label>
                  <Radio value="no" id="radio-no"/>

                </RadioGroup>
                <button type="submit">Submit</button>

                <p>{
                    formState.errors.email
                      ? JSON.stringify(formState.errors.email)
                      : ''
                  }</p>
                <p>{
                    formState.errors.password
                      ? JSON.stringify(formState.errors.password)
                      : ''
                  }</p>
              </div>)
            }
          </Form>
        </Card.Description>
      </Card.Content>
      <Card.Content extra={true}>
        <a>
          <Icon name='user'/>

        </a>
      </Card.Content>
    </Card>)
  }
}
// const mapStateToProps = state => ({
//    loginStatus: state.user.loginStatus,
//   user: state.user,
//   userName: state.user.full_name,
//    redirect: state.loginRedirect.redirectURL,
//   error: state.user.error,
//   dependentGuests: state.user.dependentGuests,
//   rehersal_invite: state.saveTheDateForm.rehersal_invite,
//
// });

export const mapDispatchToProps = dispatch => bindActionCreators({
  saveTheDateDependentFormSubmit
}, dispatch);
export default connect(null, mapDispatchToProps)(DependentGuestRSVPForm);
