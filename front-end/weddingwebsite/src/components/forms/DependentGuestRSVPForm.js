import React, { Component } from 'react'
import { Form, RadioGroup, Radio } from 'informed';
import { Card, Icon, Image } from 'semantic-ui-react'
// import saveTheDate from '../../assets/images/saveTheDate.jpeg';
import logowedcel from '../../assets/images/logowedcel.png';
import logofamdin from '../../assets/images/logofamdin.png';
import { saveTheDateDependentFormSubmit } from '../../redux/actions/forms.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import renderIf from 'render-if';
class DependentGuestRSVPForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      responseMessage: ''
    }
  }
  triggerRSVPSubmit = () => {

    const formState = this.formApi.getState();
    const { RSVP } = formState.values;
    const { invalid } = formState;
    let type, displayRSVP;
    if (this.props.isRehersalInvite) {
      type = 'rehersal_rsvp';
    } else if (this.props.isFinalRsvp) {
      type = 'final_rsvp';
    } else {
      // soft / initial rsvp
      type = 'rsvp'
    }
    if (RSVP !== 'maybe') {
      displayRSVP = RSVP ? 'yes' : 'no'
    } else {
      displayRSVP = RSVP;
    }

    if (!invalid) {
      let formAnswers = Object.assign({}, {
        RSVP
      }, {
          dependentGuest: this.props.guest.full_name
        }, {
          mainGuest: this.props.mainGuest
        }, { type: type })
      console.log('formAnswers', formAnswers);

      this.props.saveTheDateDependentFormSubmit(formAnswers)
      this.setState({ responseMessage: `Cheers, we have ${this.props.guest.full_name} as ${displayRSVP}` })

    } else {
      console.log('failed handleClick unexpectedly');
    }
  }
  setFormApi = (formApi) => {
    this.formApi = formApi;
  }

  render() {
    const { guest, rehersalInvite, isRehersalInvite, isFinalRsvp } = this.props;
    const { responseMessage } = this.state;

    return (<Card>
      <Image src={isRehersalInvite
        ? logofamdin
        : logowedcel} style={{ height: 217 }} />
      <Card.Content>
        <Card.Header>
          So, will {guest.full_name} be able to join us for <u>{rehersalInvite}</u>
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

                    <label htmlFor="radio-yes">Most Definitely</label>
                    <Radio value={true} id="radio-yes" />
                  </div>
                  {!isFinalRsvp ? <div style={{ display: 'block', margin: "10px 15px" }}>

                    <label htmlFor="radio-maybe">Maaaaaaaaybe?</label>
                    <Radio value={'maybe'} id="radio-maybe" />
                  </div> : null}
                  <div style={{ display: 'block', margin: "10px 15px" }}>

                    <label htmlFor="radio-no">Me Thinks Not</label>
                    <Radio value={false} id="radio-no" />
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
      <Card.Content extra={true}>
        <a>
          <Icon name='user' />

        </a>
      </Card.Content>
    </Card>)
  }
}


export const mapDispatchToProps = dispatch => bindActionCreators({
  saveTheDateDependentFormSubmit
}, dispatch);
export default connect(null, mapDispatchToProps)(DependentGuestRSVPForm);
