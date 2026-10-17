/** A simple drawing of a kampung house behind a green gate, standing in for a photo. */
export function GateIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 240" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="240" fill="#cfe8f3" />
      <circle cx="262" cy="46" r="20" fill="#fbe39a" />
      <rect x="0" y="176" width="320" height="64" fill="#a9c98a" />
      {/* house */}
      <path d="M64 112 L160 52 L256 112 Z" fill="#b5523b" />
      <rect x="80" y="110" width="160" height="72" fill="#f4ecd8" />
      <rect x="146" y="132" width="28" height="50" fill="#8a5a3c" />
      <rect x="98" y="128" width="30" height="24" fill="#7fb6c9" stroke="#fff" strokeWidth="3" />
      <rect x="192" y="128" width="30" height="24" fill="#7fb6c9" stroke="#fff" strokeWidth="3" />
      {/* tree */}
      <rect x="22" y="128" width="10" height="56" fill="#7a5537" />
      <circle cx="27" cy="118" r="26" fill="#4f8f4a" />
      <circle cx="292" cy="140" r="18" fill="#5c9b54" />
      {/* wall and green gate */}
      <rect x="0" y="168" width="320" height="16" fill="#e7e2d6" />
      <rect x="0" y="182" width="320" height="58" fill="#d9d3c4" />
      <rect x="96" y="150" width="128" height="90" rx="4" fill="#2f8a57" />
      {Array.from({ length: 9 }, (_, i) => (
        <rect key={i} x={106 + i * 13.5} y="158" width="5" height="76" rx="2" fill="#1f6b41" />
      ))}
      <rect x="96" y="150" width="128" height="8" rx="3" fill="#25784a" />
      <rect x="84" y="140" width="14" height="100" fill="#c9c1ae" />
      <rect x="222" y="140" width="14" height="100" fill="#c9c1ae" />
    </svg>
  );
}
