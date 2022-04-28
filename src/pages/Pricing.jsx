import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card"
import {Helmet} from "react-helmet-async";

function Pricing() {
    return (
        <div>
            <Helmet>
                <title>Tarifs et prestations Charles Cantin - Photographe</title>
                <meta name="description"
                      content="Charles Cantin, photographe à Groland de coté, et sur toute la Présipauté, tout les instants de votre vie, grossesse, naissance, bébés, enfants, famille, mariage,... "/>
                <link rel="canonical" href="/tarifs&prestations" />
            </Helmet>

            <Card/>
            <Header/>
            <Footer/>
        </div>
    );
}

export default Pricing;