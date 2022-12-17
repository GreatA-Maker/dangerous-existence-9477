import * as actionTypes from "./actionTypes";
import axios from "axios";

const signupRequest = () => {
  return {
    type: actionTypes.SIGNUP_REQUEST,
  };
};

const signupSuccess = () => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
  };
};

const signupFailure = () => {
  return {
    type: actionTypes.SIGNUP_FAILURE,
  };
};

const signup = (dispatch, email, password, navigate) => {
  dispatch(signupRequest);
  axios
    .post("http://localhost:5757/signup", { email, password })
    .then((res) => {
      dispatch(signupSuccess(res.data));
      if (res.data.message === "Signup successfull") {
        navigate("/login")
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(signupFailure());
    });
};

const loginRequest = () => {
  return {
    type: actionTypes.LOGIN_REQUEST,
  };
};

const loginSuccess = (payload) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload,
  };
};

const loginFailure = () => {
  return {
    type: actionTypes.LOGIN_FAILURE,
  };
};

const login = (dispatch, email, password, navigate) => {
  dispatch(loginRequest());
  axios
    .post("http://localhost:5757/login", { email, password })
    .then((res) => {
      dispatch(loginSuccess(res.data.token));
      if (res.data.token) {
        navigate("/");
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(loginFailure());
    });
};

export {
  signupRequest,
  signupSuccess,
  signupFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  signup,
  login,
};
