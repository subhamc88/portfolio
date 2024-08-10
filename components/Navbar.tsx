"use client"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseChimneyWindow, faCodeFork, faUserNinja, faBookOpen } from "@fortawesome/free-solid-svg-icons"
import { usePathname } from "next/navigation"

export default function Navbar() {
	const iconList = [
		{ name: 'Home', icon: faHouseChimneyWindow, path: "/" },
		{ name: 'Projects', icon: faCodeFork, path: "/projects" },
		{ name: 'Blog', icon: faBookOpen, path: "/blog" },
		{ name: 'Profile', icon: faUserNinja, path: '/profile' }
	]

	const currentPath = usePathname()

	return (
		<nav
			className="fixed bottom-0 w-full sm:relative sm:top-0 sm:h-14 p-2"
			role="navigation"
			aria-label="Main Navigation"
		>
			<ul className="bg-gray-100 flex flex-row justify-around m-4 p-5 rounded-3xl">
				{iconList.map((item) => (
					<li key={item.path} className="flex flex-col items-center">
						<Link href={item.path}>
							<FontAwesomeIcon
								icon={item.icon}
								className={`h-6 w-6 transition-colors duration-150 ${currentPath === item.path ? "text-blue-500" : "text-gray-500"}`}
							/>
							<span className="hidden sm:inline">{item.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
