'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const links = [
  { label: 'Products', href: '#products' },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: 'mailto:hello@rasty.uk' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={`fixed top-0 inset-x-0 z-50 h-[60px] flex items-center px-8 justify-between bg-white/90 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'border-b border-r-border shadow-[0_1px_8px_rgba(0,0,0,0.06)]' : ''
      }`}
    >
      <a href="/" className="text-[16px] font-black text-r-text no-underline tracking-tight">
        Rasty
      </a>

      <nav className="flex items-center gap-1">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-[13px] font-medium text-r-muted hover:text-r-text transition-colors px-3 py-1.5 rounded-lg hover:bg-r-bg-soft no-underline"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <a
        href="#products"
        className="text-[13px] font-semibold text-white bg-r-purple hover:bg-r-purple-hover transition-colors px-4 py-2 rounded-lg no-underline"
      >
        See our apps
      </a>
    </motion.header>
  );
}
