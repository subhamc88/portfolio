import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function animationSwipeRight() {
	useGSAP(() => {
		const timeline = gsap.timeline()

		timeline.from(
			'.page', { opacity: 0, duration: 0 })
			.to('.overlay', {
				x: '-100%',
				duration: 1.6
			})
			.to('.page', {
				opacity: 1,
				ease: 'power2.out'
			}, "-=1.2")
	}, [])
}
