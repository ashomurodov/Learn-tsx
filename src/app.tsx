import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

export interface ICount {
  id: number;
  value: number;
}

export interface AppProps {}
export interface AppState {
  counters: ICount[];
}

export enum TYPE {
  INCREMENT,
  DECREMENT,
  DELETE,
}

export default class App extends Component<AppProps, AppState> {
  state = {
    counters: [
      { id: 200, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 0 },
      { id: 4, value: 5 },
    ],
  };

  handleReset = () => {
    this.setState(({ counters }) => ({
      counters: counters.map((count) => ({ ...count, value: 0 })),
    }));
  };

  handleAction = (countID: number, actionType: TYPE) => {
    switch (actionType) {
      case TYPE.DELETE:
        this.setState((prev) => ({
          counters: prev.counters.filter((counter) => counter.id !== countID),
        }));
        break;
      default: {
        const counters = [...this.state.counters];
        const countIndex = counters.findIndex((count) => count.id === countID);
        const count = counters[countIndex];
        if (actionType === TYPE.DECREMENT && count.value <= 0) return;
        count.value += actionType === TYPE.DECREMENT ? -5 : 5;
        this.setState({ counters });
      }
    }
  };

  render() {
    const higherZero = [...this.state.counters].filter((count) => count.value > 0);
    return (
      <div>
        <NavBar amount={higherZero.length} />
        <Counters onReset={this.handleReset} onAction={this.handleAction} counters={this.state.counters} />
      </div>
    );
  }
}
