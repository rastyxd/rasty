import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

 
interface NavProps {
  onProducts: () => void;
  onAbout: () => void;
  onContact: () => void;
}

export default function Nav({ onProducts, onAbout, onContact }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: "Products", onClick: () => { onProducts(); setMobileMenuOpen(false); } },
    { label: "About", onClick: () => { onAbout(); setMobileMenuOpen(false); } },
    { label: "Contact", onClick: () => { onContact(); setMobileMenuOpen(false); } },
  ];

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "clamp(16px, 4vw, 32px)",
          paddingRight: "clamp(16px, 4vw, 32px)",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid #E5E7EB" : "none",
          boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
          transition: "border-color 0.3s, box-shadow 0.3s",
        }}
      >
        <Link
          to="#"
          style={{
            fontSize: "clamp(14px, 3vw, 16px)",
            fontWeight: 900,
            color: "#0A0A0A",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          Rasty
        </Link>

        {/* Desktop Tabs */}
        <div className="nav-desktop">
          <Tabs style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {links.map((l) => (
              <Tab
                key={l.label}
                onClick={l.onClick}
                label={l.label}
                sx={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#6B7280",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  fontFamily: "inherit",
                  textTransform: "none",
                  minWidth: "unset",
                  "&:hover": {
                    background: "#F8F7FF",
                    color: "#0A0A0A",
                  },
                }}
              />
            ))}
          </Tabs>
        </div>

        {/* Desktop CTA */}
        <a
          href="#products"
          style={{
            fontSize: "clamp(11px, 2vw, 13px)",
            fontWeight: 600,
            color: "#fff",
            background: "#7C3AED",
            padding: "8px 16px",
            borderRadius: 8,
            textDecoration: "none",
          }}
          className="nav-desktop"
        >
          See our apps
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            color: "#0A0A0A",
            padding: "4px",
          }}
          className="nav-mobile"
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 60,
              left: 0,
              right: 0,
              background: "rgba(255,255,255,0.98)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid #E5E7EB",
              zIndex: 40,
              paddingTop: 12,
              paddingBottom: 12,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "0 16px" }}>
              {links.map((l) => (
                <button
                  key={l.label}
                  onClick={l.onClick}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "12px 16px",
                    background: "transparent",
                    border: "none",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#6B7280",
                    cursor: "pointer",
                    borderRadius: 8,
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#F8F7FF";
                    e.currentTarget.style.color = "#0A0A0A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#6B7280";
                  }}
                >
                  {l.label}
                </button>
              ))}
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  marginTop: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#fff",
                  background: "#7C3AED",
                  padding: "12px 16px",
                  borderRadius: 8,
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                See our apps
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
