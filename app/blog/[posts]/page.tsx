import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'
import getPostMetadata from '../../../utils/getPostMetadata'
import getFilePath from '../../../utils/getFilePath'

const postDir = path.join(process.cwd(), '/posts');

export async function generateStaticParams() {
	const filePath = getFilePath(postDir);
	const metadata = getPostMetadata(filePath);
	const postsLinks = metadata.map((post) => ({ posts: post.title }))
	return postsLinks
}

export default function Posts(props: any) {
	const title = decodeURI(props.params.posts) + '.md'
	const filePath = path.join(postDir, title)
	const { content } = matter.read(filePath)
	const contentHtml = marked(content)

	return (
		<div dangerouslySetInnerHTML={{ __html: contentHtml }} />
	)
}
