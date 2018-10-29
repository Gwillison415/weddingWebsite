import React from 'react'
import {Form, Text, RadioGroup, Radio } from 'informed';
import {Card, Icon, Image, Grid} from 'semantic-ui-react'
import logolodging from '../../assets/images/logolodging.png';
import Countdown from '../countdown/CountDown.js';

const AccomodationCard = (props) => {
  const {triggerSubmit, getApi, user} = props;
  return (
    <div>
      <Grid>
        <Grid.Row>
          <h3>Remember, you're only seeing this because we'd like you to stuck with us and we imagine you interested. It's totally cool if you'd rather not be joined to the hip for days, however we'd like the answer to this one fast!</h3>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={7}>
            <p> ots of fings
            </p>
          </Grid.Column>
          <Grid.Column width={5}>
            <Card>
            <Image src={logolodging}/>
            <Card.Content>
              <Card.Header>So, How would you like to stay?</Card.Header>
              <Card.Meta>
                <span className='date'></span>
              </Card.Meta>
              <Card.Description>
                <Form id="radio-form" getApi={getApi} onSubmit={() => {
                    triggerSubmit()
                  }}>
                  {
                    ({formState}) => (<div >

                        <RadioGroup field="accomodations">
                          <label htmlFor="radio-glamp">Glamping</label>
                          <Radio value="glamp" id="radio-glamp"/>
                          <label htmlFor="radio-RV">RV</label>
                          <Radio value="RV" id="radio-RV"/>
                          <label htmlFor="radio-Onsite">Onsite</label>
                          <Radio value="Onsite" id="radio-Onsite"/>
                          <label htmlFor="radio-Off-site">Most Definitley</label>
                          <Radio value="Off-site" id="radio-Off-site"/>
                          <label htmlFor="radio-whereever">whereever</label>
                          <Radio value="whereever" id="radio-whereever"/>
                          <label htmlFor="radio-noIdea">IDK</label>
                          <Radio value="noIdea" id="radio-noIdea"/>
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
            </Card.Content>
            <Card.Content extra={true}>
              <a>
                <Icon name='user'/>
                You will be able to change this for
                <Countdown minVisible={{visibility:'hidden'}} endDate={'Tue, 05 Mar 2019 00:00:00'}></Countdown>
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
      </Grid>
    </div>
    )
}

export default AccomodationCard;
