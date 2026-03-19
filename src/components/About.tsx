import { motion } from 'motion/react';

const ease = [0.22, 1, 0.36, 1] as [number,number,number,number];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: 'blur(4px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease },
});

const principles = [
  { num: '01', title: 'One app, one job',  body: "We don't add features for the sake of it. Every tap has a reason." },
  { num: '02', title: 'No babysitting',    body: "You shouldn't need to check an app for it to work. Ours run quietly until you actually need them." },
  { num: '03', title: 'Free first',        body: 'Every Rasty app is free to start. No credit card, no trial countdown, no pressure.' },
];

export default function About() {
  return (
    <section id="about" style={{ background: '#F8F7FF', padding: '96px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <span className="r-tag">About</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0A0A0A', marginBottom: 16 }}>
            Built by people who got tired<br />of bad software.
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', maxWidth: 440, margin: '0 auto', lineHeight: 1.75 }}>
            Rasty is a small independent studio. We build apps for ourselves first — if we wouldn't use it daily, we don't ship it.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              {...fadeUp(0.1 + i * 0.1)}
              style={{
                background: '#fff', borderRadius: 16, padding: 28,
                border: '1px solid #E5E7EB',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              whileHover={{ y: -4, boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(107,114,128,0.4)', marginBottom: 20 }}>{p.num}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0A0A0A', marginBottom: 10 }}>{p.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.72, color: '#6B7280' }}>{p.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
