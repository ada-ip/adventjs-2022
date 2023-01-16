let boxes = [
	{ l: 1, w: 1, h: 1 },
	{ l: 2, w: 2, h: 2 },
	{ l: 3, w: 1, h: 3 }
];

fitsInOneBox(boxes); // false

boxes = [
	{ l: 1, w: 1, h: 1 },
	{ l: 3, w: 3, h: 3 },
	{ l: 2, w: 2, h: 2 }
];

fitsInOneBox(boxes); // true

function fitsInOneBox(boxes) {
	let boxesFit = true;

	boxes.sort((box1, box2) => box1.l - box2.l);

	// Se comparan los tamaños de las cajas
	for (let i = 1; i < boxes.length && boxesFit; i++) {
		if (boxes[i - 1].l >= boxes[i].l || boxes[i - 1].w >= boxes[i].w || boxes[i - 1].h >= boxes[i].h) {
			boxesFit = false;
		}
	}

	return boxesFit;
}
