import { Scene, Person, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const NIGHT_WALL = "#8a7a8e";
const NIGHT_WALL_DK = "#6e6075";
const GLASS = "#1c2040";
const LIT = "#ffd27a";

const CSS = `
@keyframes ch-walk{0%,8%{transform:translateX(0px);opacity:0}11%,14%{transform:translateX(0px);opacity:1}66%,88%{transform:translateX(146px);opacity:1}92%,98%{transform:translateX(146px);opacity:0}99%,100%{transform:translateX(0px);opacity:0}}
.ch-walk{animation:ch-walk 8s ease-in-out infinite}
@keyframes ch-bob{0%,14%{transform:translateY(0px)}16%,20%,24%,28%,32%,36%,40%,44%,48%,52%,56%,60%,64%{transform:translateY(-4px)}18%,22%,26%,30%,34%,38%,42%,46%,50%,54%,58%,62%,66%,100%{transform:translateY(0px)}}
.ch-bob{animation:ch-bob 8s linear infinite}
@keyframes ch-sway{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}
.ch-sway{animation:ch-sway 1s ease-in-out infinite}
@keyframes ch-flame{0%,100%{transform:scale(1,1)}50%{transform:scale(.85,1.18)}}
.scene .ch-flame{animation:ch-flame .7s ease-in-out infinite;transform-origin:50% 100%}
@keyframes ch-glow{0%,100%{transform:scale(1);opacity:.75}50%{transform:scale(1.06);opacity:.9}}
.ch-glow{animation:ch-glow 1.4s ease-in-out infinite}
@keyframes ch-lit{0%,9%{opacity:1}16%,92%{opacity:0}98%,100%{opacity:1}}
.ch-lit{animation:ch-lit 8s ease-in-out infinite}
@keyframes ch-eyes{0%,12%{opacity:0}18%,92%{opacity:1}96%,100%{opacity:0}}
.ch-eyes{animation:ch-eyes 8s linear infinite}
@keyframes ch-pupil{0%,20%{transform:translateX(-1px)}40%,100%{transform:translateX(1.6px)}}
.ch-pupil{animation:ch-pupil 8s ease-in-out infinite}
@keyframes ch-tw{0%,100%{opacity:1}50%{opacity:.35}}
.ch-tw{animation:ch-tw 1.2s ease-in-out infinite}
@keyframes ch-star{0%,100%{opacity:1}50%{opacity:.25}}
.ch-star{animation:ch-star 2.6s ease-in-out infinite}
@keyframes ch-halo{0%,64%{transform:scale(1);opacity:.55}70%{transform:scale(1.18);opacity:.9}76%{transform:scale(1.05);opacity:.75}82%{transform:scale(1.15);opacity:.9}90%,100%{transform:scale(1);opacity:.55}}
.ch-halo{animation:ch-halo 8s ease-in-out infinite}
@keyframes ch-chand{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}
.ch-chand{animation:ch-chand 2.4s ease-in-out infinite}
@keyframes ch-dots{0%,66%{opacity:0}70%,90%{opacity:1}94%,100%{opacity:0}}
.ch-dots{animation:ch-dots 8s linear infinite}
@keyframes ch-say1{0%,66%{transform:scale(0)}70%{transform:scale(1.12)}72%,88%{transform:scale(1)}91%,100%{transform:scale(0)}}
.ch-say1{animation:ch-say1 8s ease-out infinite}
@keyframes ch-say2{0%,74%{transform:scale(0)}78%{transform:scale(1.12)}80%,90%{transform:scale(1)}93%,100%{transform:scale(0)}}
.ch-say2{animation:ch-say2 8s ease-out infinite}
`;

const domeLights: [number, number][] = [
  [264, 190], [262, 176], [266, 162], [274, 150], [286, 140], [296, 130], [305, 118], [314, 130], [324, 140], [336, 150], [344, 162], [348, 176], [346, 190],
];

function Lantern() {
  return (
    <g>
      <path d="M0 0 V6" stroke={INK} strokeWidth={2} />
      <circle cx="0" cy="-1" r="2.4" fill="none" stroke={INK} strokeWidth={1.6} />
      <path d="M-9 6 L9 6 L13 14 L-13 14Z" fill={C.saffron} {...inked} strokeWidth={1.8} />
      <rect x="-12" y="14" width="24" height="26" rx="3" fill="#ffe9a8" {...inked} strokeWidth={2} />
      <g transform="translate(0 34)">
        <path className="ch-flame" d="M0 -14 Q6 -6 3 -1 Q0 1 -3 -1 Q-6 -6 0 -14Z" fill={C.saffron} stroke={INK} strokeWidth={1.2} />
      </g>
      <path d="M-6 14 V40 M6 14 V40" stroke={C.saffron} strokeWidth={1.6} />
      <path d="M-14 40 L14 40 L10 47 L-10 47Z" fill={C.saffron} {...inked} strokeWidth={1.8} />
    </g>
  );
}

function Chandelier({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="ch-chand" style={{ transformBox: "view-box", transformOrigin: "0px 0px" }}>
        <path d="M0 0 V10" stroke={INK} strokeWidth={1.2} />
        <path d="M-9 12 Q0 18 9 12" fill="none" stroke={C.saffron} strokeWidth={2} />
        {[-9, -3, 3, 9].map((dx) => (
          <circle key={dx} className="ch-tw" style={{ animationDelay: `${dx * 0.07}s` }} cx={dx} cy={11} r="1.8" fill={C.white} />
        ))}
        <circle cx="0" cy="18" r="2" fill={C.saffron} stroke={INK} strokeWidth={.8} />
      </g>
    </g>
  );
}

export default function Cheragh({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="چراغی که به خونه رواست، به مسجد حرامه" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <defs>
        <radialGradient id="ch-glow">
          <stop offset="0" stopColor={LIT} stopOpacity=".85" />
          <stop offset="1" stopColor={LIT} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="-10" y="-10" width="420" height="320" fill="#2c3566" />
      <g fill={C.cream}>
        {[[30, 30, 0], [140, 22, -1], [190, 60, -.5], [220, 24, -1.8], [380, 30, -.9], [120, 96, -2.1], [24, 120, -1.3]].map(([x, y, d], i) => (
          <circle key={i} className="ch-star" style={{ animationDelay: `${d}s` }} cx={x} cy={y} r="1.5" />
        ))}
      </g>
      <Star8 x={170} y={40} r={4} fill={C.saffron} className="ch-star" />
      <circle cx="74" cy="54" r="16" fill={C.cream} {...inked} />
      <circle cx="82" cy="48" r="14" fill="#2c3566" />

      <circle className="ch-halo" cx="305" cy="170" r="110" fill="url(#ch-glow)" />

      <path d="M-10 220 Q60 204 120 216 Q200 196 260 214 Q330 200 410 212 L410 252 L-10 252Z" fill="#3a3f6e" {...inked} />
      <rect x="-10" y="250" width="420" height="70" fill="#4a4366" stroke={INK} strokeWidth={2.5} />
      <path d="M-10 258 H410" stroke={INK} strokeWidth={1} strokeDasharray="2 6" opacity=".5" />

      <g>
        <rect x="34" y="170" width="114" height="82" fill={NIGHT_WALL} {...inked} />
        <rect x="30" y="162" width="122" height="10" fill={NIGHT_WALL_DK} {...inked} strokeWidth={2} />
        <path d="M44 236 H86 M96 186 H140" stroke={NIGHT_WALL_DK} strokeWidth={1.5} />
        <path d="M112 252 V222 Q124 208 136 222 V252Z" fill={GLASS} {...inked} strokeWidth={2} />
        <rect x="46" y="188" width="26" height="26" fill={GLASS} {...inked} strokeWidth={2} />
        <rect x="80" y="188" width="22" height="26" fill={GLASS} {...inked} strokeWidth={2} />
        <g className="ch-lit" style={{ opacity: 0 }}>
          <rect x="46" y="188" width="26" height="26" fill={LIT} {...inked} strokeWidth={2} />
          <rect x="80" y="188" width="22" height="26" fill={LIT} {...inked} strokeWidth={2} />
          <path d="M112 252 V222 Q124 208 136 222 V252Z" fill={LIT} {...inked} strokeWidth={2} />
          <circle cx="90" cy="206" r="60" fill="url(#ch-glow)" opacity=".5" />
        </g>
        <path d="M59 188 V214 M46 201 H72 M91 188 V214 M80 201 H102" stroke={INK} strokeWidth={1.6} />
        <g className="ch-eyes">
          <rect x="47.5" y="189.5" width="23" height="11" fill={GLASS} />
          <ellipse cx="54" cy="196" rx="4" ry="3" fill={C.white} stroke={INK} strokeWidth={1} />
          <ellipse cx="64" cy="196" rx="4" ry="3" fill={C.white} stroke={INK} strokeWidth={1} />
          <g className="ch-pupil">
            <circle cx="54" cy="196.5" r="1.5" fill={INK} />
            <circle cx="64" cy="196.5" r="1.5" fill={INK} />
          </g>
          <path d="M50 191.5 L57 193 M68 191.5 L61 193" stroke={C.white} strokeWidth={1.2} strokeLinecap="round" />
        </g>
        <path d="M34 162 V156 M148 162 V156 M58 162 V158 M82 162 V158 M106 162 V158 M130 162 V158" stroke={INK} strokeWidth={2} />
      </g>

      <g>
        <rect x="231" y="112" width="14" height="140" fill={C.cream} {...inked} />
        <rect x="365" y="112" width="14" height="140" fill={C.cream} {...inked} />
        <path d="M231 150 H245 M365 150 H379 M231 190 H245 M365 190 H379" stroke={C.turquoise} strokeWidth={3} />
        <rect x="227" y="132" width="22" height="7" fill={C.turquoise} stroke={INK} strokeWidth={1.8} />
        <rect x="361" y="132" width="22" height="7" fill={C.turquoise} stroke={INK} strokeWidth={1.8} />
        <path d="M231 112 L238 88 L245 112Z M365 112 L372 88 L379 112Z" fill={C.firouzeh} {...inked} strokeWidth={2} />
        <rect x="252" y="196" width="106" height="56" fill={C.cream} {...inked} />
        <path d="M252 204 H358" stroke={C.turquoise} strokeWidth={4} />
        <path d="M262 196 Q256 160 280 140 Q300 126 305 112 Q310 126 330 140 Q354 160 348 196Z" fill={C.firouzeh} {...inked} />
        <path d="M268 182 Q305 170 342 182 M276 160 Q305 150 334 160" fill="none" stroke={C.lapis} strokeWidth={2} strokeDasharray="4 4" />
        <path d="M305 112 V100" stroke={INK} strokeWidth={2} />
        <path d="M301 94 Q305 88 311 92 Q305 90 305 98 Q303 98 301 94Z" fill={C.saffron} stroke={INK} strokeWidth={1.2} />
        <path d="M288 252 V226 Q305 206 322 226 V252Z" fill="#ffe08a" {...inked} />
        <Chandelier x={305} y={214} />
        <path d="M262 236 V224 Q269 214 276 224 V236Z M334 236 V224 Q341 214 348 224 V236Z" fill={LIT} {...inked} strokeWidth={2} />
        <Chandelier x={269} y={216} />
        <Chandelier x={341} y={216} />
        {domeLights.map(([x, y], i) => (
          <circle key={`d${i}`} className="ch-tw" style={{ animationDelay: `${-(i % 3) * 0.4}s` }} cx={x} cy={y} r="2.4" fill={C.white} stroke={INK} strokeWidth={.8} />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <circle key={`r${i}`} className="ch-tw" style={{ animationDelay: `${-(i % 3) * 0.4}s` }} cx={256 + i * 14} cy={196} r="2.2" fill={LIT} stroke={INK} strokeWidth={.8} />
        ))}
        {[231, 236, 241, 246, 365, 370, 375, 380].map((x, i) => (
          <circle key={`m${i}`} className="ch-tw" style={{ animationDelay: `${-(i % 3) * 0.4}s` }} cx={x - 1} cy={132} r="1.8" fill={C.white} />
        ))}
        {[168, 210].map((y) =>
          [238, 372].map((x, i) => <circle key={`n${x}${y}`} className="ch-tw" style={{ animationDelay: `${-i * 0.6}s` }} cx={x} cy={y} r="2" fill={LIT} stroke={INK} strokeWidth={.8} />)
        )}
      </g>

      <g className="ch-walk">
        <g transform="translate(124 256) scale(.66)">
          <g className="ch-bob">
            <circle className="ch-glow" cx="33" cy="-40" r="64" fill="url(#ch-glow)" />
            <Person robe={C.pomegranate} sash={C.saffron} hat={C.white} mood="smug" beard armL={10} armR={-120} />
            <g transform="translate(33 -71)">
              <g className="ch-sway" style={{ transformBox: "view-box", transformOrigin: "0px 0px" }}><Lantern /></g>
            </g>
          </g>
        </g>
      </g>

      <g className="ch-dots" style={{ opacity: 0 }}>
        <text x="59" y="182" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="14" fill={C.cream}>...</text>
      </g>
      {big && <Bubble x={330} y={104} w={138} text="ما هزارتا لوستر داریم!" flip className="ch-say1 o-bottom" />}
      {big && <Bubble x={58} y={184} w={74} text="...تاریکه" className="ch-say2 o-bottom" />}
    </Scene>
  );
}
