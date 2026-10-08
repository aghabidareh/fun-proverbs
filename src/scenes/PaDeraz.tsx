import type { CSSProperties } from "react";
import { Scene, Face, Turban, Cloud, Bubble, C, INK, SKIN, inked } from "./parts";
import type { SceneProps } from "./types";

const HIP_Y = 96;
const LEG = 164;
const TEA = "#b4532a";

function legs(name: string, sign: 1 | -1) {
  const fr: string[] = [];
  let i = 0;
  for (let p = 0; p <= 45; p += 5, i++) fr.push(`${p}%{transform:rotate(${(i % 2 ? -20 : 20) * sign}deg)}`);
  fr.push(`49%,66%{transform:rotate(${13 * sign}deg)}`);
  fr.push(`74%,78%{transform:rotate(${38 * sign}deg)}`);
  fr.push(`84%,94%{transform:rotate(${13 * sign}deg)}`);
  fr.push(`100%{transform:rotate(${20 * sign}deg)}`);
  return `@keyframes ${name}{${fr.join("")}}`;
}

function bob() {
  const fr: string[] = [];
  for (let p = 0; p <= 45; p += 2.5) fr.push(`${p}%{transform:translateY(${Math.round(p / 2.5) % 2 ? 0 : 9}px)}`);
  fr.push("49%,66%{transform:translateY(4px)}74%,78%{transform:translateY(35px)}84%,94%{transform:translateY(4px)}100%{transform:translateY(9px)}");
  return `@keyframes pd-bob{${fr.join("")}}`;
}

function flail(name: string, sign: 1 | -1) {
  const fr: string[] = [];
  let i = 0;
  for (let p = 0; p <= 48; p += 5, i++) fr.push(`${p}%{transform:rotate(${(i % 2 ? 12 : -12) * sign}deg)}`);
  const burst = (a: number, b: number) => {
    let j = 0;
    for (let p = a; p <= b; p += 1, j++) fr.push(`${p}%{transform:rotate(${(j % 2 ? 50 : -30) * sign}deg)}`);
  };
  burst(52, 62);
  fr.push(`64%{transform:rotate(${-12 * sign}deg)}`);
  burst(66, 80);
  fr.push(`84%,94%{transform:rotate(${-34 * sign}deg)}100%{transform:rotate(${-12 * sign}deg)}`);
  return `@keyframes ${name}{${fr.join("")}}`;
}

const CSS = `
${legs("pd-legL", 1)}
${legs("pd-legR", -1)}
${bob()}
${flail("pd-armL", 1)}
${flail("pd-armR", -1)}
.pd-legL{animation:pd-legL 9s ease-in-out infinite}
.pd-legR{animation:pd-legR 9s ease-in-out infinite}
.pd-bob{animation:pd-bob 9s ease-in-out infinite}
.pd-armL{animation:pd-armL 9s linear infinite}
.pd-armR{animation:pd-armR 9s linear infinite}
@keyframes pd-bend{0%,52%{transform:rotate(0deg)}57%,61%{transform:rotate(-42deg)}65%,100%{transform:rotate(0deg)}}
.pd-bend{animation:pd-bend 9s ease-in-out infinite}
@keyframes pd-scroll{0%{transform:translateX(0px)}45%,100%{transform:translateX(-400px)}}
.pd-scroll{animation:pd-scroll 9s cubic-bezier(.3,0,.6,1) infinite}
@keyframes pd-table{0%{transform:translateX(400px);opacity:1}45%{transform:translateX(0px);opacity:1}93%{transform:translateX(0px);opacity:1}97%,100%{transform:translateX(0px);opacity:0}}
.pd-table{animation:pd-table 9s cubic-bezier(.3,0,.6,1) infinite}
@keyframes pd-steam{0%{transform:translateY(0px) scaleX(1);opacity:0}30%{opacity:.8}100%{transform:translateY(-16px) scaleX(-1);opacity:0}}
.pd-steam{animation:pd-steam 2s ease-out infinite}
@keyframes pd-angry{0%,83%{opacity:0}86%,94%{opacity:1}97%,100%{opacity:0}}
.pd-angry{animation:pd-angry 9s linear infinite}
@keyframes pd-puff{0%,84%{transform:translate(0px,0px) scale(.3);opacity:0}86%{opacity:1}94%{transform:translate(var(--dx),-22px) scale(1.4);opacity:0}100%{transform:translate(var(--dx),-22px) scale(1.4);opacity:0}}
.pd-puff{animation:pd-puff 9s ease-out infinite}
@keyframes pd-say{0%,84%{transform:scale(0)}87%{transform:scale(1.15)}89%,95%{transform:scale(1)}98%,100%{transform:scale(0)}}
.pd-say{animation:pd-say 9s ease-out infinite}
@keyframes pd-cloud{0%,100%{transform:translateX(-6px)}50%{transform:translateX(8px)}}
.pd-cloud{animation:pd-cloud 8s ease-in-out infinite}
@keyframes pd-sweat{0%,52%{transform:translate(0px,0px);opacity:0}58%{opacity:1}66%{transform:translate(4px,14px);opacity:0}70%{transform:translate(0px,0px);opacity:0}74%{opacity:1}82%,100%{transform:translate(4px,14px);opacity:0}}
.pd-sweat{animation:pd-sweat 9s ease-in infinite}
`;

