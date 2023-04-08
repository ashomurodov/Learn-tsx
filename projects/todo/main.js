const todoInput = document.getElementById("todo");
const addBtn = document.querySelector(".add");
const clearBtn = document.querySelector(".clear");
const listWrapper = document.querySelector(".list");
//
const todos = []; // {id: 0, name: "arslonbek"}
let currentTodo = null;

function handleAdd() {
	const { value } = todoInput;
	const todoName = value;
	if (todoName.trim() === "") return alert("Please enter valid name");

	const todo = { name: todoName, id: todos.length };
	todos.push(todo);

	value = "";

	renderTodos();
}
function handleClear() {}
function handleDelete(id) {
	console.log(`Delete id = ${id}`);
}
function handleEdit(id) {
	console.log(`Edit id = ${id}`);
}
function handleComplete(id) {
	console.log(`Complete id = ${id}`);
}

// render functions

function renderTodos() {
	[...listWrapper.children].forEach((elm) => elm.remove());

	for (let { name, id } of todos) {
		const todoWrapper = document.createElement("li");
		todoWrapper.classList.add("list-item");

		const todoNameElm = document.createElement("span");
		todoNameElm.innerText = name;

		const actionsWrapper = document.createElement("div");
		actionsWrapper.className = "actions";

		const actions = {
			Completed: handleComplete,
			Edit: handleEdit,
			Delete: handleDelete,
		};

		for (let action in actions) {
			const actionBtn = document.createElement("button");
			actionBtn.innerText = action;
			actionBtn.addEventListener("click", () => actions[action](id));
			actionsWrapper.appendChild(actionBtn);
		}

		todoWrapper.append(todoNameElm, actionsWrapper);

		listWrapper.appendChild(todoWrapper);
	}
}

function init() {
	addBtn.addEventListener("click", handleAdd);
}

init();
