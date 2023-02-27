"use strict";

const colorBtn = document.getElementById("color");
const generatorBtn = document.getElementById("generator");
let color;

function getColor() {
	return "#" + Math.random().toString(16).substring(2, 8);
}

generatorBtn.addEventListener("click", function () {
	color = getColor();
	colorBtn.innerText = color;
});

colorBtn.addEventListener("click", function () {
	document.body.style.background = color;
});
