const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

const gifts = getGiftsToRefill(a1, a2, a3); // ['muñeca', 'pc']

function getGiftsToRefill(a1, a2, a3) {
	const gifts = [];

	a1.forEach((gift) => {
		if (gifts.indexOf(gift) == -1 && a2.indexOf(gift) == -1 && a3.indexOf(gift) == -1) {
			gifts.push(gift);
		}
	});

	a2.forEach((gift) => {
		if (gifts.indexOf(gift) == -1 && a1.indexOf(gift) == -1 && a3.indexOf(gift) == -1) {
			gifts.push(gift);
		}
	});

	a3.forEach((gift) => {
		if (gifts.indexOf(gift) == -1 && a1.indexOf(gift) == -1 && a2.indexOf(gift) == -1) {
			gifts.push(gift);
		}
	});

	return gifts;
}
