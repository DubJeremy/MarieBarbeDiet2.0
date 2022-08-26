import type { NextPage } from "next";

import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Program from "../components/Program";
import Summary from "../components/Summary";
import Services from "../components/Services";

import styles from "./main.module.scss";

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
            <div className={styles.main}>
                <div className={styles.sections}>
                    <Header />
                    <Summary />
                    {/* <Presentation /> */}
                    <Services />
                    <Program />
                    {/* <Faq /> */}
                    {/* <Contact /> */}
                    {/* <Footer /> */}
                </div>
            </div>
        </div>
    );
};

export default Home;
