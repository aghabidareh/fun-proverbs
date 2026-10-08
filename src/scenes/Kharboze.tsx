import { Scene, Person, Face, Turban, Ground, Star8, Bubble, C, INK, SKIN, inked } from "./parts";
import type { SceneProps } from "./types";

const MELON = "#cfc65a";
const MELON_NET = "#f3edb0";
const RIND = "#a9b542";
const FLESH = "#f4c98a";

function jitter(name: string, from: number, to: number, amp: number, rot: number, step = 1) {
  const fr: string[] = [`0%,${from}%{transform:translate(0px,0px) rotate(0deg)}`];
  let i = 0;
  for (let p = from + step; p < to; p += step, i++) {
    const s = i % 2 ? 1 : -1;
    const dy = ((i % 3) - 1) * amp * 0.6;
    fr.push(`${p}%{transform:translate(${s * amp}px,${dy.toFixed(1)}px) rotate(${s * rot}deg)}`);
  }
  fr.push(`${to}%,100%{transform:translate(0px,0px) rotate(0deg)}`);
  return `@keyframes ${name}{${fr.join("")}}`;
}

function chew(from: number, to: number, a: number, b: number, step = 3) {
  const fr: string[] = [];
  let i = 0;
  for (let p = from; p <= to; p += step, i++) fr.push(`${p}%{transform:rotate(${i % 2 ? b : a}deg)}`);
  return fr.join("");
}

function flail(from: number, to: number, a: number, b: number, step = 2) {
  const fr: string[] = [];
  let i = 0;
  for (let p = from; p <= to; p += step, i++) fr.push(`${p}%{transform:rotate(${i % 2 ? b : a}deg)}`);
  return fr.join("");
}

