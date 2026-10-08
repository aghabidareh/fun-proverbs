import type { ReactNode } from "react";
import { Scene, Face, Turban, Star8, Bubble, C, INK, SKIN, inked } from "./parts";
import type { SceneProps } from "./types";

const ASH = "#9aa85e";
const COPPER = "#b8743a";
const COPPER_DK = "#8e5426";
const L_BEATS: [number, number][] = [[0, 12], [24, 32], [40, 45], [50, 53], [56, 58.5]];
const R_BEATS: [number, number][] = [[12, 24], [32, 40], [45, 50], [53, 56], [58.5, 61]];
const TUG = Array.from({ length: 14 }, (_, i) => 62 + i * 2);

const p = (n: number) => `${+n.toFixed(2)}%`;

function armKeys(name: string, beats: [number, number][], rest: number, pts: number[], tug: number) {
  const fr = [`0%{transform:rotate(${rest}deg)}`];
  for (const [s, e] of beats) {
    const d = e - s;
    fr.push(`${p(s)}{transform:rotate(${rest}deg)}`);
    pts.forEach((a, i) => fr.push(`${p(s + (d * (i + 1)) / (pts.length + 1))}{transform:rotate(${a}deg)}`));
    fr.push(`${p(e)}{transform:rotate(${rest}deg)}`);
  }
  fr.push(`62%,90%{transform:rotate(${tug}deg)}`, `96%,100%{transform:rotate(${rest}deg)}`);
  return `@keyframes ${name}{${fr.join("")}}`;
}

function winKeys(name: string, ranges: [number, number][]) {
  const fr = ["0%{opacity:0}"];
  for (const [s, e] of ranges) {
    if (s > 0) fr.push(`${p(s)}{opacity:0}`);
    fr.push(`${p(s + 0.3)}{opacity:1}`, `${p(e - 0.3)}{opacity:1}`, `${p(e)}{opacity:0}`);
  }
  fr.push("100%{opacity:0}");
  return `@keyframes ${name}{${fr.join("")}}`;
}

function needleKeys() {
  const all = [...L_BEATS.map(([s, e]) => [s, e, 1]), ...R_BEATS.map(([s, e]) => [s, e, -1])].sort((a, b) => a[0] - b[0]);
  const fr = ["0%{transform:rotate(0deg)}"];
  for (const [s, e, dir] of all) {
    fr.push(`${p(s + (e - s) * 0.6)}{transform:rotate(${dir * 80}deg)}`, `${p(e)}{transform:rotate(${dir * 66}deg)}`);
  }
  TUG.forEach((t, i) => fr.push(`${p(t)}{transform:rotate(${i % 2 ? 85 : -85}deg)}`));
  fr.push("96%,100%{transform:rotate(0deg)}");
  return `@keyframes ap-needle{${fr.join("")}}`;
}

function tugKeys(name: string, prop: (dir: number) => string, rest: string, withOpacity: boolean) {
  const o = (v: number) => (withOpacity ? `;opacity:${v}` : "");
  const fr = [`0%,61.5%{transform:${rest}${o(0)}}`];
  TUG.forEach((t, i) => fr.push(`${p(t)}{transform:${prop(i % 2 ? 1 : -1)}${o(1)}}`));
  fr.push(`90.5%{transform:${rest}${o(1)}}`, `91.5%,100%{transform:${rest}${o(0)}}`);
  return `@keyframes ${name}{${fr.join("")}}`;
}

