"use strict";
/*----------- 24.02.23(45)--------- */
// console.log("Lesson-45");

/** Primitive type vs Reference type */
/**
 * Primitive types :
 * String: "arslonbek"
 * Boolean: true
 * Number : 20
 * Null: null
 * Undefined: undefined
 */

// // HM_0001 = {value: 10}
// let number = { value: 11 }; // SM_number_001 = HM_0001

// function increment(num) {
// 	// SM_num_002 = HM_0001
// 	num.value++; // HM_0001.value++ -> SM_num_002 = 11
// 	console.log("num = ", num); // HM_0001 -> {value: 11}
// }

// increment(number); // HM_0001
// console.log("number = ", number); //HM_0001 ->  {value: 11}

/** Function && Object */

// const person = {
// 	name: "Kent",
// 	age: 35,
// 	run() {
// 		console.log("this = ", this);
// 		console.log(`${this.name} is running...`);
// 	},
// };

/**
	* HM_0001 =  {
				name: "Kent",
				age: 35,
				run: HM_0002,
			}

			HM_0002 = function () {
					console.log("this = ", this);
					console.log(`${this.name} is running...`);
				}
*/
// SM_person_001 = HM_0001

// person.run(); // HM_0001.HM_0002()

// const fun = person.run; // SM_fun_002 = HM_0002

// fun(); // HM_0002()

// console.log(this);

/** Call method */
// function showData() {
// 	console.log(`${this.name} (${this.currentYear} - ${this.birthYear}): ${calcAge.call(this)}`);
// }

// function calcAge() {
// 	return this.currentYear - this.birthYear;
// }

// const person = {
// 	name: "Kent",
// 	birthYear: 1990,
// 	currentYear: 2023,
// };
// const person1 = {
// 	name: "Mark",
// 	birthYear: 1990,
// 	currentYear: 2030,
// };

// // "Kent age(2023-1990) = 33

// showData.call(person);
// showData.call(person1);

/** Factory function */
// function createBox(name, color) {
// 	return {
// 		name,
// 		color,
// 		eat() {
// 			console.log(`${this.name} is eating...`);
// 		},
// 		run() {
// 			console.log(`${this.name} is running...`);
// 		},
// 	};
// }

// const box1 = createBox("Box-1", "Red");

// console.log(box1);
// box1.eat();
// box1.run();

/** Lazy person */
// const name = "arslonbek";
// const age = 35;
// const job = "teacher";

// const person = { name, age, job };

// console.log(person);

// camel case -> createBox
// pascal case -> CreateBox

/** Constructor function */
// function Box() {}

// const box = new Box("Box-1");
// console.log(box);

// const age = new Number(35); // new Number(35)
// console.log(age.valueOf()); // age.valueOf()

// const myAge = 40; // new Number(40)
// console.log(myAge); // myAge.valueOf()
