import matter from "gray-matter";
import postMetadataInterface from "./postMetadataInterface";

export default function getPostMetadata(filePath: string[]) {
	console.log(filePath);
	const postMetadataCollection = []

	for (let file of filePath) {
		const { data: frontmatter, content } = matter.read(file)
		const postMetadata: postMetadataInterface = {
			title: frontmatter.title,
			date: frontmatter.date,
			author: frontmatter.author,
			category: frontmatter.category,
			tags: frontmatter.tags,
			description: frontmatter.description,
			draft: frontmatter.draft,
			image: frontmatter.image,
		}
		postMetadataCollection.push(postMetadata);
	}
	return postMetadataCollection;
}
