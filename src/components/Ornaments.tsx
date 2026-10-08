import { useState } from "react";
import { play } from "../lib/sound";

const INK = "#2b2118";

export function Star({ size = 28, fill = "#e9a23b", className = "" }: { size?: number; fill?: string; className?: string }) {
  const pts = Array.from({ length: 16 }, (_, i) => {
    const a = (i * Math.PI) / 8;
    const r = i % 2 ? 6 : 11;
    return `${12 + Math.cos(a) * r},${12 + Math.sin(a) * r}`;
  }).join(" ");
  return (
    <svg aria-hidden viewBox="0 0 24 24" width={size} height={size} className={className}>
      <polygon points={pts} fill={fill} stroke={INK} strokeWidth="1.3" />
      <circle cx="12" cy="12" r="2.5" fill="#f3e7cf" stroke={INK} strokeWidth="1" />
    </svg>
  );
}

export function Eslimi({ className = "", color = "#2a9d8f" }: { className?: string; color?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 120 60" className={className}>
      <path d="M5 30 C25 0 45 0 55 25 C60 40 75 40 78 28 C80 18 68 14 64 22 M55 25 C65 55 95 55 115 30" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M30 14 q8 -10 14 2 q-8 6 -14 -2Z M90 46 q8 10 14 -2 q-8 -6 -14 2Z" fill="#e9a23b" stroke={INK} strokeWidth="1.5" />
    </svg>
  );
}

export function FlyingCarpet({ className = "" }: { className?: string }) {
  const [loops, setLoops] = useState(0);
  return (
    <button
      type="button"
      aria-label="قالیچه‌ی پرنده! (یه جوری نگاش کن)"
      onMouseEnter={() => setLoops((n) => n + 1)}
      onClick={() => { setLoops((n) => n + 1); play("whoosh"); }}
      className={`cursor-pointer bg-transparent ${className}`}
    >
      <svg viewBox="0 0 140 70" className="w-full overflow-visible">
        <g key={loops} style={{ animation: loops ? "carpet-loop 1.1s ease-in-out" : undefined, transformOrigin: "70px 40px" }}>
          <g style={{ animation: "bob 1.6s ease-in-out infinite" }}>
            <path d="M58 40 q0 -16 12 -16 q12 0 12 16Z" fill="#a4243b" stroke={INK} strokeWidth="2" />
            <circle cx="70" cy="18" r="7" fill="#f1c9a0" stroke={INK} strokeWidth="2" />
            <ellipse cx="70" cy="12" rx="8" ry="4.5" fill="#fffaf0" stroke={INK} strokeWidth="2" />
            <circle cx="67" cy="18" r="1" fill={INK} /><circle cx="73" cy="18" r="1" fill={INK} />
          </g>
          <path d="M10 42 Q40 34 70 42 T130 42 L126 56 Q96 48 66 56 T6 56Z" fill="#a4243b" stroke={INK} strokeWidth="2.5" strokeLinejoin="round">
            <animate attributeName="d" dur="1.4s" repeatCount="indefinite" values="M10 42 Q40 34 70 42 T130 42 L126 56 Q96 48 66 56 T6 56Z;M10 42 Q40 50 70 42 T130 42 L126 56 Q96 64 66 56 T6 56Z;M10 42 Q40 34 70 42 T130 42 L126 56 Q96 48 66 56 T6 56Z" />
          </path>
          <path d="M22 46 L118 46 L116 52 L20 52Z" fill="#e9a23b" stroke={INK} strokeWidth="1.2" opacity=".85" />
          <g fill="#1f3c88"><circle cx="45" cy="49" r="2" /><circle cx="70" cy="49" r="2" /><circle cx="95" cy="49" r="2" /></g>
          <path d="M6 56 l-4 6 M12 55 l-3 7 M126 56 l4 6 M120 55 l3 7" stroke={INK} strokeWidth="1.5" />
        </g>
      </svg>
      <style>{`@keyframes carpet-loop { 0% { transform: rotate(0) } 50% { transform: translateY(-30px) rotate(-200deg) scale(.9) } 100% { transform: rotate(-360deg) } }`}</style>
    </button>
  );
}

export function ArchFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="tile-band absolute -inset-3 border-[3px] border-ink [border-radius:50%_50%_12px_12px/30%_30%_12px_12px] shadow-[8px_8px_0_#2b2118]" aria-hidden />
      <div className="relative h-full overflow-hidden border-[3px] border-ink bg-navy [border-radius:50%_50%_6px_6px/28%_28%_6px_6px]">
        {children}
      </div>
    </div>
  );
}
