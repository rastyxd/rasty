const nav = [
  { label: 'Products',    href: '#products' },
  { label: 'About',       href: '#about'    },
  { label: "What's next", href: '#'         },
];

const social = [
  { label: 'Twitter', href: 'https://twitter.com/rastyhq'   },
  { label: 'Contact', href: 'mailto:hello@rasty.uk' },
];

export default function Footer() {
  return (
    <footer className="border-t border-r-border bg-r-bg-soft">
      <div className="max-w-[1100px] mx-auto px-8">

        <div className="flex items-center justify-between py-10 gap-8 max-md:flex-col max-md:items-start">
          <div>
            <a href="/" className="text-[20px] font-black text-r-text no-underline tracking-tight block mb-1.5">
              Rasty
            </a>
            <p className="text-[13px] text-r-muted max-w-[200px] leading-[1.6]">
              Small apps. Big difference.
            </p>
          </div>

          <nav className="flex items-center gap-1 flex-wrap">
            {nav.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[13px] font-medium text-r-muted hover:text-r-text transition-colors px-3 py-1.5 rounded-lg hover:bg-white no-underline"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {social.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[13px] font-medium text-r-muted hover:text-r-text transition-colors px-4 py-2 rounded-lg border border-r-border hover:border-r-purple-light bg-white no-underline"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between py-5 border-t border-r-border gap-4 max-md:flex-col max-md:items-start">
          <span className="text-[12px] text-r-muted/50">© 2026 Rasty · rasty.uk</span>
          <span className="text-[12px] text-r-muted/40">Built with purpose.</span>
        </div>

      </div>
    </footer>
  );
}
