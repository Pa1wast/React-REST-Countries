import { useNavigate } from 'react-router-dom';
import { useCountries } from '../contexts/CountriesProvider';

/* eslint-disable react/prop-types */
function CountryCard({ country }) {
	const navigation = useNavigate();
	// const { isDarkMode } = useCountries();
	return (
		<div
			className="flex flex-col  w-full gap-3  min-w-fit shadow-all  rounded-sm active:scale-95 duration-200 trans hover:shadow-sm hover:-translate-y-1"
			onClick={() => navigation(`/country/${country.numericCode}`)}
		>
			<img
				src={country.flag}
				alt="country flag"
				className="w-full h-36 rounded-t-sm  "
			/>
			<div className=" flex-col flex gap-2 px-4 pb-10 ">
				<p className="font-bold">{country.name}</p>
				<div className=" flex flex-col gap-1 text-xs ">
					<p>
						Population:{' '}
						<span className="text-gray-500">
							{country.population}
						</span>
					</p>
					<p>
						Region:{' '}
						<span className="text-gray-500">{country.region}</span>
					</p>
					<p>
						Capital:{' '}
						<span className="text-gray-500">{country.capital}</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default CountryCard;
