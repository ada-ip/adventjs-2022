function getMaxGifts(giftsCities, maxGifts, maxCities) {
	// An array with all different gifts combinations is created
	const giftsCombinations = [[]];
	giftsCities.forEach((gifts) => {
		giftsCombinations.push(...giftsCombinations.map((elem) => [...elem, gifts]));
	});

	// The highest sum of gifts that he can distribute is calculated
	let numMaxGifts = Math.max(
		...giftsCombinations.map((gifts) => {
			let numGifts = gifts.reduce((sum, gift) => (sum += gift), 0);
			if (numGifts <= maxGifts && gifts.length <= maxCities) return numGifts;
			return 0;
		})
	);

	return numMaxGifts;
}
