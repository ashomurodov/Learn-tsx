import { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Counters />
      </div>
    );
  }
}
