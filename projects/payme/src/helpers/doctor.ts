type Uniform = "GREEN" | "BLUE";

export class Person {
	constructor(public name: string, private money: number) {}

	run() {
		console.log(`${this.name} is running...`);
	}

	getMoney() {
		return this.money;
	}

	setMoney(newMoney: number) {
		this.money = newMoney;
	}
}

class Doctor extends Person {
	constructor(name: string, money: number, public uniform: Uniform) {
		super(name, money);
	}

	jump() {
		console.log(`${this.name} is jumping...`);
		console.log(`my money: ${this.getMoney()}`);
	}
}

const doctor = new Doctor("Kent", 2000, "BLUE");

doctor.run(); //
doctor.jump(); //
