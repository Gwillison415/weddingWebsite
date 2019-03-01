import * as CONST from "../constants/constants";

const updateGuest = (allGuestsInState, updatedGuest) => {
  if (!updatedGuest.error) {
    return allGuestsInState.map(originalGuest =>
      originalGuest.full_name === updatedGuest.full_name
        ? updatedGuest
        : originalGuest
    );
  } else {
    return allGuestsInState;
  }
};
export const user = (
  state = {
    loginStatus: false,
    dependentGuests: [],
    homeIsActive: true,
    activeTab: 0,
    error: ""
  },
  action
) => {
  let error;
  switch (action.type) {
    case CONST.LOGIN_FULFILLED:
      localStorage.setItem("userId", action.payload.id);
      return {
        ...state,
        loginStatus: true,
        homeIsActive: false,
        profileIsActive: true,
        dependentGuests: [],
        ...action.payload
      };
    case CONST.LOGIN:
      localStorage.setItem("userId", action.payload.id);
      return {
        ...state,
        loginStatus: true,
        ...action.payload
      };
    case CONST.LOGIN_REJECTED:
      return {
        ...state,
        loginStatus: false,
        error: `Login Failed. ${action.payload.response.data.error}`,
        ...action.payload
      };
    case CONST.LOGOUT_FULFILLED:
      localStorage.clear();
      return {loginStatus: false};
    case CONST.SIGNUP_FULFILLED:
      return {
        ...state,
        loginStatus: false,
        error: "You've signed up successfully! now check you email to confirm",
        ...action.payload
      };
    case CONST.SIGNUP_REJECTED:
      return {
        ...state,
        loginStatus: false,
        error:
          "Something Went wrong, make sure to sign up with the email we have for you on file",
        ...action.payload
      };
    case CONST.RESET_PASSWORD_FULFILLED:
      localStorage.setItem("userId", action.payload.id);
      return {
        ...state,
        loginStatus: true,
        ...action.payload
      };
    case CONST.UPDATE_USER_INFO:
      error = action.payload.error ? action.payload.error : "";
      return {
        ...state,
        ...action.payload,
        error
      };
    case CONST.SAVE_THE_DATE_FORM_FULFILLED:
      if (action.payload.error) {
        return {
          ...state,
          error: action.payload.error
        };
      } else {
        return {
          ...state,
          ...action.payload
        };
      }
    case CONST.SAVE_THE_FINAL_DATE_FORM_FULFILLED:
      if (action.payload.error) {
        return {
          ...state,
          error: action.payload.error
        };
      } else {
        return {
          ...state,
          ...action.payload
        };
      }

    case CONST.RESET_PASSWORD_REJECTED:
      return {
        ...state,
        loginStatus: false,
        error: `Login Failed. ${action.payload.response.data.error}`,
        ...action.payload
      };
    case CONST.GET_DEPENDENT_GUESTS_FULFILLED:
      error = action.payload.error ? action.payload.error : "";
      return {
        ...state,

        dependentGuests: [...action.payload]
      };
    case CONST.SAVE_THE_DATE_DEPENDENT_FORM_FULFILLED:
      if (action.payload.error) {
        return {
          ...state,
          error: action.payload.error
        };
      } else {
        const dependentGuestsSTD = updateGuest(
          state.dependentGuests,
          action.payload
        );

        return {
          ...state,
          dependentGuests: dependentGuestsSTD,
          error
        };
      }

    case CONST.REDIRECT:
      return {
        ...state,
        redirectURL: action.url
      };
    case CONST.CHANGE_PAGE_LOCATION:
      return {
        ...state,
        redirectURL: action.url,
        homeIsActive: action.homeIsActive,
        profileIsActive: action.profileIsActive
      };
    case CONST.ACCOMODATIONS_FORM_FULFILLED:
      if (action.payload.error) {
        return {
          ...state,
          error: action.payload.error
        };
      } else {
        return {
          ...state,
          poll_q1: action.payload.poll_q1
        };
      }
    // case CONST.ACCOMODATIONS_FORM_REJECTED:
    //
    //     return {
    //       ...state,
    //       error: action.payload.error
    //     };

    case CONST.MAIN_BBQ_FORM_FULFILLED:
      error = action.payload.error ? action.payload.error : "";

      return {
        ...state,
        error,
        poll_q2: action.payload.poll_q2
      };
    case CONST.DEPENDENT_BBQ_FORM_FULFILLED:
      if (action.payload.error) {
        return {
          ...state,
          error: action.payload.error
        };
      } else {
        const bbqDependentGuests = updateGuest(
          state.dependentGuests,
          action.payload
        );
        return {
          ...state,
          error,
          dependentGuests: bbqDependentGuests
        };
      }
    case CONST.MAIN_BRUNCH_FORM_FULFILLED:
      if (action.payload.error) {
        return {
          ...state,
          error: action.payload.error
        };
      } else {
        return {
          ...state,
          error,
          poll_q3: action.payload.poll_q3
        };
      }
    case CONST.DEPENDENT_BRUNCH_FORM_FULFILLED:
      if (action.payload.error) {
        return {
          ...state,
          error: action.payload.error
        };
      } else {
        const newDependentGuests = updateGuest(
          state.dependentGuests,
          action.payload
        );
        return {
          ...state,
          error,
          dependentGuests: newDependentGuests
        };
      }

    case CONST.SAVE_THE_REHEARSAL_DATE_FORM_FULFILLED:
      return {
        ...state,
        ...action.payload
      };
    case CONST.MEALS_FORM_FULFILLED:
      return {
        ...state,
        ...action.payload
      };
    case CONST.DEPENDENT_MEALS_FORM_FULFILLED:
      const _dependentGuests = updateGuest(
        state.dependentGuests,
        action.payload
      );
      error = action.payload.error ? action.payload.error : "";

      return {
        ...state,
        error,
        dependentGuests: _dependentGuests
      };
    case CONST.TAB_CHANGE:
      return {
        ...state,
        activeTab: action.payload
      };
    case CONST.CLOSE_MODAL:
      return {
        ...state,
        error: ""
      };
    default:
      return state;
  }
};

export const saveTheDateForm = (state = {}, action) => {
  switch (action.type) {
    case CONST.SAVE_THE_DATE_FORM:
      return {
        ...state,
        first_rsvp: action.payload.first_rsvp,
        additional_guest_count: action.payload.additional_guest_count,
        rehersal_invite: action.payload.rehersal_invite,
        rehersal_rsvp: action.payload.rehersal_rsvp
      };
    case CONST.SAVE_THE_DATE_FORM_FULFILLED:
      return {
        ...state,
        first_rsvp: action.payload.first_rsvp,
        additional_guest_count: action.payload.additional_guest_count,
        rehersal_invite: action.payload.rehersal_invite,
        rehersal_rsvp: action.payload.rehersal_rsvp
      };
    default:
      return state;
  }
};

export const rsvpForm = (state = {}, action) => {
  switch (action.type) {
    case CONST.RSVP_FORM_FULFILLED:
      return {
        ...state,
        ...action.info
      };
    default:
      return state;
  }
};
