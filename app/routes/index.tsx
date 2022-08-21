import { Outlet } from "@remix-run/react";

import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Main function:

export default function Index() {
	return (
		<>
			<Header />

			<main>
				<Outlet />
			</main>

			<Footer />
		</>
	);
}
