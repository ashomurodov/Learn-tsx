const express = require("express");
const { generateUsers } = require("./generate-users");

const router = express.Router();
const users = generateUsers();

let counter = users.length;

router.get("/", (req, res) => {
	res.send({ data: users, message: "👍🏻 users get" });
});

router.get("/:userID", (req, res) => {
	const { userID } = req.params;
	const user = users.find((user) => user.id === +userID);

	if (!user) res.status(404).send({ data: null, message: "❌ User not found" });
	res.send({ data: user, message: "" });
});

router.delete("/:userID", (req, res) => {
	const { userID } = req.params;
	const deleteIdx = users.findIndex((user) => user.id === +userID);

	if (deleteIdx === -1) res.status(404).send({ message: "User not found" });

	const deleteUser = users[deleteIdx];
	users.splice(deleteIdx, 1);

	res.send({ data: deleteUser, message: `👍🏻 user id=${userID} successfully deleted` });
});

router.post("/", (req, res) => {
	const user = { ...req.body, id: ++counter };
	users.push(user);
	res.send({ data: user, message: "created user" });
});

module.exports = {
	userRouter: router,
};
