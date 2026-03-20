import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GitHub, Instagram, Telegram, Mail } from "@mui/icons-material";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
//use Mui icons for all socials
const cards = [
  {
    icon: Telegram,
    title: "Telegram",
    desc: "The fastest way to reach us. Drop a message anytime.",
    action: "@rastyhq",
    href: "https://t.me/taq_ana",
    label: "Open Telegram",
    delay: 0,
  },
  {
    icon: Instagram,
    title: "Instagram",
    desc: "Behind the scenes, product updates, and things we find interesting.",
    action: "@rasty.uk",
    href: "https://instagram.com/rasty.uk",
    label: "Open Instagram",
    delay: 0.14,
  },
  {
    icon: Mail,
    title: "Email",
    desc: "For anything serious — partnerships, press, or a proper conversation.",
    action: "support@rasty.uk",
    href: "mailto:support@rasty.uk?subject=Hello%20There",
    label: "Send an email",
    delay: 0.2,
  },
  {
    icon: GitHub,
    title: "Github",
    desc: "Checkout our open source projects on Github.",
    action: "@rastyxd",
    href: "https://github.com/rastyxd",
    label: "Open Github",
    delay: 0.27,
  },
];

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Section */}
      <section
        className="contact"
        style={{
          padding: "80px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#6B7280",
          }}
        >
          Stay Up To Date
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 40px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: "#0A0A0A",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Get in touch
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "#6B7280",
            maxWidth: 360,
            textAlign: "center",
            lineHeight: 1.75,
          }}
        >
          Whether it's a project, a question, or just a hello
        </p>

        {/* The button */}
        <Button
          onClick={() => setOpen(true)}
          sx={{
            transition: "all 0.3s ease",
            "&:hover": { opacity: 0.8, transform: "scale(1.02)" },
            marginTop: "8px",
            position: "relative",
            padding: "14px 36px",
            borderRadius: "9999px",
            fontSize: "15px",
            fontWeight: 700,
            cursor: "pointer",
            border: "none",
            background: "#7C3AED",
            color: "#fff",
            letterSpacing: "-0.01em",
            overflow: "hidden",
          }}
          variant="outlined"
        >
          {/* shimmer sweep */}
          <motion.span
            style={{
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "60%",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
              skewX: "-20deg",
              pointerEvents: "none",
            }}
            animate={{ left: ["−100%", "200%"] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          />
          Our Platforms
        </Button>
      </section>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              background: "rgba(10, 10, 10, 0.6)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
          >
            {/* Cards container — stops click propagation */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                justifyContent: "center",
                maxWidth: 1200,
                perspective: 1200, // 👈 add this
              }}
            >
              {cards.map((card) => (
                <Card
                  elevation={6}
                  key={card.title}
                  component={motion.div}
                  initial={{ opacity: 0, y: 50, rotateY: 180 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  exit={{ opacity: 0, y: 30, rotateY: -180 }}
                  transition={{
                    delay: card.delay,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1] as [
                      number,
                      number,
                      number,
                      number,
                    ],
                  }}
                  sx={{
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 24px 64px rgba(0,0,0,0.24)",
                    },
                    width: "260px",
                    background: "#fff",
                    borderRadius: "20px",
                    p: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: "#F5F3FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                    }}
                  >
                    <Icon component={card.icon} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3
                      style={{
                        fontSize: 16,
                        fontWeight: 800,
                        color: "#0A0A0A",
                        marginBottom: 8,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: "#6B7280",
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>

                  {/* Action */}
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: 16,
                      borderTop: "1px solid #E5E7EB",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 12,
                        color: "#9CA3AF",
                        marginBottom: 10,
                        fontWeight: 500,
                      }}
                    >
                      {card.action}
                    </p>
                    <motion.a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#7C3AED",
                        textDecoration: "none",
                        background: "#F5F3FF",
                        padding: "8px 16px",
                        borderRadius: 8,
                      }}
                      whileHover={{ scale: 1.03, background: "#EDE9FE" }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {card.label} →
                    </motion.a>
                  </div>
                </Card>
              ))}
            </motion.div>

            {/* Close hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                position: "absolute",
                bottom: 32,
                fontSize: 12,
                color: "rgba(255,255,255,0.4)",
                fontWeight: 500,
                letterSpacing: "0.04em",
              }}
            >
              Click anywhere to close
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
