/*----------- 01.03.23(47)--------- */
// console.log("Lesson-47");

/** How To Make Changes to the DOM */

/** Creating New Nodes */

// /** createElement */
// const element = document.createElement("button");
// // element.textContent = "<i>I Am Button</i>";
// // element.innerText = "<i>I Am Button</i>";
// element.innerHTML = "<i>I am Button</i>";
// console.log(element);

// console.log(element.nodeType);
// document.body.appendChild(element);

/** createTextNode */
// const text = document.createTextNode("Hello World");

// const btn = document.createElement("button");
// btn.appendChild(text);
// console.log(btn);

// const parent = document.querySelector(".parent");
// const input = document.querySelector("#description");
// const btn = document.querySelector("#submit");

// btn.addEventListener("click", function () {
// 	const text = input.value;
// 	parent.innerHTML = text;
// });

// const text = document.createTextNode("Hello World");

// console.dir(text);

// console.log(text.nodeType);
// console.log(text.nodeName);

// const element = document.createElement("input");

// console.dir(element);
// console.dir(element.__proto__);
// console.dir(element.__proto__.__proto__);
// console.dir(element.__proto__.__proto__.__proto__);
// console.dir(element.__proto__.__proto__.__proto__.__proto__);
// console.dir(element.__proto__.__proto__.__proto__.__proto__.__proto__);
// console.dir(element.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);
// console.dir(element.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);

// element.addEventListener("click", function () {
// 	console.log("Hello World");
// });

// const parent = document.getElementById("parent");

// for (let i = 0; i < 10; i++) {
// 	const element = document.createElement("div");
// 	element.innerText = `SUDOKU-${i}`;
// 	parent.appendChild(element);
// }
// // <body></body>
// parent.appendChild(element); //
// parent.appendChild(element);
// parent.appendChild(element);
// parent.appendChild(element);
// parent.appendChild(element);
// // <body><div>SUDOKU</div></body>

// const person = {
// 	name: "arslonbek",
// 	age: 20,
// };

// const children = [];
// children.push(person);
// children.push(person);
// children.push(person);
// person.age = 30;

// console.log(children);

// const box1 = document.createElement("div");
// box1.innerText = "BOX-1";

// const box2 = document.createElement("div");
// box2.innerText = "BOX-2";

// const box3 = document.createElement("div");
// box3.innerText = "BOX-3";

// document.body.append(box1, box2);

// document.body.replaceChild(box3, box1);

// const parent = document.getElementById("parent");

// function createElement(count = 100) {
// 	console.time();
// 	for (let i = 0; i < count; i++) {
// 		const div = document.createElement("div");
// 		div.innerText = `I AM DIV-${i}`;
// 		parent.appendChild(div);
// 	}
// 	console.timeEnd();
// }

// createElement();

// function innerHTML(count = 10) {
// 	console.time();
// 	for (let i = 0; i < count; i++) {
// 		parent.innerHTML = parent.innerHTML + `<div>I AM DIV-${i}</div>`;
// 	}
// 	console.timeEnd();
// }

// innerHTML();

/** Removing Nodes from the DOM */
// const box1 = document.createElement("div");
// box1.innerText = "BOX-1";

// const box2 = document.createElement("div");
// box2.innerText = "BOX-2";

// const box3 = document.createElement("div");
// box3.innerText = "BOX-3";

// document.body.append(box1, box2);

// box1.remove();

// document.body.appendChild(box1);

/** How To Modify Attributes, Classes, and Styles in the DOM */

/** Attributes functions */
const elm = document.createElement("div");
elm.setAttribute("custom", "");
elm.innerText = "Hello World!";

const btn = document.createElement("button");
btn.innerText = "Toggle";

btn.addEventListener("click", function () {
	elm.removeAttribute("custom");
});
document.body.append(elm, btn);
