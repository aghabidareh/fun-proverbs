import { Scene, Person, Turban, Bubble, C, INK, SKIN, inked } from "./parts";
import type { SceneProps } from "./types";

const WOOD = "#8a5a3b";
const CLAY = "#b5643f";
const OLD = "#b08060";
const WATER = "#9fd8ef";

const CSS = `
.kz-hide{display:none}
@keyframes kz-armL{0%,10%{transform:rotate(-35deg)}20%,55%{transform:rotate(-158deg)}65%,100%{transform:rotate(-35deg)}}
@keyframes kz-armR{0%,10%{transform:rotate(35deg)}20%,55%{transform:rotate(158deg)}65%,100%{transform:rotate(35deg)}}
.kz-armL{animation:kz-armL 7s ease-in-out infinite}
.kz-armR{animation:kz-armR 7s ease-in-out infinite}
@keyframes kz-pot{0%,10%{transform:translate(0px,-36px) rotate(0deg)}20%{transform:translate(14px,-64px) rotate(-50deg)}30%{transform:translate(14px,-64px) rotate(-60deg)}40%{transform:translate(14px,-64px) rotate(-52deg)}50%,55%{transform:translate(14px,-64px) rotate(-62deg)}65%,100%{transform:translate(0px,-36px) rotate(0deg)}}
.kz-pot{animation:kz-pot 7s ease-in-out infinite}
@keyframes kz-gulp{0%,20%{transform:translateY(0px)}24%{transform:translateY(-2px)}28%{transform:translateY(0px)}32%{transform:translateY(-2px)}36%{transform:translateY(0px)}40%{transform:translateY(-2px)}44%{transform:translateY(0px)}48%{transform:translateY(-2px)}52%,100%{transform:translateY(0px)}}
.kz-gulp{animation:kz-gulp 7s linear infinite}
@keyframes kz-dripwin{0%,18%{opacity:0}22%,58%{opacity:1}62%,100%{opacity:0}}
.kz-dripwin{animation:kz-dripwin 7s linear infinite}
@keyframes kz-drip{0%{transform:translateY(0px);opacity:0}15%{opacity:1}100%{transform:translateY(30px);opacity:0}}
.kz-drip{animation:kz-drip .6s ease-in infinite}
@keyframes kz-jet{0%,100%{transform:scale(.7)}50%{transform:scale(1.15)}}
.kz-jet{animation:kz-jet .3s ease-in-out infinite}
@keyframes kz-wet{0%,20%{transform:scale(.6)}58%,85%{transform:scale(1.15)}100%{transform:scale(.6)}}
.kz-wet{animation:kz-wet 7s ease-in-out infinite}
@keyframes kz-lookR{0%,30%{transform:translate(0px,0px)}34%,90%{transform:translate(1.4px,1.2px)}94%,100%{transform:translate(0px,0px)}}
@keyframes kz-lookL{0%,30%{transform:translate(0px,0px)}34%,90%{transform:translate(-1.4px,1.2px)}94%,100%{transform:translate(0px,0px)}}
.kz-lookR{animation:kz-lookR 7s ease-in-out infinite}
.kz-lookL{animation:kz-lookL 7s ease-in-out infinite}
@keyframes kz-brow{0%,33%{opacity:0}37%,90%{opacity:1}94%,100%{opacity:0}}
.kz-brow{animation:kz-brow 7s linear infinite}
@keyframes kz-huff{0%,38%{transform:translate(0px,0px)}40%{transform:translate(-1px,0px)}42%{transform:translate(1px,0px)}44%{transform:translate(-1px,0px)}46%{transform:translate(1px,0px)}48%,60%{transform:translate(0px,0px)}62%{transform:translate(-1px,0px)}64%{transform:translate(1px,0px)}66%{transform:translate(-1px,0px)}68%,100%{transform:translate(0px,0px)}}
.kz-huff{animation:kz-huff 7s linear infinite}
@keyframes kz-bang{0%,34%{transform:scale(0)}38%{transform:scale(1.4)}41%,60%{transform:scale(1)}64%,100%{transform:scale(0)}}
.kz-bang{animation:kz-bang 7s ease-out infinite}
@keyframes kz-ah{0%,62%{transform:scale(0);opacity:0}66%{transform:scale(1.2);opacity:1}70%,86%{transform:scale(1);opacity:1}90%,100%{transform:scale(.6);opacity:0}}
.kz-ah{animation:kz-ah 7s ease-out infinite}
@keyframes kz-spin{0%{transform:translateX(-8px);opacity:0}20%{opacity:1}80%{opacity:1}100%{transform:translateX(8px);opacity:0}}
.kz-spin{animation:kz-spin .5s linear infinite}
@keyframes kz-fire{0%,100%{transform:scale(1,1);opacity:1}50%{transform:scale(.85,1.2);opacity:.8}}
.scene .kz-fire{animation:kz-fire .7s ease-in-out infinite;transform-origin:50% 100%}
@keyframes kz-say1{0%,36%{transform:scale(0)}40%{transform:scale(1.12)}42%,60%{transform:scale(1)}63%,100%{transform:scale(0)}}
.kz-say1{animation:kz-say1 7s ease-out infinite}
@keyframes kz-say2{0%,66%{transform:scale(0)}70%{transform:scale(1.12)}72%,90%{transform:scale(1)}93%,100%{transform:scale(0)}}
.kz-say2{animation:kz-say2 7s ease-out infinite}
`;

