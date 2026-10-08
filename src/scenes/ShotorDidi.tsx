import { Scene, Person, Face, Turban, Star8, Bubble, C, INK, SKIN, inked } from "./parts";
import type { SceneProps } from "./types";

function swing(name: string, to: number, amp: number, phase: 0 | 1, step = 3) {
  const fr: string[] = [];
  let i = phase;
  for (let p = 0; p < to; p += step, i++) fr.push(`${p}%{transform:rotate(${i % 2 ? amp : -amp}deg)}`);
  fr.push(`${to}%,100%{transform:rotate(0deg)}`);
  return `@keyframes ${name}{${fr.join("")}}`;
}

const BEARD = <path d="M-11 4 Q-12 20 0 24 Q12 20 11 4 Q0 12 -11 4Z" fill={INK} />;
const CAMEL = "#c99a5b";
const CAMEL_DK = "#a87a40";

const CSS = `
${swing("sd-legA", 30, 13, 0)}
${swing("sd-legB", 30, 13, 1)}
.sd-legA{animation:sd-legA 8s linear infinite}
.sd-legB{animation:sd-legB 8s linear infinite}
@keyframes sd-walk{0%{transform:translateX(190px);opacity:0}3%{opacity:1}30%,94%{transform:translateX(0px);opacity:1}100%{transform:translateX(0px);opacity:0}}
.sd-walk{animation:sd-walk 8s linear infinite}
@keyframes sd-bob{0%,3%,6%,9%,12%,15%,18%,21%,24%,27%{transform:translateY(0)}1.5%,4.5%,7.5%,10.5%,13.5%,16.5%,19.5%,22.5%,25.5%,28.5%{transform:translateY(-3px)}30%,100%{transform:translateY(0)}}
.sd-bob{animation:sd-bob 8s linear infinite}
@keyframes sd-tail{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(10deg)}}
.scene .sd-tail{animation:sd-tail 1.6s ease-in-out infinite;transform-origin:top center}
@keyframes sd-head{0%,56%{transform:rotate(0deg)}60%,66%{transform:rotate(-9deg)}70%,76%{transform:rotate(8deg)}80%,92%{transform:rotate(-3deg)}100%{transform:rotate(0deg)}}
.scene .sd-head{animation:sd-head 8s ease-in-out infinite;transform-origin:85% 90%}
@keyframes sd-pupil{0%,56%{transform:translateX(0)}60%,66%{transform:translateX(-2.5px)}70%,76%{transform:translateX(2.5px)}80%,100%{transform:translateX(0)}}
.sd-pupil{animation:sd-pupil 8s ease-in-out infinite}
@keyframes sd-calm{0%,29%{opacity:1}31%,100%{opacity:0}}
.sd-calm{animation:sd-calm 8s linear infinite}
@keyframes sd-shock{0%,29%{opacity:0}31%,45%{opacity:1}47%,100%{opacity:0}}
.sd-shock{animation:sd-shock 8s linear infinite}
@keyframes sd-away{0%,45%{opacity:0}47%,100%{opacity:1}}
.sd-away{animation:sd-away 8s linear infinite}
@keyframes sd-tiltL{0%,46%{transform:translateX(0px) rotate(0deg)}52%,95%{transform:translateX(-3px) rotate(-17deg)}100%{transform:translateX(0px) rotate(0deg)}}
.sd-tiltL{animation:sd-tiltL 8s ease-in-out infinite}
@keyframes sd-tiltR{0%,46%{transform:translateX(0px) rotate(0deg)}52%,95%{transform:translateX(3px) rotate(17deg)}100%{transform:translateX(0px) rotate(0deg)}}
.sd-tiltR{animation:sd-tiltR 8s ease-in-out infinite}
@keyframes sd-bang{0%,30%{transform:scale(0)}33%{transform:scale(1.4)}36%,43%{transform:scale(1)}46%,100%{transform:scale(0)}}
.sd-bang{animation:sd-bang 8s ease-out infinite}
@keyframes sd-q{0%,58%{transform:scale(0)}62%{transform:scale(1.3)}65%,93%{transform:scale(1)}96%,100%{transform:scale(0)}}
.sd-q{animation:sd-q 8s ease-out infinite}
@keyframes sd-hello{0%,36%{transform:scale(0)}39%{transform:scale(1.15)}41%,52%{transform:scale(1)}55%,100%{transform:scale(0)}}
.sd-hello{animation:sd-hello 8s ease-out infinite}
@keyframes sd-note{0%,48%{transform:translate(0px,0px) rotate(0deg);opacity:0}52%{opacity:1}70%{transform:translate(-16px,-34px) rotate(-20deg);opacity:0}100%{transform:translate(-16px,-34px);opacity:0}}
.sd-note{animation:sd-note 8s ease-out infinite}
@keyframes sd-duck{0%,32%{transform:translateY(0px)}36%,84%{transform:translateY(30px)}88%,94%{transform:translateY(12px)}100%{transform:translateY(0px)}}
.sd-duck{animation:sd-duck 8s ease-in-out infinite}
@keyframes sd-sweat{0%,50%{transform:translateY(0);opacity:0}60%{opacity:1}100%{transform:translateY(14px);opacity:0}}
.sd-sweat{animation:sd-sweat 2s ease-in infinite}
@keyframes sd-shaft{0%,100%{opacity:.28}50%{opacity:.42}}
.sd-shaft{animation:sd-shaft 5s ease-in-out infinite}
.sd-nohead{display:none}
`;

