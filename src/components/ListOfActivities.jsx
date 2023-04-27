import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const activities = [
	{
		id: 1,
		name: 'Visit the Grand Canyon',
		image: 'https://source.unsplash.com/LAaSoL0LrYs/400x300',
		description:
			'Experience the breathtaking beauty of the Grand Canyon and take in the stunning views from the rim.',
		location: 'Agra',
	},
	{
		id: 2,
		name: 'Explore Yosemite National Park',
		image: 'https://source.unsplash.com/Y5o7SxO7JFk/400x300',
		description:
			'Discover the natural wonders of Yosemite National Park, including Yosemite Valley, Half Dome, and El Capitan.',
		location: 'California',
	},
	{
		id: 3,
		name: 'Visit the Statue of Liberty',
		image: 'https://source.unsplash.com/6bwHmDtpPfY/400x300',
		description:
			'See the iconic Statue of Liberty up close and learn about its history and significance as a symbol of freedom.',
		location: 'New York',
	},
	{
		id: 1,
		name: 'Visit the Grand Canyon',
		image: 'https://source.unsplash.com/LAaSoL0LrYs/400x300',
		description:
			'Experience the breathtaking beauty of the Grand Canyon and take in the stunning views from the rim.',
		location: 'Arizona',
	},
	{
		id: 2,
		name: 'Explore Yosemite National Park',
		image: 'https://source.unsplash.com/Y5o7SxO7JFk/400x300',
		description:
			'Discover the natural wonders of Yosemite National Park, including Yosemite Valley, Half Dome, and El Capitan.',
		location: 'California',
	},
	{
		id: 3,
		name: 'Visit the Statue of Liberty',
		image: 'https://source.unsplash.com/6bwHmDtpPfY/400x300',
		description:
			'See the iconic Statue of Liberty up close and learn about its history and significance as a symbol of freedom.',
		location: 'New York',
	},
	{
		id: 1,
		name: 'Visit the Grand Canyon',
		image: 'https://source.unsplash.com/LAaSoL0LrYs/400x300',
		description:
			'Experience the breathtaking beauty of the Grand Canyon and take in the stunning views from the rim.',
		location: 'Arizona',
	},
	{
		id: 2,
		name: 'Explore Yosemite National Park',
		image: 'https://source.unsplash.com/Y5o7SxO7JFk/400x300',
		description:
			'Discover the natural wonders of Yosemite National Park, including Yosemite Valley, Half Dome, and El Capitan.',
		location: 'California',
	},
	{
		id: 3,
		name: 'Visit the Statue of Liberty',
		image: 'https://source.unsplash.com/6bwHmDtpPfY/400x300',
		description:
			'See the iconic Statue of Liberty up close and learn about its history and significance as a symbol of freedom.',
		location: 'New York',
	},
];

const ListOfActivities = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				},
			},
		],
	};
	return (
		<div className="container">
			<h2 className="text-2xl font-bold mb-4">Popular Activities</h2>

			<Slider {...settings}>
				{activities.map((activity) => (
					<div
						key={activity.id}
						className="bg-white rounded-lg shadow-md overflow-hidden px-4 h-[400px]"
					>
						<img
							src={activity.image}
							alt={activity.name}
							className="h-48 w-full object-cover"
						/>
						<div className="p-4">
							<h3 className="text-xl font-semibold mb-2">
								{activity.name}
							</h3>
							<p className="text-gray-700">
								{activity.description}
							</p>
							<p className="text-gray-600 text-sm mt-2">
								{activity.location}
							</p>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default ListOfActivities;
