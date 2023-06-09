import React, { Component } from "react";

export default class Counter extends Component {
	render() {
		const count = 20;
		return (
			<div className="mt-2">
				<span className="badge bg-secondary">{count}</span>
				<button className="btn btn-primary ms-2">Increment</button>
			</div>
		);
	}
}
