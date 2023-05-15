import { Counter } from "./counter";
const countElm: HTMLSpanElement = document.querySelector("#count")!;
const incrementBtn: HTMLButtonElement = document.querySelector("#increment_btn")!;
const decrementBtn: HTMLButtonElement = document.querySelector("#decrement_btn")!;

const counter = new Counter(countElm);

incrementBtn.addEventListener("click", counter.increment.bind(counter));
decrementBtn.addEventListener("click", counter.decrement.bind(counter));
