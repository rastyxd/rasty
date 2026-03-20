import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from "react-router";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

 
interface NavProps {
  onProducts: () => void;
  onAbout: () => void;
  onContact: () => void;
}

export default function Nav({ onProducts, onAbout, onContact }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const links = [
    { label: "Products", onClick: onProducts },
    { label: "About", onClick: onAbout },
    { label: "Contact", onClick: onContact },
  ];
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
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
        padding: "0 32px",
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
          fontSize: 16,
          fontWeight: 900,
          color: "#0A0A0A",
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        Rasty
      </Link>

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

      <a
        href="#products"
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "#fff",
          background: "#7C3AED",
          padding: "8px 16px",
          borderRadius: 8,
          textDecoration: "none",
        }}
      >
        See our apps
      </a>
    </motion.header>
  );
}