type Kind = "jug" | "vase" | "bowl";
const SHAPES: Record<Kind, { d: string; fy: number; band: string }> = {
  jug: { d: "M-8 -30 L8 -30 L7 -24 Q16 -18 15 -8 Q13 0 0 0 Q-13 0 -15 -8 Q-16 -18 -7 -24Z", fy: -15, band: "M-15 -9 Q0 -5 15 -9" },
  vase: { d: "M-5 -36 L5 -36 L4 -27 Q14 -20 13 -8 Q11 0 0 0 Q-11 0 -13 -8 Q-14 -20 -4 -27Z", fy: -15, band: "M-13 -8 Q0 -4 13 -8" },
  bowl: { d: "M-17 -18 L17 -18 Q15 0 0 0 Q-15 0 -17 -18Z", fy: -10, band: "M-16 -13 Q0 -9 16 -13" },
};

function Pot({ x, y, kind, body, band, look }: { x: number; y: number; kind: Kind; body: string; band: string; look: "kz-lookR" | "kz-lookL" }) {
  const s = SHAPES[kind];
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="kz-huff">
        {kind === "jug" && <path d="M11 -22 Q22 -22 16 -8" fill="none" stroke={INK} strokeWidth={4.5} strokeLinecap="round" />}
        {kind === "jug" && <path d="M11 -22 Q22 -22 16 -8" fill="none" stroke={body} strokeWidth={2} strokeLinecap="round" />}
        <path d={s.d} fill={body} {...inked} strokeWidth={2} />
        <path d={s.band} fill="none" stroke={band} strokeWidth={3} />
        <path d={s.band} fill="none" stroke={INK} strokeWidth={.8} strokeDasharray="1 3" />
        <path d={`M-9 ${s.fy - 4} q-2 -5 2 -8`} fill="none" stroke={C.white} strokeWidth={1.6} strokeLinecap="round" opacity=".7" />
        <g transform={`translate(0 ${s.fy})`}>
          <ellipse cx="-4.5" cy="0" rx="3" ry="2.6" fill={C.white} stroke={INK} strokeWidth={1} />
          <ellipse cx="4.5" cy="0" rx="3" ry="2.6" fill={C.white} stroke={INK} strokeWidth={1} />
          <g className={look}>
            <circle cx="-4.5" cy="0" r="1.3" fill={INK} />
            <circle cx="4.5" cy="0" r="1.3" fill={INK} />
          </g>
          <g className="kz-brow" style={{ opacity: 0 }}>
            <path d="M-8 -4.5 L-2 -2.5 M8 -4.5 L2 -2.5" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
            <path d="M-2 5 Q0 3.5 2 5" fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
          </g>
        </g>
      </g>
    </g>
  );
}

function BrokenPot() {
  return (
    <g>
      <g transform="translate(-13 2)">
        <path className="kz-jet" style={{ transformBox: "view-box", transformOrigin: "0px 0px" }} d="M0 0 Q-6 -2 -9 4" fill="none" stroke={WATER} strokeWidth={2} strokeLinecap="round" />
      </g>
      <g transform="translate(12 6)">
        <path className="kz-jet" style={{ transformBox: "view-box", transformOrigin: "0px 0px", animationDelay: "-.15s" }} d="M0 0 Q7 0 9 6" fill="none" stroke={WATER} strokeWidth={2} strokeLinecap="round" />
      </g>
      <path d="M11 -6 Q20 -6 15 6" fill="none" stroke={INK} strokeWidth={4.5} strokeLinecap="round" />
      <path d="M11 -6 Q20 -6 15 6" fill="none" stroke={OLD} strokeWidth={2} strokeLinecap="round" />
      <path d="M-7 -14 L-2 -14 L0 -10 L3 -14 L7 -14 L6 -8 Q13 -4 12 4 Q10 13 0 13 Q-10 13 -12 4 Q-13 -4 -6 -8Z" fill={OLD} {...inked} strokeWidth={2} />
      <path d="M-9 -2 l4 -3 l2 4 l4 -4 l3 3 M2 4 l3 4 l-2 4 M-6 6 l-3 4" fill="none" stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <path d="M-12 1 L-6 -1 L-9 4Z" fill="#7a5038" stroke={INK} strokeWidth={.8} />
      <g transform="translate(4 -1) rotate(35)">
        <rect x="-8" y="-2.2" width="16" height="4.4" fill={C.cream} stroke={INK} strokeWidth={1} />
      </g>
      <g transform="translate(4 -1) rotate(-35)">
        <rect x="-8" y="-2.2" width="16" height="4.4" fill={C.cream} stroke={INK} strokeWidth={1} />
      </g>
      <circle cx="-3" cy="9" r="1" fill={WATER} />
    </g>
  );
}

