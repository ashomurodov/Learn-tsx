var __extends =
	(this && this.__extends) ||
	(function () {
        
		var extendStatics = function (d, b) {
			extendStatics =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function (d, b) {
						d.__proto__ = b;
					}) ||
				function (d, b) {
					for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
				};
			return extendStatics(d, b);
		};

		return function (d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
		};
	})();

var Car = /** @class */ (function () {
	function Car(name, price) {
		this.name = name;
		this.price = price;
	}
	Car.prototype.move = function () {
		console.log("".concat(this.name, " is moving..."));
	};
	return Car;
})();

var Cobalt = /** @class */ (function (_super) {
	__extends(Cobalt, _super);

	function Cobalt(name, price, color) {
		var _this = _super.call(this, name, price) || this;
		_this.color = color;
		return _this;
	}

	Cobalt.prototype.lock = function () {
		console.log("".concat(this.name, " was locked"));
	};
	return Cobalt;
})(Car);

const cobalt = new Cobalt("cobalt", 2000, "red");

console.log(cobalt);
