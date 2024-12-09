import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.scss';

import Home from './pages/Home';
// import Portfolio from './pages/Portfolio';
// import PortfolioVisual from './pages/PortfolioVisual';
// import PortfolioPhoto from './pages/PortfolioPhoto';
import Services from './pages/Services';
import About from './pages/About';
import PortfolioPhoto from './pages/PortfolioPhoto';
import { Gallery } from './components/Gallery';

import anastasiyaImages from "./Photos/anastasia.ts";
import elizabethImages from "./Photos/elizabeth.ts";
import dmitryImages from "./Photos/dima.ts";
import emineImages from "./Photos/emine.ts"
import jewelryBrandImages from "./Photos/jewelry-brand.ts";
import TatianaMedia from "./Photos/tatiana.ts";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/visual" element={<PortfolioVisual />} />*/}
        <Route path="/portfolio/mobile" element={<PortfolioPhoto />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path='/anastasia' element={<Gallery images={anastasiyaImages}/> }/>
        <Route path='/elizabeth' element={<Gallery images={elizabethImages.photos} videos={elizabethImages.videos}/> }/>
        <Route path='/dmitry' element={<Gallery images={dmitryImages}/> }/>
        <Route path='/emine' element={<Gallery images={emineImages.photos} videos={emineImages.videos}/> }/>
        <Route path='/jewelryBrand' element={<Gallery images={jewelryBrandImages}/> }/>
        <Route path='/tatiana' element={<Gallery videos={TatianaMedia.videos}/> }/>
      </Routes>
    </>
  );
};

export default App;