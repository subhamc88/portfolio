import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'
import getPostMetadata from '../../../utils/getPostMetadata'
import getFilePath from '../../../utils/getFilePath'

const postDir = path.join(process.cwd(), '/posts');
const filePath = getFilePath(postDir);

export const generateStaticParams = () => {
	const metadata = getPostMetadata(filePath);

	const postsLinks = metadata.map((posts) => (posts.title))
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
