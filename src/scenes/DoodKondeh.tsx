import { Scene, Person, Cloud, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const BARK = "#8a5a3b";
const BARK_DK = "#6b432b";
const WOOD = "#e0b880";
const MOSS = "#8fa86a";
const MOSS_DK = "#6f8a4f";
const SMOKE = "#cfcbd6";
const SMOKE_DK = "#a9a4b6";

function chug() {
  const fr: string[] = ["0%,25%{transform:translate(0px,0px) scale(1,1)}"];
  let i = 0;
  for (let p = 26; p < 36; p += 1, i++) fr.push(`${p}%{transform:translate(${i % 2 ? 1.5 : -1.5}px,0px) scale(1,1)}`);
  fr.push("36%{transform:translate(0px,0px) scale(1,1)}");
  fr.push("38%{transform:translate(0px,0px) scale(.94,1.08)}");
  for (let p = 40, k = 0; p < 86; p += 2, k++) fr.push(`${p}%{transform:translate(0px,0px) scale(${k % 2 ? "1.03,.97" : ".98,1.03"})}`);
  fr.push("86%,100%{transform:translate(0px,0px) scale(1,1)}");
  return `@keyframes dk-chug{${fr.join("")}}`;
}

const CSS = `
${chug()}
.dk-chug{animation:dk-chug 8s linear infinite}
@keyframes dk-pre{0%,30%{opacity:1}34%,100%{opacity:0}}
.dk-pre{animation:dk-pre 8s linear infinite}
@keyframes dk-big{0%,36%{opacity:0}39%,84%{opacity:1}92%,100%{opacity:0}}
.dk-big{animation:dk-big 8s linear infinite}
@keyframes dk-puff{0%{transform:translate(0px,0px) scale(.4);opacity:0}8%{opacity:1}70%{opacity:.9}100%{transform:translate(var(--dx),-170px) scale(2.8);opacity:0}}
.dk-puff{animation:dk-puff 1.4s ease-out infinite}
@keyframes dk-small{0%{transform:translate(0px,0px) scale(.3);opacity:0}15%{opacity:1}100%{transform:translate(-10px,-56px) scale(1.2);opacity:0}}
.dk-small{animation:dk-small 1.3s ease-out infinite}
@keyframes dk-ring{0%{transform:translate(0px,0px) scale(.4);opacity:0}10%{opacity:1}100%{transform:translate(12px,-150px) scale(2.4);opacity:0}}
.dk-ring{animation:dk-ring 2s ease-out infinite}
@keyframes dk-brow{0%,28%{transform:translateY(0px)}32%,36%{transform:translateY(-7px)}38%{transform:translateY(1px)}42%{transform:translateY(-4px)}46%{transform:translateY(0px)}56%{transform:translateY(-4px)}60%,100%{transform:translateY(0px)}}
.dk-brow{animation:dk-brow 8s ease-in-out infinite}
@keyframes dk-leanL{0%,37%{transform:rotate(0deg)}42%{transform:rotate(-22deg)}46%,82%{transform:rotate(-16deg)}50%,58%,66%,74%{transform:rotate(-20deg)}88%,100%{transform:rotate(0deg)}}
@keyframes dk-leanR{0%,37%{transform:rotate(0deg)}42%{transform:rotate(22deg)}46%,82%{transform:rotate(16deg)}50%,58%,66%,74%{transform:rotate(20deg)}88%,100%{transform:rotate(0deg)}}
.dk-leanL{animation:dk-leanL 8s ease-in-out infinite}
.dk-leanR{animation:dk-leanR 8s ease-in-out infinite}
@keyframes dk-leaf{0%,38%{transform:translate(0px,0px) rotate(0deg);opacity:0}40%{opacity:1}70%{transform:translate(var(--dx),-40px) rotate(260deg);opacity:0}100%{opacity:0}}
.dk-leaf{animation:dk-leaf 8s ease-out infinite}
@keyframes dk-armL{0%,37%{transform:rotate(14deg)}40%,86%{transform:rotate(162deg)}92%,100%{transform:rotate(14deg)}}
@keyframes dk-armR{0%,37%{transform:rotate(-14deg)}40%,86%{transform:rotate(-162deg)}92%,100%{transform:rotate(-14deg)}}
.dk-armL{animation:dk-armL 8s ease-out infinite}
.dk-armR{animation:dk-armR 8s ease-out infinite}
@keyframes dk-jump{0%,37%{transform:translateY(0px)}40%{transform:translateY(-14px)}44%,86%{transform:translateY(0px)}100%{transform:translateY(0px)}}
.dk-jump{animation:dk-jump 8s ease-out infinite}
@keyframes dk-bang{0%,38%{transform:scale(0)}41%{transform:scale(1.4)}44%,82%{transform:scale(1)}86%,100%{transform:scale(0)}}
.dk-bang{animation:dk-bang 8s ease-out infinite}
@keyframes dk-sfx{0%,38%{transform:scale(0) rotate(0deg)}42%{transform:scale(1.25) rotate(-4deg)}46%{transform:scale(1) rotate(3deg)}50%{transform:scale(1.15) rotate(-3deg)}54%{transform:scale(1) rotate(2deg)}62%{transform:scale(1.1) rotate(-2deg)}84%{transform:scale(1) rotate(0deg)}88%,100%{transform:scale(0)}}
.dk-sfx{animation:dk-sfx 8s ease-out infinite}
@keyframes dk-say{0%,58%{transform:scale(0)}62%{transform:scale(1.12)}64%,86%{transform:scale(1)}90%,100%{transform:scale(0)}}
.dk-say{animation:dk-say 8s ease-out infinite}
@keyframes dk-cloud{0%,100%{transform:translateX(-6px)}50%{transform:translateX(8px)}}
.dk-cloud{animation:dk-cloud 8s ease-in-out infinite}
`;

function Puff({ fill = SMOKE }: { fill?: string }) {
  return (
    <g>
      <circle cx="0" cy="0" r="12" fill={fill} stroke={INK} strokeWidth={1.6} />
      <circle cx="11" cy="-5" r="9" fill={fill} stroke={INK} strokeWidth={1.5} />
      <circle cx="-9" cy="-6" r="8" fill={SMOKE_DK} stroke={INK} strokeWidth={1.4} />
      <path d="M-4 -4 q4 -4 8 0" fill="none" stroke={C.white} strokeWidth={1.6} strokeLinecap="round" />
    </g>
  );
}

function Sapling({ face = true }: { face?: boolean }) {
  return (
    <g>
      <path d="M0 0 Q-2 -24 1 -46" fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" />
      <path d="M0 0 Q-2 -24 1 -46" fill="none" stroke={BARK} strokeWidth={2.6} strokeLinecap="round" />
      <path d="M1 -30 Q8 -34 10 -40" fill="none" stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <ellipse cx="1" cy="-58" rx="13" ry="15" fill={C.olive} {...inked} strokeWidth={2} />
      <path d="M-6 -62 q4 -3 7 0 M2 -52 q4 -3 7 0" fill="none" stroke="#4f6e38" strokeWidth={1.4} strokeLinecap="round" />
      <ellipse cx="11" cy="-41" rx="4" ry="2.4" fill={C.olive} stroke={INK} strokeWidth={1.2} />
      {face && (
        <g>
          <circle cx="-3" cy="-24" r="2.2" fill={C.white} stroke={INK} strokeWidth={1} />
          <circle cx="4" cy="-24" r="2.2" fill={C.white} stroke={INK} strokeWidth={1} />
          <circle cx="-3" cy="-24" r=".9" fill={INK} />
          <circle cx="4" cy="-24" r=".9" fill={INK} />
          <ellipse cx=".5" cy="-18" rx="1.6" ry="2.2" fill={INK} />
        </g>
      )}
    </g>
  );
}

const puffs = [
  { d: 0, dx: "-30px" },
  { d: -0.28, dx: "20px" },
  { d: -0.56, dx: "-8px" },
  { d: -0.84, dx: "34px" },
  { d: -1.12, dx: "-22px" },
];
const leaves = [
  { x: 88, y: 200, dx: "-40px", d: 0 },
  { x: 120, y: 196, dx: "-30px", d: -0.2 },
  { x: 300, y: 196, dx: "40px", d: -0.1 },
];

export default function DoodKondeh({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="دود از کنده بلند می‌شه" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#c9d6a3" />
      <Cloud x={34} y={60} s={.9} className="dk-cloud" />
      <Cloud x={306} y={48} s={.8} className="dk-cloud" style={{ animationDelay: "-4s" }} />
      <path d="M-10 214 Q50 180 110 204 Q170 176 230 200 Q300 172 410 200 L410 260 L-10 260Z" fill="#9fb878" {...inked} />
      <path d="M40 206 q8 -6 16 0 M260 196 q8 -6 16 0" fill="none" stroke={INK} strokeWidth={1.2} opacity=".5" />
      <rect x="-10" y="254" width="420" height="60" fill="#7f9c58" stroke={INK} strokeWidth={2.5} />
      <path d="M-10 262 H410" stroke={INK} strokeWidth={1} strokeDasharray="2 6" opacity=".5" />
      <path d="M30 276 q6 -6 12 0 M120 290 q6 -6 12 0 M300 280 q6 -6 12 0 M372 292 q6 -6 12 0" fill="none" stroke={INK} strokeWidth={1.3} opacity=".55" />

      <g transform="translate(88 258)"><g className="dk-leanL o-bottom"><Sapling /></g></g>
      <g transform="translate(120 258) scale(.85)"><g className="dk-leanL o-bottom" style={{ animationDelay: "-.1s" }}><Sapling /></g></g>
      <g transform="translate(302 258)"><g className="dk-leanR o-bottom"><Sapling /></g></g>
      {leaves.map((l, i) => (
        <g key={i} transform={`translate(${l.x} ${l.y})`}>
          <path className="dk-leaf" style={{ ["--dx" as string]: l.dx, animationDelay: `${l.d}s`, opacity: 0 }} d="M0 0 Q4 -5 8 0 Q4 5 0 0Z" fill={C.olive} stroke={INK} strokeWidth={1} />
        </g>
      ))}

      <g className="dk-pre" style={{ opacity: 0 }}>
        {[0, -0.43, -0.86].map((d, i) => (
          <g key={i} transform="translate(205 150)">
            <g className="dk-small" style={{ animationDelay: `${d}s` }}><Puff /></g>
          </g>
        ))}
      </g>

      <g className="dk-big">
        {[0, -1].map((d, i) => (
          <g key={i} transform="translate(205 140)">
            <g className="dk-ring" style={{ animationDelay: `${d}s` }}>
              <ellipse cx="0" cy="0" rx="18" ry="7" fill="none" stroke={INK} strokeWidth={8} />
              <ellipse cx="0" cy="0" rx="18" ry="7" fill="none" stroke={SMOKE} strokeWidth={5} />
            </g>
          </g>
        ))}
        {puffs.map((p, i) => (
          <g key={i} transform="translate(205 150)">
            <g className="dk-puff" style={{ ["--dx" as string]: p.dx, animationDelay: `${p.d}s` }}><Puff fill={i % 2 ? SMOKE : "#e4e1ea"} /></g>
          </g>
        ))}
      </g>

      <g transform="translate(205 258)">
        <g className="dk-chug o-bottom">
          <path d="M-62 0 Q-80 -2 -96 6 L-50 6Z M58 0 Q82 -4 98 6 L50 6Z" fill={BARK} {...inked} />
          <path d="M-70 0 Q-60 -26 -54 -44 Q-62 -76 -50 -106 L50 -106 Q62 -76 54 -44 Q60 -26 72 0 Q0 8 -70 0Z" fill={BARK} {...inked} />
          <path d="M-40 -100 Q-46 -70 -38 -44 Q-44 -24 -48 -4 M38 -98 Q46 -68 40 -42 Q46 -22 52 -4 M-24 -30 Q-28 -16 -26 -2 M26 -28 Q30 -14 28 -2" fill="none" stroke={BARK_DK} strokeWidth={2.4} strokeLinecap="round" />
          <path d="M52 -80 Q72 -86 80 -104 L88 -98 Q80 -78 56 -66Z" fill={BARK} {...inked} strokeWidth={2.2} />
          <path d="M82 -104 Q80 -116 90 -118 Q94 -108 86 -102Z" fill={C.olive} stroke={INK} strokeWidth={1.4} />
          <ellipse cx="0" cy="-106" rx="50" ry="11" fill={WOOD} {...inked} />
          <ellipse cx="0" cy="-106" rx="36" ry="7.5" fill="none" stroke={BARK} strokeWidth={1.3} />
          <ellipse cx="0" cy="-106" rx="22" ry="4.8" fill="none" stroke={BARK} strokeWidth={1.3} />
          <ellipse cx="0" cy="-107" rx="10" ry="3.2" fill="#3a2418" stroke={INK} strokeWidth={1.6} />

          <path d="M-34 -64 Q-22 -72 -10 -64 Q-22 -58 -34 -64Z M10 -64 Q22 -72 34 -64 Q22 -58 10 -64Z" fill={C.white} stroke={INK} strokeWidth={1.6} />
          <circle cx="-20" cy="-64" r="3" fill={INK} />
          <circle cx="24" cy="-64" r="3" fill={INK} />
          <path d="M-35 -64 Q-22 -71 -9 -64 Q-22 -67 -35 -64Z M9 -64 Q22 -71 35 -64 Q22 -67 9 -64Z" fill={BARK_DK} stroke={INK} strokeWidth={1.4} />
          <g className="dk-brow">
            <path d="M-40 -74 q-2 -8 6 -9 q2 -7 10 -4 q6 -5 11 1 q6 -1 5 6 q-14 -2 -32 6Z" fill={C.white} {...inked} strokeWidth={1.8} />
            <path d="M40 -74 q2 -8 -6 -9 q-2 -7 -10 -4 q-6 -5 -11 1 q-6 -1 -5 6 q14 -2 32 6Z" fill={C.white} {...inked} strokeWidth={1.8} />
          </g>
          <path d="M-2 -62 Q-8 -50 -4 -46 Q2 -42 6 -48 Q8 -54 2 -62" fill={BARK_DK} {...inked} strokeWidth={1.8} />
          <circle cx="-30" cy="-50" r="5" fill="#e58a7a" opacity=".45" />
          <circle cx="32" cy="-50" r="5" fill="#e58a7a" opacity=".45" />
          <path d="M-26 -40 Q-16 -42 -14 -36 Q-8 -24 0 -36 Q8 -24 14 -36 Q16 -42 26 -40 Q30 -24 24 -10 Q20 -4 16 -14 Q12 2 6 -10 Q2 4 -4 -10 Q-10 2 -14 -12 Q-20 -2 -24 -12 Q-30 -24 -26 -40Z" fill={MOSS} {...inked} strokeWidth={2} />
          <path d="M-16 -30 v10 M-4 -28 v12 M8 -28 v10 M18 -30 v8" stroke={MOSS_DK} strokeWidth={1.6} strokeLinecap="round" />
          <path d="M-12 -38 Q2 -30 16 -40" fill="none" stroke={INK} strokeWidth={2} strokeLinecap="round" />
        </g>
      </g>

      <g transform="translate(52 290) scale(.6)">
        <g className="dk-jump">
          <Person robe={C.pomegranate} sash={C.saffron} hat={C.cream} mood="shocked" armLClass="dk-armL" armRClass="dk-armR" />
        </g>
      </g>
      <g transform="translate(352 290) scale(.6)">
        <g className="dk-jump" style={{ animationDelay: "-.1s" }}>
          <Person robe={C.lapis} sash={C.turquoise} hat={C.saffron} hatKind="kolah" mood="shocked" beard armLClass="dk-armL" armRClass="dk-armR" />
        </g>
      </g>
      <g transform="translate(52 216)"><text className="dk-bang" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="22" fill={C.pomegranate} stroke={INK} strokeWidth={1}>!</text></g>
      <g transform="translate(352 216)"><text className="dk-bang" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="22" fill={C.pomegranate} stroke={INK} strokeWidth={1}>!</text></g>

      {big && (
        <g transform="translate(300 96)">
          <text className="dk-sfx" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="22" fill={C.saffron} stroke={INK} strokeWidth={1.2} direction="rtl">چوووو چوووو!</text>
        </g>
      )}
      {big && <Bubble x={150} y={176} w={118} text="شما جوونا..." flip className="dk-say o-bottom" />}
    </Scene>
  );
}
