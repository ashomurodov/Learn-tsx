"use strict";
/*----------- 08.03.23(49)--------- */

// const btn = document.querySelector(".btn");
// const element = document.querySelector(".container :first-child");

// btn.addEventListener("click", function () {
// 	const isActive = element.classList.contains("box");
// 	if (isActive) {
// 		element.removeAttribute("class");
// 	} else {
// 		element.setAttribute("class", "box");
// 	}
// });

// function withoutFragment(limit = 100) {
// 	console.time("withoutFragment");
// 	for (let i = 1; i <= limit; i++) {
// 		const heading = document.createElement("h1"); // HM_0005
// 		heading.innerText = `Hello ${i}`;
// 		document.body.appendChild(heading);
// 	}
// 	console.timeEnd("withoutFragment");
// }

// function withFragment(limit = 100) {
// 	console.time("withFragment");
// 	const fragment = document.createDocumentFragment();

// 	for (let i = 1; i <= limit; i++) {
// 		const heading = document.createElement("h1"); // HM_0005
// 		heading.innerText = `Hello ${i}`;
// 		fragment.appendChild(heading);
// 	}
// 	document.body.appendChild(fragment);
// 	console.timeEnd("withFragment");
// }

// withFragment(20000);
// withoutFragment(20000);

// const person = {
// 	name: "arslonbek",
// 	age: 25,
// };

// const list = [20, 20];
// // list[1].name = "boburbek";
// console.log(list);

// const set = new Set(list);
// console.log(set);

// const btn = document.querySelector(".btn");
// const box = document.getElementById("box");

// btn.addEventListener("click", function () {
// 	const isExist = box.classList.contains("darker");
// 	if (isExist) {
// 		box.classList.replace("darker", "danger");
// 	} else {
// 		box.classList.replace("danger", "darker");
// 	}
// });

// const person = {
// 	name: "arslonbek",
// 	age: 20,
// 	dog: {
// 		name: "reks",
// 	},
// };

// // console.log(person.cat?.name);

// const value = false;

// const isAccess = value ?? 40;

// console.log(isAccess);

// for (let i = 1; i <= 10; i++) {
// 	box.classList.add(`box=${i}`);
// }

// console.log(box.className);

/** JS Event */

/**
	*   ✅ Inline Event Handler Attributes 👍🏻
     ✅ Event Handler Properties 👍🏻
     ✅ Event Listeners
	*
	*
	*
 */

// console.dir(btn);
// btn.onclick = function () {
// 	console.log("handle clicked...");
// };

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
// 	console.log("listener-1 clicked...");
// });

// btn.addEventListener("click", function () {
// 	console.log("listener-2 clicked...");
// });
// btn.addEventListener("click", function () {
// 	console.log("listener-3 clicked...");
// });
// btn.addEventListener("click", function () {
// 	console.log("listener-4 clicked...");
// });

/*----------- 10.03.23(50)--------- */
