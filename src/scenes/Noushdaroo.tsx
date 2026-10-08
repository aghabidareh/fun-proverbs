import type { CSSProperties } from "react";
import type { SceneProps } from "./types";
import { Scene, Face, Turban, Bubble, C, INK, SKIN, inked } from "./parts";

const vb = (o: string): CSSProperties => ({ transformBox: "view-box", transformOrigin: o });

export default function Noushdaroo({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="نوشدارو بعد از مرگ سهراب" className={playing ? "" : "paused"}>
      <style>{`
        .nd-runner { transform: translate(188px,268px) scale(1); animation: nd-run 8s cubic-bezier(.45,0,.6,1) infinite; }
        @keyframes nd-run {
          0% { transform: translate(58px,204px) scale(.18) }
          62% { transform: translate(196px,268px) scale(1) }
          67% { transform: translate(186px,268px) scale(1) }
          100% { transform: translate(188px,268px) scale(1) }
        }
        .nd-hop { animation: nd-hop .32s ease-in-out infinite; }
        @keyframes nd-hop { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-5px) } }
        .nd-runlegs { opacity: 0; animation: nd-runvis 8s steps(1) infinite; }
        .nd-standlegs { opacity: 1; animation: nd-standvis 8s steps(1) infinite; }
        @keyframes nd-runvis { 0% { opacity: 1 } 64% { opacity: 0 } }
        @keyframes nd-standvis { 0% { opacity: 0 } 64% { opacity: 1 } }
        .nd-legA { animation: nd-leg .32s linear infinite; }
        .nd-legB { animation: nd-leg .32s linear infinite reverse; }
        @keyframes nd-leg { 0%,100% { transform: rotate(48deg) } 50% { transform: rotate(-48deg) } }
        .nd-armB { animation: nd-arm .32s linear infinite; }
        @keyframes nd-arm { 0%,100% { transform: rotate(-50deg) } 50% { transform: rotate(40deg) } }
        .nd-pant { animation: nd-pant 8s ease-in-out infinite; }
        @keyframes nd-pant { 0%,66% { transform: scaleY(1) } 70%,78%,86%,94% { transform: scaleY(.95) } 74%,82%,90%,98% { transform: scaleY(1.02) } }
        .nd-sweat { animation: nd-sweat .7s ease-out infinite; }
        @keyframes nd-sweat { 0% { transform: translate(0,0); opacity: 1 } 100% { transform: translate(-14px,-6px); opacity: 0 } }
        .nd-glow { animation: nd-glow 1.2s ease-in-out infinite; }
        @keyframes nd-glow { 0%,100% { transform: scale(.8); opacity: .35 } 50% { transform: scale(1.25); opacity: .7 } }
        .nd-dust { animation: nd-dust .64s ease-out infinite; }
        @keyframes nd-dust { 0% { transform: translate(0,0) scale(.5); opacity: .8 } 100% { transform: translate(-18px,-6px) scale(1.4); opacity: 0 } }
        .nd-ghost { opacity: .9; transform: translateY(-22px); animation: nd-ghost 8s ease-in-out infinite; }
        @keyframes nd-ghost {
          0%,70% { opacity: 0; transform: translateY(12px) }
          76% { opacity: .9; transform: translateY(-8px) }
          92% { opacity: .9; transform: translateY(-26px) }
          100% { opacity: 0; transform: translateY(-46px) }
        }
        .nd-wave { animation: nd-wave .5s ease-in-out infinite alternate; }
        @keyframes nd-wave { from { transform: rotate(-20deg) } to { transform: rotate(25deg) } }
        .nd-stars { animation: spin 2.4s linear infinite; }
        .nd-flag { animation: nd-flag 1.6s ease-in-out infinite alternate; }
        @keyframes nd-flag { from { transform: skewY(-6deg) scaleX(1) } to { transform: skewY(5deg) scaleX(.9) } }
        .nd-sand { animation: nd-sand .4s linear infinite; }
        @keyframes nd-sand { 0%,100% { opacity: 1 } 50% { opacity: .3 } }
        .nd-late { opacity: 1; animation: nd-late 8s ease-out infinite; }
        @keyframes nd-late { 0%,68% { opacity: 0; transform: scale(.4) } 72% { opacity: 1; transform: scale(1.15) } 76%,95% { opacity: 1; transform: scale(1) } 100% { opacity: 0; transform: scale(1) } }
        .nd-sun { animation: nd-sun 8s ease-in-out infinite; }
        @keyframes nd-sun { 0%,100% { transform: translateY(0) } 50% { transform: translateY(6px) } }
      `}</style>

      <rect x="-10" y="-10" width="420" height="320" fill="#e9b872" />
      <rect x="-10" y="150" width="420" height="60" fill="#efc489" />
      <g className="nd-sun"><circle cx="300" cy="92" r="34" fill="#f6d27a" stroke={INK} strokeWidth={2} /></g>
      <path d="M40 60 h70 M70 70 h60 M250 40 h50 M330 140 h45" stroke="#fff3d6" strokeWidth={4} strokeLinecap="round" opacity=".8" />

      <path d="M-10 205 L30 168 L62 190 L104 150 L150 196 L196 172 L240 200 L290 160 L338 196 L376 170 L410 196 V215 H-10Z" fill="#c78d5a" stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      <path d="M104 150 L116 162 L108 166 M290 160 L302 172 L294 175" fill="none" stroke={C.cream} strokeWidth={2} />

      <rect x="-10" y="204" width="420" height="110" fill="#d6a565" stroke={INK} strokeWidth={2.5} />
      <path d="M-10 214 H410" stroke={INK} strokeWidth={1} strokeDasharray="2 7" opacity=".45" />
      <g fill="#b98446" opacity=".7">
        <ellipse cx="60" cy="250" rx="18" ry="3" /><ellipse cx="150" cy="292" rx="24" ry="4" /><ellipse cx="300" cy="232" rx="20" ry="3" />
      </g>

      <g {...inked} fill="none">
        <path d="M118 222 L132 182" /><path d="M128 190 l8 -10 l-1 12Z" fill={C.cream} strokeWidth={1.8} />
        <path d="M262 226 L250 196" /><path d="M78 236 L94 214" />
      </g>
      <path d="M358 260 V150" stroke={INK} strokeWidth={3.5} strokeLinecap="round" />
      <circle cx="358" cy="148" r="4" fill={C.saffron} {...inked} strokeWidth={1.8} />
      <g className="nd-flag o-left">
        <path d="M360 156 h34 l-8 14 l8 14 h-34Z" fill="#7a3b8f" {...inked} strokeWidth={2} />
        <path d="M368 166 l4 4 l-4 4 l-4 -4Z" fill={C.saffron} stroke={INK} strokeWidth={1} />
      </g>

      <g transform="translate(330 274)">
        <ellipse cx="0" cy="0" rx="18" ry="8" fill={C.saffron} {...inked} />
        <ellipse cx="0" cy="-1" rx="7" ry="3" fill={C.terracotta} stroke={INK} strokeWidth={1.5} />
      </g>

      <g transform="translate(300 262)">
        <path d="M18 14 L64 4" stroke="#b9c2c9" strokeWidth={5} strokeLinecap="round" />
        <path d="M18 14 L64 4" stroke={INK} strokeWidth={1.2} fill="none" />
        <path d="M14 8 L20 20" stroke={INK} strokeWidth={3.5} strokeLinecap="round" />
        <path d="M18 -6 H48 M18 -16 H44" stroke={INK} strokeWidth={10} strokeLinecap="round" />
        <path d="M18 -6 H48 M18 -16 H44" stroke="#7a4a2a" strokeWidth={6.5} strokeLinecap="round" />
        <path d="M46 -2 Q58 -2 56 -14 L50 -12Z M42 -12 Q54 -14 50 -26 L44 -22Z" fill={C.pomegranate} {...inked} strokeWidth={2} />
        <path d="M-40 -2 Q-44 -26 -30 -28 L20 -24 Q26 -12 20 0 Q-10 4 -40 -2Z" fill={C.lapis} {...inked} />
        <g fill="none" stroke={C.firouzeh} strokeWidth={1.4}>
          <path d="M-30 -20 q4 4 8 0 q4 4 8 0 q4 4 8 0 q4 4 8 0 q4 4 8 0" />
          <path d="M-32 -12 q4 4 8 0 q4 4 8 0 q4 4 8 0 q4 4 8 0 q4 4 8 0 q4 4 8 0" />
        </g>
        <path d="M-8 -26 Q-6 -12 -8 0" stroke={C.saffron} strokeWidth={4} fill="none" />
        <path d="M-2 -28 L4 -40" stroke={C.olive} strokeWidth={2} />
        <circle cx="5" cy="-42" r="4" fill={C.pomegranate} stroke={INK} strokeWidth={1.5} />
        <path d="M-26 -4 Q-20 10 -6 14" stroke={INK} strokeWidth={9} strokeLinecap="round" fill="none" />
        <path d="M-26 -4 Q-20 10 -6 14" stroke={C.lapis} strokeWidth={5.5} strokeLinecap="round" fill="none" />
        <circle cx="-4" cy="15" r="4.5" fill={SKIN} {...inked} strokeWidth={2} />
        <g transform="translate(-56 -14) rotate(-90)">
          <ellipse cx="0" cy="0" rx="13" ry="15" fill={SKIN} {...inked} />
          <path d="M-9 -1 Q-5 2 -1 -1 M1 -1 Q5 2 9 -1" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
          <path d="M-11 6 Q-5 3 0 6 Q5 3 11 6 Q6 9 0 7 Q-6 9 -11 6Z" fill={INK} />
          <ellipse cx="0" cy="10" rx="2" ry="1.6" fill={INK} />
          <circle cx="-9" cy="3" r="2.4" fill="#e58a7a" opacity=".5" /><circle cx="9" cy="3" r="2.4" fill="#e58a7a" opacity=".5" />
          <path d="M-14 -4 Q-14 -22 0 -22 Q14 -22 14 -4 Q0 -9 -14 -4Z" fill="#b9c2c9" {...inked} />
          <path d="M0 -22 L0 -34" stroke={INK} strokeWidth={2.5} />
          <path d="M0 -33 Q12 -40 18 -30 Q10 -34 2 -30Z" fill={C.pomegranate} {...inked} strokeWidth={1.6} />
          <path d="M-14 -6 Q0 -11 14 -6" fill="none" stroke={C.saffron} strokeWidth={2} />
        </g>
        <path d="M-34 -24 Q-40 -42 -56 -34" stroke={INK} strokeWidth={9} strokeLinecap="round" fill="none" />
        <path d="M-34 -24 Q-40 -42 -56 -34" stroke={C.lapis} strokeWidth={5.5} strokeLinecap="round" fill="none" />
        <circle cx="-58" cy="-33" r="4.5" fill={SKIN} {...inked} strokeWidth={2} />
        <g transform="translate(-60 -44)">
          <g className="nd-stars" style={vb("0px 0px")}>
            <path d="M-16 0 l2 -5 l2 5 l-5 -3 h6Z M12 -4 l2 -5 l2 5 l-5 -3 h6Z M-2 8 l2 -5 l2 5 l-5 -3 h6Z" fill={C.saffron} stroke={INK} strokeWidth={1} />
          </g>
        </g>
      </g>

      <g transform="translate(262 226)">
        <g className="nd-ghost">
          <path d="M-12 14 Q-14 -10 0 -12 Q14 -10 12 14 l-4 -4 l-4 4 l-4 -4 l-4 4 l-4 -4Z" fill={C.white} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" opacity=".9" />
          <path d="M-8 -10 Q0 -20 8 -10" fill="#dfe6ea" stroke={INK} strokeWidth={1.5} />
          <path d="M0 -17 V-23" stroke={INK} strokeWidth={1.5} />
          <circle cx="-4" cy="-2" r="1.4" fill={INK} /><circle cx="4" cy="-2" r="1.4" fill={INK} />
          <path d="M-2 3 Q0 5 2 3" fill="none" stroke={INK} strokeWidth={1.2} />
          <g className="nd-wave" style={vb("10px 2px")}>
            <path d="M10 2 Q18 -2 20 -10" fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
            <circle cx="20" cy="-11" r="2.6" fill={C.white} stroke={INK} strokeWidth={1.4} />
          </g>
        </g>
      </g>

      <g transform="translate(234 270)">
        <path d="M-8 -22 H8 M-8 2 H8" stroke="#7a4a2a" strokeWidth={3.5} strokeLinecap="round" />
        <path d="M-6 -20 Q-6 -12 0 -10 Q6 -12 6 -20Z M-6 0 Q-6 -8 0 -10 Q6 -8 6 0Z" fill="#fdf6e6" stroke={INK} strokeWidth={1.5} />
        <path d="M-5 0 Q0 -6 5 0Z" fill={C.saffron} />
        <path d="M0 -10 V-2" stroke={C.saffron} strokeWidth={1} className="nd-sand" />
      </g>

      <g className="nd-runner" style={vb("0px 0px")}>
        <g className="nd-hop">
          <g className="nd-runlegs">
            <circle className="nd-dust" cx="-14" cy="-2" r="5" fill="#e8c88f" stroke={INK} strokeWidth={1.2} />
            <circle className="nd-dust" style={{ animationDelay: "-.32s" }} cx="-22" cy="-4" r="4" fill="#e8c88f" stroke={INK} strokeWidth={1.2} />
          </g>
          <g className="nd-pant o-bottom">
            <g transform="rotate(8)">
              <g className="nd-runlegs">
                <g className="nd-legB" style={vb("0px -32px")}>
                  <path d="M0 -32 L0 -6" stroke={INK} strokeWidth={8} strokeLinecap="round" />
                  <path d="M0 -32 L0 -6" stroke="#5a3b2a" strokeWidth={4.5} strokeLinecap="round" />
                  <path d="M-3 -6 h10 q2 4 -2 5 h-8Z" fill={C.pomegranate} stroke={INK} strokeWidth={1.6} />
                </g>
                <g className="nd-legA" style={vb("0px -32px")}>
                  <path d="M0 -32 L0 -6" stroke={INK} strokeWidth={8} strokeLinecap="round" />
                  <path d="M0 -32 L0 -6" stroke="#7a4a2a" strokeWidth={4.5} strokeLinecap="round" />
                  <path d="M-3 -6 h10 q2 4 -2 5 h-8Z" fill={C.pomegranate} stroke={INK} strokeWidth={1.6} />
                </g>
              </g>
              <g className="nd-standlegs">
                <path d="M-5 -32 L-8 -4 M5 -32 L8 -4" stroke={INK} strokeWidth={8} strokeLinecap="round" />
                <path d="M-5 -32 L-8 -4 M5 -32 L8 -4" stroke="#7a4a2a" strokeWidth={4.5} strokeLinecap="round" />
                <path d="M-14 0 Q-14 -6 -6 -6 L-4 0Z M6 0 L8 -6 Q16 -6 16 0Z" fill={C.pomegranate} {...inked} strokeWidth={1.8} />
              </g>
              <g className="nd-armB" style={vb("-8px -62px")}>
                <path d="M-8 -62 Q-12 -50 -10 -40" fill="none" stroke={INK} strokeWidth={8} strokeLinecap="round" />
                <path d="M-8 -62 Q-12 -50 -10 -40" fill="none" stroke="#c98a2a" strokeWidth={4.5} strokeLinecap="round" />
                <circle cx="-10" cy="-38" r="4" fill={SKIN} {...inked} strokeWidth={1.8} />
              </g>
              <path d="M-15 -28 Q-16 -58 -9 -68 L10 -68 Q17 -58 15 -28 Q0 -24 -15 -28Z" fill={C.saffron} {...inked} />
              <path d="M-15 -40 Q0 -36 15 -40 L15 -35 Q0 -31 -15 -35Z" fill={C.pomegranate} {...inked} strokeWidth={1.8} />
              <g fill={C.cream} opacity=".8"><circle cx="-6" cy="-52" r="1.6" /><circle cx="6" cy="-58" r="1.6" /><circle cx="4" cy="-46" r="1.6" /></g>
              <g transform="translate(3 -82)">
                <Face mood="scared" />
                <Turban kind="kolah" color={C.pomegranate} />
                <path d="M-12 -10 Q-26 -12 -30 -4 Q-22 -8 -12 -6Z" fill={C.saffron} {...inked} strokeWidth={1.4} />
                <path className="nd-sweat" d="M-14 -4 q-3 4 0 6 q3 -2 0 -6Z" fill="#9fd8f0" stroke={INK} strokeWidth={1} />
                <path className="nd-sweat" style={{ animationDelay: "-.35s" }} d="M-12 4 q-3 4 0 6 q3 -2 0 -6Z" fill="#9fd8f0" stroke={INK} strokeWidth={1} />
                <path className="nd-sweat" style={{ animationDelay: "-.2s" }} d="M12 -8 q-3 4 0 6 q3 -2 0 -6Z" fill="#9fd8f0" stroke={INK} strokeWidth={1} />
              </g>
              <path d="M9 -62 Q20 -66 26 -80" fill="none" stroke={INK} strokeWidth={8} strokeLinecap="round" />
              <path d="M9 -62 Q20 -66 26 -80" fill="none" stroke="#c98a2a" strokeWidth={4.5} strokeLinecap="round" />
              <g transform="translate(27 -92)">
                <circle className="nd-glow" cx="0" cy="0" r="16" fill="#f8f0a0" />
                <path d="M-3 -10 h6 v5 q7 3 7 10 q0 8 -10 8 q-10 0 -10 -8 q0 -7 7 -10Z" fill="#8fe0a8" {...inked} strokeWidth={2} />
                <path d="M-6 4 q6 3 12 0" fill="none" stroke={C.white} strokeWidth={1.5} />
                <rect x="-3.5" y="-14" width="7" height="4" rx="1" fill="#7a4a2a" stroke={INK} strokeWidth={1.4} />
              </g>
              <circle cx="26" cy="-81" r="4" fill={SKIN} {...inked} strokeWidth={1.8} />
            </g>
          </g>
        </g>
      </g>

      {big ? (
        <Bubble x={200} y={164} w={84} text="دیر شد!" className="nd-late" />
      ) : (
        <g transform="translate(214 160)">
          <g className="nd-late">
            <path d="M0 -14 l3 10 h-6Z" fill={C.pomegranate} stroke={INK} strokeWidth={1.5} strokeLinejoin="round" />
            <circle cx="0" cy="2" r="2" fill={C.pomegranate} stroke={INK} strokeWidth={1.2} />
          </g>
        </g>
      )}
      {big && (
        <text x="58" y="286" fontFamily="Vazirmatn" fontSize="10" fontWeight={700} fill={INK} direction="rtl" textAnchor="middle" opacity=".75">
          «ترافیک بود!»
        </text>
      )}
    </Scene>
  );
}
