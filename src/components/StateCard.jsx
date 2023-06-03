import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

const StateCard = ({ state }) => {

	const [weatherData, setWeatherData] = useState({})

	useEffect(() => {
		const fetchData = () => {
			axios.get(`https://api.weatherapi.com/v1/current.json?key=9477704bb0144e91a57140445230306&q=${state.capital}`)
			.then((res)=>
				setWeatherData(res.data)
			)
		}
		fetchData()
	}, [])

	return (
		<div className="bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-500">
			<div>
				<div className="relative h-48 overflow-hidden">
					<img
						src={state.image_url}
						alt={`Image of ${state.name}`}
						className="absolute inset-0 object-cover w-full h-full rounded-t-lg"
					/>
				</div>
				<div className="p-6">
						<h2 className="text-xl font-bold mb-2 hover:underline">
							{state.name}
						</h2>
						<p>
							{weatherData?.current?.temp_c}°C
						</p>

					<p className="text-gray-600 mb-4 h-20">
						{state.description}
					</p>
					<div className="grid grid-cols-2 gap-4">
						<div>
							<p className="text-sm font-medium text-gray-500">
								Capital
							</p>
							<p className="text-lg font-semibold">
								{state.capital}
							</p>
						</div>
						<div>
							<p className="text-sm font-medium text-gray-500">
								Popular Food
							</p>
							<p className="text-md font-normal">
								{state.popularfood}
							</p>

						</div>
						<div>
							<p className="text-sm font-medium text-gray-500">
								Popular Markets
							</p>
							<p className="text-md font-normal">
								{state.popularmarkets}
							</p>
						</div>
						<div>
							<p className="text-sm font-medium text-gray-500">
								Popular Monuments							</p>
							<p className="text-md font-normal">
								{state.popularmonuments }
							</p>
						</div>
						<div>
							<p className="text-sm font-medium text-gray-500">
								Abbreviation
							</p>
							<p className="text-lg font-semibold">
								{state.abbreviation}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StateCard;
