function countTime(leds) {
	let tiempo = 0;
	let ledsEncendidas = false;
	do {
		let cambios = 0;
		const arrayAux = [...leds];
		for (let i = 1; i < leds.length; i++) {
			if (arrayAux[i] == 0 && arrayAux[i - 1] == 1) {
				leds[i] = 1;
				cambios++;
			}
		}

		if (arrayAux[0] == 0 && arrayAux[arrayAux.length - 1] == 1) {
			leds[0] = 1;
			cambios++;
		}

		if (cambios == 0) {
			ledsEncendidas = true;
		} else {
			tiempo += 7;
		}
	} while (!ledsEncendidas);

	return tiempo;
}
