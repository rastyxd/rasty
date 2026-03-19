import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const lines = [
  { parts: ["Apps that ", "just work."], firstPurple: false },
  { parts: ["Life, ", "sorted."], firstPurple: true },
];

const stats = [
  { value: "1", label: "App live" },
  { value: "1.2k+", label: "Early users" },
  { value: "Free", label: "To start" },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((p) => (p + 1) % lines.length),
      2800,
    );
    return () => clearInterval(id);
  }, []);

  const line = lines[active];

  return (
    <section
      style={{
        position: "relative",
        paddingTop: 140,
        paddingBottom: 80,
        paddingLeft: 32,
        paddingRight: 32,
        textAlign: "center",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 400,
          opacity: 0.1,
          filter: "blur(100px)",
          pointerEvents: "none",
          background: "radial-gradient(ellipse, #7C3AED 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 820,
          margin: "0 auto",
        }}
      >
        {/* Tag */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 28,
          }}
        >
          <span className="r-tag">New · Rasty is live</span>
        </div>

        {/* Cycling headline */}
        <div
          style={{
            minHeight: "clamp(56px, 7vw, 96px)",
            marginBottom: 24,
            overflow: "hidden",
          }}
        >
          <AnimatePresence mode="popLayout">
            <motion.h1
              key={active}
              style={{
                fontSize: "clamp(36px, 5.5vw, 72px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: "60%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-60%" }}
                transition={{ duration: 0.38, delay: 0, ease }}
                style={{
                  display: "inline-block",
                  color: line.firstPurple ? "#7C3AED" : "#0A0A0A",
                }}
              >
                {line.parts[0]}&nbsp;
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: "60%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-60%" }}
                transition={{ duration: 0.38, delay: 0.08, ease }}
                style={{
                  display: "inline-block",
                  color: line.firstPurple ? "#0A0A0A" : "#7C3AED",
                }}
              >
                {line.parts[1]}
              </motion.span>
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Sub */}
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: "#6B7280",
            maxWidth: 460,
            margin: "0 auto 40px",
          }}
        >
          We build small apps that handle the stuff you keep putting off. No
          accounts, no learning curve, no noise.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginBottom: 64,
          }}
        >
          <a
            href="#products"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              fontWeight: 600,
              color: "#fff",
              background: "#7C3AED",
              padding: "12px 24px",
              borderRadius: 12,
              textDecoration: "none",
            }}
          >
            Browse our apps →
          </a>
          <a
            href="#about"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#6B7280",
              textDecoration: "none",
              padding: "12px 16px",
            }}
          >
            What is Rasty? →
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 64,
            paddingTop: 32,
            borderTop: "1px solid #E5E7EB",
          }}
        >
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "#0A0A0A",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: 12, fontWeight: 500, color: "#6B7280" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
