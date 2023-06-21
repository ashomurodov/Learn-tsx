import { Counter } from ".";
import { ICount, TYPE } from "../app";

interface CountersProps {
	counters: ICount[];
	onAction: (countID: number, actionType: TYPE) => void;
	onReset: () => void;
}

export default function Counters({ counters, onAction, onReset }: CountersProps) {
	return (
		<main className="container">
			<button className="my-2 btn btn-primary" onClick={onReset}>
				Reset
			</button>
			{counters.map((count, idx) => (
				<Counter key={idx} count={count} onAction={onAction} />
			))}
		</main>
	);
}