const CSS = `
@keyframes kb-eat{${chew(0, 36, 150, 126)}39%,55%{transform:rotate(-15deg)}${flail(57, 93, -60, -25)}95%,100%{transform:rotate(-15deg)}}
.kb-eat{animation:kb-eat 9s ease-in-out infinite}
@keyframes kb-armL{0%,55%{transform:rotate(15deg)}${flail(57, 93, 50, 20)}95%,100%{transform:rotate(15deg)}}
.kb-armL{animation:kb-armL 9s ease-in-out infinite}
@keyframes kb-slicewin{0%,36%{opacity:1}38%,99%{opacity:0}100%{opacity:1}}
.kb-slicewin{animation:kb-slicewin 9s linear infinite}
@keyframes kb-bliss{0%,37%{opacity:1}38%,99%{opacity:0}100%{opacity:1}}
.kb-bliss{animation:kb-bliss 9s linear infinite}
@keyframes kb-sad{0%,37%{opacity:0}38%,55%{opacity:1}56%,100%{opacity:0}}
.kb-sad{animation:kb-sad 9s linear infinite}
@keyframes kb-chatterface{0%,55%{opacity:0}56%,99%{opacity:1}100%{opacity:0}}
.kb-chatterface{animation:kb-chatterface 9s linear infinite}
@keyframes kb-move{0%,42%{transform:translate(-156px,38px)}44%{transform:translate(-140px,26px)}46%{transform:translate(-115px,38px)}48%{transform:translate(-88px,24px)}50%{transform:translate(-58px,32px)}52%{transform:translate(-25px,-16px)}54%{transform:translate(0px,-5px)}56%,94%{transform:translate(0px,0px)}97%{transform:translate(-80px,-110px)}100%{transform:translate(-156px,38px)}}
.kb-move{animation:kb-move 9s ease-in-out infinite}
${jitter("kb-shake", 56, 94, 3, 3)}
.kb-shake{animation:kb-shake 9s linear infinite}
${jitter("kb-quake", 56, 94, 4, 1.4)}
.kb-quake{animation:kb-quake 9s linear infinite}
@keyframes kb-turb{0%,56%{transform:translateY(0px) rotate(0deg)}58%,62%,66%,70%,74%,78%,82%,86%,90%{transform:translateY(-7px) rotate(-8deg)}60%,64%,68%,72%,76%,80%,84%,88%,92%{transform:translateY(0px) rotate(6deg)}94%,100%{transform:translateY(0px) rotate(0deg)}}
.kb-turb{animation:kb-turb 9s linear infinite}
@keyframes kb-jaw{0%,100%{transform:translateY(0px)}50%{transform:translateY(2.5px)}}
.kb-jaw{animation:kb-jaw .12s linear infinite}
@keyframes kb-drop{0%,36%{transform:translateY(-330px)}40%{transform:translateY(0px)}42%{transform:translateY(-16px)}44%,95%{transform:translateY(0px)}100%{transform:translateY(-330px)}}
.kb-drop{animation:kb-drop 9s ease-in infinite}
@keyframes kb-pile{0%{transform:scale(.25)}36%,96%{transform:scale(1)}100%{transform:scale(.25)}}
.kb-pile{animation:kb-pile 9s ease-out infinite}
@keyframes kb-m1{0%,9%{opacity:1}10%,98%{opacity:0}100%{opacity:1}}
@keyframes kb-m2{0%,17%{opacity:1}18%,98%{opacity:0}100%{opacity:1}}
@keyframes kb-m3{0%,25%{opacity:1}26%,98%{opacity:0}100%{opacity:1}}
.kb-m1{animation:kb-m1 9s linear infinite}
.kb-m2{animation:kb-m2 9s linear infinite}
.kb-m3{animation:kb-m3 9s linear infinite}
@keyframes kb-needle{0%,56%{transform:rotate(-70deg)}60%{transform:rotate(72deg)}62%,66%,70%,74%,78%,82%,86%,90%{transform:rotate(58deg)}64%,68%,72%,76%,80%,84%,88%,92%{transform:rotate(76deg)}96%,100%{transform:rotate(-70deg)}}
.kb-needle{animation:kb-needle 9s ease-in-out infinite}
@keyframes kb-lines{0%,56%{opacity:0}58%,61%,65%,69%,73%,77%,81%,85%,89%,93%{opacity:1}59%,63%,67%,71%,75%,79%,83%,87%,91%{opacity:.3}94%,100%{opacity:0}}
.kb-lines{animation:kb-lines 9s linear infinite}
@keyframes kb-thud{0%,39%{transform:scale(0);opacity:0}41%{transform:scale(1.2);opacity:1}48%,100%{transform:scale(1.6);opacity:0}}
.kb-thud{animation:kb-thud 9s ease-out infinite}
@keyframes kb-heart{0%{transform:translate(0px,0px) scale(.4);opacity:0}10%{opacity:1}30%,100%{transform:translate(-6px,-34px) scale(1.1);opacity:0}}
.kb-heart{animation:kb-heart 3s ease-out infinite}
@keyframes kb-heartwin{0%,36%{opacity:1}38%,100%{opacity:0}}
.kb-heartwin{animation:kb-heartwin 9s linear infinite}
@keyframes kb-brrr{0%,57%{transform:scale(0)}60%{transform:scale(1.2)}62%,92%{transform:scale(1)}94%,100%{transform:scale(0)}}
.kb-brrr{animation:kb-brrr 9s ease-out infinite}
@keyframes kb-b1{0%,4%{transform:scale(0)}7%{transform:scale(1.1)}9%,34%{transform:scale(1)}37%,100%{transform:scale(0)}}
.kb-b1{animation:kb-b1 9s ease-out infinite}
@keyframes kb-b2{0%,44%{transform:scale(0)}46%{transform:scale(1.1)}48%,54%{transform:scale(1)}56%,100%{transform:scale(0)}}
.kb-b2{animation:kb-b2 9s ease-out infinite}
.kb-nohead{display:none}
`;

function Melon({ x, y, s = 1, className }: { x: number; y: number; s?: number; className?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className={className}>
        <ellipse cx="0" cy="0" rx="14" ry="9.5" fill={MELON} stroke={INK} strokeWidth={1.8} />
        <path d="M-10 -5 Q-4 0 -9 6 M-3 -9 Q3 -2 -2 9 M5 -8 Q10 0 6 8 M-12 1 Q0 -3 12 1 M-10 5 Q0 2 10 5 M-9 -4 Q0 -7 9 -4" fill="none" stroke={MELON_NET} strokeWidth={1} />
        <path d="M13 -2 q4 -2 5 -5" fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
      </g>
    </g>
  );
}

function Rind({ x, y, r = 0 }: { x: number; y: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <path d="M-10 0 Q0 -10 10 0 Q0 -5 -10 0Z" fill={RIND} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <path d="M-8 -1 Q0 -6 8 -1" fill="none" stroke={FLESH} strokeWidth={1.2} />
    </g>
  );
}

