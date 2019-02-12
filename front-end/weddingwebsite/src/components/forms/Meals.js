import React, { Component } from 'react'
import { Form, RadioGroup, Radio, Text } from 'informed';
import { Card, Icon, Image } from 'semantic-ui-react'
import logostd from '../../assets/images/logostd.png';
import { saveTheFinalDateFormSubmit } from '../../redux/actions/forms.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Meals extends Component {
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

        if (RSVP && !invalid) {
            let formAnswers = Object.assign({}, { RSVP }, { name: this.props.userName })
            this.props.saveTheFinalDateFormSubmit(formAnswers)
            this.setState({ responseMessage: `Cheers, we have ${this.props.userName} as ${RSVP}` })

        } else {
            console.log('failed handleClick unexpectedly');
        }
        this.formApi.reset()
    }
    setFormApi = (formApi) => {
        this.formApi = formApi;
    }

    render() {
        const { user } = this.props;
        const { responseMessage } = this.state;

        return (

            <Card>
                <Image src={logostd} />
                <Card.Content>
                    <Card.Header>Hi {user.full_name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Tell me dearest, what would you like to eat?</span>
                    </Card.Meta>
                    <Card.Description>
                        <Form id="radio-form" getApi={this.setFormApi} onSubmit={() => {
                            this.triggerRSVPSubmit()
                        }}>
                            {
                                ({ formState }) => (<div >

                                    <RadioGroup field="RSVP">
                                        <label htmlFor="radio-omnivore">Omnivore</label>
                                        <Radio value="omni" id="radio-omnivore" />
                                        <label htmlFor="radio-veg">Vegetarian</label>
                                        <Radio value="veg" id="radio-veg" />

                                    </RadioGroup>
                                    <label>Please let us know about any allergies <Text field="allergies" /></label>
                                    <button type="submit">Submit</button>


                                    <p>{
                                        formState.values.allergies
                                            ? JSON.stringify(formState.values.allergies, null, 2)
                                            : ''
                                    }</p>
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
export default connect(mapStateToProps, mapDispatchToProps)(Meals);
