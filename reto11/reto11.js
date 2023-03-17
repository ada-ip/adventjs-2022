function getCompleted(part, total) {
	part = part.split(":");
	part = part[0] * 60 * 60 + part[1] * 60 + part[2];
	total = total.split(":");
	total = total[0] * 60 * 60 + total[1] * 60 + total[2];

	let fraccion = part / total;
	let numerador = 0;
	let denominador = 0;
	do {
		denominador++;
		numerador = denominador * fraccion;
	} while (numerador % 1 != 0);

	return `${numerador}/${denominador}`;
}
