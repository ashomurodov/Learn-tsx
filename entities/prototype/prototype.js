"use strict";

// function Box(name) {
// 	this.name = name;
// }

// Box.prototype.run = function () {
// 	console.log(`${this?.name} is running...`);
// };
// Box.prototype.jump = function () {
// 	console.log(`${this?.name} is jumping...`);
// };
// Box.prototype.eat = function () {
// 	console.log(`${this?.name} is eating...`);
// };

// for (let i = 1; i <= 10; i++) {
// 	const box = new Box(`Black Box-${i}`);
// 	box.run();
// 	box.eat();
// 	// console.log(box);
// }

// const str = new String("PDP Best");
// console.log(str.__proto__ === String.prototype);

// const list = new Array(10);
// console.log(list);

/* Prototype and __Proto__ */
// function Box(name) {
// 	this.name = name;
// } // new Function

// Box.prototype.run = function () {
// 	console.log(`${this?.name} is running...`);
// };

// const myBox = new Box();

// // console.log(myBox);
// // console.log(myBox.__proto__ === Box.prototype);
// // console.log(myBox.__proto__.__proto__);

// console.log(Function.__proto__ === Function.prototype);

// function run() {
// 	console.log(`✅ ${this.name} is running...`);
// }

// function Foo(name) {
// 	this.name = name;
// }

// Foo.prototype.run = run;

/* Class */

