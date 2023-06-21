import { ICount, TYPE } from "../app";

interface CounterProps {
	count: ICount;
	onAction: (countID: number, actionType: TYPE) => void;
}

export default function Counter({ count, onAction }: CounterProps) {
	const getBadgeClassName = () => {
		return `badge bg-${count.value === 0 ? "danger" : "secondary"}`;
	};

	const actions: [string, TYPE][] = [
		["-", TYPE.DECREMENT],
		["+", TYPE.INCREMENT],
		["❌", TYPE.DELETE],
	];

	return (
		<div className="mt-2">
			<span className={getBadgeClassName()}>{count.value ? count.value : "Zero"}</span>
			{actions.map(([action, type]) => (
				<button
					key={action}
					onClick={() => onAction(count.id, type)}
					className="btn btn-primary ms-2"
					children={action}
				/>
			))}
		</div>
	);
}
