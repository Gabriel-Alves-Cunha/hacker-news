import { useLoaderData, Link } from "@remix-run/react";

import { hackerNewsTitle } from "~/root";
import { HeaderNavLink } from "./HeaderNavLink";
import { Searcher } from "./Searcher";

import logoURL from "@public/Hacker News logo.svg";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Main function:

export function Header() {
	// const data = useLoaderData<HeaderData>();

	return (
		<header className="flex h-7 bg-orange-500 shadow-lg px-24 text-white justify-between content-center">
			<nav className="flex gap-7">
				<Link
					className="flex items-center justify-center px-2 h-full font-bold"
					aria-label="Go to home page"
					title="Go to home page"
					to="/"
				>
					<img
						alt="Hacker News's logo. The letter 'H' on an orange background."
						className="w-6 h-6 mr-2 border border-black"
						src={logoURL}
					/>

					{hackerNewsTitle}
				</Link>

				<HeaderNavLink title={newArticles} to="new-articles" />

				<HeaderNavLink title={pastArticles} to="past-articles" />

				<HeaderNavLink title={comments} to="comments" />

				<HeaderNavLink title={ask} to="ask" />

				<HeaderNavLink title={show} to="show" />

				<HeaderNavLink title={jobs} to="jobs" />

				<HeaderNavLink title={submit} to="submit" />
			</nav>

			<Searcher />

			<HeaderNavLink title={login} to="login" />
		</header>
	);
}

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Constants:

const pastArticles = "Past articles";
const newArticles = "New articles";
const comments = "Comments";
const submit = "Submit";
const login = "Login";
const jobs = "Jobs";
const show = "Show";
const ask = "Ask";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Types:

// type HeaderData = Readonly<{}>;
