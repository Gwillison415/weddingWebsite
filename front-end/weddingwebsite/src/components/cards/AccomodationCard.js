import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Form, Text, RadioGroup, Radio} from 'informed';
import {Card, Icon, Image, Grid, Segment} from 'semantic-ui-react'
import logolodging from '../../assets/images/logolodging.png';
import Countdown from '../countdown/CountDown.js';
import {accomodationsFormSubmit} from '../../redux/actions/forms';
class AccomodationCard extends Component {
  constructor(props) {
    super(props)
  }

  triggerSubmit = () => {
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
      this.props.accomodationsFormSubmit(formAnswers)
    } else {
      console.log('failed handleClick unexpectedly');
    }
    // this.formApi.reset()
  }
  setFormApi = (formApi) => {
    this.formApi = formApi;
  }
  render() {
    const {user} = this.props;
    return (<div>
      <Grid>
        <Grid.Row>
          <h3>Remember, you're only seeing this because you’re VIP and everyone should know your name by now at the box office. We'd like you to be stuck with us all weekend. We imagined you’re interested but it's totally cool if you'd rather not be onsite with the hippie lovefest.
          </h3>
          <h2>we'd like the answer to this one
            <b>ASAP</b>
            so we can open the space to others if available!</h2>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}>
            <p>
              ots of fings
            </p>
          </Grid.Column>
          <Grid.Column width={9}>
            <Card>
              <Image src={logolodging}/>
              <Card.Content>
                <Card.Header>Is the place we have set aside for you ok?</Card.Header>
                <Card.Meta>
                  <span className='date'></span>
                </Card.Meta>
                <Card.Description>
                  <Form id="radio-form" getApi={this.setFormApi} onSubmit={() => {
                      this.triggerSubmit()
                    }}>
                    {
                      ({formState}) => (<div >

                        <RadioGroup field="accomodations">
                           <Segment compact>
                          <label htmlFor="radio-glamp">Glamping</label>
                          <Radio value="glamp" id="radio-glamp"/>
                          <label htmlFor="radio-RV">RV</label>
                          <Radio value="RV" id="radio-RV"/>
                          <label htmlFor="radio-Onsite">Onsite</label>
                          <Radio value="Onsite" id="radio-Onsite"/>
                          </Segment>
                           <Segment compact>
                          <label htmlFor="radio-Off-site">Yes </label>
                          <Radio value="Off-site" id="radio-Off-site"/>
                          <label htmlFor="radio-whereever">whereever</label>
                          <Radio value="whereever" id="radio-whereever"/>
                          <label htmlFor="radio-noIdea">IDK</label>
                          <Radio value="noIdea" id="radio-noIdea"/>
                          </Segment>
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
                  You will be able to change this for
                  <Countdown minVisible={{
                      visibility: 'hidden'
                    }} endDate={'Tue, 05 Mar 2019 00:00:00'}></Countdown>
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>)
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
  accomodationsFormSubmit
}, dispatch);
export default connect(null, mapDispatchToProps)(AccomodationCard);
