import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    const { login, password } = this.state;
    this.props.handleLogin(login, password);
    this.setState({
      login: "",
      password: ""
    });
  };

  render() {
    const { isAdmin, handleLogout } = this.props;
    const { login, password } = this.state;
    return (
      <div className="login-container">
        {isAdmin ? (
          <div className="loged-in-block">
            <span>Admin</span>
            <button className="btn btn-login" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <form className="loged-out-block">
            <div className="input-field input-field-login">
              <label htmlFor="login">Login</label>
              <input
                className="input"
                type="text"
                id="login"
                value={login}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="input-field input-field-login">
              <label htmlFor="password">Password</label>
              <input
                className="input"
                type="password"
                id="password"
                value={password}
                onChange={this.handleInputChange}
              />
            </div>

            <button className="btn btn-login" onClick={this.handleLogin}>
              Login
            </button>
          </form>
        )}
      </div>
    );
  }
}
