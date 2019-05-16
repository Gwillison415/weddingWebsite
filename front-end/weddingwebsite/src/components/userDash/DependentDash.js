import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'

export const DependentGuestRow = ({ guests, dependentGuestsColWidth, rsvpStatus }) => {
    if (!guests) {
        return null
    }
    return (<Grid.Row>
        {guests.map((guest, idx) => {
            return (<Grid.Column style={{textAlign: "center"}} key={idx} mobile={8} computer={dependentGuestsColWidth}>
                <h5>{guest.full_name} </h5>

                <Grid.Row>
                    <h5>
                        <span>
                            <Icon name='food' size='small' ></Icon>
                            RSVP Status: {guest.final_rsvp ? "Yes!" : "No"}
                        </span>
                    </h5>
                </Grid.Row>
                <Grid.Row>
                    <h5>
                        <span>
                            <Icon name='food' size='small' ></Icon>
                            Meal Preference: {guest.meal_pref}
                        </span>
                    </h5>
                </Grid.Row>
                <Grid.Row>
                    <h5>
                        <span>
                            <Icon name='free code camp' size='small' ></Icon>
                            Welcome BBQ: {guest.poll_q2}
                        </span>
                    </h5>
                </Grid.Row>
                {guest.rehersal_invite ? <Grid.Row>
                    <h5><span>
                        <Icon name='envelope square' size='small' > </Icon>
                    </span>
                        Rehersal Dinner: {rsvpStatus(guest.rehersal_rsvp)}
                    </h5>

                </Grid.Row> : null}
                <Grid.Row>
                    <h5>
                        <span>
                            <Icon name='hand victory' size='small' ></Icon>
                            GoodBye Brunch: {guest.poll_q3}
                        </span>
                    </h5>
                </Grid.Row>

                {guest.food_allergies.length ? <Grid.Row>
                    <h5> <span>
                        <Icon name='bullhorn' size='small' > </Icon>
                    </span>
                        Allergic to: {guest.food_allergies}
                    </h5>

                </Grid.Row> : null}

            </Grid.Column>)
        })}
    </Grid.Row>)
}
