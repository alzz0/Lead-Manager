import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
class Alerts extends Component {
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) {
        alert.error(`Name: ${error.msg.name.join()}`);
      }
      if (error.msg.email) {
        alert.error(`Email: ${error.msg.email.join()}`);
      }
    }
    if (message !== prevProps.message) {
      if (message.deleteLead) {
        alert.success(message.deleteLead);
      }
    }
    if (message !== prevProps.message) {
      if (message.createLead) {
        alert.success(message.createLead);
      }
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => {
  return {
    error: state.errors,
    message: state.messages
  };
};
export default connect(mapStateToProps)(withAlert()(Alerts));
