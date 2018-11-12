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
  return axios.post(`/user/drsvp/dependents?type=${props.type}`, {
    mainGuest: props.mainGuest,
    dependentGuest: props.dependentGuest,
    rsvp: props.RSVP
  }).then(response => response.data)
}
const saveDateInfo = (props) => {
  let id = localStorage.getItem('userId')
  return axios.post(`/user/1strsvp/${id}?name=${props.name}&rsvp=${props.RSVP}`, {}).then(response => {
    return response.data})
}
const finalSaveDateInfo = (props) => {
  let id = localStorage.getItem('userId')
  return axios.post(`/user/2ndrsvp`, props).then(response => {
    console.log('2ndrsvp props=', props);
    return response.data})
}
export const saveTheFinalDateFormSubmit = (props) => {

  return {type: CONST.SAVE_THE_FINAL_DATE_FORM, payload: finalSaveDateInfo(props)}
};
export const accomodationsFormSubmit = props => ({type: CONST.ACCOMODATIONS_FORM, payload: postAccomodationsFormData(props)});

const postAccomodationsFormData = (props) => {
  console.log('props in postAccomodationsFormData==', props);
  axios.post(`/user/arsvp/`, props)
  .then(response => {console.log('formdata returned==',response.data)
  return response.data})
}
export const updateUserPropsFromForms = (props) => {
  console.log('updateUserPropsFromForms FIRED', props);
  return({type: CONST.UPDATE_USER_INFO, payload: props})
};
// export const getDependents = (props) => {
//   return async (dispatch) => {
//     dispatch({ type: CONST.GET_DEPENDENT_GUESTS })
//     const response = await getDependentGuestData(props)
//     // const json = await response.json()
//     console.log("awaited response==", response);
//     dispatch({
//       type: CONST.GET_DEPENDENT_GUESTS_FULFILLED,
//       data: response,
//     })
//   }
// }
//
// const getDependentGuestData = async (name) => {
//   let id = localStorage.getItem('userId')
//     return axios.get(`/user/dependents/${id}?name=${name}`)
//     .then(response => response.data )
//     .catch(err => err)
// }

export const getDependents = props => (
  {type: CONST.GET_DEPENDENT_GUESTS,
   payload: getDependentGuestData(props)}
);
const getDependentGuestData = (name) => {
  let id = localStorage.getItem('userId')
  return function(dispatch, getState) {
    return axios.get(`/user/dependents/${id}?name=${name}`)
    .then(response => {
       return response.data;
    })
    .catch(err => err)
  }
}
export const rsvpFormSubmit = props => ({type: CONST.RSVP_FORM, payload: props});

//
// {
//   params:{
//     id: id, name: props.name, rsvp: props.RSVP
//   }
