import { motion } from 'motion/react';

const ease = [0.22, 1, 0.36, 1] as [number,number,number,number];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: 'blur(4px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease },
});

const values = ['Free to try', 'No setup required', 'Works in the background'];

export default function Products() {
  const products = [
    {
      name: 'ShiftChart',
      href: 'https://shiftchart.rasty.uk',
      desc: 'Effortless Prescription Management',
      longDesc: 'EHR ',
      icon: '💊',
      values,
    }
  ];
  return (
    <section id="products" style={{ maxWidth: 1100, margin: '0 auto', padding: '96px 32px' }}>

      <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: 64 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <span className="r-tag">Products</span>
        </div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0A0A0A', marginBottom: 16 }}>
          Apps we've built
        </h2>
        <p style={{ fontSize: 15, color: '#6B7280', maxWidth: 380, margin: '0 auto', lineHeight: 1.7 }}>
          Each one does one thing. And does it well.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {
          products.map(p => (
        <motion.a
          {...fadeUp(0.1)}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            minHeight: 360, padding: 32, borderRadius: 16, textDecoration: 'none',
            border: '1px solid #EDE9FE', background: '#F5F3FF',
            transition: 'background 0.2s',
          }}
          whileHover={{ y: -4 }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: '#fff', border: '1px solid #EDE9FE',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
              }}>{p.icon}</div>
              <span style={{
                fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 999,
                background: '#F0FDF4', color: '#15803D', border: '1px solid #BBF7D0',
              }}>Live</span>
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(124,58,237,0.5)', marginBottom: 8 }}>
              Free · iOS & Android
            </div>
            <h3 style={{ fontSize: 30, fontWeight: 900, letterSpacing: '-0.03em', color: '#0A0A0A', marginBottom: 10 }}>{p.name}</h3>
            <p style={{ fontSize: 14, fontWeight: 600, color: '#0A0A0A', marginBottom: 10 }}>{p.desc}</p>
            <p style={{ fontSize: 14, lineHeight: 1.72, color: '#6B7280', maxWidth: 300 }}>
              {p.longDesc}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 24, borderTop: '1px solid #EDE9FE', marginTop: 24 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#7C3AED' }}>Try {p.name} free</span>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2v6" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
            </motion.a>
          ))
        }

        {/* Right col */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          <motion.div
            {...fadeUp(0.2)}
            style={{
              padding: 28, borderRadius: 16,
              border: '1px solid #E5E7EB', background: '#F8F7FF',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 8 }}>In the pipeline</div>
                <h3 style={{ fontSize: 20, fontWeight: 900, letterSpacing: '-0.02em', color: '#0A0A0A', marginBottom: 6 }}>More apps coming</h3>
                <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.65 }}>One at a time. Done right.</p>
              </div>
              <span style={{
                fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 999,
                background: '#fff', color: '#6B7280', border: '1px solid #E5E7EB', flexShrink: 0,
              }}>Soon</span>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.3)}
            style={{ padding: 28, borderRadius: 16, border: '1px solid #E5E7EB', background: '#fff', flex: 1 }}
          >
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 20 }}>
              What we stand for
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {values.map((p, i) => (
                <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(107,114,128,0.4)', width: 16, flexShrink: 0 }}>0{i+1}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#0A0A0A' }}>{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
