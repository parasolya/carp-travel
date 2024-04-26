
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import About from './components/layout/About';
import Services from './components/layout/Services';
import Career from './components/layout/Career';
import Gallery from './components/layout/Gallery';
import ContactUs from './components/layout/ContactUs';
import Slider from './components/layout/Slider';
import Carus from './components/layout/Carus';


export default function Home() {
  return (
    <
      //  className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <Header />
      <Hero />
      <About />
      <Services />
      <Career />
      <Gallery />
      <ContactUs />
      <Carus />
    </>
  );
}
