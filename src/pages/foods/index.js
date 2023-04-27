import Head from 'next/head';

// Components
import Header from '@/components/Header';

const FoodPage = () => {
    return (
        <>
            <Head>
                <title>Famous Foods - Explore India</title>
                <meta name="description" content="Welcome to Explore USA! Discover the best places to visit, the most delicious foods to try, and the unique specials of each state in the United States." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <>
                <Header />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <h1 className="text-4xl  text-center font-bold text-gray-800 py-6">
                        Explore the {" "}
                        <span className="text-transparent uppercase bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                            Famous Foods
                        </span>
                    </h1>
                </div>
            </>

        </>
    );
};

export default FoodPage;;;