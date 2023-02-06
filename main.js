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

let items = ["🍅", "🍄"];
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

let nums = [1, 2, 3];
nums.push(10);
clg(nums);
