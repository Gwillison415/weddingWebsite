import * as CONST from '../constants/constants';

export const user = (state = {
  loginStatus: false,
  dependentGuests: [],
  homeIsActive: true
}, action) => {
  switch (action.type) {
    case CONST.LOGIN_FULFILLED:
      localStorage.setItem('userId', action.payload.id);
      // firstRsvpStatus = action.payload.first_rsvp
      return {
        ...state,
        loginStatus: true,
        homeIsActive: false,
        profileIsActive: true,
        dependentGuests: [],
        ...action.payload
      };
    case CONST.LOGIN:
      localStorage.setItem('userId', action.payload.id);
      return {
        ...state,
        loginStatus: true,
        ...action.payload
      };
    case CONST.LOGIN_REJECTED:
      return {
        ...state,
        loginStatus: false,
        error: `Login Failed. ${action.payload.response.data.error}`,
        ...action.payload
      };
    case CONST.LOGOUT_FULFILLED:
      localStorage.clear();
      return { loginStatus: false };
    case CONST.SIGNUP_FULFILLED:
      return {
        ...state,
        loginStatus: false,
        error: 'You\'ve signed up successfully! now check you email to confirm',
        ...action.payload
      };
    case CONST.SIGNUP_REJECTED:
      return {
        ...state,
        loginStatus: false,
        error: 'Something Went wrong, make sure to sign up with the email we have for you on file',
        ...action.payload
      };
    case CONST.RESET_PASSWORD_FULFILLED:
      localStorage.setItem('userId', action.payload.id);
      return {
        ...state,
        loginStatus: true,
        ...action.payload
      };
    case CONST.UPDATE_USER_INFO:
      return {
        ...state,
        ...action.payload
      };
    case CONST.SAVE_THE_DATE_FORM_FULFILLED:
      return {
        ...state,
        ...action.payload
      };
    case CONST.SAVE_THE_FINAL_DATE_FORM_FULFILLED:
      return {
        ...state,
        final_rsvp: action.payload.final_rsvp
      };
    case CONST.RESET_PASSWORD_REJECTED:
      return {
        ...state,
        loginStatus: false,
        resetError: `Login Failed. ${action.payload.response.data.error}`,
        ...action.payload
      };
    case CONST.GET_DEPENDENT_GUESTS_FULFILLED:
      return {
        ...state,
        dependentGuests: action.payload.map(guest => guest)
      };
    case CONST.SAVE_THE_DATE_DEPENDENT_FORM_FULFILLED:

      const dependentGuests = state.dependentGuests.map(dGuest => dGuest.full_name === action.payload.full_name ? action.payload : dGuest)
      return {
        ...state,
        dependentGuests: dependentGuests,
      };
    case CONST.GET_DEPENDENT_GUESTS_PENDING:
      return {
        ...state
      };
    case CONST.GET_DEPENDENT_GUESTS:
      return {
        ...state,
        dependentGuests: action.data
      };
    case "GET_DEPENDENT_GUESTS_2":
      return {
        ...state,
        dependentGuests: action.data
      };
    case CONST.REDIRECT:
      return {
        ...state,
        redirectURL: action.url,
      };
    case CONST.CHANGE_PAGE_LOCATION:
      return {
        ...state,
        redirectURL: action.url,
        homeIsActive: action.homeIsActive,
        profileIsActive: action.profileIsActive
      };
    case CONST.ACCOMODATIONS_FORM_FULFILLED:
    console.log('ACCOMODATIONS_FORM fullfilled');
      return {
        ...state,
        poll_q1: action.payload.poll_q1
      };
    case CONST.ACCOMODATIONS_FORM:
      console.log('ACCOMODATIONS_FORM', action);
    
      return {
        ...state,
        poll_q1: action.payload.poll_q1
      };
    case CONST.MEALS_FORM_FULFILLED:
      return {
        ...state,
        meal_pref: action.payload.meal_pref,
        food_allergies: action.payload.food_allergies
      }
    default:
      return state;
  }
};

export const saveTheDateForm = (state = {}, action) => {
  switch (action.type) {
    case CONST.SAVE_THE_DATE_FORM:
      console.log(action.payload);
      return {
        ...state,
        first_rsvp: action.payload.first_rsvp,
        additional_guest_count: action.payload.additional_guest_count,
        rehersal_invite: action.payload.rehersal_invite,
        rehersal_rsvp: action.payload.rehersal_rsvp
      };
    case CONST.SAVE_THE_DATE_FORM_FULFILLED:
      console.log(action.payload);
      return {
        ...state,
        first_rsvp: action.payload.first_rsvp,
        additional_guest_count: action.payload.additional_guest_count,
        rehersal_invite: action.payload.rehersal_invite,
        rehersal_rsvp: action.payload.rehersal_rsvp
      };
    default:
      return state;
  }
};

export const accomodationsForm = (state = {}, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export const rsvpForm = (state = {}, action) => {
  switch (action.type) {
    case CONST.RSVP_FORM_FULFILLED:
      return {
        ...state,
        ...action.info
      };
    default:
      return state;
  }
};
