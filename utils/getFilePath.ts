import fs from 'fs';
import path from 'path';

export default function getFilePath(dir: string) {
	const filePath = []
	const files = fs.readdirSync(dir);

	// Search files inside the Directories.
	for (let file of files) {
		// File paths inside the Directories.
		let bufferPath = path.join(dir, file);
		// File existence Validation.
		if (fs.existsSync(bufferPath)) {
			filePath.push(bufferPath)
		}
	}
	// Returns file path in array.
	return filePath
}
