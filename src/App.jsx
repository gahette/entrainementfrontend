import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Galery from "./pages/Galery";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Legacy from "./pages/Legacy";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/galerie" element={<Galery/>}/>
                <Route path="/tarifs&prestations" element={<Pricing/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<Home/>}/>
                <Route path="/mentionslegales" element={<Legacy/>}/>
            </Routes>
        </BrowserRouter>

    );
}
