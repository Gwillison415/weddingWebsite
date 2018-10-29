import React from 'react'
import FormCard from '../cards/FormCard';
import {Tab} from 'semantic-ui-react';
import PreliminaryRSVP from "../formTabs/prelimRsvp"
import FinalRSVP from "../formTabs/finalRsvp"
import AccomodationCard from '../cards/AccomodationCard';


const TabExampleSecondaryPointing = (props) => {
  let {user, dependentGuests, hasOnsiteInvite} = props;
  console.log(dependentGuests);
  const panes = [
    { menuItem: 'Preliminary RSVP', render: () => <Tab.Pane attached={false}>
        <PreliminaryRSVP  dependentGuests={dependentGuests} user={user}/>
      </Tab.Pane> },

      { menuItem: 'Final RSVP', render: () => <Tab.Pane attached={false}>
      <FinalRSVP dependentGuests={dependentGuests} user={user}/>
    </Tab.Pane> },
    ]
  if (hasOnsiteInvite) {
    panes.unshift({ menuItem: 'Accomodations', render: () => <Tab.Pane attached={false}>  <AccomodationCard></AccomodationCard>  </Tab.Pane> })
  }

  return (
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} user={user}  />
  )

}
// dependentGuests={dependentGuests}



export default TabExampleSecondaryPointing
