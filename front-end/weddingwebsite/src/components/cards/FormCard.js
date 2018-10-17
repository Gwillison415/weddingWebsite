import React from 'react'
import {Form, Text, RadioGroup, Radio } from 'informed';
import {Card, Icon, Image} from 'semantic-ui-react'
import saveTheDate from '../../assets/images/saveTheDate.jpeg';

const FormCard = (props) => {
  const {triggerSubmit, getApi, user} = props;
  return (

    <Card>
    <Image src={saveTheDate}/>
    <Card.Content>
      <Card.Header>Hi {user.full_name}</Card.Header>
      <Card.Meta>
        <span className='date'>So, would you like to RSVP?</span>
      </Card.Meta>
      <Card.Description>
        <Form id="radio-form" getApi={getApi} onSubmit={() => {
            triggerSubmit()
          }}>
          {
            ({formState}) => (<div >

                <RadioGroup field="RSVP">
                  <label htmlFor="radio-yes">Most Definitely</label>
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
    <Card.Content extra={true}>
      <a>
        <Icon name='user'/>
        22 Friends
      </a>
    </Card.Content>
  </Card>)
}

export default FormCard
