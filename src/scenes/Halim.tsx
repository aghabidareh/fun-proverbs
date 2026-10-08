import { Scene, Person, Face, Turban, Ground, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const HALIM = "#d9b88a";
const CINNAMON = "#8a4b22";
const COPPER = "#b8743a";
const COPPER_DK = "#8e5426";

function bobKeys() {
  const fr = ["0%,14%{transform:translateY(0px)}"];
  for (let t = 15, i = 0; t < 27; t += 1, i++) fr.push(`${t}%{transform:translateY(${i % 2 ? 0 : -5}px)}`);
  fr.push("27%,100%{transform:translateY(0px)}");
  return `@keyframes hl-bob{${fr.join("")}}`;
}

const CSS = `
${bobKeys()}
.hl-bob{animation:hl-bob 8s linear infinite}
@keyframes hl-run{0%,14%{transform:translate(0px,0px) rotate(0deg);opacity:1}16%{transform:translate(8px,0px) rotate(0deg);opacity:1}26%{transform:translate(80px,0px) rotate(6deg);opacity:1}30%{transform:translate(122px,-118px) rotate(30deg);opacity:1}34%{transform:translate(160px,-122px) rotate(100deg);opacity:1}38%{transform:translate(178px,-70px) rotate(175deg);opacity:1}40%{transform:translate(180px,-40px) rotate(180deg);opacity:1}41%{transform:translate(180px,-30px) rotate(180deg);opacity:0}42%,97%{transform:translate(0px,0px) rotate(0deg);opacity:0}100%{transform:translate(0px,0px) rotate(0deg);opacity:1}}
.hl-run{animation:hl-run 8s ease-in-out infinite}
@keyframes hl-reachR{0%,12%{transform:rotate(-15deg)}15%,40%{transform:rotate(-115deg)}44%,100%{transform:rotate(-15deg)}}
@keyframes hl-reachL{0%,12%{transform:rotate(15deg)}15%,40%{transform:rotate(-60deg)}44%,100%{transform:rotate(15deg)}}
.hl-reachR{animation:hl-reachR 8s ease-in-out infinite}
.hl-reachL{animation:hl-reachL 8s ease-in-out infinite}
@keyframes hl-hearts{0%,7%{transform:scale(0);opacity:0}9%{transform:scale(1.5);opacity:1}11%{transform:scale(1);opacity:1}13%{transform:scale(1.3);opacity:1}15%{transform:scale(1);opacity:1}40%{transform:scale(1);opacity:1}41%,100%{transform:scale(0);opacity:0}}
.hl-hearts{animation:hl-hearts 8s ease-out infinite}
@keyframes hl-beckon{0%{opacity:0;transform:scaleX(.3)}4%{opacity:.9;transform:scaleX(1)}7%{opacity:.9;transform:scaleX(.88)}10%{opacity:.9;transform:scaleX(1)}13%{opacity:.9;transform:scaleX(.9)}16%,100%{opacity:0;transform:scaleX(1)}}
.hl-beckon{animation:hl-beckon 8s ease-in-out infinite}
@keyframes hl-bang{0%,6%{transform:scale(0)}8%{transform:scale(1.4)}10%,14%{transform:scale(1)}16%,100%{transform:scale(0)}}
.hl-bang{animation:hl-bang 8s ease-out infinite}
@keyframes hl-splash{0%,38%{transform:scale(0);opacity:0}40%{transform:scale(.6);opacity:1}44%{transform:scale(1.3);opacity:1}49%,100%{transform:scale(1.5);opacity:0}}
.hl-splash{animation:hl-splash 8s ease-out infinite}
@keyframes hl-legs{0%,40%{transform:translateY(24px);opacity:0}42%{transform:translateY(-4px);opacity:1}44%,52%{transform:translateY(0px);opacity:1}55%,100%{transform:translateY(24px);opacity:0}}
.hl-legs{animation:hl-legs 8s ease-out infinite}
@keyframes hl-kick{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}
.hl-kick{animation:hl-kick .22s ease-in-out infinite}
@keyframes hl-sit{0%,55%{transform:translateY(50px);opacity:0}58%{transform:translateY(-6px);opacity:1}61%,95%{transform:translateY(0px);opacity:1}97%,100%{transform:translateY(50px);opacity:0}}
.hl-sit{animation:hl-sit 8s ease-out infinite}
@keyframes hl-q{0%,63%{transform:scale(0)}66%{transform:scale(1.3)}69%,93%{transform:scale(1)}95%,100%{transform:scale(0)}}
.hl-q{animation:hl-q 8s ease-out infinite}
@keyframes hl-cookArm{0%,70%{transform:rotate(15deg)}73%{transform:rotate(140deg)}76%{transform:rotate(118deg)}79%{transform:rotate(140deg)}82%{transform:rotate(118deg)}85%{transform:rotate(140deg)}88%,100%{transform:rotate(15deg)}}
.hl-cookArm{animation:hl-cookArm 8s ease-in-out infinite}
@keyframes hl-cin{0%,72%{transform:translate(0px,0px);opacity:0}73%{transform:translate(0px,0px);opacity:1}78%{transform:translate(-40px,-72px);opacity:1}84%{transform:translate(-76px,-62px);opacity:1}86%,100%{transform:translate(-76px,-62px);opacity:0}}
.hl-cin{animation:hl-cin 8s ease-in-out infinite}
@keyframes hl-cpile{0%,78%{transform:scale(1)}84%,100%{transform:scale(1.5)}}
.hl-cpile{animation:hl-cpile 8s ease-out infinite}
@keyframes hl-calm{0%,38%{opacity:1}40%,52%{opacity:0}54%,100%{opacity:1}}
.hl-calm{animation:hl-calm 8s linear infinite}
@keyframes hl-shock{0%,38%{opacity:0}40%,52%{opacity:1}54%,100%{opacity:0}}
.hl-shock{animation:hl-shock 8s linear infinite}
@keyframes hl-steam{0%{transform:translateY(6px) scaleY(.8);opacity:0}25%{opacity:.85}100%{transform:translateY(-40px) scaleY(1.2);opacity:0}}
.hl-steam{animation:hl-steam 2.6s ease-out infinite}
@keyframes hl-flame{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.3)}}
.hl-flame{animation:hl-flame .5s ease-in-out infinite}
@keyframes hl-ripple{0%{transform:scale(.6);opacity:.8}100%{transform:scale(1.4);opacity:0}}
.hl-ripple{animation:hl-ripple 1.8s ease-out infinite}
@keyframes hl-sign{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}
.hl-sign{animation:hl-sign 3s ease-in-out infinite}
@keyframes hl-say{0%,73%{transform:scale(0);opacity:0}75%{transform:scale(1.1);opacity:1}77%,92%{transform:scale(1);opacity:1}94%,100%{transform:scale(0);opacity:0}}
.hl-say{animation:hl-say 8s ease-out infinite}
@keyframes hl-sfx{0%,39%{transform:scale(0);opacity:0}41%{transform:scale(1.3);opacity:1}44%,48%{transform:scale(1);opacity:1}51%,100%{transform:scale(1.2);opacity:0}}
.hl-sfx{animation:hl-sfx 8s ease-out infinite}
.hl-nohead{display:none}
`;

const HEART = "M0 3 C-6 -2 -5 -7 -2 -7 C-1 -7 0 -6 0 -5 C0 -6 1 -7 2 -7 C5 -7 6 -2 0 3Z";

export default function Halim({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="از هول حلیم افتاد توی دیگ" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#f0d3a0" />
      <rect x="-10" y="30" width="420" height="12" fill={C.turquoise} stroke={INK} strokeWidth={2} />
      {Array.from({ length: 11 }, (_, i) => (
        <Star8 key={i} x={10 + i * 40} y={36} r={4} fill={C.saffron} />
      ))}
      <path d="M150 262 V120 Q150 92 180 84 Q210 92 210 120 V262Z" fill="#e2b57c" {...inked} />
      <path d="M160 262 V126 Q160 104 180 98 Q200 104 200 126 V262" fill="none" stroke={C.terracotta} strokeWidth={2} strokeDasharray="3 4" />
      <path d="M330 262 V120 Q330 92 360 84 Q390 92 390 120 V262Z" fill="#e2b57c" {...inked} />

      <path d="M70 42 V62 M130 42 V62" stroke={INK} strokeWidth={1.6} />
      <g className="hl-sign o-top">
        <rect x="60" y="62" width="80" height="30" rx="4" fill="#8a5a34" {...inked} />
        <rect x="65" y="66" width="70" height="22" rx="3" fill="none" stroke={C.saffron} strokeWidth={1.4} />
        <text x="100" y="83" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="15" fill={C.cream} direction="rtl">حلیم</text>
      </g>

      <Ground y={262} color="#c9a070" />
      <path d="M20 280 q8 -5 16 0 M380 284 q8 -5 16 0" fill="none" stroke={INK} strokeWidth={1.2} opacity=".5" />

      {[206, 226, 274, 294].map((x, i) => (
        <path key={x} className="hl-flame o-bottom" style={{ animationDelay: `${-i * .12}s` }} d={`M${x - 9} 264 Q${x - 9} 248 ${x} 238 Q${x + 9} 248 ${x + 9} 264Z`} fill={i % 2 ? C.saffron : C.terracotta} {...inked} strokeWidth={1.6} />
      ))}
      <rect x="192" y="260" width="116" height="20" fill="#9a5a3e" {...inked} strokeWidth={2} />
      <path d="M192 270 H308 M220 260 V270 M250 270 V280 M280 260 V270" stroke={INK} strokeWidth={1.2} />

      {[0, -.9, -1.7].map((d, i) => (
        <g key={i} transform={`translate(${226 + i * 24} 150)`}>
          <path className="hl-steam" style={{ animationDelay: `${d}s` }} d="M0 0 Q-6 -8 0 -16 Q6 -24 0 -32" fill="none" stroke={C.white} strokeWidth={3} strokeLinecap="round" />
        </g>
      ))}
      <path className="hl-beckon o-right" style={{ opacity: 0 }} d="M226 150 Q190 118 160 148 Q140 168 118 158 Q110 152 116 146 Q122 142 124 148" fill="none" stroke={C.white} strokeWidth={4} strokeLinecap="round" />

      <ellipse cx="250" cy="168" rx="72" ry="16" fill={COPPER_DK} {...inked} />
      <ellipse cx="250" cy="169" rx="64" ry="12" fill={HALIM} {...inked} strokeWidth={2} />
      <path d="M206 168 q10 -5 20 0 t20 0 M258 172 q10 -5 20 0 t16 0" fill="none" stroke="#b8925e" strokeWidth={1.6} />
      <g fill={CINNAMON}>
        <circle cx="222" cy="164" r="1.4" /><circle cx="236" cy="172" r="1.4" /><circle cx="270" cy="164" r="1.4" /><circle cx="286" cy="171" r="1.4" /><circle cx="214" cy="172" r="1.2" /><circle cx="296" cy="165" r="1.2" />
      </g>
      <path d="M232 166 Q250 158 268 166 Q250 174 232 166Z" fill="none" stroke={CINNAMON} strokeWidth={1.4} strokeDasharray="2 3" />
      <ellipse className="hl-ripple" cx="250" cy="170" rx="30" ry="5" fill="none" stroke="#b8925e" strokeWidth={1.4} />

      <g transform="translate(252 168)">
        <g className="hl-legs" style={{ opacity: 0 }}>
          <path d="M-14 4 Q0 -6 14 4 Q0 10 -14 4Z" fill={C.terracotta} {...inked} strokeWidth={2} />
          <g className="hl-kick o-bottom">
            <path d="M-5 0 L-8 -26" stroke={INK} strokeWidth={6} strokeLinecap="round" />
            <path d="M-5 0 L-8 -26" stroke="#5a3a2a" strokeWidth={3} strokeLinecap="round" />
            <path d="M-14 -28 Q-14 -34 -6 -34 L-4 -28Z" fill={C.pomegranate} {...inked} strokeWidth={1.6} />
          </g>
          <g className="hl-kick o-bottom" style={{ animationDelay: "-.11s" }}>
            <path d="M5 0 L9 -25" stroke={INK} strokeWidth={6} strokeLinecap="round" />
            <path d="M5 0 L9 -25" stroke="#5a3a2a" strokeWidth={3} strokeLinecap="round" />
            <path d="M4 -27 L6 -33 Q14 -33 15 -27Z" fill={C.pomegranate} {...inked} strokeWidth={1.6} />
          </g>
        </g>
      </g>

      <g className="hl-sit">
        <path d="M278 172 L284 142" stroke={INK} strokeWidth={4.5} strokeLinecap="round" />
        <path d="M278 172 L284 142" stroke="#c89a5c" strokeWidth={2} strokeLinecap="round" />
        <ellipse cx="285" cy="135" rx="5" ry="7" fill="#c89a5c" {...inked} strokeWidth={1.8} />
        <g transform="translate(250 222) scale(.8)">
          <Person robe={C.terracotta} sash={C.saffron} hat={C.white} mood="serious" armL={50} armR={-110} />
          <path d="M-20 -60 Q-10 -66 -2 -58 Q-8 -52 -20 -60Z M6 -58 Q14 -64 22 -56 Q14 -50 6 -58Z" fill={HALIM} {...inked} strokeWidth={1.6} />
          <g transform="translate(0 -96)">
            <g className="hl-cpile o-bottom">
              <path d="M-9 2 Q0 -10 9 2Z" fill={CINNAMON} {...inked} strokeWidth={1.4} />
            </g>
          </g>
          <g fill={CINNAMON}>
            <circle cx="-8" cy="-90" r="1.2" /><circle cx="7" cy="-88" r="1.2" /><circle cx="-3" cy="-84" r="1" /><circle cx="11" cy="-94" r="1" />
          </g>
          <path d="M-4 -60 q2 6 0 9 q-2 -3 0 -9Z" fill={HALIM} stroke={INK} strokeWidth={1} />
        </g>
      </g>

      <g transform="translate(70 280)">
        <g className="hl-run" style={{ opacity: 0 }}>
          <g transform="scale(.8)">
            <g className="hl-bob">
              <Person robe={C.terracotta} sash={C.saffron} hat={C.white} mood="shocked" armL={15} armR={-15} armLClass="hl-reachL" armRClass="hl-reachR">
                <g className="hl-hearts" style={{ opacity: 0 }}>
                  <path transform="translate(-5 -74)" d={HEART} fill={C.pomegranate} stroke={INK} strokeWidth={1} />
                  <path transform="translate(5 -74)" d={HEART} fill={C.pomegranate} stroke={INK} strokeWidth={1} />
                  <path d="M3 -63 q2 5 0 8 q-2 -3 0 -8Z" fill="#9fd8ef" stroke={INK} strokeWidth={1} />
                </g>
              </Person>
            </g>
          </g>
        </g>
      </g>

      <path d="M178 168 A72 16 0 0 0 322 168 Q328 240 290 258 L210 258 Q172 240 178 168Z" fill={COPPER} {...inked} />
      <path d="M182 196 Q250 214 318 196" fill="none" stroke={COPPER_DK} strokeWidth={4} />
      <path d="M186 222 Q250 238 314 222" fill="none" stroke={COPPER_DK} strokeWidth={2.5} />
      <g fill={C.saffron} stroke={INK} strokeWidth={1}>
        <circle cx="200" cy="206" r="2" /><circle cx="226" cy="212" r="2" /><circle cx="274" cy="212" r="2" /><circle cx="300" cy="206" r="2" />
      </g>
      <Star8 x={250} y={232} r={7} fill={C.turquoise} />

      <g transform="translate(250 164)">
        <g className="hl-splash" style={{ opacity: 0 }}>
          {[[-40, -10, 6], [42, -14, 5], [-24, -36, 5], [22, -40, 6], [0, -50, 5], [-56, 6, 4], [58, 4, 4]].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill={HALIM} {...inked} strokeWidth={1.6} />
          ))}
        </g>
      </g>

      {[0, -.12, -.25, -.36].map((d, i) => (
        <g key={i} transform={`translate(${328 + (i % 2) * 4} ${208 - i * 2})`}>
          <circle className="hl-cin" style={{ opacity: 0, animationDelay: `${d}s` }} r="1.8" fill={CINNAMON} stroke={INK} strokeWidth={.6} />
        </g>
      ))}

      <g transform="translate(354 282) scale(.85)">
        <Person robe={C.cream} sash={C.pomegranate} headClass="hl-nohead" armL={15} armR={-20} armLClass="hl-cookArm" beard />
        <g transform="translate(0 -74)">
          <path d="M-11 4 Q-12 20 0 24 Q12 20 11 4 Q0 12 -11 4Z" fill={INK} />
          <g className="hl-calm"><Face mood="serious" /></g>
          <g className="hl-shock" style={{ opacity: 0 }}><Face mood="shocked" /></g>
          <Turban color={C.white} kind="kolah" />
        </g>
      </g>

      <g transform="translate(70 168)">
        <text className="hl-bang" style={{ transform: "scale(0)" }} x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="24" fill={C.pomegranate} stroke={INK} strokeWidth={1}>!</text>
      </g>
      <g transform="translate(236 126)">
        <text className="hl-q" style={{ transform: "scale(0)" }} x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="20" fill={C.lapis} stroke={INK} strokeWidth={1}>؟</text>
      </g>

      {big && (
        <>
          <g transform="translate(250 104)">
            <text className="hl-sfx" style={{ opacity: 0 }} x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="24" fill={C.saffron} stroke={INK} strokeWidth={1.3} direction="rtl">شَلَپ!</text>
          </g>
          <Bubble x={356} y={170} w={92} text="شکرم بریزم؟" flip className="hl-say o-bottom" style={{ opacity: 0 }} />
        </>
      )}
    </Scene>
  );
}