const CSS = `
${armKeys("ap-shake", L_BEATS, -25, [-142, -122, -142, -122, -142], -95)}
${armKeys("ap-scoop", R_BEATS, 30, [100, 112, 166], 95)}
.ap-shake{animation:ap-shake 8s ease-in-out infinite}
.ap-scoop{animation:ap-scoop 8s ease-in-out infinite}
${winKeys("ap-lwin", L_BEATS)}
${winKeys("ap-rwin", R_BEATS.map(([s, e]) => [s + (e - s) * 0.6, e] as [number, number]))}
${winKeys("ap-tugwin", [[62, 90]])}
.ap-lwin{animation:ap-lwin 8s linear infinite}
.ap-rwin{animation:ap-rwin 8s linear infinite}
.ap-tugwin{animation:ap-tugwin 8s linear infinite}
${needleKeys()}
.ap-needle{animation:ap-needle 8s ease-in-out infinite}
${tugKeys("ap-ladle", (d) => `translateX(${d * 9}px) rotate(${d * 3}deg)`, "translateX(0px) rotate(0deg)", true)}
.ap-ladle{animation:ap-ladle 8s ease-in-out infinite}
${tugKeys("ap-lean", (d) => `rotate(${d * 6}deg)`, "rotate(0deg)", false)}
.ap-lean{animation:ap-lean 8s ease-in-out infinite}
@keyframes ap-own{0%,61%{opacity:1}62%,90%{opacity:0}92%,100%{opacity:1}}
.ap-own{animation:ap-own 8s linear infinite}
@keyframes ap-grain{0%{transform:translate(0,0);opacity:1}100%{transform:translate(8px,16px);opacity:0}}
.ap-grain{animation:ap-grain .45s linear infinite}
@keyframes ap-fling{0%{transform:translate(0,0) scale(1);opacity:1}100%{transform:translate(34px,-24px) scale(.6);opacity:0}}
.ap-fling{animation:ap-fling .5s ease-out infinite}
@keyframes ap-bubble{0%{transform:scale(0);opacity:1}70%{transform:scale(1);opacity:1}80%,100%{transform:scale(1.3);opacity:0}}
.ap-bubble{animation:ap-bubble 1.6s ease-out infinite}
@keyframes ap-grump{0%,100%{transform:scale(1,1)}50%{transform:scale(1.06,.9)}}
.ap-grump{animation:ap-grump 1.3s ease-in-out infinite}
@keyframes ap-steam{0%{transform:translateY(6px) scaleY(.8);opacity:0}25%{opacity:.85}100%{transform:translateY(-38px) scaleY(1.2);opacity:0}}
.ap-steam{animation:ap-steam 2.6s ease-out infinite}
@keyframes ap-flame{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.3)}}
.ap-flame{animation:ap-flame .5s ease-in-out infinite}
@keyframes ap-vein{0%,61%{transform:scale(0)}64%{transform:scale(1.3)}66%,89%{transform:scale(1)}91%,100%{transform:scale(0)}}
.ap-vein{animation:ap-vein 8s ease-out infinite}
@keyframes ap-spark{0%,62%{opacity:0}63%{opacity:1}65%{opacity:.2}67%{opacity:1}70%{opacity:.3}72%{opacity:1}76%{opacity:.2}78%{opacity:1}82%{opacity:.3}84%{opacity:1}89%{opacity:1}90%,100%{opacity:0}}
.ap-spark{animation:ap-spark 8s linear infinite}
@keyframes ap-say1{0%,1%{transform:scale(0);opacity:0}3%{transform:scale(1.1);opacity:1}4%,10%{transform:scale(1);opacity:1}12%,100%{transform:scale(0);opacity:0}}
@keyframes ap-say2{0%,13%{transform:scale(0);opacity:0}15%{transform:scale(1.1);opacity:1}16%,22%{transform:scale(1);opacity:1}24%,100%{transform:scale(0);opacity:0}}
.ap-say1{animation:ap-say1 8s ease-out infinite}
.ap-say2{animation:ap-say2 8s ease-out infinite}
`;

