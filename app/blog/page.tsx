import path from "path"
import Link from "next/link"
import Image from "next/image"
import getFilePath from "../../utils/getFilePath"
import getPostMetadata from "../../utils/getPostMetadata"

export default function Blog() {
	const postDir = path.join(process.cwd(), '/posts')
	const filePath = getFilePath(postDir);
	const metadata = getPostMetadata(filePath);

	return (
		<ul className="overflow-y-scroll container flex-col justify-center items-center w-screen h-screen bg-blue-500">
			<h1>This is the blog page</h1>
			{metadata.map((post) => (
				<li key={post.title}>
					<Link href={`/blog/${post.title}`}>
						<div className="flex-col bg-red-500 justify-around items-center m-10 rounded-3xl">
							<Image
								src={`/${post.image}`}
								alt={post.title}
								width={270}
								height={100}
							/>
						</div>
					</Link>
				</li>
			))}
		</ul>
	)
}
