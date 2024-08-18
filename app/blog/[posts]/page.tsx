import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';
import getPostMetadata from '../../../utils/getPostMetadata';
import getFilePath from '../../../utils/getFilePath';

const postDir = path.join(process.cwd(), '/posts');

// Generate static paths for dynamic routing
export async function generateStaticParams() {
	const filePath = getFilePath(postDir);
	const metadata = getPostMetadata(filePath);
	const postsLinks = metadata.map((post) => ({ posts: post.title }));
	return postsLinks;
}

// Fetch data directly in the component
export default async function Posts({ params }: { params: { posts: string } }) {
	const filePath = getFilePath(postDir);
	const targetFile = filePath.find(file => file.endsWith(`${params.posts}.md`));

	if (!targetFile) {
		return <div>Post not found</div>;
	}

	const { content } = matter.read(targetFile);
	const contentHtml = marked(content);

	return (
		<div dangerouslySetInnerHTML={{ __html: contentHtml }} className="overflow-y-scroll h-screen" />
	);
}
