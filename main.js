"use strict";
// const clg = console.log;
// function forEach(fun) {
// 	for (let i = 0; i < fruits.length; i++) {
// 		fun(fruits[i], i);
// 	}
// }

// forEach(function (fruit, index) {
// 	console.log(`I am eating:  ${fruit}`);
// });

// const fruits = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

// function map(callback) {
// 	let result = [];
// 	for (let i = 0; i < fruits.length; i++) {
// 		result[i] = callback(fruits[i]);
// 	}

// 	return result;
// }

// const result1 = map(function (fruit) {
// 	return `${fruit}+${fruit}`;
// });
// clg(result1);

// const result2 = map(function (fruit) {
// 	return fruit.repeat(2);
// });
// clg(result2);

// const result3 = map(function (fruit) {
// 	return fruit.repeat(3);
// });
// clg(result3);

// const list = ["arslonbek 25", "boburbek 14", "jamshidbek 66"];

// const newList = list.map(function (item) {
// 	let temp = item.split(" "); // ['arslonbek','25']
// 	let reversed = temp.reverse(); // ['25','arslonbek']
// 	let result = reversed.join(" "); // '25 arslonbek'
// 	return result;
// });

// clg(newList);

// const groups = [
// 	["g", "8"],
// 	["d", "10"],
// 	["g", "11"],
// ];

// const newGroups = groups.map(function (item) {
// 	return item.join("-");
// });

// clg(newGroups);

// const fruits = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

// function convertor(fruit) {
// 	return `<div>${fruit}</div>`;
// }

// let result = fruits.map(convertor);

// clg(result);

// const items = [
// 	'<li>🍅</li>'
// 	'<li>🍄</li>'
// 	'<li>🥦</li>'
// 	'<li>🥒</li>'
// 	'<li>🌽</li>'
// 	'<li>🥕</li>'
// 	'<li>🥑</li>'
// ]

// let items = ["🍅", "🍄"];
// function map(fun) {
// 	let items = ["🍅", "🍄"];
// 	let result = [];

// 	for (let item of items) {
// 		const value = fun(item); // 10
// 		result.push(value);
// 	}

// 	return result;
// }

// function two(item) {
// 	return `${item}${item}`;
// }

// const list = items.map(two);
// clg(list);

// let nums = [1, 2, 3, 4, 5];

// function filter(fun) {
// 	let result = [];

// 	for (let i = 0; i < nums.length; i++) {
// 		if (fun(nums[i])) result.push(nums[i]);
// 	}

// 	return result;
// }

// let newNums = filter(function (num) {
// 	return num % 2 === 1;
// });

// clg(newNums);

// let nums = ["c", "d", "e", "f", "a", "b"];

// nums.sort();
// clg(nums);

// let nums = [1, 2, 3];
// nums.push(10);
// clg(nums);

/*----------- 08.02.23(39)--------- */
// console.log("Lesson-39");

// function app(nums) {
// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] % 2 === 0) continue;
//  	}
// 	console.log("I AM APP FUNCTION");
// }

// app([1, 2, 3, 4, 5]);

// function show(nums = [], points = []) {
// 	for (let i = 0; i < nums.length; i++) {
// 		const num = nums[i];
// 		let isDiv = false;

// 		for (let j = 0; j < points.length; j++) {
// 			isDiv = num % points[j] === 0;
// 			if (isDiv) break;
// 		}
// 		if (isDiv) continue;
// 		console.log(num);
// 	}
// }

// show([10, 11, 20, 25, 35, 45, 13, 44, 55], [3, 5, 11]);

// DEFAULT VALUE
// function sum(a, b, c = 20) {
// 	return a + b + c;
// }

// const result = sum(10, 20, null);
// console.log(`result = ${result}`);
// console.log(+null);

// const nums = [1, 2, 3];

// function app() {
// 	nums.forEach(function (num) {
// 		console.log("num = ", num);
// 		return;
// 		console.log("hello");
// 	});

// 	// for (let i = 0; i < nums.length; i++) {
// 	// 	console.log("num = ", nums[i]);
// 	// 	return;
// 	// }
// }

// app();

// let count = 0;
// const nums = new Array(100);

// function fill(value, startIdx = 0, lastIdx = nums.length) {
// 	for (let i = startIdx; i < lastIdx; i++) {
// 		nums[i] = value;
// 	}
// }

// fill(20, 30, 50);
// console.log(nums);

// const items = [1, 2, 3, 4, 25];

// const result = items.find(function (item) {
// 	if (item % 5 === 0) return true;
// 	return false;
// });

// console.log(result);

// const items = [20, 10, 40, 23, 40, 66, 60, 200];
// const _items = items.filter(function (item) {
// 	return item % 10 === 0;
// });
// // const _items = items.filter((item) => item % 10 === 0);

// console.log(_items);

// const items = [1, 2, 3, 25, 50, 4, 25];

// const result = items.findIndex(function (item) {
// 	return item % 25 === 0;
// });

// console.log(result);

// const items = [1, 2, 3, 5, 6, 7, 2, 3, 5, 3, 2, 3];
// const result = items.filter(function (item, idx) {
// 	return items[idx + 1] === 2 && items[idx + 2] === 3;
// });

// console.log(result);

/*----------- 10.02.23(40)--------- */
console.log("Lesson-40");

// Spread Operator
// function sum(a, b, c) {
// 	return a + b + c;
// }
// const nums = [10, 20, 30, 20, 50, 60];
// const result = sum(nums[0], nums[1], nums[2]);
// const result = sum(...nums);
// console.log(result);

// let a = [10, 20, 30];
// let b = [60, 50, 40];
// let c = [...a, ...b];

// console.log(c);

// const result = nums.reduce((a, c) => {
// 	console.log("a = ", a);
// 	console.log("c = ", c);
// 	return a + c;
// });
// console.log(result);

// const nums = [10, 20, 30, 10, 22, 322, 1, 321];
// function reduce(fn) {
// 	let acc = nums[0];
// 	for (let i = 1; i < nums.length; i++) {
// 		let cur = nums[i];
// 		acc = fn(acc, cur);
// 	}

// 	return acc;
// }
// console.log(reduce((a, c) => `${a} + ${c}`));

// const nums = Array(10); // [empty x 10]
// console.log(nums);
// console.log(nums.length);

// nums.map(function (item) {
// 	console.log("item = ", item);
// });

// const nums = [];
// nums[100] = "arslonbek";
// console.log(nums[55]);
