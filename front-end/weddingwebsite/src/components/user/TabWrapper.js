import React from 'react'
import {Tab} from 'semantic-ui-react';
import PreliminaryRSVP from "../formTabs/PrelimRsvp"
import FinalRSVP from "../formTabs/FinalRsvp"
import MealPref from "../formTabs/MealPref"
import AccomodationCard from '../forms/AccomodationCard';


const TabExampleSecondaryPointing = (props) => {
  let {user, dependentGuests, hasOnsiteInvite} = props;
  const panes = [
    { menuItem: 'Preliminary RSVP', render: () => <Tab.Pane attached={false}>
        <PreliminaryRSVP  dependentGuests={dependentGuests} user={user}/>
      </Tab.Pane> },

      { menuItem: 'Final RSVP', render: () => <Tab.Pane attached={false}>
      <FinalRSVP dependentGuests={dependentGuests} user={user}/>
    </Tab.Pane> },
    {
      menuItem: 'Meal Preferences & allergies', render: () => <Tab.Pane attached={false}>
        <MealPref dependentGuests={dependentGuests} user={user} />
      </Tab.Pane>
    },
    ]
  if (hasOnsiteInvite) {
    panes.unshift({ menuItem: 'Accomodations', render: () => <Tab.Pane attached={false}>  <AccomodationCard></AccomodationCard>  </Tab.Pane> })
  }
      

  return (
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} user={user}  />
  )

}




export default TabExampleSecondaryPointing
