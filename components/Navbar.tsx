"use client"
import { useState } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseChimneyWindow, faCodeFork, faUserNinja, faBookOpen, faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { usePathname } from "next/navigation"

export default function Navbar() {
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

	const iconList = [
		{ name: 'Home', icon: faHouseChimneyWindow, path: "/" },
		{ name: 'Projects', icon: faCodeFork, path: "/projects" },
		{ name: 'Blog', icon: faBookOpen, path: "/blog" },
		{ name: 'Profile', icon: faUserNinja, path: '/profile' }
	]

	const currentPath = usePathname()

	return (
		<>
			<nav
				className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md p-3 z-50 md:hidden"
				role="navigation"
				aria-label="Mobile/Tablet Navigation"
			>
				<ul className="bg-gray-100/80 backdrop-blur-md flex justify-around py-3 px-5 rounded-3xl shadow-lg">
					{iconList.map((item) => (
						<li key={item.path} className="flex flex-col items-center">
							<Link href={item.path}>
								<FontAwesomeIcon
									icon={item.icon}
									className={`h-6 w-6 transition-colors duration-150 ${currentPath === item.path ? "text-redCandy-red" : "text-gray-500"}`}
								/>
								<span className="hidden sm:inline text-gray-700">{item.name}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<div className="hidden md:flex">
				<button
					className="fixed top-4 left-4 z-50 p-2"
					onClick={toggleSidebar}
				>
					<FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} className="h-6 w-6 text-gray-700" />
				</button>

				<aside
					className={`fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-lg transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}
					role="navigation"
					aria-label="Desktop Sidebar Navigation"
				>
					<ul className="flex flex-col mt-16 space-y-8 p-4">
						{iconList.map((item) => (
							<li key={item.path} className="flex items-center">
								<Link href={item.path} className="flex items-center space-x-3">
									<FontAwesomeIcon
										icon={item.icon}
										className={`h-6 w-6 transition-colors duration-150 ${currentPath === item.path ? "text-redCandy-red" : "text-gray-700"}`}
									/>
									<span className="text-gray-700">{item.name}</span>
								</Link>
							</li>
						))}
					</ul>
				</aside>
			</div>
		</>
	)
}
