import axios from "axios";
import { configToken, tokenConfig } from "./auth";
import { createMessage, deleteMessage, returnErrors } from "./messages";

// get leads action
export const getLeads = () => (dispatch, getState) => {
  axios
    .get("/api/leads/", tokenConfig(getState))
    .then(res => {
      dispatch({ type: "GET_LEADS", payload: res.data });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteLead = id => (dispatch, getState) => {
  axios
    .delete(`api/leads/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(deleteMessage({ deleteLead: "Lead deleted" }));
      dispatch({ type: "DELETE_LEAD", payload: id });
    })
    .catch(err => console.log("Error", err));
};

export const addLead = lead => (dispatch, getState) => {
  axios
    .post("api/leads/", lead, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ createLead: "Lead Created" }));
      dispatch({ type: "ADD_LEAD", payload: res.data });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