function WhistleHead() {
  return (
    <g>
      <ellipse cx="0" cy="0" rx="13" ry="15" fill={SKIN} {...inked} />
      <path d="M-9 -1 Q-5 -5 -1 -1 M1 -1 Q5 -5 9 -1" fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
      <path d="M-10 -9 Q-5 -14 -1 -9 M1 -9 Q5 -14 10 -9" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      <path d="M0 -1 Q-2 4 1 5" fill="none" stroke={INK} strokeWidth={1.2} />
      <circle cx="-8" cy="5" r="2.6" fill="#e58a7a" opacity=".55" />
      <circle cx="8" cy="5" r="2.6" fill="#e58a7a" opacity=".55" />
      <circle cx="-3" cy="9" r="2.6" fill="#c9605a" stroke={INK} strokeWidth={1.4} />
      <circle cx="-3" cy="9" r="1" fill={INK} />
      <Turban color={C.saffron} />
    </g>
  );
}

function SideEyeHead() {
  return (
    <g>
      <ellipse cx="0" cy="0" rx="13" ry="15" fill={SKIN} {...inked} />
      <path d="M-9 -1 Q-5 -4 -1 -1 Q-5 1 -9 -1Z M1 -1 Q5 -4 9 -1 Q5 1 1 -1Z" fill={C.white} stroke={INK} strokeWidth={1.2} />
      <circle cx="-2" cy="-1" r="1.5" fill={INK} />
      <circle cx="8" cy="-1" r="1.5" fill={INK} />
      <path d="M-10 -6 L-2 -5 M2 -5 L10 -7" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      <path d="M0 -1 Q-2 4 1 5" fill="none" stroke={INK} strokeWidth={1.2} />
      <path d="M-1 9 L6 8" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
      <circle cx="-8" cy="5" r="2.6" fill="#e58a7a" opacity=".55" />
      <g transform="translate(-13 -8)">
        <path className="sd-sweat" d="M0 -4 Q3 1 0 3 Q-3 1 0 -4Z" fill="#9fd8ef" stroke={INK} strokeWidth={1} />
      </g>
      <Turban color={C.cream} kind="kolah" />
    </g>
  );
}

function Leg({ x, cls, delay }: { x: number; cls: string; delay?: string }) {
  return (
    <g className={`${cls} o-top`} style={delay ? { animationDelay: delay } : undefined}>
      <path d={`M${x} -60 Q${x - 3} -40 ${x} -32 Q${x + 4} -26 ${x} -4`} fill="none" stroke={INK} strokeWidth={10} strokeLinecap="round" />
      <path d={`M${x} -60 Q${x - 3} -40 ${x} -32 Q${x + 4} -26 ${x} -4`} fill="none" stroke={CAMEL} strokeWidth={6} strokeLinecap="round" />
      <ellipse cx={x - 2} cy={-2} rx={7} ry={3.5} fill={CAMEL_DK} stroke={INK} strokeWidth={1.8} />
    </g>
  );
}

