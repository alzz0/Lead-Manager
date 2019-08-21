import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from "./layout/Alerts";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// Alert options
const alertOptions = {
  timeout: 3000,
  position: "bottom center"
};
import { Provider } from "react-redux";
import store from "../redux/store";
class App extends Component {
  render() {
    return (
      <>
        <Alerts />
        <Header />

        <div className="container">
          <Dashboard />
        </div>
      </>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById("app")
);
