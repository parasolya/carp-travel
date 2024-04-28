import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import About from './components/layout/About';
import Services from './components/layout/Services';
import Career from './components/layout/Career';
import Gallery from './components/layout/Gallery';
import ContactUs from './components/layout/ContactUs';

import Carus from './components/layout/Carus';

export default function Home() {
  return (
    <>
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
