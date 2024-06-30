import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeAlt, faCodeBranch, faUserNinja, faBookBookmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
	return (
		<nav className="fixed bottom-0 w-full sm:relative sm:top-0 sm:h-14 p-2" role="navigation" aria-label="Main Navigation">
			<ul className="flex flex-row justify-around w-full">
				<li className="flex flex-col items-center">
					<Link href="/">
						<FontAwesomeIcon icon={faHomeAlt} className="h-6 w-6" />
						<span className="hidden sm:inline">Home</span>
					</Link>
				</li>
				<li className="flex flex-col items-center">
					<Link href="/projects">
						<FontAwesomeIcon icon={faCodeBranch} className="h-6 w-6" />
						<span className="hidden sm:inline">Projects</span>
					</Link>
				</li>
				<li className="flex flex-col items-center">
					<Link href="/blog">
						<FontAwesomeIcon icon={faBookBookmark} className="h-6 w-6" />
						<span className="hidden sm:inline">Blog</span>
					</Link>
				</li>
				<li className="flex flex-col items-center">
					<Link href="/profile">
						<FontAwesomeIcon icon={faUserNinja} className="h-6 w-6" />
						<span className="hidden sm:inline">Profile</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
