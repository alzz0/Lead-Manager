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
          <th>{lead.id}</th>
          <th>{lead.name}</th>
          <th>{lead.email}</th>
          <th>{lead.message}</th>
          <th>
            <button
              onClick={() => this.props.deleteLead(lead.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </th>
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
