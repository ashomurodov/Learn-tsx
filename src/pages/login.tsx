import React, { Component, FormEventHandler } from "react";
import { Auth } from "services";
import { iEntity } from "types";

interface LoginState {
  username: string;
  password: string;
}

interface LoginProps {
  onLogin: (user: iEntity.User) => void;
}

export default class Login extends Component<LoginProps, LoginState> {
  state: LoginState = {
    username: "",
    password: "",
  };

  handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { onLogin } = this.props;

    try {
      const { data } = await Auth.Login({ email: username, password });
      const accessToken = data.data;
      localStorage.setItem("tokenKey", accessToken);

      const { data: user } = await Auth.GetMe({ accessToken });
      onLogin(user);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
  render() {
    const { password, username } = this.state;
    return (
      <div>
        <h1 className="mb-4">Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control my-2"
              value={username}
              onChange={(e) => {
                this.setState({ username: e.target.value });
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
