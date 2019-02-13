import React, { Component } from 'react'
import { Form, RadioGroup, Radio, Text } from 'informed';
import { Card, Icon, Image } from 'semantic-ui-react'
import logostd from '../../assets/images/logostd.png';
import { saveMealPrefsSubmit } from '../../redux/actions/forms.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import knives from '../../assets/images/knives.png';


class MealsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            responseMessage: '',
            guest: this.props.guest ? this.props.guest : this.props.mainGuest
        }
    }
    triggerSubmit = () => {

        const formState = this.formApi.getState();
        const { mealType, allergies } = formState.values;
        const { invalid } = formState;

        if (mealType && !invalid) {
            let formAnswers;
            if (this.props.guest ) {
                formAnswers = Object.assign({}, { mealType }, { mainGuest: this.props.userName }, { allergies}, {fullName: this.state.guest})
                this.setState({ responseMessage: `Cheers, we have ${this.state.guest} as ${mealType}` })
            } else {
                formAnswers = Object.assign({}, { mealType }, { mainGuest: this.props.userName }, { allergies})
                this.setState({ responseMessage: `Cheers, we have ${this.state.guest} as ${mealType}` })
            }
            this.props.saveMealPrefsSubmit(formAnswers)

        } else {
            console.log('failed handleClick unexpectedly');
        }
        this.formApi.reset()
    }
    setFormApi = (formApi) => {
        this.formApi = formApi;
    }

    render() {
        const { guest } = this.state;
        const { responseMessage } = this.state;
        return (

            <Card>
                <Image src={knives} />
                <Card.Content>
                    <Card.Header>SupperTime Savory</Card.Header>
                    <Card.Meta>
                        <span className='date'>Tell me dearest, what would {guest} like to eat?</span>
                    </Card.Meta>
                    <Card.Description>
                        <Form id="radio-form" getApi={this.setFormApi} onSubmit={() => {
                            this.triggerSubmit()
                        }}>
                            {
                                ({ formState }) => (<div >

                                    <div>
                                        <RadioGroup field="mealType">
                                        {/* <Segment compact></Segment> */}
                                            <label htmlFor="radio-omnivore">Omnivore</label>
                                            <Radio value="omni" id="radio-omnivore" />
                                            <label htmlFor="radio-veg">Vegetarian</label>
                                            <Radio value="veg" id="radio-veg" />
                                            <label htmlFor="radio-gf">Gluten Free</label>
                                            <Radio value="gf" id="radio-gf" />

                                        </RadioGroup>
                                    </div>
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
