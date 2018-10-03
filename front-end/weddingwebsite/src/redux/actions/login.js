import axios from 'axios';
import * as CONST from '../constants/constants';
/*global FB*/

const loginRequest = (props) => {
  console.log('loginRequest FIRED');
  const url = '/api/login';
  return axios.post(url, props).then(response => response.data);
};

export const login = props => ({type: CONST.LOGIN, payload: loginRequest(props)});

export const setRedirectUrl = url => ({type: CONST.REDIRECT, url});
