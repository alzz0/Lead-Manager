import axios from "axios";
import { returnErrors } from "./messages";

//check token and load user

export const loadUser = () => (dispatch, getState) => {
  //user loading
  dispatch({ type: "USER_LOADING" });
  //get token from state
  const token = getState().auth.token;

  // headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // if token add to headers config

  if (token) {
    config.headers["Authorization"] = `Token${token}`;
  }
  axios
    .get("/api/auth/user", config)
    .then(res => {
      dispatch({
        type: "USER_LOADED",
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: "AUTH_ERROR" });
    });
};

//login user

export const loginUser = (username, password) => dispatch => {
  // headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // request body
  const body = JSON.stringify({ username, password });

  axios
    .post("/api/auth/login", body, config)
    .then(res => {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: "LOGIN_FAIL" });
    });
};

// logout user

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post("/api/auth/logout/", null, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: "LOGOUT"
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// Setup config with token - helper function
export const tokenConfig = getState => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
