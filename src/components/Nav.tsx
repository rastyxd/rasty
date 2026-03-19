import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const links = [
  { label: 'Products', href: '#products' },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#cta' },
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
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: 60, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 32px',
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid #E5E7EB' : 'none',
        boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.06)' : 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
    >
      <a href="#" style={{ fontSize: 16, fontWeight: 900, color: '#0A0A0A', textDecoration: 'none', letterSpacing: '-0.02em' }}>
        Rasty
      </a>

      <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{
              fontSize: 13, fontWeight: 500, color: '#6B7280',
              textDecoration: 'none', padding: '6px 12px', borderRadius: 8,
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.color = '#0A0A0A'; (e.target as HTMLElement).style.background = '#F8F7FF'; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.color = '#6B7280'; (e.target as HTMLElement).style.background = 'transparent'; }}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <a
        href="#products"
        style={{
          fontSize: 13, fontWeight: 600, color: '#fff',
          background: '#7C3AED', padding: '8px 16px',
          borderRadius: 8, textDecoration: 'none',
        }}
      >
        See our apps
      </a>
    </motion.header>
  );
}