function Camel() {
  return (
    <g>
      <Leg x={-12} cls="sd-legB" />
      <Leg x={32} cls="sd-legA" />
      <g transform="translate(46 -76)">
        <g className="sd-tail">
          <path d="M0 0 Q6 14 3 28" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />
          <path d="M3 26 Q-2 36 4 40 Q10 34 3 26Z" fill={CAMEL_DK} stroke={INK} strokeWidth={1.6} />
        </g>
      </g>
      <path d="M-34 -64 Q-44 -86 -24 -92 Q-6 -134 22 -98 Q50 -96 50 -72 Q48 -52 20 -52 L-18 -52 Q-32 -54 -34 -64Z" fill={CAMEL} {...inked} />
      <path d="M-14 -96 Q2 -126 24 -97 L28 -72 Q6 -64 -18 -72Z" fill={C.pomegranate} {...inked} strokeWidth={2} />
      <path d="M-12 -90 Q4 -112 22 -92" fill="none" stroke={C.saffron} strokeWidth={2} strokeDasharray="3 3" />
      <Star8 x={5} y={-84} r={6} fill={C.saffron} />
      <g fill={C.saffron} stroke={INK} strokeWidth={1.2}>
        <circle cx="-16" cy="-69" r="2.5" /><circle cx="-6" cy="-66" r="2.5" /><circle cx="5" cy="-65" r="2.5" /><circle cx="16" cy="-67" r="2.5" /><circle cx="27" cy="-70" r="2.5" />
      </g>
      <Leg x={-22} cls="sd-legA" />
      <Leg x={22} cls="sd-legB" />
      <path d="M-26 -86 Q-40 -94 -44 -116 L-60 -116 Q-58 -88 -34 -62Z" fill={CAMEL} {...inked} />
      <path d="M-46 -100 q-4 3 -6 0 M-42 -88 q-4 3 -6 0" fill="none" stroke={CAMEL_DK} strokeWidth={1.5} strokeLinecap="round" />
      <g className="sd-head">
        <path d="M-44 -118 Q-46 -134 -62 -134 Q-80 -134 -84 -122 Q-86 -112 -76 -110 L-58 -110 Q-46 -108 -44 -118Z" fill={CAMEL} {...inked} />
        <path d="M-84 -116 Q-88 -106 -78 -105 Q-72 -106 -74 -111" fill="#d9a87a" {...inked} strokeWidth={2} />
        <path d="M-81 -124 q2 -2 4 0" fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
        <path d="M-50 -130 Q-46 -142 -42 -132Z" fill={CAMEL_DK} {...inked} strokeWidth={1.8} />
        <ellipse cx="-60" cy="-125" rx="5.5" ry="4.5" fill={C.white} stroke={INK} strokeWidth={1.4} />
        <circle className="sd-pupil" cx="-61" cy="-124" r="2" fill={INK} />
        <path d="M-66 -125 Q-60 -132 -54 -125 Z" fill={CAMEL_DK} stroke={INK} strokeWidth={1.4} />
        <path d="M-67 -126 l-3 -2 M-66 -128 l-2 -3" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />
      </g>
    </g>
  );
}

