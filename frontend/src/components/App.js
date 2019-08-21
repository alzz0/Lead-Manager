import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import { Provider } from "react-redux";
import store from "../redux/store";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
