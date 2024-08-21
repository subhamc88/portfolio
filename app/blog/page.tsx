import path from "path";
import Link from "next/link";
import Image from "next/image";
import getFilePath from "../../utils/getFilePath";
import getPostMetadata from "../../utils/getPostMetadata";

export default function Blog() {
	const postDir = path.join(process.cwd(), '/posts');
	const filePath = getFilePath(postDir);
	const metadata = getPostMetadata(filePath);

	return (
		<div className="text-redCandy-black container mx-auto p-4 flex flex-wrap justify-center items-center min-h-screen">
			<h1 className="text-3xl font-bold text-redCandy-black mb-8 w-full text-center">
				Welcome to My Space
			</h1>
			<ul className="w-full flex flex-wrap justify-center">
				{metadata.map((post) => (
					<li
						key={post.title}
						className="relative m-4 w-80 h-48 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105"
					>
						<Link href={`/blog/${post.title}`}>
							<div className="flex flex-col justify-between h-full">
								<div className="relative h-32">
									<Image
										src={`/${post.image}`}
										alt={post.title}
										layout="fill"
										objectFit="cover"
										className="rounded-t-lg"
									/>
								</div>
								<div className="p-4 flex-1">
									<h2 className="text-lg font-bold text-redCandy-black">
										{post.title}
									</h2>
								</div>
								<div className="absolute top-0 left-0 w-full h-full bg-redCandy-black bg-opacity-80 opacity-0 hover:opacity-100 flex justify-center items-center p-4 text-redCandy-white text-center">
									<p>{post.description}</p>
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
