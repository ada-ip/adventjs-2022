const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);

console.log(wrapped);

function wrapping(gifts) {
	// Se envuelve cada regalo y se guarda en un array auxiliar
	const giftsWrapped = gifts.map((gift) => {
		let giftWrapped = "";
		// Se colocan los asteriscos de encima de la palabra
		for (let i = 0; i < gift.length + 2; i++) {
			giftWrapped += "*";
		}
		// Se colocan los saltos de línea y los asteriscos de los laterales
		giftWrapped += "\n*" + gift + "*\n";
		// Se colocan los asteriscos de debajo de la palabra
		for (let i = 0; i < gift.length + 2; i++) {
			giftWrapped += "*";
		}

		return giftWrapped;
	});

	return giftsWrapped;
}
