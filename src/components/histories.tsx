import { AppState } from "../app";

interface HistoriesProps
	extends Pick<AppState, "histories" | "nextPlayer" | "currentIdx" | "winner"> {
	onHistory: (idx: number) => void;
}

export default function Histories({
	nextPlayer,
	histories,
	currentIdx,
	winner,
	onHistory,
}: HistoriesProps) {
	return (
		<div className="ms-2">
			<h5>{winner ? `Winner ${winner}` : `Next player: ${nextPlayer}`}</h5>
			<div className="btn-group-vertical" style={{ gap: 2 }}>
				{histories.map((h, idx) => (
					<button key={idx} onClick={() => onHistory(idx)} disabled={currentIdx === idx}>
						Go to {idx ? `move #${idx}` : "game start"}
					</button>
				))}
			</div>
		</div>
	);
}
