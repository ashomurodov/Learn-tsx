import React, { Component } from "react";

let num = 1;

export default class Counter extends Component {
	state = {
		count: this.props.count,
	};

	getBadgeClassName() {
		const { count } = this.state;
		return `badge bg-${count === 0 ? "danger" : "secondary"}`;
	}

	render() {
		const { count } = this.state;
		return (
			<div className="mt-2">
				<span className={this.getBadgeClassName()}>{count ? count : "Zero"}</span>
				<button className="btn btn-primary ms-2">Increment</button>
			</div>
		);
	}
}
