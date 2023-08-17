function executeCommands(commands) {
	const registers = {
		V00: 0,
		V01: 0,
		V02: 0,
		V03: 0,
		V04: 0,
		V05: 0,
		V06: 0,
		V07: 0
	};

	for (let i = 0; i < commands.length; i++) {
		const command = commands[i].split(/\s|,/);

		switch (command[0]) {
			case "MOV":
				if (command[1].startsWith("V")) {
					registers[command[2]] = registers[command[1]];
				} else {
					registers[command[2]] = parseInt(command[1]);
				}
				break;

			case "ADD":
				registers[command[1]] = registers[command[1]] + registers[command[2]];
				if (registers[command[1]] > 255) {
					registers[command[1]] = registers[command[1]] - 256;
				}
				break;

			case "DEC":
				registers[command[1]] = registers[command[1]] === 0 ? 255 : registers[command[1]] - 1;
				break;

			case "INC":
				registers[command[1]] = registers[command[1]] === 255 ? 0 : registers[command[1]] + 1;
				break;

			case "JMP":
				if (registers.V00 !== 0) i = parseInt(command[1]) - 1;
				break;
		}
	}

	return Object.values(registers);
}