function Block({ ox }: { ox: number }) {
  return (
    <g transform={`translate(${ox} 0)`}>
      <path d="M22 194 Q20 166 40 160 Q60 166 58 194Z" fill={C.firouzeh} {...inked} />
      <path d="M40 160 V150" stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
      <circle cx="40" cy="148" r="2.4" fill={C.saffron} stroke={INK} strokeWidth={1.3} />
      <rect x="12" y="192" width="56" height="66" fill="#dcb084" {...inked} />
      <path d="M33 258 V238 Q40 230 47 238 V258Z" fill={C.navy} stroke={INK} strokeWidth={2} />
      <path d="M20 204 h8 v10 h-8Z M52 204 h8 v10 h-8Z" fill={C.turquoise} stroke={INK} strokeWidth={1.6} />
      <path d="M90 258 Q82 222 90 188 Q98 222 90 258Z" fill={C.olive} {...inked} />
      <rect x="112" y="176" width="60" height="82" fill={C.cream} {...inked} />
      <rect x="108" y="170" width="68" height="8" fill={C.terracotta} {...inked} strokeWidth={2} />
      <path d="M122 190 h12 v14 h-12Z M150 190 h12 v14 h-12Z M122 216 h12 v14 h-12Z M150 216 h12 v14 h-12Z" fill={C.lapis} stroke={INK} strokeWidth={1.6} />
      <path d="M136 258 V242 h12 v16" fill={C.terracotta} stroke={INK} strokeWidth={2} />
      <path d="M188 258 V244" stroke={INK} strokeWidth={4} strokeLinecap="round" />
      <circle cx="188" cy="238" r="9" fill="#7da05a" {...inked} />
      <path d="M60 272 q4 -5 8 0 M160 280 q4 -5 8 0" fill="none" stroke={INK} strokeWidth={1.3} opacity=".55" />
    </g>
  );
}

