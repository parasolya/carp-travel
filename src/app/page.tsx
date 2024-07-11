import Header from './Header';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Career from '../sections/Career';
import Gallery from '../sections/Gallery';
import ContactUs from '../sections/ContactUs';

export default function Home() {
  return (
    <>     
      <Hero />
      <About />
      <Services />
      <Career />
      <Gallery />
      <ContactUs />
    </>
  );
}
