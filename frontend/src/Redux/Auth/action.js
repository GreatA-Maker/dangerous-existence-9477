import * as actionTypes from "./actionTypes";
import axios from "axios";

const signupRequest = () => {
  return {
    type: actionTypes.SIGNUP_REQUEST
  }
}

const signupSuccess = () => {
  return {
    type: actionTypes.SIGNUP_SUCCESS
  }
}

const signupFailure = () => {
  return {
    type: actionTypes.SIGNUP_FAILURE
  }
}

const signup = (dispatch, email, password) => {
  dispatch(signupRequest)

  axios
    .post("http://localhost:5757/signup", { email, password })
    .then((res) => {
      console.log(res.data);
      dispatch(signupSuccess(res.data))
    })
    .catch((err) => {
      console.log(err);
      dispatch(signupFailure())
    });

}

const loginRequest = () => {
  return {
    type: actionTypes.LOGIN_REQUEST
  }
}

const loginSuccess = (payload) => {
  console.log("Inwoke");
  return {
    type: actionTypes.LOGIN_SUCCESS, payload
  }
}

const loginFailure = () => {
  return {
    type: actionTypes.LOGIN_FAILURE
  }
}

const login = (dispatch, email, password) => {
  dispatch(loginRequest())
  axios
    .post("http://localhost:5757/login", { email, password })
    .then((res) => {
      console.log(res.data);
      const token = res.data.token;
      dispatch(loginSuccess(token))
    })
    .catch((err) => {
      console.log(err);
      dispatch(loginFailure())
    });
}


export { signupRequest, signupSuccess, signupFailure, loginRequest, loginSuccess, loginFailure, signup, login }