import { Link } from "@remix-run/react";

export const FooterLink = ({ title, to }: Props) => (
	<Link
		className="flex items-center justify-center hover:underline p-2 h-fit"
		aria-label={title}
		title={title}
		to={to}
	>
		{title}
	</Link>
);

type Props = Readonly<{ title: string; to: string; }>;
