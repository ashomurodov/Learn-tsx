import React, { Component } from "react";
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
          <span className="navbar-brand" onClick={() => onNavigate("/")}>
            Movies
          </span>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {currentPath.map((path) => (
                <li key={path.title} className="nav-item">
                  <span
                    className="nav-link active"
                    aria-current="page"
                    onClick={() => {
                      onNavigate(path.pathname);
                      if (path.title === "logout") {
                        onLogOut();
                      }
                    }}
                  >
                    {path.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
