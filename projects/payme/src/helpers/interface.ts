export interface IPerson {
	name: string;
	age: number;
	run: () => string;
}

class Person implements IPerson {
	constructor(public name: string, public age: number) {}
	run() {
		return "";
	}
}

const my: Person = new Person("arslonbek", 20);
