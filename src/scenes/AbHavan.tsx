import type { CSSProperties } from "react";
import { Scene, Person, Ground, Star8, Bubble, C, INK, SKIN, inked } from "./parts";
import type { SceneProps } from "./types";

const BRASS = "#d4a23c";
const BRASS_DK = "#a8781f";
const WATER = "#7cc4e0";

const CSS = `
@keyframes ah-arm{0%{transform:rotate(-70deg)}40%{transform:rotate(-84deg)}58%{transform:rotate(-22deg)}64%{transform:rotate(-27deg)}72%{transform:rotate(-24deg)}100%{transform:rotate(-70deg)}}
.ah-arm{animation:ah-arm 1.2s cubic-bezier(.5,0,.6,1) infinite}
@keyframes ah-nod{0%,100%{transform:translate(0px,-74px) rotate(0deg)}58%{transform:translate(0px,-71px) rotate(3deg)}70%{transform:translate(0px,-73px) rotate(1deg)}}
.ah-nod{animation:ah-nod 1.2s ease-in-out infinite}
@keyframes ah-body{0%,52%,100%{transform:scale(1,1)}60%{transform:scale(1.03,.97)}70%{transform:scale(1,1)}}
.ah-body{animation:ah-body 1.2s ease-out infinite}
@keyframes ah-drop{0%,56%{transform:translate(0px,0px) scale(.3);opacity:0}60%{transform:translate(0px,0px) scale(1);opacity:1}78%{transform:translate(var(--dx),var(--dy)) scale(1)}100%{transform:translate(calc(var(--dx) * 1.7),34px) scale(.7);opacity:0}}
.ah-drop{animation:ah-drop 1.2s ease-out infinite}
@keyframes ah-crown{0%,56%{transform:scale(0,0);opacity:0}61%{transform:scale(1.1,1.2);opacity:1}72%{transform:scale(1,.6);opacity:.6}80%,100%{transform:scale(.6,0);opacity:0}}
.ah-crown{animation:ah-crown 1.2s ease-out infinite}
@keyframes ah-mortar{0%,56%,100%{transform:translate(0,0)}60%{transform:translate(0,1.5px) scale(1.04,.96)}66%{transform:translate(0,0)}}
.ah-mortar{animation:ah-mortar 1.2s ease-out infinite}
@keyframes ah-puddle{0%{transform:scale(.3,.5);opacity:.9}90%{transform:scale(1.12,1);opacity:1}100%{transform:scale(1.15,1);opacity:0}}
.ah-puddle{animation:ah-puddle 12s linear infinite}
@keyframes ah-ripple{0%,58%{transform:scale(.2);opacity:0}62%{opacity:.9}100%{transform:scale(1.4);opacity:0}}
.ah-ripple{animation:ah-ripple 1.2s ease-out infinite}
@keyframes ah-sweat{0%,40%{transform:translate(0,0);opacity:0}50%{opacity:1}100%{transform:translate(4px,22px);opacity:0}}
.ah-sweat{animation:ah-sweat 2.4s ease-in infinite}
@keyframes ah-bang{0%,57%{transform:scale(0);opacity:0}60%{transform:scale(1.2);opacity:1}75%,100%{transform:scale(1.5);opacity:0}}
.ah-bang{animation:ah-bang 1.2s ease-out infinite}
`;

function Drop({ dx, dy, r = 3.4, delay = "0s" }: { dx: number; dy: number; r?: number; delay?: string }) {
  return (
    <path
      className="ah-drop"
      d={`M0 ${-r * 1.6} Q${r} 0 0 ${r} Q${-r} 0 0 ${-r * 1.6}Z`}
      fill={WATER}
      stroke={INK}
      strokeWidth={1.4}
      style={{ "--dx": `${dx}px`, "--dy": `${dy}px`, animationDelay: delay } as CSSProperties}
    />
  );
}

