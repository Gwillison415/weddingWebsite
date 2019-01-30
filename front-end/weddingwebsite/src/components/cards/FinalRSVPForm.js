import React, {Component} from 'react'
import {Form, RadioGroup, Radio } from 'informed';
import {Card, Icon, Image} from 'semantic-ui-react'
import logostd from '../../assets/images/logostd.png';
import {saveTheFinalDateFormSubmit} from '../../redux/actions/forms.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class FinalRSVPForm extends Component {

  triggerRSVPSubmit = () => {

    const formState = this.formApi.getState();
    console.log('formState====', formState);
    const {RSVP} = formState.values;
    const {invalid} = formState;
    console.log("RSVP===", RSVP, "Invalid?==", invalid);

    if (RSVP && !invalid ) {
      let formAnswers = Object.assign({}, {RSVP}, {name: this.props.userName})
      this.props.saveTheFinalDateFormSubmit(formAnswers)
    } else {
      console.log('failed handleClick unexpectedly');
    }
     this.formApi.reset()
  }
  setFormApi = (formApi) => {
    this.formApi = formApi;
  }

  render()  {
    const {user} = this.props;
    return (

      <Card>
      <Image src={logostd}/>
      <Card.Content>
        <Card.Header>Hi {user.full_name}</Card.Header>
        <Card.Meta>
          <span className='date'>So, would you like to RSVP?</span>
        </Card.Meta>
        <Card.Description>
          <Form id="radio-form" getApi={this.setFormApi} onSubmit={() => {
              this.triggerRSVPSubmit()
            }}>
            {
              ({formState}) => (<div >

                  <RadioGroup field="RSVP">
                    <label htmlFor="radio-yes">Most Definitely</label>
                    <Radio value="yes" id="radio-yes"/>
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
    </Card>)}
}
const mapStateToProps = state => ({
  // loginStatus: state.user.loginStatus,
  user: state.user,
  userName: state.user.full_name,
  // redirect: state.loginRedirect.redirectURL,
  error: state.user.error,
  dependentGuests: state.user.dependentGuests,
  rehersal_invite: state.saveTheDateForm.rehersal_invite,

});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    saveTheFinalDateFormSubmit,
  }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FinalRSVPForm);
