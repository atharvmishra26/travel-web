// Next
import Head from 'next/head';

// React
import { useState } from 'react';

// Data
import states from '@/data/statesData.json';

// Components
import Header from '@/components/Header';
import StateCard from '@/components/StateCard';

export default function StatesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searched, setSearched] = useState(false);

    const handleSearch = () => {
        setSearched(searchTerm);
        const results = states.filter((state) =>
            state.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <Head>
                <title>STATES - Explore India</title>
                <meta name="description" content="Welcome to Explore USA! Discover the best places to visit, the most delicious foods to try, and the unique specials of each state in the United States." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <>
                <Header />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <h1 className="text-4xl  text-center font-bold text-gray-800 py-6">
                        Explore the {" "}
                        <span className="text-transparent uppercase bg-clip-text bg-gradient-to-r from-orange-600 to-green-600">
                            India






















                        </span>
                    </h1>
                    <div className='flex gap-1 mb-10'>
                        <input
                            type="text"
                            placeholder="Search for a state"
                            className="block w-full py-2 pl-10 pr-3 leading-5 rounded-full bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ring-transparent"
                            onChange={handleInputChange}
                        />
                        <button
                            className="relative inline-flex items-center justify-center overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 px-12 py-3 "
                            onClick={handleSearch}
                        >
                            <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-orange-600  to-green-700"></span>
                            <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-600 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                            <span className='relative text-white'>
                                Search
                            </span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
                        {searchResults.length > 0
                            ? searchResults.map((state, idx) => (
                                <StateCard key={idx} state={state} />
                            ))
                            : states.map((state, idx) => (
                                <StateCard key={idx} state={state} />
                            ))}
                    </div>
                </div>
            </>

        </>
    );
}
