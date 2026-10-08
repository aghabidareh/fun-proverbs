import type { CSSProperties } from "react";
import { Scene, Person, Ground, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const WATER = "#7cc4e0";
const JUG = "#c0603f";
const JUG_DK = "#9a4a30";
const BONE = "#efe3c6";
const CACTUS = "#cfc39a";

const CSS = `
@keyframes adk-walk{0%{transform:translateX(46px);opacity:0}4%{opacity:1}56%{transform:translateX(-26px)}93%{transform:translateX(-26px);opacity:1}98%,100%{transform:translateX(-26px);opacity:0}}
.adk-walk{animation:adk-walk 9s ease-in-out infinite}
@keyframes adk-sway{0%,100%{transform:translateY(0px) rotate(-3deg)}25%{transform:translateY(-3px) rotate(0deg)}50%{transform:translateY(0px) rotate(3deg)}75%{transform:translateY(-3px) rotate(0deg)}}
.adk-sway{animation:adk-sway 1.5s ease-in-out infinite}
@keyframes adk-slump{0%,62%{transform:rotate(0deg) translateY(0px)}68%,90%{transform:rotate(-6deg) translateY(4px)}96%,100%{transform:rotate(0deg) translateY(0px)}}
.adk-slump{animation:adk-slump 9s ease-in-out infinite}
@keyframes adk-reach{0%,30%{transform:rotate(18deg)}38%{transform:rotate(112deg)}44%{transform:rotate(100deg)}50%{transform:rotate(116deg)}57%{transform:rotate(104deg)}63%{transform:rotate(112deg)}70%,100%{transform:rotate(8deg)}}
.adk-reach{animation:adk-reach 9s ease-in-out infinite}
@keyframes adk-tongue{0%,100%{transform:scaleY(1) rotate(0deg)}50%{transform:scaleY(1.3) rotate(8deg)}}
.adk-tongue{animation:adk-tongue .75s ease-in-out infinite}
@keyframes adk-mirage{0%,18%{opacity:0;transform:scale(1,.2)}26%{opacity:.85;transform:scale(1,1)}60%{opacity:.85;transform:scale(1,1)}64%{opacity:.4;transform:scale(.8,1.3)}68%,100%{opacity:0;transform:scale(1.4,.1)}}
.adk-mirage{animation:adk-mirage 9s ease-in-out infinite}
@keyframes adk-wob{0%,100%{transform:skewX(-4deg)}50%{transform:skewX(4deg)}}
.adk-wob{animation:adk-wob 1.2s ease-in-out infinite}
@keyframes adk-heat{0%{transform:translateY(0px);opacity:0}30%{opacity:.7}100%{transform:translateY(-44px);opacity:0}}
.adk-heat{animation:adk-heat 3s ease-out infinite}
@keyframes adk-slosh{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}
.adk-slosh{animation:adk-slosh .75s ease-in-out infinite}
@keyframes adk-splash{0%{transform:translate(0px,0px) scale(.4);opacity:0}20%{opacity:1}50%{transform:translate(var(--dx),-16px) scale(1)}100%{transform:translate(calc(var(--dx) * 1.7),8px) scale(.6);opacity:0}}
.adk-splash{animation:adk-splash 1.5s ease-out infinite}
@keyframes adk-drip{0%{transform:translateY(0px) scale(1,.4);opacity:0}15%{transform:translateY(0px) scale(1,1);opacity:1}80%{transform:translateY(64px) scale(1,1);opacity:1}100%{transform:translateY(68px) scale(1.8,.3);opacity:0}}
.adk-drip{animation:adk-drip 1.3s ease-in infinite}
@keyframes adk-calm{0%,71%{opacity:1}72%,90%{opacity:0}91%,100%{opacity:1}}
.adk-calm{animation:adk-calm 9s linear infinite}
@keyframes adk-sigh{0%,71%{opacity:0}72%,90%{opacity:1}91%,100%{opacity:0}}
.adk-sigh{animation:adk-sigh 9s linear infinite}
@keyframes adk-puff{0%,72%{transform:translate(0px,0px) scale(.3);opacity:0}75%{opacity:.95}88%{transform:translate(-24px,-24px) scale(1.5);opacity:0}100%{transform:translate(-24px,-24px) scale(1.5);opacity:0}}
.adk-puff{animation:adk-puff 9s ease-out infinite}
@keyframes adk-sag{0%,70%{transform:scale(1,1)}74%{transform:scale(1.05,.95)}82%{transform:scale(.98,1.02)}88%,100%{transform:scale(1,1)}}
.adk-sag{animation:adk-sag 9s ease-in-out infinite}
@keyframes adk-say{0%,73%{transform:scale(0)}76%{transform:scale(1.15)}79%,90%{transform:scale(1)}93%,100%{transform:scale(0)}}
.adk-say{animation:adk-say 9s ease-out infinite}
@keyframes adk-head{0%,100%{transform:rotate(0deg)}20%{transform:rotate(-14deg)}40%{transform:rotate(4deg)}70%{transform:rotate(-8deg)}}
.adk-head{animation:adk-head 2.6s ease-in-out infinite}
.adk-circ{animation:spin 11s linear infinite}
@keyframes adk-flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.4)}}
.adk-flap{animation:adk-flap .9s ease-in-out infinite}
.adk-rays{animation:spin 26s linear infinite}
@keyframes adk-sweat{0%,40%{transform:translate(0px,0px);opacity:0}50%{opacity:1}100%{transform:translate(-3px,16px);opacity:0}}
.adk-sweat{animation:adk-sweat 1.8s ease-in infinite}
`;

function Drop({ x, y, delay, cls, dx = 0, r = 3 }: { x: number; y: number; delay: string; cls: string; dx?: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        className={cls}
        d={`M0 ${-r * 1.6} Q${r} 0 0 ${r} Q${-r} 0 0 ${-r * 1.6}Z`}
        fill={WATER}
        stroke={INK}
        strokeWidth={1.3}
        style={{ "--dx": `${dx}px`, animationDelay: delay } as CSSProperties}
      />
    </g>
  );
}

function Palm({ x, flip = 1 }: { x: number; flip?: number }) {
  return (
    <g transform={`translate(${x} 0) scale(${flip} 1)`}>
      <path d="M0 0 Q-4 -20 4 -40" fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" />
      <path d="M0 0 Q-4 -20 4 -40" fill="none" stroke="#a87a40" strokeWidth={3} strokeLinecap="round" />
      <path d="M4 -40 Q-10 -48 -22 -38 Q-10 -42 4 -40 Q16 -50 26 -38 Q14 -42 4 -40 Q0 -54 -12 -56 Q2 -50 4 -40 Q10 -54 22 -54 Q10 -48 4 -40Z" fill={C.olive} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
    </g>
  );
}

export default function AbDarKooze({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="آب در کوزه و ما تشنه‌لبان می‌گردیم" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#f3c77d" />

      <g transform="translate(80 52)">
        <g className="adk-rays">
          <g stroke={C.saffron} strokeWidth={3} strokeLinecap="round">
            {Array.from({ length: 12 }, (_, i) => {
              const a = (i * Math.PI) / 6;
              return <path key={i} d={`M${(Math.cos(a) * 32).toFixed(1)} ${(Math.sin(a) * 32).toFixed(1)} L${(Math.cos(a) * 42).toFixed(1)} ${(Math.sin(a) * 42).toFixed(1)}`} />;
            })}
          </g>
        </g>
        <circle r="25" fill="#fbe08f" {...inked} />
        <circle r="17" fill={C.saffron} opacity=".55" />
      </g>

      <g style={{ transformBox: "view-box", transformOrigin: "228px 62px" }} className="adk-circ">
        <g transform="translate(260 62)">
          <g className="adk-flap">
            <path d="M-14 0 Q-7 -7 0 0 Q7 -7 14 0" fill="none" stroke={INK} strokeWidth={2.5} strokeLinecap="round" />
          </g>
        </g>
      </g>

      <path d="M-10 205 Q50 178 110 196 Q170 172 240 192 Q300 170 360 188 Q390 180 410 186 V260 H-10Z" fill="#eebd76" {...inked} />
      <path d="M-10 232 Q70 206 150 226 Q230 210 300 228 Q360 214 410 224 V260 H-10Z" fill="#e8ad62" {...inked} />
      <path d="M60 200 q14 -6 28 0 M200 190 q14 -6 28 0 M120 226 q12 -5 24 0 M320 222 q12 -5 24 0" fill="none" stroke={INK} strokeWidth={1.2} opacity=".45" strokeLinecap="round" />

      <g transform="translate(96 226)">
        <g className="adk-mirage o-bottom">
          <g className="adk-wob o-bottom">
            <ellipse cx="0" cy="0" rx="44" ry="7" fill={WATER} stroke={INK} strokeWidth={1.8} />
            <path d="M-26 -1 q6 -3 12 0 M8 1 q6 -3 12 0" fill="none" stroke={C.white} strokeWidth={1.5} strokeLinecap="round" />
            <Palm x={-24} />
            <Palm x={22} flip={-1} />
          </g>
        </g>
      </g>

      <Ground y={250} color="#f0c584" />

      <g transform="translate(0 262)">
        {[230, 262, 296, 330, 362].map((x, i) => (
          <ellipse key={x} cx={x + (i % 2) * 6} cy={i % 2 ? 6 : 2} rx={7 - i * 0.6} ry="2.4" fill={WATER} stroke={INK} strokeWidth={1.1} opacity={0.9 - i * 0.12} />
        ))}
      </g>

      {[0, -1, -2].map((d, i) => (
        <g key={i} transform={`translate(${150 + i * 70} 250)`}>
          <path className="adk-heat" style={{ animationDelay: `${d}s` }} d="M0 0 q4 -5 0 -10 q-4 -5 0 -10 q4 -5 0 -10" fill="none" stroke={C.white} strokeWidth={1.6} strokeLinecap="round" />
        </g>
      ))}

      <g>
        <path d="M324 252 V160 Q324 148 334 148 Q344 148 344 160 V252Z" fill={CACTUS} {...inked} />
        <path d="M324 216 H310 Q302 216 302 206 V182 Q302 175 309 175 Q316 175 316 182 V204 H324Z" fill={CACTUS} {...inked} />
        <path d="M344 198 H356 Q362 198 362 190 V172 Q362 166 368 166 Q374 166 374 172 V194 Q374 208 360 208 H344Z" fill={CACTUS} {...inked} />
        <path d="M329 158 V250 M334 152 V250 M339 158 V250 M309 182 V210 M368 172 V200" stroke={INK} strokeWidth={1} opacity=".55" />
        <path d="M322 176 l-4 -2 M346 222 l4 -2 M322 236 l-4 2 M300 194 l-4 -1 M376 182 l4 -1" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />
      </g>

      <g transform="translate(334 148)">
        <path d="M-4 0 l-2 4 M4 0 l2 4" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        <path d="M-12 0 Q-14 -18 0 -22 Q14 -18 12 0 Q0 4 -12 0Z" fill="#5b4636" {...inked} />
        <path d="M-8 -6 Q0 -12 8 -6 M-6 -12 Q2 -16 8 -12" fill="none" stroke={INK} strokeWidth={1.2} />
        <ellipse cx="0" cy="-21" rx="9" ry="4" fill={C.cream} {...inked} strokeWidth={1.8} />
        <g className="adk-head o-bottom">
          <path d="M0 -24 Q-4 -32 -8 -34" fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" />
          <path d="M0 -24 Q-4 -32 -8 -34" fill="none" stroke="#e7a0a0" strokeWidth={2.6} strokeLinecap="round" />
          <circle cx="-9" cy="-35" r="5" fill="#e7a0a0" {...inked} strokeWidth={1.8} />
          <path d="M-13 -36 Q-19 -35 -16 -31 L-13 -33Z" fill={C.saffron} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
          <circle cx="-10" cy="-36" r="1.1" fill={INK} />
        </g>
      </g>

      <g transform="translate(296 270)">
        <path d="M-10 -6 Q-18 -14 -22 -8 Q-16 -8 -12 -2 M10 -6 Q18 -14 22 -8 Q16 -8 12 -2" fill={BONE} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
        <path d="M-11 -8 Q0 -12 11 -8 Q10 2 4 6 L-4 6 Q-10 2 -11 -8Z" fill={BONE} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
        <circle cx="-4.5" cy="-4" r="2" fill={INK} />
        <circle cx="4.5" cy="-4" r="2" fill={INK} />
        <path d="M-1.5 3 h3" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />
      </g>

      <g transform="translate(230 264) scale(.82)">
        <g className="adk-walk">
          <g className="adk-slump o-bottom">
            <g className="adk-sway o-bottom">
              <g className="adk-sag o-bottom">
                <path d="M36 -128 Q64 -126 58 -96 Q54 -84 38 -82" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
                <path d="M36 -128 Q64 -126 58 -96 Q54 -84 38 -82" fill="none" stroke={JUG} strokeWidth={5} strokeLinecap="round" />
                <path d="M-15 -146 Q-12 -158 -14 -166 L14 -166 Q12 -158 15 -146Z" fill={JUG} {...inked} />
                <ellipse cx="0" cy="-100" rx="40" ry="52" fill={JUG} {...inked} />
                <path d="M-30 -130 Q-36 -110 -32 -86" fill="none" stroke="#e08a63" strokeWidth={4} strokeLinecap="round" />
                <path d="M-38 -108 Q0 -96 38 -108 L39 -96 Q0 -84 -39 -96Z" fill={C.lapis} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
                <path d="M-34 -100 l6 -5 l6 5 l6 -5 l6 5 l6 -5 l6 5 l6 -5 l6 5 l6 -5 l6 5 l6 -5" fill="none" stroke={C.firouzeh} strokeWidth={1.6} strokeLinejoin="round" />
                <path d="M-36 -64 Q0 -52 36 -64" fill="none" stroke={JUG_DK} strokeWidth={2} />
                <ellipse cx="0" cy="-167" rx="18" ry="5" fill={JUG_DK} {...inked} />
                <g transform="translate(0 -167)">
                  <ellipse className="adk-slosh" cx="0" cy="0" rx="13" ry="2.8" fill={WATER} />
                </g>
                <Drop x={-6} y={-170} delay="0s" cls="adk-splash" dx={-8} r={2.4} />
                <Drop x={5} y={-171} delay="-.5s" cls="adk-splash" dx={9} r={2.2} />
                <Drop x={0} y={-170} delay="-1s" cls="adk-splash" dx={3} r={2} />

                <g className="adk-calm">
                  <path d="M-21 -142 Q-14 -146 -7 -142 M7 -142 Q14 -146 21 -142" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
                  <path d="M-20 -134 Q-14 -138 -8 -134 Q-14 -131 -20 -134Z M8 -134 Q14 -138 20 -134 Q14 -131 8 -134Z" fill={C.white} stroke={INK} strokeWidth={1.2} />
                  <path d="M-20 -135 Q-14 -137 -8 -135 M8 -135 Q14 -137 20 -135" fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
                  <circle cx="-15" cy="-133" r="1.5" fill={INK} />
                  <circle cx="13" cy="-133" r="1.5" fill={INK} />
                  <path d="M-4 -120 L4 -120" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
                </g>
                <g className="adk-sigh" style={{ opacity: 0 }}>
                  <path d="M-22 -140 Q-14 -136 -6 -142 M6 -142 Q14 -136 22 -140" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
                  <path d="M-20 -133 Q-14 -129 -8 -133 M8 -133 Q14 -129 20 -133" fill="none" stroke={INK} strokeWidth={2} strokeLinecap="round" />
                  <ellipse cx="0" cy="-119" rx="3.6" ry="4.6" fill={INK} />
                </g>
                <circle cx="-25" cy="-126" r="3.4" fill="#e58a7a" opacity=".55" />
                <circle cx="25" cy="-126" r="3.4" fill="#e58a7a" opacity=".55" />
                <g transform="translate(-4 -120)">
                  <g className="adk-puff">
                    <circle cx="0" cy="0" r="5" fill={C.white} stroke={INK} strokeWidth={1.4} />
                    <circle cx="-6" cy="-3" r="3.5" fill={C.white} stroke={INK} strokeWidth={1.3} />
                  </g>
                </g>
                <Drop x={36} y={-80} delay="0s" cls="adk-drip" r={2.8} />
                <Drop x={-34} y={-86} delay="-.7s" cls="adk-drip" r={2.6} />
              </g>

              <Person robe={C.olive} sash={C.pomegranate} hat={C.cream} mood="sad" armL={18} armR={-12} armLClass="adk-reach">
                <g transform="translate(0 -65)">
                  <path className="adk-tongue o-top" d="M-3 0 Q-4 9 0 10 Q4 9 3 0Z" fill="#e7798a" stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
                </g>
                <path d="M-19 -55 L13 -28 M19 -55 L-13 -28" stroke={INK} strokeWidth={6.5} strokeLinecap="round" />
                <path d="M-19 -55 L13 -28 M19 -55 L-13 -28" stroke="#8a5a34" strokeWidth={3.5} strokeLinecap="round" />
                <g transform="translate(11 -86)">
                  <path className="adk-sweat" d="M0 -4 Q3 1 0 3 Q-3 1 0 -4Z" fill={WATER} stroke={INK} strokeWidth={1} />
                </g>
              </Person>
            </g>
          </g>
        </g>
      </g>

      {big && <Bubble x={214} y={118} w={118} text="سلام؟ من اینجام!" flip className="adk-say o-bottom" />}
    </Scene>
  );
}
