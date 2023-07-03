import { Component } from "react";
import { Genres, Movies } from "./components";

export default class Home extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-3">
					<Genres />
				</div>
				<div className="col">
					<Movies />
				</div>
			</div>
		);
	}
}
