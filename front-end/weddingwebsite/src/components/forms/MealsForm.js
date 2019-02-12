import React, { Component } from 'react'
import { Form, RadioGroup, Radio, Text } from 'informed';
import { Card, Icon, Image } from 'semantic-ui-react'
import logostd from '../../assets/images/logostd.png';
import { saveMealPrefsSubmit } from '../../redux/actions/forms.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MealsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            responseMessage: ''
        }
    }
    triggerSubmit = () => {

        const formState = this.formApi.getState();
        const { mealType, allergies } = formState.values;
        const { invalid } = formState;

        if (mealType && !invalid) {
            let formAnswers = Object.assign({}, { mealType }, { name: this.props.userName }, { allergies})
            this.props.saveMealPrefsSubmit(formAnswers)
            this.setState({ responseMessage: `Cheers, we have ${this.props.userName} as ${mealType}` })

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
                            this.triggerSubmit()
                        }}>
                            {
                                ({ formState }) => (<div >

                                    <RadioGroup field="mealType">
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
        saveMealPrefsSubmit,
    }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(MealsForm);
