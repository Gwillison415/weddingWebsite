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
  return axios.post(`/user/rsvp/${id}?name=${props.name}&rsvp=${props.RSVP}`, {}).then(response => response.data)
}
export const accomodationsFormSubmit = props => ({type: CONST.ACCOMODATIONS_FORM, payload: props});

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
      console.log('getDependentGuest response.data===', response.data, "typeof response.data=", typeof response.data);
       // dispatch({type: "GET_DEPENDENT_GUESTS_2", data: response.data})
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
