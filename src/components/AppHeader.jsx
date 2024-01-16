import { useCountries } from '../contexts/CountriesProvider';

function AppHeader() {
	const { isDarkMode, setIsDarkMode } = useCountries();

	return (
		<div
			className={`flex justify-between py-5 px-16  shadow-md  ${
				isDarkMode && 'text-darkText bg-darkBg'
			} `}
		>
			<p className="text-2xl font-bold">Where in the world?</p>
			<div
				className="flex gap-4 items-center cursor-pointer hover:scale-[104%] duration-300 "
				onClick={() => setIsDarkMode(cur => !cur)}
			>
				<img
					src={`../design/icons/${isDarkMode ? 'moon' : 'sun'}.png`}
					alt="moon"
					className="w-5"
				/>
				<p className="text-lg font-semibold">
					{isDarkMode ? 'Dark' : 'Light'} Mode
				</p>
			</div>
		</div>
	);
}

export default AppHeader;
