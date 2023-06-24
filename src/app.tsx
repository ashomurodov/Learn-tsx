import { Component } from "react";
import { Counters, Navbar } from "./components";

export interface ICount {
  id: number;
  value: number;
}

export interface AppState {
  counters: ICount[];
}

export enum TYPE {
  INCREMENT,
  DECREMENT,
  DELETE,
}

export default class App extends Component<{}, AppState> {
  state: AppState = {
    counters: [
      { id: 0, value: 5 },
      { id: 1, value: 10 },
      { id: 2, value: 0 },
      { id: 3, value: 5 },
    ],
  };

  handleAction = (actionType: TYPE, id: number) => {
    switch (actionType) {
      case TYPE.DELETE:
        this.setState(({ counters }) => ({
          counters: counters.filter((count) => count.id !== id),
        }));
        break;
      default: {
        const counters = [...this.state.counters];
        const count = counters[id];
        if (actionType === TYPE.DECREMENT && count.value <= 0) return;
        count.value += actionType === TYPE.DECREMENT ? -5 : 5;
        this.setState({ counters });
      }
    }
  };

  handleReset = () => {
    this.setState(({ counters }) => ({
      counters: counters.map((count) => ({ ...count, value: 0 })),
    }));
  };
  render() {
    const aboveZero = [...this.state.counters].filter((count) => count.value > 0);
    return (
      <div>
        <Navbar amout={aboveZero.length} />
        <Counters onAction={this.handleAction} onReset={this.handleReset} counters={this.state.counters} />
      </div>
    );
  }
}
