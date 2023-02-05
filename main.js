"use strict";
// console.log("Lesson-37");
const clg = console.log;
// // HM_0001 = [10,50,30], HM_0002 = [20,30,40]
// let a = [10, 20, 30]; // SM_a_001 = HM_0001
// let b = a; // SM_b_002 = HM_0001
// b[1] = 50; // HM_0001[1] = 50
// b = [20, 10, 40]; // SM_b_002 = HM_0002
// b[1] = 30; // HM_0002[1] = 30;

// console.log(a); // SM_a_001 -> [10,50,30]
// console.log(b); // SM_b_002 -> [20,30,40]

// let a = "pdp";
// let b = "g-8";
// let c = a + "-" + b;
// console.log(c);
// let a = [1, 2];
// let b = [3, 4];
// let c = a.concat(b);
// console.log(c);
// console.log(a);
// console.log(b);

// Primitive
// let str = "arslonbek alimbayev"; // SM_str_001 = 'arslonbek alimbayev'
// str = str.repeat(2);
// console.log(str);

// Reference
// const nums = [1, 2, 3, 4];
// console.log(nums);
// const removed = nums.pop(); // mutate
// const newLength = nums.push(20, 10, 10, 10); // mutate
// clg(`removed = ${removed}`);
// clg(`newLength = ${newLength}`);
// // nums.push(10, 20, 30); // mutate
// console.log(nums);

// // PUSH METHOD
// let nums = [10, 30];
// const newLength = nums.push(10, 20); // nums =  [10,30,10,20]
// clg(newLength);

// // POP METHOD
// let nums = [10, 30];
// const removedElement = nums.pop(); // 30 -> nums =  [10]
// clg(removedElement);
// clg(nums);

// SHIFT METHOD
// let nums = [10, 30];
// const removedElement = nums.shift(); // 10 -> nums =  [30]
// clg(removedElement);
// clg(nums);

// // UNSHIFT METHOD
// let nums = [10, 30];
// const newLength = nums.unshift(100, 200); // 4 -> nums =  [100,200,10,30]
// clg(newLength);
// clg(nums);

//  HOF
// function hi(fun) {
// 	const name = fun();
// 	clg(`Hi ${name}`);
// }

// function getUsername() {
// 	return "code2307";
// }

// function getName() {
// 	return "Arslonbek";
// }

// hi(getUsername);

// hi(getName);

// function summa(a, b, c, d) {
// 	return a + b + c + d;
// }

// const result = summa(10, 20, 30, 40);

// function summa(a) {
// 	return function (b) {
// 		return function (c) {
// 			return function (d) {
// 				return a + b + c + d;
// 			};
// 		};
// 	};
// }
// const result = summa(10)(20)(30)(40);
// clg(result);

// const nums = [10, 20, 30, 40];

// nums.unshift(100);

// clg(nums);

// function unshift(item) {
// 	for (let i = nums.length; i > 0; i--) {
// 		nums[i] = nums[i - 1];
// 	}

// 	nums[0] = item;
// }

// unshift(100);
// clg(nums);

// const names = ["arslonbek", "boburbek", "jamshidbek", "azizbek"];

// function hi(name) {
// 	clg(`Hi ${name} 👍🏻`);
// }
// function hello(name) {
// 	clg(`Hello ${name} 🤩`);
// }

// names.forEach(hi);
// names.forEach(hello);

// Map Method
// const nums = [1, 2, 3, 4, 5, 6];
// const powNums = nums.map(function (num) {
// 	return num ** 2;
// }); // [1,4,9,16,25,36]

// console.log(nums);
// console.log(powNums);

// Coding Challenge (Map)
const names = ["arslonbek-alimbayev", "odilbek-alimbayev", "Boburbek-Jamshidov"];

const _names = names.map(function (name) {
	return name.split("-").map(function (name) {
		return name.toLowerCase();
	});
});

clg(names);
clg(_names);
// const _names = [
// 	["arslonbek", "alimbayev"],
// 	["odilbek", "alimbayev"],
// 	["boburbek", "jamshidov"],
// ];
