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

// const inner = document.querySelector(".inner");
// const btn = document.querySelector(".btn");

// inner.addEventListener("click", function (event) {
// 	console.log("clicked INNER");
// });

// btn.addEventListener("click", function (event) {
// 	console.log("clicked BTN");
// });

// const form = document.forms[0];
// const username = document.getElementById("username");

// form.addEventListener("submit", (event) => {
// 	event.preventDefault();
// 	const username = form[0].value;
// 	const password = form[1].value;
// 	console.log({ username, password });
// });

// form.addEventListener("reset", () => {
// 	console.log("reset form");
// });

// username.addEventListener("focus", () => {
// 	console.log("input focus");
// });
// username.addEventListener("blur", () => {
// 	console.log("input blur");
// });

// const inner = document.querySelector(".inner");

// window.addEventListener("keydown", (e) => {
// 	console.log("key = ", e.key);
// });

// window.addEventListener("keypress", (e) => {
// 	console.log("key = ", e.key);
// });
// window.addEventListener("keyup", (e) => {
// 	console.log("key = ", e.key);
// });

// const inner = document.querySelector(".inner");
// const btn = document.querySelector(".btn");

// inner.addEventListener("click", function (event) {
// 	console.log("clicked INNER");
// });

// btn.addEventListener("click", function (event) {
// 	console.log("clicked BTN");
// });

const inner = document.querySelector(".inner");
const box = document.querySelector(".btn");
const container = document.querySelector(".container");

inner.addEventListener("click", function (event) {
	console.log("INNER target = ", event.target);
	console.log("clicked INNER");
	// event.stopPropagation();
});

box.addEventListener(
	"click",
	function (event) {
		console.log("BOX target = ", event.target);
		console.log("clicked BOX");
	},
	{ capture: false }
);

container.addEventListener(
	"click",
	function (event) {
		event.stopPropagation();
		console.log("CONTAINER target = ", event.target);
		console.log("clicked CONTAINER");
	},
	{ capture: false }
);
document.body.addEventListener(
	"click",
	function (event) {
		console.log("BODY target = ", event.target);
		console.log("clicked BODY");
	},
	{ capture: false }
);
document.addEventListener(
	"click",
	function (event) {
		console.log("HTML target = ", event.target);
		console.log("clicked HTML");
	},
	{ capture: false }
);
