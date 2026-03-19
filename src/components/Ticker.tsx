const items = [
  'No accounts needed', 'Actually useful', 'Built for real life', 'Free to start',
  'No learning curve', 'Made by people who use it',
  'No accounts needed', 'Actually useful', 'Built for real life', 'Free to start',
  'No learning curve', 'Made by people who use it',
];

export default function Ticker() {
  return (
    <div style={{
      borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB',
      padding: '10px 0', overflow: 'hidden', userSelect: 'none',
      background: '#F8F7FF',
    }}>
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: 16,
            padding: '0 24px', fontSize: 11, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B7280',
          }}>
            {item}
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(124,58,237,0.3)', display: 'inline-block' }} />
          </span>
        ))}
      </div>
    </div>
  );
}
