import React, { Component } from 'react'
import { Form, RadioGroup, Radio, Text } from 'informed';
import { Card, Icon, Image, Segment } from 'semantic-ui-react'
import logostd from '../../assets/images/logostd.png';
import { saveMealPrefsSubmit, saveDependentMealPrefsSubmit } from '../../redux/actions/forms.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import knives from '../../assets/images/knives.png';


class MealsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            responseMessage: '',
            guest: this.props.guest ? this.props.guest : this.props.mainGuest,
            allergies: ''
        }
    }
    triggerSubmit = () => {

        const formState = this.formApi.getState();
        const { mealType, allergies } = formState.values;
        const { invalid } = formState;

        if (mealType && !invalid) {
            let formAnswers;
            if (this.props.guest) {
                formAnswers = Object.assign({}, { mealType }, { allergies }, { fullName: this.state.guest })
                this.setState({ responseMessage: `Cheers, we have ${this.state.guest} as ${mealType}`, allergies })
            } else {
                formAnswers = Object.assign({}, { mealType }, { mainGuest: this.props.userName }, { allergies })
                this.setState({ responseMessage: `Cheers, we have ${this.state.guest} as ${mealType}`, allergies })
            }
            if (this.props.isMainGuest) {
                this.props.saveMealPrefsSubmit(formAnswers)
            } else {
                this.props.saveDependentMealPrefsSubmit(formAnswers)
            }
        } else {
            console.log('failed handleClick unexpectedly');
        }
        this.formApi.reset()
    }
    setFormApi = (formApi) => {
        this.formApi = formApi;
    }

    render() {
        const { guest, responseMessage } = this.state;
        return (

            <Card>
                <Image src={knives} />
                <Card.Content>
                    <Card.Header>SupperTime Savory</Card.Header>
                    <Card.Meta>
                        <span className='date'>Tell me dearest, what would {guest} like to eat? - on a saturday night - no less!</span>
                    </Card.Meta>
                    <Card.Description>
                        <Form id="radio-form" getApi={this.setFormApi} onSubmit={() => {
                            this.triggerSubmit()
                        }}>
                            {
                                ({ formState }) => (<div >

                                    <div>
                                        <RadioGroup field="mealType">
                                            <Segment >
                                                <label htmlFor="radio-omnivore">Omnivore</label>
                                                <Radio value="omni" id="radio-omnivore" />
                                            </Segment>
                                            <Segment >
                                                <label htmlFor="radio-veg">Vegetarian</label>
                                                <Radio value="veg" id="radio-veg" />
                                            </Segment>
                                            <Segment >
                                                <label htmlFor="radio-gf">Gluten Free</label>
                                                <Radio value="gf" id="radio-gf" />
                                            </Segment>

                                        </RadioGroup>
                                    </div>
                                    <label>Please let us know about any allergies <Text field="allergies" placeholder={'Children Whining, DJT'} /></label>
                                    <button style={{ margin: 20 }} type="submit">Submit</button>


                                    <p>Allergies we'll know about:{
                                        formState.values.allergies
                                            ? JSON.stringify(formState.values.allergies, null, 2)
                                            : this.state.allergies
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
        saveDependentMealPrefsSubmit
    }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(MealsForm);
