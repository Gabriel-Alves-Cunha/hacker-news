import { FooterLink } from "./FooterLink";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Main function:

export function Footer() {
	// const data = useLoaderData<FooterData>();

	return (
		<footer className="flex relative bottom-0 w-full h-footer justify-center content-center text-xs border-t-2 border-orange-500 bg-[#181a1b] text-white items-center [&>span]:gap-3">
			<FooterLink title={guidelines} to="guidelines" />

			<span>|</span>

			<FooterLink title={faq} to="faq" />

			<span>|</span>

			<FooterLink title={lists} to="lists" />

			<span>|</span>

			<FooterLink title={api} to="api" />

			<span>|</span>

			<FooterLink title={security} to="security" />

			<span>|</span>

			<FooterLink title={legal} to="legal" />

			<span>|</span>

			<FooterLink title={contact} to="contact" />
		</footer>
	);
}

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
