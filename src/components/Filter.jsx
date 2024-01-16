import { useCountries } from '../contexts/CountriesProvider';

const regionsList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

function Filter() {
	const { region, onFilter, isDarkMode } = useCountries();

	return (
		<select
			className={`shadow-all px-4 py-4 rounded-sm ${
				isDarkMode && `${'bg-darkElement text-darkText'}`
			}`}
			value={region}
			onChange={e => onFilter(e.target.value)}
		>
			<option>Filter by region</option>
			{regionsList.map((regionOption, index) => (
				<option key={index} value={regionOption}>
					{regionOption}
				</option>
			))}
		</select>
	);
}

export default Filter;
