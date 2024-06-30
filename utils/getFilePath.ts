import fs from 'fs';
import path from 'path';

export default function getFilePath(dir: string) {
	const subDirs = fs.readdirSync(dir);
	const filePath = []

	// Search for Sub Directories.
	for (let subDir of subDirs) {
		const subDirPath = path.join(dir, subDir);
		const files = fs.readdirSync(subDirPath);

		// Search files inside the Sub Directories.
		for (let file of files) {
			// File paths inside the Sub Directories.
			let bufferPath = path.join(subDirPath, file);
			// File existence Validation.
			if (fs.existsSync(bufferPath)) {
				filePath.push(bufferPath)
			}
		}
	}
	// File Path inside Array.
	return filePath
}