function BlissFace() {
  return (
    <g>
      <ellipse cx="0" cy="0" rx="13" ry="15" fill={SKIN} {...inked} />
      <path d="M-9 -1 Q-5 -6 -1 -1 M1 -1 Q5 -6 9 -1" fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
      <path d="M-10 -8 Q-5 -12 -1 -8 M1 -8 Q5 -12 10 -8" fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
      <path d="M0 -1 Q-2 4 1 5" fill="none" stroke={INK} strokeWidth={1.2} />
      <circle cx="-8" cy="5" r="3.2" fill="#e58a7a" opacity=".75" />
      <circle cx="8" cy="5" r="3.2" fill="#e58a7a" opacity=".75" />
      <path d="M-6 7 Q0 15 6 7Z" fill={C.pomegranate} stroke={INK} strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M5 9 q1 4 -1 6" fill="none" stroke={FLESH} strokeWidth={1.8} strokeLinecap="round" />
    </g>
  );
}

function ChatterFace() {
  return (
    <g>
      <ellipse cx="0" cy="0" rx="13" ry="15" fill={SKIN} {...inked} />
      <circle cx="-5" cy="-2" r="4" fill={C.white} stroke={INK} strokeWidth={1.3} />
      <circle cx="5" cy="-2" r="4" fill={C.white} stroke={INK} strokeWidth={1.3} />
      <circle cx="-5" cy="-2" r="1.3" fill={INK} />
      <circle cx="5" cy="-2" r="1.3" fill={INK} />
      <path d="M-10 -9 L-2 -7 M2 -7 L10 -9" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      <path d="M0 0 Q-2 4 1 5" fill="none" stroke={INK} strokeWidth={1.2} />
      <rect x="-6" y="6" width="12" height="4" fill={C.white} stroke={INK} strokeWidth={1.2} />
      <path d="M-2 6 V10 M2 6 V10" stroke={INK} strokeWidth={.9} />
      <g className="kb-jaw">
        <rect x="-6" y="10" width="12" height="4" fill={C.white} stroke={INK} strokeWidth={1.2} />
        <path d="M-2 10 V14 M2 10 V14" stroke={INK} strokeWidth={.9} />
      </g>
      <circle cx="-9" cy="6" r="2.4" fill="#9fc7e8" opacity=".7" />
      <circle cx="9" cy="6" r="2.4" fill="#9fc7e8" opacity=".7" />
    </g>
  );
}

function ChairBack() {
  return (
    <g>
      <path d="M228 214 V132 Q228 102 252 98 Q275 80 298 98 Q322 102 322 132 V214Z" fill={C.saffron} {...inked} />
      <path d="M238 206 V136 Q238 112 256 108 Q275 94 294 108 Q312 112 312 136 V206Z" fill={C.lapis} stroke={INK} strokeWidth={1.8} />
      <path d="M244 200 V140 Q244 120 258 116 Q275 104 292 116 Q306 120 306 140 V200Z" fill="none" stroke={C.firouzeh} strokeWidth={2} strokeDasharray="4 3" />
      <Star8 x={275} y={150} r={14} fill={C.saffron} />
      <Star8 x={275} y={150} r={6} fill={C.pomegranate} />
      <g fill={C.cream} stroke={INK} strokeWidth={1}>
        <circle cx="252" cy="186" r="3" /><circle cx="298" cy="186" r="3" /><circle cx="275" cy="190" r="3" />
      </g>
      <rect x="238" y="72" width="74" height="22" rx="4" fill={C.cream} {...inked} strokeWidth={2} />
      <text x="275" y="87.5" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="11.5" fill={C.pomegranate} direction="rtl">صندلی لرز</text>
      <path d="M238 83 l-6 -4 M312 83 l6 -4" stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Star8 x={226} y={77} r={5} fill={C.pomegranate} />
      <Star8 x={324} y={77} r={5} fill={C.pomegranate} />
      <circle cx="275" cy="64" r="5" fill={C.pomegranate} {...inked} strokeWidth={2} />
    </g>
  );
}

