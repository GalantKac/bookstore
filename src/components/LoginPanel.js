import React from "react";
import { firebaseApp } from "../fbase";

class LoginPanel extends React.Component {
  constructor() {
    super();
    this.state = {
        email: "",
        password: ""
    }
  }

  authenticate = event => {
    event.preventDefault();
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.changeLoggedIn(true);
        localStorage.setItem("loggedIn", true);
      })
      .catch(() => {
        console.log("Unable to autheticate");
      });
  };

  handleLoginChane = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="loginPanel align-self-center">
        <form onSubmit={this.authenticate}>
          <div className="form-group">
            <input
              type="text"
              placeholder="email"
              id="email_bs"
              name="email"
              className="form-control"
              onChange={this.handleLoginChane}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="password"
              id="password_bs"
              name="password"
              className="form-control"
              onChange={this.handleLoginChane}
              value={this.state.password}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default LoginPanel;
