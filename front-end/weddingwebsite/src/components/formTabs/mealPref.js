import React from 'react'
import FinalRSVPForm from '../forms/FinalMainGuestRSVPForm';
import {
    Grid,
    Header,
    Image,
    Segment
} from 'semantic-ui-react';
import knives from '../../assets/images/knives.png';
import MealsForm from '../forms/MealsForm';

const MealPref = (props) => {
    let { user, dependentGuests } = props;
    return (

        <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
                {dependentGuests.map((guest, idx) => {
                    return (<div key={idx} style={{ display: 'inline-flex' }}>
                        <Grid.Column style={{ padding: '.5em 2em' }} width={6}>
                            <MealsForm guest={guest.full_name} mainGuest={user.full_name} isMainGuest={false}>
                            </MealsForm>
                        </Grid.Column>

                    </div>)
                })
                }
                <div style={{ display: 'inline-flex' }}>
                 <Grid.Column style={{ padding: '.5em 2em' }} width={6}>
                    <MealsForm mainGuest={user.full_name} isMainGuest={true}>
                    </MealsForm>
                </Grid.Column>
                </div>

            </Grid.Row>
        </Grid>
)
}
export default MealPref;
