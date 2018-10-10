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
                  <label htmlFor="radio-yes">Most Definitley</label>
                  <Radio value="yes" id="radio-yes"/>
                  <label htmlFor="radio-maybe">Maybe</label>
                  <Radio value="maybe" id="radio-maybe"/>
                  <label htmlFor="radio-no">Me Thinks Not</label>
                  <Radio value="no" id="radio-no"/>
                </RadioGroup>
                <RadioGroup field="accomodations">
                  <label htmlFor="radio-yes">Most Definitley</label>
                  <Radio value="yes" id="radio-yes"/>
                  <label htmlFor="radio-maybe">Maybe</label>
                  <Radio value="maybe" id="radio-maybe"/>
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
    </Card.Content>
    <Card.Content extra="extra">
      <a>
        <Icon name='user'/>
        You will be able to change this for
        <Countdown minVisible={{visibility:'hidden'}} endDate={'Tue, 05 Mar 2019 00:00:00'}></Countdown>
      </a>
    </Card.Content>
  </Card>)
}

export default AccomodationCard;
