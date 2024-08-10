import fs from 'fs';
import path from 'path';

export default function getFilePath(postsDir: string) {
	const dirPath: string[] = [];
	const filePath: string[] = [];

	function searchFiles(dir: string) {
		const entries = fs.readdirSync(dir);

		for (let entry of entries) {
			const fullPath = path.join(dir, entry);
			const stat = fs.statSync(fullPath);
			if (stat.isDirectory()) {
				// If it's a directory, recursively search within it
				searchFiles(fullPath);
			} else if (stat.isFile() && path.extname(entry) === '.md') {
				// If it's a .md file, add it to the filePath array
				filePath.push(fullPath);
			}
		}
	}

	// Start searching from the postsDir
	searchFiles(postsDir);

	return filePath;
}
