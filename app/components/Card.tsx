import type { Data } from "@routes/index";

export function Card(
	{
		values: {
			numberOfComments,
			popularityStatus,
			siteOfOrigin,
			points,
			author,
			title,
			date,
		},
	}: Props,
) {
	return (
		<li className="list-item h-22 w-full">
			<div className="flex">
				<span className="bg-transparent text-gray-500 mr-2">
					{matchPopularityStatus(popularityStatus)}
				</span>

				<div className="">
					<div className="flex items-center">
						<h6 className="hover:underline cursor-pointer underline-offset-2 text-white text-lg mr-2 tracking-wide">
							{title}
						</h6>

						<span className="hover:underline cursor-pointer underline-offset-1">
							({siteOfOrigin})
						</span>
					</div>

					<div className="">
						{points} points by{" "}
						<span className="hover:underline cursor-pointer underline-offset-1">
							{author.name}
						</span>{" "}
						| published at {date} |{" "}
						<button className="hover:underline cursor-pointer underline-offset-1">
							hide
						</button>{" "}
						|{" "}
						<span className="hover:underline cursor-pointer underline-offset-1">
							{numberOfComments} comments
						</span>
					</div>
				</div>
			</div>
		</li>
	);
}

const matchPopularityStatus = (status: Data[0]["popularityStatus"]) =>
	status === 0 ? "●" : status === 1 ? "▴" : "▾";

type Props = Readonly<{ values: Data[0]; }>;
