import type { CSSProperties } from "react";
import type { SceneProps } from "./types";
import { Scene, Person, Bubble, Cloud, C, INK, SKIN, inked } from "./parts";

const vb = (o: string): CSSProperties => ({ transformBox: "view-box", transformOrigin: o });
const FA = ["۱۰", "۲۰", "۳۰", "۴۰", "۵۰", "۶۰", "۷۰", "۸۰", "۹۰"];

function Fish({ color, cls, y, x, s = 1 }: { color: string; cls: string; y: number; x: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className={cls}>
        <g className="ab-wag">
          <path d="M10 0 L22 -8 L20 0 L22 8Z" fill={color} {...inked} strokeWidth={1.8} />
          <path d="M-14 0 Q-4 -12 12 0 Q-4 12 -14 0Z" fill={color} {...inked} strokeWidth={2} />
          <path d="M0 -6 Q4 0 0 6" fill="none" stroke={INK} strokeWidth={1.2} />
          <circle cx="-7" cy="-2" r="1.6" fill={INK} />
        </g>
      </g>
    </g>
  );
}

export default function AbAzSar({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="آب که از سر گذشت، چه یک وجب چه صد وجب" className={playing ? "" : "paused"}>
      <style>{`
        .ab-surf { animation: ab-surf 2.4s linear infinite; }
        @keyframes ab-surf { from { transform: translateX(0) } to { transform: translateX(-40px) } }
        .ab-boat { animation: ab-boat 3s ease-in-out infinite; }
        @keyframes ab-boat { 0%,100% { transform: translateY(0) rotate(-2deg) } 50% { transform: translateY(3px) rotate(2deg) } }
        .ab-ruler { animation: ab-ruler 8s ease-in-out infinite; }
        @keyframes ab-ruler { 0%,6%,16%,26%,100% { transform: translateY(0) } 11%,21% { transform: translateY(-10px) } }
        .ab-float { animation: ab-float 3.4s ease-in-out infinite; }
        @keyframes ab-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-5px) } }
        .ab-wavearm { animation: ab-wave .6s ease-in-out infinite alternate; }
        @keyframes ab-wave { from { transform: rotate(-150deg) } to { transform: rotate(-115deg) } }
        .ab-bub { animation: ab-bub 3s ease-in infinite; }
        @keyframes ab-bub { 0% { transform: translate(0,0) scale(.5); opacity: 0 } 10% { opacity: 1 } 50% { transform: translate(4px,-48px) scale(.9) } 90% { opacity: 1 } 100% { transform: translate(-3px,-92px) scale(1.2); opacity: 0 } }
        .ab-fish1 { animation: ab-swim1 9s linear infinite; }
        @keyframes ab-swim1 { from { transform: translateX(240px) } to { transform: translateX(-260px) } }
        .ab-fish2 { animation: ab-swim2 13s linear infinite; animation-delay: -5s; }
        @keyframes ab-swim2 { from { transform: translateX(280px) } to { transform: translateX(-240px) } }
        .ab-wag { animation: ab-wag .4s ease-in-out infinite alternate; }
        @keyframes ab-wag { from { transform: skewY(-6deg) } to { transform: skewY(6deg) } }
        .ab-weed { animation: wiggle 3s ease-in-out infinite; }
        .ab-say1 { opacity: 1; animation: ab-say1 8s ease-out infinite; }
        @keyframes ab-say1 { 0%,30% { opacity: 0; transform: scale(.5) } 34%,58% { opacity: 1; transform: scale(1) } 62%,100% { opacity: 0; transform: scale(1) } }
        .ab-say2 { opacity: 1; animation: ab-say2 8s ease-out infinite; }
        @keyframes ab-say2 { 0%,60% { opacity: 0; transform: scale(.5) } 64%,94% { opacity: 1; transform: scale(1) } 98%,100% { opacity: 0; transform: scale(1) } }
        .ab-finger { animation: ab-finger 8s ease-in-out infinite; }
        @keyframes ab-finger { 0%,30%,62%,100% { transform: rotate(-20deg) } 34%,58% { transform: rotate(-150deg) } }
        .ab-cloud { animation: ab-cloud 30s linear infinite; }
        @keyframes ab-cloud { from { transform: translateX(-60px) } to { transform: translateX(80px) } }
      `}</style>

      <rect x="-10" y="-10" width="420" height="140" fill="#a8d5e2" />
      <Cloud x={40} y={50} s={0.8} className="ab-cloud" />
      <Cloud x={300} y={36} s={0.6} className="ab-cloud" />

      <rect x="-10" y="112" width="420" height="200" fill="#4fa3c0" />
      <rect x="-10" y="160" width="420" height="160" fill="#3a8db0" />
      <rect x="-10" y="212" width="420" height="120" fill="#2f78a0" />
      <rect x="-10" y="254" width="420" height="80" fill="#276690" />
      <path d="M60 114 L30 260 L70 260Z M300 114 L290 240 L330 240Z" fill={C.white} opacity=".08" />

      <path d="M-10 276 Q60 268 140 276 Q240 284 410 272 V310 H-10Z" fill="#d9c08c" {...inked} />
      <g className="ab-weed o-bottom"><path d="M42 276 Q32 256 44 240 Q54 224 44 208" fill="none" stroke={C.olive} strokeWidth={5} strokeLinecap="round" /></g>
      <g className="ab-weed o-bottom" style={{ animationDelay: "-1.2s" }}><path d="M58 276 Q66 260 56 246 Q48 232 58 222" fill="none" stroke="#557a3c" strokeWidth={4} strokeLinecap="round" /></g>
      <g className="ab-weed o-bottom" style={{ animationDelay: "-.6s" }}><path d="M346 274 Q336 256 348 242 Q358 228 350 214" fill="none" stroke={C.olive} strokeWidth={5} strokeLinecap="round" /></g>
      <ellipse cx="260" cy="280" rx="10" ry="4" fill="#b9a070" stroke={INK} strokeWidth={1.5} />

      <Fish x={160} y={166} color={C.saffron} cls="ab-fish1" />
      <Fish x={150} y={238} color={C.terracotta} cls="ab-fish2" s={0.8} />

      <g transform="translate(128 276)">
        <g className="ab-float">
          <Person robe={C.pomegranate} sash={C.saffron} hat={C.white} mood="calm" armL={20} armR={-130} armRClass="ab-wavearm" />
          <path d="M14 -90 Q26 -96 30 -110 Q22 -100 12 -96Z" fill={C.white} {...inked} strokeWidth={1.6} />
        </g>
      </g>
      <g transform="translate(134 192)">
        {[0, -0.6, -1.2, -1.8, -2.4].map((d, i) => (
          <circle key={i} className="ab-bub" style={{ animationDelay: `${d}s` }} cx={(i % 2) * 5} cy="0" r={2 + (i % 3)} fill="#d8f3fb" stroke={INK} strokeWidth={1.1} />
        ))}
      </g>

      <g className="ab-surf">
        <path d="M-50 112 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="#4fa3c0" stroke={INK} strokeWidth={2.5} />
      </g>

      <g className="ab-ruler">
        <rect x="200" y="40" width="12" height="234" rx="2" fill={C.saffron} {...inked} strokeWidth={2} />
        {FA.map((n, i) => {
          const y = 112 + 16 * (i + 1);
          return (
            <g key={n}>
              <path d={`M200 ${y} h6`} stroke={INK} strokeWidth={1.4} />
              <path d={`M200 ${y - 8} h3`} stroke={INK} strokeWidth={1} />
              <text x="210" y={y + 2.5} textAnchor="middle" fontFamily="Vazirmatn" fontWeight={700} fontSize="6.5" fill={INK}>{n}</text>
            </g>
          );
        })}
        <path d="M200 112 h12" stroke={C.pomegranate} strokeWidth={2} />
        <circle cx="210" cy="62" r="4.5" fill={SKIN} {...inked} strokeWidth={2} />
      </g>

      <g className="ab-boat" style={vb("262px 112px")}>
        <g transform="translate(244 108) scale(.85)">
          <Person robe={C.lapis} sash={C.saffron} hat="#3a2a20" hatKind="kolah" mood="serious" beard armL={96} armR={-20} armRClass="ab-finger" />
          <rect x="6" y="-44" width="10" height="16" rx="2" fill={C.cream} {...inked} strokeWidth={1.4} />
        </g>
        <path d="M214 104 H312 Q306 128 282 130 H240 Q220 128 214 104Z" fill={C.terracotta} {...inked} />
        <path d="M220 112 H306" stroke={C.saffron} strokeWidth={2} />
        <g fill={C.cream}><circle cx="236" cy="120" r="2" /><circle cx="262" cy="121" r="2" /><circle cx="288" cy="120" r="2" /></g>
      </g>

      {big && (
        <>
          <Bubble x={262} y={44} w={84} text="۹۸ وجب!" className="ab-say1" />
          <Bubble x={112} y={150} w={96} text="اوکی. ممنون." flip className="ab-say2" />
        </>
      )}
    </Scene>
  );
}
