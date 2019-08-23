import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from "./layout/Alerts";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import store from "../redux/store";
// Alert options

class App extends Component {
  render() {
    const alertOptions = {
      timeout: 3000,
      position: "top center"
    };
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <React.Fragment>
            <Header />
            <Alerts />
            <div className="container">
              <Dashboard />
            </div>
          </React.Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
