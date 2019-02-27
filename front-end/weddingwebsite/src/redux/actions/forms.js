import * as CONST from '../constants/constants';
import axios from 'axios';

const saveDateInfo = (props) => {
  let id = localStorage.getItem('userId')
  return axios.post(`/user/1strsvp/${id}?name=${props.name}&rsvp=${props.RSVP}`, {}).then(response => {
    return response.data
  })
}
export const saveTheDateFormSubmit = (props) => {
  return { type: CONST.SAVE_THE_DATE_FORM, payload: saveDateInfo(props) }
};
const saveDependentDateInfo = (props) => {
  return axios.post(`/user/drsvp/dependents?type=${props.type}`, {
    mainGuest: props.mainGuest,
    dependentGuest: props.dependentGuest,
    rsvp: props.RSVP
  }).then(response => response.data)
}
export const saveTheDateDependentFormSubmit = (props) => {
  return { type: CONST.SAVE_THE_DATE_DEPENDENT_FORM, payload: saveDependentDateInfo(props) }
};

const finalSaveDateInfo = (props) => {
  return axios.post(`/user/2ndrsvp`, props).then(response => {
    return response.data
  })
}
export const saveTheFinalDateFormSubmit = (props) => ({ type: CONST.SAVE_THE_FINAL_DATE_FORM, payload: finalSaveDateInfo(props) })

const postAccomodationsFormData = (props) => {
  return axios.post(`/user/arsvp/`, props)
    .then(response => response.data)
}
export const accomodationsFormSubmit = props => ({ type: CONST.ACCOMODATIONS_FORM, payload: postAccomodationsFormData(props) });

const postMealPrefFormData = (props) => {  
  console.log('porps', props);
  
  return axios.post(`/user/meals/`, props)
    .then(response => response.data)
}
export const saveMealPrefsSubmit = props => ({ type: CONST.MEALS_FORM, payload: postMealPrefFormData(props) });

export const updateUserPropsFromForms = (props) => ({ type: CONST.UPDATE_USER_INFO, payload: props });

const getDependentGuestData = (name) => {
  let id = localStorage.getItem('userId')
    return axios.get(`/user/dependents/${id}?name=${name}`)
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
