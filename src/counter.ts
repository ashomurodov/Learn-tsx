export class Counter {
	value = 0;
	constructor(public displayElement: HTMLSpanElement) {}

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
