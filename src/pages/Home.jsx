import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePicture from "../components/HomePicture";
import {Helmet} from "react-helmet-async";

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Accueil Charles Cantin - Photographe</title>
                <meta name="description"
                      content="Charles Cantin, photographe à Groland de coté, et sur toute la Présipauté, tout les instants de votre vie, grossesse, naissance, bébés, enfants, famille, mariage,... "/>
                <link rel="canonical" href="/" />
            </Helmet>


            <HomePicture/>
            <Header/>
            <Footer/>
        </div>
    )
        ;
}
