import { Component } from "react";

interface NavbarProps {
  amout: number;
}

export default class Navbar extends Component<NavbarProps> {
  render() {
    const { amout } = this.props;
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="index.html">
            Navbar
          </a>
          <span className="badge text-bg-dark">{amout}</span>
        </nav>
      </div>
    );
  }
}
