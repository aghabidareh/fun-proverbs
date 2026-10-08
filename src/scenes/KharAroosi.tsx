import { Scene, Person, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const DK = "#a39a90";
const DK_DK = "#7d736a";
const MUZ = "#ddd3c6";
const HAIR = "#5e534b";
const GRASS = "#7fae4f";

const CSS = `
@keyframes ka-jaw{0%,100%{transform:translateY(0px)}50%{transform:translateY(2.6px)}}
.ka-jaw{animation:ka-jaw .36s ease-in-out infinite}
@keyframes ka-chew{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-3deg)}}
.ka-chew{animation:ka-chew .72s ease-in-out infinite}
@keyframes ka-bit{0%{transform:translate(0px,0px) rotate(0deg);opacity:0}10%{opacity:1}100%{transform:translate(-18px,-30px) rotate(-200deg);opacity:0}}
.ka-bit{animation:ka-bit 1.1s ease-out infinite}
@keyframes ka-ear{0%,40%,48%,70%,100%{transform:rotate(0deg)}43%{transform:rotate(-22deg)}45%{transform:rotate(6deg)}73%{transform:rotate(-18deg)}75%{transform:rotate(4deg)}}
.ka-ear{animation:ka-ear 3.4s ease-in-out infinite}
@keyframes ka-tail{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(14deg)}}
.ka-tail{animation:ka-tail 1.8s ease-in-out infinite}
@keyframes ka-tw{0%,100%{opacity:.35}50%{opacity:1}}
.ka-tw{animation:ka-tw 1.4s ease-in-out infinite}
@keyframes ka-flame{0%,100%{transform:scale(1,1) rotate(-3deg)}50%{transform:scale(.85,1.15) rotate(4deg)}}
.scene .ka-flame{animation:ka-flame .9s ease-in-out infinite;transform-origin:50% 100%}
@keyframes ka-clapL{0%,100%{transform:rotate(-40deg)}50%{transform:rotate(-12deg)}}
@keyframes ka-clapR{0%,100%{transform:rotate(40deg)}50%{transform:rotate(12deg)}}
.ka-clapL{animation:ka-clapL .5s ease-in-out infinite}
.ka-clapR{animation:ka-clapR .5s ease-in-out infinite}
@keyframes ka-daf{0%,100%{transform:rotate(36deg)}50%{transform:rotate(58deg)}}
.ka-daf{animation:ka-daf .5s ease-in-out infinite}
@keyframes ka-sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}
.ka-sway{animation:ka-sway 2s ease-in-out infinite}
@keyframes ka-note{0%{transform:translate(0px,0px) rotate(0deg);opacity:0}15%{opacity:1}100%{transform:translate(14px,-46px) rotate(20deg);opacity:0}}
.ka-note{animation:ka-note 2.4s ease-out infinite}
@keyframes ka-say1{0%,18%{transform:scale(0)}22%{transform:scale(1.12)}24%,46%{transform:scale(1)}50%,100%{transform:scale(0)}}
.ka-say1{animation:ka-say1 7s ease-out infinite}
@keyframes ka-say2{0%,54%{transform:scale(0)}58%{transform:scale(1.15)}60%,90%{transform:scale(1)}94%,100%{transform:scale(0)}}
.ka-say2{animation:ka-say2 7s ease-out infinite}
@keyframes ka-crunch{0%,54%{transform:scale(0) rotate(0deg)}58%{transform:scale(1.3) rotate(-8deg)}62%{transform:scale(1) rotate(6deg)}66%{transform:scale(1.15) rotate(-6deg)}70%{transform:scale(1) rotate(4deg)}88%{transform:scale(1) rotate(0deg)}92%,100%{transform:scale(0)}}
.ka-crunch{animation:ka-crunch 7s ease-out infinite}
@keyframes ka-book{0%,18%,50%,100%{transform:rotate(0deg)}24%,44%{transform:rotate(-8deg)}}
.ka-book{animation:ka-book 7s ease-in-out infinite}
`;

function Leg({ x, back = false }: { x: number; back?: boolean }) {
  return (
    <g>
      <path d={`M${x} -40 L${x} -6`} stroke={INK} strokeWidth={10} strokeLinecap="round" />
      <path d={`M${x} -40 L${x} -6`} stroke={back ? DK_DK : DK} strokeWidth={6} strokeLinecap="round" />
      <rect x={x - 5.5} y={-7} width={11} height={7} rx={2} fill={INK} />
    </g>
  );
}

function GrazingDonkey() {
  return (
    <g>
      <g transform="translate(36 -58)">
        <g className="ka-tail" style={{ transformBox: "view-box", transformOrigin: "0px 0px" }}>
          <path d="M0 0 Q10 10 8 30" fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" />
          <path d="M0 0 Q10 10 8 30" fill="none" stroke={DK} strokeWidth={3} strokeLinecap="round" />
          <path d="M8 28 q-6 6 -2 12 q4 -2 6 2 q4 -6 0 -14Z" fill={HAIR} stroke={INK} strokeWidth={1.4} />
        </g>
      </g>
      <Leg x={-14} back />
      <Leg x={26} back />
      <path d="M-24 -66 L-50 -32 Q-42 -22 -32 -28 L-8 -60Z" fill={DK} {...inked} />
      <path d="M-24 -66 L-46 -36" stroke={HAIR} strokeWidth={5} strokeLinecap="round" />
      <path d="M-30 -52 Q-30 -70 -8 -70 L18 -70 Q38 -70 38 -52 Q38 -34 18 -34 L-10 -34 Q-30 -34 -30 -52Z" fill={DK} {...inked} />
      <path d="M-16 -36 Q6 -30 28 -37 Q8 -41 -16 -36Z" fill={MUZ} />
      <path d="M-14 -72 L22 -72 L24 -46 L-16 -46Z" fill={C.pomegranate} {...inked} strokeWidth={2} />
      <path d="M-14 -50 H22" stroke={C.saffron} strokeWidth={2} strokeDasharray="3 3" />
      <path d="M-15 -46 L-13 -40 M-7 -46 L-5 -40 M1 -46 L3 -40 M9 -46 L11 -40 M17 -46 L19 -40" stroke={C.saffron} strokeWidth={2} strokeLinecap="round" />
      <Star8 x={4} y={-60} r={5} fill={C.saffron} />
      <Leg x={-22} />
      <Leg x={18} />
      <g transform="translate(-44 -30) rotate(-42)">
        <g className="ka-chew" style={{ transformBox: "view-box", transformOrigin: "6px -4px" }}>
          <path d="M6 -4 Q2 -30 12 -33 Q16 -20 12 -4Z" fill={DK_DK} {...inked} strokeWidth={2} />
          <g className="ka-ear" style={{ transformBox: "view-box", transformOrigin: "1px -6px" }}>
            <path d="M-2 -6 Q-10 -30 -2 -37 Q6 -26 4 -6Z" fill={DK} {...inked} strokeWidth={2} />
            <path d="M-1 -10 Q-5 -26 -1 -31 Q3 -22 2 -10Z" fill="#e8b4a8" />
          </g>
          <path d="M10 -2 Q8 -12 -2 -10 L-20 6 Q-28 16 -20 22 Q-12 26 -4 18 L10 8 Q14 2 10 -2Z" fill={DK} {...inked} />
          <g className="ka-jaw">
            <ellipse cx="-12" cy="21" rx="7" ry="4.5" fill={MUZ} {...inked} strokeWidth={1.8} />
          </g>
          <ellipse cx="-16" cy="15" rx="9" ry="7" fill={MUZ} {...inked} strokeWidth={2} />
          <ellipse cx="-21" cy="13" rx="1.4" ry="2" fill={INK} />
          <path d="M-4 -1 Q0 2 4 -1" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
          <path d="M-4 3 l-1 2 M0 3.6 v2.2 M4 3 l1 2" stroke={INK} strokeWidth={1} strokeLinecap="round" />
          <ellipse cx="-4" cy="7" rx="3.6" ry="2.2" fill="#ef8f9c" opacity=".6" />
          <path d="M4 -10 q-4 -6 2 -9 q0 5 5 4 q-2 3 -7 5Z" fill={HAIR} />
          <path d="M-14 26 l-6 6 M-10 27 l-1 8 M-17 24 l-9 3" stroke={GRASS} strokeWidth={2} strokeLinecap="round" />
        </g>
      </g>
    </g>
  );
}

function Candle({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <path d="M-8 238 Q0 231 8 238Z" fill={C.saffron} {...inked} strokeWidth={2} />
      <rect x="-2" y="212" width="4" height="22" fill={C.saffron} stroke={INK} strokeWidth={1.4} />
      <path d="M-7 212 Q0 217 7 212 Z" fill={C.saffron} {...inked} strokeWidth={1.8} />
      <rect x="-3.5" y="196" width="7" height="16" rx="1.5" fill={C.white} {...inked} strokeWidth={1.6} />
      <g transform="translate(0 195)">
        <path className="ka-flame" d="M0 -12 Q5 -5 2.5 -1 Q0 1 -2.5 -1 Q-5 -5 0 -12Z" fill="#ffcf4a" stroke={INK} strokeWidth={1.2} />
      </g>
    </g>
  );
}

const bulbs = Array.from({ length: 14 }, (_, i) => {
  const x = -4 + i * 31;
  const t = (i % 7) / 6;
  const y = 30 + Math.sin(t * Math.PI) * 18;
  return { x, y, c: [C.saffron, C.firouzeh, "#f29bb0", C.white][i % 4], d: -(i % 5) * 0.28 };
});

export default function KharAroosi({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="خر رو اگه عروسی ببرن، برای خودش علف می‌خوره" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#f3c6c0" />
      <rect x="-10" y="64" width="420" height="16" fill={C.turquoise} stroke={INK} strokeWidth={2} />
      {Array.from({ length: 11 }, (_, i) => <Star8 key={i} x={i * 40} y={72} r={5} fill={C.saffron} />)}
      <path d="M-4 30 Q90 52 182 30 Q274 52 404 30" fill="none" stroke={INK} strokeWidth={1.4} />
      {bulbs.map((b, i) => (
        <g key={i}>
          <path d={`M${b.x} ${b.y} v4`} stroke={INK} strokeWidth={1.2} />
          <circle className="ka-tw" style={{ animationDelay: `${b.d}s` }} cx={b.x} cy={b.y + 8} r="4" fill={b.c} stroke={INK} strokeWidth={1.3} />
        </g>
      ))}

      <path d="M128 244 V140 Q128 100 200 86 Q272 100 272 140 V244Z" fill="#f7e3e2" />
      <path d="M120 244 V138 Q120 92 200 76 Q280 92 280 138 V244" fill="none" stroke={INK} strokeWidth={13} strokeLinejoin="round" />
      <path d="M120 244 V138 Q120 92 200 76 Q280 92 280 138 V244" fill="none" stroke={C.saffron} strokeWidth={8} strokeLinejoin="round" />
      <path d="M120 244 V138 Q120 92 200 76 Q280 92 280 138 V244" fill="none" stroke={C.white} strokeWidth={3} strokeDasharray="3 4" />
      {[[120, 236], [120, 200], [120, 164], [126, 128], [148, 100], [176, 84], [200, 80], [224, 84], [252, 100], [274, 128], [280, 164], [280, 200], [280, 236]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="5" fill={[C.pomegranate, C.white, "#f29bb0"][i % 3]} stroke={INK} strokeWidth={1.3} />
          <circle cx={x} cy={y} r="1.5" fill={C.saffron} />
        </g>
      ))}

      <rect x="-10" y="244" width="420" height="70" fill={C.pomegranate} stroke={INK} strokeWidth={2.5} />
      <path d="M-10 252 H410 M-10 296 H410" stroke={C.saffron} strokeWidth={2} strokeDasharray="6 4" />

      <g transform="translate(166 240) scale(.66)">
        <Person robe={C.white} sash="#f0c0c8" hat="#fffaf0" hatKind="scarf" mood="calm" armL={18} armR={-24}>
          <g transform="translate(-20 -30)">
            <circle cx="-4" cy="-4" r="4" fill={C.pomegranate} stroke={INK} strokeWidth={1.4} />
            <circle cx="4" cy="-5" r="4" fill="#f29bb0" stroke={INK} strokeWidth={1.4} />
            <circle cx="0" cy="-10" r="4" fill={C.white} stroke={INK} strokeWidth={1.4} />
          </g>
        </Person>
      </g>
      <g transform="translate(234 240) scale(.66)">
        <Person robe={C.navy} sash={C.saffron} hat="#3a2c22" hatKind="kolah" mood="smug" armL={24} armR={-16} />
      </g>

      <path d="M136 228 L264 228 L278 254 L122 254Z" fill={C.cream} {...inked} />
      <path d="M141 232 L259 232 L271 250 L129 250Z" fill="none" stroke={C.saffron} strokeWidth={2} strokeDasharray="4 3" />
      <ellipse cx="200" cy="206" rx="17" ry="23" fill={C.saffron} {...inked} />
      <ellipse cx="200" cy="206" rx="12" ry="18" fill="#dfe9ee" stroke={INK} strokeWidth={1.4} />
      <path d="M193 196 l7 -6 M192 205 l11 -10" stroke={C.white} strokeWidth={2} strokeLinecap="round" />
      <Candle x={174} />
      <Candle x={226} />

      <g transform="translate(316 252) scale(.6)">
        <g className="ka-book o-bottom">
          <Person robe={C.cream} sash={C.olive} hat={C.white} mood="serious" beard armL={-40} armR={30}>
            <path d="M-12 -32 L0 -36 L12 -32 L12 -18 L0 -22 L-12 -18Z" fill={C.olive} {...inked} strokeWidth={2} />
            <path d="M0 -36 V-22" stroke={INK} strokeWidth={1.4} />
          </Person>
        </g>
      </g>

      <g transform="translate(52 286) scale(.72)">
        <g className="ka-sway o-bottom">
          <Person robe={C.lapis} sash={C.saffron} hat={C.saffron} mood="calm" armL={-30} armRClass="ka-daf">
            <ellipse cx="-14" cy="-46" rx="16" ry="17" fill={C.sand} {...inked} />
            <ellipse cx="-14" cy="-46" rx="11" ry="12" fill="none" stroke={C.terracotta} strokeWidth={1.4} strokeDasharray="2 3" />
            <g fill={C.saffron} stroke={INK} strokeWidth={1}>
              <circle cx="-29" cy="-46" r="2" /><circle cx="-14" cy="-62" r="2" /><circle cx="1" cy="-46" r="2" /><circle cx="-14" cy="-30" r="2" />
            </g>
          </Person>
        </g>
      </g>
      {[0, -0.8, -1.6].map((d, i) => (
        <g key={i} transform={`translate(${70 + i * 6} 222)`}>
          <text className="ka-note" style={{ animationDelay: `${d}s` }} x="0" y="0" fontFamily="serif" fontSize="16" fontWeight={700} fill={C.lapis}>{i === 1 ? "♫" : "♪"}</text>
        </g>
      ))}

      <g transform="translate(352 288) scale(.72)">
        <Person robe={C.olive} sash={C.pomegranate} hat={C.cream} hatKind="scarf" mood="calm" armLClass="ka-clapL" armRClass="ka-clapR" />
      </g>

      <g transform="translate(210 290) scale(.78)">
        <GrazingDonkey />
      </g>
      <path d="M150 292 Q152 276 160 278 Q164 268 172 274 Q180 266 186 278 Q194 276 194 292Z" fill={GRASS} {...inked} strokeWidth={2} />
      <path d="M160 288 l-2 -10 M168 286 l1 -12 M176 288 l3 -11 M184 289 l4 -8" stroke="#5a8a35" strokeWidth={1.6} strokeLinecap="round" />
      {[0, -0.37, -0.74].map((d, i) => (
        <g key={i} transform={`translate(${176 + i * 4} 278)`}>
          <path className="ka-bit" style={{ animationDelay: `${d}s` }} d="M0 0 l4 -6" stroke={GRASS} strokeWidth={2.4} strokeLinecap="round" />
        </g>
      ))}
      <g transform="translate(150 250)">
        <text className="ka-crunch" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="14" fill={C.olive} stroke={INK} strokeWidth={.8} direction="rtl">خرچ!</text>
      </g>

      {big && <Bubble x={300} y={170} w={92} text="بار سوم...؟" flip className="ka-say1 o-bottom" />}
      {big && <Bubble x={160} y={236} w={84} text="خرچ، خرچ" flip className="ka-say2 o-bottom" />}
    </Scene>
  );
}
