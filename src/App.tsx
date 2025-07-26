import React, { Suspense, lazy, useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.scss';

import ScrollToTop from './components/ScrollToTop.tsx';
import Spinner from './components/Spinner';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const PortfolioPhoto = lazy(() => import('./pages/PortfolioPhoto'));
const PortfolioReels = lazy(() => import('./pages/PortfolioReels'));
const PortfolioVisual = lazy(() => import('./pages/PortfolioVisual'));
const Gallery = lazy(() => import('./components/Gallery'));

const GalleryLoader: React.FC<{ dataPath: string }> = ({ dataPath }) => {
  const [media, setMedia] = useState<{ images?: any[]; videos?: any[] } | null>(null);

  useEffect(() => {
    let isMounted = true;
    const loadMedia = async () => {
      try {
        const module = await import(`${dataPath}`);

        if (isMounted) {
          setMedia({
            images: module.default.photos,
            videos: module.default.videos,
          });
        }
      } catch (error) {
        console.error('Failed to load gallery data:', error);
        if (isMounted) setMedia({ images: [], videos: [] });
      }
    };

    loadMedia();

    return () => {
      isMounted = false;
    };
  }, [dataPath]);

  if (!media) {
    return <Spinner />;
  }

  return <Gallery images={media.images} videos={media.videos} />;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Spinner />}>
        <Routes>
          {/* Основные страницы */}
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/visual" element={<PortfolioVisual />} />
          <Route path="/portfolio/mobile" element={<PortfolioPhoto />} />
          <Route path="/portfolio/reels" element={<PortfolioReels />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />

          {/* Галереи с фото и/или видео */}
          <Route path="/anastasia" element={<GalleryLoader dataPath="./Photos/anastasia.ts" />} />
          <Route path="/anastasia2" element={<GalleryLoader dataPath="./Photos/anastasia2.ts" />} />
          <Route path="/elizabeth" element={<GalleryLoader dataPath="./Photos/elizabeth.ts" />} />
          <Route path="/dmitry" element={<GalleryLoader dataPath="./Photos/dima.ts" />} />
          <Route path="/emine" element={<GalleryLoader dataPath="./Photos/emine.ts" />} />
          <Route path="/jewelryBrand" element={<GalleryLoader dataPath="./Photos/jewelry-brand.ts" />} />
          <Route path="/tatiana" element={<GalleryLoader dataPath="./Photos/tatiana.ts" />} />
          <Route path="/cosmetology" element={<GalleryLoader dataPath="./Photos/cosmetology.ts" />} />
          <Route path="/ekaterina" element={<GalleryLoader dataPath="./Photos/сatherine.ts" />} />
          <Route path="/lina" element={<GalleryLoader dataPath="./Photos/lina.ts" />} />

          {/* Галереи с Reels */}
          <Route path="/my-self" element={<GalleryLoader dataPath="./Reels/my-self.ts" />} />
          <Route path="/filtih" element={<GalleryLoader dataPath="./Reels/filtih.ts" />} />
          <Route path="/sansusi" element={<GalleryLoader dataPath="./Reels/sansusi.ts" />} />
          <Route path="/kedi-myasoeda" element={<GalleryLoader dataPath="./Reels/kedi-myasoeda.ts" />} />
          <Route path="/ambroperfume" element={<GalleryLoader dataPath="./Reels/ambroperfume.ts" />} />

          {/* Галереи с кейсами (Visual) */}
          <Route path="/case1" element={<GalleryLoader dataPath="./Visual/case1.ts" />} />
          <Route path="/case2" element={<GalleryLoader dataPath="./Visual/case2.ts" />} />
          <Route path="/case3" element={<GalleryLoader dataPath="./Visual/case3.ts" />} />
          <Route path="/case4" element={<GalleryLoader dataPath="./Visual/case4.ts" />} />
          <Route path="/case5" element={<GalleryLoader dataPath="./Visual/case5.ts" />} />
          <Route path="/case6" element={<GalleryLoader dataPath="./Visual/case6.ts" />} />
          <Route path="/case7" element={<GalleryLoader dataPath="./Visual/case7.ts" />} />
          <Route path="/case8" element={<GalleryLoader dataPath="./Visual/case8.ts" />} />
          <Route path="/case9" element={<GalleryLoader dataPath="./Visual/case9.ts" />} />
          <Route path="/case10" element={<GalleryLoader dataPath="./Visual/case10.ts" />} />
          <Route path="/case11" element={<GalleryLoader dataPath="./Visual/case11.ts" />} />
          <Route path="/case12" element={<GalleryLoader dataPath="./Visual/case12.ts" />} />
          <Route path="/case13" element={<GalleryLoader dataPath="./Visual/case13.ts" />} />
          <Route path="/case14" element={<GalleryLoader dataPath="./Visual/case14.ts" />} />
          <Route path="/case15" element={<GalleryLoader dataPath="./Visual/case15.ts" />} />
          <Route path="/case16" element={<GalleryLoader dataPath="./Visual/case16.ts" />} />
          <Route path="/case17" element={<GalleryLoader dataPath="./Visual/case17.ts" />} />
          <Route path="/case18" element={<GalleryLoader dataPath="./Visual/case18.ts" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
