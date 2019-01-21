import axios from 'axios';
import * as CONST from '../constants/constants';

const loginRequest = (props) => {
<<<<<<< HEAD
  const url = '/api/login';
  return axios.post(url, props, { withCredentials: true }).then(response => response.data);
=======
  const url = 'http://api.sillywilliwedding.com/api/login';
  return axios.post(url, props, withCredentials: true).then(response => response.data);
>>>>>>> change port assignment to 80 and ditch proxy
};

export const login = props => ({type: CONST.LOGIN, payload: loginRequest(props)});

const signupRequest = (props) => {
<<<<<<< HEAD
  const url = '/api/signup';
  return axios.post(url, props, { withCredentials: true }).then(response => response.data);
=======
  console.log('signupRequest fired');
  const url = 'http://api.sillywilliwedding.com/api/signup';
  return axios.post(url, props, withCredentials: true).then(response => response.data);
>>>>>>> change port assignment to 80 and ditch proxy
};

export const signup = props => ({type: CONST.SIGNUP, payload: signupRequest(props)});

export const setRedirectUrl = url => ({type: CONST.REDIRECT, url});

export const changePageLocation = (newLocation) => {
  if (newLocation === 'home') {
    return {type: CONST.CHANGE_PAGE_LOCATION, url: '/', homeIsActive: true, profileIsActive: false}
  } else {
    return {type: CONST.CHANGE_PAGE_LOCATION, url: '/user', homeIsActive: false, profileIsActive: true}
  }
}
