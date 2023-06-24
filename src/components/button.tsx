import React, { Component } from "react";
import { CountersProps } from "./counters";
import { TYPE } from "../app";

interface ButtonProps extends Pick<CountersProps, "onAction"> {
  idx: number;
}

export default class Buttons extends Component<ButtonProps> {
  render() {
    const { onAction, idx } = this.props;
    return (
      <div className="button__container d-flex gap-3">
        <button onClick={() => onAction(TYPE.INCREMENT, idx)} className="btn btn-primary" type="submit">
          +
        </button>
        <button onClick={() => onAction(TYPE.DECREMENT, idx)} className="btn btn-primary" type="submit">
          -
        </button>
        <button onClick={() => onAction(TYPE.DELETE, idx)} className="btn btn-primary" type="submit">
          x
        </button>
      </div>
    );
  }
}
