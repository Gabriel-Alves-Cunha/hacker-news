import { NavLink } from "@remix-run/react";

export const HeaderNavLink = ({ title, to }: Props) => (
	<NavLink
		className="flex items-center justify-center hover:bg-orange-600 px-2 h-full"
		aria-label={title}
		title={title}
		to={to}
	>
		{title}
	</NavLink>
);

type Props = Readonly<{ title: string; to: string; }>;
