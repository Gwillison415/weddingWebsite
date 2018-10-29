import React from 'react'
import {Form, Text, RadioGroup, Radio } from 'informed';
import {Card, Icon, Image} from 'semantic-ui-react'
import Glamping from '../../assets/images/Glamping.png';
import Countdown from '../countdown/CountDown.js';

const AccomodationCard = (props) => {
  const {triggerSubmit, getApi, user} = props;
  return (

    <Card>
    <Image src={Glamping}/>
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
  </Card>)
}

export default AccomodationCard;