function Body({ robe, sash, hat, armL, armR, armLClass, armRClass, handL, handR, beard = false }: {
  robe: string; sash: string; hat: string; armL: number; armR: number; armLClass?: string; armRClass?: string;
  handL?: ReactNode; handR?: ReactNode; beard?: boolean;
}) {
  return (
    <g>
      <path d="M-14 0 Q-14 -6 -6 -6 L-4 0Z M4 0 L6 -6 Q14 -6 14 0Z" fill={C.pomegranate} {...inked} strokeWidth={2} />
      <path d="M-22 -4 Q-20 -40 -12 -58 L12 -58 Q20 -40 22 -4 Q0 2 -22 -4Z" fill={robe} {...inked} />
      <path d="M-14 -36 Q0 -32 14 -36 L16 -6 Q0 -2 -16 -6Z" fill={C.white} {...inked} strokeWidth={2} />
      <path d="M-15 -42 Q0 -38 15 -42 L15 -36 Q0 -32 -15 -36Z" fill={sash} {...inked} strokeWidth={2} />
      <g className={armLClass} style={{ transformOrigin: "-12px -54px", transformBox: "view-box" }} transform={`rotate(${armL})`}>
        <path d="M-12 -54 Q-18 -40 -16 -28" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
        <path d="M-12 -54 Q-18 -40 -16 -28" fill="none" stroke={robe} strokeWidth={5.5} strokeLinecap="round" />
        {handL}
        <circle cx="-16" cy="-26" r="4.5" fill={SKIN} {...inked} strokeWidth={2} />
      </g>
      <g className={armRClass} style={{ transformOrigin: "12px -54px", transformBox: "view-box" }} transform={`rotate(${armR})`}>
        <path d="M12 -54 Q18 -40 16 -28" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
        <path d="M12 -54 Q18 -40 16 -28" fill="none" stroke={robe} strokeWidth={5.5} strokeLinecap="round" />
        {handR}
        <circle cx="16" cy="-26" r="4.5" fill={SKIN} {...inked} strokeWidth={2} />
      </g>
      <g transform="translate(0 -74)">
        {beard && <path d="M-11 4 Q-12 20 0 24 Q12 20 11 4 Q0 12 -11 4Z" fill={INK} />}
        <Face mood="serious" />
        <Turban color={hat} kind="kolah" />
        <path d="M-11 -12 Q0 -16 11 -12" fill="none" stroke={INK} strokeWidth={1.2} />
      </g>
    </g>
  );
}

function Vein() {
  return <path d="M-5 -1 Q-1 -1 -1 -5 M1 -5 Q1 -1 5 -1 M5 1 Q1 1 1 5 M-1 5 Q-1 1 -5 1" fill="none" stroke={C.pomegranate} strokeWidth={2.2} strokeLinecap="round" />;
}