function ChairFront() {
  return (
    <g>
      <g fill="none" stroke={INK} strokeWidth={2.6} strokeLinejoin="round">
        <path d="M236 246 l6 3 l-12 3 l12 3 l-6 3" />
        <path d="M262 246 l6 3 l-12 3 l12 3 l-6 3" />
        <path d="M290 246 l6 3 l-12 3 l12 3 l-6 3" />
        <path d="M316 246 l6 3 l-12 3 l12 3 l-6 3" />
      </g>
      <rect x="216" y="170" width="16" height="54" rx="6" fill={C.terracotta} {...inked} />
      <rect x="318" y="170" width="16" height="54" rx="6" fill={C.terracotta} {...inked} />
      <circle cx="224" cy="170" r="7" fill={C.saffron} {...inked} strokeWidth={2} />
      <circle cx="326" cy="170" r="7" fill={C.saffron} {...inked} strokeWidth={2} />
      <path d="M222 214 Q275 202 328 214 L328 224 Q275 216 222 224Z" fill={C.pomegranate} {...inked} />
      <rect x="226" y="222" width="98" height="24" rx="3" fill={C.saffron} {...inked} />
      <path d="M232 228 h86 v12 h-86Z" fill="none" stroke={C.pomegranate} strokeWidth={1.6} />
      <g fill={C.turquoise} stroke={INK} strokeWidth={1}>
        <circle cx="244" cy="234" r="3" /><circle cx="262" cy="234" r="3" /><circle cx="288" cy="234" r="3" /><circle cx="306" cy="234" r="3" />
      </g>
      <Star8 x={275} y={234} r={5} fill={C.pomegranate} />
      <path d="M334 186 H342" stroke={INK} strokeWidth={3} />
      <circle cx="350" cy="182" r="14" fill={C.white} {...inked} />
      <path d="M340 186 A10 10 0 0 1 360 186" fill="none" stroke={C.olive} strokeWidth={3} />
      <path d="M354 176 A10 10 0 0 1 360 186" fill="none" stroke={C.pomegranate} strokeWidth={3} />
      <g transform="translate(350 186)">
        <g className="kb-needle" style={{ transformOrigin: "0px 0px", transformBox: "view-box" }}>
          <path d="M0 0 L0 -10" stroke={INK} strokeWidth={2} strokeLinecap="round" />
        </g>
      </g>
      <circle cx="350" cy="186" r="2" fill={INK} />
      <text x="350" y="194" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="5" fill={INK} direction="rtl">ریشتر</text>
    </g>
  );
}

