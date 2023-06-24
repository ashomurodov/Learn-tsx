import { Component } from "react";

export default class NavBar extends Component<{ amount: number }> {
  render() {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container justify-content-start">
          <span className="navbar-brand mb-0 h1">PDP-G-8</span>
          <span className="badge bg-dark ms-2">{this.props.amount}</span>
        </div>
      </nav>
    );
  }
}
