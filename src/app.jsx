import React from "react";
import Counter from "./components/counter";

export default class App extends React.Component {
	render() {
		return (
			<main className="container">
				<Counter />
				<Counter />
				<Counter />
				<Counter />
				<Counter />
				<Counter />
				<Counter />
			</main>
		);
	}
}
