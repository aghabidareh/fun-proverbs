import type { ReactNode } from "react";
import { Scene, Person, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const DK = "#a39a90";
const DK_DK = "#7d736a";
const MUZ = "#ddd3c6";
const HAIR = "#5e534b";

const CSS = `
@keyframes kd-swA{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(12deg)}}
.kd-swA{animation:kd-swA 1.5s ease-in-out infinite}
@keyframes kd-swB{0%,100%{transform:rotate(-26deg)}45%{transform:rotate(22deg)}55%{transform:rotate(18deg)}}
.kd-swB{animation:kd-swB 1.1s ease-in-out infinite}
@keyframes kd-swC{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(6deg)}}
.kd-swC{animation:kd-swC 2.2s ease-in-out infinite}
@keyframes kd-fly{0%{transform:translate(-160px,-70px);opacity:0}4%{opacity:1}9%{transform:translate(-120px,-100px)}15%{transform:translate(-70px,-55px)}21%{transform:translate(-30px,-95px)}27%{transform:translate(18px,-40px)}31%{transform:translate(-6px,-10px)}33%,81%{transform:translate(0px,0px)}82.5%{transform:translate(2px,-9px)}84%{transform:translate(0px,0px)}85.5%{transform:translate(-2px,-7px)}87%,90%{transform:translate(0px,0px);opacity:1}94%{transform:translate(40px,-50px);opacity:1}97%,100%{transform:translate(70px,-90px);opacity:0}}
.kd-fly{animation:kd-fly 8s ease-in-out infinite}
@keyframes kd-wing{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.25)}}
.kd-wing{animation:kd-wing .12s linear infinite}
@keyframes kd-rub{0%,33%{transform:rotate(0deg)}36%{transform:rotate(-10deg)}39%{transform:rotate(8deg)}42%{transform:rotate(-10deg)}45%{transform:rotate(8deg)}48%,60%{transform:rotate(0deg)}63%{transform:rotate(-10deg)}66%{transform:rotate(8deg)}69%,100%{transform:rotate(0deg)}}
.kd-rub{animation:kd-rub 8s linear infinite}
@keyframes kd-look{0%,37%{transform:translateX(0px)}40%,74%{transform:translateX(2.6px)}77%,100%{transform:translateX(0px)}}
.kd-look{animation:kd-look 8s ease-in-out infinite}
@keyframes kd-blush{0%,37%{transform:scale(1);opacity:.55}42%,76%{transform:scale(1.5);opacity:1}80%,100%{transform:scale(1);opacity:.55}}
.kd-blush{animation:kd-blush 8s ease-in-out infinite}
@keyframes kd-ghost{0%,40%{opacity:0}46%,72%{opacity:.6}78%,100%{opacity:0}}
.kd-ghost{animation:kd-ghost 8s ease-in-out infinite}
@keyframes kd-twitch{0%,81%{opacity:0}82%,88%{opacity:1}90%,100%{opacity:0}}
.kd-twitch{animation:kd-twitch 8s linear infinite}
@keyframes kd-skin{0%,81%{transform:translateY(0px)}82.5%{transform:translateY(-2px)}84%{transform:translateY(0px)}85.5%{transform:translateY(-2px)}87%,100%{transform:translateY(0px)}}
.kd-skin{animation:kd-skin 8s linear infinite}
@keyframes kd-gest{0%,100%{transform:rotate(-70deg)}25%{transform:rotate(-104deg)}50%{transform:rotate(-80deg)}75%{transform:rotate(-112deg)}}
.kd-gest{animation:kd-gest 2.6s ease-in-out infinite}
@keyframes kd-scratch{0%,100%{transform:rotate(148deg)}50%{transform:rotate(160deg)}}
.kd-scratch{animation:kd-scratch .45s ease-in-out infinite}
@keyframes kd-tilt{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(5deg)}}
.kd-tilt{animation:kd-tilt 3.2s ease-in-out infinite}
@keyframes kd-q{0%,30%{transform:scale(0)}35%{transform:scale(1.3)}38%,90%{transform:scale(1)}94%,100%{transform:scale(0)}}
.kd-q{animation:kd-q 8s ease-out infinite}
@keyframes kd-bang{0%,38%{transform:scale(0)}41%{transform:scale(1.4)}44%,72%{transform:scale(1)}76%,100%{transform:scale(0)}}
.kd-bang{animation:kd-bang 8s ease-out infinite}
@keyframes kd-say1{0%,8%{transform:scale(0)}12%{transform:scale(1.1)}14%,46%{transform:scale(1)}50%,100%{transform:scale(0)}}
.kd-say1{animation:kd-say1 8s ease-out infinite}
@keyframes kd-say2{0%,54%{transform:scale(0)}58%{transform:scale(1.15)}60%,90%{transform:scale(1)}94%,100%{transform:scale(0)}}
.kd-say2{animation:kd-say2 8s ease-out infinite}
@keyframes kd-cloud{0%,100%{transform:translateX(-8px)}50%{transform:translateX(8px)}}
.kd-cloud{animation:kd-cloud 9s ease-in-out infinite}
`;

function Leg({ x, back = false }: { x: number; back?: boolean }) {
  return (
    <g>
      <path d={`M${x} -40 L${x} -6`} stroke={INK} strokeWidth={10} strokeLinecap="round" />
      <path d={`M${x} -40 L${x} -6`} stroke={back ? DK_DK : DK} strokeWidth={6} strokeLinecap="round" />
      <rect x={x - 5.5} y={-7} width={11} height={7} rx={2} fill={INK} />
    </g>
  );
}

function Donkey({ tail, blanket, blush = false, pupilClass, children }: { tail?: ReactNode; blanket?: string; blush?: boolean; pupilClass?: string; children?: ReactNode }) {
  return (
    <g>
      {tail && <g transform="translate(36 -58)">{tail}</g>}
      <Leg x={-14} back />
      <Leg x={26} back />
      <path d="M-26 -62 L-42 -96 Q-30 -106 -18 -98 L-8 -66Z" fill={DK} {...inked} />
      <path d="M-42 -96 L-30 -70" stroke={HAIR} strokeWidth={5} strokeLinecap="round" />
      <path d="M-30 -52 Q-30 -70 -8 -70 L18 -70 Q38 -70 38 -52 Q38 -34 18 -34 L-10 -34 Q-30 -34 -30 -52Z" fill={DK} {...inked} />
      <path d="M-16 -36 Q6 -30 28 -37 Q8 -41 -16 -36Z" fill={MUZ} />
      {blanket && (
        <g>
          <path d="M-12 -70 L20 -70 L22 -48 L-14 -48Z" fill={blanket} {...inked} strokeWidth={2} />
          <path d="M-12 -52 H20" stroke={C.saffron} strokeWidth={2} strokeDasharray="3 3" />
          <circle cx="4" cy="-60" r="3" fill={C.saffron} stroke={INK} strokeWidth={1.2} />
        </g>
      )}
      {children}
      <Leg x={-22} />
      <Leg x={18} />
      <g transform="translate(-36 -98)">
        <path d="M6 -4 Q2 -30 12 -33 Q16 -20 12 -4Z" fill={DK_DK} {...inked} strokeWidth={2} />
        <path d="M-2 -6 Q-10 -30 -2 -37 Q6 -26 4 -6Z" fill={DK} {...inked} strokeWidth={2} />
        <path d="M-1 -10 Q-5 -26 -1 -31 Q3 -22 2 -10Z" fill="#e8b4a8" />
        <path d="M10 -2 Q8 -12 -2 -10 L-20 6 Q-28 16 -20 22 Q-12 26 -4 18 L10 8 Q14 2 10 -2Z" fill={DK} {...inked} />
        <ellipse cx="-16" cy="15" rx="9" ry="7.5" fill={MUZ} {...inked} strokeWidth={2} />
        <ellipse cx="-21" cy="13.5" rx="1.4" ry="2" fill={INK} />
        <path d="M-22 19 Q-17 21 -12 19" fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
        <ellipse cx="0" cy="-1" rx="4.2" ry="3.4" fill={C.white} stroke={INK} strokeWidth={1.3} />
        <circle className={pupilClass} cx="-1" cy="-.6" r="1.8" fill={INK} />
        <path d="M-4.4 -1.6 Q0 -5.4 4.4 -1.6Q0 -3 -4.4 -1.6Z" fill={DK_DK} stroke={INK} strokeWidth={1.1} />
        <path d="M4 -10 q-4 -6 2 -9 q0 5 5 4 q-2 3 -7 5Z" fill={HAIR} />
        {blush && <ellipse className="kd-blush" cx="-5" cy="7" rx="4.2" ry="2.5" fill="#ef8f9c" opacity=".55" />}
      </g>
    </g>
  );
}

function CurlyTail() {
  return (
    <g style={{ transformBox: "view-box", transformOrigin: "0px 0px" }} className="kd-swA">
      <g transform="scale(1.5)">
        <path d="M0 0 Q26 -6 34 14 Q40 36 20 40 Q4 40 6 24 Q8 12 20 16 Q28 20 24 28" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
        <path d="M0 0 Q26 -6 34 14 Q40 36 20 40 Q4 40 6 24 Q8 12 20 16 Q28 20 24 28" fill="none" stroke={DK} strokeWidth={5} strokeLinecap="round" />
        <path d="M24 28 q-6 4 -2 10 q4 -2 6 2 q2 -6 6 -4 q-2 -6 -10 -8Z" fill={HAIR} stroke={INK} strokeWidth={1.4} />
      </g>
    </g>
  );
}

function BroomTail() {
  return (
    <g style={{ transformBox: "view-box", transformOrigin: "0px 0px" }} className="kd-swB">
      <path d="M0 0 Q16 8 24 26" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
      <path d="M0 0 Q16 8 24 26" fill="none" stroke={DK} strokeWidth={5} strokeLinecap="round" />
      <path d="M16 22 Q0 62 -6 90 Q30 106 68 80 Q50 52 32 20Z" fill={HAIR} {...inked} />
      <path d="M20 32 L6 88 M25 32 L20 96 M30 30 L36 96 M34 28 L52 88 M37 30 L62 80" stroke="#3a312b" strokeWidth={1.5} strokeLinecap="round" />
      <path d="M14 24 Q24 32 34 20" fill="none" stroke={C.saffron} strokeWidth={4} strokeLinecap="round" />
    </g>
  );
}

function LoopTail() {
  const d = "M0 0 Q40 0 50 40 Q58 80 26 82 Q2 80 12 58 Q24 38 54 54 Q84 70 112 64 Q132 60 140 74";
  return (
    <g style={{ transformBox: "view-box", transformOrigin: "0px 0px" }} className="kd-swC">
      <path d={d} fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
      <path d={d} fill="none" stroke={DK} strokeWidth={5} strokeLinecap="round" />
      <path d="M138 70 q10 -4 14 6 q-4 10 -14 8 q4 -6 0 -14Z" fill={HAIR} stroke={INK} strokeWidth={1.4} />
    </g>
  );
}

function Fly() {
  return (
    <g>
      <g className="kd-wing" style={{ transformBox: "view-box", transformOrigin: "0px -1px" }}>
        <ellipse cx="0" cy="-4" rx="2.8" ry="1.8" fill="#dff3f7" stroke={INK} strokeWidth={.8} />
        <ellipse cx="3.5" cy="-3.6" rx="2.6" ry="1.6" fill="#dff3f7" stroke={INK} strokeWidth={.8} />
      </g>
      <ellipse cx="1" cy="0" rx="3.4" ry="2.4" fill={INK} />
      <circle cx="-2.6" cy="-.6" r="1.8" fill={INK} />
      <circle cx="-3.2" cy="-1.2" r=".6" fill={C.pomegranate} />
    </g>
  );
}

export default function KharDom({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="خر ما از کرگی دم نداشت" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#e9d2a0" />
      <circle cx="338" cy="52" r="20" fill={C.saffron} {...inked} />
      <path d="M338 22 V14 M338 82 V90 M308 52 H300 M368 52 H376" stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <g className="kd-cloud">
        <path d="M60 52 Q56 40 70 40 Q74 30 88 34 Q98 26 106 38 Q118 38 114 52Z" fill={C.white} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      </g>
      <path d="M-10 168 Q60 140 130 160 Q200 132 270 156 Q340 136 410 152 L410 200 L-10 200Z" fill="#cdb07a" {...inked} />
      <rect x="-10" y="160" width="420" height="48" fill="#c99868" stroke={INK} strokeWidth={2.5} />
      <path d="M-10 176 H410 M-10 192 H410" stroke="#a8784f" strokeWidth={1.5} />
      <path d="M20 160 V176 M60 176 V192 M100 160 V176 M140 176 V192 M180 160 V176 M220 176 V192 M260 160 V176 M300 176 V192 M340 160 V176 M380 176 V192" stroke="#a8784f" strokeWidth={1.5} />
      <path d="M318 160 Q318 128 342 120 Q366 128 366 160Z" fill={C.firouzeh} {...inked} />
      <path d="M342 120 V110" stroke={INK} strokeWidth={2} />
      <circle cx="342" cy="108" r="3" fill={C.saffron} stroke={INK} strokeWidth={1.4} />

      <rect x="-10" y="206" width="420" height="110" fill={C.sand} stroke={INK} strokeWidth={2.5} />
      <path d="M-10 214 H410" stroke={INK} strokeWidth={1} strokeDasharray="2 6" opacity=".5" />
      <path d="M30 262 q6 -6 12 0 M180 274 q6 -6 12 0 M340 282 q6 -6 12 0" fill="none" stroke={INK} strokeWidth={1.3} opacity=".5" />

      <g transform="translate(70 212) scale(.55)"><Donkey blanket={C.turquoise} tail={<CurlyTail />} /></g>
      <g transform="translate(166 212) scale(.55)"><Donkey blanket={C.saffron} tail={<BroomTail />} /></g>
      <g transform="translate(262 212) scale(.55)"><Donkey blanket={C.lapis} tail={<LoopTail />} /></g>

      <g transform="translate(262 282) scale(.85)">
        <Donkey blanket={C.pomegranate} blush pupilClass="kd-look">
          <g className="kd-skin">
            <path d="M38 -54 Q34 -50 38 -46" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
          </g>
        </Donkey>
        <g className="kd-ghost" style={{ opacity: 0 }}>
          <path d="M36 -58 Q56 -50 58 -24 Q58 -10 50 -6" fill="none" stroke={INK} strokeWidth={2} strokeDasharray="3 4" strokeLinecap="round" />
        </g>
        <g className="kd-twitch" style={{ opacity: 0 }}>
          <path d="M46 -66 q5 4 0 9 M52 -70 q7 6 0 14 M44 -44 q5 4 0 8" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        </g>
        <g transform="translate(-38 -142)">
          <text className="kd-bang" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="22" fill={C.pomegranate} stroke={INK} strokeWidth={1}>!</text>
        </g>
      </g>

      <g transform="translate(294 235)">
        <g className="kd-fly">
          <g className="kd-rub"><Fly /></g>
        </g>
      </g>

      <g transform="translate(62 286) scale(.72)">
        <Person robe={C.olive} sash={C.saffron} hat={C.white} mood="calm" beard armL={12} armRClass="kd-gest" />
      </g>
      <g transform="translate(140 288) scale(.66)">
        <g className="kd-tilt o-bottom">
          <Person robe={C.terracotta} sash={C.cream} hat={C.lapis} hatKind="kolah" mood="serious" armLClass="kd-scratch" armR={-10} />
        </g>
      </g>
      <g transform="translate(150 212)">
        <text className="kd-q" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="22" fill={C.lapis} stroke={INK} strokeWidth={1}>؟</text>
      </g>

      {big && <Bubble x={52} y={206} w={118} text="از بچگی همین بود!" className="kd-say1 o-bottom" />}
      {big && <Bubble x={226} y={172} w={92} text="عادت نکردم!" flip className="kd-say2 o-bottom" />}
    </Scene>
  );
}
