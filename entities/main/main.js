"use strict";
// function Box(name) {
// 	this.name = name;
// 	const run = () => {
// 		console.log(`${this?.name} is running`);
// 	};

// 	this.jump = function () {
// 		console.log(`${this?.name} is jumping...`);
// 		run();
// 	};
// }

// const box = new Box("Black Box");

// const jump = box.jump;
// jump.call({ name: "boburbek" });

// const person = {
// 	name: "Kent",
// 	age: 20,
// 	salary: 400,
// 	run: () => {
// 		console.log(this);
// 	},
// };

// person.run();

/** Prototype */
// function Fruit(name, price) {
// 	this.name = name;
// 	this.price = price;
// }

// Fruit.prototype.cut = function () {
// 	console.log(`${this.name} is cut by knife...`);
// 	Fruit.prototype.count = (Fruit.prototype.count || 0) + 1;
// };

// const fruit1 = new Fruit("Banana", 4000);
// console.log(fruit1);
// fruit1.cut();

// const fruit2 = new Fruit("Apple", 4000);
// console.log(fruit2);
// fruit2.cut();

// const fruit3 = new Fruit("Kiwi", 4000);
// console.log(fruit3);
// fruit3.cut();

// function Person(name, step) {
// 	this.name = name;
// 	this.step = step;
// 	this.distance = 0;
// }

// Person.prototype.walk = function (delay) {
// 	setTimeout(() => {
// 		this.intervalID = setInterval(() => {
// 			this.distance += this.step;
// 			console.log(`[${this.name}] distance: ${this.distance}`);
// 		}, 1000);
// 	}, delay);
// };

// Person.prototype.stop = function (delay) {
// 	setTimeout(() => {
// 		console.log(`[TIMED][${this.name}] distance:  `, this.distance);
// 		clearInterval(this.intervalID);
// 	}, delay);
// };

// const names = ["KENT", "MARK", "JOHN"];

// const kent = new Person("KENT", 1);
// kent.walk(0);
// kent.stop(3000);

// const mark = new Person("MARK", 1);
// mark.walk(3000);
// mark.stop(6000);

// const john = new Person("JOHN", 1);
// john.walk(6000);
// john.stop(9000);

// let counter = 0;
// function increment() {
// 	console.log(`counter = ${++counter}`);
// }
// function init() {
// 	setInterval(increment, 1000);
// }

const fn = () => console.log("hello world");
function init() {
	setTimeout(fn, 0);
	for (let i = 1; i <= 100; i++) {
		console.log(`i = ${i}`);
	}
}

init();
