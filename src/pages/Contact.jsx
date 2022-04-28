import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form"
import {Helmet} from "react-helmet-async";

function Contact() {
    return (
        <div>
            <Helmet>
                <title>Contact Charles Cantin - Photographe</title>
                <meta name="description"
                      content="Charles Cantin, photographe à Groland de coté, et sur toute la Présipauté, tout les instants de votre vie, grossesse, naissance, bébés, enfants, famille, mariage,... "/>
                <link rel="canonical" href="/contact" />
            </Helmet>

            <Form/>
            <Header/>
            <Footer/>
        </div>
    );
}

export default Contact;