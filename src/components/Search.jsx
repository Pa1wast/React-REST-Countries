import { useCountries } from '../contexts/CountriesProvider';
import Filter from './Filter';

function Search() {
	const { onSearch, SearchQuery, isDarkMode } = useCountries();

	return (
		<div className="flex w-full justify-between gap-10 flex-wrap ">
			<div className="flex w-96 gap-6 flex-shrink items-center justify-start shadow-all px-5 py-2  rounded-sm ">
				<img
					src={`../design/icons/loupe-${
						isDarkMode ? 'light' : 'dark'
					}.png`}
					alt="loupe"
					className="w-4"
				/>
				<input
					type="text"
					placeholder="Search for a country..."
					className={`text-md w-full rounded-sm px-2 py-1 focus:outline-none ${
						isDarkMode && `${'bg-darkElement text-darkText'}`
					}`}
					onChange={e => onSearch(e.target.value)}
					value={SearchQuery}
				/>
			</div>
			<Filter />
		</div>
	);
}

export default Search;
