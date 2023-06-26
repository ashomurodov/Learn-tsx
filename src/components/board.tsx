import React, { Component } from "react";
import Cell from "./cell";
import cls from "./board.module.css";

export interface BoardProps {
  board: any[];
}

export default class Board extends Component<BoardProps> {
  render() {
    const { board } = this.props;
    return (
      <div>
        <span className="status">Next Player: X</span>
        <div className={cls.board}>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    );
  }
}
