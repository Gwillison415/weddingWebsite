import * as CONST from '../constants/constants';
import axios from 'axios';

export const saveTheDateSubmit = props => ({
  type: CONST.SAVE_THE_DATE_FORM,
  info: props,
});

export const accomodationsFormSubmit = props => ({
  type: CONST.ACCOMODATIONS_FORM,
  info: props,
});

export const rsvpFormSubmit = props => ({
  type: CONST.RSVP_FORM,
  info: props,
});
