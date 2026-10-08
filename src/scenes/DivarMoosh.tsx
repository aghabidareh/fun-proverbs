import { Scene, Person, Mouse, Cloud, Ground, Bubble, C, INK, SKIN } from "./parts";
import type { SceneProps } from "./types";

const css = `
.dm-tw{animation:dm-tw 1.3s ease-in-out infinite}
@keyframes dm-tw{0%,60%,100%{transform:rotate(0) scale(1)}68%{transform:rotate(-14deg) scale(1.08)}76%{transform:rotate(8deg)}84%{transform:rotate(-6deg) scale(1.04)}}
.dm-shy{animation:dm-shy 8s ease-in-out infinite}
@keyframes dm-shy{0%,64%{transform:scale(1)}67%,86%{transform:scale(.25)}91%,100%{transform:scale(1)}}
.dm-duck{animation:dm-duck 8s ease-in-out infinite}
@keyframes dm-duck{0%,64%{transform:translateY(0)}67%,86%{transform:translateY(26px)}92%,100%{transform:translateY(0)}}
.dm-lean{animation:dm-lean 2s ease-in-out infinite}
@keyframes dm-lean{0%,100%{transform:translateX(0)}50%{transform:translateX(-3px)}}
.dm-pencil{animation:dm-pencil .35s ease-in-out infinite alternate}
@keyframes dm-pencil{from{transform:translate(0,0) rotate(-10deg)}to{transform:translate(4px,1px) rotate(10deg)}}
.dm-hide{transform-origin:50% 100%;animation:dm-hide 8s ease-in-out infinite}
@keyframes dm-hide{0%,64%{transform:scale(1)}67%,86%{transform:scale(.05)}92%,100%{transform:scale(1)}}
.dm-wh{animation:dm-wh 8s infinite}
@keyframes dm-wh{0%,4%{opacity:0}8%,60%{opacity:1}64%,100%{opacity:0}}
.dm-wave{animation:dm-wave 1s ease-in-out infinite alternate}
@keyframes dm-wave{from{transform:translateX(-3px)}to{transform:translateX(3px)}}
.dm-bang{animation:dm-bang 8s ease-out infinite}
@keyframes dm-bang{0%,64%{opacity:0;transform:scale(0)}68%{opacity:1;transform:scale(1.3)}72%,86%{opacity:1;transform:scale(1)}90%,100%{opacity:0;transform:scale(0)}}
.dm-headL{animation:dm-headL 8s ease-in-out infinite}
@keyframes dm-headL{0%,64%{transform:translate(0px,-74px) rotate(8deg)}68%,86%{transform:translate(-2px,-76px) rotate(-14deg)}92%,100%{transform:translate(0px,-74px) rotate(8deg)}}
.dm-headR{animation:dm-headR 8s ease-in-out infinite}
@keyframes dm-headR{0%,64%{transform:translate(0px,-74px) rotate(-8deg)}68%,86%{transform:translate(2px,-76px) rotate(14deg)}92%,100%{transform:translate(0px,-74px) rotate(-8deg)}}
`;

function Ear({ x, y, s, flip = false, dur, delay }: { x: number; y: number; s: number; flip?: boolean; dur: number; delay: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <g className="dm-shy">
        <g className="dm-tw" style={{ animationDuration: `${dur}s`, animationDelay: `${delay}s` }}>
          <path d="M-4 -12 Q8 -16 10 -3 Q11 6 3 10 Q0 15 -3 11 Q-1 7 -3 4 Q-7 -2 -6 -7 Q-6 -11 -4 -12Z" fill={SKIN} stroke={INK} strokeWidth={2.2} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          <path d="M-1 -7 Q6 -9 6 -2 Q6 3 1 4 M0 -2 q2 1 1 3" fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <path d="M-2 -9 Q4 -11 6 -5" fill="none" stroke="#e58a7a" strokeWidth={1.4} opacity=".7" vectorEffect="non-scaling-stroke" />
        </g>
      </g>
    </g>
  );
}

const ears = [
  { x: 42, y: 118, s: 1.6, f: false },
  { x: 106, y: 104, s: 0.8, f: false },
  { x: 160, y: 132, s: 2.3, f: false },
  { x: 214, y: 106, s: 1, f: true },
  { x: 268, y: 140, s: 1.5, f: true },
  { x: 332, y: 112, s: 1.9, f: true },
  { x: 362, y: 196, s: 1.1, f: true },
  { x: 34, y: 196, s: 1.2, f: false },
  { x: 202, y: 160, s: 0.7, f: false },
  { x: 312, y: 226, s: 1, f: true },
  { x: 96, y: 176, s: 1.3, f: false },
  { x: 70, y: 236, s: 0.8, f: false },
];

