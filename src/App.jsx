import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Component/Common-Component/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import FAQ from "./Pages/FAQ";
import Footer from "./Component/Common-Component/Footer";
import Product from "./Pages/Product";
import FixedNav from "./Component/Common-Component/FixedNav";
import ScrollToTop from './Component/Common-Component/ScrollToTop';
import WishList from "./Pages/WishList";
import Admin from "./Pages/Admin";




function App() {
    return (
        <div>

     
                <BrowserRouter>
                    <ScrollToTop />
                    <Nav />
                    <FixedNav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Shop" element={<Shop />} />
                        <Route path="/FAQs" element={<FAQ />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/Product/:id" element={<Product />} />
                        <Route path="/WishList/:idd" element={<WishList />} />
                        <Route path="/Admin/" element={<Admin />} />

                    </Routes>
                    <Footer />
                </BrowserRouter>
           
        </div>
    );
}

export default App;
