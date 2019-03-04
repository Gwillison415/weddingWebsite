import * as CONST from '../constants/constants';
import axios from 'axios';

const saveDateInfo = (props) => {
  return axios.post(`${process.env.REACT_APP_API_ADDRESS}/user/1strsvp`, props, { withCredentials: true }).then(response => {
    return response.data
  })
}
export const saveTheDateFormSubmit = (props) => {
  return { type: CONST.SAVE_THE_DATE_FORM, payload: saveDateInfo(props) }
};
const saveDependentDateInfo = (props) => {
  return axios.post(`${process.env.REACT_APP_API_ADDRESS}/user/drsvp/dependents`, props, { withCredentials: true }).then(response => response.data)
}
export const saveTheDateDependentFormSubmit = (props) => {
  return { type: CONST.SAVE_THE_DATE_DEPENDENT_FORM, payload: saveDependentDateInfo(props) }
};

const saveMainRsvp = (props) => {
  return axios.post(`${process.env.REACT_APP_API_ADDRESS}/user/2ndrsvp`, props, { withCredentials: true }).then(response => response.data)
}
export const saveMainRsvpFormSubmit = (props) => {  
  if (props.type === "final_rsvp") {
    return ({ type: CONST.SAVE_THE_FINAL_DATE_FORM, payload: saveMainRsvp(props) })
  } else {
    return ({ type: CONST.SAVE_THE_REHEARSAL_DATE_FORM, payload: saveMainRsvp(props) })
  }
}

const postAccomodationsFormData = (props) => {
  return axios.post(`${process.env.REACT_APP_API_ADDRESS}/user/arsvp/`, props, { withCredentials: true })
    .then(response => response.data)
}
export const accomodationsFormSubmit = props => ({ type: CONST.ACCOMODATIONS_FORM, payload: postAccomodationsFormData(props) });

const postMealPrefFormData = (props) => {
  return axios.post(`${process.env.REACT_APP_API_ADDRESS}/user/meals/`, props, { withCredentials: true })
    .then(response => response.data)
}
export const saveMealPrefsSubmit = props => ({ type: CONST.MEALS_FORM, payload: postMealPrefFormData(props) });

const postDependentMealPrefFormData = (props) => {
  return axios.post(`${process.env.REACT_APP_API_ADDRESS}/user/dependents/meals/`, props, { withCredentials: true })
    .then(response => response.data)
}

export const saveDependentMealPrefsSubmit = props => ({ type: CONST.DEPENDENT_MEALS_FORM, payload: postDependentMealPrefFormData(props) });

export const updateUserPropsFromForms = (props) => ({ type: CONST.UPDATE_USER_INFO, payload: props });

const getDependentGuestData = (name) => {
  let id = localStorage.getItem('userId')
  return axios.get(`${process.env.REACT_APP_API_ADDRESS}/user/dependents/${id}?name=${name}`, { withCredentials: true })
    .then(response => {
      return response.data;
    })
    .catch(err => err)
}
export const getDependents = props => (
  {
    type: CONST.GET_DEPENDENT_GUESTS,
    payload: getDependentGuestData(props)
  }
);
export const rsvpFormSubmit = props => ({ type: CONST.RSVP_FORM, payload: props });
