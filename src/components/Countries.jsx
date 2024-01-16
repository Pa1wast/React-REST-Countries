/* eslint-disable no-mixed-spaces-and-tabs */
import { useCountries } from '../contexts/CountriesProvider';
import CountryCard from './CountryCard';
import ClipLoader from 'react-spinners/ClipLoader';

function Countries() {
	const { searchQuery, displayedCountries, isDarkMode } = useCountries();

	return (
		<div
			className={`grid w-full overflow-y-scroll overflow-x-hidden  grid-cols-2 md:grid-cols-4 sm:grid-cols-3 costume-grid  gap-10 h-full pb-16 pt-2 px-1 ${
				isDarkMode && 'dark'
			} `}
		>
			{displayedCountries.length > 0 ? (
				displayedCountries.map(country => (
					<CountryCard country={country} key={country.numericCode} />
				))
			) : searchQuery ? (
				<div className="flex w-full justify-center col-span-full items-center">
					<p
						className={`text-lg font-bold text-${
							isDarkMode ? 'darkText' : 'gray-800'
						}`}
					>
						No result matches your search!
					</p>
				</div>
			) : (
				<div className="flex w-full justify-center col-span-full items-center">
					<ClipLoader
						color={isDarkMode ? '#aaa' : '#555'}
						size={150}
						aria-label="Loading Spinner"
					/>
				</div>
			)}
		</div>
	);
}

export default Countries;
