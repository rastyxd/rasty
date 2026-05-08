import { Link } from "react-router";
import logo from "../assets/logo.png";
import "./Home.css";
export default function Home() {
  const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav__brand">
          <img className="nav__logo" src={logo} alt="R" />
          <span className="nav__name">Rasty</span>
        </div>
        <ul className="nav__links">
          <li>
            <a className="nav__link" href="#work" onClick={scrollTo("work")}>
              Work
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#services"
              onClick={scrollTo("services")}
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#contact"
              onClick={scrollTo("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <h1 className="hero__title">
          <h1 className="hero__title">
            Build a Masterpiece,
            <br />
            Keep your competitors
            <br />
            up at night.
          </h1>
        </h1>
        <p className="hero__subtitle">
          Built from scratch, shipped fast, and made to mean something.
        </p>
        <div className="hero__actions">
          <a
            className="btn btn--secondary"
            href="#work"
            onClick={scrollTo("work")}
          >
            See my work
          </a>
          <a
            className="btn btn--primary"
            href="#contact"
            onClick={scrollTo("contact")}
          >
            Get a website
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2 className="section__title">About</h2>
        <div className="about__content">
          <p className="about__text">
            I'm Rasty — a self-taught full stack developer with over 5 years of
            experience building for the web. No bootcamp, no degree. Just
            curiosity, a lot of broken builds, and an obsession with getting
            things right.
          </p>
          <p className="about__text">
            I work across the full stack — from interfaces people actually enjoy
            using, to the backend logic that keeps everything running. Fast
            turnarounds, clean code, no hand-holding required.
          </p>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="work">
        <h2 className="section__title">Work</h2>
        <div className="work__grid">
          <article className="project">
            <div className="project__meta">
              <span className="project__category">
                Game Microsite (unsponsored)
              </span>

              <span className="project__year">2025</span>
            </div>
            <h3 className="project__title">GAME STUDIO</h3>
            <p className="project__description">
              Microsite for One Lion RP — an open-world multiplayer game.
              Includes a download hub, game library, system requirements, about
              page, and links to the community. Built in under a week.
            </p>
            <div className="project__tags">
              <span className="tag">React</span>
              <span className="tag">Animation</span>
              <span className="tag">UI/UX</span>
            </div>
            <Link
              className="project__link"
              to="https://onelion.rasty.uk"
              target="_blank"
              rel="noreferrer"
            >
              Visit site
            </Link>
          </article>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <h2 className="section__title">Services</h2>
        <p className="services__intro">
          Every project is built from scratch — you own every pixel, every
          detail.
        </p>
        <div className="services__grid">
          <article className="plan">
            <h3 className="plan__title">Starter</h3>
            <p className="plan__tagline">
              You don't exist online. Let's fix that.
            </p>
            <p className="plan__delivery">Live in 5 days</p>
            <ul className="plan__features">
              <li className="plan__feature">4 pages</li>
              <li className="plan__feature">Mobile-friendly</li>
              <li className="plan__feature">Custom design</li>
              <li className="plan__feature">2 rounds of revisions</li>
              <li className="plan__feature">Domain setup</li>
            </ul>
            <a
              className="btn btn--primary"
              href="#contact"
              onClick={scrollTo("contact")}
            >
              Start a project
            </a>
          </article>

          <article className="plan plan--featured">
            <h3 className="plan__title">Business</h3>
            <p className="plan__tagline">Looks good. Works harder.</p>
            <p className="plan__delivery">Live in 10 days</p>
            <ul className="plan__features">
              <li className="plan__feature">Full website</li>
              <li className="plan__feature">Social media kit</li>
              <li className="plan__feature">Google Business setup</li>
              <li className="plan__feature">Brand colors and fonts</li>
              <li className="plan__feature">3 rounds of revisions</li>
            </ul>
            <a
              className="btn btn--primary"
              href="#contact"
              onClick={scrollTo("contact")}
            >
              Let's build it
            </a>
          </article>

          <article className="plan">
            <h3 className="plan__title">Premium</h3>
            <p className="plan__tagline">
              Built to last. Maintained to perform.
            </p>
            <p className="plan__delivery">2 to 3 weeks</p>
            <ul className="plan__features">
              <li className="plan__feature">Everything in Business</li>
              <li className="plan__feature">Monthly maintenance</li>
              <li className="plan__feature">Performance optimization</li>
              <li className="plan__feature">Ongoing support</li>
            </ul>
            <a
              className="btn btn--primary"
              href="#contact"
              onClick={scrollTo("contact")}
            >
              Get in touch
            </a>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2 className="section__title">Let's work together</h2>
        <p className="contact__subtitle">
          Have a project in mind? Reach out and let's talk.
        </p>
        <div className="contact__links">
          <Link
            className="contact__link contact__link--whatsapp"
            target="_blank"
            rel="noreferrer"
            to="https://wa.me/+9647708659163"
          >
            WhatsApp
          </Link>
          <Link
            className="contact__link contact__link--email"
            target="_blank"
            rel="noreferrer"
            to="https://mail.google.com/mail/?view=cm&to=rastyxdofficial@gmail.com"
          >
            Email
          </Link>
          <Link
            className="contact__link contact__link--instagram"
            target="_blank"
            rel="noreferrer"
            to="https://www.instagram.com/rasty_s4rdar"
          >
            Instagram
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      {/* FOOTER */}
      <footer className="footer">
        <p className="footer__copy">© 2026 Rasty — All rights reserved</p>
        <p className="footer__note">
          No templates were harmed in the making of this site.
        </p>
        <p className="footer__domain">rasty.uk</p>
      </footer>
    </>
  );
}
