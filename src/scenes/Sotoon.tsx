import { Scene, Person, Cloud, Ground, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const css = `
.st-head{animation:st-head 8s ease-in-out infinite}
@keyframes st-head{0%,6%{transform:translate(0px,-74px) rotate(0)}10%,34%{transform:translate(-2px,-74px) rotate(-14deg)}40%,58%{transform:translate(2px,-74px) rotate(14deg)}62%,74%{transform:translate(0px,-74px) rotate(0)}78%,90%{transform:translate(0px,-74px) rotate(6deg)}96%,100%{transform:translate(0px,-74px) rotate(0)}}
.st-step{animation:st-step 8s ease-in-out infinite}
@keyframes st-step{0%,64%{transform:translate(0,0)}68%{transform:translate(5px,-4px)}72%,92%{transform:translate(10px,0)}100%{transform:translate(0,0)}}
.st-drop{animation:st-drop .9s linear infinite}
@keyframes st-drop{0%{transform:translateY(0);opacity:0}15%{opacity:1}100%{transform:translateY(150px);opacity:.2}}
.st-bolt{animation:flash 3.4s infinite}
.st-cloud{animation:st-cloud 3s ease-in-out infinite}
@keyframes st-cloud{0%,100%{transform:translateX(0) scale(1)}50%{transform:translateX(-4px) scale(1.04,.96)}}
.st-ripple{animation:st-ripple 1.4s ease-out infinite}
@keyframes st-ripple{0%{transform:scale(.3);opacity:1}100%{transform:scale(1.4);opacity:0}}
.st-umb{animation:shake 1.1s infinite}
.st-rays{animation:spin 14s linear infinite}
.st-flower{transform-origin:50% 100%;animation:wiggle 2.2s ease-in-out infinite}
.st-dance{transform-origin:50% 100%;animation:st-dance .8s ease-in-out infinite}
@keyframes st-dance{0%,100%{transform:rotate(-14deg) translateY(0)}25%{transform:rotate(0) translateY(-5px)}50%{transform:rotate(14deg) translateY(0)}75%{transform:rotate(0) translateY(-5px)}}
.st-jump{animation:st-jump 8s ease-in-out infinite}
@keyframes st-jump{0%,72%{transform:translateY(0) rotate(0)}78%{transform:translateY(-24px) rotate(-180deg)}84%,100%{transform:translateY(0) rotate(-360deg)}}
.st-spark{animation:st-spark 8s ease-out infinite}
@keyframes st-spark{0%,72%{opacity:0;transform:scale(0) rotate(0)}76%{opacity:1;transform:scale(1.3) rotate(40deg)}86%{opacity:1;transform:scale(1) rotate(90deg)}92%,100%{opacity:0;transform:scale(0) rotate(120deg)}}
.st-fly{animation:st-fly 5s ease-in-out infinite}
@keyframes st-fly{0%,100%{transform:translate(0,0)}25%{transform:translate(-14px,-10px)}50%{transform:translate(-4px,-22px)}75%{transform:translate(10px,-8px)}}
.st-wing{animation:st-wing .25s ease-in-out infinite alternate}
@keyframes st-wing{from{transform:scaleX(1)}to{transform:scaleX(.3)}}
`;

function Column({ x }: { x: number }) {
  const l = x - 28;
  const lattice = Array.from({ length: 9 }, (_, i) => 56 + i * 20);
  return (
    <g>
      <rect x={l} y="50" width="56" height="184" fill={C.lapis} {...inked} />
      <g stroke={C.firouzeh} strokeWidth={1.6} opacity=".9">
        {lattice.map((y) => (
          <path key={y} d={`M${l} ${y} L${l + 14} ${y + 10} L${l + 28} ${y} L${l + 42} ${y + 10} L${l + 56} ${y} M${l} ${y + 20} L${l + 14} ${y + 10} L${l + 28} ${y + 20} L${l + 42} ${y + 10} L${l + 56} ${y + 20}`} fill="none" />
        ))}
      </g>
      {[96, 156, 212].map((y) => <rect key={y} x={l} y={y} width="56" height="7" fill={C.saffron} stroke={INK} strokeWidth={1.8} />)}
      <path d={`M${l - 10} 50 L${l + 66} 50 L${l + 58} 40 L${l + 62} 32 L${l - 6} 32 L${l - 2} 40Z`} fill={C.turquoise} {...inked} />
      <path d={`M${l - 2} 40 H${l + 58} M${l + 6} 50 q6 -8 12 0 q6 -8 12 0 q6 -8 12 0 q6 -8 12 0`} fill="none" stroke={INK} strokeWidth={1.4} />
      <rect x={l - 12} y="24" width="80" height="9" fill={C.cream} {...inked} strokeWidth={2} />
      <path d={`M${l - 6} 234 H${l + 62} L${l + 68} 256 H${l - 12}Z`} fill={C.cream} {...inked} />
      <path d={`M${l - 8} 244 H${l + 64}`} stroke={C.terracotta} strokeWidth={2} />
    </g>
  );
}

const drops = [[48, 0], [64, 0.35], [80, 0.7], [96, 0.15], [112, 0.5], [128, 0.8], [56, 0.6], [104, 0.25], [140, 0.45], [36, 0.1]];

export default function Sotoon({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="از این ستون به آن ستون فرج است" className={playing ? "" : "paused"}>
      <style>{css}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#b9d6d2" />
      <rect x="-10" y="-10" width="170" height="270" fill="#7f8f95" opacity=".45" />
      <rect x="240" y="-10" width="170" height="270" fill="#fff1b8" opacity=".45" />

      <Ground y={255} color={C.sand} />
      <rect x="-10" y="255" width="170" height="55" fill="#6d5a45" opacity=".35" />
      <path d="M250 256 l3 -8 l3 8 M290 256 l2 -6 l3 6 M372 256 l3 -8 l2 8" fill="none" stroke={C.olive} strokeWidth={2} strokeLinecap="round" />

      <Column x={90} />
      <Column x={310} />

      <ellipse cx="92" cy="264" rx="40" ry="7" fill="#8fb3c9" stroke={INK} strokeWidth={2} />
      <ellipse className="st-ripple" cx="80" cy="264" rx="10" ry="2.5" fill="none" stroke={C.white} strokeWidth={1.5} />
      <ellipse className="st-ripple" cx="106" cy="265" rx="10" ry="2.5" fill="none" stroke={C.white} strokeWidth={1.5} style={{ animationDelay: ".7s" }} />
      <g stroke="#cfe3f1" strokeWidth={2} strokeLinecap="round">
        {drops.map(([x, d], i) => <path key={i} className="st-drop" d={`M${x} 82 l-3 9`} style={{ animationDelay: `${d}s` }} />)}
      </g>
      <polygon className="st-bolt" points="132,74 118,104 128,104 112,140 138,98 127,98 140,74" fill="#ffe14a" stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
      <Cloud x={40} y={80} s={1.5} fill="#5b6370" className="st-cloud" />
      <g transform="translate(40 236)">
        <g className="st-umb">
          <path d="M0 -24 V6 q0 5 5 5" fill="none" stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
          <path d="M-16 -36 Q-8 -20 0 -24 Q8 -20 16 -36 Q8 -26 0 -30 Q-8 -26 -16 -36Z" fill={C.pomegranate} {...inked} strokeWidth={2} />
        </g>
      </g>

      <g transform="translate(318 74)">
        <g className="st-rays" stroke={C.saffron} strokeWidth={4} strokeLinecap="round">
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i * Math.PI) / 6;
            return <path key={i} d={`M${(Math.cos(a) * 22).toFixed(1)} ${(Math.sin(a) * 22).toFixed(1)} L${(Math.cos(a) * 32).toFixed(1)} ${(Math.sin(a) * 32).toFixed(1)}`} />;
          })}
        </g>
        <circle r="17" fill="#ffd257" {...inked} />
        <path d="M-7 -3 q3 -3 6 0 M2 -3 q3 -3 6 0 M-6 5 Q0 10 6 5" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        <circle cx="-9" cy="3" r="2.4" fill="#e58a7a" opacity=".6" /><circle cx="9" cy="3" r="2.4" fill="#e58a7a" opacity=".6" />
      </g>
      {[[262, 0], [352, 0.6], [366, 1.1]].map(([x, d]) => (
        <g key={x} transform={`translate(${x} 258)`}>
          <g className="st-flower" style={{ animationDelay: `${d}s` }}>
            <path d="M0 0 V-22 M0 -10 q6 -2 8 -8" fill="none" stroke={C.olive} strokeWidth={2.4} strokeLinecap="round" />
            {[0, 72, 144, 216, 288].map((r) => <ellipse key={r} cx="0" cy="-29" rx="3.2" ry="5.5" transform={`rotate(${r} 0 -24)`} fill={x === 352 ? C.firouzeh : "#f29bb0"} stroke={INK} strokeWidth={1.2} />)}
            <circle cx="0" cy="-24" r="3" fill={C.saffron} stroke={INK} strokeWidth={1.2} />
          </g>
        </g>
      ))}
      <g transform="translate(350 140)">
        <g className="st-fly">
          <g className="st-wing"><path d="M0 0 Q-9 -10 -10 -2 Q-8 4 0 0 Q9 -10 10 -2 Q8 4 0 0Z" fill={C.saffron} stroke={INK} strokeWidth={1.2} /></g>
        </g>
      </g>
      <g transform="translate(250 258)">
        <g className="st-jump">
          <g className="st-dance">
            <path d="M-5 -6 L-8 0 M5 -6 L8 0" stroke={INK} strokeWidth={2} strokeLinecap="round" />
            <path d="M-10 -20 L-18 -32 M10 -20 L18 -32" stroke={INK} strokeWidth={2} strokeLinecap="round" />
            <circle cx="0" cy="-17" r="12" fill={C.pomegranate} {...inked} />
            <path d="M-4 -28 L-3 -33 L0 -29 L3 -33 L4 -28Z" fill={C.pomegranate} {...inked} strokeWidth={1.6} />
            <path d="M-6 -19 q2 -2 4 0 M2 -19 q2 -2 4 0 M-4 -13 Q0 -9 4 -13" fill="none" stroke={C.cream} strokeWidth={1.5} strokeLinecap="round" />
          </g>
        </g>
      </g>

      <g transform="translate(196 262)">
        <g className="st-step">
          <Person robe={C.olive} sash={C.saffron} hat={C.white} mood="serious" armL={8} armR={-8} headClass="st-head" />
          <g transform="translate(22 -96)"><Star8 r={7} fill={C.saffron} className="st-spark" /></g>
        </g>
      </g>

      {big && (
        <g fontFamily="Vazirmatn" fontWeight={800} fontSize="9" fill={INK} textAnchor="middle" direction="rtl">
          <text x="90" y="252">ستون ۱</text>
          <text x="310" y="252">ستون ۲</text>
        </g>
      )}
      {big && <Bubble x={258} y={222} w={56} text="فرج!" className="st-spark" />}
    </Scene>
  );
}
