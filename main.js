const btn = document.querySelector("button");
const box = document.querySelector(".box");

btn.onclick = function () {
	box.classList.toggle("go");
};
