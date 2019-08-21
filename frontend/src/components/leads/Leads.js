import React, { Component } from "react";
import { connect } from "react-redux";
import { getLeads, deleteLead } from "../../redux/actions/Leads";
class Leads extends Component {
  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    const { leads } = this.props;
    let allLeads = leads.length ? (
      leads.map(lead => (
        <tr key={lead.id}>
          <td>{lead.id}</td>
          <td>{lead.name}</td>
          <td>{lead.email}</td>
          <td>{lead.message}</td>
          <td>
            <button
              onClick={() => this.props.deleteLead(lead.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <th>No Leads</th>
      </tr>
    );
    return (
      <>
        <h2>Leads</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <thead>{allLeads}</thead>
          <tbody>
            <tr />
          </tbody>
        </table>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    leads: state.leads.leads
  };
};
export default connect(
  mapStateToProps,
  { getLeads, deleteLead }
)(Leads);
