import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.scss';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import PortfolioPhoto from './pages/PortfolioPhoto';
import PortfolioReels from './pages/PortfolioReels.tsx';
import PortfolioVisual from './pages/PortfolioVisual.tsx';
import { Gallery } from './components/Gallery';
import ScrollToTop from './components/ScrollToTop.tsx';

import anastasiyaImages from "./Photos/anastasia.ts";
import anastasiyaImages2 from "./Photos/anastasia2.ts";
import elizabethImages from "./Photos/elizabeth.ts";
import dmitryImages from "./Photos/dima.ts";
import emineImages from "./Photos/emine.ts";
import jewelryBrandImages from "./Photos/jewelry-brand.ts";
import TatianaMedia from "./Photos/tatiana.ts";
import cosmetology from './Photos/cosmetology.ts';
import ekaterina from './Photos/сatherine.ts';

import mySelfReels from "./Reels/my-self.ts";
import filtihReels from "./Reels/filtih.ts";

import case1 from "./Visual/case1.ts";
import case2 from "./Visual/case2.ts";
import case3 from "./Visual/case3.ts";
import case4 from "./Visual/case4.ts";
import case5 from "./Visual/case5.ts";
import case6 from "./Visual/case6.ts";
import case7 from "./Visual/case7.ts";
import case8 from "./Visual/case8.ts";
import case9 from "./Visual/case9.ts";
import case10 from "./Visual/case10.ts";
import case11 from "./Visual/case11.ts";
import case12 from "./Visual/case12.ts";
import case13 from "./Visual/case13.ts";
import case14 from "./Visual/case14.ts";
import case15 from "./Visual/case15.ts";
import case16 from "./Visual/case16.ts";


const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/visual" element={<PortfolioVisual />} />
        <Route path="/portfolio/mobile" element={<PortfolioPhoto />} /> 
        <Route path="/portfolio/reels" element={<PortfolioReels/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />

        <Route path='/anastasia' element={<Gallery images={anastasiyaImages}/> }/>
        <Route path='/anastasia2' element={<Gallery images={anastasiyaImages2.photos} videos={anastasiyaImages2.videos}/> }/>
        <Route path='/elizabeth' element={<Gallery images={elizabethImages.photos} videos={elizabethImages.videos}/> }/>
        <Route path='/dmitry' element={<Gallery images={dmitryImages}/> }/>
        <Route path='/emine' element={<Gallery images={emineImages.photos} videos={emineImages.videos}/> }/>
        <Route path='/jewelryBrand' element={<Gallery images={jewelryBrandImages}/> }/>
        <Route path='/tatiana' element={<Gallery videos={TatianaMedia.videos}/> }/>
        <Route path='/cosmetology' element={<Gallery images={cosmetology.photos} videos={cosmetology.videos}/> }/>
        <Route path='/ekaterina' element={<Gallery images={ekaterina.photos} videos={ekaterina.videos}/> }/>

        <Route path='/my-self' element={<Gallery videos={mySelfReels}/>}/>
        <Route path='/filtih' element={<Gallery videos={filtihReels}/>}/>

        <Route path='/case1' element={<Gallery images={case1}/>}/>
        <Route path='/case2' element={<Gallery images={case2}/>}/>
        <Route path='/case3' element={<Gallery images={case3}/>}/>
        <Route path='/case4' element={<Gallery images={case4}/>}/>
        <Route path='/case5' element={<Gallery images={case5}/>}/>
        <Route path='/case6' element={<Gallery images={case6}/>}/>
        <Route path='/case7' element={<Gallery images={case7}/>}/>
        <Route path='/case8' element={<Gallery images={case8}/>}/>
        <Route path='/case9' element={<Gallery images={case9}/>}/>
        <Route path='/case10' element={<Gallery images={case10}/>}/>
        <Route path='/case11' element={<Gallery images={case11}/>}/>
        <Route path='/case12' element={<Gallery images={case12}/>}/>
        <Route path='/case13' element={<Gallery images={case13}/>}/>
        <Route path='/case14' element={<Gallery images={case14}/>}/>
        <Route path='/case15' element={<Gallery images={case15}/>}/>
        <Route path='/case16' element={<Gallery images={case16}/>}/>
      </Routes>
    </Router>
  );
};

export default App;
