"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
class Counter {
    displayElement;
    value = 0;
    constructor(displayElement) {
        this.displayElement = displayElement;
    }
    display() {
        this.displayElement.innerText = this.value.toString();
    }
    increment() {
        this.value++;
        this.display();
    }
    decrement() {
        this.value--;
        this.display();
    }
}
exports.Counter = Counter;
