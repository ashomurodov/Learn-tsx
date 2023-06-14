import React, { Component } from "react";

export default class Todo extends Component {
	state = {};
	render() {
		return (
			<main className="container">
				<h1 className="heading">Todo App</h1>
				<form>
					<div className="mb-3">
						<label for="todo" className="form-label">
							Todo
						</label>
						<input type="text" className="form-control" id="todo" />
					</div>
				</form>
			</main>
		);
	}
}
