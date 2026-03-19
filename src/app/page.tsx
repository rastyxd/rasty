import Nav      from '@/components/Nav';
import Hero     from '@/components/Hero';
import Ticker   from '@/components/Ticker';
import Products from '@/components/Products';
import About    from '@/components/About';
import CTA      from '@/components/CTA';
import Footer   from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <hr className="r-divider" />
        <Products />
        <hr className="r-divider" />
        <About />
        <hr className="r-divider" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
