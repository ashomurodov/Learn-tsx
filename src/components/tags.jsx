import React, { Component } from "react";

export default class Tags extends Component {
	state = {
		list: ["first", "second", "third", "fourth", "fifth", "sixth"],
	};

	handleRemove(item) {
		const deletedIdx = this.state.list.findIndex((i) => i === item);
		const list = [...this.state.list];
		list.splice(deletedIdx, 1);

		this.setState({ list });
	}

	render() {
		const { list } = this.state;
		return (
			<ul>
				{list.map((item, idx) => (
					<li className="my-2" style={{ listStyleType: "none" }} key={Math.random()}>
						<span className="badge bg-dark">{item}</span>
						<button className="btn btn-danger btn-sm mx-2 " onClick={() => this.handleRemove(item)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		);
	}
}
