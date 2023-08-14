function sortToys(toys, positions) {
	const indexes = [];
	positions.forEach((position, i) => {
		indexes.push([i, position]);
	});

	indexes.sort((pos1, pos2) => pos1[1] - pos2[1]);

	const sortedToys = [];
	indexes.forEach((index) => {
		sortedToys.push(toys[index[0]]);
	});
	return sortedToys;
}
