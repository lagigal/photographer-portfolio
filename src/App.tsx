import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.scss';

import Home from './pages/Home';
// import Portfolio from './pages/Portfolio';
// import PortfolioVisual from './pages/PortfolioVisual';
// import PortfolioPhoto from './pages/PortfolioPhoto';
import Services from './pages/Services';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/visual" element={<PortfolioVisual />} />
        <Route path="/portfolio/mobile" element={<PortfolioPhoto />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;