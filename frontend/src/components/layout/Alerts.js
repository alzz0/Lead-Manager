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
      if (error.msg.non_field_errors) {
        alert.error(error.msg.non_field_errors);
      }
    }
    if (message !== prevProps.message) {
      if (message.deleteLead) {
        alert.success(message.deleteLead);
        if (error.msg.username) {
          alert.error(error.msg.username.join());
        }
      }
    }
    if (message !== prevProps.message) {
      if (message.createLead) {
        alert.success(message.createLead);
      }
      if (message.passwordNotMatch) {
        alert.error(message.passwordNotMatch);
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
