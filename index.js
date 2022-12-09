/**
 * Data types
 */

// Boolean
let isBig = true; // boolean

// // String
// let text = "hello world"; // string

// // Number
// let num = -20.5; // number

// // Function
// function sum(a, b) {
// 	console.log(a + b);
// }

// sum(10, 20);
// sum(30, 20);

// function hello(firstName = "Jamshidbek", lastName = "Avezov") {
// 	console.log("Hello " + firstName + " " + lastName);
// }

// hello("Arslonbek", "Alimbaev");

// function myFizzBuzz(num) {
// 	let result = "";

// 	if (num % 5 === 0) result = result + "Fizz";
// 	if (num % 3 === 0) result = result + "Buzz";
// 	return result;
// }

// let temp = myFizzBuzz(5); // "Fizz"
// console.log(temp);
// /**
//  * num = 5 -> "Fizz"
//  */
// let temp1 = myFizzBuzz(3); // "Buzz"
// console.log(temp1);

// /**
//  * num = 3 -> "Buzz"
//  */
// let temp3 = myFizzBuzz(15); // "FizzBuzz"
// console.log(temp3);
// /**
//  * num = 15 -> ""
//  */

// function message(name) {
// 	let text = "Hello " + name; // "Hello Arslonbek"
// 	console.log(text);
// 	return true;
// }

// let result = message("Arslonbek");
// console.log(result);

// function sum(a, b, c) {
// 	const summa = a + b + c; // 60
// 	console.log(summa);
// 	return summa;
// }

// let result = sum(10, 20, 30);

// let a = sum(10, 1, 1);

// console.log(a);

let result = sum(10, 20); // 10
console.log(result);

function sum(a, b) {
	if (a % 2 === 0) return a;
	if (b % 2 !== 0) return b;
	return a + b;
}
