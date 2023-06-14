import React from "react";

export default class Counter extends React.Component {
	state = { count: 0 };
	inputRef = React.createRef();

	getBadgeClassName() {
		const { count } = this.state;
		return `badge bg-${count === 0 ? "danger" : "secondary"}`;
	}

	handleIncrement = () => {
		const step = +this.inputRef.current.value;
		this.setState((prev) => ({ count: prev.count + step }));
	};

	render() {
		const { count } = this.state;

		return (
			<div className="mt-2">
				<input ref={this.inputRef} type="text" placeholder="Enter step" />
				<span className={this.getBadgeClassName()}>{count ? count : "Zero"}</span>
				<button onClick={this.handleIncrement} className="btn btn-primary ms-2">
					Increment
				</button>
			</div>
		);
	}
}
