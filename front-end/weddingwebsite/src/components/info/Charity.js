import React from 'react'
import {Accordion} from 'semantic-ui-react'
import ResponsiveContainer from '../home/ResponsiveContainer';
import ParrallaxFaces from '../parrallax/cityYouthFaces'
const pStyle= {
  padding: '20px 5px',
}
export const Charity = () => (
  <ResponsiveContainer>
  <div style={{height: 800}} >
    <p style={pStyle}> If you’d like to put your money toward making our world a better place, we’d be delighted to be honored in this way! We have one special organization that we would invite you to consider offering your support. We thought long and hard about this and considered organizations that would levy our individual passions for environmental and social justice. We settled on an organization that supports our immediate community and tugs at our heartstrings as previously wild and “unruly” youth (some things never change!). </p>
    <ParrallaxFaces/>
      <p style={pStyle}> <a href='www.cityyouthnow.org' >City Youth Now</a> supports some of our most vulnerable and underserved youth - those involved in the juvenile justice system. From their own site they provide “services and programs that promote stability and personal growth.” In reality they are a immeasurable resource for the youth of San Francisco that find themselves in the juvenile justice system, which can be confusing, hopeless, and scary. Their programs and funding help youth not only meet immediate needs and support growth and empowerment with vocational training and employment, but support youth in finding creative outlets to harness their talents and encourage them to broaden their world view.  They work to make the gap between the justice system and youth and families smaller, building compassion and strengthening trust in our community. </p>
      <p style={pStyle}> City Youth Now nearly lost their main funding several years ago and operate on a very modest budget. Your dollars would go directly to support youth and help keep this program doing it’s important work.  </p>

    <p style={pStyle}> To read more and make a donation online or by mail please go here http://www.cityyouthnow.org/donate/ </p>
    </div>
  </ResponsiveContainer>
)
// <div></div>
export default Charity
