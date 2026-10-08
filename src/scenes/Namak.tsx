import type { CSSProperties } from "react";
import type { SceneProps } from "./types";
import { Scene, Person, Bubble, Ground, C, INK, inked } from "./parts";

const vb = (o: string): CSSProperties => ({ transformBox: "view-box", transformOrigin: o });

function Fly({ r, dur, delay = 0, cx, cy }: { r: number; dur: number; delay?: number; cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <g className="nm-orbit" style={{ ...vb("0px 0px"), animationDuration: `${dur}s`, animationDelay: `${delay}s` }}>
        <g transform={`translate(${r} 0)`}>
          <g className="nm-buzz">
            <ellipse cx="-2" cy="-4" rx="3.5" ry="2.2" fill="#eef6ff" stroke={INK} strokeWidth={1} className="nm-wing" />
            <ellipse cx="2" cy="-4" rx="3.5" ry="2.2" fill="#eef6ff" stroke={INK} strokeWidth={1} className="nm-wing" />
            <ellipse cx="0" cy="0" rx="3.2" ry="2.6" fill={INK} />
          </g>
        </g>
      </g>
    </g>
  );
}

export default function Namak({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="هرچه بگندد نمکش می‌زنند، وای به روزی که بگندد نمک" className={playing ? "" : "paused"}>
      <style>{`
        .nm-orbit { animation: spin 3s linear infinite; }
        .nm-buzz { animation: nm-buzz .25s ease-in-out infinite alternate; }
        @keyframes nm-buzz { from { transform: translateY(-2px) } to { transform: translateY(2px) } }
        .nm-wing { animation: nm-wing .08s linear infinite alternate; }
        @keyframes nm-wing { from { transform: scaleY(1) } to { transform: scaleY(.3) } }
        .nm-pile { animation: nm-pile 7s ease-in-out infinite; }
        @keyframes nm-pile {
          0%,68%,100% { transform: scale(1,1) }
          72% { transform: scale(1.06,.9) }
          76% { transform: scale(.96,1.08) }
          80% { transform: scale(1.02,.97) }
          84% { transform: scale(1,1) }
        }
        .nm-fume { animation: nm-fume 4.5s ease-out infinite; }
        @keyframes nm-fume { 0% { transform: translate(0,0) scale(.5); opacity: 0 } 15% { opacity: .75 } 100% { transform: translate(12px,-90px) scale(1.7); opacity: 0 } }
        .nm-stink { animation: nm-stink 2.2s ease-in-out infinite; }
        @keyframes nm-stink { 0% { transform: translateY(6px); opacity: 0 } 30%,60% { opacity: 1 } 100% { transform: translateY(-16px); opacity: 0 } }
        .nm-burp { opacity: .85; animation: nm-burp 7s ease-out infinite; }
        @keyframes nm-burp { 0%,72% { transform: scale(.2); opacity: 0 } 76% { transform: scale(1); opacity: .9 } 92% { transform: scale(1.5) translateY(-14px); opacity: 0 } 100% { opacity: 0 } }
        .nm-drumarm { animation: nm-drum .3s ease-in-out infinite alternate; }
        @keyframes nm-drum { from { transform: rotate(22deg) } to { transform: rotate(58deg) } }
        .nm-crier { animation: nm-jump 7s ease-out infinite; }
        @keyframes nm-jump { 0%,72%,100% { transform: translateY(0) } 76% { transform: translateY(-22px) } 82% { transform: translateY(0) } 85% { transform: translateY(-6px) } 88% { transform: translateY(0) } }
        .nm-shake { animation: shake .4s linear infinite; }
        .nm-shaker { animation: nm-tilt 7s ease-in-out infinite; }
        @keyframes nm-tilt { 0%,22% { transform: rotate(0deg) } 30%,58% { transform: rotate(-125deg) } 66%,100% { transform: rotate(0deg) } }
        .nm-grain { opacity: 0; animation: nm-grain 7s linear infinite; }
        @keyframes nm-grain { 0%,30% { opacity: 0; transform: translateY(0) } 32% { opacity: 1 } 40% { opacity: 1; transform: translateY(22px) } 41%,100% { opacity: 0; transform: translateY(22px) } }
        .nm-tear { animation: nm-tear 1s ease-in infinite; }
        @keyframes nm-tear { 0% { transform: translateY(0); opacity: 1 } 100% { transform: translateY(14px); opacity: 0 } }
        .nm-hazard { animation: wiggle 2.6s ease-in-out infinite; }
        .nm-bub { opacity: 1; animation: nm-bub 7s ease-out infinite; }
        @keyframes nm-bub { 0%,74% { opacity: 0; transform: scale(.5) } 78%,96% { opacity: 1; transform: scale(1) } 100% { opacity: 0 } }
      `}</style>

      <rect x="-10" y="-10" width="420" height="320" fill="#c5d1a5" />
      <rect x="-10" y="-10" width="420" height="70" fill="#b6c492" />
      <path d="M-10 236 V200 h30 v-10 h24 v14 h20 q10 -22 20 0 h20 v-18 h12 v18 h236 v-14 h26 v-10 h20 q12 -24 24 0 h18 v40Z" fill="#9fae7f" stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      <Ground y={236} color="#d8cfa6" />

      <g transform="translate(180 120)"><circle className="nm-fume" cx="0" cy="0" r="12" fill="#9fcf5a" /></g>
      <g transform="translate(220 112)"><circle className="nm-fume" style={{ animationDelay: "-1.5s" }} cx="0" cy="0" r="14" fill="#8cc04a" /></g>
      <g transform="translate(200 130)"><circle className="nm-fume" style={{ animationDelay: "-3s" }} cx="0" cy="0" r="10" fill="#b2db6e" /></g>

      <g className="nm-pile o-bottom">
        <path d="M80 240 Q110 190 140 160 Q170 112 200 104 Q232 112 260 160 Q290 192 320 240Z" fill="#c9dca0" {...inked} />
        <path d="M200 104 Q214 108 226 124 Q212 120 204 128 Q196 118 184 122 Q190 108 200 104Z" fill="#7fae3e" stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
        <g fill="#8fbf4a" stroke={INK} strokeWidth={1.2}>
          <circle cx="150" cy="190" r="7" /><circle cx="160" cy="196" r="4" /><circle cx="240" cy="176" r="8" />
          <circle cx="252" cy="186" r="4" /><circle cx="196" cy="214" r="9" /><circle cx="118" cy="226" r="5" /><circle cx="286" cy="222" r="6" />
        </g>
        <g fill={C.white} opacity=".85">
          <rect x="170" y="150" width="4" height="4" transform="rotate(20 172 152)" /><rect x="222" y="206" width="4" height="4" />
          <rect x="130" y="212" width="3" height="3" /><rect x="270" y="200" width="3" height="3" /><rect x="206" y="160" width="3" height="3" />
        </g>
        <path d="M228 128 q2 10 0 14 q-3 -2 -2 -14Z M168 136 q2 12 -1 16 q-3 -4 -1 -16Z" fill="#7fae3e" stroke={INK} strokeWidth={1.2} />
        <g transform="translate(262 150)">
          <g className="nm-hazard o-bottom">
            <path d="M0 40 V0" stroke="#7a4a2a" strokeWidth={3} strokeLinecap="round" />
            <path d="M0 -18 L16 8 H-16Z" fill={C.saffron} {...inked} strokeWidth={2} />
            <path d="M0 -8 V0" stroke={INK} strokeWidth={2.5} strokeLinecap="round" /><circle cx="0" cy="4" r="1.5" fill={INK} />
          </g>
        </g>
      </g>

      <g fill="none" stroke="#6f8f3a" strokeWidth={2.2} strokeLinecap="round">
        <path className="nm-stink" d="M170 96 q-6 -6 0 -12 q6 -6 0 -12" />
        <path className="nm-stink" style={{ animationDelay: "-.7s" }} d="M200 86 q-6 -6 0 -12 q6 -6 0 -12" />
        <path className="nm-stink" style={{ animationDelay: "-1.4s" }} d="M232 96 q-6 -6 0 -12 q6 -6 0 -12" />
      </g>

      <g transform="translate(200 92)">
        <g className="nm-burp">
          <path d="M-26 0 q-6 -16 10 -18 q4 -12 18 -6 q12 -10 20 4 q14 2 6 18 q-6 10 -20 4 q-10 8 -20 0 q-14 4 -14 -2Z" fill="#a6d45a" stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
          {big && <text x="2" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="11" fill={INK} direction="rtl">پوف!</text>}
        </g>
      </g>

      <Fly cx={200} cy={110} r={34} dur={3} />
      <Fly cx={190} cy={140} r={52} dur={4.2} delay={-1.2} />
      <Fly cx={220} cy={96} r={22} dur={2.4} delay={-.6} />
      <Fly cx={160} cy={180} r={26} dur={3.6} delay={-2} />

      <g transform="translate(64 272)">
        <g className="nm-crier">
          <g className="nm-shake">
            <Person robe={C.pomegranate} sash={C.saffron} hat={C.lapis} hatKind="kolah" mood="scared" armL={40} armR={40} armRClass="nm-drumarm" beard />
            <g transform="translate(0 -38)">
              <rect x="-15" y="-9" width="30" height="18" rx="3" fill={C.terracotta} {...inked} strokeWidth={2} />
              <ellipse cx="-15" cy="0" rx="4" ry="9" fill={C.cream} {...inked} strokeWidth={1.8} />
              <ellipse cx="15" cy="0" rx="4" ry="9" fill={C.cream} {...inked} strokeWidth={1.8} />
              <path d="M-11 -9 L-4 9 L4 -9 L11 9" fill="none" stroke={C.saffron} strokeWidth={1.6} />
            </g>
            <g className="nm-drumarm" style={vb("12px -54px")} transform="rotate(40)">
              <path d="M16 -26 L22 -10" stroke="#7a4a2a" strokeWidth={3} strokeLinecap="round" />
              <circle cx="22" cy="-9" r="3" fill={C.cream} stroke={INK} strokeWidth={1.4} />
            </g>
          </g>
        </g>
      </g>

      <g transform="translate(336 272)">
        <Person robe="#e8d23a" sash="#3a3a3a" hatKind="none" mood="serious" armL={128} armR={-10} />
        <g transform="translate(0 -74)">
          <path d="M-17 4 Q-19 -20 0 -20 Q19 -20 17 4 Q0 14 -17 4Z" fill="#e8d23a" {...inked} />
          <ellipse cx="0" cy="-3" rx="11" ry="8" fill="#bfe3ef" {...inked} strokeWidth={2} />
          <circle cx="-4" cy="-3" r="1.5" fill={INK} /><circle cx="4" cy="-3" r="1.5" fill={INK} />
          <path d="M-12 -8 L12 -6" stroke={C.white} strokeWidth={1.5} opacity=".8" />
          <circle cx="0" cy="9" r="6" fill="#555" {...inked} strokeWidth={2} />
          <path d="M-3 7 h6 M-3 10 h6" stroke="#aaa" strokeWidth={1.2} />
        </g>
        <g transform="translate(-32 -72)">
          <g className="nm-shaker" style={vb("0px 4px")}>
            <path d="M-8 4 V-20 Q-8 -28 0 -28 Q8 -28 8 -20 V4Z" fill={C.white} {...inked} strokeWidth={2} />
            <path d="M-8 -20 Q0 -24 8 -20" fill="none" stroke={INK} strokeWidth={1.5} />
            <path d="M-8 -22 Q-8 -32 0 -32 Q8 -32 8 -22Z" fill="#b9c2c9" {...inked} strokeWidth={1.8} />
            <g fill={INK}><circle cx="-3" cy="-28" r=".9" /><circle cx="3" cy="-28" r=".9" /><circle cx="0" cy="-30" r=".9" /></g>
            <path d="M-5 -12 q2 -2 4 0 M1 -12 q2 -2 4 0" fill="none" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />
            <path d="M-3 -4 Q0 -7 3 -4" fill="none" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />
            <path className="nm-tear" d="M-4 -10 q-2 3 0 4 q2 -1 0 -4Z" fill="#7fc8ec" stroke={INK} strokeWidth={.8} />
            <path className="nm-tear" style={{ animationDelay: "-.5s" }} d="M4 -10 q-2 3 0 4 q2 -1 0 -4Z" fill="#7fc8ec" stroke={INK} strokeWidth={.8} />
          </g>
        </g>
        <g transform="translate(-56 -50)" fill={C.white} stroke={INK} strokeWidth={.6}>
          <rect className="nm-grain" x="0" y="0" width="3" height="3" />
          <rect className="nm-grain" style={{ animationDelay: "-.25s" }} x="-6" y="2" width="3" height="3" />
          <rect className="nm-grain" style={{ animationDelay: "-.5s" }} x="4" y="4" width="3" height="3" />
          <rect className="nm-grain" style={{ animationDelay: "-.75s" }} x="-3" y="-2" width="3" height="3" />
        </g>
      </g>

      {big && (
        <>
          <Bubble x={84} y={170} w={78} text="فاجعه!" className="nm-bub" />
          <g transform="translate(332 150)">
            <rect x="-44" y="-12" width="88" height="20" rx="3" fill={C.white} {...inked} strokeWidth={1.8} />
            <text x="0" y="3" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="9.5" fill={C.pomegranate} direction="rtl">پیشنهاد: نمک بزنیم</text>
          </g>
        </>
      )}
    </Scene>
  );
}