export default function Kharboze({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="هر که خربزه می‌خوره، پای لرزش هم می‌شینه" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#f2d07a" />
      <circle cx="56" cy="46" r="18" fill={C.white} {...inked} />
      <path d="M56 20 V14 M56 78 V72 M30 46 H24 M88 46 H82" stroke={INK} strokeWidth={2} strokeLinecap="round" />

      <rect x="-10" y="150" width="420" height="108" fill="#d99a6a" {...inked} />
      <rect x="-10" y="150" width="420" height="14" fill={C.turquoise} {...inked} strokeWidth={2} />
      {Array.from({ length: 11 }, (_, i) => <Star8 key={i} x={i * 40} y={157} r={5} fill={C.saffron} />)}
      {[30, 130, 330].map((x) => (
        <path key={x} d={`M${x} 258 V206 Q${x} 182 ${x + 24} 176 Q${x + 48} 182 ${x + 48} 206 V258Z`} fill="#b97a50" stroke={INK} strokeWidth={2} />
      ))}

      <Ground y={255} color={C.sand} />
      <path d="M140 272 q8 -5 16 0 M300 280 q8 -5 16 0 M40 284 q8 -5 16 0" fill="none" stroke={INK} strokeWidth={1.2} opacity=".5" />

      <path d="M24 226 L8 236 M110 222 L118 226" stroke={INK} strokeWidth={3} strokeLinecap="round" />
      <path d="M30 214 L112 214 L106 240 L36 240Z" fill="#a0703f" {...inked} />
      <path d="M38 222 H104 M40 232 H102" stroke="#7d5330" strokeWidth={1.5} />
      <circle cx="52" cy="248" r="11" fill="#7d5330" {...inked} />
      <circle cx="52" cy="248" r="3" fill={C.saffron} stroke={INK} strokeWidth={1.4} />
      <circle cx="94" cy="248" r="11" fill="#7d5330" {...inked} />
      <circle cx="94" cy="248" r="3" fill={C.saffron} stroke={INK} strokeWidth={1.4} />
      <Melon x={46} y={206} />
      <Melon x={71} y={207} />
      <Melon x={96} y={206} />
      <Melon x={58} y={192} className="kb-m3" />
      <Melon x={84} y={192} className="kb-m2" />
      <Melon x={71} y={178} className="kb-m1" />

      <g transform="translate(196 258)">
        <g className="kb-pile o-bottom">
          <Rind x={-16} y={-3} r={-10} /><Rind x={2} y={-2} r={6} /><Rind x={18} y={-3} r={14} />
          <Rind x={-8} y={-9} r={-20} /><Rind x={10} y={-10} r={8} /><Rind x={0} y={-16} r={-4} />
          <Rind x={-14} y={-14} r={30} /><Rind x={14} y={-18} r={-24} />
        </g>
      </g>

      <g className="kb-drop">
        <g className="kb-quake o-bottom"><ChairBack /></g>
      </g>

      <g transform="translate(275 228) scale(.8)">
        <g className="kb-move">
          <g className="kb-shake o-bottom">
            <Person robe={C.olive} sash={C.pomegranate} headClass="kb-nohead" armR={-15} armL={15} armRClass="kb-eat" armLClass="kb-armL">
              <g className="kb-slicewin" style={{ opacity: 0 }}>
                <g className="kb-eat" style={{ transformOrigin: "12px -54px", transformBox: "view-box" }}>
                  <path d="M8 -24 Q16 -40 30 -28 Q18 -30 8 -24Z" fill={FLESH} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
                  <path d="M8 -24 Q16 -40 30 -28" fill="none" stroke={RIND} strokeWidth={3} strokeLinecap="round" />
                  <path d="M14 -31 l1.5 1 M20 -33 l1 1.5" stroke={INK} strokeWidth={1} strokeLinecap="round" />
                </g>
              </g>
              <g transform="translate(0 -74)">
                <g className="kb-bliss" style={{ opacity: 0 }}><BlissFace /></g>
                <g className="kb-sad" style={{ opacity: 0 }}><Face mood="sad" /></g>
                <g className="kb-chatterface"><ChatterFace /></g>
                <g className="kb-turb o-bottom"><Turban color={C.cream} /></g>
              </g>
            </Person>
          </g>
        </g>
      </g>

      <g className="kb-drop">
        <g className="kb-quake o-bottom"><ChairFront /></g>
      </g>

      <g className="kb-lines" fill="none" stroke={INK} strokeWidth={2.2} strokeLinecap="round">
        <path d="M208 120 q-8 12 0 24 M200 112 q-12 20 0 40 M208 196 q-8 12 0 24" />
        <path d="M368 120 q8 12 0 24 M376 112 q12 20 0 40 M370 210 q8 12 0 24" />
        <path d="M262 262 h-14 M300 262 h14 M250 268 h-20 M310 268 h20" />
      </g>
      <g transform="translate(222 140)">
        <text className="kb-brrr" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="13" fill={C.lapis} stroke={INK} strokeWidth={.6} direction="rtl">ب‌ب‌ب‌ب</text>
      </g>

      <g className="kb-heartwin" style={{ opacity: 0 }}>
        {[0, -1, -2].map((d, i) => (
          <g key={i} transform={`translate(${136 + i * 10} 188)`}>
            <path className="kb-heart" style={{ animationDelay: `${d}s` }} d="M0 2 Q-6 -4 -3 -6 Q0 -7 0 -4 Q0 -7 3 -6 Q6 -4 0 2Z" fill={C.pomegranate} stroke={INK} strokeWidth={1} />
          </g>
        ))}
      </g>

      <g transform="translate(275 252)">
        <g className="kb-thud" style={{ transform: "scale(0)" }}><Star8 r={22} fill={C.white} /></g>
      </g>

      {big && (
        <g>
          <Bubble x={160} y={172} w={60} text="به به!" className="kb-b1 o-bottom" style={{ transform: "scale(0)" }} />
          <Bubble x={250} y={66} w={70} text="ای بابا..." className="kb-b2 o-bottom" style={{ transform: "scale(0)" }} />
        </g>
      )}
    </Scene>
  );
}
