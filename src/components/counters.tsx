import { Component } from "react";
import Counter from "./counter";
import { ICount, TYPE } from "../app";

export interface CountersProps {
  counters: ICount[];
  onReset: any;
  onAction: (actionType: TYPE, id: number) => void;
}

export default class Counters extends Component<CountersProps> {
  render() {
    const { counters, onReset, onAction } = this.props;
    return (
      <div className="container mt-4 d-flex flex-column gap-2">
        <button onClick={onReset} className="btn btn-primary">
          Reset
        </button>
        {counters.map((count) => (
          <Counter onAction={onAction} count={count} />
        ))}
      </div>
    );
  }
}
