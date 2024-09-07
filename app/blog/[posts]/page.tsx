import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'
import getPostMetadata from '../../../utils/getPostMetadata'
import getFilePath from '../../../utils/getFilePath'

const postDir = path.join(process.cwd(), '/posts')
const filePath = getFilePath(postDir)

export async function generateStaticParams() {
	const metadata = getPostMetadata(filePath)
	return metadata.map((post) => ({
		posts: post.slug
	}))
}

export default async function Posts(props: any) {
	const title = decodeURI(props.params.posts) + '.md'
	for (const file of filePath) {
		const fileName = path.basename(file);
		if (fileName === title) {
			const { data, content } = matter.read(file)
			const contentHtml = marked(content)
			return (
				<div className="bg-catpuccin-bg text-catpuccin-dark-gray min-h-screen">
					{data.image && (
						<img
							src={`${image}`}
							alt={title}
							width={320}
							height={180}
							className="object-cover w-full h-full"
						/>

					)}
					<h1 className="text-3xl font-bold text-center z-50">{data.title}</h1>
					<div
						dangerouslySetInnerHTML={{ __html: contentHtml }}
						className="prose lg:prose-xl bg-catpuccin-bg p-8 rounded-lg shadow-lg text-catpuccin-dark-gray"
					/>
				</div>
			)
		}
	}
}
