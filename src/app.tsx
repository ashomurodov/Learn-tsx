import { Component } from "react";
import { Home, Login, Register } from "pages";
import { Navbar } from "components";
import { IEntity } from "types";
import path from "path";
import AddMovie from "pages/home/components/add-movie";

interface AppState {
  pathname: string;
  user: IEntity.User | null;
  isLogined: boolean;
}
export default class App extends Component<{}, AppState> {
  state: AppState = {
    pathname: window.location.pathname,
    user: null,
    isLogined: false,
  };

  async componentDidMount() {
    const userString = localStorage.getItem("user");
    const user: null = userString ? JSON.parse(userString) : null;
    if (user) {
      this.setState({ user, pathname: "/", isLogined: true }, () => {
        console.log("local user: ", this.state.user);
      });
    }
  }

  addMovie = () => {};

  setUser = (user: IEntity.User) => {
    this.setState({ user, isLogined: true });
    localStorage.setItem("user", JSON.stringify(user));
  };

  deleteUser = () => {
    this.setState({ user: null, isLogined: false });
    localStorage.removeItem("user");
  };

  getPage = () => {
    console.log(this.state.isLogined);
    switch (this.state.pathname) {
      case "/login":
        return <Login onNavigate={this.handleNavigate} login={this.setUser} />;
      case "/register":
        return <Register />;

      case "/movies/new":
        return <AddMovie />;
      default:
        return <Home onNavigate={this.handleNavigate} isLogined={this.state.isLogined} />;
    }
  };

  handleNavigate = (pathname: string, pathtitle?: string) => {
    window.history.pushState({}, "", pathname);

    if (pathtitle === "LogOut") {
      this.deleteUser();
    }
    this.setState({ pathname });
  };

  render() {
    const { pathname, user } = this.state;
    return (
      <>
        <Navbar user={user} currentPathname={pathname} onNavigate={this.handleNavigate} />
        <div className="container">{this.getPage()}</div>
      </>
    );
  }
}
