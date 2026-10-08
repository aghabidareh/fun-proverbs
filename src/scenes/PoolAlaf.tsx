import type { CSSProperties } from "react";
import { Scene, Person, Cloud, Ground, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const BEAR = "#8a5a3b";
const BEAR_LT = "#c79a72";
const NOTE = "#a8d08d";
const NOTE_DK = "#5c8a4a";

function alt(name: string, to: number, step: number, a: string, b: string, rest: string) {
  const fr: string[] = [];
  let i = 0;
  for (let p = 0; p <= to; p += step, i++) fr.push(`${p}%{transform:${i % 2 ? b : a}}`);
  fr.push(`${to + 3}%,92%{transform:${rest}}100%{transform:${a}}`);
  return `@keyframes ${name}{${fr.join("")}}`;
}

const CSS = `
${alt("pa-run", 58, 2.5, "translate(0px,0px) rotate(-10deg)", "translate(-4px,-9px) rotate(-6deg)", "translate(0px,0px) rotate(0deg)")}
${alt("pa-grab", 58, 2.5, "rotate(96deg)", "rotate(138deg)", "rotate(14deg)")}
${alt("pa-grab2", 58, 2.5, "rotate(-150deg)", "rotate(-110deg)", "rotate(-14deg)")}
.pa-run{animation:pa-run 8s linear infinite}
.pa-grab{animation:pa-grab 8s linear infinite}
.pa-grab2{animation:pa-grab2 8s linear infinite}
@keyframes pa-graze{0%{transform:translate(0px,0px) rotate(0deg)}6%{transform:translate(0px,24px) rotate(-6deg)}11%,18%{transform:translate(0px,0px) rotate(0deg)}24%{transform:translate(0px,24px) rotate(6deg)}29%,36%{transform:translate(0px,0px) rotate(0deg)}42%{transform:translate(0px,24px) rotate(-4deg)}47%,58%{transform:translate(0px,0px) rotate(0deg)}63%,90%{transform:translate(4px,-2px) rotate(12deg)}96%,100%{transform:translate(0px,0px) rotate(0deg)}}
.pa-graze{animation:pa-graze 8s ease-in-out infinite}
@keyframes pa-chew{0%,100%{transform:scale(1,1)}50%{transform:scale(1.15,.75)}}
.pa-chew{animation:pa-chew .32s ease-in-out infinite}
@keyframes pa-cheek{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}
.pa-cheek{animation:pa-cheek .32s ease-in-out infinite}
@keyframes pa-offer{0%,60%{transform:rotate(0deg)}66%{transform:rotate(-122deg)}70%{transform:rotate(-112deg)}74%,90%{transform:rotate(-116deg)}96%,100%{transform:rotate(0deg)}}
.pa-offer{animation:pa-offer 8s ease-in-out infinite}
@keyframes pa-pnote{0%,62%{transform:scale(0)}66%{transform:scale(1.2)}70%,90%{transform:scale(1)}94%,100%{transform:scale(0)}}
.pa-pnote{animation:pa-pnote 8s ease-out infinite}
@keyframes pa-fly{0%{transform:translate(0px,0px) rotate(0deg) scale(.4);opacity:0}10%{opacity:1}50%{transform:translate(var(--dx),var(--dy)) rotate(200deg) scale(1);opacity:1}100%{transform:translate(calc(var(--dx) * 1.5),calc(var(--dy) * .1)) rotate(420deg) scale(.9);opacity:0}}
.pa-fly{animation:pa-fly 2.4s ease-out infinite}
@keyframes pa-belly{0%,100%{transform:scale(1,1)}50%{transform:scale(1.02,.97)}}
.pa-belly{animation:pa-belly 1.6s ease-in-out infinite}
@keyframes pa-q{0%,64%{transform:scale(0)}68%{transform:scale(1.3)}71%,90%{transform:scale(1)}94%,100%{transform:scale(0)}}
.pa-q{animation:pa-q 8s ease-out infinite}
@keyframes pa-lines{0%,58%{opacity:.8}62%,94%{opacity:0}100%{opacity:.8}}
.pa-lines{animation:pa-lines 8s linear infinite}
@keyframes pa-dash{0%{transform:translateX(0px)}100%{transform:translateX(16px)}}
.pa-dash{animation:pa-dash .4s linear infinite}
@keyframes pa-cloud{0%,100%{transform:translateX(-8px)}50%{transform:translateX(10px)}}
.pa-cloud{animation:pa-cloud 9s ease-in-out infinite}
@keyframes pa-ear{0%,90%,100%{transform:rotate(0deg)}94%{transform:rotate(-18deg)}}
.pa-ear{animation:pa-ear 3s ease-in-out infinite}
`;

function Note({ x, y, r = 0, s = 1, label = true }: { x: number; y: number; r?: number; s?: number; label?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <rect x="-11" y="-6" width="22" height="12" rx="1.2" fill={NOTE} stroke={INK} strokeWidth={1.4} />
      <rect x="-8.5" y="-3.8" width="17" height="7.6" fill="none" stroke={NOTE_DK} strokeWidth={0.8} />
      <circle cx="-4" cy="0" r="2.3" fill="#d5ebbf" stroke={NOTE_DK} strokeWidth={0.6} />
      {label && (
        <text x="4" y="1.6" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="4.4" fill={NOTE_DK}>۱۰۰۰</text>
      )}
    </g>
  );
}

function Flyer({ dx, dy, delay }: { dx: number; dy: number; delay: string }) {
  return (
    <g className="pa-fly" style={{ "--dx": `${dx}px`, "--dy": `${dy}px`, animationDelay: delay } as CSSProperties}>
      <Note x={0} y={0} label={false} />
    </g>
  );
}

export default function PoolAlaf({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="پول علف خرس نیست" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#bcd9a9" />
      <circle cx="346" cy="46" r="18" fill={C.saffron} {...inked} />
      <path d="M346 18 V12 M346 80 V74 M318 46 H312 M380 46 H374" stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Cloud x={40} y={64} s={1} className="pa-cloud" />
      <Cloud x={220} y={50} s={.8} className="pa-cloud" style={{ animationDelay: "-4s" }} />

      <path d="M-10 200 Q60 160 130 186 Q200 150 280 180 Q340 160 410 176 V240 H-10Z" fill="#9cc27f" {...inked} />
      <g>
        <path d="M58 190 V176" stroke={INK} strokeWidth={5} strokeLinecap="round" />
        <circle cx="58" cy="166" r="14" fill={C.olive} {...inked} />
        <path d="M300 178 V164" stroke={INK} strokeWidth={5} strokeLinecap="round" />
        <circle cx="300" cy="154" r="12" fill={C.olive} {...inked} />
        <path d="M352 182 Q346 158 352 134 Q358 158 352 182Z" fill="#557a3c" {...inked} />
      </g>

      <Ground y={226} color="#8fbf6a" />
      <path d="M20 240 l3 -6 l3 6 M90 290 l3 -6 l3 6 M250 296 l3 -6 l3 6 M360 246 l3 -6 l3 6" fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" opacity=".6" />
      <g>
        {[
          [30, 252, -12], [62, 270, 18], [100, 246, 6], [96, 286, -20], [140, 278, 10], [190, 270, -8], [226, 284, 14], [250, 254, -16],
          [282, 286, 8], [330, 270, -10], [362, 288, 20], [372, 250, 4], [40, 290, 6], [170, 294, -14], [310, 246, 12], [210, 248, 22],
        ].map(([x, y, r], i) => (
          <Note key={i} x={x} y={y} r={r} s={0.9} label={i % 2 === 0} />
        ))}
      </g>
      <g fill="#e58a7a" stroke={INK} strokeWidth={1}>
        <circle cx="76" cy="236" r="2.6" /><circle cx="268" cy="240" r="2.6" /><circle cx="350" cy="236" r="2.6" />
      </g>

      <g>
        <g className="pa-belly o-bottom">
          <path d="M214 240 Q212 254 222 254 Q232 254 230 240Z M234 236 Q234 250 244 250 Q252 250 250 234Z" fill={BEAR} {...inked} />
          <ellipse cx="182" cy="212" rx="58" ry="34" fill={BEAR} {...inked} />
          <path d="M196 190 Q214 186 228 196 M200 202 Q214 198 226 206" fill="none" stroke="#6e4630" strokeWidth={2} strokeLinecap="round" />
          <circle cx="238" cy="206" r="5" fill={BEAR_LT} {...inked} strokeWidth={1.8} />
        </g>
        <path d="M116 230 Q112 252 126 254 Q140 252 136 228Z" fill={BEAR} {...inked} />
        <path d="M118 250 h4 M124 251 h4 M130 250 h4" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />

        <g className="pa-offer" style={{ transformOrigin: "162px 222px", transformBox: "view-box" }}>
          <path d="M152 222 Q148 252 162 254 Q176 252 172 222Z" fill={BEAR} {...inked} />
          <path d="M154 250 h4 M160 251 h4 M166 250 h4" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />
          <g transform="translate(162 258) rotate(90)">
            <g className="pa-pnote">
              <Note x={0} y={0} />
            </g>
          </g>
        </g>

        <g transform="translate(140 196)">
          <g className="pa-graze">
            <g className="pa-ear">
              <circle cx="-20" cy="-20" r="8.5" fill={BEAR} {...inked} />
              <circle cx="-20" cy="-20" r="4" fill="#e7a3a3" />
            </g>
            <circle cx="20" cy="-20" r="8.5" fill={BEAR} {...inked} />
            <circle cx="20" cy="-20" r="4" fill="#e7a3a3" />
            <circle cx="0" cy="0" r="27" fill={BEAR} {...inked} />
            <g className="pa-cheek">
              <circle cx="-14" cy="9" r="6" fill="#e58a7a" opacity=".55" />
            </g>
            <g className="pa-cheek" style={{ animationDelay: "-.16s" }}>
              <circle cx="14" cy="9" r="6" fill="#e58a7a" opacity=".55" />
            </g>
            <ellipse cx="0" cy="9" rx="13" ry="10" fill={BEAR_LT} {...inked} strokeWidth={2} />
            <ellipse cx="0" cy="3" rx="4.5" ry="3.2" fill={INK} />
            <path d="M-15 -6 Q-10 -12 -5 -6 M5 -6 Q10 -12 15 -6" fill="none" stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
            <g className="pa-chew">
              <g transform="translate(5 15) rotate(-24)">
                <Note x={6} y={0} s={0.8} label={false} />
              </g>
              <path d="M-6 13 Q0 18 6 13" fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
            </g>
          </g>
        </g>
      </g>

      <g transform="translate(150 222)">
        <Flyer dx={60} dy={-70} delay="0s" />
        <Flyer dx={110} dy={-50} delay="-.4s" />
        <Flyer dx={30} dy={-90} delay="-.8s" />
        <Flyer dx={140} dy={-80} delay="-1.2s" />
        <Flyer dx={-30} dy={-60} delay="-1.6s" />
        <Flyer dx={90} dy={-100} delay="-2s" />
      </g>

      <g className="pa-lines" fill="none" stroke={INK} strokeWidth={2} strokeLinecap="round" opacity=".55">
        <g className="pa-dash">
          <path d="M340 200 h18 M346 214 h22 M338 228 h16" />
        </g>
      </g>

      <g transform="translate(306 262) scale(.72)">
        <g className="pa-run o-bottom">
          <Person robe={C.lapis} sash={C.saffron} hat={C.white} mood="scared" beard armL={96} armR={-150} armLClass="pa-grab" armRClass="pa-grab2" />
        </g>
      </g>
      <g transform="translate(306 178)">
        <text className="pa-q" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="22" fill={C.saffron} stroke={INK} strokeWidth={1.2}>؟</text>
      </g>

      {big && <Bubble x={128} y={160} w={108} text="طعمش جوهریه!" className="pa-q o-bottom" />}
    </Scene>
  );
}
