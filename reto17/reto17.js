function carryGifts(gifts, maxWeight) {
	const giftsSacks = [];
	gifts.forEach((gift) => {
		if (giftsSacks.length != 0 && gift.length + giftsSacks[giftsSacks.length - 1].replace(/\s/g, "").length <= maxWeight) {
			giftsSacks[giftsSacks.length - 1] += ` ${gift}`;
		} else if (gift.length <= maxWeight) {
			giftsSacks.push(gift);
		}
	});

	return giftsSacks;
}
