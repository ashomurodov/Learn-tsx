import React from "react";
import Counter from "./components/counter";

export default class App extends React.Component {
	state = {
		counters: [1, 0, 3, 3],
	};

	render() {
		const { counters } = this.state;
		return (
			<main className="container">
				{counters.map((count, idx) => (
					<Counter key={idx} count={count} />
				))}
			</main>
		);
	}
}
