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
// console.log("Lesson-40");

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

// /*----------- 12.02.23(41)--------- */
// console.log("Lesson-41");
// console.log(Math.max());

// let input = [10, 20, 30];

/** ARRAY "AT" METHOD */
// const output = input.at();
// console.log(output);

/** ARRAY "REDUCE" METHOD */

// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function reduce(fn, init) {
// 	let accumulator = init || input[0];

// 	for (let i = init ? 0 : 1; i < input.length; i++) {
// 		const current = input[i];
// 		accumulator = fn(accumulator, current);
// 	}

// 	return accumulator;
// }

// function summa(a, c) {
// 	return a + c;
// }
// const output = input.reduce(summa, 10);
// console.log(output);

// /** ARRAY "MAP" METHOD */
// const input = [10, 4, 6, 3, 7];
// /**
//  * powTwo: output = [20, 8, 12, 6, 14]
//  * powThree: output = [30, 12, 18, 9, 21]
//  * addPrefix: output = ['pdp-g-10','pdp-g-4','pdp-g-6', 'pdp-g-3','pdp-g-7']
//  * addSuffix: output = ['10-group', '4-group', '6-group', '3-group','7-group']
//  * addSuffix: output = ['100-group', '41-group', '62-group', '33-group','74-group']
//  */

// const powTwo = (item) => 2 * item;
// const powThree = (item) => 3 * item;
// const addPrefix = (item) => `pdp-g-${item}`;
// const addSuffix = (item) => `${item}-group`;
// const addSuffixIdx = (item, idx) => `${item}${idx}-group`;

// const output = input.map(addSuffixIdx);
// console.log(output);

// /** ARRAY "FILTER" METHOD */
// const input = [10, 4, 6, 3, 7];
// const _input = ["pdp", "google", "amazon", "arslonbek", "PaP-apple", "amazon-pdp"];
// /**
//  * getOdd: output = [3,7]
//  * big20: output = []
//  * small20: output = [10, 4, 6, 3, 7]
//  * smallAB -> (5,10): output = [10, 6, 7]
//  * _getPdpWord : _output = ['pdp','pap-apple', 'pdp-amazon']
//  */

// const getOdd = (item) => item % 2 === 1;
// const big20 = (item) => item > 20;
// const small20 = (item) => item < 20;
// const smallAB = (item) => item >= 5 && item <= 10;
// const _getPdpWord = (item) => item.search(/p[a-z]p/i) !== -1;

// const output = input.filter(smallAB);
// console.log(output);
// const _output = _input.filter(_getPdpWord);
// console.log(_output);

/** Eval function */
// console.log(eval("2**7"));

/** ARRAY "REDUCE" METHOD */
// const input = [10, 4, 6, 3, 7];
// /**
//  * sum: output = 30
//  * join: output = '10+4+6+3+7=30'
//  * prefix: output = ['pdp-g-10','pdp-g-4',"pdp-g-6", "pdp-g-3", "pdp-g-7"]
//  */

// const sum = (a, c) => a + c;
// const join = (a, c, idx) => {
// 	a = `${a}+${c}`;
// 	if (idx === input.length - 1) {
// 		let summa = eval(a);
// 		return `${a} = ${summa}`;
// 	}
// 	return a;
// };
// const prefix = (a, c) => [...a, `pdp-g-${c}`];

// const output = input.reduce(prefix, []);
// console.log(output);

/** ARRAY "SPLICE" METHOD */
// const input = ["pdp", "google", "amazon", "arslonbek", "apple"];
/**
 *  removeGoogle: output = ["pdp", "amazon", "arslonbek", "apple"]
 *  removeAppleAmazon: output = ["pdp", "google", "amazon", "arslonbek", "amazon"]
 *  removeAmazonAppleTwo: output = ["pdp", "google", "apple", "apple", "arslonbek", "apple"]
 */

/* removeGoogle */
// const output = input.splice(1, 1);
// console.log(output);
// console.log(input);

