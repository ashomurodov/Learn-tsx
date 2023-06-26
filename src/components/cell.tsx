import { Component } from "react";
import cls from "./cell.module.css";

export interface CellProps {
  value: any;
  onClick: any;
}

export default class Cell extends Component<CellProps> {
  render() {
    const { value, onClick } = this.props;
    return (
      <button onClick={onClick} className={cls.btn}>
        {value}
      </button>
    );
  }
}
