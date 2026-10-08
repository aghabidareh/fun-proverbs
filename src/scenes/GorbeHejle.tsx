import { Scene, Person, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const css = `
.gh-head{animation:gh-head 7s ease-in-out infinite}
@keyframes gh-head{0%,24%{transform:rotate(-14deg)}30%,48%{transform:rotate(14deg)}54%,68%{transform:rotate(0)}72%,86%{transform:rotate(-24deg)}92%,100%{transform:rotate(-14deg)}}
.gh-eyes{animation:gh-eyes 7s ease-in-out infinite}
@keyframes gh-eyes{0%,24%{transform:translateX(-2px)}30%,48%{transform:translateX(2px)}54%,100%{transform:translateX(0)}}
.gh-tail{transform-box:view-box;transform-origin:14px -4px;animation:gh-tail 1.6s ease-in-out infinite}
@keyframes gh-tail{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(16deg)}}
.gh-q{animation:gh-q 7s ease-out infinite}
@keyframes gh-q{0%,54%{opacity:0;transform:scale(0) translateY(6px)}60%{opacity:1;transform:scale(1.25) translateY(0)}64%,90%{opacity:1;transform:scale(1) translateY(0)}96%,100%{opacity:0;transform:scale(.6) translateY(-6px)}}
.gh-flame{transform-origin:50% 100%;animation:gh-flame .9s ease-in-out infinite}
@keyframes gh-flame{0%,100%{transform:scale(1,1) rotate(-3deg)}50%{transform:scale(.85,1.15) rotate(4deg)}}
.gh-lean-l{transform-origin:50% 100%;animation:gh-lean-l 7s ease-in-out infinite}
@keyframes gh-lean-l{0%,52%,96%,100%{transform:rotate(0)}62%,88%{transform:rotate(7deg)}}
.gh-lean-r{transform-origin:50% 100%;animation:gh-lean-r 7s ease-in-out infinite}
@keyframes gh-lean-r{0%,54%,96%,100%{transform:rotate(0)}64%,88%{transform:rotate(-7deg)}}
.gh-tw{animation:gh-tw 2.6s ease-in-out infinite}
@keyframes gh-tw{0%,100%{opacity:.2;transform:scale(.6) rotate(0)}50%{opacity:1;transform:scale(1.1) rotate(45deg)}}
.gh-meow{animation:gh-meow 7s infinite}
@keyframes gh-meow{0%,70%{opacity:0;transform:scale(.6)}74%,90%{opacity:1;transform:scale(1)}94%,100%{opacity:0;transform:scale(.6)}}
`;

const garland: [number, number][] = [
  [95, 232], [95, 204], [95, 176], [95, 148], [99, 120], [112, 92], [134, 68], [164, 50], [200, 42], [236, 50], [266, 68], [288, 92], [301, 120], [305, 148], [305, 176], [305, 204], [305, 232],
];
const petals = [C.pomegranate, C.white, "#f29bb0"];

function Candle({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <path d="M-9 230 Q0 222 9 230Z" fill={C.saffron} {...inked} strokeWidth={2} />
      <path d="M-2 226 V196 M2 226 V196" stroke={INK} strokeWidth={2} />
      <rect x="-2" y="196" width="4" height="30" fill={C.saffron} />
      <path d="M-8 196 Q0 202 8 196 Z" fill={C.saffron} {...inked} strokeWidth={2} />
      <rect x="-4" y="178" width="8" height="18" rx="1.5" fill={C.white} {...inked} strokeWidth={1.8} />
      <g transform="translate(0 177)">
        <path className="gh-flame" d="M0 -14 Q6 -6 3 -1 Q0 1 -3 -1 Q-6 -6 0 -14Z" fill="#ffcf4a" stroke={INK} strokeWidth={1.3} />
      </g>
    </g>
  );
}

function Cat() {
  return (
    <g>
      <g className="gh-tail">
        <path d="M14 -4 Q36 -4 34 -22 Q32 -36 22 -32" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
        <path d="M14 -4 Q36 -4 34 -22 Q32 -36 22 -32" fill="none" stroke={C.saffron} strokeWidth={5} strokeLinecap="round" />
      </g>
      <path d="M-17 0 Q-21 -24 -9 -33 L9 -33 Q21 -24 17 0Z" fill={C.saffron} {...inked} />
      <path d="M-14 -16 q5 2 6 6 M14 -16 q-5 2 -6 6 M-15 -8 q5 1 6 5 M15 -8 q-5 1 -6 5" fill="none" stroke="#b5701f" strokeWidth={2} strokeLinecap="round" />
      <path d="M-7 -30 Q0 -14 7 -30" fill={C.cream} stroke="none" />
      <ellipse cx="-7" cy="-1" rx="5.5" ry="3.5" fill={C.saffron} {...inked} strokeWidth={2} />
      <ellipse cx="7" cy="-1" rx="5.5" ry="3.5" fill={C.saffron} {...inked} strokeWidth={2} />
      <g transform="translate(0 -40)">
        <g className="gh-head">
          <path d="M-12 -6 L-12 -22 L-3 -12Z M12 -6 L12 -22 L3 -12Z" fill={C.saffron} {...inked} strokeWidth={2} />
          <path d="M-10 -10 L-10 -17 L-6 -12Z M10 -10 L10 -17 L6 -12Z" fill="#f29bb0" />
          <ellipse cx="0" cy="0" rx="15" ry="13" fill={C.saffron} {...inked} />
          <path d="M-4 -12 l1 5 M0 -13 v5 M4 -12 l-1 5" stroke="#b5701f" strokeWidth={1.6} strokeLinecap="round" />
          <circle cx="-6" cy="-1" r="5" fill={C.white} stroke={INK} strokeWidth={1.4} />
          <circle cx="6" cy="-1" r="5" fill={C.white} stroke={INK} strokeWidth={1.4} />
          <g className="gh-eyes" fill={INK}>
            <circle cx="-6" cy="-1" r="2.2" /><circle cx="6" cy="-1" r="2.2" />
          </g>
          <path d="M-11 -8 l5 1.5 M11 -9 l-5 2.5" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
          <path d="M-1.8 4 L1.8 4 L0 6Z" fill="#e58a7a" stroke={INK} strokeWidth={1} />
          <path d="M0 6 Q-2 9 -4 8 M0 6 Q2 9 4 8" fill="none" stroke={INK} strokeWidth={1.1} />
          <path d="M-8 5 L-21 3 M-8 7 L-20 9 M8 5 L21 3 M8 7 L20 9" stroke={INK} strokeWidth={0.9} />
        </g>
      </g>
    </g>
  );
}

export default function GorbeHejle({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="گربه را دم حجله کشتن" className={playing ? "" : "paused"}>
      <style>{css}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#e8b4b8" />
      <rect x="-10" y="14" width="420" height="18" fill={C.turquoise} stroke={INK} strokeWidth={2} />
      {Array.from({ length: 11 }, (_, i) => <Star8 key={i} x={i * 40} y={23} r={6} fill={C.saffron} />)}
      <path d="M-10 240 H410" stroke="#c98d93" strokeWidth={1.5} />

      <path d="M108 252 V122 Q108 70 200 52 Q292 70 292 122 V252Z" fill="#f6dfe1" />
      <path d="M95 252 V120 Q95 60 200 38 Q305 60 305 120 V252" fill="none" stroke={INK} strokeWidth={14} strokeLinejoin="round" />
      <path d="M95 252 V120 Q95 60 200 38 Q305 60 305 120 V252" fill="none" stroke={C.saffron} strokeWidth={9} strokeLinejoin="round" />
      <path d="M95 252 V120 Q95 60 200 38 Q305 60 305 120 V252" fill="none" stroke={C.white} strokeWidth={3.5} strokeDasharray="3 4" />
      {[[140, 96, 0], [262, 110, 0.8], [200, 70, 1.6], [128, 160, 1.2], [272, 170, 0.4]].map(([x, y, d], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <path className="gh-tw" style={{ animationDelay: `${d}s` }} d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5Z" fill={C.white} />
        </g>
      ))}
      <path d="M110 112 Q150 140 200 112 Q250 140 290 112" fill="none" stroke={C.white} strokeWidth={6} strokeLinecap="round" opacity=".9" />
      <path d="M110 112 Q150 140 200 112 Q250 140 290 112" fill="none" stroke={INK} strokeWidth={1} strokeDasharray="1 5" />
      {garland.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={5.5} fill={petals[i % 3]} stroke={INK} strokeWidth={1.4} />
          <circle cx={x} cy={y} r={1.6} fill={C.saffron} />
        </g>
      ))}

      <g transform="translate(55 250) scale(.8)">
        <g className="gh-lean-l">
          <Person robe={C.olive} sash={C.cream} hat={C.lapis} hatKind="scarf" mood="serious" armL={10} armR={-25} />
        </g>
      </g>
      <g transform="translate(345 250) scale(.8)">
        <g className="gh-lean-r">
          <Person robe={C.terracotta} sash={C.saffron} hat={C.white} mood="serious" beard armL={25} armR={-10}>
            <g fill="none" stroke={INK} strokeWidth={1.4}>
              <circle cx="-5" cy="-75" r="4.5" /><circle cx="5" cy="-75" r="4.5" /><path d="M-0.5 -75 H0.5" />
            </g>
          </Person>
        </g>
      </g>

      <rect x="-10" y="252" width="420" height="58" fill={C.pomegranate} stroke={INK} strokeWidth={2.5} />
      <path d="M-10 260 H410 M-10 292 H410" stroke={C.saffron} strokeWidth={2} strokeDasharray="6 4" />

      <path d="M126 228 L274 228 L292 264 L108 264Z" fill={C.cream} {...inked} />
      <path d="M132 233 L268 233 L283 259 L117 259Z" fill="none" stroke={C.saffron} strokeWidth={2} strokeDasharray="4 3" />
      <ellipse cx="200" cy="196" rx="24" ry="32" fill={C.saffron} {...inked} />
      <ellipse cx="200" cy="196" rx="18" ry="26" fill="#dfe9ee" stroke={INK} strokeWidth={1.5} />
      <path d="M190 180 l10 -8 M188 192 l16 -14" stroke={C.white} strokeWidth={2.5} strokeLinecap="round" />
      <Candle x={164} />
      <Candle x={236} />
      <path d="M124 248 Q124 238 138 238 Q152 238 152 248 Q138 252 124 248Z" fill="#d9a35f" {...inked} strokeWidth={1.8} />
      <g fill={INK}><circle cx="132" cy="244" r=".9" /><circle cx="138" cy="242" r=".9" /><circle cx="144" cy="245" r=".9" /></g>
      <ellipse cx="160" cy="250" rx="3.5" ry="4.5" fill={C.firouzeh} stroke={INK} strokeWidth={1.3} />
      <ellipse cx="168" cy="252" rx="3.5" ry="4.5" fill={C.pomegranate} stroke={INK} strokeWidth={1.3} />
      <path d="M228 246 Q238 254 248 246Z" fill={C.white} {...inked} strokeWidth={1.6} />
      <g fill="#f29bb0" stroke={INK} strokeWidth={1}><circle cx="234" cy="244" r="2.4" /><circle cx="240" cy="243" r="2.4" /><circle cx="245" cy="245" r="2" /></g>
      <path d="M256 242 Q256 254 266 254 Q276 254 276 242Z" fill={C.turquoise} {...inked} strokeWidth={1.6} />
      <ellipse cx="266" cy="242" rx="10" ry="2.5" fill={C.saffron} stroke={INK} strokeWidth={1.3} />

      <g transform="translate(106 270) scale(.9)">
        <Person robe={C.white} sash="#f0c0c8" hat="#fffaf0" hatKind="scarf" mood="serious" armL={20} armR={-30}>
          <g transform="translate(25 -32)">
            <circle cx="-4" cy="-4" r="4" fill={C.pomegranate} stroke={INK} strokeWidth={1.4} />
            <circle cx="4" cy="-5" r="4" fill="#f29bb0" stroke={INK} strokeWidth={1.4} />
            <circle cx="0" cy="-10" r="4" fill={C.white} stroke={INK} strokeWidth={1.4} />
          </g>
        </Person>
      </g>
      <g transform="translate(294 270) scale(.9)">
        <Person robe={C.navy} sash={C.saffron} hat="#3a2c22" hatKind="kolah" mood="serious" armL={30} armR={-15} />
      </g>

      <g transform="translate(200 262)"><Cat /></g>
      <g fontFamily="Vazirmatn" fontWeight={900} fontSize="20" fill={C.saffron} stroke={INK} strokeWidth={1.2} textAnchor="middle">
        <text className="gh-q" x="180" y="198">؟</text>
        <text className="gh-q" x="200" y="186" style={{ animationDelay: ".2s" }}>؟</text>
        <text className="gh-q" x="220" y="198" style={{ animationDelay: ".4s" }}>؟</text>
      </g>
      {big && <Bubble x={214} y={212} w={60} text="میو؟" className="gh-meow" />}
    </Scene>
  );
}
