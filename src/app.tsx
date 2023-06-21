import { Component } from "react";
import { Board, Histories } from "./components";

type Player = "X" | "O";
type TBoard = (Player | null)[];
export interface AppState {
	board: TBoard;
	histories: TBoard[];
	nextPlayer: Player;
	winner?: Player;
	currentIdx: number;
}

export default class App extends Component<{}, AppState> {
	constructor(props = {}) {
		super(props);
		this.state = JSON.parse(localStorage.getItem("state")!) || {
			board: new Array(9).fill(null),
			histories: [new Array(9).fill(null)],
			nextPlayer: "X",
			currentIdx: 0,
		};
	}

	setStateStorage: typeof this.setState = (state) => {
		this.setState(state, () => {
			localStorage.setItem("state", JSON.stringify(this.state));
		});
	};

	handleCell = (idx: number) => {
		let { nextPlayer, histories, currentIdx } = this.state;
		const board = [...this.state.board];

		if (board[idx]) return;
		board[idx] = nextPlayer;
		nextPlayer = nextPlayer === "X" ? "O" : "X";

		this.setStateStorage({
			board,
			nextPlayer,
			histories: [...histories.splice(0, currentIdx + 1), board],
			currentIdx: currentIdx + 1,
		});
	};

	handleHistory = (idx: number) => {
		const { histories } = this.state;
		const board = [...histories[idx]];

		this.setStateStorage({ board, currentIdx: idx });
	};

	render() {
		const { board, nextPlayer, histories, currentIdx, winner } = this.state;

		return (
			<main
				className="container d-flex mt-5"
				style={{ gap: 10, font: "14px Century Gothic,Futura,sans-serif" }}
			>
				<Board board={board} onCell={this.handleCell} />
				<Histories
					onHistory={this.handleHistory}
					winner={winner}
					currentIdx={currentIdx}
					nextPlayer={nextPlayer}
					histories={histories}
				/>
			</main>
		);
	}
}
