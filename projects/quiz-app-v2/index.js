// const nums = [1, 8, 4, 5, 2, 3];
// const [first, second] = nums;

// function summa(...items) {
// 	return items.reduce((a, c) => a + c);
// }

// const result = summa(...nums);
// console.log("result = ", result);

// Array rest params
// const nums = [1, 8, 4, 5, 2, 3];
// const [first, second, ...others] = nums;

// console.log("first = ", first);
// console.log("second = ", second);

// console.log("others = ", others);

// Object rest params

const car = {
	name: "BMW x7",
	price: "$350000",
	color: "Dark Black",
	createdDate: "04.04.23",
	owner: "ArslonbekXX",
};

const { name: carName = "", price, ...others } = car;
console.log("carName = ", carName);
console.log("price = ", price);

console.log("others = ", others);
