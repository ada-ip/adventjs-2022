function createCube(size) {
	let cube = "";

	// Se crea la mitad superior del cubo
	for (let i = 1; i <= size; i++) {
		// Espacios iniciales
		for (let j = 1; j <= size - i; j++) {
			cube += " ";
		}

		// String de la cara 1
		for (let j = 1; j <= i; j++) {
			cube += "/\\";
		}

		// String de la cara 2
		for (let j = 1; j <= size; j++) {
			cube += "_\\";
		}

		cube += "\n";
	}

	// Se crea la mitad inferior del cubo
	for (let i = size; i >= 1; i--) {
		// Espacios iniciales
		for (let j = 1; j <= size - i; j++) {
			cube += " ";
		}

		// String de la cara 1
		for (let j = 1; j <= i; j++) {
			cube += "\\/";
		}

		// String de la cara 3
		for (let j = 1; j <= size; j++) {
			cube += "_/";
		}

		if (i > 1) {
			cube += "\n";
		}
	}

	return cube;
}
