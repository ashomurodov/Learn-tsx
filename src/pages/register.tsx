import React, { Component, FormEventHandler } from "react";
import { Auth } from "services";

interface RegisterState {
  email: string;
  password: string;
  name: string;
}

interface RegProps {
  onNavigate: (pathname: string) => void;
}

// interface ErrorMessage {
//   data: string;
//   status: number;
// }

// interface ErrorType {
//   message: string;
//   response: ErrorMessage;
// }

export default class Register extends Component<RegProps, RegisterState> {
  state: RegisterState = {
    email: "",
    password: "",
    name: "",
  };

  handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    const { email, password, name } = this.state;
    const { onNavigate } = this.props;

    try {
      const data = await Auth.Register({
        email,
        password,
        name,
      });
      if (data.status === 200) {
        onNavigate("/login");
      }
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  render() {
    const { email, name, password } = this.state;
    return (
      <div>
        <h1 className="mb-4">Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control my-2"
              value={email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control my-2"
              value={name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control my-2"
              value={password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
