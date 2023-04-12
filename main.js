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
