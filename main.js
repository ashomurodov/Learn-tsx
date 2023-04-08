// // function first(name) {
// // 	console.log(`I am first, called from ${name}`);
// // }
// // function second(name) {
// // 	console.log(`I am second, called from ${name}`);
// // }
// // function third(name) {
// // 	console.log(`I am third, called from ${name}`);
// // }

// // const actions = {
// // 	edit: first,
// // 	delete: second,
// // 	complete: third,
// // };

// // for (let action in actions) {
// // 	console.log("action = ", action);
// // 	const fn = actions[action];
// // 	fn(action);
// // }

/**
	* HM_0001 = { job: HM_0002, salary: 500 }
	* HM_0002 = "Developer"


	*/
const person = { job: {}, salary: 500 }; // SM_person_001 = HM_0001

let jobName = person.job; // SM_jobName_002 = HM_0002

jobName = "Developer"; // SM_jobName_002 = "Developer"
person.job = "Developer"; //  HM_0001.job = "Developer"
console.log(person);
