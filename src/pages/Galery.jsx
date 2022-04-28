import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pictures from "../components/Pictures";
import {Helmet} from "react-helmet-async";

function Galery() {
    return (
        <div>
            <Helmet>
                <title>Galerie Charles Cantin - Photographe</title>
                <meta name="description"
                      content="Charles Cantin, photographe à Groland de coté, et sur toute la Présipauté, tout les instants de votre vie, grossesse, naissance, bébés, enfants, famille, mariage,... "/>
                <link rel="canonical" href="/galerie" />
            </Helmet>


            <Pictures/>
            <Header/>
            <Footer/>
        </div>
    );
}

export default Galery;