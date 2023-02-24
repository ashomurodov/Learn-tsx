"use strict";
const left = document.getElementById("left");
const title = document.getElementById("title");
const right = document.getElementById("right");

let text = title.innerText; // "Lesson-45"

left.addEventListener("click", function () {
	const words = text.split("-");
	words[1] = +words[1] - 1;
	text = words.join("-");

	title.innerText = text;
});

right.addEventListener("click", function () {
	const words = text.split("-");
	words[1] = +words[1] + 1;
	text = words.join("-");

	title.innerText = text;
});
