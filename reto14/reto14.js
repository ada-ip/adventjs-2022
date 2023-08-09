function getOptimalPath(path) {
	const resultado = path.reduceRight((valPrevio, valActual) => {
		return valActual.map((val, index) => {
			return val + Math.min(valPrevio[index], valPrevio[index + 1]);
		});
	});
	return resultado[0];
}
