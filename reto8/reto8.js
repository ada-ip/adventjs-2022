function checkPart(part) {
	let isPalindrome = false;

	let reversePart = part.split("").reverse().join("");
	if (reversePart == part) {
		isPalindrome = true;
	}

	if (!isPalindrome) {
		for (let i = 0; i < part.length && !isPalindrome; i++) {
			let partArray = part.split("");
			partArray.splice(i, 1);
			partArray = partArray.join("");
			reversePart = partArray.split("").reverse().join("");

			if (reversePart == partArray) {
				isPalindrome = true;
			}
		}
	}

	return isPalindrome;
}
