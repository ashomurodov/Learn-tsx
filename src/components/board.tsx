import React, { Component } from "react";
import Cell from "./cell";
import cls from "./board.module.css";

export interface BoardProps {
  board: any[];
  handleClick: (idx: number, board: any, xIsNext: any) => void;
  xIsNext: boolean;
  status: any;
}

export default class Board extends Component<BoardProps> {
  render() {
    const { board, handleClick, xIsNext, status } = this.props;

    return (
      <div>
        <span className="status">{status}</span>
        <div className={cls.board}>
          <Cell value={board[0]} onClick={() => handleClick(0, board, xIsNext)} />
          <Cell value={board[1]} onClick={() => handleClick(1, board, xIsNext)} />
          <Cell value={board[2]} onClick={() => handleClick(2, board, xIsNext)} />
          <Cell value={board[3]} onClick={() => handleClick(3, board, xIsNext)} />
          <Cell value={board[4]} onClick={() => handleClick(4, board, xIsNext)} />
          <Cell value={board[5]} onClick={() => handleClick(5, board, xIsNext)} />
          <Cell value={board[6]} onClick={() => handleClick(6, board, xIsNext)} />
          <Cell value={board[7]} onClick={() => handleClick(7, board, xIsNext)} />
          <Cell value={board[8]} onClick={() => handleClick(8, board, xIsNext)} />
        </div>
      </div>
    );
  }
}
