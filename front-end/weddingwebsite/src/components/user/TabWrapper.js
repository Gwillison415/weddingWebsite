import React from 'react'
import FormCard from '../cards/FormCard';
import {
  Tab,
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Responsive,
  Segment
} from 'semantic-ui-react';
import PreliminaryRSVP from "../formTabs/prelimRsvp"
import FinalRSVP from "../formTabs/finalRsvp"


const TabExampleSecondaryPointing = (props) => {
  let {user, dependentGuests} = props;
  console.log(dependentGuests);
  const panes = [
    { menuItem: 'Preliminary RSVP', render: () => <Tab.Pane attached={false}>
        <PreliminaryRSVP  dependentGuests={dependentGuests} user={user}/>
      </Tab.Pane> },
      { menuItem: 'Accomodations', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
      { menuItem: 'Final RSVP', render: () => <Tab.Pane attached={false}>
      <FinalRSVP dependentGuests={dependentGuests} user={user}/>
    </Tab.Pane> },
    ]


  return (
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} user={user}  />
  )

}
// dependentGuests={dependentGuests}



export default TabExampleSecondaryPointing
