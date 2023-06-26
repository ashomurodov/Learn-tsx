import { Component } from "react";
import Board from "./components/board";
import History from "./components/history";

export default class App extends Component {
  state = {
    history: [Array(9).fill(null)],
    currentMove: 0,
    winner: false,
  };

  handleClick = (idx: number, board: any, xIsNext: any) => {
    if (board[idx]) {
      return;
    }

    const nextSquares = board.slice();
    if (xIsNext) {
      nextSquares[idx] = "X";
    } else {
      nextSquares[idx] = "O";
    }

    const nextHistory = [...this.state.history.slice(0, this.state.currentMove + 1), nextSquares];
    this.setState(
      {
        history: nextHistory,
        currentMove: nextHistory.length - 1,
      },
      () => {
        console.log(this.state);
      }
    );

    console.log(idx);
  };

  render() {
    const { history, currentMove } = this.state;
    const xIsNext = currentMove % 2 === 0;
    const currentBoard = history[currentMove];

    function calculateWinner(board: any) {
      return false;
    }

    const winner = calculateWinner(currentBoard);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
      <div className="container mt-5 d-flex gap-5">
        <Board status={status} board={currentBoard} xIsNext={xIsNext} handleClick={this.handleClick} />
        <History />
      </div>
    );
  }
}
