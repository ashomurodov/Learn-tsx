import { Component } from "react";
import cls from "./cell.module.css";

export default class Cell extends Component {
  render() {
    return <button className={cls.btn}></button>;
  }
}
