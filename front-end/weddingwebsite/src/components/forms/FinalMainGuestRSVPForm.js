import React, {Component} from 'react'
import {Form, RadioGroup, Radio } from 'informed';
import {Card, Icon, Image} from 'semantic-ui-react'
import logostd from '../../assets/images/logostd.png';
import {saveTheFinalDateFormSubmit} from '../../redux/actions/forms.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class FinalRSVPForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      responseMessage: ''
    }
  }
  triggerRSVPSubmit = () => {

    const formState = this.formApi.getState();
    const {RSVP} = formState.values;
    const {invalid} = formState;

    if (!invalid ) {
      let formAnswers = Object.assign({}, {RSVP}, {name: this.props.userName})
      this.props.saveTheFinalDateFormSubmit(formAnswers)
      this.setState({ responseMessage: `Cheers, we have ${this.props.userName} as ${RSVP? "a Yes!": "sadly, a no"}` })

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
    const { responseMessage } = this.state;

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
                  <div style={{ display: 'block', margin: "10px 15px" }}>

                    <label htmlFor="radio-yes">Most Definitely</label>
                    <Radio value={true} id="radio-yes" />
                  </div>
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
          <Icon name='user'/>

        </a>
      </Card.Content>
    </Card>)}
}
const mapStateToProps = state => ({
  user: state.user,
  userName: state.user.full_name,
  error: state.user.error,
  dependentGuests: state.user.dependentGuests,
  rehersal_invite: state.saveTheDateForm.rehersal_invite,

});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    saveTheFinalDateFormSubmit,
  }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FinalRSVPForm);
