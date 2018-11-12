import React from 'react'
import { Accordion } from 'semantic-ui-react'
import ResponsiveContainer from '../home/ResponsiveContainer';


// const handleClick

const NestedPanelsOffsite = [
  {
    key: 'Travelodge',
    title: 'Travelodge Ukiah - $100-200 per night',
    content: [
      'This Hotel is inexpensive and the closest to the venue, a 5 minute drive.',
    ].join(' '),

  },
  {
    key: 'rv',
    title: 'Vichy Hot Springs Resort - $185-455 per night',
    content: [
      'With rooms and cottages a 10 minute drive from the venue. This resort features natural carbonated mineral pools on site.',
      'The rooms come with use of grounds and breakfast daily. Additionally, this resort has 3 RV hookup sites and room for non-hookup RV’s on site for a nominal fee. We could not book a block of rooms so this is a first come, first serve accommodation.',
    ].join(' '),

  },
  {
    key: 'airbnb',
    title: 'AirBnB',
    content: [
      'I heard there was, like a website for this housing rental thing? You know about the series of tubes, you do the math. Other options include VRBO and BeeToken - if you\'d like to pay for your accomodations in crypto',
    ].join(' '),

  },
  {
    key: 'Orr',
    title: 'Orr Hot Springs ',
    content: [
      'It is a 30 minute drive from the venue and up into the mountains. And we\'d rather have you closer, however, so that cora\'s research doesn\'t all go to waste..If you plan to stay here, please arrange a sober ride back. I can’t necessarily guarantee a Lyft will be available at 2am to drive you that far.  Here\'s a blurb about Orr: This beautiful resort houses relaxing natural hot springs with many on-site rooms, yurts, and camping spaces available. https://www.orrhotsprings.org/',
    ].join(' '),

  },
]
const NestedPanelsOnsite = [
  {
    key: 'onsite',
    title: 'Glamp Tents',
    content: [
      'VERY LIMITED SPACE Remaining - The cost is $250 for 2 nights (Total) and you MUST share either as a couple (Queen) or with 1-2 roommates (Twins or Queen +Twin). ',
      'There will be showers and bathrooms in the glamping area and all your linens are provided. Please note that the after party will be taking place in/near the camping area so if you are not a fan of loud hippies celebrating love at 2am, this might not be the best option for you.',
      'You can check out the Glamp accommodations at www.WayWardGlamping.com for more info. Please let us know if you are interested in this - we can help identify a roommate(s) if needed. ',
    ].join(' '),

  },
  {
    key: 'rv',
    title: 'Van Life',
    content: [
      'Space for Folks with RV\'s, indicate whether you need bathroom access or are self-containing and the size of your rig (even if you think we already know!). There are no hook-ups available but you may bring your generators. We may run out of space and in that case Vichy Hot Springs has at least 3 hookup spots available and can fit more without hookups.',
    ].join(' '),

  },
  {
    key: 'tentCamping',
    title: 'Tent Camping',
    content: [
      'Initially against the idea for visual reasons - We may have very limited space for folks to sleep in their own tents. We\'d love to make sure our friends have a blast without breaking the bank. Please let me know if this is something you’d be interested in and we can let you know if this will be possible.',
    ].join(' '),

  },
]
const NestedContentOnsite = (
  <div>
    <Accordion.Accordion className={'outerAccordion'} panels={NestedPanelsOnsite} exclusive={false} />
  </div>
)
const NestedContentOffsite = (
  <div>
    <p>We will be providing carpool/shuttle arrangements for people staying at Vichy Springs Resort and Travelodge to and from the venue. It might be Papa willison on the early shift </p>
    <Accordion.Accordion panels={NestedPanelsOffsite} exclusive={false} />

  </div>
)

const rootPanels = [
  {
    key: 'where-to-stay',
    title: 'Where do I stay?',
    content: [
      'If you know us we’re not one to call a party before the rooster crows, we chose a venue that has NO NOISE ORDINANCE which means we can legit go all night. Please plan accordingly.',
    ].join(' '),
  },
  { key: 'onsite-1', title: 'Onsite', content: { content: NestedContentOnsite } },
  { key: 'offsite-1', title: 'Offsite', content: { content: NestedContentOffsite } },
  { key: 'solo-1', title: 'Traveling Solo', content: [
    'If you’re traveling solo and would like to be connected with a mate please e-mail me directly and I will send a list to all interested people via email likely in early February. Let us know if you\'re looking for a ride also! '
  ] },

]

export const AccomodationsInfo = () => {
  return (
    <div>
      <ResponsiveContainer>
     <Accordion defaultActiveIndex={[0]} panels={rootPanels} exclusive={false} fluid />
     </ResponsiveContainer>
    </div>
  )

}
