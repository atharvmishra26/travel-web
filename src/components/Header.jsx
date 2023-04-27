import Link from 'next/link';
import { Oswald } from 'next/font/google';

const oswaldFont = Oswald({
	weight: '400',
	subsets: ['latin'],
});

const Header = () => {
	return (
		<nav className="bg-white shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link href="/">
							<p
								className={`font-bold text-center text-3xl ${oswaldFont.className}`}
							>
								Explore INDIA
							</p>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
