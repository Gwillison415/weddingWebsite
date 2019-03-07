import React, { Component } from 'react'
import { Form, RadioGroup, Radio, Text } from 'informed';
import { Card, Icon, Image, Segment } from 'semantic-ui-react'
import { saveMealPrefsSubmit, saveDependentMealPrefsSubmit } from '../../redux/actions/forms.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import knives from '../../assets/images/knives.png';


class MealsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            responseMessage: '',
            guestName: this.props.guest ? this.props.guest.full_name : this.props.mainGuest.full_name,
            guestAllergies: this.props.guest ? this.props.guest.food_allergies : this.props.mainGuest.food_allergies,
            radioStyle: { height: 20, width: 20, margin: 5 }
        }
    }
    triggerSubmit = () => {

        const formState = this.formApi.getState();
        const { mealType, allergies } = formState.values;
        const { invalid } = formState;
        let formAnswers;

        if ((mealType || allergies) && !invalid) {
            if (this.props.guest) {
                formAnswers = Object.assign({}, { mealType }, { allergies }, { fullName: this.state.guestName })
                if (mealType) {
                    this.setState({ responseMessage: `Cheers, we have ${this.state.guestName} as ${mealType}` })
                } else{
                    this.setState({ responseMessage: `Thanks for letting us know about ${this.state.guestName}'s needs!  We'll have the foods listed above marked in any dish we serve. If you need to add more, make sure to enter them each again every time you save.` })
                }
                this.props.saveDependentMealPrefsSubmit(formAnswers)
            } else {
                formAnswers = Object.assign({}, { mealType }, { mainGuest: this.state.guestName }, { allergies })
                if (mealType) {
                    this.setState({ responseMessage: `Cheers, we have ${this.state.guestName} as ${mealType}` })
                } else{
                    this.setState({ responseMessage: `Thanks for letting us know about ${this.state.guestName}'s needs!  We'll have the foods listed above marked in any dish. If you need to add more, make sure to enter them all again.` })
                }
                this.props.saveMealPrefsSubmit(formAnswers)
            }
            if (allergies) {
                this.setState({ guestAllergies: allergies})
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
        const { guestName, guestAllergies, responseMessage, radioStyle } = this.state;
        return (

            <Card>
                <Image src={knives} />
                <Card.Content>
                    <Card.Header>Supper Time!</Card.Header>
                    <Card.Meta>
                        Tell me dearest, what would <b>{guestName}</b> like to eat? - on a saturday night - no less!
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
                                                <Radio value="omni" id="radio-omnivore" style={radioStyle} />
                                            </Segment>
                                            <Segment >
                                                <label htmlFor="radio-veg">Vegetarian</label>
                                                <Radio value="veg" id="radio-veg" style={radioStyle} />
                                            </Segment>
                                            <Segment >
                                                <label htmlFor="radio-gf">Gluten Free</label>
                                                <Radio value="gf" id="radio-gf" style={radioStyle} />
                                            </Segment>

                                        </RadioGroup>
                                    </div>
                                    <label>Please let us know about any allergies <Text field="allergies" placeholder={'Children Whining, DJT'} /></label>
                                    <button style={{ margin: 20 }} type="submit">Submit</button>
                                    <p>ALL of the Allergies we know about:{
                                        formState.values.allergies
                                            ? JSON.stringify(formState.values.allergies, null, 2)
                                            : guestAllergies}
                                    </p>

                                </div>)
                            }
                        </Form>
                    </Card.Description>
                    <h4>{responseMessage} </h4>
                </Card.Content>
                <Card.Content extra={true}>
                        <Icon name='user' />
                </Card.Content>
            </Card>)
    }
}


export const mapDispatchToProps = dispatch =>
    bindActionCreators({
        saveMealPrefsSubmit,
        saveDependentMealPrefsSubmit
    }, dispatch);
export default connect(null, mapDispatchToProps)(MealsForm);
