'use client';

import { motion } from 'motion/react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: 'blur(4px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const values = ['Free to try', 'No setup required', 'Works in the background'];

export default function Products() {
  return (
    <section id="products" className="max-w-[1100px] mx-auto px-8 py-24">

      <motion.div {...fadeUp()} className="text-center mb-16">
        <div className="r-tag mb-5 mx-auto w-fit">Products</div>
        <h2
          className="font-black text-r-text tracking-[-0.03em] leading-[1.1] mb-4"
          style={{ fontSize: 'clamp(32px, 4.5vw, 54px)' }}
        >
          Apps we've built
        </h2>
        <p className="text-[15px] text-r-muted max-w-[380px] mx-auto leading-[1.7]">
          Each one does one thing. And does it well.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">

        {/* Dodo */}
        <motion.a
          {...fadeUp(0.1)}
          href="https://dodo.rasty.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[360px] no-underline border border-r-purple-light bg-r-purple-faint hover:bg-r-purple-light transition-colors duration-300"
        >
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="w-11 h-11 rounded-xl bg-white border border-r-purple-light flex items-center justify-center text-xl shadow-sm">🐦</div>
              <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Live
              </span>
            </div>
            <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-r-purple/50 mb-2">Free · iOS & Android</div>
            <h3 className="text-[30px] font-black text-r-text tracking-[-0.03em] mb-3">Dodo</h3>
            <p className="text-[14px] font-semibold text-r-text mb-2">Stop forgetting the important stuff.</p>
            <p className="text-[14px] leading-[1.72] text-r-muted max-w-[300px]">
              Dodo tracks the things that keep slipping — doctor visits, bill splits, ID renewals, lease dates. Tap what applies to your life. It handles the rest.
            </p>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-r-purple-light mt-6">
            <span className="text-[13px] font-semibold text-r-purple">Try Dodo free</span>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="text-r-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.a>

        {/* Right col */}
        <div className="flex flex-col gap-4">

          <motion.div
            {...fadeUp(0.2)}
            className="rounded-2xl p-7 border border-r-border bg-r-bg-soft flex flex-col justify-between min-h-[168px]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-r-muted mb-2">In the pipeline</div>
                <h3 className="text-[20px] font-black text-r-text tracking-[-0.02em] mb-1.5">More apps coming</h3>
                <p className="text-[13px] text-r-muted leading-[1.65]">One at a time. Done right.</p>
              </div>
              <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white text-r-muted border border-r-border shrink-0">
                Soon
              </span>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.3)}
            className="rounded-2xl p-7 border border-r-border bg-white flex-1 min-h-[172px]"
          >
            <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-r-muted mb-5">How we build</div>
            <div className="flex flex-col gap-3.5">
              {values.map((p, i) => (
                <div key={p} className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-r-muted/40 tabular-nums w-4 shrink-0">0{i + 1}</span>
                  <span className="text-[13px] font-semibold text-r-text">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
