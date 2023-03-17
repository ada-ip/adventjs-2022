function getFilesToBackup(lastBackup, changes) {
	const archivosModificados = [];

	changes.forEach((change) => {
		if (change[1] > lastBackup && !archivosModificados.includes(change[0])) {
			archivosModificados.push(change[0]);
		}
	});

	archivosModificados.sort((id1, id2) => id1 - id2);

	return archivosModificados;
}
