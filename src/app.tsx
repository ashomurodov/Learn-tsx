import { Component } from "react";
import { Home, Login, Register } from "pages";
import { Navbar } from "components";
import { IEntity } from "types";

interface AppState {
	pathname: string;
	user: IEntity.User | null;
}
export default class App extends Component<{}, AppState> {
	state: AppState = {
		pathname: window.location.pathname,
		user: null,
	};

	getPage = () => {
		switch (this.state.pathname) {
			case "/login":
				return <Login />;
			case "/register":
				return <Register />;
			default:
				return <Home />;
		}
	};

	handleNavigate = (pathname: string) => {
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
