/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';

const CountriesContext = createContext();

function CountriesProvider({ children }) {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [countries, setCountries] = useState([]);
	const [region, setRegion] = useState('');
	const [filteredCountries, setFilteredCountries] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [searchedCountries, setSearchedCountries] = useState([]);
	const [displayedCountries, setDisplayedCountries] = useState([]);

	function handleSearch(query) {
		if (!query) {
			setSearchQuery(query);
			setSearchedCountries([]);
			return;
		}

		setSearchQuery(query);

		const searchResults = region
			? filteredCountries.filter(country =>
					country.name
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
			  )
			: countries.filter(country =>
					country.name
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
			  );

		searchResults.sort((a, b) => {
			const aStartsWithQuery =
				a.name.toLowerCase().indexOf(query.toLowerCase()) === 0;
			const bStartsWithQuery =
				b.name.toLowerCase().indexOf(query.toLowerCase()) === 0;

			if (aStartsWithQuery && !bStartsWithQuery) {
				return -1;
			} else if (!aStartsWithQuery && bStartsWithQuery) {
				return 1;
			} else {
				return 0;
			}
		});

		setSearchedCountries(searchResults);
	}

	function handleFilter(selectedRegion) {
		if (selectedRegion === 'Filter by region') {
			setRegion('');
			return;
		}

		setRegion(() => {
			const filteredResult = countries.filter(
				country => country.region === selectedRegion
			);

			setFilteredCountries(filteredResult);
			return selectedRegion;
		});
	}

	useEffect(() => {
		async function getCountries() {
			const res = await fetch(' http://localhost:3001/countries');
			const data = await res.json();
			setCountries(data);
			setDisplayedCountries(data);
		}
		getCountries();
	}, []);

	useEffect(() => {
		if (region && !searchQuery) {
			setDisplayedCountries(filteredCountries);
		} else if (region && searchQuery) {
			setDisplayedCountries(searchedCountries);
		} else if (!region && searchQuery) {
			setDisplayedCountries(searchedCountries);
		} else {
			setDisplayedCountries(countries);
		}
	}, [region, searchedCountries, filteredCountries, searchQuery, countries]);

	return (
		<CountriesContext.Provider
			value={{
				countries,
				region,
				searchQuery,
				onSearch: handleSearch,
				onFilter: handleFilter,
				displayedCountries,
				isDarkMode,
				setIsDarkMode,
			}}
		>
			{children}
		</CountriesContext.Provider>
	);
}

function useCountries() {
	const context = useContext(CountriesContext);
	if (context === undefined)
		throw new Error(
			'CountriesContext was used outside of CountriesProvider!!!'
		);
	return context;
}

export { CountriesProvider, useCountries };
