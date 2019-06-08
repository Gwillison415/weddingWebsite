import React, { Component } from 'react'
import { Form, RadioGroup, Radio } from 'informed';
import { Card, Icon, Image } from 'semantic-ui-react'
import logowedcel from '../../assets/images/logowedcel.png';
import logowelbbq from '../../assets/images/logowelbbq.png';
import { bbqFormSubmit } from '../../redux/actions/forms.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import renderIf from 'render-if';
class BBQForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      responseMessage: '',
      radioStyle: { height: 20, width: 20, margin: 5 }
    }
  }
  triggerRSVPSubmit = () => {
let rsvpLabel;
    const formState = this.formApi.getState();
    const { RSVP } = formState.values;
    const { invalid } = formState;
  const isMainGuest = this.props.mainGuest? false : true;
if (RSVP === 'food') {
  rsvpLabel = 'Comin\' Hungry'
} else if(RSVP === 'beverage') {
  rsvpLabel = 'perhaps for a drink'
} else {
  rsvpLabel = 'nope! See you Saturday'
}
    if (!invalid) {
      let formAnswers = Object.assign({}, {RSVP}, {full_name: this.props.guest.full_name}, {isMainGuest})


      this.props.bbqFormSubmit(formAnswers)
      this.setState({ responseMessage: `Cheers, we have ${this.props.guest.full_name} as ${rsvpLabel}` })

    } else {
      console.log('failed handleClick unexpectedly');
    }
  }
  setFormApi = (formApi) => {
    this.formApi = formApi;
  }

  render() {
    const { guest, inviteMessage, mainGuest } = this.props;
    const { responseMessage, radioStyle } = this.state;
    return (<Card>
      <Image src={logowelbbq} />
      <Card.Content>
        <Card.Header>
          So, will {guest.full_name} be able to join us for <u>{inviteMessage}</u>
        </Card.Header>
        <Card.Meta>
          <span className='date'></span>
        </Card.Meta>
        <Card.Description>
          <Form id="radio-form" getApi={this.setFormApi} onSubmit={() => {
            this.triggerRSVPSubmit()
          }}>
            {
              ({ formState }) => (<div >

                <RadioGroup field="RSVP">
                  <div style={{ display: 'block', margin: "10px 15px" }}>

                    <label htmlFor="radio-yes">Coming Hungry</label>
                    <Radio value={'food'} id="radio-yes" style={radioStyle}/>
                  </div>
                 <div style={{ display: 'block', margin: "10px 15px" }}>

                    <label htmlFor="radio-maybe">Coming for a beverage</label>
                    <Radio value={'beverage'} id="radio-maybe" style={radioStyle}/>
                  </div>
                  <div style={{ display: 'block', margin: "10px 15px" }}>

                    <label htmlFor="radio-no">Me Thinks Not</label>
                    <Radio value={'no'} id="radio-no" style={radioStyle}/>
                  </div>

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
    </Card>)
  }
}


export const mapDispatchToProps = dispatch => bindActionCreators({
  bbqFormSubmit
}, dispatch);
export default connect(null, mapDispatchToProps)(BBQForm);