export default function ShotorDidi({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="شتر دیدی ندیدی" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#f2d49b" />

      <rect x="-10" y="-10" width="420" height="260" fill="#d8a26f" />
      <path d="M-10 60 Q100 10 200 22 Q300 10 410 60 L410 -10 L-10 -10Z" fill="#b97f50" {...inked} />
      <path d="M-10 60 Q100 10 200 22 Q300 10 410 60" fill="none" stroke={C.cream} strokeWidth={2} strokeDasharray="1 7" />
      <path className="sd-shaft" d="M186 22 L214 22 L250 250 L150 250Z" fill={C.white} />
      <ellipse cx="200" cy="22" rx="14" ry="5" fill={C.white} {...inked} strokeWidth={2} />

      <path d="M168 238 V140 Q168 104 200 92 Q232 104 232 140 V238Z" fill="#f6e3b8" {...inked} />
      <path d="M176 238 V146 Q176 116 200 106 Q224 116 224 146 V238Z" fill="none" stroke={C.turquoise} strokeWidth={3} />

      <path d="M18 246 V112 Q18 78 58 66 Q98 78 98 112 V246Z" fill="#5a3a2a" {...inked} />
      <rect x="28" y="96" width="22" height="46" fill={C.pomegranate} stroke={INK} strokeWidth={1.8} />
      <path d="M32 104 h14 M32 134 h14" stroke={C.saffron} strokeWidth={2} />
      <Star8 x={39} y={119} r={5} fill={C.saffron} />
      <rect x="66" y="96" width="22" height="46" fill={C.lapis} stroke={INK} strokeWidth={1.8} />
      <Star8 x={77} y={119} r={5} fill={C.firouzeh} />
      <g transform="translate(58 196)">
        <g className="sd-duck">
          <Face mood="shocked" />
          <Turban color={C.turquoise} />
        </g>
      </g>
      <rect x="22" y="212" width="72" height="36" fill={C.terracotta} {...inked} />
      <path d="M22 220 H94" stroke={INK} strokeWidth={1.4} />
      <g fill={C.saffron} stroke={INK} strokeWidth={1.4}>
        <circle cx="36" cy="207" r="5" /><circle cx="47" cy="208" r="4.5" /><circle cx="78" cy="207" r="5" />
      </g>

      <path d="M302 246 V112 Q302 78 342 66 Q382 78 382 112 V246Z" fill="#5a3a2a" {...inked} />
      <g stroke={INK} strokeWidth={1.8}>
        <path d="M316 120 Q312 140 326 142 Q340 140 336 120Z" fill="#c27a3a" />
        <path d="M346 108 Q342 130 358 132 Q372 130 368 108Z" fill="#c27a3a" />
        <path d="M322 170 Q318 196 342 198 Q366 196 362 170Z" fill="#d4a23c" />
      </g>
      <rect x="306" y="212" width="72" height="36" fill={C.terracotta} {...inked} />

      <rect x="-10" y="244" width="420" height="70" fill="#b07a4e" stroke={INK} strokeWidth={2.5} />
      <g fill="none" stroke={INK} strokeWidth={1.2} opacity=".45">
        <path d="M10 262 q12 -6 24 0 M60 280 q12 -6 24 0 M120 262 q12 -6 24 0 M250 266 q12 -6 24 0 M300 284 q12 -6 24 0 M350 262 q12 -6 24 0 M180 290 q12 -6 24 0" />
      </g>

      <g transform="translate(110 274) scale(.9)">
        <Person robe={C.turquoise} sash={C.saffron} headClass="sd-nohead" armL={20} armR={-8} />
        <g transform="translate(0 -74)">
          <g className="sd-calm" style={{ opacity: 0 }}><Face mood="calm" /><Turban color={C.saffron} /></g>
          <g className="sd-shock" style={{ opacity: 0 }}><Face mood="shocked" /><Turban color={C.saffron} /></g>
          <g className="sd-away">
            <g className="sd-tiltL" style={{ transform: "translateX(-3px) rotate(-17deg)" }}><WhistleHead /></g>
          </g>
        </g>
      </g>
      {[0, -6.9, -5.8].map((d, i) => (
        <g key={i} transform={`translate(${100 - i * 2} 196)`}>
          <text className="sd-note" style={{ animationDelay: `${d}s` }} x="0" y="0" fontFamily="serif" fontSize="18" fontWeight={700} fill={C.lapis}>{i === 1 ? "♫" : "♪"}</text>
        </g>
      ))}

      <g transform="translate(290 274) scale(.9)">
        <Person robe={C.pomegranate} sash={C.olive} headClass="sd-nohead" armL={10} armR={-20} beard />
        <g transform="translate(0 -74)">
          <g className="sd-calm" style={{ opacity: 0 }}>{BEARD}<Face mood="calm" /><Turban color={C.cream} kind="kolah" /></g>
          <g className="sd-shock" style={{ opacity: 0 }}>{BEARD}<Face mood="shocked" /><Turban color={C.cream} kind="kolah" /></g>
          <g className="sd-away">
            <g className="sd-tiltR" style={{ transform: "translateX(3px) rotate(17deg)" }}>{BEARD}<SideEyeHead /></g>
          </g>
        </g>
      </g>

      <g transform="translate(110 168)"><text className="sd-bang" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="24" fill={C.pomegranate} stroke={INK} strokeWidth={1}>!</text></g>
      <g transform="translate(290 168)"><text className="sd-bang" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="24" fill={C.pomegranate} stroke={INK} strokeWidth={1}>!</text></g>

      <g transform="translate(212 272)">
        <g className="sd-walk">
          <g className="sd-bob">
            <Camel />
          </g>
          <g transform="translate(-60 -146)">
            <text className="sd-q" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="24" fill={C.lapis} stroke={INK} strokeWidth={1}>؟</text>
          </g>
          {big && <Bubble x={-78} y={-132} w={70} text="سلام؟" className="sd-hello o-bottom" />}
        </g>
      </g>
    </Scene>
  );
}
