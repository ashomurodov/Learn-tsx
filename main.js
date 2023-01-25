// console.log("Lesson-32");

// ------ Type Conversion
// -------- Number to String
// var a = "202020202";
// var b = "20";
// console.log(String(a));
// console.log(a.toString());
// console.log(`${a}`);
// console.log(a);
// console.log(b);

// // -------- String to Number
// var a = "202020202";
// console.log(Number(a));
// console.log(parseInt(a));
// console.log(+a);
// console.log(a);

// -------- Boolean to Number
// var a = false;
// console.log(Number(a));
// console.log(+a);
// console.log(a);
// -------- Boolean to String
// let a = false;
// console.log(String(a));
// console.log(`${a}`);
// console.log(a.toString());

// -------- String to Boolean
// let a = "";

// console.log(Boolean("Arslonbek"));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(a));
// console.log(!true);

// ----- Type Coercion
/// Operation (+)
// let a = 20;
// let b = a + a + 40 + "20" + (a + a) + String(a); // 80204020

// console.log(a);
// console.log(b);

/// Operation (-)
// let a = 30;
// // let b = Number("20") - a;

// console.log(typeof NaN);

// console.log(a);
// console.log(b);

// console.log("10" + 1);
// console.log(10 + 1);
// console.log("10" - 1);

//------ (==) vs (===)
// let a = 20;
// let b = "20";
// console.log(a == b);
// console.log(a === b);

// Boolean Logic

// const result = (true && 7 && "arslonbek") || (false && true) || "boburbek";
// console.log(result);

// let numbers = [20, 13, 44, 15];
// let index = 4;
// let a = numbers[index] || ("arslonbek" && numbers[index]) || "Boburbek";
// console.log(a);

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
