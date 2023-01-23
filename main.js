// ---------Values and Variables
// let name = "arslonbek";

// console.log(name);

// name = "Hello " + name;

// console.log(name);

// ---------Variable name conventions
// let $name = "arslonbek";
// console.log($name);
// let _name = "___arslonbek";
// console.log(_name);
// let name = "ozi arslonbek";
// console.log(name);
// let a23 = "Jamshidbek";
// console.log(a23);
// let firstName = "Boburbek";
// All cases :
/**
 * Pascal Case: FirstName
 * Snake Case: first_name
 * Kebab Case: first-name
 * Camel Case: firstName
 *
 */

// const MAX_SPEED = 60;

// if(carSpeed < MAX_SPEED) {}

// const person = {
// 	name: "arslonbek",
// 	age: 20,
// };

// console.log(person.name);

//--------Primitive Data types
// // Number
// let a = 20.5;
// console.log(a);
// console.log(typeof a);

// // String
// let b = "arslonbek";
// console.log(b);
// console.log(typeof b);

// // Boolean
// let pdpIsOpen = false;
// console.log(pdpIsOpen);
// console.log(typeof pdpIsOpen);

// Undefined
// let temp;
// console.log(temp);
// console.log(typeof temp);

// Null
// let value = null;
// console.log(value);
// console.log(typeof value);
// ---- Coding Challenge

/**
 * Coding Challenge #1 :
 * Mark and Kent are trying to compare their BMI (Body Mass Index),
 * which is calculated using the formula:
 * BMI = mass / height ** 2
 *
 *
 * Task-1 : Store Mark's and Kent's mass and height in variables
 * Task-2 : Calculate both their BMIs using the formula (you can even implement both versions)
 * Task-3 : Create a Boolean variable 'markResult' containing information about whether Mark has a higher BMI than Kent
 *
 *
 */
// let markWeight;
// let markHeight;
// let markBMI;

// let kentWeight;
// let kentHeight;
// let kentBMI;

// let markResult;

// CC - 2
// let a = 20;
// let b = 30;

// console.log(a);
// console.log(b);

// // a = a + b; // 20 + 30 = 50
// // b = a - b; // 50 - 30 = 20(a)
// // a = a - b; // 50 - 20 = 30(b)

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// let a = 2;
// let b = 4;
// console.log(typeof a);
// console.log(typeof b);
// console.log(a == b);
// console.log(a === b);

console.log("Lesson-31");

/**
 * Coding Challenge #2 :
 * Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
 *
 * Task-1 : Print a nice output to the console, saying who has the higher BMI.
 * The message is either "Mark's BMI is higher than Kent's!" or "Kent's BMI is higher than Mark's!"
 *
 * Task-2 : Use a template literal to include the BMI values in the outputs.
 * Example: "Mark's BMI (28.3) is higher than Kent's (23.9)!"
 *
 */

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
 *    ✅  Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 *
 * Result template:
 *      Winner : {teamName} winner 🏆
 *      durrang uchung : {teamName1} and {teamName2} winners 🏆
 *      xech kim yutmaganda : No winners 🥶
 */
