import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeComponent from "../components/Home";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>MarieBarbéDiet</title>
            </Head>
            <HomeComponent />
        </div>
    );
};

export default Home;
