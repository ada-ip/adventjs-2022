function selectSleigh(distance, sleighs) {
	const BATERIA = 20;
	let mejorTrineo = null;

	sleighs.forEach((trineo) => {
		if (trineo.consumption * distance <= BATERIA) {
			mejorTrineo = trineo.name;
		}
	});

	return mejorTrineo;
}
