import { Component } from "react";
import { Counter } from ".";
import { ICount, TYPE } from "../app";

interface CounterProps {
  counters: ICount[];
  onAction: (countID: number, actionType: TYPE) => void;
  onReset: () => void;
}

export default class Counters extends Component<CounterProps> {
  render() {
    const { counters } = this.props;
    return (
      <main className="container">
        <button className="my-2 btn btn-primary" onClick={this.props.onReset}>
          Reset
        </button>
        {counters.map((count, idx) => (
          <Counter key={idx} count={count} onAction={this.props.onAction} />
        ))}
      </main>
    );
  }
}
