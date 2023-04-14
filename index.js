"use strict";

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

// const book = new Book("Sherlock Holmes", 2000, "Conan Doyle", "23.03.23");
// console.log(book);
// // book.read();

// /** Constructor function */
// function BookFN(name, price, author) {
// 	this.name = name;
// 	this.price = price;
// 	this.author = author;
// 	this.read = function () {
// 		console.log(`${this.name} is reading Forsage book`);
// 	};
// }

// const bookFN = new BookFN("Sherlock Holmes", 2000, "Conan Doyle");
// console.log(bookFN);

// // book.read();

const str = new String("tic-tac-toe");
console.log(str);
// console.log(str.split("-"));

class MyString {
	constructor(value) {
		this.value = value;
	}

	split(splitter) {
		return this.value.split(splitter);
	}
}

const str1 = new MyString("tic-tac-toe");
console.log(str1);
// console.log(str1.split("-"));
