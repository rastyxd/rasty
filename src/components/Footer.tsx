const nav = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "mailto:hello@rasty.uk" },
];
const social = [{ label: "Instagram", href: "https://instagram.com/rasty.uk" }];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #E5E7EB", background: "#F8F7FF" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "40px 0",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div>
            <a
              href="#"
              style={{
                fontSize: 20,
                fontWeight: 900,
                color: "#0A0A0A",
                textDecoration: "none",
                letterSpacing: "-0.02em",
                display: "block",
                marginBottom: 6,
              }}
            >
              Rasty
            </a>
            <p
              style={{
                fontSize: 13,
                color: "#6B7280",
                maxWidth: 200,
                lineHeight: 1.6,
              }}
            >
              Small apps. Big difference.
            </p>
          </div>

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              flexWrap: "wrap",
            }}
          >
            {nav.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#6B7280",
                  textDecoration: "none",
                  padding: "6px 12px",
                  borderRadius: 8,
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {social.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#6B7280",
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: 8,
                  border: "1px solid #E5E7EB",
                  background: "#fff",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 0",
            borderTop: "1px solid #E5E7EB",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 12, color: "rgba(107,114,128,0.5)" }}>
            © 2026 Rasty · rasty.uk
          </span>
          <span style={{ fontSize: 12, color: "rgba(107,114,128,0.4)" }}>
            Built with purpose.
          </span>
        </div>
      </div>
    </footer>
  );
}
