import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';
import PreliminaryRSVP from "../formTabs/prelimRsvp"
import FinalRSVP from "../formTabs/finalRsvp"
import MealPref from "../formTabs/mealPref"
import AccomodationCard from '../forms/AccomodationCard';
import { handleTabChange } from '../../redux/actions/forms.js';


const RSVPTabs = (props) => {
  let { user, dependentGuests, hasOnsiteInvite } = props;
  const panes = [
    {
      menuItem: 'Preliminary RSVP', render: () => <Tab.Pane attached={false}>
        <PreliminaryRSVP dependentGuests={dependentGuests} user={user} />
      </Tab.Pane>
    },

    {
      menuItem: 'Final RSVP', render: () => <Tab.Pane attached={false}>
        <FinalRSVP dependentGuests={dependentGuests} user={user} />
      </Tab.Pane>
    },
    {
      menuItem: 'Meal Preferences', render: () => <Tab.Pane attached={false}>
        <MealPref dependentGuests={dependentGuests} user={user} />
      </Tab.Pane>
    },
  ]
  if (hasOnsiteInvite) {
    panes.unshift({ menuItem: 'Accomodations', render: () => <Tab.Pane attached={false}>  <AccomodationCard></AccomodationCard>  </Tab.Pane> })
  }


  return (
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} user={user} onTabChange={handleTabChange} />
  )

}

const mapStateToProps = state => ({
  activeTab: state.user.activeTab,
  
  hasOnsiteInvite: state.user.onsite_invite
});
export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    handleTabChange,
  }, dispatch);
export default connect(null, mapDispatchToProps)(RSVPTabs);


// export default RSVPTabs
