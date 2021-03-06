import axios from 'axios';
import * as CONST from '../constants/constants';

const loginRequest = (props) => {
  const url = '/api/login';
  return axios.post(url, props, { withCredentials: true }).then(response => response.data);
};

export const login = props => ({type: CONST.LOGIN, payload: loginRequest(props)});

const signupRequest = (props) => {
  const url = '/api/signup';
  return axios.post(url, props, { withCredentials: true }).then(response => response.data);
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
