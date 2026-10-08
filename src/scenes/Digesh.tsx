import type { CSSProperties } from "react";
import { Scene, Person, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const COPPER = "#c9824a";
const COPPER_DK = "#9e5f31";
const COLD = "#8fa6ad";
const COLD_DK = "#6b8189";
const FOAM = "#fffaf0";

const CSS = `
@keyframes dg-rattle{0%,100%{transform:translate(0px,0px) rotate(0deg)}25%{transform:translate(-1px,-5px) rotate(-7deg)}50%{transform:translate(1px,0px) rotate(3deg)}75%{transform:translate(1px,-4px) rotate(7deg)}}
.dg-rattle{animation:dg-rattle .28s linear infinite}
@keyframes dg-steam{0%{transform:translate(0px,0px) scale(.4);opacity:0}15%{opacity:.9}100%{transform:translate(var(--dx),-54px) scale(1.9);opacity:0}}
.dg-steam{animation:dg-steam 1.8s ease-out infinite}
@keyframes dg-jet{0%{transform:translate(0px,0px) scale(.3);opacity:0}10%{opacity:1}100%{transform:translate(64px,-18px) scale(1.6);opacity:0}}
.dg-jet{animation:dg-jet .7s linear infinite}
@keyframes dg-bub{0%,100%{transform:scale(0)}40%{transform:scale(1.15)}60%{transform:scale(1)}}
.dg-bub{animation:dg-bub .6s ease-out infinite}
@keyframes dg-foam{0%,100%{transform:scale(1,1)}50%{transform:scale(1.08,1.25)}}
.dg-foam{animation:dg-foam .5s ease-in-out infinite}
@keyframes dg-fire{0%,100%{transform:scale(1,1)}50%{transform:scale(.8,.7)}}
.dg-fire{animation:dg-fire .3s ease-in-out infinite}
@keyframes dg-buzz{0%,100%{transform:translateX(0px)}50%{transform:translateX(1.5px)}}
.dg-buzz{animation:dg-buzz .08s linear infinite}
@keyframes dg-eye{0%,45%{transform:translateX(-2.6px)}48%,54%{transform:translateX(2.6px)}55.5%,100%{transform:translateX(-2.6px)}}
.dg-eye{animation:dg-eye 8s ease-in-out infinite}
@keyframes dg-note{0%{transform:translate(0px,0px) rotate(0deg);opacity:0}15%{opacity:1}100%{transform:translate(-26px,-46px) rotate(-20deg);opacity:0}}
.dg-note{animation:dg-note 2.4s ease-out infinite}
@keyframes dg-tap{0%,30%{transform:rotate(14deg)}33%{transform:rotate(72deg)}35%{transform:rotate(56deg)}38%{transform:rotate(72deg)}40%{transform:rotate(56deg)}43%,100%{transform:rotate(14deg)}}
.dg-tap{animation:dg-tap 8s ease-in-out infinite}
@keyframes dg-lean{0%,44%{transform:translateX(0px) rotate(0deg)}48%,60%{transform:translateX(-8px) rotate(-8deg)}64%,100%{transform:translateX(0px) rotate(0deg)}}
.dg-lean{animation:dg-lean 8s ease-in-out infinite}
@keyframes dg-tq{0%,32.5%{transform:scale(0)}33.5%{transform:scale(1.3)}35%,37.5%{transform:scale(0)}38.5%{transform:scale(1.3)}40%,100%{transform:scale(0)}}
.dg-tq{animation:dg-tq 8s ease-out infinite}
@keyframes dg-dots{0%,62%{transform:scale(0)}66%{transform:scale(1.2)}69%,90%{transform:scale(1)}94%,100%{transform:scale(0)}}
.dg-dots{animation:dg-dots 8s ease-out infinite}
.dg-min{animation:dg-min 8s steps(8,end) infinite}
@keyframes dg-min{to{transform:rotate(360deg)}}
.dg-sec{animation:spin 2s steps(12,end) infinite}
@keyframes dg-foot{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-14deg)}}
.dg-foot{animation:dg-foot .5s ease-in-out infinite}
`;

function Fire({ x, y, s = 1, delay = "0s" }: { x: number; y: number; s?: number; delay?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className="dg-fire o-bottom" style={{ animationDelay: delay }}>
        <path d="M-14 0 Q-18 -10 -10 -18 Q-9 -10 -5 -8 Q-6 -20 2 -26 Q2 -14 7 -10 Q10 -18 14 -18 Q18 -8 14 0Z" fill={C.saffron} {...inked} strokeWidth={1.8} />
        <path d="M-6 0 Q-8 -8 -2 -12 Q0 -6 3 -6 Q6 -10 7 -8 Q9 -4 6 0Z" fill={C.pomegranate} />
      </g>
    </g>
  );
}

function Pot({ x, y, w, h, color = COPPER, dark = COPPER_DK, boil = true, delay = "0s" }: { x: number; y: number; w: number; h: number; color?: string; dark?: string; boil?: boolean; delay?: string }) {
  const l = x - w / 2;
  const r = x + w / 2;
  const t = y - h;
  return (
    <g>
      {boil &&
        [-0.3, 0, 0.3].map((f, i) => (
          <g key={i} transform={`translate(${x + f * w} ${t - 10})`}>
            <g className="dg-steam" style={{ animationDelay: `calc(${delay} - ${i * 0.6}s)`, "--dx": `${(f * 30).toFixed(0)}px` } as CSSProperties}>
              <circle cx="0" cy="0" r="7" fill={C.white} stroke={INK} strokeWidth={1.5} />
              <circle cx="7" cy="-3" r="5" fill={C.white} stroke={INK} strokeWidth={1.4} />
            </g>
          </g>
        ))}
      <path d={`M${l - 6} ${t + 8} q-8 0 -8 7 q0 6 8 6 M${r + 6} ${t + 8} q8 0 8 7 q0 6 -8 6`} fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />
      <path d={`M${l} ${t} Q${l - 6} ${y - h * 0.4} ${l + 6} ${y - 3} Q${x} ${y + 3} ${r - 6} ${y - 3} Q${r + 6} ${y - h * 0.4} ${r} ${t}Z`} fill={color} {...inked} />
      <path d={`M${l + 5} ${t + 10} Q${l + 2} ${y - h * 0.4} ${l + 9} ${y - 8}`} fill="none" stroke={C.white} strokeWidth={2.4} strokeLinecap="round" opacity=".45" />
      <path d={`M${l + 2} ${t + h * 0.55} Q${x} ${t + h * 0.65} ${r - 2} ${t + h * 0.55}`} fill="none" stroke={dark} strokeWidth={2} />
      <rect x={l - 4} y={t - 4} width={w + 8} height={8} rx="3" fill={dark} {...inked} strokeWidth={2} />
      {boil && (
        <g>
          <g transform={`translate(${l + 2} ${t + 2})`}>
            <path className="dg-foam o-top" style={{ animationDelay: delay }} d="M-4 -2 Q-6 8 -2 12 Q2 8 1 -2Z" fill={FOAM} stroke={INK} strokeWidth={1.3} />
          </g>
          <g transform={`translate(${r - 6} ${t + 2})`}>
            <path className="dg-foam o-top" style={{ animationDelay: `calc(${delay} - .25s)` }} d="M-2 -2 Q-3 10 1 14 Q5 10 4 -2Z" fill={FOAM} stroke={INK} strokeWidth={1.3} />
          </g>
          <g className="dg-rattle" style={{ animationDelay: delay }}>
            <path d={`M${l - 2} ${t - 4} Q${x} ${t - 18} ${r + 2} ${t - 4}Z`} fill={color} {...inked} strokeWidth={2} />
            <circle cx={x} cy={t - 14} r="3.5" fill={dark} {...inked} strokeWidth={1.6} />
          </g>
          {[-0.32, -0.08, 0.18, 0.36].map((f, i) => (
            <circle key={i} className="dg-bub" cx={x + f * w} cy={t - 5} r={3 + (i % 2)} fill={FOAM} stroke={INK} strokeWidth={1.2} style={{ animationDelay: `calc(${delay} - ${i * 0.15}s)` }} />
          ))}
        </g>
      )}
    </g>
  );
}

function MusicNote({ delay }: { delay: string }) {
  return (
    <g className="dg-note" style={{ animationDelay: delay }}>
      <ellipse cx="0" cy="0" rx="3.2" ry="2.4" fill={INK} transform="rotate(-20)" />
      <path d="M2.8 -1 V-12 Q6 -10 7 -6" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
    </g>
  );
}

function Brazier({ x, y, cold = false }: { x: number; y: number; cold?: boolean }) {
  return (
    <g>
      <path d={`M${x - 30} ${y} L${x + 30} ${y} L${x + 24} ${y + 14} L${x - 24} ${y + 14}Z`} fill={cold ? "#7d7a78" : C.terracotta} {...inked} />
      <path d={`M${x - 20} ${y + 14} L${x - 24} ${y + 22} M${x + 20} ${y + 14} L${x + 24} ${y + 22}`} stroke={INK} strokeWidth={3} strokeLinecap="round" />
      <path d={`M${x - 22} ${y + 7} h44`} stroke={cold ? "#5e5b59" : C.saffron} strokeWidth={2} strokeDasharray="4 4" />
    </g>
  );
}

export default function Digesh({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="دیگش برای من نمی‌جوشه" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#e0a985" />
      <rect x="-10" y="20" width="420" height="16" fill={C.turquoise} {...inked} />
      {Array.from({ length: 11 }, (_, i) => (
        <Star8 key={i} x={8 + i * 40} y={28} r={5} fill={C.saffron} />
      ))}
      <path d="M-10 70 H410 M-10 110 H410 M-10 150 H410 M40 36 V70 M120 70 V110 M200 36 V70 M280 70 V110 M360 36 V70 M80 110 V150 M240 110 V150 M330 110 V150" stroke="#c78f6c" strokeWidth={1.5} />

      <path d="M24 130 V80 Q24 56 46 50 Q68 56 68 80 V130Z" fill="#cfe6e0" {...inked} />
      <path d="M46 52 V130 M24 96 H68" stroke={INK} strokeWidth={2} />

      <path d="M128 48 H232" stroke={INK} strokeWidth={3} strokeLinecap="round" />
      {[140, 164, 190, 218].map((x, i) => (
        <g key={x}>
          <path d={`M${x} 48 V${70 + (i % 2) * 8}`} stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
          <ellipse cx={x} cy={76 + (i % 2) * 8} rx="7" ry="5" fill={i % 2 ? COPPER : "#a8a29a"} {...inked} strokeWidth={2} />
        </g>
      ))}

      <g transform="translate(350 76)">
        <circle r="20" fill={C.cream} {...inked} />
        <circle r="16" fill="none" stroke={C.lapis} strokeWidth={1.4} strokeDasharray="1.5 6.8" />
        <g className="dg-min" style={{ transformOrigin: "0px 0px", transformBox: "view-box" }}>
          <path d="M0 0 V-13" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
        </g>
        <g className="dg-sec" style={{ transformOrigin: "0px 0px", transformBox: "view-box" }}>
          <path d="M0 2 V-15" stroke={C.pomegranate} strokeWidth={1.4} strokeLinecap="round" />
        </g>
        <path d="M0 -8 V0 L5 4" stroke={INK} strokeWidth={2.4} strokeLinecap="round" fill="none" />
        <circle r="2" fill={INK} />
      </g>

      <rect x="-10" y="170" width="272" height="48" fill="#b5694a" {...inked} />
      <path d="M-10 186 H262 M-10 202 H262 M20 170 V186 M80 186 V202 M150 170 V186 M220 186 V202 M110 202 V218" stroke="#94523a" strokeWidth={1.4} />
      {[48, 120, 192].map((x, i) => (
        <g key={x}>
          <path d={`M${x - 16} 218 V198 Q${x} 184 ${x + 16} 198 V218Z`} fill={INK} />
          <Fire x={x} y={216} s={0.8} delay={`-${i * 0.1}s`} />
        </g>
      ))}

      <Pot x={48} y={172} w={48} h={38} delay="0s" />
      <g>
        <path d="M144 146 Q162 140 170 132" fill="none" stroke={INK} strokeWidth={7} strokeLinecap="round" />
        <path d="M144 146 Q162 140 170 132" fill="none" stroke={C.lapis} strokeWidth={4} strokeLinecap="round" />
        <g transform="translate(172 130)">
          {[0, -0.23, -0.46].map((d, i) => (
            <g key={i} className="dg-jet" style={{ animationDelay: `${d}s` }}>
              <circle cx="0" cy="0" r="4.5" fill={C.white} stroke={INK} strokeWidth={1.3} />
            </g>
          ))}
        </g>
        <g className="dg-buzz">
          <path d="M104 172 Q98 152 108 140 Q120 132 134 140 Q144 152 138 172Z" fill={C.lapis} {...inked} />
          <path d="M108 150 Q122 144 136 150" fill="none" stroke={C.saffron} strokeWidth={2} />
          <path d="M112 142 Q121 128 130 142" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />
          <circle cx="121" cy="133" r="3" fill={C.saffron} {...inked} strokeWidth={1.4} />
        </g>
        <path d="M184 118 l6 -4 M186 126 l8 -1 M184 134 l6 3" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      </g>
      <Pot x={204} y={172} w={44} h={34} color={C.terracotta} dark="#9a4a30" delay="-.37s" />

      <rect x="-10" y="218" width="420" height="92" fill="#a8735a" {...inked} />
      <path d="M-10 250 H410 M-10 282 H410 M40 218 V250 M130 250 V282 M220 218 V250 M300 250 V282 M370 218 V250 M60 282 V310 M250 282 V310" stroke="#8d5d47" strokeWidth={1.3} />

      <Fire x={62} y={250} delay="-.15s" />
      <Brazier x={62} y={250} />
      <Pot x={62} y={248} w={56} h={44} delay="-.6s" />

      <Fire x={152} y={252} delay="-.05s" />
      <Brazier x={152} y={252} />
      <Pot x={152} y={250} w={50} h={40} color={C.terracotta} dark="#9a4a30" delay="-.9s" />

      <Brazier x={250} y={252} cold />
      <ellipse cx="250" cy="252" rx="22" ry="3" fill="#4a4644" />
      <Pot x={250} y={250} w={56} h={46} color={COLD} dark={COLD_DK} boil={false} />
      <path d="M206 206 L214 218 M206 206 L204 220 M206 206 L198 214 M200 210 Q206 212 210 210 M202 216 Q206 218 211 214" fill="none" stroke={C.white} strokeWidth={0.9} opacity=".9" />
      <path d="M266 238 l4 -4 m-2 0 l2 2 M236 240 l3 -3" stroke={C.white} strokeWidth={1.2} strokeLinecap="round" />
      <g>
        <path d="M232 214 Q238 211 244 214 M256 214 Q262 211 268 214" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        <path d="M232 220 Q238 216 244 220 Q238 223 232 220Z M256 220 Q262 216 268 220 Q262 223 256 220Z" fill={C.white} stroke={INK} strokeWidth={1.2} />
        <g className="dg-eye">
          <circle cx="238" cy="220" r="1.7" fill={INK} />
          <circle cx="262" cy="220" r="1.7" fill={INK} />
        </g>
        <circle cx="244" cy="232" r="2.6" fill="none" stroke={INK} strokeWidth={1.8} />
        <circle cx="230" cy="228" r="3" fill="#e58a7a" opacity=".5" />
        <circle cx="270" cy="228" r="3" fill="#e58a7a" opacity=".5" />
      </g>
      <g transform="translate(238 228)">
        <MusicNote delay="0s" />
        <MusicNote delay="-.8s" />
        <MusicNote delay="-1.6s" />
      </g>

      <g transform="translate(282 206)">
        <text className="dg-tq" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="13" fill={C.lapis} direction="rtl">تق!</text>
      </g>

      <g transform="translate(314 268) scale(.86)">
        <g className="dg-lean o-bottom">
          <Person robe={C.olive} sash={C.saffron} hat={C.white} mood="serious" beard armL={14} armR={-10} armLClass="dg-tap" />
        </g>
        <g transform="translate(9 -1)">
          <g className="dg-foot o-left">
            <path d="M-5 0 L-3 -6 Q5 -6 7 0Z" fill={C.pomegranate} stroke={INK} strokeWidth={1.6} />
          </g>
        </g>
      </g>
      <g transform="translate(318 168)">
        <g className="dg-dots">
          <circle cx="-8" cy="0" r="2.6" fill={INK} />
          <circle cx="0" cy="0" r="2.6" fill={INK} />
          <circle cx="8" cy="0" r="2.6" fill={INK} />
        </g>
      </g>

      {big && <Bubble x={234} y={188} w={88} text="سوت می‌زنم!" flip className="dg-dots o-bottom" />}
    </Scene>
  );
}
