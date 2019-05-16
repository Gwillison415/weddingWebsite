import React, {Component} from "react";
import {Form, RadioGroup, Radio} from "informed";
import {Card, Icon, Image} from "semantic-ui-react";
import logowedcel from "../../assets/images/logowedcel.png";
import logopoolparty from "../../assets/images/logopoolparty.png";
import {brunchFormSubmit} from "../../redux/actions/forms.js";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
class BrunchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseMessage: "",
      radioStyle: {height: 20, width: 20, margin: 5}
    };
  }
  triggerRSVPSubmit = () => {
    let rsvpLabel;
    const formState = this.formApi.getState();
    const {RSVP} = formState.values;
    const {invalid} = formState;
    const isMainGuest = this.props.mainGuest ? false : true;
    if (RSVP === "yes") {
      rsvpLabel = ": Comin' in Hot!";
    } else if (RSVP === "maybe") {
      rsvpLabel = ": maybe, if they're lucky..";
    } else {
      rsvpLabel = ": nope! gotta dip!";
    }
    if (!invalid) {
      let formAnswers = Object.assign(
        {},
        {RSVP},
        {full_name: this.props.guest.full_name},
        {isMainGuest}
      );

      this.props.brunchFormSubmit(formAnswers);
      this.setState({
        responseMessage: `Cheers, we have ${
          this.props.guest.full_name
        } as ${rsvpLabel}`
      });
    } else {
      console.log("failed handleClick unexpectedly");
    }
  };
  setFormApi = formApi => {
    this.formApi = formApi;
  };

  render() {
    const {guest, inviteMessage, mainGuest} = this.props;
    const {responseMessage, radioStyle} = this.state;
    return (
      <Card>
        <Image src={logopoolparty} />
        <Card.Content>
          <Card.Header>
            So, will {guest.full_name} be able to join us for{" "}
            <u>{inviteMessage}</u>
          </Card.Header>
          <Card.Meta>
            <span className="date" />
          </Card.Meta>
          <Card.Description>
            <Form
              id="radio-form"
              getApi={this.setFormApi}
              onSubmit={() => {
                this.triggerRSVPSubmit();
              }}
            >
              {({formState}) => (
                <div>
                  <RadioGroup field="RSVP">
                    <div style={{display: "block", margin: "10px 15px"}}>
                      <label htmlFor="radio-yes">Coming Hungry</label>
                      <Radio value={"yes"} id="radio-yes" style={radioStyle} />
                    </div>
                    <div style={{display: "block", margin: "10px 15px"}}>
                      <label htmlFor="radio-maybe">No promises!</label>
                      <Radio
                        value={"maybe"}
                        id="radio-maybe"
                        style={radioStyle}
                      />
                    </div>
                    <div style={{display: "block", margin: "10px 15px"}}>
                      <label htmlFor="radio-no">Me Thinks Not</label>
                      <Radio value={"no"} id="radio-no" style={radioStyle} />
                    </div>
                  </RadioGroup>
                  <button type="submit">Submit</button>

                  <p>
                    {formState.errors.email
                      ? JSON.stringify(formState.errors.email)
                      : ""}
                  </p>
                  <p>
                    {formState.errors.password
                      ? JSON.stringify(formState.errors.password)
                      : ""}
                  </p>
                </div>
              )}
            </Form>
          </Card.Description>
          <h4>{responseMessage} </h4>
        </Card.Content>
      </Card>
    );
  }
}

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      brunchFormSubmit
    },
    dispatch
  );
export default connect(
  null,
  mapDispatchToProps
)(BrunchForm);
