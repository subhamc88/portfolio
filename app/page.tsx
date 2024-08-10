'use client'
import animationSwipeRight from "../utils/animationSwipeRight";
import animationSwipeLeft from "../utils/animationSwipeLeft";
export default function Home() {
	animationSwipeLeft()
	return (

		<main className="page bg-red-500 h-screen">
			<div className="overlay bg-blue-400 w-screen h-5/6 absolute z-10"> Overlay </div>
			Hello World
		</main>
	);
}
