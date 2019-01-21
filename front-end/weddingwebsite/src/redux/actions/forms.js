import * as CONST from "../constants/constants";
import axios from "axios";

const saveDateInfo = data => {
  return axios
    .post(`${process.env.REACT_APP_API_ADDRESS}/user/1strsvp`, data, {
      withCredentials: true
    })
    .then(response => response.data);
};
export const saveTheDateFormSubmit = data => {
  return {type: CONST.SAVE_THE_DATE_FORM, payload: saveDateInfo(data)};
};
const saveDependentDateInfo = data => {
  return axios
    .post(`${process.env.REACT_APP_API_ADDRESS}/user/drsvp/dependents`, data, {
      withCredentials: true
    })
    .then(response => response.data);
};
export const saveTheDateDependentFormSubmit = data => {
  return {
    type: CONST.SAVE_THE_DATE_DEPENDENT_FORM,
    payload: saveDependentDateInfo(data)
  };
};

const saveMainRsvp = data => {
  return axios
    .post(`${process.env.REACT_APP_API_ADDRESS}/user/2ndrsvp`, data, {
      withCredentials: true
    })
    .then(response => response.data);
};
export const saveMainRsvpFormSubmit = data => {
  if (data.type === "final_rsvp") {
    return {type: CONST.SAVE_THE_FINAL_DATE_FORM, payload: saveMainRsvp(data)};
  } else {
    return {
      type: CONST.SAVE_THE_REHEARSAL_DATE_FORM,
      payload: saveMainRsvp(data)
    };
  }
};

const postAccomodationsFormData = data => {
  return axios
    .post(`${process.env.REACT_APP_API_ADDRESS}/user/arsvp/`, data, {
      withCredentials: true
    })
    .then(response => response.data)

};
export const accomodationsFormSubmit = data => ({
  type: CONST.ACCOMODATIONS_FORM,
  payload: postAccomodationsFormData(data)
});

const postMealPrefFormData = data => {
  return axios
    .post(`${process.env.REACT_APP_API_ADDRESS}/user/meals/`, data, {
      withCredentials: true
    })
    .then(response => response.data);
};
export const saveMealPrefsSubmit = data => ({
  type: CONST.MEALS_FORM,
  payload: postMealPrefFormData(data)
});

const postDependentMealPrefFormData = data => {
  return axios
    .post(
      `${process.env.REACT_APP_API_ADDRESS}/user/dependents/meals/`,
      data,
      {withCredentials: true}
    )
    .then(response => response.data);
};

export const saveDependentMealPrefsSubmit = data => ({
  type: CONST.DEPENDENT_MEALS_FORM,
  payload: postDependentMealPrefFormData(data)
});

const postBBqFormSubmit = data => {
  if (data.isMainGuest) {
    return axios
      .post(`${process.env.REACT_APP_API_ADDRESS}/user/bbq/`, data, {
        withCredentials: true
      })
      .then(response => response.data);
  } else {
    return axios
      .post(
        `${process.env.REACT_APP_API_ADDRESS}/user/dependents/bbq/`,
        data,
        {withCredentials: true}
      )
      .then(response => response.data);
  }
};

export const bbqFormSubmit = data => {
  if (data.isMainGuest) {
    return {type: CONST.MAIN_BBQ_FORM, payload: postBBqFormSubmit(data)};
  } else {
    return {type: CONST.DEPENDENT_BBQ_FORM, payload: postBBqFormSubmit(data)};
  }
};
const postBrunchFormSubmit = data => {
  if (data.isMainGuest) {
    return axios
      .post(`${process.env.REACT_APP_API_ADDRESS}/user/brunch/`, data, {
        withCredentials: true
      })
      .then(response => response.data);
  } else {
    return axios
      .post(
        `${process.env.REACT_APP_API_ADDRESS}/user/dependents/brunch/`,
        data,
        {withCredentials: true}
      )
      .then(response => response.data);
  }
};

<<<<<<< HEAD
export const brunchFormSubmit = data => {
  if (data.isMainGuest) {
    return {type: CONST.MAIN_BRUNCH_FORM, payload: postBrunchFormSubmit(data)};
  } else {
    return {
      type: CONST.DEPENDENT_BRUNCH_FORM,
      payload: postBrunchFormSubmit(data)
    };
  }
};

export const updateUserPropsFromForms = data => ({
  type: CONST.UPDATE_USER_INFO,
  payload: data
});

const getDependentGuestData = name => {
  let id = localStorage.getItem("userId");
  return axios
    .get(
      `${process.env.REACT_APP_API_ADDRESS}/user/dependents/${id}?name=${name}`,
      {withCredentials: true}
    )
    .then(response => {
      return response.data;
    })
    .catch(err => err);
};
export const getDependents = data => ({
  type: CONST.GET_DEPENDENT_GUESTS,
  payload: getDependentGuestData(data)
});
export const rsvpFormSubmit = data => ({
  type: CONST.RSVP_FORM,
  payload: data
});
=======
export const getDependents = props => (
  {
    type: CONST.GET_DEPENDENT_GUESTS,
    payload: getDependentGuestData(props)
  }
);
const getDependentGuestData = (name) => {
  let id = localStorage.getItem('userId')
  return axios.get(`${process.env.REACT_APP_API_ADDRESS}/user/dependents/${id}?name=${name}`, { withCredentials: true })
    .then(response => {
      return response.data;
    })
    .catch(err => err)
}
export const rsvpFormSubmit = props => ({ type: CONST.RSVP_FORM, payload: props });
>>>>>>> change port assignment to 80 and ditch proxy

export const handleTabChange = index => ({
  type: CONST.TAB_CHANGE,
  payload: index
});
export const closeModal = () => ({
  type: CONST.CLOSE_MODAL
});
