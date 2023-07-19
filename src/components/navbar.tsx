import React, { Component } from "react";
import { Link } from "react-router-dom";
import { iEntity } from "types";

interface NavbarProps {
  onNavigate: (pathname: string) => void;
  onLogOut: () => void;
  user: iEntity.User;
}

const paths = [
  { pathname: "/login", title: "Login" },
  { pathname: "/register", title: "Register" },
];

export default class Navbar extends Component<NavbarProps> {
  render() {
    const { onNavigate, user, onLogOut } = this.props;

    const LoginedPaths = [
      { pathname: "/", title: user?.name },
      { pathname: "/", title: "logout" },
    ];

    const currentPath = user ? LoginedPaths : paths;

    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            Movies
          </Link>

          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {currentPath.map((path) => (
                <li key={path.title} className="nav-item">
                  <Link
                    to={`${path.pathname}`}
                    className="nav-link active"
                    aria-current="page"
                    onClick={() => {
                      if (path.title === "logout") {
                        onLogOut();
                      }
                    }}
                  >
                    {path.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
