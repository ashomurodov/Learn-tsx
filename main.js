"use strict";
/* 10.04.23(61) */

/* ----Expression vs Statement-----  */
// let age = 10 + 10;
// let access = age > 18 ? "ruxsat" : "ruxsat yoq";

// if (age > 18) {
// 	console.log("ruxsat");
// } else {
// 	console.log("ruxsat yoq");
// }

// const x = 20;
// const y = function () {};

// function app(a, b) {
// 	return a + b;
// }

// console.log(20, function () {});

/* OOP(Object Oriented Programming) */

/** Object  && call & bind & apply function methods*/
// const box = {
// 	name: "Boxjon",
// 	color: "black",
// 	run(prefix = "None", ...args) {
// 		console.log("args = ", args);
// 		console.log(`${prefix} : ${this.name} is running...🏃‍♀️`);
// 	},
// };

// const fruit = {
// 	name: "Banana",
// 	color: "black",
// };
// const car = {
// 	name: "BMW i8",
// 	color: "black",
// };

/* CALL method of function */
// box.run();
// // box.run.call(fruit);
// // run.call(fruit);

/* BIND method of function */

/** bind version */
// const runFruit = box.run.bind(fruit);
// runFruit();

// const runCar = box.run.bind(car);
// runCar();

/** call version */
// box.run.call(fruit);
// box.run.call(car);

/** Sending parameters Call */
// box.run();
// box.run("Data");
// box.run.call(fruit, "Fruit Data", "test data", 1, 2, 3, "arslonbek", false);

/** Sending parameters Bind */
// const boxRun = box.run.bind(box);
// boxRun("Box Data");
// const fruitRun = box.run.bind(fruit);
// fruitRun("Fruit Data");
// const carRun = box.run.bind(car);
// carRun("Car Data");

/** Sending parameters Apply */
// box.run.apply(fruit, ["Fruit Data", "Fruit Data", "Fruit Data"]);

/** Factory functions */

// let counter = 1;

// function createUser(name, phone, job) {
// 	return {
// 		id: counter++,
// 		name,
// 		phone,
// 		job,
// 	};
// }

// const user = {
// 	id: 1,
// 	name: "Kent",
// 	phone: "+12323231231",
// 	job: "Teacher",
// };
// const user2 = {
// 	id: 2,
// 	name: "Mark",
// 	phone: "+12323231231",
// 	job: "Developer",
// };

// // const user = createUser("Kent", "+12323231231", "Teacher");
// // const user2 = createUser("Mark", "+12323231231", "Developer");

// console.log(user);
// console.log(user2);

/* 12.04.23(62) */

/** Factory Function */
function createBox(name, color, price) {
	return {
		name,
		color,
		price,
		jump() {
			console.log(`${this.name} is jumping...`);
		},
		randomPrice(limit = 100) {
			this.price = Math.floor(Math.random() * limit);
		},
	};
}

// const box1 = createBox("Box-1", "Black", 10);

// console.log("box1 = ", box1.__proto__);

// function Box(name, color, price) {
// 	this.name = name;
// 	this.color = color;
// 	this.price = price;
// 	this.jump = function () {
// 		console.log(`${this.name} is jumping...`);
// 	};
// 	this.showData = function () {
// 		console.log("name = ", this.name);
// 		console.log("color = ", this.color);
// 		console.log("price = ", this.price);
// 	};
// }

// const box = new Box("Best Box", "Blue", 2000);
// console.log(box);

// box.jump();
// box.showData();

// function String1(value) {
// 	this.value = value;
// 	this.repeat = function (count) {
// 		let result = "";
// 		for (let i = 0; i < count; i++) {
// 			result += this.value;
// 		}

// 		return result;
// 	};
// }

// const str = new String("hello world");
// console.log(str);

// const str1 = new String1("Arslonbek ");
// console.log(str1);

// function Watch() {
// 	this.time = 0;

// 	this.increment = function () {
// 		this.time += 1;
// 	};

// 	this.start = function () {
// 		console.log("Watch started");

// 		setInterval(this.increment.bind(this), 1000);
// 	};

// 	this.log = function () {
// 		console.log(`Watch(${this.name}) time : ${this.time}`);
// 	};
// }

// const watch = new Watch("Rolex");
// watch.start();

// setTimeout(() => {
// 	watch.log();
// }, 3000);
// setTimeout(() => {
// 	watch.log();
// }, 6000);
// setTimeout(() => {
// 	watch.log();
// }, 9000);
// setTimeout(() => {
// 	watch.log();
// }, 12000);

// create Watch constructor function
// watch.start() -> watch start
// watch.stop() -> watch stop ||

// { start, stop, started: false }

// function Watch() {
// 	this.started = false;
// 	this.stop = function () {
// 		if (!this.started) {
// 			console.error("Already stopped");
// 		} else {
// 			this.started = false;
// 			console.log("Stopped");
// 		}
// 	};
// 	this.start = function () {
// 		if (this.started) {
// 			console.error("Already started");
// 		} else {
// 			this.started = true;
// 			console.log("Started");
// 		}
// 	};
// }

// const watch = new Watch();
// watch.start(); // started
// watch.start(); // error
// watch.stop(); // stopped
// watch.start(); // started
// watch.stop(); // stopped
// watch.stop(); // error

// function Box() {this.name = "Box";} // new Function
// let a = 20; // new Number(20)
// let b = "ars" // new String('ars')

// function Box(name) {
// 	this.name = name;
// 	let money = 2000;

// 	this.getMoney = function () {
// 		return money;
// 	};

// 	this.onPaid = function (amount) {
// 		money += amount;
// 	};
// }

// const box = new Box();

// console.log(box.getMoney());
// box.onPaid(3000);
// console.log(box.getMoney());

const person = {
	firstName: "Arslonbek",
	lastName: "Alimbaev",
	salary: 1000,
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
	set fullName(value) {
		const [firstName, lastName] = value.split(" ");
		this.firstName = firstName;
		this.lastName = lastName;
	},
};

// console.log(person.fullName);
// person.fullName = "Boburbek Muradov";
// console.log(person.fullName);

const element = {
	classes: ["btn", "btn-danger", "btn-primary"],
	get className() {
		return this.classes.join(" ");
	},
	set className(value) {
		this.classes = value.split(" ");
	},
};

console.log(element.className); // "btn btn-danger btn-primary"
console.log(element.classes); // ["btn", "btn-danger", "btn-primary"]

element.className = `${element.className} btn-success btn-warning`;

console.log(element.className); // "btn btn-danger btn-primary btn-success"
console.log(element.classes); // ["btn", "btn-danger", "btn-primary", "btn-success"]
