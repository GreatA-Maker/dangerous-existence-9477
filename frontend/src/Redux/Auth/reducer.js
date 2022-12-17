import * as actionTypes from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: null,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        token: payload,
      };

    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        token: null,
      };
    default:
      return state;
  }

};
