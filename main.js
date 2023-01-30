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

console.log("Lesson-35");