function BlissHead() {
  return (
    <g>
      <path d="M-11 4 Q-12 22 0 26 Q12 22 11 4 Q0 12 -11 4Z" fill="#e8e0d4" stroke={INK} strokeWidth={1.6} />
      <ellipse cx="0" cy="0" rx="13" ry="15" fill={SKIN} {...inked} />
      <path d="M-9 0 Q-5 -4 -1 0 M1 0 Q5 -4 9 0" fill="none" stroke={INK} strokeWidth={1.7} strokeLinecap="round" />
      <path d="M-10 -6 Q-5 -9 -1 -6 M1 -6 Q5 -9 10 -6" fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
      <path d="M0 -1 Q-2 4 1 5" fill="none" stroke={INK} strokeWidth={1.2} />
      <circle cx="-8" cy="5" r="3" fill="#e58a7a" opacity=".7" />
      <circle cx="8" cy="5" r="3" fill="#e58a7a" opacity=".7" />
      <path d="M-5 7 Q0 12 5 7" fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
      <Turban color={C.cream} />
    </g>
  );
}

const shelf1: { x: number; kind: Kind; body: string; band: string }[] = [
  { x: 58, kind: "jug", body: C.firouzeh, band: C.lapis },
  { x: 96, kind: "vase", body: C.terracotta, band: C.cream },
  { x: 136, kind: "bowl", body: C.lapis, band: C.saffron },
  { x: 176, kind: "jug", body: C.turquoise, band: C.cream },
  { x: 218, kind: "vase", body: C.firouzeh, band: C.pomegranate },
  { x: 258, kind: "jug", body: C.terracotta, band: C.saffron },
  { x: 298, kind: "bowl", body: C.firouzeh, band: C.lapis },
  { x: 340, kind: "vase", body: C.lapis, band: C.firouzeh },
];
const shelf2: { x: number; kind: Kind; body: string; band: string }[] = [
  { x: 62, kind: "vase", body: C.turquoise, band: C.saffron },
  { x: 104, kind: "jug", body: C.lapis, band: C.cream },
  { x: 146, kind: "bowl", body: C.terracotta, band: C.firouzeh },
  { x: 302, kind: "jug", body: C.firouzeh, band: C.terracotta },
  { x: 342, kind: "bowl", body: C.turquoise, band: C.cream },
];

