// console.log("Lesson-33");

/**
 * Coding Challenge #3 :
 *
 * Gimnastika bo'yicha ikkita jamoa mavjud: Delfinlar(Dolphins) va Koalalar(Koalas).
 *  Ular bir-birlari bilan 3 marta raqobatlashadilar. Eng yuqori o'rtacha ball(averageScore) to'plagan g'olib kubokni(🏆) qo'lga kiritadi!
 *
 *
 * Task 1 : O'rtacha ballarini hisoblaymiz (averageScore)
 *
 * Task 2 : Musobaqa g'olibini aniqlash uchun jamoaning o'rtacha ballarini solishtiring va uni konsolga chop eting.
 * Shuni unutmangki, durang bo'lishi mumkin, shuning uchun buni ham sinab ko'ring
 *
 * Bonus 1 : Minimal 100 ball talabini qo'shing. Ushbu qoidaga ko'ra,
 * jamoa boshqa jamoadan yuqori ballga ega bo'lsa va ayni paytda kamida 100 ball to'plagan taqdirdagina g'alaba qozonadi
 *
 * Bonus 2 : Minimal ball durang uchun ham amal qiladi!
 * Shunday qilib, durang faqat ikkala jamoa bir xil ochkoga ega bo'lsa va
 * ikkalasi ham 100 ochkodan katta yoki teng ballga ega bo'lganda sodir bo'ladi.
 * Aks holda, hech bir jamoa kubokni qo'lga kirita olmaydi
 *
 *
 * Test Data :
 *    ✅ Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
 *    ✅ Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
 *    ✅ Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 *
 * Result template:
 *      Winner : {teamName} winner 🏆
 *      durrang uchung : {teamName1} and {teamName2} winners 🏆
 *      xech kim yutmaganda : No winners 🥶
 */

/**
 * Coding Challenge #4 :
 *
 * Ikki gimnastika jamoasiga, Delfinlar va Koalalarga qayting!
 * Yangi gimnastika intizomi mavjud bo'lib, u boshqacha ishlaydi.
 * Agar jamoa boshqa jamoaning o'rtacha ballidan kamida ikki baravar ko'p bo'lsa,
 *  g'alaba qozonadi. Aks holda, hech bir jamoa g'alaba qozonmaydi!
 *
 * Task 1 : O'rtacha ballarini hisoblaydigan arrow funksiya yaratamiz (calcAverageScore)
 *
 * Task 2 : O'rtacha ballarini hisoblaymiz
 *
 * Task 3 : Har bir jamoaning o'rtacha ballini argument sifatida qabul qiladigan "checWinner" nomli expression funksiyasini yarating,
 *          parametrlar sifatida ('avgDolhins' va 'avgKoalas').
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
// "use strict";

// a = 20;
// console.log(a);

// a = a + 40;
// console.log(a);

// function foo() {
// 	"use strict";
// 	console.log(bar);
// 	// Uncaught ReferenceError: bar is not defined
// 	bar = 0;
// 	return bar;
// }

// foo();

// var foo = 1;
// console.log(foo);
// var bar = 2;
// console.log(bar);

// function summa(a, a) {
// 	return a + a;
// }

// const result = summa(10, 20);
// console.log(result);

// "use strict";

// Global variable

// function foo() {
// 	bar = 1;
// }

// foo();
// console.log(bar); // 1

// Local variable
// function foo() {
// 	var bar = 1; // bar chỉ có hiệu lực bên trong function
// 	console.log(bar); // 1
// }

// foo();
// console.log(bar);
// "use strict";
// var public = 20;
// console.log(public);

// ------ Function

// function hi(name) {
// 	console.log(`Hello ${name}`);
// }

// for (let i = 0; i < 100; i++) {
// 	hi(`arslonbek-${i}`);
// }

// function show() {
// 	console.log("arslonbek");
// }
// let app = show();
// console.log(app);
// "use strict";

// -------- Function Declaration
// function app() {
// 	console.log(a);
// 	console.log("hello world");
// }

// let a = 20;
// {
//  console.log(a);
// 	console.log("hello world");
// }

// -------- Function Expression

// "use strict";

// show();
// var show = function (a, b) {
// 	console.log("hello world");
// };

// show = 20;

// console.log(show);

// function app() {
// 	console.log("I am APP Function");
// }

// const show = function () {
// 	console.log("I am SHOW Function");
// };

// app();
// show();
