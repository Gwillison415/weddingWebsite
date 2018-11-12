import React from 'react'
import {Accordion} from 'semantic-ui-react'
import ResponsiveContainer from '../home/ResponsiveContainer';

// const handleClick

const NestedContentTouristingBeforeAfter = (<div className={'NestedContent'}>
  <p>We would love to recommend places throughout this gorgeous state to see on your journey. Let us know your plans and we are happy to give you the scoop! Here are a few suggestions of places to visit:</p>
  <ul>
    <li>Napa Valley/Wine Country - Between the venue and San Francisco lies some of the worlds best vineyards! There is an abundance of wine tasting to be done and amazing delicious food.</li>
    <li>Mendocino© This quaint oceanside town is a great place to enjoy the Northern California Coastline, fresh delicious food and get the full quirky Cali vibe. Drive down Hwy 1 for breathtaking views of the Pacific and unique landscapes all the way to SF.</li>
    <li>Shasta or Lassen National Parks</li>
    <li>Santa Cruz</li>
    <li>Tahoe Located 4 hours from the venue and 3.5 hours from San Francisco This mountain getaway is a great place to enjoy Californias natural beauty. In July you can hike, mountain bike, and swim in the pristine mountain lake. For the gamblers, head to South Lake for the casinos!</li>
  </ul>
</div>)

const NestedContentGettingThereVenue = (<div className={'NestedContent'}>
  <p>
    Yokayo Ranch - is located just outside downtown Ukiah on a beautiful 40 acre working Ranch and Farm. It is easily accessible off Hwy 101 and is neighbored by Mendocino College.
  </p>
  <p>
    We are encouraging guests to
    <b> carpool </b> 
    when able
  </p>
  <p>Please indicate on your RSVP if you are interested in carpooling and / or if you have space in an RV - we will assist in connecting people.</p>
  <h4>Renting a car</h4>
  <p>The best prices are 'almost always at the airport', except for the other times. Cora will tell anyone who will listen how much she loves Dollar Car Rental, she uses them 'almost exclusively', in addition 'they are generally very reasonable and easy to pick up and drop off at both SFO and Oakland'. Thank the lord
    <i>someone</i>
    has their finger on the pulse of the rental car market</p>
  <h4>Please note there are bridge tolls in the SF Bay!</h4>
  <ul>Bay Bridge - connects SF and Oakland -
    <li>Fee only when entering SF (I-80 West)
      <ul>
        <li>Pay with cash or fastTrak   </li>
          <li>ranging from $4 to $6.</li>

      </ul>
    </li>
  </ul>

  <ul>
    Golden Gate Bridge - Connects SF to Marin
    <li>NO CASH Pay the $7 toll with
      <a href="https://www.bayareafastrak.org/en/guide/GGBridgeToll.shtml">FastTrak</a>
    </li>
    <li>within 48 hours of crossing with your license plate number</li>
    <li>
      If you do not pay the toll online and you are in a rental car, most rental car companies charge an additional $25 fee to process the toll payment.</li>
    <li>Some will allow you to sign up for this option at the counter, if given the option- do that.</li>

  </ul>

</div>)
const NestedContentGettingThereCali = (<div className={'NestedContent'}>

  <h4>To California</h4>
  <ul>
    <li>The nearest commercial airport is Sonoma County Airport which is served by Alaska, American, United and Sun Country Airlines. It is about a 1 hour drive from the venue.</li>
    <li>You’re more likely to find good deals on flights through San Francisco International (SFO) or Oakland International Airport (OAK) Which are basically equidistant from Downtown SF and about 2 - 2 ½ hours from the venue.</li>
    <li>Both are serviced by the Bay Area Rapid Transit (BART) train system which can take you to downtown San Francisco or Oakland within about 20-40 minutes for about $8 per person. Lyft also serves the airports and
      <a href="www.supershuttle.com">Super Shuttle</a>
      is another reliable and inexpensive transport option that you can book in advance</li>
    <li>Sacramento International Airport (SMF) is also about 2.5 hours from the venue and 1.5 hours from SF.</li>
    <li>San Jose International (SJC - NOT SJO) is about an hour south of San Francisco and about 3.5 hrs to the venue. Flights are usually comparable between SJC and OAK, with Oakland ~20 miles closer. The main reasons one might choose SJC is the proximity to RV rentals and the Santa Cruz mountains. In theory you can take the CalTrain from SJC to San Francisco, plan on about 1.5 hours and $25 for this theory.</li>
  </ul>
</div>)
const NestedContentTouristing = (<div className={'NestedContent'}>
  <ul>
    <li>Wine or Beer Tasting - There are several vineyards in the surrounding area and breweries that are worth a visit</li>
    <li>Montgomery Woods State Reserve - Redwood Forest 30 minutes from the Venue. We will be hosting a morning hike on Saturday but you are encouraged to check it out more for yourself!</li>
    <li>The Mendocino Tree - Previously thought to be the largest Redwood in the world, still a giant tree but not the largest. Located in the Montgomery Woods Reserve</li>
    <li>Orr Hot Springs - Beautiful natural hot springs 30 minutes from the venue and nearby the Montgomery Woods Reserve. You can visit on a day pass.</li>
    <li>City of Ten Thousand Buddhas - Buddhist Monastery about 10 mins from the venue situated on beautiful grounds that is open to visitors 8-6am daily. They also have a vegetarian restaurant on site.</li>
    <li>Swim in the River - The Russian River is nearby and nice spot to spend some time swimming and enjoying nature</li>
    <li>Golf Course 10 min away!</li>
  </ul>

</div>)

const rootPanels = [
  {
    key: 'get-there',
    title: '',
    content: ['This isn’t your mother’s wedding (actually though). We’d like to bring our beautiful community together for a weekend of connection, joy, and dancing. We recommend planning to arrive in Ukiah Friday afternoon or early evening and leaving Sunday late afternoon or evening to take part in all we have planned. Our goal is to create plenty of time to just be with our friends and family'].join(' ')
  }, {
    key: 'onsite-1',
    title: 'How do I might I get to California?',
    content: {
      content: NestedContentGettingThereCali
    }
  }, {
    key: 'venue-1435',
    title: 'How do I get to the Venue?',
    content: {
      content: NestedContentGettingThereVenue
    }
  }, {
    key: 'offsite-1987',
    title: 'What should we do / see?',
    content: {
      content: NestedContentTouristing
    }
  }, {
    key: 'offsitouihje-1',
    title: 'Visiting before/after the wedding?',
    content: {
      content: NestedContentTouristingBeforeAfter
    }
  }

]

export const TravelInfo = () => {
  return (<div>
    <ResponsiveContainer>
      <Accordion defaultActiveIndex={[0]} panels={rootPanels} className={'ParentContent'} exclusive={false} fluid="fluid"/>
    </ResponsiveContainer>
  </div>)

}