export default function Koozegar({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="کوزه‌گر از کوزه‌ی شکسته آب می‌خوره" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#e3b98f" />
      <path d="M-10 18 H410" stroke={INK} strokeWidth={2} />
      <rect x="-10" y="-10" width="420" height="28" fill={C.terracotta} />
      <path d="M-10 18 H410" stroke={INK} strokeWidth={2.5} />
      <path d="M10 18 l10 8 l10 -8 M50 18 l10 8 l10 -8 M90 18 l10 8 l10 -8 M130 18 l10 8 l10 -8 M170 18 l10 8 l10 -8 M210 18 l10 8 l10 -8 M250 18 l10 8 l10 -8 M290 18 l10 8 l10 -8 M330 18 l10 8 l10 -8 M370 18 l10 8 l10 -8" fill="none" stroke={C.saffron} strokeWidth={2} />

      {[96, 164].map((y) => (
        <g key={y}>
          <rect x="34" y={y} width="332" height="8" fill={WOOD} {...inked} strokeWidth={2} />
          <path d={`M50 ${y + 8} L50 ${y + 18} L60 ${y + 8} M350 ${y + 8} L350 ${y + 18} L340 ${y + 8}`} fill="none" stroke={INK} strokeWidth={2} />
        </g>
      ))}
      {shelf1.map((p, i) => <Pot key={`a${i}`} x={p.x} y={96} kind={p.kind} body={p.body} band={p.band} look={p.x < 228 ? "kz-lookR" : "kz-lookL"} />)}
      {shelf2.map((p, i) => <Pot key={`b${i}`} x={p.x} y={164} kind={p.kind} body={p.body} band={p.band} look={p.x < 228 ? "kz-lookR" : "kz-lookL"} />)}
      <g fontFamily="Vazirmatn" fontWeight={900} fontSize="16" fill={C.pomegranate} stroke={INK} strokeWidth={.8} textAnchor="middle">
        <text className="kz-bang" x="176" y="56">!</text>
        <text className="kz-bang" x="302" y="124" style={{ animationDelay: ".15s" }}>!</text>
        <text className="kz-bang" x="104" y="124" style={{ animationDelay: ".3s" }}>!</text>
      </g>

      <rect x="-10" y="248" width="420" height="70" fill="#b07a4e" stroke={INK} strokeWidth={2.5} />
      <path d="M-10 256 H410" stroke={INK} strokeWidth={1} strokeDasharray="2 6" opacity=".5" />

      <g transform="translate(350 252)">
        <path d="M-36 0 V-30 Q-36 -66 0 -72 Q36 -66 36 -30 V0Z" fill="#b8664a" {...inked} />
        <path d="M-36 -20 H36 M-34 -40 H34 M-24 -58 H24 M-18 -20 V-40 M10 -20 V-40 M-4 -40 V-58 M18 -40 V-58" fill="none" stroke="#8f4a33" strokeWidth={1.5} />
        <path d="M-14 0 V-14 Q0 -28 14 -14 V0Z" fill={INK} />
        <path className="kz-fire" d="M-10 0 Q-12 -10 -4 -16 Q-2 -8 0 -12 Q2 -20 6 -14 Q12 -8 10 0Z" fill={C.saffron} stroke={INK} strokeWidth={1.2} />
        <path className="kz-fire" style={{ animationDelay: "-.3s" }} d="M-5 0 Q-6 -6 -1 -9 Q4 -6 5 0Z" fill="#ffcf4a" />
      </g>

      <g transform="translate(80 256)">
        <path d="M-30 0 L-24 -30 L24 -30 L30 0Z" fill={WOOD} {...inked} />
        <path d="M0 -30 V-40" stroke={INK} strokeWidth={4} />
        <ellipse cx="0" cy="-42" rx="28" ry="6" fill="#a8784f" {...inked} />
        <path d="M-12 -44 Q-15 -58 -7 -66 L7 -66 Q15 -58 12 -44Z" fill={CLAY} {...inked} />
        <ellipse cx="0" cy="-66" rx="7" ry="2" fill="#8f4a33" stroke={INK} strokeWidth={1.4} />
        <g transform="translate(0 -54)">
          <path className="kz-spin" d="M-4 0 H4" stroke="#e08a63" strokeWidth={1.6} strokeLinecap="round" />
        </g>
        <g transform="translate(0 -42)">
          <path className="kz-spin" style={{ animationDelay: "-.25s" }} d="M-5 0 H5" stroke={C.white} strokeWidth={1.4} strokeLinecap="round" />
        </g>
      </g>

      <ellipse className="kz-wet" cx="238" cy="286" rx="26" ry="5" fill={WATER} stroke={INK} strokeWidth={1.4} />
      <g transform="translate(222 284) scale(.92)">
        <ellipse cx="0" cy="0" rx="34" ry="7" fill={C.pomegranate} stroke={INK} strokeWidth={2} />
        <Person robe={C.olive} sash={C.saffron} headClass="kz-hide" armL={-158} armR={158} armLClass="kz-armL" armRClass="kz-armR" />
        <ellipse className="kz-wet" cx="6" cy="-30" rx="12" ry="9" fill="#4f6e38" opacity=".6" />
        <g transform="translate(0 -74)">
          <g className="kz-gulp"><BlissHead /></g>
        </g>
        <g className="kz-dripwin" style={{ opacity: 0 }}>
          {[0, -0.2, -0.4].map((d, i) => (
            <g key={i} transform={`translate(${16 + i * 4} -58)`}>
              <path className="kz-drip" style={{ animationDelay: `${d}s` }} d="M0 -3 Q2.5 1 0 2.5 Q-2.5 1 0 -3Z" fill={WATER} stroke={INK} strokeWidth={.8} />
            </g>
          ))}
        </g>
        <g className="kz-pot" style={{ transform: "translate(14px,-64px) rotate(-55deg)" }}>
          <BrokenPot />
        </g>
      </g>
      <g transform="translate(266 186)">
        <text className="kz-ah" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="13" fill={C.lapis} stroke={INK} strokeWidth={.6} direction="rtl" style={{ opacity: 0 }}>آخیش!</text>
      </g>

      {big && <Bubble x={170} y={60} w={98} text="پس ما چی؟!" className="kz-say1 o-bottom" />}
      {big && <Bubble x={250} y={182} w={116} text="شما برای فروشید" flip className="kz-say2 o-bottom" />}
    </Scene>
  );
}
