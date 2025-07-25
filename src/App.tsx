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

type DataType = 'photos-only' | 'videos-only' | 'mixed';

interface GalleryLoaderProps {
  dataPath: string;
  dataType: DataType;
}

const GalleryLoader: React.FC<GalleryLoaderProps> = ({ dataPath, dataType }) => {
  const [media, setMedia] = useState<{ images?: any[]; videos?: any[] } | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadMedia = async () => {
      try {
        const module = await import(`${dataPath}`);
        if (isMounted) {
          switch (dataType) {
            case 'photos-only':
              setMedia({ images: module.default });
              break;
            case 'videos-only':
              setMedia({ videos: module.default });
              break;
            case 'mixed':
              setMedia({ images: module.default.photos, videos: module.default.videos });
              break;
          }
        }
      } catch (error) {
        console.error("Failed to load gallery data:", error);
        if (isMounted) setMedia({ images: [], videos: [] });
      }
    };

    loadMedia();
    
    return () => {
      isMounted = false;
    };
  }, [dataPath, dataType]);

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
          <Route path='/anastasia' element={<GalleryLoader dataPath='./Photos/anastasia.ts' dataType='photos-only' />} />
          <Route path='/anastasia2' element={<GalleryLoader dataPath='./Photos/anastasia2.ts' dataType='mixed' />} />
          <Route path='/elizabeth' element={<GalleryLoader dataPath='./Photos/elizabeth.ts' dataType='mixed' />} />
          <Route path='/dmitry' element={<GalleryLoader dataPath='./Photos/dima.ts' dataType='photos-only' />} />
          <Route path='/emine' element={<GalleryLoader dataPath='./Photos/emine.ts' dataType='mixed' />} />
          <Route path='/jewelryBrand' element={<GalleryLoader dataPath='./Photos/jewelry-brand.ts' dataType='photos-only' />} />
          <Route path='/tatiana' element={<GalleryLoader dataPath='./Photos/tatiana.ts' dataType='videos-only' />} />
          <Route path='/cosmetology' element={<GalleryLoader dataPath='./Photos/cosmetology.ts' dataType='mixed' />} />
          <Route path='/ekaterina' element={<GalleryLoader dataPath='./Photos/сatherine.ts' dataType='mixed' />} />
          <Route path='/lina' element={<GalleryLoader dataPath='./Photos/lina.ts' dataType='photos-only' />} />

          {/* Галереи с Reels */}
          <Route path='/my-self' element={<GalleryLoader dataPath='./Reels/my-self.ts' dataType='videos-only' />} />
          <Route path='/filtih' element={<GalleryLoader dataPath='./Reels/filtih.ts' dataType='videos-only' />} />
          <Route path='/sansusi' element={<GalleryLoader dataPath='./Reels/sansusi.ts' dataType='videos-only' />} />
          <Route path='/kedi-myasoeda' element={<GalleryLoader dataPath='./Reels/kedi-myasoeda.ts' dataType='videos-only' />} />
          <Route path='/ambroperfume' element={<GalleryLoader dataPath='./Reels/ambroperfume.ts' dataType='videos-only' />} />

          {/* Галереи с кейсами (Visual) */}
          <Route path='/case1' element={<GalleryLoader dataPath='./Visual/case1.ts' dataType='photos-only' />} />
          <Route path='/case2' element={<GalleryLoader dataPath='./Visual/case2.ts' dataType='photos-only' />} />
          <Route path='/case3' element={<GalleryLoader dataPath='./Visual/case3.ts' dataType='photos-only' />} />
          <Route path='/case4' element={<GalleryLoader dataPath='./Visual/case4.ts' dataType='photos-only' />} />
          <Route path='/case5' element={<GalleryLoader dataPath='./Visual/case5.ts' dataType='photos-only' />} />
          <Route path='/case6' element={<GalleryLoader dataPath='./Visual/case6.ts' dataType='photos-only' />} />
          <Route path='/case7' element={<GalleryLoader dataPath='./Visual/case7.ts' dataType='photos-only' />} />
          <Route path='/case8' element={<GalleryLoader dataPath='./Visual/case8.ts' dataType='photos-only' />} />
          <Route path='/case9' element={<GalleryLoader dataPath='./Visual/case9.ts' dataType='photos-only' />} />
          <Route path='/case10' element={<GalleryLoader dataPath='./Visual/case10.ts' dataType='photos-only' />} />
          <Route path='/case11' element={<GalleryLoader dataPath='./Visual/case11.ts' dataType='photos-only' />} />
          <Route path='/case12' element={<GalleryLoader dataPath='./Visual/case12.ts' dataType='photos-only' />} />
          <Route path='/case13' element={<GalleryLoader dataPath='./Visual/case13.ts' dataType='photos-only' />} />
          <Route path='/case14' element={<GalleryLoader dataPath='./Visual/case14.ts' dataType='photos-only' />} />
          <Route path='/case15' element={<GalleryLoader dataPath='./Visual/case15.ts' dataType='photos-only' />} />
          <Route path='/case16' element={<GalleryLoader dataPath='./Visual/case16.ts' dataType='photos-only' />} />
          <Route path='/case17' element={<GalleryLoader dataPath='./Visual/case17.ts' dataType='photos-only' />} />
          <Route path='/case18' element={<GalleryLoader dataPath='./Visual/case18.ts' dataType='photos-only' />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;