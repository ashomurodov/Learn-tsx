"use strict";

// const person = {
// 	name: "Arslonbek",
// 	"my-job": "Teacher",
// 	age: 21,
// };

// const input = "job";
// const prefix = "my";
// console.log(person[`my-job`]);
// console.log(person.age);

// function sum(a,b, ...rest){
//  return a+b+rest.reduce((a,b)=>a+b,0);
// }

// let nums=[1,2,3,4,5,6,7,8,9];
// console.log(sum(...nums));

// let nums=[1,2,3,4,5,6,7,8,9,10];

// let num1 = nums[0];
// let num2 = nums[1];
// console.log(num1,num2);

// let [a,b,c, ...others] = nums;
// console.log(a,b,c,others);

// let revenue = {
// 	Google: "$282 billion",
// 	Amazon: "$470 billion",
// 	Microsoft: "$168 billion",
// 	Facebook: "$116.6 billion",
// 	Apple: "$482 billion",
// 	IBM: "$370 billion",
// 	Telegram: "$198 billion",
// 	Oracle: "$96.6 billion",
// };

// let { Google, Amazon, Apple, ...others } = revenue;
// console.log(Google, Amazon, Apple, others);

// destructuring || rest parameters || spread operation 👍🏻

// const person = {
// 	name: "arslonbek",
// 	age: 22,
// 	job: "teacher",
// 	job: "developer",
// };

// console.log(person);

// const cat = {
// 	lags: 4,
// 	head: 1,
// 	sound: "Meow",
// };

// const dog = {
// 	...cat,
// 	sound: "WooW",
// };
// console.log(cat);
// console.log(dog);

// const a = [10, 20, 30];
// const b = [...a];
// b[1] = 50;
// console.log(a);
// console.log(b);

// const a = { name: "dog", age: 12 };
// const b = { ...a };
// b["name"] = "cat";
// b["age"] = "cat";
// console.log(a);
// console.log(b);

// const cat = {
// 	lags: 4,
// 	head: 1,
// 	sound1: "Meow",
// };

// const dog = { ...cat, sound: "WooW" };
// console.log(cat);
// console.log(dog);

// function summa() {
// 	let list = [...arguments];

// 	return list.slice(-2).reduce((a, c) => a + c);
// }
// function summa(a, b, c, ...any) {
// 	console.log(any);
// 	return any.reduce((a, c) => a + c);
// }

// const nums = [10, 20, 30, 10, 20, 100, 100, 100];
// // const result = summa(...nums);
// const result = summa(...nums);
// console.log(result);

// const cat = {
// 	lags: 4,
// 	head: 1,
// 	sound1: "Meow",
// };

// const dog = { ...cat, sound: "WooW" };
// console.log(cat);
// console.log(dog);

const nums = [10, 20, 30, 40];

// const num0 = nums[0];
// const num1 = nums[1];
const [num0, num1, num2, num3] = nums;

console.log("num0 = ", num0);
console.log("num1 = ", num1);
