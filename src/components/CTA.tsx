"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";

const upcoming = [
  {
    tag: "Finance",
    eta: "Q3 2026",
    desc: "See every subscription you're paying for. Cancel what you forgot about.",
    glow: "34, 197, 94", // emerald
  },
  {
    tag: "Health",
    eta: "Q4 2026",
    desc: "Know what's worth tracking. Ignore the rest.",
    glow: "244, 63, 94", // rose
  },
  {
    tag: "Mobile IDE",
    eta: "Q1 2027",
    desc: "Code on your phone like you're at a desk. Custom keyboard, trackpad strip, on-device Python and JS. No compromises.",
    glow: "59, 130, 246", // blue
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

function GlowCard({ p, i }: { p: (typeof upcoming)[0]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      key={p.tag}
      {...fadeUp(0.1 + i * 0.1)}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl p-7 border border-r-border bg-white hover:shadow-sm transition-all duration-200 flex flex-col gap-5 relative overflow-hidden"
    >
      {/* Radial glow that follows mouse */}
      <div
        className="absolute inset-0 scale-150 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(${p.glow}, 0.1) 0%, transparent 80%)`,
        }}
      />

      <div className="relative z-10 flex items-center justify-between">
        <span className="r-tag">{p.tag}</span>
        <span className="text-[11px] font-semibold text-r-muted">{p.eta}</span>
      </div>
      <div className="relative z-10">
        <h3 className="text-[18px] font-black text-r-muted/60 tracking-[-0.02em] mb-3 italic">
          Untitled
        </h3>
        <p className="text-[14px] leading-[1.72] text-r-text font-medium">
          {p.desc}
        </p>
      </div>
      <div className="relative z-10 mt-auto pt-4 border-t border-r-border">
        <span className="text-[12px] font-medium text-r-muted/40">
          Details TBA
        </span>
      </div>
    </motion.div>
  );
}

export default function CTA() {
  return (
    <section className="px-8 py-24 bg-r-bg">
      <div className="max-w-[1100px] mx-auto">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <div className="r-tag mb-5 mx-auto w-fit">What's next</div>
          <h2
            className="font-black text-r-text tracking-[-0.03em] leading-[1.1] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            What we're working on
          </h2>
          <p className="text-[15px] text-r-muted max-w-[400px] mx-auto leading-[1.75]">
            Early ideas. No promises. But here's where we're headed.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          {upcoming.map((p, i) => (
            <GlowCard key={p.tag} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
