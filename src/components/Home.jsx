import { useCountries } from '../contexts/CountriesProvider';
import Countries from './Countries';
import Search from './Search';

function Home() {
	const { isDarkMode } = useCountries();
	return (
		<div
			className={`flex flex-col justify-center
				items-center py-10 px-14 gap-10 h-full
				${isDarkMode && `${`bg-darkBg text-darkText`}`}
				`}
		>
			<Search />
			<Countries />
		</div>
	);
}

export default Home;
