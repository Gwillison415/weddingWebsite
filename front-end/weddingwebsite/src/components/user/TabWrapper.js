import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';
import PreliminaryRSVP from "../formTabs/prelimRsvp"
import FinalRSVP from "../formTabs/finalRsvp"
import MealPref from "../formTabs/mealPref"
import AccomodationCard from '../forms/AccomodationCard';
import { handleTabChange } from '../../redux/actions/forms.js';
import { discoverTabIndices } from '../../utilities/tabLogic'

const RSVPTabs = (props) => {
  let { user, dependentGuests, hasOnsiteInvite, activeTab, handleTabChange } = props;
  // const discoverTabIndices = (user) => {
  //   if (user.onsite_invite) {
  //     return {
  //       accomodations: 0,
  //       rsvp: 1,
  //       meals: 2
  //     }
  //   } else {
  //     return {
  //       rsvp: 0,
  //       meals: 1
  //     }
  //   }
  // }
  const tabIndices = discoverTabIndices(user)
  const panes = [
    // {
    //   menuItem: 'Preliminary RSVP', render: () => <Tab.Pane attached={false}>
    //     <PreliminaryRSVP dependentGuests={dependentGuests} user={user} />
    //   </Tab.Pane>
    // },

    {
      menuItem: { value: 'rsvp', key: 'rsvp', content: 'RSVP' }, render: () => <Tab.Pane attached={false} >
        <FinalRSVP dependentGuests={dependentGuests} user={user} />
      </Tab.Pane>
    },
    {
      menuItem: { value: 'meals', key: 'meals', content: 'Meal Preferences' }, render: () => <Tab.Pane attached={false}>
        <MealPref dependentGuests={dependentGuests} user={user} />
      </Tab.Pane>
    },
  ]
  if (hasOnsiteInvite) {
    panes.unshift({ menuItem: { value: 'accomodations', key: 'accomodations', content: 'Accomodations' }, render: () => <Tab.Pane attached={false}>  <AccomodationCard></AccomodationCard>  </Tab.Pane> })
  }
  return (
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} user={user} onTabChange={(event) => {
      handleTabChange(tabIndices[event.target.getAttribute('value')]);
    }} activeIndex={activeTab} />
  )
}

const mapStateToProps = state => ({
  activeTab: state.user.activeTab,
});
export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    handleTabChange,
  }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(RSVPTabs);

