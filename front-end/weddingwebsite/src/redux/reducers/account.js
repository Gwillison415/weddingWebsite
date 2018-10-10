import * as CONST from '../constants/constants';

export const user = (state = { loginStatus: false }, action) => {
  switch (action.type) {
    case CONST.LOGIN_FULFILLED:
    console.log('action.payload==', action.payload);
    localStorage.setItem('userId', action.payload.id);
    return { ...state, loginStatus: true, ...action.payload };
    case CONST.LOGIN:
    console.log('action.payload==', action.payload);
    localStorage.setItem('userId', action.payload.id);
    return { ...state, loginStatus: true, ...action.payload };
    case CONST.LOGIN_REJECTED:
      return { ...state, loginStatus: false, error: `Login Failed. ${action.payload.response.data.error}`, ...action.payload };
    case CONST.LOGOUT_FULFILLED:
      localStorage.clear();
      return { loginStatus: false };
    case CONST.SIGNUP_FULFILLED:
      return { ...state, loginStatus: false, ...action.payload };
    case CONST.SIGNUP_REJECTED:
      return { ...state, loginStatus: false, error: 'User Already Exists. Please Log In.', ...action.payload };
    case CONST.RESET_PASSWORD_FULFILLED:
    localStorage.setItem('userId', action.payload.id);
    return { ...state, loginStatus: true, ...action.payload };
    case CONST.RESET_PASSWORD_REJECTED:
      return { ...state, loginStatus: false, resetError: `Login Failed. ${action.payload.response.data.error}`, ...action.payload };
    default:
      return state;
  }
};

export const loginRedirect = (state = {}, action) => {
  switch (action.type) {
    case CONST.REDIRECT:
      return { ...state, redirectURL: action.url };
    default:
      return state;
  }
};
export const saveTheDateForm = (state = {}, action) => {
  switch (action.type) {
    case CONST.SAVE_THE_DATE_FORM_FULFILLED:
      return { ...state, ...action.info };
    default:
      return state;
  }
};

export const accomodationsForm = (state = {}, action) => {
  switch (action.type) {
    case CONST.ACCOMODATIONS_FORM_FULFILLED:
      return { ...state, ...action.info };
    default:
      return state;
  }
};

export const rsvpForm = (state = {}, action) => {
  switch (action.type) {
    case CONST.RSVP_FORM_FULFILLED:
      return { ...state, ...action.info };
    default:
      return state;
  }
};
