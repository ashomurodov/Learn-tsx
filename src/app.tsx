import React, { Component } from "react";
import { Navbar } from "components";
import { Home, Login, Register } from "pages";
import { iEntity } from "types";
import { Auth } from "services";
import { Route, Routes } from "react-router-dom";

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

  async componentDidMount() {
    const accessToken = localStorage.getItem("tokenKey");
    console.log("hello", accessToken);
    try {
      if (accessToken) {
        const { data: user } = await Auth.GetMe({ accessToken });
        this.setState({ user, isLoading: false });
      }
    } catch (error: any) {
      console.log(error.response.data);
      this.setState({ isLoading: false });
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
        <div className="container">
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/register" element={user ? <Home user={user} /> : <Register onNavigate={this.handleNavigate} />} />
            <Route path="/login" element={user ? <Home user={user} /> : <Login onLogin={this.handleLogin} />} />
          </Routes>
        </div>
      </>
    );
  }
}
