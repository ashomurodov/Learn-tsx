import React from "react";
import img from "./img.png";

export default class App extends React.Component {
	render() {
		return (
			<ul className="list">
				<img src={img} alt="" />
				<li className="list-item">first</li>
				<li className="list-item">second</li>
			</ul>
		);
	}
}
