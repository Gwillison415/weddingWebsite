import React from 'react'
import {Grid} from 'semantic-ui-react';

import MealsForm from '../forms/MealsForm';

const MealPref = (props) => {
    let { user, dependentGuests } = props;
    return (

        <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
                {dependentGuests.map((guest, idx) => {
                    return (<div key={idx} style={{ display: 'inline-flex' }}>
                        <Grid.Column style={{ padding: '.5em 1em' }} width={6}>
                            <MealsForm guest={guest} mainGuest={user} isMainGuest={false}>
                            </MealsForm>
                        </Grid.Column>

                    </div>)
                })
                }
                <div style={{ display: 'inline-flex' }}>
                    <Grid.Column style={{ padding: '.5em 1em' }} width={6}>
                        <MealsForm mainGuest={user} isMainGuest={true}>
                        </MealsForm>
                    </Grid.Column>
                </div>

            </Grid.Row>
        </Grid>
    )
}
export default MealPref;
