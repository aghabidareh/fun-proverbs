import type { CSSProperties } from "react";
import type { SceneProps } from "./types";
import { Scene, Bubble, Cloud, Ground, C, INK, inked } from "./parts";

const vb = (o: string): CSSProperties => ({ transformBox: "view-box", transformOrigin: o });
const KABK = "#bfae98";
const CROW = "#2d2a33";

function Leg({ x, color, cls }: { x: number; color: string; cls: string }) {
  return (
    <g className={cls} style={vb(`${x}px -12px`)}>
      <path d={`M${x} -12 L${x} -1`} stroke={color} strokeWidth={3} strokeLinecap="round" />
      <path d={`M${x} -1 L${x - 7} 0 M${x} -1 L${x - 4} 2 M${x} -1 L${x + 3} 0`} stroke={color} strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}

export default function KalaghKabk({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="کلاغ خواست راه رفتن کبک رو یاد بگیره، راه رفتن خودش هم یادش رفت" className={playing ? "" : "paused"}>
      <style>{`
        .kk-stepA { animation: kk-step .9s ease-in-out infinite; }
        .kk-stepB { animation: kk-step .9s ease-in-out infinite reverse; }
        @keyframes kk-step { 0%,100% { transform: rotate(20deg) } 50% { transform: rotate(-20deg) } }
        .kk-strut { animation: kk-strut .45s ease-in-out infinite; }
        @keyframes kk-strut { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-3px) } }
        .kk-headbob { animation: kk-headbob .9s ease-in-out infinite; }
        @keyframes kk-headbob { 0%,100% { transform: translateX(0) } 25% { transform: translateX(-4px) } 75% { transform: translateX(2px) } }
        .kk-glance { animation: kk-glance 8s steps(1) infinite; }
        @keyframes kk-glance { 0% { transform: scaleX(1) } 62% { transform: scaleX(-1) } 80% { transform: scaleX(1) } }
        .kk-crow { transform: rotate(-12deg); animation: kk-crow 8s ease-in-out infinite; }
        @keyframes kk-crow {
          0%,34% { transform: rotate(0deg) }
          38% { transform: rotate(-10deg) }
          42% { transform: rotate(12deg) }
          46% { transform: rotate(-16deg) }
          50% { transform: rotate(22deg) }
          53% { transform: rotate(-8deg) }
          58% { transform: rotate(90deg) }
          61% { transform: rotate(82deg) }
          64%,88% { transform: rotate(88deg) }
          94%,100% { transform: rotate(0deg) }
        }
        .kk-walk { opacity: 0; animation: kk-walk 8s steps(1) infinite; }
        @keyframes kk-walk { 0% { opacity: 1 } 36% { opacity: 0 } 94% { opacity: 1 } }
        .kk-knot { opacity: 1; animation: kk-knot 8s steps(1) infinite; }
        @keyframes kk-knot { 0% { opacity: 0 } 36% { opacity: 1 } 94% { opacity: 0 } }
        .kk-crowbob { animation: kk-crowbob 8s linear infinite; }
        @keyframes kk-crowbob { 0%,4%,8%,12%,16%,20%,24%,28%,32%,36%,100% { transform: translateY(0) } 2%,6%,10%,14%,18%,22%,26%,30%,34% { transform: translateY(-3px) } }
        .kk-q { opacity: 1; animation: kk-q 8s ease-out infinite; }
        @keyframes kk-q { 0%,38% { opacity: 0; transform: scale(.3) } 42%,92% { opacity: 1; transform: scale(1) } 96%,100% { opacity: 0 } }
        .kk-qwob { animation: wiggle .8s ease-in-out infinite; }
        .kk-stars { opacity: 0; animation: kk-stars 8s linear infinite; }
        @keyframes kk-stars { 0%,58% { opacity: 0 } 62%,88% { opacity: 1 } 92%,100% { opacity: 0 } }
        .kk-orbit { animation: spin 1.6s linear infinite; }
        .kk-say1 { opacity: 1; animation: kk-say1 8s ease-out infinite; }
        @keyframes kk-say1 { 0%,62% { opacity: 0; transform: scale(.5) } 65%,79% { opacity: 1; transform: scale(1) } 82%,100% { opacity: 0 } }
        .kk-say2 { opacity: 1; animation: kk-say2 8s ease-out infinite; }
        @keyframes kk-say2 { 0%,80% { opacity: 0; transform: scale(.5) } 83%,92% { opacity: 1; transform: scale(1) } 95%,100% { opacity: 0 } }
        .kk-cloud { animation: kk-cloud 40s linear infinite; }
        @keyframes kk-cloud { from { transform: translateX(60px) } to { transform: translateX(-90px) } }
        .kk-sweat { animation: kk-sweat 8s ease-in infinite; }
        @keyframes kk-sweat { 0%,36% { opacity: 0; transform: translateY(0) } 40% { opacity: 1 } 56% { opacity: 1; transform: translateY(6px) } 58%,100% { opacity: 0 } }
      `}</style>

      <rect x="-10" y="-10" width="420" height="320" fill="#d3e0b5" />
      <Cloud x={70} y={60} s={0.75} className="kk-cloud" />
      <Cloud x={280} y={46} s={0.55} className="kk-cloud" />
      <path d="M-10 214 Q60 170 140 196 Q220 160 300 190 Q360 170 410 186 V240 H-10Z" fill="#a9c27e" stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      {[[40, 198], [358, 186], [326, 192]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <path d="M0 0 Q-9 -20 0 -46 Q9 -20 0 0Z" fill="#4f7a3c" {...inked} strokeWidth={2} />
          <path d="M0 0 V6" stroke={INK} strokeWidth={2.5} />
        </g>
      ))}
      <Ground y={238} color="#b9cf86" />
      <g>
        {[[60, 262, C.pomegranate], [110, 280, C.saffron], [220, 272, C.white], [250, 288, C.pomegranate], [360, 268, C.saffron], [340, 290, C.white]].map(([x, y, f], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <path d="M0 0 V-6" stroke={C.olive} strokeWidth={1.5} />
            <circle cx="0" cy="-7" r="2.6" fill={f as string} stroke={INK} strokeWidth={1} />
          </g>
        ))}
      </g>

      <g transform="translate(140 242) scale(1.25)">
        <ellipse cx="2" cy="1" rx="26" ry="3.5" fill="#9fb873" />
        <Leg x={-4} color="#d8402f" cls="kk-stepA" />
        <Leg x={6} color="#d8402f" cls="kk-stepB" />
        <g className="kk-strut">
          <path d="M22 -34 L34 -40 L32 -30 L36 -24 L22 -24Z" fill="#9c8c76" {...inked} strokeWidth={1.8} />
          <ellipse cx="0" cy="-29" rx="26" ry="18" fill={KABK} {...inked} strokeWidth={2} />
          <path d="M-22 -22 Q-10 -12 10 -14" fill="none" stroke="#e8dcc6" strokeWidth={4} strokeLinecap="round" />
          <g fill="none" strokeLinecap="round">
            <path d="M2 -34 q3 8 0 16 M8 -35 q3 8 0 16 M14 -34 q3 7 0 14" stroke="#8a3b22" strokeWidth={2.4} />
            <path d="M5 -34 q3 8 0 16 M11 -35 q3 8 0 16" stroke={INK} strokeWidth={1.2} />
          </g>
          <path d="M-6 -40 Q12 -46 24 -34 Q10 -30 -4 -32Z" fill="#a8977f" {...inked} strokeWidth={1.6} />
          <g className="kk-headbob">
            <g className="kk-glance" style={vb("-20px -50px")}>
              <path d="M-14 -40 Q-22 -44 -22 -54" fill="none" stroke={KABK} strokeWidth={10} strokeLinecap="round" />
              <circle cx="-22" cy="-56" r="9.5" fill={KABK} {...inked} strokeWidth={2} />
              <path d="M-30 -58 L-38 -58 L-30 -53Z" fill="#d8402f" stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
              <path d="M-30 -54 Q-28 -46 -18 -46 Q-14 -50 -16 -54" fill="#f5efe2" stroke={INK} strokeWidth={1.6} />
              <path d="M-30 -60 Q-24 -58 -18 -60" fill="none" stroke={INK} strokeWidth={1.6} />
              <circle cx="-24" cy="-58" r="2.6" fill="#e24a3a" stroke={INK} strokeWidth={1} />
              <circle cx="-24.5" cy="-58" r="1" fill={INK} />
              <path d="M-28 -63 Q-24 -66 -20 -63" fill="none" stroke={INK} strokeWidth={1.2} />
            </g>
          </g>
        </g>
      </g>

      <g transform="translate(290 240)">
        <g className="kk-crow" style={vb("0px 0px")}>
          <g className="kk-crowbob">
            <g className="kk-walk">
              <Leg x={-4} color="#4a4550" cls="kk-stepA" />
              <Leg x={6} color="#4a4550" cls="kk-stepB" />
            </g>
            <g className="kk-knot" fill="none" stroke="#4a4550" strokeLinecap="round">
              <path d="M-4 -12 C12 -8 -14 -4 6 -1" strokeWidth={3} />
              <path d="M6 -12 C-14 -8 14 -5 -6 -1" strokeWidth={3} />
              <circle cx="1" cy="-7" r="3" strokeWidth={2} />
              <path d="M6 -1 l6 1 M6 -1 l3 3 M-6 -1 l-6 1 M-6 -1 l-3 3" strokeWidth={2} />
            </g>
            <path d="M18 -30 L36 -36 L34 -28 L38 -20 L18 -22Z" fill={CROW} {...inked} strokeWidth={1.8} />
            <ellipse cx="0" cy="-28" rx="22" ry="16" fill={CROW} {...inked} strokeWidth={2} />
            <path d="M-14 -40 Q-30 -30 -18 -16" fill={CROW} {...inked} strokeWidth={2} />
            <path d="M-4 -38 Q12 -44 24 -30 Q10 -26 -2 -30Z" fill="#3d3a46" {...inked} strokeWidth={1.6} />
            <path d="M-12 -38 Q-20 -44 -20 -52" fill="none" stroke={CROW} strokeWidth={10} strokeLinecap="round" />
            <circle cx="-20" cy="-55" r="9" fill={CROW} {...inked} strokeWidth={2} />
            <path d="M-28 -58 L-40 -58 L-28 -52Z" fill="#6b6470" stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
            <circle cx="-22" cy="-57" r="2.8" fill={C.white} stroke={INK} strokeWidth={.8} />
            <circle cx="-22.8" cy="-57" r="1.3" fill={INK} />
            <path d="M-27 -62 L-17 -64" stroke={C.white} strokeWidth={1.4} strokeLinecap="round" />
            <path className="kk-sweat" d="M-11 -64 q-3 4 0 6 q3 -2 0 -6Z" fill="#9fd8f0" stroke={INK} strokeWidth={1} />
          </g>
        </g>
      </g>

      <g transform="translate(316 172)">
        <g className="kk-q">
          <g className="kk-qwob">
            <text x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="26" fill={C.pomegranate} stroke={INK} strokeWidth={1.2}>؟</text>
          </g>
        </g>
      </g>

      <g transform="translate(342 206)">
        <g className="kk-stars">
          <g className="kk-orbit" style={vb("0px 0px")}>
            <path d="M-14 0 l2 -5 l2 5 l-5 -3 h6Z M10 -3 l2 -5 l2 5 l-5 -3 h6Z M-2 7 l2 -5 l2 5 l-5 -3 h6Z" fill={C.saffron} stroke={INK} strokeWidth={1} />
          </g>
        </g>
      </g>

      {big && (
        <>
          <Bubble x={116} y={152} w={124} text="من این‌جوری نمی‌رم!" className="kk-say1" />
          <Bubble x={300} y={150} w={110} text="دیگه هیچ‌جوری!" flip className="kk-say2" />
        </>
      )}
    </Scene>
  );
}
