export class Counter {
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
    }
    decrement() {
        this.value--;
    }
}
