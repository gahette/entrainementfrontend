import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/galerie" element={<Gallery/>}/>
            <Route path="/tarifs&prestations" element={<Pricing/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Home/>}/>
        </Routes>

    );
}
