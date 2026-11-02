import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";

import siteData from "./data/siteData";

import FloatingContactButtons from "./components/FloatingContactButtons";
import Footer from "./components/Footer";
import OfferPopup from "./components/OfferPopup";

export default function App() {
  return (
    <BrowserRouter>
      <Header
        brand={siteData.brand}
        navigation={siteData.navigation}
      />

      <OfferPopup />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 fallback */}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />

      <FloatingContactButtons />
    </BrowserRouter>
  );
}