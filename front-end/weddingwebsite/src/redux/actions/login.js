import axios from 'axios';
import * as CONST from '../constants/constants';
/*global FB*/

const loginRequest = (props) => {
  console.log('loginRequest FIRED');
  const url = '/api/login';
  return axios.post(url, props).then(response =>{
    console.log('response.data should be before action.payload, response.data===', response.data);
     return response.data});
};

export const login = props => ({type: CONST.LOGIN, payload: loginRequest(props)});

const signupRequest = (props) => {
  console.log('signupRequest FIRED');
  const url = '/api/signup';
  return axios.post(url, props).then(response => response.data);
};

export const signup = props => ({type: CONST.SIGNUP, payload: signupRequest(props)});

export const setRedirectUrl = url => ({type: CONST.REDIRECT, url});
