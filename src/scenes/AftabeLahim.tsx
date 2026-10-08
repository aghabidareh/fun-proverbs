import type { CSSProperties } from "react";
import { Scene, Person, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const STEEL = "#8d99a6";
const STEEL_LT = "#b9c3cc";
const COPPER = "#c87533";
const COPPER_DK = "#9a5524";
const WATER = "#7cc4e0";
const SCREEN = "#16323a";
const GLOW = "#7ff0c9";

const CSS = `
@keyframes al-arm1{0%{transform:rotate(-10deg)}8%{transform:rotate(6deg)}16%{transform:rotate(-14deg)}24%{transform:rotate(8deg)}32%{transform:rotate(-6deg)}38%,60%{transform:rotate(0deg)}70%{transform:rotate(-12deg)}85%{transform:rotate(4deg)}100%{transform:rotate(-10deg)}}
.al-arm1{animation:al-arm1 8s ease-in-out infinite}
@keyframes al-arm2{0%{transform:rotate(14deg)}8%{transform:rotate(-12deg)}16%{transform:rotate(10deg)}24%{transform:rotate(-16deg)}32%{transform:rotate(6deg)}38%,46%{transform:rotate(0deg)}47%{transform:rotate(-3deg)}49%,60%{transform:rotate(0deg)}70%{transform:rotate(16deg)}85%{transform:rotate(-8deg)}100%{transform:rotate(14deg)}}
.al-arm2{animation:al-arm2 8s ease-in-out infinite}
@keyframes al-arm3{0%,100%{transform:rotate(8deg)}12%{transform:rotate(-10deg)}24%{transform:rotate(12deg)}36%,62%{transform:rotate(0deg)}80%{transform:rotate(-8deg)}}
.al-arm3{animation:al-arm3 8s ease-in-out infinite}
@keyframes al-arm4{0%,100%{transform:rotate(-14deg)}12%{transform:rotate(12deg)}24%{transform:rotate(-8deg)}36%,62%{transform:rotate(0deg)}80%{transform:rotate(14deg)}}
.al-arm4{animation:al-arm4 8s ease-in-out infinite}
@keyframes al-spin{to{transform:rotate(360deg)}}
@keyframes al-spinr{to{transform:rotate(-360deg)}}
.al-spin{animation:al-spin 3s linear infinite}
.al-spinr{animation:al-spinr 2s linear infinite}
@keyframes al-blink{0%,49%{opacity:1}50%,100%{opacity:.2}}
.al-blink{animation:al-blink .7s steps(1,end) infinite}
@keyframes al-needle{0%,100%{transform:rotate(-50deg)}20%{transform:rotate(40deg)}35%{transform:rotate(-20deg)}44%{transform:rotate(70deg)}55%{transform:rotate(10deg)}75%{transform:rotate(55deg)}}
.al-needle{animation:al-needle 2.6s ease-in-out infinite}
@keyframes al-wave{0%,100%{transform:translateX(-6px)}50%{transform:translateX(6px)}}
.al-wave{animation:al-wave .9s linear infinite}
@keyframes al-progress{0%{transform:scaleX(.02)}42%,100%{transform:scaleX(1)}}
.al-progress{animation:al-progress 8s ease-out infinite}
@keyframes al-txt1{0%,44%{opacity:1}46%,100%{opacity:0}}
.al-txt1{animation:al-txt1 8s linear infinite}
@keyframes al-txt2{0%,44%{opacity:0}46%,100%{opacity:1}}
.al-txt2{animation:al-txt2 8s linear infinite}
@keyframes al-press{0%,32%{transform:rotate(-15deg)}36%{transform:rotate(-112deg)}39%{transform:rotate(-70deg)}41%{transform:rotate(-80deg)}43%,58%{transform:rotate(-73deg)}63%,100%{transform:rotate(-15deg)}}
.al-press{animation:al-press 8s ease-in-out infinite}
@keyframes al-btn{0%,38.5%,46%,100%{transform:scaleY(1)}39.5%,44%{transform:scaleY(.45)}}
.al-btn{animation:al-btn 8s linear infinite}
@keyframes al-charge{0%,30%{transform:scale(0);opacity:0}32%{opacity:1}44%{transform:scale(2.4);opacity:1}46%,100%{transform:scale(0);opacity:0}}
.al-charge{animation:al-charge 8s ease-in infinite}
@keyframes al-beam{0%,43.5%{opacity:0}44%{opacity:1}44.6%{opacity:.4}45.2%{opacity:1}45.8%{opacity:.5}46.6%{opacity:1}47.4%,100%{opacity:0}}
.al-beam{animation:al-beam 8s linear infinite}
@keyframes al-spark{0%,46.5%{transform:scale(0) rotate(0deg);opacity:0}47.5%{transform:scale(1.4) rotate(30deg);opacity:1}50%,100%{transform:scale(0) rotate(70deg);opacity:0}}
.al-spark{animation:al-spark 8s ease-out infinite}
@keyframes al-chik{0%,47%{transform:scale(0);opacity:0}49%{transform:scale(1);opacity:1}56%,100%{transform:scale(1) translateY(-6px);opacity:0}}
.al-chik{animation:al-chik 8s ease-out infinite}
@keyframes al-beacon{0%,34%,52%,100%{opacity:.25}36%,40%,44%,48%{opacity:1}38%,42%,46%,50%{opacity:.25}}
.al-beacon{animation:al-beacon 8s linear infinite}
@keyframes al-tag{0%,53%{transform:scale(0) rotate(0deg)}56%{transform:scale(1.3) rotate(-12deg)}59%{transform:rotate(8deg) scale(1)}62%{transform:rotate(-5deg) scale(1)}65%,100%{transform:rotate(0deg) scale(1)}}
.al-tag{animation:al-tag 8s ease-out infinite}
@keyframes al-receipt{0%,57%{transform:scaleY(0)}90%,100%{transform:scaleY(1)}}
.al-receipt{animation:al-receipt 8s linear infinite}
@keyframes al-drop{0%{transform:translate(0px,0px) scale(.3);opacity:0}20%{transform:translate(0px,0px) scale(1);opacity:1}100%{transform:translate(2px,13px) scale(.8);opacity:0}}
.al-drop{animation:al-drop .9s ease-in infinite}
@keyframes al-turn{to{transform:translateX(-12px)}}
.al-turn{animation:al-turn .6s linear infinite}
@keyframes al-shake{0%,43%,50%,100%{transform:translate(0px,0px)}44%{transform:translate(-2px,1px)}45%{transform:translate(2px,-1px)}46%{transform:translate(-1px,1px)}47%{transform:translate(1px,0px)}}
.al-shake{animation:al-shake 8s linear infinite}
@keyframes al-b1{0%,34%{transform:scale(0)}36%{transform:scale(1.1)}38%,44%{transform:scale(1)}46%,100%{transform:scale(0)}}
.al-b1{animation:al-b1 8s ease-out infinite}
@keyframes al-b2{0%,62%{transform:scale(0)}65%{transform:scale(1.1)}67%,94%{transform:scale(1)}97%,100%{transform:scale(0)}}
.al-b2{animation:al-b2 8s ease-out infinite}
`;

function Aftabeh() {
  return (
    <g>
      <path d="M197 226 Q182 222 178 200 L174 194 L180 192 Q186 212 198 216" fill={COPPER} {...inked} strokeWidth={2} />
      <path d="M226 206 Q240 206 238 222 Q236 234 224 236" fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" />
      <path d="M226 206 Q240 206 238 222 Q236 234 224 236" fill="none" stroke={COPPER} strokeWidth={2.2} strokeLinecap="round" />
      <path d="M204 204 L203 198 L217 198 L216 204 Q228 210 228 226 Q228 244 210 244 Q192 244 192 226 Q192 210 204 204Z" fill={COPPER} {...inked} />
      <path d="M200 214 Q206 220 202 228 M214 232 q4 -3 8 0" fill="none" stroke={COPPER_DK} strokeWidth={1.6} strokeLinecap="round" />
      <path d="M197 218 q2 -6 6 -9" fill="none" stroke="#f0b27a" strokeWidth={2} strokeLinecap="round" />
      <path d="M201 198 Q210 186 219 198Z" fill={COPPER} {...inked} strokeWidth={2} />
      <circle cx="210" cy="188" r="2.6" fill={COPPER_DK} stroke={INK} strokeWidth={1.4} />
      <path d="M192 236 H228" stroke={COPPER_DK} strokeWidth={1.4} />
      <circle cx="221" cy="229" r="1.8" fill={INK} />
    </g>
  );
}

export default function AftabeLahim({ playing = true, big = false }: SceneProps) {
  const lights: [number, number, string, number][] = [];
  [C.pomegranate, GLOW, C.saffron, C.firouzeh].forEach((c, col) => {
    [0, 1, 2].forEach((row) => lights.push([26 + col * 10, 186 + row * 10, c, -(col * 0.23 + row * 0.41)]));
  });
  return (
    <Scene title="آفتابه خرج لحیمه" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#a9c4c9" />
      <g stroke="#8fadb3" strokeWidth={1.5}>
        <path d="M-10 70 H410 M-10 150 H410 M60 -10 V258 M160 -10 V258 M270 -10 V258 M380 -10 V258" />
      </g>
      <g fill="#7f9ea4">
        {[[60, 70], [160, 70], [270, 70], [380, 70], [60, 150], [160, 150], [270, 150], [380, 150]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2" />)}
      </g>
      <rect x="-10" y="-10" width="420" height="24" fill="#5c6b78" stroke={INK} strokeWidth={2} />
      <path d="M-10 6 H410" stroke="#47545f" strokeWidth={1} strokeDasharray="8 6" />

      <g transform="translate(300 44)"><g className="al-spin"><Star8 r={20} fill={STEEL} /><circle cx="0" cy="0" r="6" fill={STEEL_LT} stroke={INK} strokeWidth={1.5} /></g></g>
      <g transform="translate(332 30)"><g className="al-spinr"><Star8 r={13} fill={C.saffron} /><circle cx="0" cy="0" r="4" fill={STEEL_LT} stroke={INK} strokeWidth={1.3} /></g></g>

      <rect x="282" y="92" width="82" height="50" rx="4" fill="#3b4a55" {...inked} />
      <rect x="288" y="98" width="70" height="38" rx="2" fill={SCREEN} stroke={INK} strokeWidth={1.4} />
      <rect x="294" y="122" width="58" height="7" fill="none" stroke={GLOW} strokeWidth={1.2} />
      <rect className="al-progress o-left" x="295" y="123" width="56" height="5" fill={GLOW} />
      <text className="al-txt1" x="323" y="114" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="8" fill={GLOW} direction="rtl" style={{ opacity: 0 }}>کالیبره...</text>
      <text className="al-txt2" x="323" y="114" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="8" fill="#ff8a7a" direction="rtl">هزینه: ∞</text>
      <path d="M316 92 V86 H330 V92" fill="#c33a50" stroke={INK} strokeWidth={1.5} />
      <circle className="al-beacon" cx="323" cy="84" r="6" fill="#ff5a4a" stroke={INK} strokeWidth={1.6} />

      <path d="M64 70 V80" stroke={INK} strokeWidth={3} />
      <rect x="22" y="80" width="84" height="58" rx="4" fill="#3b4a55" {...inked} />
      <rect x="28" y="86" width="72" height="46" rx="2" fill={SCREEN} stroke={INK} strokeWidth={1.4} />
      <g className="al-wave">
        <path d="M34 120 l6 -8 l5 12 l6 -16 l5 14 l6 -6 l5 4 l6 -10 l5 12 l6 -6" fill="none" stroke={GLOW} strokeWidth={1.5} strokeLinejoin="round" />
      </g>
      <path d="M58 104 Q56 96 64 96 Q72 96 70 104 Q70 110 64 110 Q58 110 58 104Z M58 102 l-6 -4 M70 101 q4 0 4 4" fill="none" stroke="#ffd36a" strokeWidth={1.2} />
      <text x="64" y="93" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="5.5" fill={GLOW} direction="rtl">اسکن آفتابه</text>
      {[[38, 52], [78, 52]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="12" fill={C.white} {...inked} strokeWidth={2} />
          <path d={`M${x - 8} ${y + 3} A8 8 0 0 1 ${x + 8} ${y + 3}`} fill="none" stroke={C.pomegranate} strokeWidth={1.6} strokeDasharray="2 2" />
          <g transform={`translate(${x} ${y + 3})`}>
            <g className="al-needle" style={{ transformOrigin: "0px 0px", transformBox: "view-box", animationDelay: `${-i * 1.1}s` }}>
              <path d="M0 0 V-9" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
            </g>
          </g>
          <circle cx={x} cy={y + 3} r="1.8" fill={INK} />
        </g>
      ))}

      <rect x="-10" y="256" width="420" height="54" fill="#6b7a86" stroke={INK} strokeWidth={2.5} />
      <path d="M-10 270 H410 M30 256 V270 M110 256 V270 M190 256 V270 M270 256 V270 M350 256 V270" stroke="#56636e" strokeWidth={1.5} />
      <path d="M0 290 l10 -10 M20 290 l10 -10 M370 290 l10 -10 M390 290 l10 -10" stroke={C.saffron} strokeWidth={4} />

      <rect x="16" y="170" width="96" height="88" rx="4" fill={C.navy} {...inked} />
      <rect x="20" y="176" width="44" height="36" rx="2" fill="#24365e" stroke={INK} strokeWidth={1.2} />
      {lights.map(([x, y, c, d], i) => (
        <circle key={i} className="al-blink" cx={x} cy={y} r="3" fill={c} stroke={INK} strokeWidth={1} style={{ animationDelay: `${d}s`, animationDuration: `${0.5 + (i % 4) * 0.18}s` } as CSSProperties} />
      ))}
      <g stroke={INK} strokeWidth={2} strokeLinecap="round">
        <path d="M28 236 V222 M42 236 V226 M56 236 V218" />
      </g>
      <circle cx="28" cy="221" r="3.5" fill={C.pomegranate} stroke={INK} strokeWidth={1.3} />
      <circle cx="42" cy="225" r="3.5" fill={C.saffron} stroke={INK} strokeWidth={1.3} />
      <circle cx="56" cy="217" r="3.5" fill={C.firouzeh} stroke={INK} strokeWidth={1.3} />
      <rect x="66" y="174" width="42" height="6" rx="2" fill="#0b1426" stroke={INK} strokeWidth={1.4} />
      <g className="al-receipt o-top">
        <path d="M69 178 H105 V250 Q100 256 94 252 Q88 258 82 252 Q76 258 69 252Z" fill={C.white} stroke={INK} strokeWidth={1.5} strokeLinejoin="round" />
        <text x="87" y="188" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="6" fill={INK} direction="rtl">صورتحساب</text>
        <path d="M73 194 H101 M73 200 H95 M73 206 H101 M73 212 H91 M73 218 H99 M73 224 H93" stroke="#9aa5ad" strokeWidth={1.4} />
        <path d="M72 230 H102" stroke={INK} strokeWidth={1} strokeDasharray="2 1.5" />
        <text x="87" y="240" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="5.5" fill={C.pomegranate} direction="rtl">۹٬۹۹۹٬۹۹۹٬۹۹۹</text>
        <text x="87" y="247" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="4.5" fill={INK} direction="rtl">تومن</text>
      </g>

      <g transform="translate(160 14)">
        <g className="al-arm3" style={{ transformOrigin: "0px 0px", transformBox: "view-box" }}>
          <rect x="-10" y="-4" width="20" height="8" fill="#5c6b78" stroke={INK} strokeWidth={1.6} />
          <path d="M0 0 L14 60" stroke={INK} strokeWidth={12} strokeLinecap="round" />
          <path d="M0 0 L14 60" stroke={STEEL} strokeWidth={8} strokeLinecap="round" />
          <g transform="translate(14 60)">
            <g className="al-arm4" style={{ transformOrigin: "0px 0px", transformBox: "view-box" }}>
              <path d="M0 0 L20 62" stroke={INK} strokeWidth={10} strokeLinecap="round" />
              <path d="M0 0 L20 62" stroke={STEEL_LT} strokeWidth={6} strokeLinecap="round" />
              <circle cx="28" cy="76" r="13" fill="#d8f1f6" fillOpacity=".55" stroke={INK} strokeWidth={3} />
              <path d="M21 70 q4 -5 10 -4" fill="none" stroke={C.white} strokeWidth={2} strokeLinecap="round" />
            </g>
            <circle cx="0" cy="0" r="6" fill={C.saffron} stroke={INK} strokeWidth={1.8} />
          </g>
          <circle cx="0" cy="0" r="5" fill={C.saffron} stroke={INK} strokeWidth={1.6} />
        </g>
      </g>

      <rect x="250" y="10" width="24" height="22" rx="3" fill="#47545f" {...inked} strokeWidth={2} />
      <path d="M255 32 L269 32 L265 44 L259 44Z" fill={STEEL} {...inked} strokeWidth={2} />
      <circle className="al-blink" cx="262" cy="20" r="3" fill="#ff5a4a" stroke={INK} strokeWidth={1} />
      <g transform="translate(262 46)">
        <circle className="al-charge" cx="0" cy="0" r="5" fill="#ff7a6a" stroke={INK} strokeWidth={1} style={{ opacity: 0 }} />
      </g>
      <g className="al-beam" style={{ opacity: 0 }}>
        <path d="M262 46 L221 229" stroke="#ff5a4a" strokeWidth={6} strokeLinecap="round" opacity=".55" />
        <path d="M262 46 L221 229" stroke={C.white} strokeWidth={2} strokeLinecap="round" />
      </g>

      <path d="M178 244 H242 V258 H178Z" fill="#47545f" {...inked} />
      <g className="al-turn">
        <path d="M184 251 h6 M196 251 h6 M208 251 h6 M220 251 h6 M232 251 h6" stroke={GLOW} strokeWidth={2} strokeLinecap="round" />
      </g>
      <ellipse cx="210" cy="244" rx="32" ry="4" fill={STEEL_LT} {...inked} strokeWidth={2} />

      <g className="al-shake">
        <Aftabeh />
        <g transform="translate(234 214)">
          <g className="al-tag o-top">
            <path d="M0 0 L8 10" stroke={INK} strokeWidth={1} />
            <path d="M4 10 H22 L26 15 L22 20 H4Z" fill={C.cream} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
            <circle cx="22" cy="15" r="1" fill={INK} />
            <text x="12" y="17" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="5.5" fill={C.pomegranate} direction="rtl">۷ تومن</text>
          </g>
        </g>
      </g>
      {[0, -0.3, -0.6].map((d, i) => (
        <g key={i} transform="translate(221 231)">
          <path className="al-drop" style={{ animationDelay: `${d}s` }} d="M0 -3 Q2.4 0.5 0 2.4 Q-2.4 0.5 0 -3Z" fill={WATER} stroke={INK} strokeWidth={1} />
        </g>
      ))}
      <ellipse cx="223" cy="244.5" rx="6" ry="1.6" fill={WATER} stroke={INK} strokeWidth={1} />

      <g transform="translate(350 236)">
        <g className="al-arm1" style={{ transformOrigin: "0px 0px", transformBox: "view-box" }}>
          <path d="M0 0 L-48 -66" stroke={INK} strokeWidth={15} strokeLinecap="round" />
          <path d="M0 0 L-48 -66" stroke={STEEL} strokeWidth={10.5} strokeLinecap="round" />
          <path d="M-12 -18 L-34 -48" stroke={C.saffron} strokeWidth={2.4} strokeDasharray="4 4" />
          <g transform="translate(-48 -66)">
            <g className="al-arm2" style={{ transformOrigin: "0px 0px", transformBox: "view-box" }}>
              <path d="M0 0 L-66 46" stroke={INK} strokeWidth={12} strokeLinecap="round" />
              <path d="M0 0 L-66 46" stroke={STEEL_LT} strokeWidth={8} strokeLinecap="round" />
              <path d="M-66 46 L-77 55" stroke={INK} strokeWidth={3} strokeLinecap="round" />
              <path d="M-76 54.5 L-81 58" stroke="#e8e2d0" strokeWidth={1.6} strokeLinecap="round" />
              <rect x="-74" y="40" width="14" height="12" rx="2" fill="#5c6b78" stroke={INK} strokeWidth={1.6} transform="rotate(-35 -67 46)" />
              <circle className="al-blink" cx="-30" cy="21" r="2.2" fill={GLOW} stroke={INK} strokeWidth={.8} />
            </g>
            <circle cx="0" cy="0" r="8" fill={C.saffron} stroke={INK} strokeWidth={2} />
            <circle cx="0" cy="0" r="2.5" fill={INK} />
          </g>
        </g>
        <circle cx="0" cy="0" r="9" fill={C.saffron} stroke={INK} strokeWidth={2} />
      </g>
      <rect x="330" y="238" width="40" height="20" rx="3" fill="#47545f" {...inked} />
      <path d="M336 246 H364" stroke={C.saffron} strokeWidth={2} strokeDasharray="4 3" />

      <g transform="translate(221 229)">
        <g className="al-spark" style={{ transform: "scale(0)" }}><Star8 r={3.5} fill="#fff6b0" /></g>
      </g>
      <g transform="translate(236 206)">
        <text className="al-chik" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="7" fill={C.pomegranate} direction="rtl" style={{ opacity: 0 }}>چیک</text>
      </g>

      <path d="M146 226 H158 V258 H146Z" fill="#47545f" {...inked} strokeWidth={2} />
      <g transform="translate(152 226)">
        <g className="al-btn o-bottom">
          <path d="M-8 0 Q-8 -9 0 -9 Q8 -9 8 0Z" fill="#e23a3a" stroke={INK} strokeWidth={1.8} />
          <path d="M-4 -5 q2 -2 4 -2" fill="none" stroke={C.white} strokeWidth={1.4} strokeLinecap="round" />
        </g>
      </g>

      <g transform="translate(118 258) scale(.8)">
        <Person robe={C.white} sash={C.turquoise} hat={C.lapis} mood="serious" beard armR={-15} armL={10} armRClass="al-press">
          <path d="M-13 -76 H13" stroke={INK} strokeWidth={2.5} />
          <circle cx="-5" cy="-76" r="5.2" fill="#bfe8ef" fillOpacity=".8" stroke={INK} strokeWidth={2} />
          <circle cx="5" cy="-76" r="5.2" fill="#bfe8ef" fillOpacity=".8" stroke={INK} strokeWidth={2} />
          <path d="M-7 -78 l2 -2 M3 -78 l2 -2" stroke={C.white} strokeWidth={1.2} strokeLinecap="round" />
          <path d="M-22 -6 Q-18 -30 -12 -40 M22 -6 Q18 -30 12 -40" fill="none" stroke={C.cream} strokeWidth={1.5} strokeDasharray="2 3" />
        </Person>
      </g>

      {big && (
        <g>
          <Bubble x={110} y={176} w={60} text="آتش!" className="al-b1 o-bottom" style={{ transform: "scale(0)" }} />
          <Bubble x={110} y={176} w={72} text="تموم شد." className="al-b2 o-bottom" />
        </g>
      )}
    </Scene>
  );
}
