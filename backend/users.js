const express = require("express");
const { object, string, number } = require("yup");
const { generateUsers } = require("./generate-users");
const { faker } = require("@faker-js/faker");
const router = express.Router();
const users = generateUsers();

const schema = object({
	username: string().required().trim(),
	email: string().email().required(),
	phoneNumber: string().min(5).required(),
	age: number().max(100).required(),
	address: string().required(),
	avatarURL: string().required(),
});

router.get("/", (req, res) => {
	res.send({ data: users, message: "👍🏻 users get" });
});

router.get("/:userID", (req, res) => {
	const { userID } = req.params;
	const user = users.find((user) => user.id === userID);

	if (!user) res.status(404).send({ data: null, message: "❌ User not found" });
	res.send({ data: user, message: "" });
});

router.delete("/:userID", (req, res) => {
	const { userID } = req.params;
	const deleteIdx = users.findIndex((user) => user.id === userID);

	if (deleteIdx === -1) res.status(404).send({ data: null, message: "User not found" });

	const deleteUser = users[deleteIdx];
	users.splice(deleteIdx, 1);

	res.send({ data: deleteUser, message: `👍🏻 user id=${userID} successfully deleted` });
});

router.post("/", (req, res) => {
	try {
		const data = schema.validateSync(req.body);

		console.log("data = ", data);

		if (!req.body.username)
			return res.status(400).send({ data: null, message: "Username is required field" });

		const user = { ...req.body, id: faker.string.uuid() };
		users.push(user);
		res.send({ data: user, message: "created user" });
	} catch (err) {
		res.status(400).send({ data: null, message: err.message });
		console.log(JSON.parse(JSON.stringify(err)));
	}
});

module.exports = {
	userRouter: router,
};
