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
            guest: this.props.guest ? this.props.guest : this.props.mainGuest,
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
                formAnswers = Object.assign({}, { mealType }, { allergies }, { fullName: this.state.guest })
                this.setState({ responseMessage: `Cheers, we have ${this.state.guest} as ${mealType}` })
            } else {
                formAnswers = Object.assign({}, { mealType }, { mainGuest: this.props.userName }, { allergies })
                this.setState({ responseMessage: `Cheers, we have ${this.state.guest} as ${mealType}` })
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
        const { guest, responseMessage, radioStyle } = this.state;
        return (

            <Card>
                <Image src={knives} />
                <Card.Content>
                    <Card.Header>Supper Time!</Card.Header>
                    <Card.Meta>
                        Tell me dearest, what would <b>{guest}</b> like to eat? - on a saturday night - no less! 
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
                                                <Radio value="omni" id="radio-omnivore" style={radioStyle}/>
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


                                    <p>ALL of the Allergies we know about for {guest}:{
                                        formState.values.allergies
                                            ? JSON.stringify(formState.values.allergies, null, 2)
                                            : this.props.allergies
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
    user: state.user,
    userName: state.user.full_name,
    error: state.user.error,
    allergies: state.user.food_allergies,
});

export const mapDispatchToProps = dispatch =>
    bindActionCreators({
        saveMealPrefsSubmit,
        saveDependentMealPrefsSubmit
    }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(MealsForm);
