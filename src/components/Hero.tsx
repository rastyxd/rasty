'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const lines = [
  { parts: ['Apps that ', 'just work.'],  firstPurple: false },
  { parts: ['Life, ',     'sorted.'],     firstPurple: true  },
];

const stats = [
  { value: '1',      label: 'App live'      },
  { value: '1.2k+',  label: 'Early users'   },
  { value: 'Free',   label: 'To start'      },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % lines.length), 2800);
    return () => clearInterval(id);
  }, []);

  const line = lines[active];

  return (
    <section className="relative pt-36 pb-20 px-8 text-center overflow-hidden bg-r-bg">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[420px] opacity-[0.12] blur-[100px]"
        style={{ background: 'radial-gradient(ellipse, #7C3AED 0%, transparent 70%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="relative z-10 max-w-[820px] mx-auto"
      >
        <div className="r-tag mb-7 mx-auto w-fit">New · Rasty is live</div>

        {/* Cycling headline — single line, no word splitting */}
        <div className="mb-6" style={{ minHeight: 'clamp(56px, 7vw, 96px)' }}>
          <AnimatePresence mode="popLayout">
            <motion.h1
              key={active}
              className="font-black tracking-[-0.03em] leading-[1.08] whitespace-nowrap overflow-hidden"
              style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
            >
              <motion.span
                initial={{ opacity: 0, y: '60%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{    opacity: 0, y: '-60%' }}
                transition={{ duration: 0.38, delay: 0, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className={`inline-block ${line.firstPurple ? 'text-r-purple' : 'text-r-text'}`}
              >
                {line.parts[0]}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: '60%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{    opacity: 0, y: '-60%' }}
                transition={{ duration: 0.38, delay: 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className={`inline-block ${line.firstPurple ? 'text-r-text' : 'text-r-purple'}`}
              >
                {line.parts[1]}
              </motion.span>
            </motion.h1>
          </AnimatePresence>
        </div>

        <p className="text-[16px] leading-[1.8] text-r-muted max-w-[460px] mx-auto mb-10">
          We build small apps that handle the stuff you keep putting off. No accounts, no learning curve, no noise.
        </p>

        <div className="flex items-center justify-center gap-3 mb-16">
          <a
            href="#products"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-white bg-r-purple hover:bg-r-purple-hover transition-colors px-6 py-3 rounded-xl no-underline"
          >
            Browse our apps
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#about" className="text-[14px] font-medium text-r-muted hover:text-r-text transition-colors no-underline px-4 py-3">
            What is Rasty? →
          </a>
        </div>

        <div className="flex items-center justify-center gap-16 pt-8 border-t border-r-border">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[34px] font-black tracking-[-0.03em] text-r-text leading-none mb-1.5">{s.value}</div>
              <div className="text-[12px] font-medium text-r-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
