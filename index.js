function front22(str) {
	let chars = str[0] + str[1];

	let result = chars + str + chars;
	return result;
}

/**
 * #1 - front22("kitten") -> "kikittenki"
 *
 * str = "kitten"
 * chars = "k" + "i" -> "ki"
 * result = "ki" + "kitten" + "ki" ->  "kikittenki"
 */

/**
 * #2 - front22("Ha") -> "HaHaHa"
 *
 * str = "H" + "a" -> "Ha"
 * result = "Ha" + "Ha" + "Ha" -> "HaHaHa"
 */

front22("kitten");
