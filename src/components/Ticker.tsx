const items = [
  'No accounts needed', 'Actually useful', 'Built for real life', 'Free to start',
  'No learning curve', 'Made by people who use it',
  'No accounts needed', 'Actually useful', 'Built for real life', 'Free to start',
  'No learning curve', 'Made by people who use it',
];

export default function Ticker() {
  return (
    <div className="border-y border-r-border py-3 overflow-hidden select-none bg-r-bg-soft">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-6 text-[11px] font-semibold tracking-[0.1em] uppercase text-r-muted">
            {item}
            <span className="w-1 h-1 rounded-full bg-r-purple/30 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}
