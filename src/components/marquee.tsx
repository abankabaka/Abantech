'use client';

export default function Marquee() {
  const items = [
    'Web Engineering',
    'Mobile Apps',
    'Cybersecurity',
    'AI & ML',
    'Brand Identity',
    'Cloud Ops'
  ];

  // Repeat items to ensure seamless scroll
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="py-8 border-y border-white/5 bg-white/[0.02] overflow-hidden flex whitespace-nowrap">
      <div className="animate-marquee flex items-center gap-8 md:gap-16">
        {marqueeItems.map((item, i) => (
          <div key={i} className="flex items-center gap-8 md:gap-16">
            <span className="text-2xl md:text-4xl font-headline font-medium text-white/40 uppercase tracking-tight">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-primary/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