export default function AbHavan({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="آب در هاون کوبیدن" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#e7c9a0" />
      <circle cx="340" cy="42" r="20" fill={C.saffron} {...inked} />
      <path d="M340 14 V8 M340 76 V70 M312 42 H306 M374 42 H368" stroke={INK} strokeWidth={2} strokeLinecap="round" />

      <rect x="-10" y="96" width="420" height="162" fill="#d9a982" {...inked} />
      <rect x="-10" y="96" width="420" height="18" fill={C.lapis} {...inked} />
      {Array.from({ length: 11 }, (_, i) => (
        <Star8 key={i} x={8 + i * 40} y={105} r={6} fill={C.firouzeh} />
      ))}
      <path d="M-10 160 H410 M-10 200 H410" stroke="#b9876a" strokeWidth={1.5} />
      <path d="M40 114 V160 M120 160 V200 M300 114 V160 M360 160 V200 M70 200 V258 M330 200 V258" stroke="#b9876a" strokeWidth={1.5} />
      <path d="M248 258 V170 Q248 132 278 120 Q308 132 308 170 V258Z" fill={C.turquoise} {...inked} />
      <path d="M258 258 V174 Q258 144 278 134 Q298 144 298 174 V258Z" fill={C.navy} stroke={INK} strokeWidth={2} />
      <circle cx="278" cy="152" r="5" fill={C.saffron} stroke={INK} strokeWidth={1.5} />

      <g stroke={C.white} strokeWidth={2} strokeLinecap="round" opacity=".9">
        {Array.from({ length: 6 }, (_, g) => {
          const x0 = 36 + (g % 3) * 30;
          const y0 = 124 + Math.floor(g / 3) * 24;
          return (
            <g key={g}>
              <path d={`M${x0} ${y0} v16 M${x0 + 5} ${y0} v16 M${x0 + 10} ${y0} v16 M${x0 + 15} ${y0} v16 M${x0 - 3} ${y0 + 13} L${x0 + 18} ${y0 + 3}`} />
            </g>
          );
        })}
      </g>
      {big && (
        <text x="66" y="186" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="12" fill={C.white} direction="rtl">روز ۳۰</text>
      )}

      <Ground y={256} color="#c98f63" />
      <path d="M-10 276 H410 M40 256 V276 M110 276 V300 M180 256 V276 M250 276 V300 M320 256 V276 M390 276 V300" stroke={INK} strokeWidth={1} opacity=".35" />

      <g transform="translate(192 268)">
        <g className="ah-puddle">
          <ellipse cx="0" cy="0" rx="92" ry="11" fill={WATER} stroke={INK} strokeWidth={2} />
          <path d="M-60 -2 q8 -3 16 0 M30 3 q8 -3 16 0" fill="none" stroke={C.white} strokeWidth={1.6} strokeLinecap="round" />
        </g>
      </g>
      <g transform="translate(212 268)">
        <ellipse className="ah-ripple" cx="0" cy="0" rx="22" ry="4" fill="none" stroke={C.white} strokeWidth={1.6} />
      </g>

      <g transform="translate(166 266)">
        <g className="ah-body o-bottom">
          <Person robe={C.olive} sash={C.pomegranate} hat={C.white} mood="serious" beard armL={22} armR={-24} armRClass="ah-arm" headClass="ah-nod" />
          <g className="ah-arm" style={{ transformOrigin: "12px -54px", transformBox: "view-box" }} transform="rotate(-24)">
            <path d="M15 -40 L17.5 -10" stroke={INK} strokeWidth={8} strokeLinecap="round" />
            <path d="M15 -40 L17.5 -10" stroke={BRASS} strokeWidth={4.5} strokeLinecap="round" />
            <ellipse cx="17.6" cy="-7" rx="5.5" ry="6.5" fill={BRASS} {...inked} strokeWidth={2} />
            <circle cx="16" cy="-26" r="4.5" fill={SKIN} {...inked} strokeWidth={2} />
          </g>
          <g transform="translate(-11 -84)">
            <path className="ah-sweat" d="M0 -4 Q3 1 0 3 Q-3 1 0 -4Z" fill={WATER} stroke={INK} strokeWidth={1} />
          </g>
        </g>
      </g>

      <g className="ah-mortar o-bottom">
        <path d="M182 240 Q185 256 192 260 L189 267 L217 267 L214 260 Q221 256 224 240Z" fill={BRASS} {...inked} />
        <path d="M185 250 H221 M190 259 H216" stroke={BRASS_DK} strokeWidth={2} />
        <path d="M190 244 Q192 254 196 258" fill="none" stroke="#f3d27a" strokeWidth={2.5} strokeLinecap="round" />
        <ellipse cx="203" cy="240" rx="23" ry="5" fill={BRASS_DK} {...inked} strokeWidth={2} />
        <ellipse cx="203" cy="240.5" rx="19" ry="3.2" fill={WATER} />
        <path d="M220 243 Q221 250 219 256" fill="none" stroke={WATER} strokeWidth={2.5} strokeLinecap="round" />
      </g>

      <g transform="translate(203 238)">
        <g className="ah-crown o-bottom">
          <path d="M-20 0 Q-22 -10 -16 -16 Q-12 -6 -8 -4 Q-8 -18 0 -24 Q6 -14 6 -4 Q12 -10 16 -18 Q22 -8 20 0Z" fill={WATER} {...inked} strokeWidth={1.8} />
        </g>
        <Drop dx={-34} dy={-38} />
        <Drop dx={-14} dy={-52} r={3} />
        <Drop dx={12} dy={-48} />
        <Drop dx={34} dy={-34} r={2.8} />
        <Drop dx={48} dy={-18} r={3.2} />
        <Drop dx={-50} dy={-16} r={2.6} />
      </g>
      <g transform="translate(236 222)">
        <text className="ah-bang" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="15" fill={C.lapis} direction="rtl">شَلَپ!</text>
      </g>

      {big && <Bubble x={150} y={168} w={124} text="هنوز کوبیده نشده!" flip />}
    </Scene>
  );
}
