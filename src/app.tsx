import React, { Component } from "react";
import { Navbar } from "components";
import { Home, Login, Register } from "pages";
import { iEntity } from "types";
import { Auth } from "services";

interface AppState {
  pathname: string;
  user: iEntity.User;
  isLoading: boolean;
}

export default class App extends Component<{}, AppState> {
  state: AppState = {
    pathname: window.location.pathname,
    user: null,
    isLoading: true,
  };

  handleNavigate = (pathname: string) => {
    window.history.pushState({}, "", pathname);
    this.setState({ pathname });
  };

  handleLogin = (user: iEntity.User) => {
    this.setState({ user });
    this.handleNavigate("/");
  };

  handleLogOut = () => {
    this.setState({ user: null });
    localStorage.removeItem("tokenKey");
  };

  getPage = () => {
    const { user } = this.state;
    switch (this.state.pathname) {
      case "/":
        return <Home />;
      case "/register":
        if (user) {
          this.handleNavigate("/");
          return null;
        }
        return <Register onNavigate={this.handleNavigate} />;
      case "/login":
        if (user) {
          this.handleNavigate("/");
          return null;
        }
        return <Login onLogin={this.handleLogin} />;
      default:
        return <Home />;
    }
  };

  async componentDidMount() {
    const accessToken = localStorage.getItem("tokenKey");
    console.log("hello", accessToken);
    try {
      if (accessToken) {
        const { data } = await Auth.GetMe({ accessToken });
        this.setState({ user: data, isLoading: false });
      }
    } catch (error: any) {
      console.log(error.response.data);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { user, isLoading } = this.state;
    console.log(isLoading);
    if (isLoading) return <h1>Loading...</h1>;
    return (
      <>
        <Navbar onLogOut={this.handleLogOut} user={user} onNavigate={this.handleNavigate} />
        <div className="container">{this.getPage()}</div>
      </>
    );
  }
}
