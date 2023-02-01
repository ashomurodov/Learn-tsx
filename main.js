"use strict";
/**
 * Coding Challenge #4 :
 *
 * Ikki gimnastika jamoasiga, Delfinlar va Koalalarga qayting!
 * Yangi gimnastika intizomi mavjud bo'lib, u boshqacha ishlaydi.
 * Agar jamoa boshqa jamoaning o'rtacha ballidan kamida ikki baravar ko'p bo'lsa,
 *  g'alaba qozonadi. Aks holda, hech bir jamoa g'alaba qozonmaydi!
 *
 * Task 1 : O'rtacha ballarini hisoblaydigan expression funksiya yaratamiz (calcAverageScore)
 *
 * Task 2 : O'rtacha ballarini hisoblaymiz
 *
 * Task 3 : Har bir jamoaning o'rtacha ballini argument sifatida qabul qiladigan "checWinner" nomli expression funksiyasini yarating,
 *          parametrlar sifatida ('avgDolphins' va 'avgKoalas').
 *          Keyin yuqoridagi qoidaga muvofiq g'olibni g'alaba ochkolari bilan birga konsolga chiqazing.
 *
 * Task 4 : Durrang xolatni hisoblash shart emas
 *
 * Task 5 : Test ma'lumotlari sifatida quydagi Arraydan foydalaning
 *
 * Test Data :
 *    ✅ const data = [["Dolphin", 23, 12, 44],["Koala", 45, 22, 34]];
 *    ✅ const data = [["Koala", 13, 22, 54],["Dolphin", 23, 44, 54]];
 *
 * Result template:
 *      Winner : {teamName} winner (31, 15) 🏆
 *      xech kim yutmaganda : No winners 🥶
 *
 *
 *
 * -------- Old Solution
 *
 * const calcAverageScore = function (score1, score2, score3) {
 * 	return Math.floor((score1 + score2 + score3) / 3);
 * };

 * function checkWinner(avg1, avg2) {
 * 	if (avg1 > 2 * avg2) {
 * 		console.log(`Dolphin winner (${avg1},${avg2})`);
 * 	} else if (avg2 > 2 * avg1) {
 * 		console.log(`Koala winner (${avg2},${avg1})`);
 * 	} else {
 * 		console.log(`No Winner (${avg2},${avg1})`);
 * 	}
 * }

 * const dolphinScore1 = 44;
 * const dolphinScore2 = 23;
 * const dolphinScore3 = 71;

 * const koalaScore1 = 6500;
 * const koalaScore2 = 54;
 * const koalaScore3 = 49;

 * const avgDolphins = calcAverageScore(dolphinScore1, dolphinScore2, dolphinScore3);
 * const avgKoalas = calcAverageScore(koalaScore1, koalaScore2, koalaScore3);

 * checkWinner(avgDolphins, avgKoalas);

 */

// let str = "-arslonbek";
// str.__proto__.replace = function () {
// 	return "My Function";
// };

// console.log(str);
// console.log(str.replace("-", ""));

// const person = {
// 	name: "Bekzod",
// 	job: "Teacher",
// 	age: 25,
// 	run: function () {
// 		console.log("Bekzod is running...");
// 	},
// };

// person.run();

// ------- Array --------

function hi(name) {
	console.log(`Hello ${name}`);
}
// let name1 = "Arslonbek";
// let name2 = "Erkinbek";
// let name3 = "Jamshidbek";
// // ...
// let name27 = "Maftuna";

// hi(name1);
// hi(name2);
// hi(name3);
// hi("...");
// hi(name27);

// let names = ["Arslonbek", 22, "Erkinbek", "Jamshidbek", "...", "Maftuna"];

// // for (let i = 0; i < names.length; i++) {
// // 	hi(names[i]);
// // }

// for (let name of names) {
// 	console.log(`Hello ${name}`);
// }

// console.log("------");
// for (let i = 0; i < names.length; i++) {
// 	console.log(`Hello ${names[i]}`);
// }

// let nums = [1, [2, 21, 22, 23], 3, 4];

// for (let i = 0; i < nums[1].length; i++) {
// 	let num = nums[1][i];
// 	console.log(num);
// }

// let list = [
// 	["Toshkent", "Olmazor", "Yunusobod"],
// 	["Xorazm", "Xiva", "Gurlan"],
// 	["Navoiy", "Zarafshon", "Uchquduq"],
// 	["Samarqand", "Kattaqorgon", "Urgut"],
// ];

// for (let i = 0; i < list.length; i++) {
// 	const sub = list[i];
// 	const city = sub[0];
// 	console.log(`#${city}`);
// 	for (let j = 1; j < sub.length; j++) {
// 		console.log(`------${sub[j]}`);
// 	}
// }

/**
 * # Toshkent
 *   --- Olmazor
 *   --- Yunusobod
 * # Xorazm
 *   --- Xiva
 *   --- Gurlan
 *
 *
 *
 */
/// ---------Callback
// function fullName(str) {
// 	const names = str.split("-");
// 	const firstName = names[0];
// 	const lastName = names[1];
// 	return `${firstName} ${lastName}`;
// }

// function firstName(str) {
// 	const names = str.split("-");
// 	const firstName = names[0];
// 	return firstName;
// }
// function lastName(str) {
// 	const names = str.split("-");
// 	const lastName = names[1];
// 	return lastName;
// }

// function hi(callback) {
// 	const name = callback("Arslonbek-Alimbayev");
// 	console.log(`Hi ${name}`);
// }

// hi(fullName);
// hi(firstName);
// hi(lastName);

// ------ const and array
// const list = [1, 2, 3];
// console.log(list);

// list[1] = 20;
// console.log(list);

// ------ reference vs primitive
//  Primitive
// let a = 20; // 001
// let b = a; // 002
// b += 20; // 002 = 40
// console.log(a);
// console.log(b);

/**
 * Stack Memory
 * Address     |  Value
 *  a(001)     |   20
 *  b(002)     |   40
 *
 */

// // Reference
// let a = [10, 20, 30]; // a(001) = H(0001)
// let b = [10, 20, 50]; // b(002) = H(0002)
// let c = b;
// b[1] = 50; // H(0001)[1] = 50

// console.log(a);
// console.log(b);
// console.log(c);

/**
 * Stack Memory
 * Address     |  Value
 *  a(001)     | H(0001)
 *  b(002)     | H(0002)
 *  c(003)     | H(0002)
 *--------
 *------- Heap Memory
 * Address     |    Value
 *  0001       |  [10,20,30]
 *  0002       |  [10, 50, 50]
 *
 */

// HM(0001) = [], HM(0002) = []
let a = []; // SM-a(001) = HM(0001)
let b = []; // SM-b(002) = HM(0002)
// console.log(a === b)
console.log(20 === 20);
console.log([] === []);
