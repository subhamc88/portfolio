import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
	title: "subhamc88 -> portfolio",
	description: "This is my portfolio website and I have fun here.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Navbar />
				{children}
			</body>
		</html >
	);
}
