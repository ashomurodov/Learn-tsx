import React, { Component } from "react";
import Buttons from "./button";
import { ICount } from "../app";
import { CountersProps } from "./counters";

interface CounterProps extends Pick<CountersProps, "onAction"> {
  count: ICount;
}

export default class Counter extends Component<CounterProps> {
  getBadgeClassName() {
    const { count } = this.props;
    return `badge bg-${count.value <= 0 ? "danger" : "secondary"}`;
  }
  render() {
    const { count, onAction } = this.props;
    return (
      <div className="counter d-flex align-items-center gap-3">
        <span className={this.getBadgeClassName()}>{count.value ? count.value : "zero"}</span>
        <Buttons idx={count.id} onAction={onAction} />
      </div>
    );
  }
}
