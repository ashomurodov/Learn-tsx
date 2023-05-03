class Car {
	name: string;
	price: number;

	constructor(name: string, price: number, color: string) {
		this.name = name;
		this.price = price;
	}

	move() {
		console.log(`${this.name} is moving...`);
	}
}

class Cobalt extends Car {
	color: string;
	constructor(name: string, price: number, color: string) {
		super(name, price, color);
		this.color = color;
	}

	lock() {
		console.log(`${this.name} was locked`);
	}
}
