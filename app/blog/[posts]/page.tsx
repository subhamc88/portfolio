import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'
import getPostMetadata from '../../../utils/getPostMetadata'
import getFilePath from '../../../utils/getFilePath'
import Image from 'next/image'

const postDir = path.join(process.cwd(), '/posts')
const filePath = getFilePath(postDir)

export async function generateStaticParams() {
  const metadata = getPostMetadata(filePath)
  const postsLinks = metadata.map((post) => ({
    posts: post.slug
  }))
  return {
    paths: postsLinks,
  }
}

export default async function Posts(props: any) {
	const title = decodeURI(props.params.posts) + '.md'
	for (const file of filePath) {
		const fileName = path.basename(file);
		if (fileName === title) {
			const { data, content } = matter.read(file)
			const contentHtml = marked(content)
			return (
				<div className="bg-redCandy-white text-redCandy-black min-h-screen">
					{data.image && (
						<Image
							src={`/${data.image}`}
							alt={data.title}
							width={1920}
							height={1080}
							className="shadow-md"
						/>
					)}
					<h1 className="text-3xl font-bold text-center z-50">{data.title}</h1>
					<div
						dangerouslySetInnerHTML={{ __html: contentHtml }}
						className="prose lg:prose-xl bg-redCandy-white p-8 rounded-lg shadow-lg text-redCandy-black"
					/>
				</div>
			)
		}
	}
}
