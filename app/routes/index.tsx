import { data } from "../../tests/fakeData";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Main function:

import { Card } from "@components/Card";

export default function Index() {
	return (
		<section className="flex flex-col w-full h-full px-28 py-10 gap-9">
			<ul className="grid w-full h-full list-outside list-decimal marker:text-gray-500 marker:w-1 marker:h-1 grid-cols-1 gap-4 text-gray-400 text-sm">
				{data.map(values => <Card key={values.id} values={values} />)}
			</ul>

			<button className="text-white">Load more</button>
		</section>
	);
}

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Types:

export type Author = Readonly<{ name: string; id: string; }>;

////////////////////////////////////////////////

export type Data = readonly {
	popularityStatus: 0 /* 0 => same */ | -1 /* -1 => down */ | 1 /* 1 => up */;
	numberOfComments: string;
	siteOfOrigin: string;
	author: Author;
	points: string;
	title: string;
	date: string;
	id: string;
}[];
