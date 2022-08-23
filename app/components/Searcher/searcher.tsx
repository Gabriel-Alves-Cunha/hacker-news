import { subscribeWithSelector } from "zustand/middleware";
import create from "zustand";

import { emptyArray } from "~/utils/array";

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

export enum SearchStatus {
	FOUND_SOMETHING,
	DOING_NOTHING,
	NOTHING_FOUND,
	SEARCHING,
}

const { DOING_NOTHING, SEARCHING } = SearchStatus;

/////////////////////////////////////////

const defaultSearcher: Searcher = Object.freeze({
	searchStatus: DOING_NOTHING,
	isInputOnFocus: false,
	results: emptyArray,
	searchTerm: "",
});

export const useSearcher = create<Searcher>()(
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	subscribeWithSelector((_set, _get, _api) => defaultSearcher),
);

export const { setState: setSearcher, getState: getSearcher } = useSearcher;

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

useSearcher.subscribe(
	state => state.searchTerm,
	function searchForMedias(searchTerm): void {
		setSearcher({ results: emptyArray, searchStatus: SEARCHING });

		if (searchTerm.length < 2) return;

		console.log(getSearcher());

		// 		const results = searchMedia(highlight);
		// 		const searchStatus = results.length > 0 ? FOUND_SOMETHING : NOTHING_FOUND;
		//
		// 		setSearcher({ searchStatus, results });
	},
);

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

export const setDefaultSearch = () => setSearcher(defaultSearcher);

/////////////////////////////////////////
/////////////////////////////////////////

export const setSearchTerm = (e: InputChange) =>
	setSearcher({ searchTerm: e.target.value });

/////////////////////////////////////////
/////////////////////////////////////////

export const setIsInputOnFocus = (bool: boolean) =>
	setSearcher({ isInputOnFocus: bool });

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
// Types:

type Searcher = Readonly<
	{
		searchStatus: SearchStatus;
		results: readonly never[];
		isInputOnFocus: boolean;
		searchTerm: string;
	}
>;

/////////////////////////////////////////

type InputChange = Readonly<React.ChangeEvent<HTMLInputElement>>;
