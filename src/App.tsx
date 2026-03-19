import Nav      from './components/Nav';
import Hero     from './components/Hero';
import Ticker   from './components/Ticker';
import Products from './components/Products';
import About    from './components/About';
import CTA      from './components/CTA';
import Footer   from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <hr style={{ border: 'none', borderTop: '1px solid #E5E7EB', margin: 0 }} />
        <Products />
        <hr style={{ border: 'none', borderTop: '1px solid #E5E7EB', margin: 0 }} />
        <About />
        <hr style={{ border: 'none', borderTop: '1px solid #E5E7EB', margin: 0 }} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