function Leg({ x, cls, flip }: { x: number; cls: string; flip: 1 | -1 }) {
  const foot = HIP_Y + LEG;
  return (
    <g className={cls} style={{ transformOrigin: `${x}px ${HIP_Y}px`, transformBox: "view-box" }}>
      <path d={`M${x} ${HIP_Y} V${foot - 4}`} stroke={INK} strokeWidth={13} strokeLinecap="round" />
      <path d={`M${x} ${HIP_Y} V${foot - 4}`} stroke={C.pomegranate} strokeWidth={8} />
      <path d={`M${x} ${HIP_Y + 4} V${foot - 8}`} stroke={C.saffron} strokeWidth={8} strokeDasharray="6 12" />
      <path d={`M${x - 6 * flip} ${foot - 8} Q${x + 18 * flip} ${foot - 12} ${x + 22 * flip} ${foot - 2} L${x - 6 * flip} ${foot}Z`} fill={C.terracotta} {...inked} strokeWidth={2} />
      <path d={`M${x + 22 * flip} ${foot - 2} q${4 * flip} -4 ${2 * flip} -8`} fill="none" stroke={INK} strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}

function Arm({ side, cls }: { side: 1 | -1; cls: string }) {
  const sx = 200 + side * 17;
  return (
    <g className={cls} style={{ transformOrigin: `${sx}px 70px`, transformBox: "view-box" }}>
      <path d={`M${sx} 70 Q${sx + side * 8} 72 ${sx + side * 8} 79`} fill="none" stroke={INK} strokeWidth={7} strokeLinecap="round" />
      <path d={`M${sx} 70 Q${sx + side * 8} 72 ${sx + side * 8} 79`} fill="none" stroke={C.lapis} strokeWidth={4} strokeLinecap="round" />
      <circle cx={sx + side * 8} cy={81} r="2.6" fill={SKIN} stroke={INK} strokeWidth={1.4} />
      <path d={`M${sx + side * 7} 83.5 l-1 2 M${sx + side * 9} 83.5 l1 2`} stroke={INK} strokeWidth={1} strokeLinecap="round" />
    </g>
  );
}

export default function PaDeraz({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="پای دراز و دست کوتاه" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#cbe0d8" />
      <circle cx="350" cy="44" r="16" fill={C.saffron} {...inked} />
      <Cloud x={34} y={60} s={.9} className="pd-cloud" />
      <Cloud x={276} y={96} s={.7} className="pd-cloud" style={{ animationDelay: "-3s" }} />
      <path d="M-10 214 Q60 186 130 206 Q210 180 290 204 Q350 188 410 200 V260 H-10Z" fill="#a9c9a0" {...inked} />

      <g className="pd-scroll">
        {[0, 200, 400, 600].map((ox) => (
          <Block key={ox} ox={ox} />
        ))}
      </g>

      <rect x="-10" y="258" width="420" height="60" fill="#c9a777" {...inked} />
      <path d="M-10 266 H410" stroke={INK} strokeWidth={1} strokeDasharray="2 6" opacity=".5" />

      <g className="pd-table">
        <ellipse cx="200" cy="286" rx="40" ry="5" fill={INK} opacity=".15" />
        <path d="M176 246 L174 278 M224 246 L226 278" stroke={INK} strokeWidth={6} strokeLinecap="round" />
        <path d="M176 246 L174 278 M224 246 L226 278" stroke="#8a5a34" strokeWidth={3} strokeLinecap="round" />
        <rect x="166" y="240" width="68" height="7" rx="2" fill="#a8703f" {...inked} />
        <path d="M168 247 H232 L230 256 L224 252 L218 256 L212 252 L206 256 L200 252 L194 256 L188 252 L182 256 L176 252 L170 256Z" fill={C.lapis} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
        <ellipse cx="186" cy="240" rx="11" ry="2.6" fill={C.cream} {...inked} strokeWidth={1.8} />
        <path d="M181 239 Q179 233 182.5 229 Q180 225 181 220 L191 220 Q192 225 189.5 229 Q193 233 191 239Z" fill={TEA} {...inked} strokeWidth={1.8} />
        <path d="M181 223 H191" stroke={C.white} strokeWidth={1.2} opacity=".7" />
        <g transform="translate(186 214)">
          <path className="pd-steam" d="M0 0 q-3 -4 0 -8 q3 -4 0 -8" fill="none" stroke={C.white} strokeWidth={1.6} strokeLinecap="round" />
        </g>
        <g transform="translate(192 212)">
          <path className="pd-steam" style={{ animationDelay: "-1s" }} d="M0 0 q-3 -4 0 -8 q3 -4 0 -8" fill="none" stroke={C.white} strokeWidth={1.6} strokeLinecap="round" />
        </g>
        <ellipse cx="214" cy="239" rx="14" ry="3.4" fill={C.white} {...inked} strokeWidth={1.8} />
        <path d="M204 236 l5 -6 l5 6Z M211 236 l5 -6 l5 6Z M207.5 231 l5 -6 l5 6Z" fill={C.saffron} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
        <circle cx="212" cy="229" r="1" fill={C.olive} />
      </g>

      <g className="pd-bob">
        <Leg x={194} cls="pd-legL" flip={-1} />
        <Leg x={206} cls="pd-legR" flip={1} />
        <g className="pd-bend" style={{ transformOrigin: `200px ${HIP_Y}px`, transformBox: "view-box" }}>
          <path d="M184 96 Q176 70 188 58 L212 58 Q224 70 216 96 Q200 102 184 96Z" fill={C.lapis} {...inked} />
          <g fill={C.cream} opacity=".7">
            <circle cx="192" cy="74" r="1.6" /><circle cx="207" cy="84" r="1.6" /><circle cx="200" cy="66" r="1.6" /><circle cx="194" cy="90" r="1.6" />
          </g>
          <path d="M183 86 Q200 90 217 86 L217 92 Q200 96 183 92Z" fill={C.saffron} stroke={INK} strokeWidth={2} />
          <Arm side={-1} cls="pd-armL" />
          <Arm side={1} cls="pd-armR" />
          <g transform="translate(200 42)">
            <Face mood="serious" />
            <g className="pd-angry" style={{ opacity: 0 }}>
              <ellipse cx="0" cy="2" rx="12" ry="11" fill={C.pomegranate} opacity=".35" />
              <path d="M8 -12 l4 4 m0 -4 l-4 4" stroke={C.pomegranate} strokeWidth={2} strokeLinecap="round" />
            </g>
            <Turban color={C.saffron} />
            <g transform="translate(-13 -2)">
              <path className="pd-sweat" d="M0 -4 Q3 1 0 3 Q-3 1 0 -4Z" fill="#9fd8ef" stroke={INK} strokeWidth={1} />
            </g>
            {[-14, 0, 14].map((dx, i) => (
              <g key={i} transform={`translate(${dx * 0.8} -28)`}>
                <g className="pd-puff" style={{ "--dx": `${dx}px`, animationDelay: `${-i * 0.1}s` } as CSSProperties}>
                  <circle cx="0" cy="0" r="5" fill={C.white} stroke={INK} strokeWidth={1.4} />
                </g>
              </g>
            ))}
          </g>
        </g>
      </g>

      {big && <Bubble x={226} y={64} w={98} text="فقط یه چایی!" className="pd-say o-bottom" />}
    </Scene>
  );
}
