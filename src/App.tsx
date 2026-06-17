import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/**
 * Re-keyed on the path so each page mounts fresh and plays a gentle fade-up.
 * It's a fade-IN only (never fades the old page out to a blank screen), and the
 * shell sits on black, so the page emerges from dark — no white flash.
 */
const AnimatedMain = () => {
  const { pathname } = useLocation();
  return (
    <main key={pathname} className="flex-1 animate-page-in">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Loader />
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-luxury-black">
        <Header />
        <AnimatedMain />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
