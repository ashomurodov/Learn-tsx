// class Person {
// 	constructor(name) {
// 		this.name = name;
// 	}

// 	run() {
// 		console.log(`PERSON: ${this.name} is running...`);
// 	}
// }

// class Doctor extends Person {
// 	run() {
// 		console.log(`DOCTOR: ${this.name} is runing...`);
// 	}
// }

// const user = new Doctor("Arslonbek");
// user.run();

// const person = {};

// const obj = {}; // new Object

// const a = [1, 2, 3, 4];
// const b = [...a]; // simple clone

// const a = [
// 	[1, 2],
// 	[3, 4],
// ];
// const b = [...a[0]];
// const c = [...a[1]];

// const person = Object.create();

// 1 / 12 / 13 / 20;

const person = {
	name: "Arslonbek",
};

function run() {
	console.log(`${this.name} is running...`);
}

run.call(person); // Arslonbek is running...
