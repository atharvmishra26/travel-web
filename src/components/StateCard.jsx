import Link from 'next/link';

const StateCard = ({ state }) => {
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
					<Link href={`/states/${state.name.toLowerCase()}`}>
						<h2 className="text-xl font-bold mb-2 hover:underline">
							{state.name}
						</h2>
					</Link>
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
								Largest City
							</p>
							<p className="text-lg font-semibold">
								{state.largest_city}
							</p>
						</div>
						<div>
							<p className="text-sm font-medium text-gray-500">
								Region
							</p>
							<p className="text-lg font-semibold">
								{state.region}
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
