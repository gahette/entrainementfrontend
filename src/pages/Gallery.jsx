import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pictures from "../components/Pictures";

function Gallery() {
    return (
        <div>
            <Pictures/>
            <Header/>
            <Footer/>
        </div>
    );
}

export default Gallery;