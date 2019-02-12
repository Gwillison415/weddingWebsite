import React, {Component} from 'react'
import {Form,  RadioGroup, Radio} from 'informed';
import {Card, Icon, Image} from 'semantic-ui-react'
// import saveTheDate from '../../assets/images/saveTheDate.jpeg';
import logowedcel from '../../assets/images/logowedcel.png';
import logofamdin from '../../assets/images/logofamdin.png';
import {saveTheDateDependentFormSubmit} from '../../redux/actions/forms.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
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
    const {RSVP} = formState.values;
    const {invalid} = formState;
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
      this.setState({ responseMessage: `Cheers, we have ${this.props.guest.full_name} as ${RSVP}` })

    } else {
      console.log('failed handleClick unexpectedly');
    }
  }
  setFormApi = (formApi) => {
    this.formApi = formApi;
  }

  render() {
    const {guest, rehersalInvite, isRehersalInvite} = this.props;
    const { responseMessage } = this.state;

    return (<Card>
      <Image src={isRehersalInvite
          ? logofamdin
          : logowedcel}/>
      <Card.Content>
        <Card.Header>
          So, will {guest.full_name} be able to join us for
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
        <h4>{responseMessage} </h4>
      </Card.Content>
      <Card.Content extra={true}>
        <a>
          <Icon name='user'/>

        </a>
      </Card.Content>
    </Card>)
  }
}


export const mapDispatchToProps = dispatch => bindActionCreators({
  saveTheDateDependentFormSubmit
}, dispatch);
export default connect(null, mapDispatchToProps)(DependentGuestRSVPForm);
