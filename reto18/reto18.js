function dryNumber(dry, numbers) {
	const dryNumberNumbers = [];
	for (let i = 1; i <= numbers; i++) {
		if (i.toString().includes(dry.toString())) {
			dryNumberNumbers.push(i);
		}
	}
	return dryNumberNumbers;
}
