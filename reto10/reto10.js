function checkJump(heights) {
	let sube = 0;
	let baja = 0;
	let estado;
	let parabola = true;

	for (let i = 1; i < heights.length && parabola; i++) {
		if (heights[i] > heights[i - 1] && estado != "sube") {
			sube++;
			estado = "sube";
		}

		if (heights[i] < heights[i - 1] && estado != "baja") {
			baja++;
			estado = "baja";
		}

		if (baja > sube || sube > 1 || baja > 1) {
			parabola = false;
		}
	}

	if (sube != 1 || baja != 1) {
		parabola = false;
	}

	return parabola;
}
