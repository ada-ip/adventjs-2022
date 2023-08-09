function decorateTree(base) {
	const adornos = ["B", "R", "P"];
	const arbol = [base];
	const NUMFILAS = Math.ceil(base.length / 2);
	for (let i = 0; i < NUMFILAS - 1; i++) {
		let nuevaFila = "";
		for (let j = 0; j < arbol[i].length - 1; j = j + 2) {
			if (arbol[i][j] == arbol[i][j + 2]) {
				nuevaFila += arbol[i][j] + " ";
			} else {
				let nuevoAdorno = adornos.find((adorno) => ![arbol[i][j], arbol[i][j + 2]].includes(adorno));
				nuevaFila += nuevoAdorno + " ";
			}
		}
		arbol.push(nuevaFila.trimEnd());
	}
	return arbol.reverse();
}
