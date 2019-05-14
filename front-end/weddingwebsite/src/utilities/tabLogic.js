export const discoverTabIndices = (user) => {
    if (user.onsite_invite) {
        return {
            accomodations: 0,
            rsvp: 1,
            meals: 2,
            bbq: 3
        }
    } else {
        return {
            rsvp: 0,
            meals: 1,
            bbq: 2
        }
    }
}
