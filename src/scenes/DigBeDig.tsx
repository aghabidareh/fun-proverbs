import { Scene, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

function yap(name: string, from: number, to: number, a: string, b: string, rest: string, step = 2.5) {
  const fr: string[] = [`0%,${from}%{transform:${rest}}`];
  let i = 0;
  for (let p = from + step; p < to; p += step, i++) fr.push(`${p}%{transform:${i % 2 ? b : a}}`);
  fr.push(`${to}%,100%{transform:${rest}}`);
  return `@keyframes ${name}{${fr.join("")}}`;
}

const SOOT = "#2e2924";
const SOOT2 = "#4a423b";
const COPPER = "#c27a3a";

const CSS = `
${yap("dd-mouthL", 0, 34, "scale(1,1)", "scale(1,.55)", "scale(1,.2)")}
${yap("dd-mouthR", 36, 70, "scale(1,1)", "scale(1,.55)", "scale(1,.2)")}
${yap("dd-lidL", 0, 34, "translateY(-7px) rotate(-7deg)", "translateY(-2px) rotate(5deg)", "translateY(0px) rotate(0deg)")}
${yap("dd-lidR", 36, 70, "translateY(-7px) rotate(7deg)", "translateY(-2px) rotate(-5deg)", "translateY(0px) rotate(0deg)")}
.dd-mouthL{animation:dd-mouthL 6s linear infinite}
.dd-mouthR{animation:dd-mouthR 6s linear infinite}
.dd-lidL{animation:dd-lidL 6s linear infinite}
.dd-lidR{animation:dd-lidR 6s linear infinite}
@keyframes dd-leanL{0%{transform:rotate(0deg)}5%,32%{transform:rotate(9deg)}38%,68%{transform:rotate(-4deg)}74%,96%{transform:rotate(-6deg)}100%{transform:rotate(0deg)}}
@keyframes dd-leanR{0%,34%{transform:rotate(4deg)}40%,68%{transform:rotate(-9deg)}74%,96%{transform:rotate(6deg)}100%{transform:rotate(4deg)}}
.dd-leanL{animation:dd-leanL 6s ease-in-out infinite}
.dd-leanR{animation:dd-leanR 6s ease-in-out infinite}
@keyframes dd-saidL{0%,2%{transform:scale(0);opacity:0}5%{transform:scale(1.15);opacity:1}8%,31%{transform:scale(1);opacity:1}34%,100%{transform:scale(0);opacity:0}}
@keyframes dd-saidR{0%,37%{transform:scale(0);opacity:0}40%{transform:scale(1.15);opacity:1}43%,67%{transform:scale(1);opacity:1}70%,100%{transform:scale(0);opacity:0}}
.dd-saidL{animation:dd-saidL 6s ease-out infinite}
.dd-saidR{animation:dd-saidR 6s ease-out infinite}
@keyframes dd-ref{0%,72%{transform:scale(0)}76%{transform:scale(1.15)}79%,95%{transform:scale(1)}98%,100%{transform:scale(0)}}
.dd-ref{animation:dd-ref 6s ease-out infinite}
@keyframes dd-watch{0%,4%{transform:rotate(0deg)}10%,30%{transform:rotate(-7deg)}40%,66%{transform:rotate(7deg)}72%,100%{transform:rotate(0deg)}}
.dd-watch{animation:dd-watch 6s ease-in-out infinite}
@keyframes dd-arm{0%,70%{transform:rotate(-130deg)}76%{transform:rotate(12deg)}80%,95%{transform:rotate(0deg)}100%{transform:rotate(-130deg)}}
.dd-arm{animation:dd-arm 6s ease-out infinite}
@keyframes dd-whistle{0%,71%{transform:scale(0);opacity:0}74%{transform:scale(1.2);opacity:1}80%{transform:scale(1);opacity:1}86%,100%{transform:scale(1.4);opacity:0}}
.dd-whistle{animation:dd-whistle 6s ease-out infinite}
@keyframes dd-vein{0%,100%{transform:scale(.8)}50%{transform:scale(1.15)}}
@keyframes dd-veinL{0%,2%{opacity:0}4%,32%{opacity:1}34%,100%{opacity:0}}
@keyframes dd-veinR{0%,37%{opacity:0}39%,68%{opacity:1}70%,100%{opacity:0}}
.dd-veinL{animation:dd-veinL 6s linear infinite}
.dd-veinR{animation:dd-veinR 6s linear infinite}
.dd-pulse{animation:dd-vein .35s ease-in-out infinite}
@keyframes dd-flick{0%,100%{transform:scale(1,1)}33%{transform:scale(.9,1.12)}66%{transform:scale(1.08,.88)}}
.dd-flick{animation:dd-flick .45s ease-in-out infinite}
@keyframes dd-steam{0%{transform:translate(0,0) scale(.5);opacity:0}20%{opacity:.9}100%{transform:translate(var(--sx,0px),-60px) scale(1.7);opacity:0}}
.dd-steam{animation:dd-steam 2.2s ease-out infinite}
@keyframes dd-boil{0%,100%{transform:scale(.4);opacity:0}30%{opacity:1}60%{transform:scale(1.1);opacity:1}70%{transform:scale(1.3);opacity:0}}
.dd-boil{animation:dd-boil 1.3s ease-in-out infinite}
`;

function Pot({ facing, mouthCls, lidCls }: { facing: 1 | -1; mouthCls: string; lidCls: string }) {
  const px = 3.5 * facing;
  return (
    <g>
      <path d="M-44 -50 Q-58 -48 -52 -34" fill="none" stroke={INK} strokeWidth={7} strokeLinecap="round" />
      <path d="M-44 -50 Q-58 -48 -52 -34" fill="none" stroke={COPPER} strokeWidth={3.5} strokeLinecap="round" />
      <path d="M44 -50 Q58 -48 52 -34" fill="none" stroke={INK} strokeWidth={7} strokeLinecap="round" />
      <path d="M44 -50 Q58 -48 52 -34" fill="none" stroke={COPPER} strokeWidth={3.5} strokeLinecap="round" />
      <path d="M-42 -58 Q-54 -30 -40 -6 Q0 6 40 -6 Q54 -30 42 -58Z" fill={SOOT} {...inked} />
      <path d="M-30 -18 Q-20 -8 -8 -14 Q-14 -24 -30 -18Z M14 -40 Q26 -46 34 -36 Q22 -32 14 -40Z" fill={SOOT2} />
      <path d="M-36 -46 Q-38 -36 -34 -28" fill="none" stroke={COPPER} strokeWidth={2.5} strokeLinecap="round" opacity=".8" />
      <ellipse cx="0" cy="-58" rx="46" ry="7" fill={COPPER} {...inked} />
      <g className={`${lidCls} o-bottom`}>
        <path d="M-40 -60 Q0 -92 40 -60Z" fill="#3a332d" {...inked} />
        <path d="M-24 -70 Q-10 -80 4 -80" fill="none" stroke={SOOT2} strokeWidth={2.5} strokeLinecap="round" />
        <circle cx="0" cy="-86" r="5" fill={COPPER} {...inked} strokeWidth={2} />
      </g>
      <path d={`M-24 -45 L-6 ${facing > 0 ? -38 : -40} M24 -45 L6 ${facing > 0 ? -40 : -38}`} stroke={C.white} strokeWidth={3.2} strokeLinecap="round" />
      <path d="M-22 -32 Q-14 -40 -6 -32 Q-14 -27 -22 -32Z M6 -32 Q14 -40 22 -32 Q14 -27 6 -32Z" fill={C.white} stroke={INK} strokeWidth={1.4} />
      <circle cx={-14 + px} cy="-32.5" r="2.2" fill={INK} />
      <circle cx={14 + px} cy="-32.5" r="2.2" fill={INK} />
      <g transform={`translate(${3 * facing} -16)`}>
        <g className={`${mouthCls} o-top`}>
          <path d="M-11 -4 Q0 -7 11 -4 Q8 10 0 10 Q-8 10 -11 -4Z" fill="#7a1f2b" stroke={C.white} strokeWidth={1.6} />
          <path d="M-5 6 Q0 2 5 6 Q2 9 0 9 Q-2 9 -5 6Z" fill="#e58a7a" />
          <path d="M-9 -4 H9" stroke={C.white} strokeWidth={2.4} />
        </g>
      </g>
    </g>
  );
}

function Vein({ x, y, cls }: { x: number; y: number; cls: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className={cls}>
        <g className="dd-pulse">
          <path d="M-8 -3 Q-3 -3 -3 -8 M3 -8 Q3 -3 8 -3 M8 3 Q3 3 3 8 M-3 8 Q-3 3 -8 3" fill="none" stroke={C.pomegranate} strokeWidth={3} strokeLinecap="round" />
        </g>
      </g>
    </g>
  );
}

function Flame({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 258)`}>
      <g className="dd-flick o-bottom">
        <path d="M-18 0 Q-22 -16 -10 -24 Q-8 -14 -2 -12 Q-4 -28 6 -34 Q8 -20 14 -18 Q20 -14 18 0Z" fill={C.saffron} {...inked} strokeWidth={2} />
        <path d="M-8 0 Q-8 -10 0 -16 Q4 -8 8 -6 Q10 -2 8 0Z" fill="#f6d36b" />
      </g>
    </g>
  );
}

function Steam({ x, y, delay, sx }: { x: number; y: number; delay: string; sx: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="dd-steam" style={{ animationDelay: delay, ["--sx" as string]: `${sx}px` }}>
        <circle cx="0" cy="0" r="7" fill={C.white} stroke={INK} strokeWidth={1.6} />
        <circle cx="7" cy="-3" r="5" fill={C.white} stroke={INK} strokeWidth={1.5} />
      </g>
    </g>
  );
}

export default function DigBeDig({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="دیگ به دیگ می‌گه روت سیاه" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#d9a37a" />

      <rect x="-10" y="150" width="420" height="70" fill={C.firouzeh} stroke={INK} strokeWidth={2} />
      {Array.from({ length: 11 }, (_, i) => (
        <g key={i}>
          <path d={`M${i * 40} 150 V220`} stroke={INK} strokeWidth={1} opacity=".4" />
          <Star8 x={20 + i * 40} y={185} r={8} fill={C.lapis} />
        </g>
      ))}
      <rect x="20" y="70" width="110" height="8" fill="#8a5a3a" {...inked} strokeWidth={2} />
      <g stroke={INK} strokeWidth={2}>
        <path d="M32 70 V52 Q32 44 42 44 Q52 44 52 52 V70Z" fill={C.terracotta} />
        <path d="M62 70 V40 Q62 34 70 34 Q78 34 78 40 V70Z" fill={C.cream} />
        <path d="M90 70 Q84 56 96 50 L108 50 Q120 56 114 70Z" fill={C.saffron} />
      </g>
      <path d="M270 40 H380" stroke={INK} strokeWidth={3} strokeLinecap="round" />
      <g stroke={INK} strokeWidth={2}>
        <path d="M290 40 V80" /><circle cx="290" cy="86" r="7" fill="#b9b2a5" />
        <path d="M320 40 V70" /><path d="M308 70 H332 L328 92 H312Z" fill={COPPER} />
        <path d="M352 40 V84" /><ellipse cx="352" cy="90" rx="6" ry="8" fill="#b9b2a5" />
      </g>

      <rect x="22" y="214" width="356" height="100" fill={C.terracotta} {...inked} />
      <path d="M22 236 H378 M22 258 H378 M22 280 H378" stroke={INK} strokeWidth={1.2} opacity=".45" />
      <path d="M60 214 V236 M200 214 V236 M340 214 V236 M100 258 V280 M300 258 V280" stroke={INK} strokeWidth={1.2} opacity=".45" />
      <path d="M100 262 V246 Q128 226 156 246 V262Z" fill={INK} />
      <path d="M244 262 V246 Q272 226 300 246 V262Z" fill={INK} />
      <Flame x={128} />
      <Flame x={272} />

      <g fill={SOOT}>
        <circle cx="120" cy="140" r="2.5" style={{ animation: "rise 3s ease-out infinite" }} />
        <circle cx="282" cy="140" r="2" style={{ animation: "rise 3.4s ease-out infinite", animationDelay: "-1.4s" }} />
        <circle cx="200" cy="150" r="2" style={{ animation: "rise 2.8s ease-out infinite", animationDelay: "-.8s" }} />
      </g>

      <g transform="translate(128 216)">
        <g className="dd-leanL o-bottom">
          <Pot facing={1} mouthCls="dd-mouthL" lidCls="dd-lidL" />
          <Steam x={-6} y={-92} delay="0s" sx={-10} />
          <Steam x={6} y={-92} delay="-1.1s" sx={8} />
          <g transform="translate(-30 -64)"><circle className="dd-boil" r="4" fill={C.cream} stroke={INK} strokeWidth={1.4} /></g>
          <Vein x={30} y={-50} cls="dd-veinL" />
        </g>
      </g>

      <g transform="translate(272 216)">
        <g className="dd-leanR o-bottom">
          <Pot facing={-1} mouthCls="dd-mouthR" lidCls="dd-lidR" />
          <Steam x={-6} y={-92} delay="-.6s" sx={-8} />
          <Steam x={6} y={-92} delay="-1.6s" sx={10} />
          <g transform="translate(32 -64)"><circle className="dd-boil" r="4" fill={C.cream} stroke={INK} strokeWidth={1.4} style={{ animationDelay: "-.6s" }} /></g>
          <Vein x={-30} y={-50} cls="dd-veinR" />
        </g>
      </g>

      <g className="dd-watch o-bottom">
        <ellipse cx="200" cy="214" rx="10" ry="3" fill={INK} opacity=".25" />
        <path d="M200 150 V212" stroke={INK} strokeWidth={8} strokeLinecap="round" />
        <path d="M200 150 V212" stroke="#b9b2a5" strokeWidth={4.5} strokeLinecap="round" />
        <path d="M201 176 L212 186 L204 194" fill="none" stroke={INK} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
        <g className="dd-arm" style={{ transformOrigin: "199px 174px", transformBox: "view-box" }}>
          <path d="M199 174 L186 150" stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
          <rect x="174" y="130" width="14" height="19" rx="2" fill={C.pomegranate} {...inked} strokeWidth={2} transform="rotate(-12 181 140)" />
        </g>
        <ellipse cx="200" cy="138" rx="18" ry="15" fill="#d9d2c3" {...inked} />
        <path d="M188 132 Q192 126 198 126" fill="none" stroke={C.white} strokeWidth={2.5} strokeLinecap="round" />
        <path d="M191 134 L197 136 M209 134 L203 136" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
        <circle cx="194" cy="139" r="1.6" fill={INK} />
        <circle cx="206" cy="139" r="1.6" fill={INK} />
        <rect x="196" y="145" width="9" height="5" rx="2" fill={C.saffron} stroke={INK} strokeWidth={1.4} />
        <path d="M205 147 Q214 150 212 160" fill="none" stroke={C.pomegranate} strokeWidth={1.2} />
        <g transform="translate(218 140)">
          <path className="dd-whistle" d="M0 0 L10 -4 M1 6 L12 6 M0 12 L10 16" stroke={INK} strokeWidth={2} strokeLinecap="round" />
        </g>
      </g>

      <Bubble x={98} y={112} w={big ? 100 : 62} text={big ? "روت سیاهه!" : "#@$!"} className="dd-saidL o-bottom" style={{ opacity: 0 }} />
      <Bubble x={302} y={112} w={big ? 108 : 62} text={big ? "خودت سیاهی!" : "!%&#"} flip className="dd-saidR o-bottom" style={{ opacity: 0 }} />
      {big && <Bubble x={206} y={108} w={132} text="برید شسته بشید!" className="dd-ref o-bottom" />}
    </Scene>
  );
}
