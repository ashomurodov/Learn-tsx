import React from "react";
import Counter from "./components/counter";

export default class App extends React.Component {
	state = {
		counters: [1, 0, 3, 3],
	};

	handleReset = () => {
		this.setState({ counters: [0, 0, 0, 0] });
	};

	hanleIncrement = (step = 10) => {
		this.setState((prev) => ({ counters: prev.counters.map((count) => count + step) }));
	};

	render() {
		const { counters } = this.state;
		return (
			<main className="container">
				<button className="my-2 btn btn-primary" onClick={() => this.hanleIncrement(20)}>
					Increment
				</button>
				<button className="my-2 btn btn-primary" onClick={this.handleReset}>
					Reset
				</button>
				{counters.map((count, idx) => (
					<Counter key={idx} count={count} handleIncrement />
				))}
			</main>
		);
	}
}
