"use strict";

// class Base {
// 	id;

// 	setId(newId) {
// 		this.id = newId;
// 	}

// 	getId() {
// 		return this.id;
// 	}
// }

// class User extends Base {
// 	constructor(username) {
// 		super();
// 		this.username = username;
// 	}

// 	run() {
// 		console.log(`${this.username} is running...`);
// 	}
// }

// class UserService {
// 	list = [];
// 	counterID = 0;

// 	create(...users) {
// 		for (let user of users) {
// 			user.setId(++this.counterID);
// 			this.list.push(user); // HM_0003
// 			this.list.push(Object.setPrototypeOf({ ...user }, User.prototype)); // HM_0004
// 		}
// 	}

// 	getById(userID) {
// 		for (let user of this.list) {
// 			if (user.getId() === userID) return user;
// 		}

// 		throw new Error("User not found");
// 	}

// 	getList() {
// 		return this.list;
// 	}

// 	updateById(user) {}
// }

// const userService = new UserService(); //
// const user = new User("Abdurakhmon"); //

// userService.create(user);

// const mockUser = userService.getById(user.getId());
// console.log(mockUser === user);
// user.username = "Boburbek";

// console.log("USERS: ", userService.getList());

class User {
	constructor(username) {
		this.username = username;
	}
	run() {
		console.log(`${this.username} is running...`);
	}
}

class Student {
	constructor(username) {
		this.username = username;
	}
	study() {
		console.log(`${this.username} is studying...`);
	}
}

function clone(object) {
	return Object.setPrototypeOf({ ...object }, object.__proto__);
}

const user = new User("Azizbek"); // HM_0001
const mockUSer = clone(user); // HM_0002

user.run(); //
// mockUser.run(); //

const student = new Student("Sardor"); // HM_0003
const mockStudent = clone(student); // HM_0004

console.log(Student.prototype === Object.getPrototypeOf(student));
