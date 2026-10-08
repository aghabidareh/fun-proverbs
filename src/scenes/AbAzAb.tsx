import type { CSSProperties } from "react";
import { Scene, Person, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const WATER = "#7cc4e0";
const BRICK = "#d9a46a";
const BRICK_DK = "#b98250";
const DUST = "#cdb08a";

function jitter(name: string, from: number, to: number, amp: number, rot = 0, step = 1) {
  const fr: string[] = [`0%,${from}%{transform:translate(0px,0px) rotate(0deg)}`];
  let i = 0;
  for (let p = from + step; p < to; p += step, i++) {
    const s = i % 2 ? 1 : -1;
    const dy = ((i % 3) - 1) * amp * 0.5;
    fr.push(`${p}%{transform:translate(${s * amp}px,${dy.toFixed(1)}px) rotate(${(s * rot).toFixed(2)}deg)}`);
  }
  fr.push(`${to}%,100%{transform:translate(0px,0px) rotate(0deg)}`);
  return `@keyframes ${name}{${fr.join("")}}`;
}

function tilt(name: string, from: number, to: number, maxDeg: number, step = 2) {
  const fr: string[] = [`0%,${from}%{transform:rotate(0deg)}`];
  let i = 0;
  for (let p = from + step; p < to; p += step, i++) {
    const base = ((p - from) / (to - from)) * maxDeg;
    const s = i % 2 ? 1 : -1;
    fr.push(`${p}%{transform:rotate(${(base + s * 2.5).toFixed(2)}deg)}`);
  }
  fr.push(`${to}%{transform:rotate(${maxDeg}deg)}`);
  fr.push(`92%{transform:rotate(${(maxDeg * 0.6).toFixed(1)}deg)}`);
  fr.push(`100%{transform:rotate(0deg)}`);
  return `@keyframes ${name}{${fr.join("")}}`;
}

function sway(name: string, from: number, to: number, amp: number, step = 1.5) {
  const fr: string[] = [`0%,${from}%{transform:rotate(0deg)}`];
  let i = 0;
  for (let p = from + step; p < to; p += step, i++) fr.push(`${p.toFixed(1)}%{transform:rotate(${i % 2 ? amp : -amp}deg)}`);
  fr.push(`${to}%,100%{transform:rotate(0deg)}`);
  return `@keyframes ${name}{${fr.join("")}}`;
}

const CSS = `
${jitter("aaa-quake", 4, 86, 2.6, 0.5)}
${jitter("aaa-house", 4, 86, 1.8, 2.2)}
${jitter("aaa-house2", 4, 86, 2.2, -2.8)}
${tilt("aaa-tilt", 4, 86, 11)}
${sway("aaa-tree", 4, 86, 16)}
${sway("aaa-tree2", 4, 86, -20)}
.aaa-quake{animation:aaa-quake 8s linear infinite}
.aaa-house{animation:aaa-house 8s linear infinite}
.aaa-house2{animation:aaa-house2 8s linear infinite}
.aaa-tilt{animation:aaa-tilt 8s ease-in-out infinite}
.aaa-tree{animation:aaa-tree 8s ease-in-out infinite}
.aaa-tree2{animation:aaa-tree2 8s ease-in-out infinite}
@keyframes aaa-runR{0%{transform:translateX(-70px)}100%{transform:translateX(480px)}}
@keyframes aaa-runL{0%{transform:translateX(480px)}100%{transform:translateX(-70px)}}
.aaa-runR{animation:aaa-runR 3.6s linear infinite}
.aaa-runL{animation:aaa-runL 4.2s linear infinite}
@keyframes aaa-hop{0%,100%{transform:translateY(0px) rotate(-6deg)}50%{transform:translateY(-14px) rotate(6deg)}}
.aaa-hop{animation:aaa-hop .36s ease-in-out infinite}
@keyframes aaa-brick{0%,10%{transform:translate(0px,0px) rotate(0deg);opacity:0}14%{opacity:1}80%{transform:translate(var(--dx),130px) rotate(260deg);opacity:1}100%{transform:translate(var(--dx),136px) rotate(270deg);opacity:0}}
.aaa-brick{animation:aaa-brick 2.2s ease-in infinite}
@keyframes aaa-puff{0%{transform:translate(0px,0px) scale(.4);opacity:0}10%{opacity:.95}70%{transform:translate(var(--dx),-40px) scale(1.8);opacity:0}100%{transform:translate(var(--dx),-40px) scale(1.8);opacity:0}}
.aaa-puff{animation:aaa-puff 2.4s ease-out infinite}
@keyframes aaa-crack{0%,8%{transform:scaleX(0)}16%{transform:scaleX(.5)}24%{transform:scaleX(.6)}34%,90%{transform:scaleX(1)}97%,100%{transform:scaleX(0)}}
.aaa-crack{animation:aaa-crack 8s ease-out infinite}
@keyframes aaa-tw{0%,100%{transform:scale(.4) rotate(0deg);opacity:.2}50%{transform:scale(1) rotate(45deg);opacity:1}}
.aaa-tw{animation:aaa-tw 2.4s ease-in-out infinite}
@keyframes aaa-say{0%,40%{transform:scale(0)}44%{transform:scale(1.15)}47%,74%{transform:scale(1)}78%,100%{transform:scale(0)}}
.aaa-say{animation:aaa-say 8s ease-out infinite}
@keyframes aaa-label{0%,4%{transform:scale(.8);opacity:0}8%,86%{transform:scale(1);opacity:1}92%,100%{transform:scale(.8);opacity:0}}
.aaa-label{animation:aaa-label 8s ease-out infinite}
@keyframes aaa-lines{0%,4%{opacity:0}6%,86%{opacity:1}90%,100%{opacity:0}}
.aaa-lines{animation:aaa-lines 8s linear infinite}
`;

function House({ x, w, h, color = BRICK, dome }: { x: number; w: number; h: number; color?: string; dome?: string }) {
  const top = 236 - h;
  return (
    <g>
      {dome && (
        <path d={`M${x + w * 0.22} ${top} Q${x + w * 0.2} ${top - w * 0.42} ${x + w / 2} ${top - w * 0.5} Q${x + w * 0.8} ${top - w * 0.42} ${x + w * 0.78} ${top}Z`} fill={dome} {...inked} />
      )}
      <rect x={x} y={top} width={w} height={h} fill={color} {...inked} />
      <rect x={x - 3} y={top - 5} width={w + 6} height={6} fill={BRICK_DK} {...inked} strokeWidth={2} />
      <path d={`M${x + w / 2 - 7} 236 V${236 - 18} Q${x + w / 2} ${236 - 26} ${x + w / 2 + 7} ${236 - 18} V236Z`} fill={C.navy} stroke={INK} strokeWidth={2} />
      <path d={`M${x + 8} ${top + 12} h8 v10 h-8Z M${x + w - 16} ${top + 12} h8 v10 h-8Z`} fill={C.firouzeh} stroke={INK} strokeWidth={1.6} />
      <path d={`M${x + 4} ${top + 32} h${w - 8}`} stroke={BRICK_DK} strokeWidth={1.4} strokeDasharray="5 4" />
    </g>
  );
}

function Puff({ x, y, delay, dx = -10 }: { x: number; y: number; delay: string; dx?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="aaa-puff" style={{ animationDelay: delay, "--dx": `${dx}px` } as CSSProperties}>
        <circle cx="0" cy="0" r="9" fill={DUST} stroke={INK} strokeWidth={1.6} />
        <circle cx="9" cy="-4" r="7" fill={DUST} stroke={INK} strokeWidth={1.5} />
        <circle cx="-8" cy="-4" r="6" fill="#dcc29f" stroke={INK} strokeWidth={1.4} />
      </g>
    </g>
  );
}

function Brick({ x, y, delay, dx }: { x: number; y: number; delay: string; dx: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect className="aaa-brick" x="-6" y="-3.5" width="12" height="7" rx="1" fill={C.terracotta} stroke={INK} strokeWidth={1.6} style={{ animationDelay: delay, "--dx": `${dx}px` } as CSSProperties} />
    </g>
  );
}

export default function AbAzAb({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="آب از آب تکون نخورد" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#e7c089" />
      <circle cx="58" cy="46" r="18" fill={C.cream} {...inked} />

      <g className="aaa-lines" fill="none" stroke={INK} strokeWidth={2} strokeLinecap="round" opacity=".55">
        <path d="M22 120 q-6 10 0 20 M30 112 q-8 18 0 36 M378 110 q6 10 0 20 M370 102 q8 18 0 36" />
      </g>

      <g className="aaa-quake">
        <Puff x={70} y={176} delay="0s" dx={-16} />
        <Puff x={250} y={186} delay="-1.2s" dx={14} />
        <Puff x={350} y={170} delay="-.6s" dx={8} />

        <g className="aaa-house o-bottom">
          <House x={38} w={62} h={58} />
        </g>

        <g className="aaa-house2 o-bottom">
          <path d="M136 192 Q132 150 166 136 Q200 150 196 192Z" fill={C.firouzeh} {...inked} />
          <path d="M150 190 Q148 160 166 146" fill="none" stroke={C.white} strokeWidth={2.5} strokeLinecap="round" opacity=".7" />
          <path d="M166 136 V122 M162 126 h8" stroke={INK} strokeWidth={2.5} strokeLinecap="round" />
          <circle cx="166" cy="120" r="3" fill={C.saffron} {...inked} strokeWidth={1.6} />
          <rect x="126" y="190" width="80" height="46" fill={C.cream} {...inked} />
          <rect x="126" y="190" width="80" height="9" fill={C.lapis} {...inked} strokeWidth={2} />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <Star8 key={i} x={133 + i * 13.4} y={194.5} r={3.2} fill={C.saffron} />
          ))}
          <path d="M154 236 V214 Q166 202 178 214 V236Z" fill={C.turquoise} stroke={INK} strokeWidth={2} />
          <path d="M136 210 h10 v14 h-10Z M186 210 h10 v14 h-10Z" fill={C.navy} stroke={INK} strokeWidth={1.6} />
        </g>

        <g className="aaa-tree o-bottom">
          <path d="M112 236 Q104 200 112 160 Q120 200 112 236Z" fill={C.olive} {...inked} />
          <path d="M112 226 Q108 204 112 178" fill="none" stroke="#557a3c" strokeWidth={1.6} />
        </g>

        <g className="aaa-house o-bottom" style={{ animationDelay: "-.08s" }}>
          <House x={216} w={58} h={44} dome={C.turquoise} />
        </g>

        <g className="aaa-tilt o-bottom">
          <rect x="289" y="96" width="22" height="140" fill={C.cream} {...inked} />
          <path d="M289 130 h22 M289 160 h22 M289 196 h22" stroke={C.lapis} strokeWidth={5} />
          <path d="M289 130 h22 M289 160 h22 M289 196 h22" stroke={INK} strokeWidth={1} opacity=".5" />
          <rect x="283" y="88" width="34" height="9" fill={C.turquoise} {...inked} strokeWidth={2} />
          <path d="M291 88 L291 76 Q300 60 309 76 L309 88Z" fill={C.firouzeh} {...inked} />
          <path d="M300 64 V54" stroke={INK} strokeWidth={2.5} strokeLinecap="round" />
          <circle cx="300" cy="52" r="2.6" fill={C.saffron} {...inked} strokeWidth={1.4} />
          <path d="M296 110 h8 v12 h-8Z" fill={C.navy} stroke={INK} strokeWidth={1.4} />
        </g>

        <g className="aaa-tree2 o-bottom">
          <path d="M268 236 V214" stroke={INK} strokeWidth={6} strokeLinecap="round" />
          <path d="M268 236 V214" stroke="#8a5a34" strokeWidth={3} strokeLinecap="round" />
          <circle cx="268" cy="204" r="15" fill="#7da05a" {...inked} />
          <circle cx="262" cy="200" r="3" fill={C.pomegranate} />
          <circle cx="273" cy="208" r="3" fill={C.pomegranate} />
        </g>

        <g className="aaa-house2 o-bottom" style={{ animationDelay: "-.1s" }}>
          <House x={326} w={56} h={64} color="#e3b680" />
        </g>

        <rect x="-10" y="236" width="420" height="30" fill="#d9b27a" {...inked} />
        <path d="M-10 246 H410" stroke={INK} strokeWidth={1} strokeDasharray="2 6" opacity=".5" />
        <path className="aaa-crack o-left" d="M60 240 l10 6 l-4 4 l14 4 l-6 5 l16 3" fill="none" stroke={INK} strokeWidth={2.4} strokeLinejoin="round" strokeLinecap="round" />
        <path className="aaa-crack o-left" d="M262 240 l12 5 l-6 5 l16 2 l-5 6 l18 2" fill="none" stroke={INK} strokeWidth={2.4} strokeLinejoin="round" strokeLinecap="round" style={{ animationDelay: "-.3s" }} />

        <Brick x={300} y={94} delay="0s" dx={-30} />
        <Brick x={304} y={100} delay="-.9s" dx={22} />
        <Brick x={70} y={176} delay="-.5s" dx={-14} />
        <Brick x={350} y={170} delay="-1.5s" dx={12} />
        <Brick x={245} y={190} delay="-1.1s" dx={-8} />
      </g>

      <g className="aaa-runR">
        <g transform="translate(0 246) scale(.42)">
          <g className="aaa-hop o-bottom">
            <Person robe={C.pomegranate} sash={C.saffron} hat={C.cream} mood="scared" armL={160} armR={-160} />
          </g>
        </g>
      </g>
      <g className="aaa-runR" style={{ animationDelay: "-1.9s" }}>
        <g transform="translate(0 250) scale(.4)">
          <g className="aaa-hop o-bottom" style={{ animationDelay: "-.12s" }}>
            <Person robe={C.lapis} sash={C.turquoise} hat={C.saffron} hatKind="kolah" mood="scared" beard armL={170} armR={-150} />
          </g>
        </g>
      </g>
      <g className="aaa-runL" style={{ animationDelay: "-1s" }}>
        <g transform="translate(0 248) scale(.42)">
          <g className="aaa-hop o-bottom" style={{ animationDelay: "-.2s" }}>
            <Person robe={C.olive} sash={C.pomegranate} hat={C.terracotta} hatKind="scarf" mood="scared" armL={150} armR={-170} />
          </g>
        </g>
      </g>

      <rect x="-10" y="262" width="420" height="50" fill="#b9784f" {...inked} />
      <path d="M-10 272 H410" stroke={INK} strokeWidth={1} strokeDasharray="2 6" opacity=".5" />

      <g>
        <ellipse cx="200" cy="286" rx="44" ry="5" fill={INK} opacity=".18" />
        <path d="M174 256 L172 286 M226 256 L228 286" stroke={INK} strokeWidth={6} strokeLinecap="round" />
        <path d="M174 256 L172 286 M226 256 L228 286" stroke="#8a5a34" strokeWidth={3} strokeLinecap="round" />
        <rect x="164" y="250" width="72" height="7" rx="2" fill="#a8703f" {...inked} />
        <path d="M166 257 H234 L232 268 L226 264 L220 268 L214 264 L208 268 L202 264 L196 268 L190 264 L184 268 L178 264 L172 268 L168 264Z" fill={C.pomegranate} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
        <path d="M172 260 h56" stroke={C.saffron} strokeWidth={1.6} strokeDasharray="3 3" />

        <ellipse cx="192" cy="250" rx="14" ry="3" fill={C.cream} {...inked} strokeWidth={2} />
        <path d="M185.5 230 Q186.5 234 188 236 Q184.5 242 186.5 248 L197.5 248 Q199.5 242 196 236 Q197.5 234 198.5 230Z" fill={WATER} opacity=".85" />
        <path d="M185.5 230 H198.5" stroke="#4f9fc0" strokeWidth={1.4} />
        <path d="M184 249 Q181.5 241 186 235 Q183 229 184 222 L200 222 Q201 229 198 235 Q202.5 241 200 249Z" fill={C.white} fillOpacity=".25" {...inked} strokeWidth={2} />
        <path d="M187 226 V232 M188 240 V246" stroke={C.white} strokeWidth={1.6} strokeLinecap="round" />

        <rect x="208" y="244" width="22" height="6" rx="1.5" fill={C.saffron} {...inked} strokeWidth={1.6} />
        <rect x="214" y="245.5" width="10" height="3" rx="1.5" fill="#cfe9a0" stroke={INK} strokeWidth={1} />
        <circle cx="219" cy="247" r="1.2" fill={C.white} stroke={INK} strokeWidth={.6} />
        <path d="M217 245.5 V248.5 M221 245.5 V248.5" stroke={INK} strokeWidth={.6} />
      </g>

      <Star8 x={203} y={222} r={4} fill={C.white} className="aaa-tw" />
      <Star8 x={182} y={232} r={2.6} fill={C.white} className="aaa-tw" style={{ animationDelay: "-1.2s" }} />

      {big && (
        <g transform="translate(78 26)">
          <g className="aaa-label">
            <g className="aaa-quake">
              <rect x="-50" y="-14" width="100" height="26" rx="6" fill={C.pomegranate} {...inked} />
              <text x="0" y="4" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="13" fill={C.white} direction="rtl">زلزله: ۹ ریشتر</text>
            </g>
          </g>
        </g>
      )}
      {big && <Bubble x={198} y={214} w={74} text="چی شده؟" className="aaa-say o-bottom" />}
    </Scene>
  );
}
