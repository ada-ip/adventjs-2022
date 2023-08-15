function checkStepNumbers(systemNames, stepNumbers) {
	return systemNames.every((sysName, index, systems) => {
		let nextSameSysIndex = systems.indexOf(sysName, index + 1);
		if (nextSameSysIndex == -1) return true;
		return stepNumbers[index] < stepNumbers[nextSameSysIndex];
	});
}
