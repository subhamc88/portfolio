import path from "path";
import Link from "next/link"
import getFilePath from "../../utils/getFilePath";
import getPostMetadata from "../../utils/getPostMetadata";

export default function Blog() {
	const postDir = path.join(process.cwd(), '/posts');
	const filePath = getFilePath(postDir);
	const metadata = getPostMetadata(filePath);

	return (
		<ul>
			<h1>This is the blog page</h1>
			{metadata.map((metadata) => (
				<li key={metadata.title}>
					<Link href={"/blog/posts/" + metadata.title}>
						{metadata.title}
					</Link>
				</li>
			))
			}
		</ul >
	);
}
