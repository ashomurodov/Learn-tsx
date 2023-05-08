// /** try catch */

// interface Params {
// 	brandName?: string;
// 	carName?: string;
// }

// const brands = {
// 	chevrolet: ["Cobalt", "Spark"],
// 	tesla: ["Model-S", "Model-T", "Model-Y"],
// 	bmw: ["i9", "i5", "x6", "x5"],
// };

// // ❌ Data Not Sended
// // ❌ Brand(brandName) not found

// function getData(carName?: string) {
// 	if (!carName) throw new Error("❌ Data Not Sended");

// 	for (let brand in brands) {
// 		for (let car of brands[brand]) {
// 			if (car === carName) return brand;
// 		}
// 	}

// 	throw new Error("Brand not found");
// }

// // try {
// // 	eval("20-*+10");
// // 	const data = getData(a);
// // 	console.log("data = ", data);
// // } catch (error: any) {
// // 	console.log(`❌ ${error.message}`);
// // }
// // throw new Error("Not implemented")

// // const text = "2+*-2";
// // try {
// // 	const app = eval(text);
// // 	console.log(app);
// // } catch (error) {
// // 	if (error instanceof Error) console.log(`❌ ${error.message}`);
// // }

// // console.log("Hello World");

// const rules = {
// 	20: ["moshina haydash", "choyxonaga bor"],
// 	25: ["uylanish", "maktabga bormaslik"],
// 	13: ["boqchaga bormaslik", "suzishga bormaslik"],
// };

// // ❌ Bu yoshda qoidalar yoq
// // ❌ Bu qoida yoq

// function check(age: number, rule: string) {
// 	if (!rules[`${age}`]) throw new Error("Bu yoshda qoida yoq");

// 	for (let r of rules[`${age}`]) {
// 		if (r === rule) return rule;
// 	}

// 	throw new Error("Bu qoida yoq");
// }

// try {
// 	const result = check(35, "moshina haydash");
// 	console.log(result);
// } catch (error: any) {
// 	console.log(`❌ ${error.message}`);
// }

// class User {}

// // const users: string[] = [new String("")];
// // console.log("first");

// // const str = new String("app").valueOf();

// function app<First, Second>(first: First, second: Second): [First, Second] {
// 	return [first, second];
// }

// const result = app(20, false);
// console.log(result[0].toFixed(2));
