type FruitType = "QURUQ" | "SUVLI";
type LaptopType = "Apple" | "Microsoft" | "Dell" | "Acer";

class Base {
	constructor(private name: string, public createdDate: string, public price: number) {}

	getName() {
		return this.name;
	}
}

class Laptop extends Base {
	constructor(name: string, createdDate: string, price: number, public type: LaptopType) {
		super(name, createdDate, price);
	}

	powerOn() {
		console.log(`${this.getName()}[${this.type}] is turning on`);
	}
}

class Fruit extends Base {
	constructor(name: string, createdDate: string, price: number, public type: FruitType, public ram: number) {
		super(name, createdDate, price);
	}
}
