const { faker } = require("@faker-js/faker");

const generateUsers = () => {
	const users = [];

	for (let i = 0; i < 10; i++) {
		const user = {
			id: faker.string.uuid(),
			username: faker.internet.userName(),
			email: faker.internet.email(),
			phoneNumber: faker.phone.number("+998 ## ### ## ##"),
			age: faker.number.int(70),
			address: faker.location.city(),
			avatarURL: faker.internet.avatar(),
		};

		users.push(user);
	}

	return users;
};

module.exports = {
	generateUsers,
};