// /* removeAppleAmazon */
// const output = input.splice(3, 0, "Amazon");
// console.log(output);
// console.log(input);

// // /* removeAmazonAppleTwo */
// const output = input.splice(2, 1, "apple", "apple");
// console.log(output);
// console.log(input);

// /** ARRAY "SOME" METHOD */
// const input = [9, 3, 5, 3, 7];

// const output = input.some((item) => item % 2 === 0);
// console.log(output);

/** ARRAY "EVERY" METHOD */
// const input = [9, 3, 5, -2, 7];

// const output = input.every((item) => item > 1);
// console.log(output);

/*----------- 13.02.23(42)--------- */
// console.log("Lesson-42");

// function maxSpan(nums) {
// 	let maxSpan = 0;
// 	let leftIndex = {};
// 	let rightIndex = {};

// 	for (let i = 0; i < nums.length; i++) {
// 		if (leftIndex[nums[i]] === undefined) leftIndex[nums[i]] = i;

// 		rightIndex[nums[i]] = i;
// 	}

// 	console.log(leftIndex);
// 	console.log(rightIndex);

// 	for (let key in leftIndex) {
// 		maxSpan = Math.max(maxSpan, rightIndex[key] - leftIndex[key] + 1);
// 	}

// 	return maxSpan;
// }

// maxSpan([1, 2, 1, 1, 3]);
// // maxSpan([1, 2, 1, 1, 3])

function fix34(nums) {
	let threeIndexes = [];
	let fourIndexes = [];

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (num === 3) threeIndexes.push(i);
		if (num === 4) fourIndexes.push(i);
	}

	threeIndexes.forEach((threeIdx, idx) => {
		const fourIdx = fourIndexes[idx];
		const temp = nums[threeIdx + 1];
		nums[threeIdx + 1] = 4;
		nums[fourIdx] = temp;
	});

	return nums;
}

/**
 * fix34([5, 3, 5, 4, 5, 4, 5, 4, 3, 5, 3, 5]);
 * let threeIndexes = [],fourIndexes = [];
 *
 *     * first loop:
 *   i = 0; num = 5 -> threeIndexes = [],fourIndexes = []
 *   i = 1; num = 3 -> threeIndexes = [1],fourIndexes = []
 *   i = 2; num = 5 -> threeIndexes = [1],fourIndexes = []
 *   i = 3; num = 4 -> threeIndexes = [1],fourIndexes = [3]
 *   i = 4; num = 5 -> threeIndexes = [1],fourIndexes = [3]
 *   i = 5; num = 4 -> threeIndexes = [1],fourIndexes = [3,5]
 *   i = 6; num = 5 -> threeIndexes = [1],fourIndexes = [3,5]
 *   i = 7; num = 4 -> threeIndexes = [1],fourIndexes = [3,5,7]
 *   i = 8; num = 3 -> threeIndexes = [1,8],fourIndexes = [3,5,7]
 *   i = 9; num = 5 -> threeIndexes = [1,8],fourIndexes = [3,5,7]
 *   i = 10; num = 3 -> threeIndexes = [1,8,10],fourIndexes = [3,5,7]
 *   i = 11; num = 5 -> threeIndexes = [1,8,10],fourIndexes = [3,5,7]
 *
 *   threeIndexes = [1,8,10],fourIndexes = [3,5,7]
 *
 * second loop :
 *   threeIdx = 1, idx = 0 -> fourIdx = 3, temp = 5, nums = [5, 3, 4, 5, 5, 4, 5, 4, 3, 5, 3, 5]
 *   threeIdx = 8, idx = 1 -> fourIdx = 5, temp = 5, nums = [5, 3, 4, 5, 5, 5, 5, 4, 3, 4, 3, 5]
 *   threeIdx = 10,idx = 2 -> fourIdx = 7, temp = 5, nums = [5, 3, 4, 5, 5, 5, 5, 5, 3, 4, 3, 4]
 *
 *
 */
