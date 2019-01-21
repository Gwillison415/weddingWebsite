import * as CONST from '../constants/constants';
import axios from 'axios';

export const saveTheDateFormSubmit = (props) => {

  return {type: CONST.SAVE_THE_DATE_FORM, payload: saveDateInfo(props)}
};
export const saveTheDateDependentFormSubmit = (props) => {

  return {type: CONST.SAVE_THE_DATE_DEPENDENT_FORM, payload: saveDependentDateInfo(props)}
};

// const saveDateInfo = (props) =>  axios.post(`/user/rsvp/${id}?name=${props.name}&rsvp=${props.RSVP}`,{}).then(response =>  response.data);
const saveDependentDateInfo = (props) => {
  return axios.post(`http://api.sillywilliwedding.com/user/drsvp/dependents?type=${props.type}`, {
    mainGuest: props.mainGuest,
    dependentGuest: props.dependentGuest,
    rsvp: props.RSVP
  }).then(response => response.data)
}
const saveDateInfo = (props) => {
  let id = localStorage.getItem('userId')
  return axios.post(`http://api.sillywilliwedding.com/user/1strsvp/${id}?name=${props.name}&rsvp=${props.RSVP}`, {}).then(response => {
    return response.data})
}
const finalSaveDateInfo = (props) => {
  let id = localStorage.getItem('userId')
  return axios.post(`http://api.sillywilliwedding.com/user/2ndrsvp`, props).then(response => {
    return response.data})
}
export const saveTheFinalDateFormSubmit = (props) => {

  return {type: CONST.SAVE_THE_FINAL_DATE_FORM, payload: finalSaveDateInfo(props)}
};
export const accomodationsFormSubmit = props => ({type: CONST.ACCOMODATIONS_FORM, payload: postAccomodationsFormData(props)});

const postAccomodationsFormData = (props) => {
  axios.post(`http://api.sillywilliwedding.com/user/arsvp/`, props)
  .then(response => response.data)
}
export const updateUserPropsFromForms = (props) => {
  return({type: CONST.UPDATE_USER_INFO, payload: props})
};

export const getDependents = props => (
  {type: CONST.GET_DEPENDENT_GUESTS,
   payload: getDependentGuestData(props)}
);
const getDependentGuestData = (name) => {
  let id = localStorage.getItem('userId')
  return function(dispatch, getState) {
    return axios.get(`http://api.sillywilliwedding.com/user/dependents/${id}?name=${name}`)
    .then(response => {
       return response.data;
    })
    .catch(err => err)
  }
}
export const rsvpFormSubmit = props => ({type: CONST.RSVP_FORM, payload: props});
