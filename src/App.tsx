import "./styles/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//          <Route path="/portfolio/visual" element={<PortfolioVisual />} />
//          <Route path="/portfolio/mobile" element={<PortfolioPhoto />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// };

export default App;
