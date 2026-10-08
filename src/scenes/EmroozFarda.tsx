import { Scene, Person, Face, Turban, Star8, Bubble, C, INK, SKIN, inked } from "./parts";
import type { SceneProps } from "./types";

const D = 75;
const X0 = 66;
const WOOD = "#8a5a3b";
const WOOD_DK = "#6b432b";
const BOX = "#c99a5b";
const BOX_DK = "#a87a40";
const LABELS = ["دیروز", "امروز", "فردا", "پس‌فردا", "پسون‌فردا", "...", "..."];

const CSS = `
.ef-hide{display:none}
@keyframes ef-world{0%,84%{transform:translateX(0px)}98%,100%{transform:translateX(-${D}px)}}
.ef-world{animation:ef-world 7s ease-in-out infinite}
@keyframes ef-push{0%,8%{transform:translateX(0px)}45%,100%{transform:translateX(${D}px)}}
.ef-push{animation:ef-push 7s ease-in-out infinite}
@keyframes ef-bob{0%,8%{transform:translateY(0px) rotate(0deg)}10%,14%,18%,22%,26%,30%,34%,38%,42%{transform:translateY(-3px) rotate(8deg)}12%,16%,20%,24%,28%,32%,36%,40%,44%{transform:translateY(0px) rotate(10deg)}46%,100%{transform:translateY(0px) rotate(0deg)}}
.ef-bob{animation:ef-bob 7s linear infinite}
@keyframes ef-lean{0%,58%{transform:rotate(0deg)}63%,84%{transform:rotate(15deg)}89%,100%{transform:rotate(0deg)}}
.ef-lean{animation:ef-lean 7s ease-in-out infinite}
@keyframes ef-armL{0%,46%{transform:rotate(-60deg)}48%{transform:rotate(-34deg)}50%{transform:rotate(-18deg)}52%{transform:rotate(-34deg)}54%{transform:rotate(-18deg)}56%{transform:rotate(-34deg)}58%{transform:rotate(-18deg)}62%,86%{transform:rotate(12deg)}92%,100%{transform:rotate(-60deg)}}
@keyframes ef-armR{0%,46%{transform:rotate(-82deg)}48%{transform:rotate(34deg)}50%{transform:rotate(18deg)}52%{transform:rotate(34deg)}54%{transform:rotate(18deg)}56%{transform:rotate(34deg)}58%{transform:rotate(18deg)}62%,86%{transform:rotate(-58deg)}92%,100%{transform:rotate(-82deg)}}
.ef-armL{animation:ef-armL 7s ease-in-out infinite}
.ef-armR{animation:ef-armR 7s ease-in-out infinite}
@keyframes ef-awake{0%,59%{opacity:1}61%,86%{opacity:0}88%,100%{opacity:1}}
.ef-awake{animation:ef-awake 7s linear infinite}
@keyframes ef-sleep{0%,59%{opacity:0}61%,86%{opacity:1}88%,100%{opacity:0}}
.ef-sleep{animation:ef-sleep 7s linear infinite}
@keyframes ef-zwin{0%,60%{opacity:0}63%,84%{opacity:1}87%,100%{opacity:0}}
.ef-zwin{animation:ef-zwin 7s linear infinite}
@keyframes ef-z{0%{transform:translate(0px,0px) scale(.5);opacity:0}20%{opacity:1}100%{transform:translate(14px,-30px) scale(1.3);opacity:0}}
.ef-z{animation:ef-z 1.6s ease-out infinite}
@keyframes ef-puffs{0%,48%{opacity:0}50%,58%{opacity:1}62%,100%{opacity:0}}
.ef-puffs{animation:ef-puffs 7s linear infinite}
@keyframes ef-puff{0%{transform:translate(0px,0px) scale(.4)}100%{transform:translate(0px,-14px) scale(1.4)}}
.ef-puff{animation:ef-puff .5s ease-out infinite}
@keyframes ef-lab{0%{transform:scaleY(0)}4%,88%{transform:scaleY(1)}94%,100%{transform:scaleY(0)}}
.ef-lab{animation:ef-lab 7s ease-in-out infinite}
@keyframes ef-sky{0%,100%{transform:rotate(0deg)}40%{transform:rotate(0deg)}60%,82%{transform:rotate(180deg)}99.9%{transform:rotate(360deg)}}
.ef-sky{animation:ef-sky 7s ease-in-out infinite}
@keyframes ef-night{0%,42%{opacity:0}58%,82%{opacity:1}96%,100%{opacity:0}}
.ef-night{animation:ef-night 7s ease-in-out infinite}
@keyframes ef-dim{0%,44%{opacity:0}58%,82%{opacity:.28}96%,100%{opacity:0}}
.ef-dim{animation:ef-dim 7s ease-in-out infinite}
@keyframes ef-page{0%,86%{transform:scaleY(1)}93%,99.9%{transform:scaleY(0)}100%{transform:scaleY(1)}}
.ef-page{animation:ef-page 7s ease-in infinite}
@keyframes ef-dust1{0%,22%{opacity:0}28%,96%{opacity:1}99%,100%{opacity:0}}
@keyframes ef-dust2{0%,47%{opacity:0}53%,96%{opacity:1}99%,100%{opacity:0}}
@keyframes ef-dust3{0%,72%{opacity:0}78%,96%{opacity:1}99%,100%{opacity:0}}
.ef-dust1{animation:ef-dust1 28s linear infinite}
.ef-dust2{animation:ef-dust2 28s linear infinite}
.ef-dust3{animation:ef-dust3 28s linear infinite}
@keyframes ef-poof{0%,96%{transform:scale(0);opacity:0}98%{transform:scale(1.3);opacity:1}100%{transform:scale(1.6);opacity:0}}
.ef-poof{animation:ef-poof 28s ease-out infinite}
@keyframes ef-flame{0%,100%{transform:scale(1,1)}50%{transform:scale(.85,1.15)}}
.scene .ef-flame{animation:ef-flame .8s ease-in-out infinite;transform-origin:50% 100%}
@keyframes ef-say{0%,62%{transform:scale(0)}66%{transform:scale(1.12)}68%,84%{transform:scale(1)}87%,100%{transform:scale(0)}}
.ef-say{animation:ef-say 7s ease-out infinite}
`;

