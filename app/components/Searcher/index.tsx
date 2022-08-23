import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { useEffect, useRef } from "react";

import { isAModifierKeyPressed } from "@utils/keyboard";
import { useOnClickOutside } from "@hooks/useOnClickOutside";
import { Results } from "./Results";
import {
	setIsInputOnFocus,
	setDefaultSearch,
	setSearchTerm,
	getSearcher,
	useSearcher,
} from "./searcher";

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
// Main function:

export function Searcher() {
	const searchTerm = useSearcher(searchTermSelector);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		function closeSearchMediaPopoverOnEsc(e: KeyboardEvent): void {
			if (
				e.key === "Escape" && getSearcher().isInputOnFocus === true &&
				isAModifierKeyPressed(e) === false
			)
				closeSearchMedia(inputRef);
		}

		document.addEventListener("keyup", closeSearchMediaPopoverOnEsc);

		return () =>
			document.removeEventListener("keyup", closeSearchMediaPopoverOnEsc);
	}, []);

	useOnClickOutside(wrapperRef, () => closeSearchMedia(inputRef));

	return (
		// Search and results wrapper:
		<div
			className="relative pt-[2px] bg-orange-600 hover:bg-orange-700 [&_*]:text-white focus-within:bg-orange-700 group"
			ref={wrapperRef}
		>
			{/* Search wrapper: */}
			<div className="flex w-56 h-6 items-center pr-1 pl-6 cursor-text [&_*]:text-sm">
				<SearchIcon size={16} className="absolute left-1" color="white" />

				{/* eslint-disable-next-line jsx-a11y/no-access-key */}
				<input
					className="flex h-full content-center bg-transparent focus:outline-none caret-white placeholder:text-white tracking-wide"
					onFocus={() => setIsInputOnFocus(true)}
					onChange={setSearchTerm}
					placeholder="Search"
					value={searchTerm}
					autoComplete="on"
					autoCorrect="on"
					ref={inputRef}
					accessKey="s"
					name="search"
					spellCheck
				/>

				<span className="absolute right-1 group-focus-within:hidden">
					Alt+s
				</span>
			</div>

			<Results />
		</div>
	);
}

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
// Helper functions:

const searchTermSelector = (state: ReturnType<typeof useSearcher.getState>) =>
	state.searchTerm;

/////////////////////////////////////////

function closeSearchMedia(inputRef: React.RefObject<HTMLElement>): void {
	inputRef.current?.blur();
	setDefaultSearch();
}
