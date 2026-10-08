import type { CSSProperties } from "react";
import type { SceneProps } from "./types";
import { Scene, Face, Turban, Bubble, Ground, C, INK, SKIN, inked } from "./parts";

const vb = (o: string): CSSProperties => ({ transformBox: "view-box", transformOrigin: o });

function Limb({ d, w = 9 }: { d: string; w?: number }) {
  return (
    <>
      <path d={d} fill="none" stroke={INK} strokeWidth={w + 4.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d={d} fill="none" stroke={SKIN} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

function Meel({ x, y, r = 0 }: { x: number; y: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <path d="M-3 -58 h6 v8 Q12 -30 12 -10 Q12 0 0 0 Q-12 0 -12 -10 Q-12 -30 -3 -50Z" fill="#9a5b32" {...inked} strokeWidth={2} />
      <path d="M-10 -18 H10 M-8 -28 H8" stroke={C.saffron} strokeWidth={2.5} />
      <path d="M-3 -58 h6" stroke={INK} strokeWidth={3} />
    </g>
  );
}

export default function SangGonde({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="سنگ بزرگ علامت نزدنه" className={playing ? "" : "paused"}>
      <style>{`
        .sg-poseA { opacity: 1; animation: sg-poseA 9s steps(1) infinite; }
        @keyframes sg-poseA { 0% { opacity: 1 } 30% { opacity: 0 } 96% { opacity: 1 } }
        .sg-poseB { opacity: 0; animation: sg-poseB 9s steps(1) infinite; }
        @keyframes sg-poseB { 0% { opacity: 0 } 30% { opacity: 1 } 66% { opacity: 0 } }
        .sg-poseC { opacity: 0; animation: sg-poseC 9s steps(1) infinite; }
        @keyframes sg-poseC { 0% { opacity: 0 } 66% { opacity: 1 } 96% { opacity: 0 } }
        .sg-flex { animation: sg-flex .9s ease-in-out infinite; }
        @keyframes sg-flex { 0%,100% { transform: scale(1) } 50% { transform: scale(1.35) } }
        .sg-body { animation: sg-body 9s ease-in-out infinite; }
        @keyframes sg-body {
          0%,30%,100% { transform: translateY(0) scale(1,1) }
          34%,46% { transform: translateY(0) scale(1.05,1.02) }
          52% { transform: translateY(0) scale(1,1) }
          56% { transform: translateY(0) scale(1.06,.88) }
          58% { transform: translateY(0) scale(1.07,.87) translateX(-1px) }
          60% { transform: translateY(0) scale(1.06,.88) translateX(1px) }
          62% { transform: translateY(0) scale(1.07,.87) }
          66% { transform: translateY(0) scale(1,1) }
        }
        .sg-twirl { animation: sg-twirl .5s ease-in-out infinite alternate; }
        @keyframes sg-twirl { from { transform: rotate(-12deg) } to { transform: rotate(12deg) } }
        .sg-sweat { opacity: 1; animation: sg-sweat 9s ease-in infinite; }
        @keyframes sg-sweat { 0%,68% { opacity: 0; transform: translateY(0) } 72% { opacity: 1; transform: translateY(0) } 92% { opacity: 1; transform: translateY(9px) } 96%,100% { opacity: 0; transform: translateY(10px) } }
        .sg-bird { animation: sg-bird 9s ease-out infinite; }
        @keyframes sg-bird {
          0%,58% { transform: translate(150px,-90px) }
          72% { transform: translate(0,0) }
          74% { transform: translate(0,-3px) }
          76%,94% { transform: translate(0,0) }
          100% { transform: translate(-150px,-100px) }
        }
        .sg-fly { opacity: 0; animation: sg-fly 9s steps(1) infinite; }
        @keyframes sg-fly { 0% { opacity: 1 } 72% { opacity: 0 } 94% { opacity: 1 } }
        .sg-perch { opacity: 1; animation: sg-perch 9s steps(1) infinite; }
        @keyframes sg-perch { 0% { opacity: 0 } 72% { opacity: 1 } 94% { opacity: 0 } }
        .sg-flap { animation: sg-flap .15s linear infinite alternate; }
        @keyframes sg-flap { from { transform: scaleY(1) } to { transform: scaleY(-.6) } }
        .sg-peck { animation: sg-peck 1.2s ease-in-out infinite; }
        @keyframes sg-peck { 0%,60%,100% { transform: rotate(0deg) } 70%,85% { transform: rotate(25deg) } }
        .sg-pat { animation: sg-pat .26s ease-in-out infinite alternate; }
        @keyframes sg-pat { from { transform: translateY(-4px) } to { transform: translateY(1px) } }
        .sg-note { animation: sg-note 2.4s ease-out infinite; }
        @keyframes sg-note { 0% { transform: translate(0,0); opacity: 0 } 15% { opacity: 1 } 100% { transform: translate(10px,-46px); opacity: 0 } }
        .sg-say1 { opacity: 0; animation: sg-say1 9s ease-out infinite; }
        @keyframes sg-say1 { 0%,52% { opacity: 0; transform: scale(.5) } 55%,64% { opacity: 1; transform: scale(1) } 67%,100% { opacity: 0 } }
        .sg-say2 { opacity: 1; animation: sg-say2 9s ease-out infinite; }
        @keyframes sg-say2 { 0%,74% { opacity: 0; transform: scale(.5) } 77%,93% { opacity: 1; transform: scale(1) } 96%,100% { opacity: 0 } }
        .sg-eyes { animation: sg-eyes 9s steps(1) infinite; }
        @keyframes sg-eyes { 0% { transform: translateX(0) } 72% { transform: translateX(2.5px) } 94% { transform: translateX(0) } }
      `}</style>

      <rect x="-10" y="-10" width="420" height="320" fill="#e6c48f" />
      <circle cx="80" cy="60" r="22" fill="#f6dfa8" stroke={INK} strokeWidth={2} />
      <path d="M-10 230 Q50 196 110 214 Q170 190 230 216 V262 H-10Z" fill="#cf9f63" stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      <Ground y={262} color="#d9b47a" />

      <path d="M196 264 Q186 200 206 150 Q222 90 270 62 Q300 44 340 56 Q392 72 404 140 L410 264Z" fill="#9b8b78" {...inked} strokeWidth={3} />
      <path d="M222 120 Q250 80 300 66" fill="none" stroke="#b8aa98" strokeWidth={6} strokeLinecap="round" />
      <g fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round">
        <path d="M250 150 l14 18 l-6 16 l12 14" /><path d="M330 110 l-10 20 l8 10" /><path d="M300 210 l18 -8 l6 12" />
      </g>
      <g fill="#7f9a52" stroke={INK} strokeWidth={1.4}>
        <path d="M206 236 q6 -12 16 -4 q8 -8 12 4Z" /><path d="M360 90 q6 -10 14 -2 q6 -4 8 4Z" />
      </g>
      <path d="M300 56 v-8 M296 50 l4 -4 l4 4" stroke={C.olive} strokeWidth={1.8} fill="none" strokeLinecap="round" />
      {big && <text x="300" y="168" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="15" fill="#6e604f" direction="rtl">۱۰۰۰ مَن</text>}

      <Meel x={190} y={264} r={-8} />
      <Meel x={176} y={264} r={-16} />

      <ellipse cx="118" cy="266" rx="54" ry="9" fill={C.pomegranate} {...inked} strokeWidth={2} />
      <ellipse cx="118" cy="266" rx="40" ry="5.5" fill="none" stroke={C.saffron} strokeWidth={1.6} strokeDasharray="5 3" />

      <g transform="translate(118 264)">
        <g className="sg-body o-bottom">
          <Limb d="M-12 -30 L-14 -6" w={11} />
          <Limb d="M12 -30 L14 -6" w={11} />
          <path d="M-24 0 Q-24 -7 -14 -7 L-8 0Z M8 0 L14 -7 Q24 -7 24 0Z" fill={SKIN} {...inked} strokeWidth={2} />
          <path d="M-25 -56 H25 L29 -26 L5 -23 L0 -34 L-5 -23 L-29 -26Z" fill={C.lapis} {...inked} />
          <path d="M-25 -56 H25 V-50 H-25Z" fill={C.saffron} {...inked} strokeWidth={1.8} />
          <g fill={C.saffron} stroke={INK} strokeWidth={.8}>
            <path d="M-18 -42 q4 -6 6 0 q-2 6 -6 0Z" /><path d="M10 -44 q4 -6 6 0 q-2 6 -6 0Z" />
            <path d="M-12 -32 q4 -6 6 0 q-2 6 -6 0Z" /><path d="M16 -32 q4 -6 6 0 q-2 6 -6 0Z" />
          </g>
          <g fill={C.firouzeh}><circle cx="-4" cy="-44" r="1.8" /><circle cx="2" cy="-30" r="1.6" /><circle cx="-22" cy="-30" r="1.6" /></g>
          <path d="M-24 -55 Q-31 -76 -27 -88 Q0 -96 27 -88 Q31 -76 24 -55 Q0 -52 -24 -55Z" fill={SKIN} {...inked} />
          <path d="M-17 -80 q8 7 15 0 M2 -80 q8 7 15 0" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
          <path d="M-6 -70 q2 2 0 4 M2 -72 q-2 2 0 4 M-2 -64 q2 2 0 4" fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
          <circle cx="0" cy="-60" r="1.3" fill={INK} />
          <g className="sg-poseA">
            <Limb d="M-25 -86 L-46 -88 L-46 -110" />
            <Limb d="M25 -86 L46 -88 L46 -110" />
            <g transform="translate(-36 -92)"><ellipse className="sg-flex" cx="0" cy="0" rx="6" ry="5" fill={SKIN} stroke={INK} strokeWidth={1.8} /></g>
            <g transform="translate(36 -92)"><ellipse className="sg-flex" cx="0" cy="0" rx="6" ry="5" fill={SKIN} stroke={INK} strokeWidth={1.8} /></g>
            <circle cx="-46" cy="-113" r="6" fill={SKIN} {...inked} strokeWidth={2} />
            <circle cx="46" cy="-113" r="6" fill={SKIN} {...inked} strokeWidth={2} />
          </g>
          <g className="sg-poseB">
            <Limb d="M-25 -86 L-42 -70 L-26 -58" />
            <Limb d="M25 -86 L42 -70 L26 -58" />
          </g>
          <g className="sg-poseC">
            <Limb d="M-25 -86 L-42 -70 L-26 -58" />
          </g>
          <path d="M-8 -92 V-98 H8 V-92Z" fill={SKIN} stroke={INK} strokeWidth={2} />
          <g transform="translate(0 -106)">
            <ellipse cx="-13" cy="1" rx="3" ry="4.5" fill={SKIN} {...inked} strokeWidth={1.6} />
            <ellipse cx="13" cy="1" rx="3" ry="4.5" fill={SKIN} {...inked} strokeWidth={1.6} />
            <g className="sg-eyes"><Face mood="smug" /></g>
            <path d="M-7 -11 Q-2 -14 3 -12" fill="none" stroke={C.white} strokeWidth={2} strokeLinecap="round" opacity=".8" />
            <path d="M0 5 Q-10 0 -20 5 Q-30 9 -31 1 Q-31 -6 -25 -5 Q-22 -4 -24 -1 Q-26 1 -27 -1 Q-25 7 -18 9 Q-8 11 0 7Z" fill={INK} />
            <path d="M0 5 Q10 0 20 5 Q30 9 31 1 Q31 -6 25 -5 Q22 -4 24 -1 Q26 1 27 -1 Q25 7 18 9 Q8 11 0 7Z" fill={INK} />
            <path className="sg-sweat" d="M10 -10 q-3 4 0 6 q3 -2 0 -6Z" fill="#9fd8f0" stroke={INK} strokeWidth={1} />
          </g>
          <g className="sg-poseC">
            <Limb d="M25 -86 L44 -96 L30 -104" />
            <g transform="translate(28 -104)">
              <g className="sg-twirl" style={vb("0px 0px")}>
                <circle cx="0" cy="0" r="5.5" fill={SKIN} {...inked} strokeWidth={2} />
                <path d="M-2 -5 v-4" stroke={INK} strokeWidth={2} strokeLinecap="round" />
              </g>
            </g>
          </g>
        </g>
      </g>

      <g transform="translate(40 272)">
        <path d="M-20 0 Q-22 -30 -8 -42 L8 -42 Q20 -30 22 0Z" fill={C.olive} {...inked} />
        <g fill={C.cream} opacity=".7"><circle cx="-8" cy="-20" r="1.6" /><circle cx="6" cy="-28" r="1.6" /><circle cx="10" cy="-10" r="1.6" /></g>
        <g transform="translate(0 -56) scale(.85)">
          <path d="M-11 4 Q-12 20 0 24 Q12 20 11 4 Q0 12 -11 4Z" fill="#6b6b6b" />
          <Face mood="calm" />
          <Turban kind="kolah" color={C.terracotta} />
        </g>
        <g transform="translate(14 -14)">
          <path d="M-12 -12 Q0 -16 12 -12 L4 2 L6 10 H-6 L-4 2Z" fill="#8a5130" {...inked} strokeWidth={2} />
          <ellipse cx="0" cy="-12" rx="12" ry="3.5" fill={C.cream} {...inked} strokeWidth={1.8} />
          <path d="M-8 -6 L8 -6" stroke={C.saffron} strokeWidth={1.5} />
        </g>
        <g className="sg-pat"><circle cx="10" cy="-30" r="4" fill={SKIN} {...inked} strokeWidth={1.8} /></g>
        <g className="sg-pat" style={{ animationDelay: "-.13s" }}><circle cx="20" cy="-30" r="4" fill={SKIN} {...inked} strokeWidth={1.8} /></g>
        <g transform="translate(26 -36)" fill={INK}>
          <g className="sg-note"><circle cx="0" cy="0" r="2.6" /><path d="M2.4 0 V-9" stroke={INK} strokeWidth={1.5} /></g>
          <g className="sg-note" style={{ animationDelay: "-1.2s" }}><circle cx="-6" cy="4" r="2.4" /><path d="M-3.8 4 V-5 L1 -7" stroke={INK} strokeWidth={1.5} fill="none" /></g>
        </g>
      </g>

      <g transform="translate(290 54)">
        <g className="sg-bird">
          <path d="M-2 0 v3 M2 0 v3" stroke={INK} strokeWidth={1.2} />
          <ellipse cx="0" cy="-5" rx="7" ry="5" fill="#6aa9d6" {...inked} strokeWidth={1.6} />
          <path d="M6 -6 L12 -9 L11 -4Z" fill="#4b86b4" stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
          <g className="sg-peck" style={vb("-3px -8px")}>
            <circle cx="-5" cy="-10" r="4" fill="#6aa9d6" {...inked} strokeWidth={1.6} />
            <circle cx="-6" cy="-11" r=".9" fill={INK} />
            <path d="M-9 -10 L-13 -9 L-9 -8Z" fill={C.saffron} stroke={INK} strokeWidth={.8} />
          </g>
          <g className="sg-perch"><path d="M-2 -6 Q4 -9 7 -4 Q2 -2 -2 -6Z" fill="#4b86b4" stroke={INK} strokeWidth={1.1} /></g>
          <g className="sg-fly">
            <g className="sg-flap o-bottom"><path d="M-2 -7 Q2 -20 8 -16 Q4 -10 2 -7Z" fill="#4b86b4" stroke={INK} strokeWidth={1.1} /></g>
          </g>
        </g>
      </g>

      {big && (
        <>
          <Bubble x={128} y={128} w={72} text="یا علی!" className="sg-say1" />
          <Bubble x={132} y={128} w={132} text="فردا بلندش می‌کنم" className="sg-say2" />
        </>
      )}
    </Scene>
  );
}
