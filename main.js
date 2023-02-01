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

let list = [
	["Toshkent", "Olmazor", "Yunusobod"],
	["Xorazm", "Xiva", "Gurlan"],
	["Navoiy", "Zarafshon", "Uchquduq"],
	["Samarqand", "Kattaqorgon", "Urgut"],
];

console.log(list[2][1]);

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
