import * as CONST from '../constants/constants';
import axios from 'axios';

export const saveTheDateSubmit = props => {

  console.log('saveTheDateSubmit props==', props);

  return {
  type: CONST.SAVE_THE_DATE_FORM,
  info: saveDateInfo(props),
}};

const saveDateInfo = (props) =>{
  let id = localStorage.getItem('userId')
  console.log("props.name==", props.name, "props.RSVP==", props.RSVP );
  let params = {id: id, name: props.name, rsvp: props.RSVP}
  console.log('params', params);
  return axios.post(`/user/${id}?name=${props.name}&rsvp=${props.RSVP}`)
   .then(response => response.data)

 }
export const accomodationsFormSubmit = props => ({
  type: CONST.ACCOMODATIONS_FORM,
  info: props,
});
export const getDependents = props => ({
  type: CONST.GET_DEPENDENT_GUESTS,
  info: getGuestInfo(props),
});

const getGuestInfo = (name) =>{
  let id = localStorage.getItem('userId')
  console.log(".name==", name );
  return axios.get(`/user/${id}?name=${name}`)
   .then(response => response.data)

 }
export const rsvpFormSubmit = props => ({
  type: CONST.RSVP_FORM,
  info: props,
});

//
// {
//   params:{
//     id: id, name: props.name, rsvp: props.RSVP
//   }
