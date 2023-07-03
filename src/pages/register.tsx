import { Component, FormEventHandler } from "react";
import { LoginState } from "./login";
interface RegisterState extends LoginState {
  name: string;
}

export default class Register extends Component<{}, RegisterState> {
  state: RegisterState = {
    username: "",
    password: "",
    name: "",
  };

  handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  renderFormInput = (name: keyof RegisterState, type = "text") => {
    const value = this.state[name];
    return (
      <div className="form-group">
        <label htmlFor={name}>{name.toUpperCase()}</label>
        <input
          name={name}
          value={value}
          id={name}
          type={type}
          className="form-control"
          onChange={(e) => {
            const state = {} as RegisterState;
            state[name] = e.target.value;

            this.setState(state);
          }}
          required
        />
      </div>
    );
  };

  render() {
    return (
      <>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderFormInput("username")}
          {this.renderFormInput("password", "password")}
          {this.renderFormInput("name")}
          <button className="btn btn-primary">Login</button>
        </form>
      </>
    );
  }
}
