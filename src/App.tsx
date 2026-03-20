import { useRef } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Products from "./components/Products";
import About from "./components/About";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const productsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Nav
        onProducts={() => scrollTo(productsRef)}
        onAbout={() => scrollTo(aboutRef)}
        onContact={() => scrollTo(contactRef)}
      />
      <main>
        <Hero />
        <Ticker />
        <hr
          style={{ border: "none", borderTop: "1px solid #E5E7EB", margin: 0 }}
        />
        <div ref={productsRef}>
          <Products />
        </div>
        <hr
          style={{ border: "none", borderTop: "1px solid #E5E7EB", margin: 0 }}
        />
        <div ref={aboutRef}>
          <About />
        </div>
        <hr
          style={{ border: "none", borderTop: "1px solid #E5E7EB", margin: 0 }}
        />
        <CTA />
        <hr
          style={{ border: "none", borderTop: "1px solid #E5E7EB", margin: 0 }}
        />
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
