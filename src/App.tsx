import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CVSection from './components/CVSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <HeroSection />
        <CVSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
