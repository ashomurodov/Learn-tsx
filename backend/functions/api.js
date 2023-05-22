const express = require("express");
const serverless = require("serverless-http");
const app = express();
app.use(express.json());
const router = express.Router();

let counter = 1;
const users = [];

router.get("/users", (req, res) => {
	res.send({ data: users, message: "" });
});

router.get("/users/:userID", (req, res) => {
	const { userID } = req.params;
	const user = users.find((user) => user.id === +userID);

	if (!user) res.status(404).send({ message: "User not found" });
	res.send({ data: user, message: "" });
});

router.delete("/users/:userID", (req, res) => {
	const { userID } = req.params;
	const deleteIdx = users.findIndex((user) => user.id === +userID);

	if (deleteIdx === -1) res.status(404).send({ message: "User not found" });

	const deleteUser = users.splice(deleteIdx, 1);

	res.send(`user id=${userID} successfully deleted`);
});

router.post("/users", (req, res) => {
	const user = { ...req.body, id: counter++ };
	users.push(user);
	res.send({ message: "created user", data: user });
});

// const PORT = 8000;
// app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
