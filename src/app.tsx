import { Component } from "react";
import Board from "./components/board";
import History from "./components/history";

export default class App extends Component {
  state = {
    history: [Array(9).fill(null)],
    currentMove: 0,
  };

  render() {
    const { history, currentMove } = this.state;
    const xIsNext = currentMove % 2 === 0;
    const currentBoard = history[currentMove];

    return (
      <div className="container mt-5 d-flex gap-5">
        <Board board={currentBoard} />
        <History />
      </div>
    );
  }
}
