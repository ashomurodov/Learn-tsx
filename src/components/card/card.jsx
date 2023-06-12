import React, { Component } from "react";
import "./card.scss";

export default class card extends Component {
	render() {
		const { type = "basic" } = this.props;

		return (
			<div className={`wrapper-${type}`}>{type === "basic" ? <h1>Basic</h1> : <h1>Pro</h1>}</div>
		);
	}
}