function Door({ x, label }: { x: number; label: string }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <path d="M-26 232 V146 Q-26 112 0 104 Q26 112 26 146 V232Z" fill={C.saffron} {...inked} />
      <path d="M-21 232 V148 Q-21 118 0 111 Q21 118 21 148 V232Z" fill={WOOD} {...inked} strokeWidth={2} />
      <path d="M0 112 V232" stroke={WOOD_DK} strokeWidth={2} />
      <path d="M-15 150 H-5 V190 H-15Z M5 150 H15 V190 H5Z M-15 198 H-5 V224 H-15Z M5 198 H15 V224 H5Z" fill="none" stroke={WOOD_DK} strokeWidth={1.6} />
      <circle cx="-4" cy="180" r="2" fill={C.saffron} stroke={INK} strokeWidth={1} />
      <circle cx="4" cy="180" r="2" fill={C.saffron} stroke={INK} strokeWidth={1} />
      <rect x="-28" y="78" width="56" height="18" rx="3" fill={C.cream} {...inked} strokeWidth={2} />
      <g className="ef-lab">
        <text x="0" y="91.5" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="10" fill={INK} direction="rtl">{label}</text>
      </g>
    </g>
  );
}

function Sconce({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 140)`}>
      <path d="M-5 6 L5 6 L3 12 L-3 12Z" fill={C.saffron} stroke={INK} strokeWidth={1.4} />
      <path className="ef-flame" d="M0 -6 Q4 0 2 4 Q0 6 -2 4 Q-4 0 0 -6Z" fill="#ffcf4a" stroke={INK} strokeWidth={1.1} />
    </g>
  );
}

function SleepHead() {
  return (
    <g>
      <ellipse cx="0" cy="0" rx="13" ry="15" fill={SKIN} {...inked} />
      <path d="M-9 -1 Q-5 2 -1 -1 M1 -1 Q5 2 9 -1" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      <path d="M-10 -6 Q-5 -8 -1 -6 M1 -6 Q5 -8 10 -6" fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
      <path d="M0 -1 Q-2 4 1 5" fill="none" stroke={INK} strokeWidth={1.2} />
      <circle cx="-8" cy="5" r="2.6" fill="#e58a7a" opacity=".55" />
      <circle cx="8" cy="5" r="2.6" fill="#e58a7a" opacity=".55" />
      <ellipse cx="1" cy="9" rx="2.4" ry="2" fill={INK} />
      <path d="M4 10 Q5 13 4 15" fill="none" stroke="#9fd8ef" strokeWidth={1.4} strokeLinecap="round" />
    </g>
  );
}

function Box() {
  return (
    <g>
      <rect x="-19" y="-32" width="38" height="32" fill={BOX} {...inked} />
      <path d="M-19 -32 L-14 -38 L14 -38 L19 -32" fill={BOX_DK} {...inked} strokeWidth={2} />
      <path d="M0 -38 V-22" stroke="#e3c48f" strokeWidth={4} />
      <rect x="-15" y="-21" width="30" height="13" rx="1.5" fill={C.white} stroke={INK} strokeWidth={1.3} />
      <text x="0" y="-11.5" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="7" fill={INK} direction="rtl">کار امروز</text>
      <g className="ef-dust1" style={{ opacity: 0 }} fill="#7d736a">
        <circle cx="-12" cy="-28" r=".9" /><circle cx="8" cy="-30" r=".9" /><circle cx="14" cy="-4" r=".9" /><circle cx="-6" cy="-4" r=".9" /><circle cx="10" cy="-35" r=".9" />
      </g>
      <g className="ef-dust2" style={{ opacity: 0 }}>
        <path d="M-19 -32 L-9 -32 M-19 -32 L-19 -22 M-19 -27 L-14 -32 M-19 -24 Q-14 -26 -11 -32" fill="none" stroke={C.white} strokeWidth={.9} />
        <path d="M-14 -38 L14 -38 L19 -32 L-19 -32Z" fill="#b8ad9f" opacity=".7" />
      </g>
      <g className="ef-dust3" style={{ opacity: 0 }}>
        <path d="M19 -32 L19 -14 M19 -32 L6 -32 M19 -26 L12 -32 M19 -20 Q12 -24 8 -32 M19 -24 Q15 -28 15 -32" fill="none" stroke={C.white} strokeWidth={.9} />
        <path d="M19 -14 V-8" stroke={C.white} strokeWidth={.6} />
        <circle cx="19" cy="-7" r="1.8" fill={INK} />
        <path d="M17 -6 l-2 1 M21 -6 l2 1" stroke={INK} strokeWidth={.6} />
        <rect x="-19" y="-10" width="38" height="10" fill="#b8ad9f" opacity=".45" />
      </g>
    </g>
  );
}

export default function EmroozFarda({ playing = true, big = false }: SceneProps) {
  const idx = [-1, 0, 1, 2, 3, 4, 5];
  return (
    <Scene title="کار امروز رو به فردا میفکن" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <defs>
        <clipPath id="ef-win"><circle cx="200" cy="50" r="18" /></clipPath>
      </defs>
      <rect x="-10" y="-10" width="420" height="320" fill="#e6d3b0" />

      <g className="ef-world">
        <rect x="-100" y="22" width="600" height="18" fill={C.turquoise} stroke={INK} strokeWidth={2} />
        {Array.from({ length: 24 }, (_, i) => <Star8 key={i} x={-100 + i * 25} y={31} r={5} fill={C.saffron} />)}
        <rect x="-100" y="190" width="600" height="42" fill={C.firouzeh} stroke={INK} strokeWidth={2} />
        {Array.from({ length: 24 }, (_, i) => (
          <path key={i} d={`M${-100 + i * 25} 211 l12.5 -12 l12.5 12 l-12.5 12Z`} fill="none" stroke={C.lapis} strokeWidth={1.6} />
        ))}
        {idx.map((i) => <Sconce key={`s${i}`} x={X0 + D * i + D / 2} />)}
        {idx.map((i) => <Door key={i} x={X0 + D * i} label={LABELS[i + 1]} />)}
        <rect x="-100" y="232" width="600" height="80" fill={C.terracotta} stroke={INK} strokeWidth={2.5} />
        {Array.from({ length: 24 }, (_, i) => (
          <path key={i} d={`M${-100 + i * 25} 232 L${-108 + i * 25} 310`} stroke="#9c4a2f" strokeWidth={1.4} />
        ))}
        <path d="M-100 256 H500 M-100 284 H500" stroke="#9c4a2f" strokeWidth={1.4} />

        <g className="ef-push">
          <g transform={`translate(${X0} 240)`}><Box /></g>
          <g transform={`translate(${X0} 210)`}>
            <g className="ef-poof"><circle cx="0" cy="0" r="16" fill="#d9d0c3" stroke={INK} strokeWidth={1.6} /><circle cx="12" cy="-6" r="10" fill="#d9d0c3" stroke={INK} strokeWidth={1.4} /><circle cx="-12" cy="-4" r="9" fill="#d9d0c3" stroke={INK} strokeWidth={1.4} /></g>
          </g>
          <g transform={`translate(${X0 - 34} 240) scale(.62)`}>
            <g className="ef-lean o-bottom">
              <g className="ef-bob o-bottom">
                <Person robe={C.lapis} sash={C.saffron} headClass="ef-hide" armL={-60} armR={-82} armLClass="ef-armL" armRClass="ef-armR" />
                <g transform="translate(0 -74)">
                  <g className="ef-awake"><Face mood="calm" /><Turban color={C.white} /></g>
                  <g className="ef-sleep" style={{ opacity: 0 }}><SleepHead /><Turban color={C.white} /></g>
                </g>
              </g>
            </g>
          </g>
          <g className="ef-puffs" style={{ opacity: 0 }}>
            {[-6, 6].map((dx, i) => (
              <g key={i} transform={`translate(${X0 - 34 + dx} 212)`}>
                <circle className="ef-puff" style={{ animationDelay: `${-i * 0.25}s` }} cx="0" cy="0" r="3" fill="#d9d0c3" stroke={INK} strokeWidth={1} />
              </g>
            ))}
          </g>
          <g className="ef-zwin" style={{ opacity: 0 }}>
            {[0, -0.53, -1.06].map((d, i) => (
              <g key={i} transform={`translate(${X0 - 18} 172)`}>
                <text className="ef-z" style={{ animationDelay: `${d}s` }} x="0" y="0" fontFamily="Vazirmatn" fontWeight={900} fontSize={10 + i * 2} fill={C.lapis} stroke={INK} strokeWidth={.6}>z</text>
              </g>
            ))}
          </g>
          {big && <Bubble x={X0 - 24} y={172} w={122} text="فردا انجامش می‌دم" className="ef-say o-bottom" />}
        </g>
      </g>

      <rect className="ef-dim" x="-10" y="-10" width="420" height="320" fill={C.navy} style={{ opacity: 0 }} />

      <path d="M200 4 V30" stroke={INK} strokeWidth={1.6} />
      <circle cx="200" cy="50" r="22" fill={C.saffron} {...inked} />
      <g clipPath="url(#ef-win)">
        <rect x="178" y="28" width="44" height="44" fill="#9fd8ef" />
        <rect className="ef-night" x="178" y="28" width="44" height="44" fill={C.navy} style={{ opacity: 0 }} />
        <g transform="translate(200 74)">
          <g className="ef-sky" style={{ transformBox: "view-box", transformOrigin: "0px 0px" }}>
            <circle cx="0" cy="-24" r="8" fill="#ffcf4a" stroke={INK} strokeWidth={1.4} />
            <circle cx="0" cy="24" r="7" fill={C.cream} stroke={INK} strokeWidth={1.4} />
            <circle cx="3" cy="22" r="6" fill={C.navy} />
          </g>
        </g>
      </g>
      <circle cx="200" cy="50" r="18" fill="none" stroke={INK} strokeWidth={2} />

      <path d="M262 4 V30" stroke={INK} strokeWidth={1.6} />
      <rect x="244" y="30" width="36" height="40" rx="2" fill={C.white} {...inked} strokeWidth={2} />
      <rect x="244" y="30" width="36" height="10" fill={C.pomegranate} stroke={INK} strokeWidth={2} />
      <text x="262" y="60" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="11" fill={INK} direction="rtl">فردا</text>
      <g className="ef-page o-top">
        <rect x="244" y="40" width="36" height="30" fill={C.white} stroke={INK} strokeWidth={2} />
        <text x="262" y="60" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="11" fill={INK} direction="rtl">فردا</text>
      </g>
      <circle cx="252" cy="35" r="1.6" fill={C.white} />
      <circle cx="272" cy="35" r="1.6" fill={C.white} />
    </Scene>
  );
}
