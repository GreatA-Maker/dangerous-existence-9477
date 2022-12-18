import * as actionTypes from "./actionTypes";
// import { saveData } from "../../Utils/localStorage"
// import { loadData } from "../../Utils/localStorage"

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  // token: loadData("myntraToken") || null
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
      const token = state.token = payload
      // saveData("myntraToken", token)
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
