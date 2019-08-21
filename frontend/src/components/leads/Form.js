import React, { Component } from "react";
import { addLead } from "../../redux/actions/leads";
import { connect } from "react-redux";
class Form extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
    this.setState({ name: "", email: "", message: "" });
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              id="name"
              onChange={this.handleChange}
              value={name}
            />
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              id="email"
              onChange={this.handleChange}
              value={email}
            />
            <label>Message</label>
            <input
              className="form-control"
              type="text"
              id="message"
              onChange={this.handleChange}
              value={message}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addLead }
)(Form);
