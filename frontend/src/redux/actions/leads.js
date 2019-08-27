import axios from "axios";

import { createMessage, deleteMessage, returnErrors } from "./messages";

// get leads action
export const getLeads = () => dispatch => {
  axios
    .get("/api/leads/")
    .then(res => {
      dispatch({ type: "GET_LEADS", payload: res.data });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteLead = id => dispatch => {
  axios
    .delete(`api/leads/${id}/`)
    .then(res => {
      dispatch(deleteMessage({ deleteLead: "Lead deleted" }));
      dispatch({ type: "DELETE_LEAD", payload: id });
    })
    .catch(err => console.log("Error", err));
};

export const addLead = lead => dispatch => {
  axios
    .post("api/leads/", lead)
    .then(res => {
      dispatch(createMessage({ createLead: "Lead Created" }));
      dispatch({ type: "ADD_LEAD", payload: res.data });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
