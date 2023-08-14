function fixLetter(letter) {
	let fixedLetter = letter
		.replace(/\s{2,}/g, " ")
		.trim()
		.replace(/\s(?=,|\.|\?|!)/g, "")
		.replace(/,(?!\s)/g, ", ")
		.replace(/santa claus/gi, "Santa Claus")
		.replace(/\?{2,}/g, "?")
		.replace(/(\.|\?|!) (\w)/g, (match, p1, p2) => `${p1} ${p2.toUpperCase()}`)
		.replace(/^\w/, (match) => `${match.toUpperCase()}`)
		.replace(/(\w)$/, "$1.");
	return fixedLetter;
}