export default function Ashpaz({ playing = true, big = false }: SceneProps) {
  const shaker = (
    <g className="ap-own" transform="translate(16 -26) rotate(98)">
      <rect x="-5" y="0" width="10" height="17" rx="2" fill={C.white} {...inked} strokeWidth={1.8} />
      <path d="M-5 17 H5 L4 23 H-4Z" fill="#b9bfc6" {...inked} strokeWidth={1.6} />
      <circle cx="-1.5" cy="20" r=".8" fill={INK} /><circle cx="1.5" cy="20" r=".8" fill={INK} />
      <text x="0" y="12" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="6" fill={C.lapis}>ن</text>
    </g>
  );
  const ladle = (
    <g className="ap-own">
      <path d="M-16 -26 L-16 4" stroke={INK} strokeWidth={4.5} strokeLinecap="round" />
      <path d="M-16 -26 L-16 4" stroke="#c9ccd1" strokeWidth={2} strokeLinecap="round" />
      <path d="M-25 8 Q-16 22 -7 8Z" fill="#c9ccd1" {...inked} strokeWidth={1.8} />
      <path d="M-23 8 Q-16 0 -9 8Z" fill={C.white} stroke={INK} strokeWidth={1.2} />
    </g>
  );

  return (
    <Scene title="آشپز که دو تا شد، آش یا شور می‌شه یا بی‌نمک" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#e5b98a" />

      <rect x="-10" y="150" width="420" height="14" fill={C.turquoise} stroke={INK} strokeWidth={2} />
      {Array.from({ length: 11 }, (_, i) => (
        <Star8 key={i} x={10 + i * 40} y={157} r={4.5} fill={C.saffron} />
      ))}
      <path d="M300 130 V68 Q300 42 330 34 Q360 42 360 68 V130Z" fill="#9fd0e0" {...inked} />
      <path d="M330 36 V130 M300 86 H360" stroke={INK} strokeWidth={2} />
      <path d="M294 132 H366" stroke={INK} strokeWidth={4} strokeLinecap="round" />
      <path d="M30 74 H140" stroke={INK} strokeWidth={5} strokeLinecap="round" />
      <path d="M30 74 H140" stroke="#8a5a34" strokeWidth={2.5} strokeLinecap="round" />
      <path d="M40 72 Q36 52 46 48 L56 48 Q66 52 62 72Z" fill={C.lapis} {...inked} strokeWidth={2} />
      <path d="M72 72 Q68 56 80 54 Q92 56 88 72Z" fill={C.terracotta} {...inked} strokeWidth={2} />
      <path d="M100 72 V56 H122 V72Z" fill={C.cream} {...inked} strokeWidth={2} />
      <text x="111" y="68" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="9" fill={C.pomegranate}>نمک</text>
      <path d="M180 20 V44 M174 44 Q180 58 186 44 M196 20 V36" stroke={INK} strokeWidth={1.6} fill="none" />
      <circle cx="196" cy="40" r="5" fill={C.white} {...inked} strokeWidth={1.6} />
      <circle cx="180" cy="50" r="5" fill="#d9d2c3" {...inked} strokeWidth={1.6} />

      <rect x="-10" y="280" width="420" height="30" fill="#a8744a" stroke={INK} strokeWidth={2.5} />
      <path d="M-10 288 H410" stroke={INK} strokeWidth={1} strokeDasharray="2 6" opacity=".5" />

      {[150, 172, 228, 250].map((x, i) => (
        <path key={x} className="ap-flame o-bottom" style={{ animationDelay: `${-i * .13}s` }} d={`M${x - 8} 276 Q${x - 8} 262 ${x} 254 Q${x + 8} 262 ${x + 8} 276Z`} fill={i % 2 ? C.saffron : C.terracotta} {...inked} strokeWidth={1.6} />
      ))}
      <rect x="136" y="272" width="128" height="12" fill="#7a4a3a" {...inked} strokeWidth={2} />

      {[0, -.9, -1.7].map((d, i) => (
        <g key={i} transform={`translate(${178 + i * 22} 196)`}>
          <path className="ap-steam" style={{ animationDelay: `${d}s` }} d="M0 0 Q-6 -8 0 -16 Q6 -24 0 -32" fill="none" stroke={C.white} strokeWidth={3} strokeLinecap="round" />
        </g>
      ))}

      <circle cx="106" cy="230" r="8" fill="none" stroke={INK} strokeWidth={5} />
      <circle cx="106" cy="230" r="8" fill="none" stroke={COPPER_DK} strokeWidth={2.5} />
      <circle cx="294" cy="230" r="8" fill="none" stroke={INK} strokeWidth={5} />
      <circle cx="294" cy="230" r="8" fill="none" stroke={COPPER_DK} strokeWidth={2.5} />
      <path d="M112 212 Q106 268 150 276 L250 276 Q294 268 288 212Z" fill={COPPER} {...inked} />
      <path d="M118 236 Q200 250 282 236" fill="none" stroke={COPPER_DK} strokeWidth={4} />
      <g fill={C.saffron} stroke={INK} strokeWidth={1}>
        <circle cx="130" cy="240" r="2" /><circle cx="160" cy="245" r="2" /><circle cx="240" cy="245" r="2" /><circle cx="270" cy="240" r="2" />
      </g>
      <ellipse cx="200" cy="212" rx="90" ry="15" fill={COPPER_DK} {...inked} />
      <ellipse cx="200" cy="212" rx="82" ry="11" fill={ASH} {...inked} strokeWidth={2} />
      <path d="M140 212 q8 -4 16 0 t16 0 M226 214 q8 -4 16 0 t14 0" fill="none" stroke={C.cream} strokeWidth={1.4} />
      {[[136, 210, 0], [262, 214, -.5], [160, 216, -1.1], [246, 208, -.8]].map(([x, y, d], i) => (
        <circle key={i} className="ap-bubble" style={{ animationDelay: `${d}s` }} cx={x} cy={y} r="3.5" fill="#b4c07a" stroke={INK} strokeWidth={1.2} />
      ))}
      <g className="ap-grump">
        <path d="M184 208 Q188 205 192 208 Q188 211 184 208Z M208 208 Q212 205 216 208 Q212 211 208 208Z" fill={C.white} stroke={INK} strokeWidth={1.2} />
        <circle cx="189" cy="208.5" r="1.4" fill={INK} />
        <circle cx="211" cy="208.5" r="1.4" fill={INK} />
        <path d="M182 205 L193 207 M218 205 L207 207" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
        <path d="M194 216 Q200 212 206 216" fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
      </g>

      <path d="M180 250 A20 20 0 0 1 220 250Z" fill={C.cream} {...inked} strokeWidth={2} />
      <path d="M184 249 A16 16 0 0 1 196 235" fill="none" stroke="#9fd8ef" strokeWidth={4} />
      <path d="M204 235 A16 16 0 0 1 216 249" fill="none" stroke={C.pomegranate} strokeWidth={4} />
      <g transform="translate(200 249)">
        <g className="ap-needle" style={{ transformOrigin: "0px 0px", transformBox: "view-box" }}>
          <path d="M0 0 L-1.6 -2 L0 -16 L1.6 -2Z" fill={INK} />
        </g>
      </g>
      <circle cx="200" cy="249" r="2.4" fill={C.saffron} stroke={INK} strokeWidth={1.2} />
      <text x="174" y="262" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="8" fill={INK} direction="rtl">بی‌نمک</text>
      <text x="226" y="262" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="8" fill={INK} direction="rtl">شور</text>

      <g className="ap-lwin" style={{ opacity: 0 }}>
        {[[140, 206, 0], [144, 208, -.15], [138, 209, -.3], [146, 205, -.22]].map(([x, y, d], i) => (
          <circle key={i} className="ap-grain" style={{ animationDelay: `${d}s` }} cx={x} cy={y} r="1.4" fill={C.white} stroke={INK} strokeWidth={.6} />
        ))}
      </g>
      <g className="ap-rwin" style={{ opacity: 0 }}>
        {[[276, 160, 0], [282, 166, -.17], [272, 168, -.33]].map(([x, y, d], i) => (
          <circle key={i} className="ap-fling" style={{ animationDelay: `${d}s` }} cx={x} cy={y} r="2.2" fill={C.white} stroke={INK} strokeWidth={.8} />
        ))}
      </g>

      <rect x="74" y="266" width="42" height="22" fill="#8a5a34" {...inked} strokeWidth={2} />
      <path d="M74 277 H116" stroke={INK} strokeWidth={1.2} />
      <rect x="284" y="266" width="42" height="22" fill="#8a5a34" {...inked} strokeWidth={2} />
      <path d="M284 277 H326" stroke={INK} strokeWidth={1.2} />

      <g transform="translate(95 266)">
        <g className="ap-lean o-bottom">
          <Body robe={C.lapis} sash={C.saffron} hat={C.white} armL={15} armR={-25} armRClass="ap-shake" handR={shaker} />
        </g>
      </g>
      <g transform="translate(305 266)">
        <g className="ap-lean o-bottom">
          <Body robe={C.olive} sash={C.pomegranate} hat={C.white} armL={30} armR={-15} armLClass="ap-scoop" handL={ladle} beard />
        </g>
      </g>

      <g className="ap-ladle" style={{ opacity: 0 }}>
        <path d="M130 212 H270" stroke={INK} strokeWidth={5} strokeLinecap="round" />
        <path d="M130 212 H270" stroke="#c9ccd1" strokeWidth={2.4} strokeLinecap="round" />
        <path d="M200 212 V220" stroke={INK} strokeWidth={2.5} />
        <path d="M189 220 Q200 234 211 220Z" fill="#c9ccd1" {...inked} strokeWidth={1.8} />
        <circle cx="134" cy="212" r="4.5" fill={SKIN} {...inked} strokeWidth={2} />
        <circle cx="266" cy="212" r="4.5" fill={SKIN} {...inked} strokeWidth={2} />
      </g>

      <path className="ap-spark" style={{ opacity: 0 }} d="M114 184 L136 178 L130 190 L156 182 L150 194 L176 186 L224 186 L250 194 L244 182 L270 190 L264 178 L286 184" fill="none" stroke={C.saffron} strokeWidth={2.6} strokeLinejoin="round" strokeLinecap="round" />
      <g transform="translate(112 168)"><g className="ap-vein" style={{ transform: "scale(0)" }}><Vein /></g></g>
      <g transform="translate(288 168)"><g className="ap-vein" style={{ transform: "scale(0)" }}><Vein /></g></g>

      {big && (
        <>
          <Bubble x={96} y={160} w={64} text="کمه!" className="ap-say1 o-bottom" style={{ opacity: 0 }} />
          <Bubble x={304} y={160} w={64} text="شوره!" flip className="ap-say2 o-bottom" style={{ opacity: 0 }} />
        </>
      )}
    </Scene>
  );
}
