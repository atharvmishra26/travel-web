// Next
import { useRouter } from 'next/router';
import Head from 'next/head';

// Components
import Header from '@/components/Header';
import ListOfActivities from '@/components/ListOfActivities';

const SingleStatePage = () => {
    const router = useRouter();
    const name = router.query.name || '';

    return (
        <>
            <Head>
                <title>{name.toUpperCase()} - Explore India</title>
                <meta name="description" content="Welcome to Explore USA! Discover the best places to visit, the most delicious foods to try, and the unique specials of each state in the United States." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <Header />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <h1 className="text-4xl text-center font-bold text-gray-800 py-6">
                        Explore the {" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                            {name.charAt(0).toUpperCase() + name.slice(1)}
                        </span>
                    </h1>
                    <div>
                        <header className="bg-white py-4 px-8">
                            <p className="text-lg text-gray-600 text-justify">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima nisi voluptatibus excepturi optio veritatis repellendus commodi autem perspiciatis doloribus natus accusamus reprehenderit laboriosam, aliquid a iure distinctio consectetur eius quam tempore est suscipit necessitatibus. Officiis vitae cumque voluptatem quisquam sed nobis, rem, praesentium inventore ullam soluta asperiores! Excepturi a consectetur et modi earum! Quam nesciunt odit dicta aliquam nihil ducimus tenetur sed pariatur hic perspiciatis. Temporibus voluptatem sunt quis unde suscipit? Iste voluptas incidunt tempore adipisci, aperiam earum corporis, porro repellendus tenetur molestiae, fugiat quia veniam nulla minima rem cum rerum! Illo dignissimos architecto voluptatem, aut quis voluptatum neque quo.
                            </p>
                        </header>
                        <div className="md:flex mx-auto md:flex-row md:justify-center md:items-center py-4 px-8">
                            <img
                                className="md:w-1/2 md:mr-8 rounded-lg"
                                src='https://static01.nyt.com/images/2022/07/27/opinion/27kaiserschatzlein-9/merlin_210625494_5318b712-c310-479d-b1b8-b6d972dfa454-mobileMasterAt3x.jpg'
                                alt={`Image of Albama`}
                            />

                            <div className="mt-0 md:w-1/2">
                                <p className="text-lg text-gray-600 text-justify">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum beatae ex cum amet laudantium omnis? Deserunt, a. Consequatur nobis sint earum tempora deleniti non blanditiis quidem, corporis ipsa ducimus qui magni ex inventore dolores commodi officia facere quia libero voluptates quae corrupti et. Magni at eos nulla aspernatur, ipsa voluptatibus eius temporibus ratione et! Neque temporibus eius culpa numquam veritatis a optio repudiandae. Earum vitae quis velit commodi eos? Explicabo iure reiciendis illum. Explicabo accusamus hic quasi. Fugiat, iusto nobis? Facilis eius, amet, sunt quos placeat esse repellendus magnam consequatur natus dolorem nisi hic. Neque a beatae consequatur fugiat placeat doloremque ea rerum quaerat. Commodi laboriosam praesentium tempore voluptate explicabo sit suscipit, facilis dolores quis nam debitis fugit pariatur laborum nesciunt labore! Rem, ad!
                                </p>
                            </div>
                        </div>
                        <section className="bg-white p-8">
                            <ListOfActivities />
                        </section>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SingleStatePage;