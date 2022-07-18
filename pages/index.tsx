import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Summary from "../components/Summary";
import Presentation from "../components/Presentation";
import Target from "../components/Target";
import Program from "../components/Program";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <link rel="shortcut icon" href="favicon.ico" />
                <meta
                    name="description"
                    content="Diététicienne, Atteignez vos objectifs avec un petit coup de pouce, Restez motivés.
                    Perte de poids, Réequilibrage alimentaire, Coaching minceur, grossesse, sportifs, adolescents, adultes."
                />
                <title>Marie Barbé Diet</title>
            </Head>

            <Header />
            <Summary />
            <Presentation />
            <Target />
            <Program />
            <Faq />
            <Footer />
        </div>
    );
};

export default Home;
