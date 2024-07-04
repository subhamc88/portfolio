import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'

export default function Posts(props: any) {
	const title = decodeURI(props.params.posts) + '.md'
	const postDir = path.join(process.cwd(), 'posts/')
	const filePath = path.join(postDir, title)
	const { content } = matter.read(filePath)
	const contentHtml = marked(content)

	return (
		<div dangerouslySetInnerHTML={{ __html: contentHtml }} />
	)
}
