import type { MetaFunction, LinksFunction } from "@remix-run/node";

import {
	ScrollRestoration,
	LiveReload,
	useCatch,
	Scripts,
	Outlet,
	Links,
	Meta,
} from "@remix-run/react";

import globalStyles from "@styles/global/global.css";

// dprint-ignore
export const links: LinksFunction = () => [
	{
		href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap",
		rel: "stylesheet"
	},
	{ rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{ rel: "stylesheet", href: globalStyles },
];

export const meta: MetaFunction = () => {
	const description = "Learn Remix and laugh at the same time!";
	const title = "Hacker News";

	return {
		// "twitter:image": "https://remix-jokes.lol/social.png",
		viewport: "width=device-width,initial-scale=1",
		// "twitter:card": "summary_large_image",
		"twitter:description": description,
		// "twitter:creator": "@remix_run",
		// "twitter:site": "@remix_run",
		keywords: "Remix,jokes",
		"twitter:title": title,
		charset: "utf-8",
		description,
		title,
	};
};

function Document({ children, title = "Hacker News" }: DocumentProps) {
	return (
		<html lang="en">
			<head>
				<Meta />

				<title>{title}</title>

				<Links />
			</head>

			<body>
				{children}

				<Scripts />

				<ScrollRestoration />

				<LiveReload />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<Document>
			<Outlet />
		</Document>
	);
}

export function ErrorBoundary({ error }: { error: Error; }) {
	console.error(error);

	return (
		<Document title="Uh-oh!">
			<div className="error-container">
				<h1>App Error</h1>

				<pre>{error.message}</pre>
			</div>
		</Document>
	);
}

export function CatchBoundary() {
	const caught = useCatch();

	return (
		<Document title={`${caught.status} ${caught.statusText}`}>
			<div className="error-container">
				<h1>{caught.status} {caught.statusText}</h1>
			</div>
		</Document>
	);
}

type DocumentProps = Readonly<{ children: React.ReactNode; title?: string; }>;
