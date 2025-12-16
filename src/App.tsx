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

const mediaModules = import.meta.glob('./(Photos|Reels|Visual)/*.ts');

interface GalleryLoaderProps {
  modulePath: string;
}

const GalleryLoader: React.FC<GalleryLoaderProps> = ({ modulePath }) => {
  const [media, setMedia] = useState<{ images?: any[]; videos?: any[] } | null>(null);

  const loadModule = mediaModules[modulePath];

  useEffect(() => {
    let isMounted = true;

    if (loadModule) {
      loadModule()
        .then((module: any) => {
          if (isMounted) {
            setMedia({
              images: module.default.photos,
              videos: module.default.videos,
            });
          }
        })
        .catch((error) => {
          console.error('Failed to load gallery module:', error);
          if (isMounted) setMedia({ images: [], videos: [] });
        });
    } else {
      console.error(`Module not found for path: ${modulePath}`);
    }

    return () => {
      isMounted = false;
    };
  }, [loadModule, modulePath]);

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
          <Route path="/anastasia" element={<GalleryLoader modulePath="./Photos/anastasia.ts" />} />
          <Route path="/anastasia2" element={<GalleryLoader modulePath="./Photos/anastasia2.ts" />} />
          <Route path="/elizabeth" element={<GalleryLoader modulePath="./Photos/elizabeth.ts" />} />
          <Route path="/dmitry" element={<GalleryLoader modulePath="./Photos/dima.ts" />} />
          <Route path="/emine" element={<GalleryLoader modulePath="./Photos/emine.ts" />} />
          <Route path="/jewelryBrand" element={<GalleryLoader modulePath="./Photos/jewelry-brand.ts" />} />
          <Route path="/tatiana" element={<GalleryLoader modulePath="./Photos/tatiana.ts" />} />
          <Route path="/cosmetology" element={<GalleryLoader modulePath="./Photos/cosmetology.ts" />} />
          <Route path="/ekaterina" element={<GalleryLoader modulePath="./Photos/сatherine.ts" />} />
          <Route path="/lina" element={<GalleryLoader modulePath="./Photos/lina.ts" />} />

          {/* Галереи с Reels */}
          <Route path="/my-self" element={<GalleryLoader modulePath="./Reels/my-self.ts" />} />
          <Route path="/filtih" element={<GalleryLoader modulePath="./Reels/filtih.ts" />} />
          <Route path="/sansusi" element={<GalleryLoader modulePath="./Reels/sansusi.ts" />} />
          <Route path="/kedi-myasoeda" element={<GalleryLoader modulePath="./Reels/kedi-myasoeda.ts" />} />
          <Route path="/ambroperfume" element={<GalleryLoader modulePath="./Reels/ambroperfume.ts" />} />
          <Route path="/forte-dei-mommy" element={<GalleryLoader modulePath="./Reels/forte-dei-mommy.ts" />} />
          <Route path="/gorky-village-540" element={<GalleryLoader modulePath="./Reels/gorky-village-540.ts" />} />
          <Route path="/more-prevention" element={<GalleryLoader modulePath="./Reels/more-prevention.ts" />} />
          <Route path="/ilios" element={<GalleryLoader modulePath="./Reels/ilios.ts" />} />
          <Route path="/lamont" element={<GalleryLoader modulePath="./Reels/lamont.ts" />} />
          <Route path="/love-stories" element={<GalleryLoader modulePath="./Reels/love-stories.ts" />} />
          <Route path="/original" element={<GalleryLoader modulePath="./Reels/original.ts" />} />
          <Route path="/posolstvo-sochi" element={<GalleryLoader modulePath="./Reels/posolstvo-sochi.ts" />} />
          <Route path="/agoy-park" element={<GalleryLoader modulePath="./Reels/agoy-park.ts" />} />
          <Route path="/tensegrity-pilates" element={<GalleryLoader modulePath="./Reels/tensegrity-pilates.ts" />} />

          {/* Галереи с кейсами (Visual) */}
          <Route path="/case1" element={<GalleryLoader modulePath="./Visual/case1.ts" />} />
          <Route path="/case2" element={<GalleryLoader modulePath="./Visual/case2.ts" />} />
          <Route path="/case3" element={<GalleryLoader modulePath="./Visual/case3.ts" />} />
          <Route path="/case4" element={<GalleryLoader modulePath="./Visual/case4.ts" />} />
          <Route path="/case5" element={<GalleryLoader modulePath="./Visual/case5.ts" />} />
          <Route path="/case6" element={<GalleryLoader modulePath="./Visual/case6.ts" />} />
          <Route path="/case7" element={<GalleryLoader modulePath="./Visual/case7.ts" />} />
          <Route path="/case8" element={<GalleryLoader modulePath="./Visual/case8.ts" />} />
          <Route path="/case9" element={<GalleryLoader modulePath="./Visual/case9.ts" />} />
          <Route path="/case10" element={<GalleryLoader modulePath="./Visual/case10.ts" />} />
          <Route path="/case11" element={<GalleryLoader modulePath="./Visual/case11.ts" />} />
          <Route path="/case12" element={<GalleryLoader modulePath="./Visual/case12.ts" />} />
          <Route path="/case13" element={<GalleryLoader modulePath="./Visual/case13.ts" />} />
          <Route path="/case14" element={<GalleryLoader modulePath="./Visual/case14.ts" />} />
          <Route path="/case15" element={<GalleryLoader modulePath="./Visual/case15.ts" />} />
          <Route path="/case16" element={<GalleryLoader modulePath="./Visual/case16.ts" />} />
          <Route path="/case17" element={<GalleryLoader modulePath="./Visual/case17.ts" />} />
          <Route path="/case18" element={<GalleryLoader modulePath="./Visual/case18.ts" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
