import type { CSSProperties } from "react";
import type { SceneProps } from "./types";
import { Scene, Bubble, Star8, C, INK, inked } from "./parts";

const vb = (o: string): CSSProperties => ({ transformBox: "view-box", transformOrigin: o });
const ADOBE = "#d9a86a";
const ADOBE_D = "#c38e52";

export default function NaKhani({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="نه خانی اومده، نه خانی رفته" className={playing ? "" : "paused"}>
      <style>{`
        .nk-tw { animation: nk-tw 8s linear infinite; }
        @keyframes nk-tw { 0%,10% { transform: translateX(240px) } 70%,100% { transform: translateX(-260px) } }
        .nk-hop { animation: nk-hop .6s ease-in-out infinite; }
        @keyframes nk-hop { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
        .nk-roll { animation: spin 1.1s linear infinite reverse; }
        .nk-dust { animation: nk-dust .6s ease-out infinite; }
        @keyframes nk-dust { 0% { transform: translate(0,0) scale(.4); opacity: .8 } 100% { transform: translate(16px,-4px) scale(1.4); opacity: 0 } }
        .nk-head { animation: nk-head 8s steps(1) infinite; }
        @keyframes nk-head { 0% { transform: scaleX(-1) } 40% { transform: scaleX(1) } 72% { transform: scaleX(-1) } 76% { transform: scaleX(1) } }
        .nk-beak { animation: nk-beak 8s ease-in-out infinite; }
        @keyframes nk-beak { 0%,76%,92%,100% { transform: rotate(0deg) } 80%,88% { transform: rotate(28deg) } 84% { transform: rotate(8deg) } }
        .nk-caw { opacity: 1; animation: nk-caw 8s ease-out infinite; }
        @keyframes nk-caw { 0%,76% { opacity: 0; transform: scale(.4) } 80%,92% { opacity: 1; transform: scale(1) } 96%,100% { opacity: 0; transform: scale(1) } }
        .nk-sign { animation: nk-sign 2.6s ease-in-out infinite alternate; }
        @keyframes nk-sign { from { transform: rotate(-9deg) } to { transform: rotate(9deg) } }
        .nk-flag { animation: wiggle 1.4s ease-in-out infinite; }
        .nk-banner { animation: nk-banner 3s ease-in-out infinite alternate; }
        @keyframes nk-banner { from { transform: skewX(-2deg) } to { transform: skewX(2deg) } }
        .nk-haze { animation: drift 26s linear infinite; }
      `}</style>

      <rect x="-10" y="-10" width="420" height="320" fill="#f1cf8f" />
      <circle cx="334" cy="56" r="26" fill="#f8e2a8" stroke={INK} strokeWidth={2} />
      <g className="nk-haze"><path d="M0 100 h80 M20 110 h50" stroke="#fff3d0" strokeWidth={4} strokeLinecap="round" opacity=".7" /></g>

      <rect x="18" y="150" width="96" height="86" fill={ADOBE} {...inked} />
      <path d="M36 150 Q36 108 66 104 Q96 108 96 150Z" fill={ADOBE_D} {...inked} />
      <path d="M66 104 V92" stroke={INK} strokeWidth={2.5} /><circle cx="66" cy="90" r="3" fill={C.saffron} {...inked} strokeWidth={1.5} />
      <path d="M44 236 V200 Q44 186 56 186 Q68 186 68 200 V236Z" fill="#7a4a2a" {...inked} strokeWidth={2} />
      <path d="M84 180 h16 v14 h-16Z" fill="#5a3b2a" {...inked} strokeWidth={1.8} />

      <rect x="114" y="166" width="78" height="70" fill={ADOBE_D} {...inked} />
      <rect x="132" y="84" width="38" height="84" fill={ADOBE} {...inked} />
      <g stroke={INK} strokeWidth={2}>
        <path d="M140 92 V124 M148 92 V124 M156 92 V124 M164 92 V124" />
      </g>
      <path d="M128 84 H174" stroke={INK} strokeWidth={4} strokeLinecap="round" />
      <path d="M126 236 V214 h20 v22" fill="#5a3b2a" {...inked} strokeWidth={1.8} />

      <rect x="192" y="136" width="104" height="100" fill={ADOBE} {...inked} />
      <path d="M192 136 h104 v10 h-104Z" fill={C.firouzeh} {...inked} strokeWidth={2} />
      <path d="M220 236 V196 Q220 172 244 166 Q268 172 268 196 V236Z" fill="#6a3f22" {...inked} />
      <path d="M226 236 V198 Q226 178 244 173 Q262 178 262 198 V236" fill="none" stroke={C.saffron} strokeWidth={2} />
      <Star8 x={244} y={154} r={6} fill={C.saffron} />

      <rect x="296" y="156" width="96" height="80" fill={ADOBE_D} {...inked} />
      <path d="M312 156 Q312 120 340 116 Q368 120 368 156Z" fill={C.turquoise} {...inked} />
      <path d="M318 146 Q340 140 362 146" fill="none" stroke={C.cream} strokeWidth={1.5} strokeDasharray="3 3" />
      <rect x="370" y="122" width="18" height="36" fill={ADOBE} {...inked} strokeWidth={2} />
      <path d="M375 128 V144 M383 128 V144" stroke={INK} strokeWidth={1.8} />

      <path d="M170 98 Q240 128 312 132" fill="none" stroke={INK} strokeWidth={1.5} />
      {[[188, 106, C.pomegranate], [212, 114, C.saffron], [236, 120, C.lapis], [260, 125, C.olive], [284, 129, C.pomegranate]].map(([x, y, f], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <path className="nk-flag o-top" style={{ animationDelay: `${-i * 0.3}s` }} d="M-5 0 L5 0 L0 11Z" fill={f as string} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
        </g>
      ))}

      <g className="nk-banner o-top">
        <path d="M200 148 H288 V166 L284 170 L280 166 H208 L204 170 L200 166Z" fill={C.pomegranate} {...inked} strokeWidth={2} />
        <text x="244" y="161" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="10" fill={C.white} direction="rtl">خان وارد شد!</text>
      </g>

      <path d="M296 176 H334" stroke={INK} strokeWidth={3} strokeLinecap="round" />
      <g className="nk-sign" style={vb("326px 176px")}>
        <path d="M312 176 L314 186 M340 176 L338 186" stroke={INK} strokeWidth={1.4} />
        <rect x="304" y="186" width="44" height="20" rx="3" fill={C.cream} {...inked} strokeWidth={2} />
        <text x="326" y="200" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="9.5" fill={C.lapis} direction="rtl">خان رفت!</text>
      </g>

      <rect x="-10" y="236" width="420" height="80" fill="#e7c58c" stroke={INK} strokeWidth={2.5} />
      <g fill="#d2ad70"><ellipse cx="90" cy="288" rx="22" ry="3" /><ellipse cx="320" cy="282" rx="28" ry="3" /></g>

      <path d="M268 236 L270 252 H74 L76 236Z" fill={C.pomegranate} {...inked} />
      <path d="M262 239 L263 249 H82 L82 239Z" fill="none" stroke={C.saffron} strokeWidth={1.5} strokeDasharray="4 3" />
      <g transform="translate(70 244)">
        <ellipse cx="0" cy="0" rx="8" ry="9" fill={C.pomegranate} {...inked} strokeWidth={2} />
        <path d="M0 -4 Q4 0 0 4 Q-3 0 0 -2" fill="none" stroke={C.saffron} strokeWidth={1.4} />
      </g>
      <g fill={C.pomegranate} stroke={INK} strokeWidth={.8}>
        <ellipse cx="120" cy="262" rx="2.5" ry="1.5" /><ellipse cx="196" cy="266" rx="2.5" ry="1.5" /><ellipse cx="236" cy="258" rx="2.5" ry="1.5" />
      </g>
      <g transform="translate(320 266) rotate(-6)">
        <path d="M-30 0 H18 L30 -9 V9 L18 0" fill={C.saffron} {...inked} strokeWidth={2} />
      </g>

      <g transform="translate(151 82)">
        <path d="M-3 0 v-4 M3 0 v-4" stroke={INK} strokeWidth={1.6} />
        <path d="M-12 -6 Q-12 -20 0 -20 Q12 -20 14 -10 L22 -4 L12 -4 Q6 0 -6 -2 Q-12 -2 -12 -6Z" fill="#2d2a33" {...inked} strokeWidth={1.8} />
        <g className="nk-head">
          <circle cx="-9" cy="-22" r="7" fill="#2d2a33" {...inked} strokeWidth={1.8} />
          <circle cx="-10" cy="-24" r="2" fill={C.white} /><circle cx="-10.5" cy="-24" r="1" fill={INK} />
          <path d="M-14 -26 L-7 -28" stroke={C.white} strokeWidth={1} />
          <path d="M-15 -23 L-24 -21 L-15 -20Z" fill="#6b6470" stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
          <g className="nk-beak" style={vb("-15px -20px")}>
            <path d="M-15 -20 L-23 -19 L-15 -18Z" fill="#6b6470" stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
          </g>
        </g>
      </g>

      <g transform="translate(200 260)">
        <g className="nk-tw">
          <g className="nk-hop">
            <circle className="nk-dust" cx="18" cy="12" r="5" fill="#f2d9a6" stroke={INK} strokeWidth={1} />
            <circle className="nk-dust" style={{ animationDelay: "-.3s" }} cx="24" cy="10" r="4" fill="#f2d9a6" stroke={INK} strokeWidth={1} />
            <g className="nk-roll">
              <circle cx="0" cy="0" r="14" fill="#c9a35e" stroke={INK} strokeWidth={2} />
              <g fill="none" stroke="#7a5a2a" strokeWidth={1.4} strokeLinecap="round">
                <path d="M-12 -4 Q0 -14 12 -2 M-10 6 Q2 -6 12 6 M-6 -12 Q4 0 -4 12 M4 -12 Q-6 2 6 12 M-13 0 Q0 4 13 0" />
              </g>
            </g>
          </g>
        </g>
      </g>

      {big && (
        <>
          <Bubble x={138} y={52} w={58} text="قار." flip className="nk-caw" />
          <text x="200" y="290" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={700} fontSize="10" fill={INK} opacity=".7" direction="rtl">(احتمالاً خان نبود)</text>
        </>
      )}
    </Scene>
  );
}