export default function DivarMoosh({ playing = true, big = false }: SceneProps) {
  const rows = Array.from({ length: 10 }, (_, i) => 98 + i * 16);
  return (
    <Scene title="دیوار موش داره، موش هم گوش داره" className={playing ? "" : "paused"}>
      <style>{css}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#e2c79b" />
      <circle cx="330" cy="44" r="16" fill="#f6dc8a" stroke={INK} strokeWidth={2} />
      <Cloud x={50} y={52} s={0.7} className="dm-wave" />

      <g transform="translate(96 88)">
        <g className="dm-duck">
          <g transform="scale(1.4)"><Mouse /></g>
          <rect x="-26" y="-36" width="16" height="12" rx="1" fill={C.white} stroke={INK} strokeWidth={1.5} />
          <path d="M-23 -32 h10 M-23 -29 h8" stroke={INK} strokeWidth={0.8} />
          <g transform="translate(-10 -36)"><path className="dm-pencil" d="M0 0 l6 -8" stroke={C.saffron} strokeWidth={2.5} strokeLinecap="round" /></g>
          {big && <text x="-18" y="-39" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="6" fill={INK} direction="rtl">پرونده ۴۷</text>}
        </g>
      </g>
      <g transform="translate(206 86)">
        <g className="dm-duck" style={{ animationDelay: ".1s" }}>
          <g transform="scale(1.3)"><Mouse /></g>
          <path d="M-12 -18 L-26 -6 L-30 -14Z" fill={C.saffron} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
        </g>
      </g>
      <g transform="translate(300 88)">
        <g className="dm-duck" style={{ animationDelay: ".2s" }}>
          <g transform="translate(-6 0) scale(-1.4 1.4)"><Mouse /></g>
          <circle cx="-2" cy="-24" r="5" fill="none" stroke={INK} strokeWidth={1.6} />
          <path d="M-6 -20 l-4 5" stroke={INK} strokeWidth={2} strokeLinecap="round" />
        </g>
      </g>

      <path d="M-10 255 V86 L22 80 L44 85 L70 79 L104 84 L136 78 L170 84 L198 80 L232 85 L262 79 L296 84 L330 78 L362 84 L410 80 V255Z" fill="#c99566" stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
      <g stroke="#9c6b42" strokeWidth={1.4}>
        {rows.map((y, r) => (
          <g key={y}>
            <path d={`M-10 ${y} H410`} />
            {Array.from({ length: 13 }, (_, k) => {
              const x = (r % 2 ? 16 : 0) + k * 32;
              return <path key={k} d={`M${x} ${y} V${y + 16}`} />;
            })}
          </g>
        ))}
      </g>

      {[
        [58, 160, 0],
        [346, 150, 1],
        [250, 236, 2],
      ].map(([x, y, i]) => (
        <g key={i}>
          <path d={`M${x - 13} ${y} V${y - 6} Q${x} ${y - 22} ${x + 13} ${y - 6} V${y}Z`} fill="#3a2418" stroke={INK} strokeWidth={2} />
          <g transform={`translate(${x + 2} ${y})`}>
            <g className="dm-hide" style={{ animationDelay: `${i * 0.1}s` }}>
              <g className="dm-lean" style={{ animationDelay: `${i * 0.4}s` }}>
                <g transform={i === 1 ? "scale(-1 1)" : undefined}><Mouse scale={1.05} /></g>
                {i === 0 && <path d="M-14 -14 L-26 -6 L-27 -14Z" fill={C.saffron} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />}
              </g>
            </g>
          </g>
        </g>
      ))}

      {ears.map((e, i) => (
        <Ear key={i} x={e.x} y={e.y} s={e.s} flip={e.f} dur={1.1 + (i % 4) * 0.25} delay={(i * 0.37) % 1.3} />
      ))}

      <Ground y={255} color={C.sand} />

      <g transform="translate(154 286)">
        <Person robe={C.pomegranate} sash={C.saffron} hat={C.lapis} hatKind="scarf" mood="smug" armL={12} armR={-150} headClass="dm-headL" />
      </g>
      <g transform="translate(248 286)">
        <Person robe={C.turquoise} sash={C.cream} hat={C.white} mood="shocked" armL={150} armR={-12} headClass="dm-headR" beard />
      </g>
      <g className="dm-wh" fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round">
        <g className="dm-wave">
          <path d="M190 208 q3 -3 6 0 t6 0 t6 0" />
          <path d="M192 216 q3 -3 6 0 t6 0" />
        </g>
      </g>
      <g fontFamily="Vazirmatn" fontWeight={900} fontSize="18" fill={C.pomegranate} stroke={INK} strokeWidth={1} textAnchor="middle">
        <text className="dm-bang" x="150" y="180">!</text>
        <text className="dm-bang" x="252" y="180" style={{ animationDelay: ".1s" }}>!</text>
      </g>
      {big && <Bubble x={168} y={196} w={70} text="شنیدی؟" flip className="dm-wh" />}
    </Scene>
  );
}
