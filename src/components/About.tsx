'use client';

import { motion } from 'motion/react';

const principles = [
  {
    num: '01',
    title: 'One app, one job',
    body: "We don't add features for the sake of it. Every tap has a reason.",
  },
  {
    num: '02',
    title: 'No babysitting',
    body: "You shouldn't need to check an app for it to work. Ours run quietly until you actually need them.",
  },
  {
    num: '03',
    title: 'Free first',
    body: 'Every Rasty app is free to start. No credit card, no trial countdown, no pressure.',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: 'blur(4px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function About() {
  return (
    <section id="about" className="bg-r-bg-soft py-24 px-8">
      <div className="max-w-[1100px] mx-auto">

        <motion.div {...fadeUp()} className="text-center mb-16">
          <div className="r-tag mb-5 mx-auto w-fit">About</div>
          <h2
            className="font-black text-r-text tracking-[-0.03em] leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            Built by people who got tired<br />of bad software.
          </h2>
          <p className="text-[15px] text-r-muted max-w-[440px] mx-auto leading-[1.75]">
            Rasty is a small independent studio. We build apps for ourselves first — if we wouldn't use it daily, we don't ship it.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              {...fadeUp(0.1 + i * 0.1)}
              className="bg-white rounded-2xl p-7 border border-r-border hover:border-r-purple-light hover:shadow-sm transition-all duration-200"
            >
              <div className="text-[11px] font-bold tracking-[0.1em] text-r-muted/40 mb-5">{p.num}</div>
              <h3 className="text-[15px] font-bold text-r-text mb-3 tracking-[-0.01em]">{p.title}</h3>
              <p className="text-[13px] leading-[1.72] text-r-muted">{p.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
