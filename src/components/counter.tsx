import React from "react";
import { ICount, TYPE } from "../app";

interface CounterProps {
  count: ICount;
  onAction: (countID: number, actionType: TYPE) => void;
}

export default class Counter extends React.Component<CounterProps, {}> {
  getBadgeClassName() {
    const { count } = this.props;
    return `badge bg-${count.value <= 0 ? "danger" : "secondary"}`;
  }

  render() {
    const { count } = this.props;

    return (
      <div className="mt-2">
        <span className={this.getBadgeClassName()}>{count.value > 0 ? count.value : "Zero"}</span>
        <button
          onClick={() => this.props.onAction(count.id, TYPE.DECREMENT)}
          children="-"
          className="btn btn-primary ms-2"
        />
        <button
          onClick={() => this.props.onAction(count.id, TYPE.INCREMENT)}
          children="+"
          className="btn btn-primary ms-2"
        />
        <button
          onClick={() => this.props.onAction(count.id, TYPE.DELETE)}
          children="❌"
          className="btn btn-primary ms-2"
        />
      </div>
    );
  }
}
