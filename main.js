"use strict";
/* 16.04.23(64) */

// book.read();
// function NewString(value) {
// 	this.value = value;
// }

// NewString.prototype.repeat = function (count) {
// 	let result = "";

// 	for (let i = 0; i < count; i++) {
// 		result += this.value;
// 	}

// 	return result;
// };

// const str1 = new String("First Word");
// console.log(str1);

// const str2 = new String("Second Word");
// console.log(str2);

// console.log(str1.repeat === str2.repeat);

// const str1 = new NewString("First Word");
// console.log(str1);

// const str2 = new NewString("Second Word");
// console.log(str2);

// console.log(str1.repeat === str2.repeat);

/** Class */
// class Book {
// 	createdDate = "24.04.24";

// 	constructor(name, price, author, createdDate) {
// 		this.name = name;
// 		this.price = price;
// 		this.author = author;
// 		if (createdDate) this.createdDate = createdDate;
// 	}

// 	read() {
// 		console.log(`${this.name} is reading Forsage book`);
// 	}
// }

// const book = new Book("Sherlock Holmes", 2000, "Conan Doyle");
// console.log(book);
// book.read();

// /** Constructor function */
// function BookFN(name, price, author) {
// 	this.name = name;
// 	this.price = price;
// 	this.author = author;
// }

// BookFN.prototype.read = function () {
// 	console.log(`${this.name} is reading Forsage book`);
// };
// const bookFN = new BookFN("Sherlock Holmes", 2000, "Conan Doyle");
// console.log(bookFN);
// bookFN.read();

// class User {
// 	get data() {
// 		return `${this.firstName} ${this.lastName} ${this.salary}`;
// 	}

// 	set data(value) {
// 		const [firstName, lastName, salary] = value.split(" ");
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.salary = +salary;
// 	}

// 	showData() {
// 		console.log("firstName: " + this.firstName);
// 		console.log("lastName: " + this.lastName);
// 		console.log("salary: " + this.salary);
// 	}
// }

// function getUsers(counter) {
// 	const users = [];

// 	for (let i = 0; i < counter; i++) {
// 		const user = new User();
// 		user.data = `Name-${i + 1} Last-${i + 1} ${1000 * (i + 1)}`;
// 		users.push(user);
// 	}

// 	return users;
// }

// const users = getUsers(5);
// users[0].firstName = "Boburbek";
// users[0].salary = 4000;
// console.log(users[0].data);

// const person = {
// 	firstName: "Boburbek",
// 	lastName: "boburov",
// 	get fullName() {
// 		return this.firstName + " " + this.lastName;
// 	},
// };

// console.log(person.fullName);
