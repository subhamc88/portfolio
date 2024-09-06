import path from "path"
import Link from "next/link"
import Image from "next/image"
import getFilePath from "../../utils/getFilePath"
import getPostMetadata from "../../utils/getPostMetadata"

export default function Blog() {
	const postDir = path.join(process.cwd(), '/posts')
	const filePath = getFilePath(postDir)
	const metadata = getPostMetadata(filePath)
	const publishedPosts = metadata.filter(post => !post.draft)
	console.log(publishedPosts)

return (
    <div className="text-catpuccin-dark-gray bg-catpuccin-bg container mx-auto p-4 flex flex-wrap justify-center items-center min-h-screen">
      <h1 className="text-4xl font-bold text-catpuccin-dark-gray w-full text-center mb-12">
        Welcome to My Space
      </h1>
      <ul className="w-full flex flex-wrap justify-center gap-8">
        {publishedPosts.length ? (
          publishedPosts.map(({ title, slug, image, date, description }) => (
            <li
              key={slug}
              className="relative aspect-w-16 aspect-h-9 rounded-3xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Link href={`/blog/${slug}`}>
                <Image
                  src={`/${image}`}
                  alt={title}
                  width={320}
                  height={180}
                />
                <div className="p-4 flex flex-col h-full bg-catpuccin-bg rounded-b-3xl z-40">
                  <h2 className="text-xl font-semibold text-catpuccin-dark-gray mb-2 truncate">
                    {title}
                  </h2>
                  <span className="text-sm text-catpuccin-soft-gray mb-2">{date}</span>
                  <div className="absolute inset-0 bg-catpuccin-dark-gray bg-opacity-60 opacity-0 hover:opacity-100 flex justify-center items-center p-4 text-white text-center transition-opacity duration-300 rounded-b-3xl">
                    <p className="text-sm">{description || 'No description available'}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p className="text-center w-full text-catpuccin-dark-gray">No posts available.</p>
        )}
      </ul>
    </div>
  )
}
