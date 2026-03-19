import { useRef, useState } from 'react';
import { motion } from 'motion/react';

const ease = [0.22, 1, 0.36, 1] as [number,number,number,number];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: 'blur(4px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease },
});

const upcoming = [
  { tag: 'Finance',    eta: 'Q3 2026', desc: "See every subscription you're paying for. Cancel what you forgot about.",         glow: '34,197,94'  },
  { tag: 'Health',     eta: 'Q4 2026', desc: "Know what's worth tracking. Ignore the rest.",                                    glow: '244,63,94'  },
  { tag: 'Mobile IDE', eta: 'Q1 2027', desc: "Code on your phone like you're at a desk. Custom keyboard, trackpad, on-device Python and JS.", glow: '59,130,246' },
];

function GlowCard({ p, i }: { p: typeof upcoming[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      {...fadeUp(0.1 + i * 0.1)}
      onMouseMove={e => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 16, padding: 28, border: '1px solid #E5E7EB',
        background: '#fff', display: 'flex', flexDirection: 'column', gap: 20,
        position: 'relative', overflow: 'hidden',
        transition: 'box-shadow 0.2s',
        boxShadow: hovered ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.3s',
        background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(${p.glow},0.1) 0%, transparent 65%)`,
      }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
        <span className="r-tag">{p.tag}</span>
        <span style={{ fontSize: 11, fontWeight: 600, color: '#6B7280' }}>{p.eta}</span>
      </div>
      <div style={{ position: 'relative' }}>
        <h3 style={{ fontSize: 18, fontWeight: 900, color: 'rgba(107,114,128,0.6)', letterSpacing: '-0.02em', marginBottom: 10, fontStyle: 'italic' }}>Untitled</h3>
        <p style={{ fontSize: 14, lineHeight: 1.72, color: '#0A0A0A', fontWeight: 500 }}>{p.desc}</p>
      </div>
      <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid #E5E7EB', position: 'relative' }}>
        <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(107,114,128,0.4)' }}>Details TBA</span>
      </div>
    </motion.div>
  );
}

export default function CTA() {
  return (
    <section style={{ padding: '96px 32px', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <span className="r-tag">What's next</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0A0A0A', marginBottom: 16 }}>
            What we're working on
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', maxWidth: 400, margin: '0 auto', lineHeight: 1.75 }}>
            Early ideas. No promises. But here's where we're headed.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {upcoming.map((p, i) => <GlowCard key={p.tag} p={p} i={i} />)}
        </div>

      </div>
    </section>
  );
}
