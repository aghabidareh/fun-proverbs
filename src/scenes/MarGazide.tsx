import { Scene, Person, Cloud, Ground, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const CSS = `
@keyframes mg-move{0%{transform:translate(-170px,0px)}26%,34%{transform:translate(55px,0px)}38%{transform:translate(58px,-42px)}43%{transform:translate(50px,0px)}80%,100%{transform:translate(-270px,0px)}}
.mg-move{animation:mg-move 7s linear infinite}
@keyframes mg-calm{0%,33%{opacity:1}35%,100%{opacity:0}}
.mg-calm{animation:mg-calm 7s linear infinite}
@keyframes mg-scared{0%,33%{opacity:0}35%,100%{opacity:1}}
.mg-scared{animation:mg-scared 7s linear infinite}
@keyframes mg-swingL{0%,100%{transform:rotate(25deg)}50%{transform:rotate(-5deg)}}
@keyframes mg-swingR{0%,100%{transform:rotate(5deg)}50%{transform:rotate(-25deg)}}
.mg-swingL{animation:mg-swingL .7s ease-in-out infinite}
.mg-swingR{animation:mg-swingR .7s ease-in-out infinite}
@keyframes mg-walkbob{0%,50%,100%{transform:translateY(0)}25%,75%{transform:translateY(-2.5px)}}
.mg-walkbob{animation:mg-walkbob .7s ease-in-out infinite}
@keyframes mg-flailL{0%,100%{transform:rotate(160deg)}50%{transform:rotate(112deg)}}
@keyframes mg-flailR{0%,100%{transform:rotate(-112deg)}50%{transform:rotate(-160deg)}}
.mg-flailL{animation:mg-flailL .22s linear infinite}
.mg-flailR{animation:mg-flailR .22s linear infinite}
@keyframes mg-run{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-6px) rotate(2deg)}}
.mg-run{animation:mg-run .22s linear infinite}
@keyframes mg-drip{0%{transform:translate(0,0);opacity:1}100%{transform:translate(18px,-14px);opacity:0}}
.mg-drip{animation:mg-drip .55s ease-out infinite}
@keyframes mg-dust{0%{transform:translate(0,0) scale(.4);opacity:.9}100%{transform:translate(26px,-8px) scale(1.5);opacity:0}}
.mg-dust{animation:mg-dust .5s ease-out infinite}
@keyframes mg-lines{0%,100%{opacity:.9;transform:translateX(0)}50%{opacity:.4;transform:translateX(6px)}}
.mg-lines{animation:mg-lines .25s linear infinite}
@keyframes mg-think{0%,26%{transform:scale(0);opacity:0}29%{transform:scale(1.1);opacity:1}31%,37%{transform:scale(1);opacity:1}39%,100%{transform:scale(0);opacity:0}}
.mg-think{animation:mg-think 7s ease-out infinite}
@keyframes mg-bang{0%,33%{transform:scale(0)}35%{transform:scale(1.5)}38%,42%{transform:scale(1)}45%,100%{transform:scale(0)}}
.mg-bang{animation:mg-bang 7s ease-out infinite}
@keyframes mg-rope{0%,80%{transform:rotate(0deg)}84%{transform:rotate(18deg)}87%{transform:rotate(12deg)}90%,96%{transform:rotate(16deg)}100%{transform:rotate(0deg)}}
.mg-rope{animation:mg-rope 7s ease-in-out infinite}
@keyframes mg-spark{0%,82%{transform:scale(0) rotate(0deg)}86%{transform:scale(1.3) rotate(45deg)}90%,96%{transform:scale(1) rotate(90deg)}100%{transform:scale(0) rotate(90deg)}}
.mg-spark{animation:mg-spark 7s ease-out infinite}
@keyframes mg-heh{0%,84%{transform:scale(0)}87%{transform:scale(1.15)}89%,96%{transform:scale(1)}99%,100%{transform:scale(0)}}
.mg-heh{animation:mg-heh 7s ease-out infinite}
@keyframes mg-lid{0%,82%{transform:scaleY(.45)}85%,97%{transform:scaleY(1)}100%{transform:scaleY(.45)}}
.scene .mg-lid{animation:mg-lid 7s ease-in-out infinite;transform-origin:center top}
@keyframes mg-sway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}
.mg-sway{animation:mg-sway 4s ease-in-out infinite}
`;

function Plaster() {
  return (
    <g transform="translate(7 -68) rotate(-25)">
      <rect x="-5" y="-2.5" width="10" height="5" rx="1.5" fill={C.cream} stroke={INK} strokeWidth={1.2} />
      <path d="M-1 -2.5 V2.5 M1 -2.5 V2.5" stroke={INK} strokeWidth={.7} />
    </g>
  );
}

export default function MarGazide({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="مارگزیده از ریسمان سیاه و سفید می‌ترسد" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#c8dcc0" />
      <Cloud x={50} y={60} s={.9} />
      <Cloud x={270} y={44} s={.75} style={{ animation: "float 6s ease-in-out infinite" }} />

      <path d="M-10 200 Q60 150 140 190 Q220 140 300 180 Q360 160 410 175 L410 260 L-10 260Z" fill="#a9c58f" {...inked} />
      <path d="M-10 230 Q90 200 200 226 Q300 206 410 222 L410 260 L-10 260Z" fill="#8fb373" {...inked} />
      <g transform="translate(345 232)">
        <g className="mg-sway o-bottom">
          <path d="M0 0 Q-14 -40 0 -96 Q14 -40 0 0Z" fill={C.olive} {...inked} />
          <path d="M0 -20 V0" stroke={INK} strokeWidth={2.5} />
        </g>
      </g>
      <g transform="translate(60 236)">
        <path d="M0 0 V-34" stroke="#7a4e2d" strokeWidth={5} strokeLinecap="round" />
        <circle cx="0" cy="-48" r="22" fill="#5f8a45" {...inked} />
        <circle cx="-9" cy="-48" r="3.5" fill={C.pomegranate} stroke={INK} strokeWidth={1.2} />
        <circle cx="8" cy="-56" r="3.5" fill={C.pomegranate} stroke={INK} strokeWidth={1.2} />
        <circle cx="6" cy="-40" r="3.5" fill={C.pomegranate} stroke={INK} strokeWidth={1.2} />
      </g>

      <Ground y={252} color="#e0c993" />
      <g fill="none" stroke={INK} strokeWidth={1.2} opacity=".5">
        <path d="M30 274 q5 -5 10 0 M150 288 q5 -5 10 0 M370 280 q5 -5 10 0" />
      </g>
      <g stroke={INK} strokeWidth={1.2}>
        <circle cx="110" cy="282" r="3" fill={C.pomegranate} /><circle cx="370" cy="262" r="3" fill={C.saffron} />
      </g>

      <ellipse cx="282" cy="270" rx="56" ry="6" fill={INK} opacity=".12" />
      <g>
        <path d="M248 266 Q262 256 276 266 T304 266 T330 262 Q342 258 340 270" fill="none" stroke={INK} strokeWidth={10} strokeLinecap="round" />
        <path d="M248 266 Q262 256 276 266 T304 266 T330 262 Q342 258 340 270" fill="none" stroke={C.white} strokeWidth={6} strokeLinecap="round" />
        <path d="M248 266 Q262 256 276 266 T304 266 T330 262 Q342 258 340 270" fill="none" stroke="#1d1814" strokeWidth={6} strokeDasharray="6 6" />
        <g className="mg-rope o-right" style={{ transform: "rotate(16deg)" }}>
          <path d="M226 262 Q236 258 250 266" fill="none" stroke={INK} strokeWidth={10} strokeLinecap="round" />
          <path d="M226 262 Q236 258 250 266" fill="none" stroke={C.white} strokeWidth={6} strokeLinecap="round" />
          <path d="M226 262 Q236 258 250 266" fill="none" stroke="#1d1814" strokeWidth={6} strokeDasharray="6 6" strokeDashoffset="3" />
          <path d="M226 262 l-7 -4 M226 262 l-8 1 M226 262 l-6 5" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
          <path d="M231 257.5 Q234 255 237 257.5 Q234 259.5 231 257.5Z" fill={C.white} stroke={INK} strokeWidth={.9} />
          <circle cx="233.6" cy="257.6" r=".9" fill={INK} />
          <rect className="mg-lid" x="230.5" y="254.6" width="7" height="3" fill="#1d1814" />
        </g>
      </g>
      <Star8 x={222} y={244} r={6} fill={C.saffron} className="mg-spark" />
      {big && <Bubble x={226} y={240} w={52} text="هِه!" flip className="mg-heh o-bottom" />}

      <g transform="translate(140 268)">
        <g className="mg-move">
          <g className="mg-calm" style={{ opacity: 0 }}>
            <g className="mg-walkbob">
              <Person robe={C.lapis} sash={C.saffron} hat={C.white} mood="calm" armL={25} armR={5} armLClass="mg-swingL" armRClass="mg-swingR" />
              <Plaster />
            </g>
          </g>
          <g className="mg-scared">
            <g transform="rotate(-9)">
              <g className="mg-run o-bottom">
                <Person robe={C.lapis} sash={C.saffron} hat={C.white} mood="scared" armL={160} armR={-112} armLClass="mg-flailL" armRClass="mg-flailR" />
                <Plaster />
                {[0, -.18, -.36].map((d, i) => (
                  <g key={i} transform={`translate(${10 + i * 2} ${-90 + i * 6})`}>
                    <path className="mg-drip" style={{ animationDelay: `${d}s` }} d="M0 -4 Q3 1 0 3 Q-3 1 0 -4Z" fill="#9fd8ef" stroke={INK} strokeWidth={1} />
                  </g>
                ))}
              </g>
            </g>
            <g className="mg-lines" stroke={INK} strokeWidth={2.2} strokeLinecap="round">
              <path d="M30 -70 H58 M34 -50 H70 M30 -30 H54" />
            </g>
            {[0, -.17, -.34].map((d, i) => (
              <g key={i} transform={`translate(${14 + i * 6} -4)`}>
                <circle className="mg-dust" style={{ animationDelay: `${d}s` }} r="6" fill={C.cream} stroke={INK} strokeWidth={1.4} />
              </g>
            ))}
          </g>
          <g transform="translate(-34 -112)">
            <g className="mg-think o-bottom" style={{ opacity: 0 }}>
              <circle cx="24" cy="22" r="3" fill={C.white} stroke={INK} strokeWidth={1.4} />
              <circle cx="16" cy="12" r="4.5" fill={C.white} stroke={INK} strokeWidth={1.4} />
              <path d="M-30 0 Q-36 -16 -20 -20 Q-14 -34 4 -28 Q20 -36 28 -20 Q40 -14 32 0 Q24 10 0 6 Q-22 12 -30 0Z" fill={C.white} {...inked} strokeWidth={2} />
              <path d="M-18 -6 Q-10 -18 -2 -8 T14 -10" fill="none" stroke={C.olive} strokeWidth={5} strokeLinecap="round" />
              <circle cx="16" cy="-12" r="5" fill={C.olive} stroke={INK} strokeWidth={1.4} />
              <path d="M20 -10 l3 4 M18 -9 l1 4" stroke={C.white} strokeWidth={1.3} strokeLinecap="round" />
              <path d="M21 -12 l5 0 l2 -2 M26 -12 l2 2" stroke={C.pomegranate} strokeWidth={1} strokeLinecap="round" />
              <circle cx="15" cy="-14" r="1" fill={INK} />
            </g>
          </g>
          <g transform="translate(18 -112)">
            <text className="mg-bang" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="26" fill={C.pomegranate} stroke={INK} strokeWidth={1}>!</text>
          </g>
        </g>
      </g>
    </Scene>
  );
}
