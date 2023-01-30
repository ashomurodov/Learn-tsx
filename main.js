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
 * Test Data :
 *    ✅ Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
 *    ✅ Dolphins score 85, 54  and 41. Koalas score  23, 34 and 27
 *
 * Result template:
 *      Winner : {teamName} winner (31, 15) 🏆
 *      xech kim yutmaganda : No winners 🥶
 *
 */
"use strict";

// const calcAverageScore = function (score1, score2, score3) {
// 	return Math.floor((score1 + score2 + score3) / 3);
// };

// function checkWinner(avg1, avg2) {
// 	if (avg1 > 2 * avg2) {
// 		console.log(`Dolphin winner (${avg1},${avg2})`);
// 	} else if (avg2 > 2 * avg1) {
// 		console.log(`Koala winner (${avg2},${avg1})`);
// 	} else {
// 		console.log(`No Winner (${avg2},${avg1})`);
// 	}
// }

// const dolphinScore1 = 44;
// const dolphinScore2 = 23;
// const dolphinScore3 = 71;

// const koalaScore1 = 6500;
// const koalaScore2 = 54;
// const koalaScore3 = 49;

// const avgDolphins = calcAverageScore(dolphinScore1, dolphinScore2, dolphinScore3);
// const avgKoalas = calcAverageScore(koalaScore1, koalaScore2, koalaScore3);

// checkWinner(avgDolphins, avgKoalas);

//---------------

// let str = "arslonbek good boy";

// function subString(startIdx, lastIdx) {
// 	console.log("startIdx = ", startIdx);
// 	console.log("lastIdx = ", lastIdx);

// 	let result = "";
// 	for (let i = startIdx; i < lastIdx; i++) {
// 		result += str[i];
// 	}
// 	return result;
// }

// console.log(subString(0, 6)); // arslon
// console.log("--------");
// console.log(subString(6, str.length)); // bek good boy

// let str = "";

// console.log(str.substring(0, 6));

// let a = "ars";
// let b = "lon";
// let c = "bek";

// let name = b.concat(b, c, b, c, b, c, b, c, b, c);
// console.log(name);

// ------endsWith
// let str = "pdp-arslonbek-boburbek-g-8-pro";
// console.log(str.endsWith("g-8-", str.length - 3));
// console.log(str.startsWith(""));

// console.log(str.startsWith(str.substring(0, 4)));

// ------includes
// let str = "pdp-arslonbek-boburbek-g-8-pro";
// console.log(str.includes("pdp"));

// ------indexOf
// let str = "pdp-g-8-arslonbek-g-8ek-boburbek-g-8-pro";
// console.log(str.indexOf("g-9", 5));

// // ------lastIndexOf
// let str = "pdp-g-8-arslonbek-g-8ek-boburbek-g-8-pro";
// console.log(str.lastIndexOf("g-8", 5));

// // ------includes
// let str = "aEz-arslonjon-boburbk-g-8-pro";
// console.log(str.search("arsjjjlonjon"));

// ------split
// let str = "20-15--44-56-7-24";
// let nums = str.split("-");
// console.log(nums);

// let fullName = "Arslonbek Alimbayev  Shuxratovich";
// let names = fullName.split(" ");
// console.log(names);
// const firstName = names[0];
// const lastName = names[1];
// const middleName = names[2];
// console.log("firstName = ", firstName);
// console.log("lastName = ", lastName);
// console.log("middleName = ", middleName);

// const firstName = "arslonbek";
// console.log(firstName.split(""));

// firstName.substring(start)
// firstName.substr(start)
// firstName.slice();

const str = "    arslonbek    ";

console.log(str.length);
console.log(str.trim());
