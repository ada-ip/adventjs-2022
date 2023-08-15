function printTable(gifts) {
	// Finds out the width of the table
	const colWidths = gifts.reduce(
		(maxLength, current) => {
			maxLength.col1 = Math.max(maxLength.col1, current.name.length + 2);
			maxLength.col2 = Math.max(maxLength.col2, current.quantity.toString().length + 2);
			return maxLength;
		},
		{ col1: "Gift".length + 2, col2: "Quantity".length + 2 }
	);

	let table = "";
	// Top line of the table
	table += "+".repeat(colWidths.col1 + colWidths.col2 + 3) + "\n";
	// Head of the table
	table += "| Gift" + " ".repeat(colWidths.col1 - "Gift".length - 1);
	table += "| Quantity" + " ".repeat(colWidths.col2 - "Quantity".length - 1) + "|\n";
	// Divider
	table += "| " + "-".repeat(colWidths.col1 - 2) + " ";
	table += "| " + "-".repeat(colWidths.col2 - 2) + " |\n";
	// Gifts
	gifts.forEach((gift) => {
		table += `| ${gift.name}${" ".repeat(colWidths.col1 - gift.name.length - 1)}`;
		table += `| ${gift.quantity}${" ".repeat(colWidths.col2 - gift.quantity.toString().length - 1)}`;
		table += "|\n";
	});
	// Bottom line of the table
	table += "*".repeat(colWidths.col1 + colWidths.col2 + 3);

	return table;
}
