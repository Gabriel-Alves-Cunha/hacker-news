import type { MetaFunction } from "@remix-run/node";

import {
	ScrollRestoration,
	LiveReload,
	Scripts,
	Outlet,
	Links,
	Meta,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
	viewport: "width=device-width,initial-scale=1",
	title: "New Remix App",
	charset: "utf-8",
});

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />

				<Links />
			</head>

			<body>
				<Outlet />

				<ScrollRestoration />

				<Scripts />

				<LiveReload />
			</body>
		</html>
	);
}
