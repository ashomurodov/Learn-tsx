"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const counter_1 = require("./counter");
const countElm = document.querySelector("#count");
const incrementBtn = document.querySelector("#increment_btn");
const decrementBtn = document.querySelector("#decrement_btn");
const counter = new counter_1.Counter(countElm);
incrementBtn.addEventListener("click", counter.increment.bind(counter));
decrementBtn.addEventListener("click", counter.decrement.bind(counter));
