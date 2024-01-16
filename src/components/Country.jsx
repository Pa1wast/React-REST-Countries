/* eslint-disable no-mixed-spaces-and-tabs */
import { Link, useParams } from 'react-router-dom';
import { useCountries } from '../contexts/CountriesProvider';
import { ClipLoader } from 'react-spinners';

function Country() {
	const { countries, isDarkMode } = useCountries();
	const { id: countryId } = useParams();
	const country = countries
		? countries.find(country => country.numericCode === countryId)
		: null;

	const borders =
		country && country.borders
			? country.borders.map(border =>
					countries.find(country => country.alpha3Code === border)
			  )
			: [];

	return (
		<div
			className={`flex flex-col  h-screen p-10 gap-10 ${
				isDarkMode && 'bg-darkBg text-darkText '
			} `}
		>
			<Link
				to="/"
				className="shadow-all pl-6 py-1 text-sm w-24 rounded-sm active:scale-95 duration-200 trans hover:shadow-sm "
			>
				&larr; Back
			</Link>
			{country ? (
				<div
					className={`flex   w-fit overflow-y-auto mb-14 gap-10 items-center justify-center costume-wrap ${
						isDarkMode && 'dark'
					} `}
				>
					<img
						src={country.flag}
						alt="country flag"
						className="w-96"
					/>
					<div className="grid grid-cols-2 gap-6 p-2 ">
						<p className="text-2xl font-bold col-span-2">
							{country.name}
						</p>
						<div className="flex col-span-2 justify-between gap-1  flex-wrap font-medium text-sm ">
							<div className="flex flex-col gap-1  ">
								<p className="">
									Native Name:{' '}
									<span className="text-gray-500">
										{country.nativeName}
									</span>
								</p>
								<p>
									Population:{' '}
									<span className="text-gray-500">
										{country.population}
									</span>
								</p>
								<p>
									Region:{' '}
									<span className="text-gray-500">
										{country.region}
									</span>
								</p>
								<p>
									Sub Region:{' '}
									<span className="text-gray-500">
										{' '}
										{country.subregion}
									</span>
								</p>
								<p>
									Capital:{' '}
									<span className="text-gray-500">
										{country.capital}
									</span>
								</p>
							</div>

							<div className="flex flex-col gap-1 ">
								<p>
									Top Domain Level:{' '}
									<span className="text-gray-500">
										{country.nativeName}
									</span>
								</p>
								<p>
									Currencies:{' '}
									<span className="text-gray-500">
										{country.population}
									</span>
								</p>
								<p>
									Langauges:{' '}
									<span className="text-gray-500">
										{country.region}
									</span>
								</p>
							</div>
						</div>
						<div className="flex flex-wrap gap-2 col-span-2">
							<p className="font-medium text-sm">
								Border Countries:{' '}
							</p>
							<div className="flex gap-1 flex-wrap w-fit">
								{borders?.length > 0 ? (
									borders.map(border => (
										<Link
											to={`/country/${border.numericCode}`}
											key={border.numericCode}
											className={`shadow-all text-xs py-1 px-4 rounded-sm text-gray-500 active:scale-95 duration-200 trans hover:shadow-sm ${
												isDarkMode && 'text-darkText'
											} `}
										>
											{border.name}
										</Link>
									))
								) : (
									<p className="text-sm text-gray-500">
										No borders
									</p>
								)}
								{}
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="w-full flex justify-center mt-14 h-full">
					<ClipLoader
						color={isDarkMode ? '#aaa' : '#555'}
						size={150}
						aria-label="Loading Spinner"
						data-testid="loader"
					/>
				</div>
			)}
		</div>
	);
}

export default Country;
