import { Link, useLoaderData } from "@remix-run/react";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Main function:

export function Footer() {
	// const data = useLoaderData<FooterData>();

	return (
		<footer className="flex absolute bottom-0">
			<Link aria-label={guidelines} title={guidelines} to="guidelines">
				{guidelines}
			</Link>

			<Link aria-label={faq} title={faq} to="faq">{faq}</Link>

			<Link aria-label={lists} title={lists} to="lists">{lists}</Link>

			<Link aria-label={api} title={api} to="api">{api}</Link>

			<Link aria-label={security} title={security} to="security">
				{security}
			</Link>

			<Link aria-label={legal} title={legal} to="legal">{legal}</Link>

			<Link aria-label={contact} title={contact} to="contact">{contact}</Link>
		</footer>
	);
}

// #202012

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Constants:

const guidelines = "Guidelines";
const security = "Security";
const contact = "Contact";
const lists = "Lists";
const legal = "Legal";
const api = "Api";
const faq = "FAQ";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Types:

// type FooterData = Readonly<{}>;
