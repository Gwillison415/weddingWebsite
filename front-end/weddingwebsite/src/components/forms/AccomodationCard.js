import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Form, RadioGroup, Radio} from 'informed';
import {Card, Icon, Image, Grid, Segment} from 'semantic-ui-react'
import logolodging from '../../assets/images/logolodging.png';
import gnarv from '../../assets/images/gnarv.jpg';
import Countdown from '../countdown/CountDown.js';
import {accomodationsFormSubmit} from '../../redux/actions/forms';
class AccomodationCard extends Component {
  constructor(props){
    super(props)
    this.state ={
      responseMessage: '',
      radioStyle: { height: 20, width: 20, margin: 5 }
    }
  }

  triggerSubmit = (userName) => {
    const formState = this.formApi.getState();
    const {accomodations} = formState.values;
    const {invalid} = formState;

    if (accomodations && !invalid) {
      let formAnswers = Object.assign({}, {accomodations}, {userName: userName})
      this.props.accomodationsFormSubmit(formAnswers)
      this.setState({ responseMessage: `Great, we have you as ${accomodations}`})
    } else {
      console.log('failed handleClick unexpectedly');
    }
  }
  setFormApi = (formApi) => {
    this.formApi = formApi;
  }
  render() {
    const {user} = this.props;
    const { responseMessage, radioStyle} = this.state;
    return (<div>
      <Grid>
        <Grid.Row>
          <h3>Remember, you're only seeing this because you’re VIP and everyone should know your name by now at the box office. We'd like you to be stuck with us all weekend. We imagined you’re interested but it's totally cool if you'd rather not be onsite with the hippie lovefest.
          </h3>
          <h2>we'd like the answer to this one
            <b> ASAP </b>
            so we can open the space to others if available!</h2>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={7}>
            <Image src={gnarv} />
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
                      this.triggerSubmit(this.props.userName)
                    }}>
                    {
                      ({formState}) => (<div >

                        <RadioGroup field="accomodations">
                           <Segment compact>
                          <label htmlFor="radio-no">No, I will make other accommodations</label>
                          <Radio value="no" id="radio-no" style={radioStyle}/>
                          </Segment>
                          <Segment compact>
                          <label htmlFor="radio-yes">Yes! And I am cool with what you offered.</label>
                          <Radio value="yes" id="radio-yes" style={radioStyle}/>
                        </Segment>
                          <Segment compact>
                          <label htmlFor="radio-yesEasy">Yes! And I am fine with where ever you need to put me.</label>
                          <Radio value="yesEasy" id="radio-yesEasy" style={radioStyle}/>
                          </Segment>
                           <Segment compact>
                          <label htmlFor="radio-yesBut">Yes, But I would prefer a different accommodation. (please e-mail us directly) </label>
                          <Radio value="yesBut" id="radio-yesBut" style={radioStyle}/>
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
                <h4>{responseMessage} </h4>
              </Card.Content>
              <Card.Content extra={true}>
                <h4>please still rsvp in the other tabs!</h4>
                <a>
                  <Icon name='user'/>
                  You will be able to change this for
                  <Countdown minVisible={{
                      visibility: 'hidden'
                    }} endDate={' 01 Apr 2019 00:00:00'}></Countdown>
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>)
  }
}
const mapStateToProps = state => ({

  user: state.user,
  userName: state.user.full_name,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  accomodationsFormSubmit
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AccomodationCard);
