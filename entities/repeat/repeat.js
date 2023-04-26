"use strict";

const methods = {
	ask(question) {
		console.log(`[${this.course}][${this.teacher}] : ${question}`);
	},
};

/* Factory function */
function createCourse(course, teacher) {
	return Object.setPrototypeOf({ course, teacher }, methods);
}

// const course1 = createCourse("React JS", "Kent");
// console.log(course1);
// course1.ask("What is React JS?");
// const course2 = createCourse("Angular JS", "Mark");
// course2.ask("What is Angular JS?");

/* Constructor function */
// function Course(course, teacher) {
// 	this.course = course;
// 	this.teacher = teacher;
// }

// Course.prototype.ask = function (question) {
// 	console.log(`[${this.course}][${this.teacher}] : ${question}`);
// };

// const course = new Course("React JS", "Kent");
/* Prototype chaining */
// console.log(course.__proto__ === Course.prototype);
// console.log(course.__proto__.__proto__ === Object.prototype);
// console.log(Function.__proto__ === Function.prototype);
// console.log(Course.__proto__ === Function.prototype);

// console.log(course.prototype.__proto__ === Object.prototype);

/* instanceof */
function Course(course, teacher) {
	this.course = course;
	this.teacher = teacher;
}

Course.prototype.ask = function (question) {
	console.log(`[${this.course}][${this.teacher}] : ${question}`);
};

const course = new Course("React JS", "Kent");

// console.log(course instanceof Course);
// console.log(course.__proto__ === Course.prototype);

// const person = { age: 20 };
// console.log("firstName" in person);

// const str1 = "hello world"; // new String()
// const str2 = new String("hello world");

// const list = []; // new Array()
// console.log(list instanceof Array);
// console.log(list.__proto__ === Array.prototype);

// console.log(list instanceof Object);
// console.log(list.__proto__.__proto__ === Object.prototype);

// const num = 20 // new Number(20).valueOf();
// console.log(num instanceof Number);
