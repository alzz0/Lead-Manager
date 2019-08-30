import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              Lead Manager
            </a>
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              {!this.props.isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <ul className="navbar-nav ml-auto mt-2 my-lg-0">
                    <span className="navbar-text mr-3">
                      <strong>{`Welcome ${this.props.user.username}`}</strong>
                    </span>
                    <button
                      className="nav-link btn btn-info btn-sm text-light"
                      onClick={this.props.logout}
                    >
                      Logout
                    </button>
                  </ul>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});
export default connect(
  mapStateToProps,
  { logout }
)(Header);
