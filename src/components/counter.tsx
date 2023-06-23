import React from "react";
import { ICount, TYPE } from "../app";

interface CounterProps {
	count: ICount;
	onAction: (countID: number, actionType: TYPE) => void;
}

export default class Counter extends React.Component<CounterProps, {}> {
	intervalID?: NodeJS.Timer;
	getBadgeClassName() {
		const { count } = this.props;
		return `badge bg-${count.value === 0 ? "danger" : "secondary"}`;
	}

	componentWillUnmount(): void {
		console.log("[COUNTER] WILL UNMOUNT");
		clearInterval(this.intervalID);
	}

	render() {
		const { count } = this.props;
		const actions: [string, TYPE][] = [
			["-", TYPE.DECREMENT],
			["+", TYPE.INCREMENT],
			["❌", TYPE.DELETE],
		];

		return (
			<div className="mt-2">
				<span className={this.getBadgeClassName()}>{count.value ? count.value : "Zero"}</span>
				{actions.map(([action, type]) => (
					<button
						key={action}
						onClick={() => this.props.onAction(count.id, type)}
						className="btn btn-primary ms-2"
						children={action}
					/>
				))}
			</div>
		);
	}
}
