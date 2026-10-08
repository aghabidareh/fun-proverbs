import { Scene, Person, Star8, Bubble, C, INK, SKIN, inked } from "./parts";
import type { SceneProps } from "./types";

const GOLD = "#e3b23c";
const OIL = "#f2c94c";
const BEATS = [10, 26, 42, 56];

function pour() {
  const fr = ["0%{transform:rotate(-140deg)}"];
  BEATS.forEach((b) => fr.push(`${b - 2}%{transform:rotate(-140deg)}${b}%{transform:rotate(-163deg)}${b + 3}%{transform:rotate(-157deg)}${b + 5}%{transform:rotate(-140deg)}`));
  fr.push("100%{transform:rotate(-140deg)}");
  return `@keyframes sb-pour{${fr.join("")}}`;
}

function oil() {
  const fr = ["0%{opacity:0;transform:translateY(0px)}"];
  BEATS.forEach((b) => fr.push(`${b}%{opacity:0;transform:translateY(0px)}${b + 0.6}%{opacity:1;transform:translateY(0px)}${b + 3}%{opacity:0;transform:translateY(10px)}`));
  fr.push("100%{opacity:0;transform:translateY(10px)}");
  return `@keyframes sb-oil{${fr.join("")}}`;
}

function twirl() {
  const fr: string[] = [];
  let i = 0;
  for (let p = 0; p <= 56; p += 4, i++) fr.push(`${p}%{transform:rotate(${i % 2 ? 136 : 122}deg)}`);
  fr.push("60%,90%{transform:rotate(26deg)}96%,100%{transform:rotate(122deg)}");
  return `@keyframes sb-twirl{${fr.join("")}}`;
}

const CSS = `
${pour()}
${oil()}
${twirl()}
.sb-pour{animation:sb-pour 9s ease-in-out infinite}
.sb-oil{animation:sb-oil 9s linear infinite}
.sb-twirl{animation:sb-twirl 9s ease-in-out infinite}
@keyframes sb-grow{0%,11%{transform:scale(1)}13%{transform:scale(1.5)}14.5%,26%{transform:scale(1.38)}29%{transform:scale(2)}30.5%,42%{transform:scale(1.85)}45%{transform:scale(2.6)}46.5%,56%{transform:scale(2.45)}59%{transform:scale(3.5)}61%,90%{transform:scale(3.25)}96%,100%{transform:scale(1)}}
.sb-grow{animation:sb-grow 9s ease-out infinite}
@keyframes sb-glint{0%,12%{transform:scale(0) rotate(0deg)}14%{transform:scale(1.4) rotate(45deg)}18%,28%{transform:scale(0) rotate(90deg)}30%{transform:scale(1.4) rotate(135deg)}34%,44%{transform:scale(0) rotate(180deg)}46%{transform:scale(1.4) rotate(225deg)}50%,58%{transform:scale(0) rotate(270deg)}60%{transform:scale(1.6) rotate(315deg)}64%{transform:scale(.7) rotate(340deg)}68%{transform:scale(1.3) rotate(380deg)}72%,82%{transform:scale(0) rotate(400deg)}84%{transform:scale(1.7) rotate(440deg)}88%,100%{transform:scale(0) rotate(480deg)}}
.sb-glint{animation:sb-glint 9s ease-out infinite}
@keyframes sb-shine{0%,12%{opacity:.25}14%,28%{opacity:.5}30%,44%{opacity:.7}46%,58%{opacity:.85}60%,90%{opacity:1}96%,100%{opacity:.25}}
.sb-shine{animation:sb-shine 9s linear infinite}
@keyframes sb-rays{0%,57%{opacity:0;transform:scale(.4)}61%{opacity:.9;transform:scale(1.1)}64%,90%{opacity:.75;transform:scale(1)}95%,100%{opacity:0;transform:scale(.5)}}
.sb-rays{animation:sb-rays 9s ease-out infinite}
.sb-spin{animation:spin 14s linear infinite}
@keyframes sb-flash{0%,58%{opacity:0}60%{opacity:.6}64%,100%{opacity:0}}
.sb-flash{animation:sb-flash 9s linear infinite}
@keyframes sb-shades{0%,59%{transform:translateY(-14px);opacity:0}62%{transform:translateY(2px);opacity:1}64%,90%{transform:translateY(0px);opacity:1}93%,100%{transform:translateY(-14px);opacity:0}}
.sb-shades{animation:sb-shades 9s ease-out infinite}
@keyframes sb-give{0%,64%{transform:rotate(15deg)}69%,80%{transform:rotate(74deg)}86%,100%{transform:rotate(15deg)}}
.sb-give{animation:sb-give 9s ease-in-out infinite}
@keyframes sb-env{0%,66%{transform:translate(0px,0px) rotate(0deg);opacity:0}69%{transform:translate(0px,0px) rotate(0deg);opacity:1}73%{transform:translate(0px,0px) rotate(-8deg);opacity:1}80%,92%{transform:translate(-54px,30px) rotate(-14deg);opacity:1}96%,100%{transform:translate(-54px,30px) rotate(-14deg);opacity:0}}
.sb-env{animation:sb-env 9s ease-in-out infinite}
@keyframes sb-say{0%,66%{transform:scale(0)}69%{transform:scale(1.15)}71%,84%{transform:scale(1)}87%,100%{transform:scale(0)}}
.sb-say{animation:sb-say 9s ease-out infinite}
@keyframes sb-lamp{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}
.scene .sb-lamp{animation:sb-lamp 4s ease-in-out infinite;transform-origin:top center}
@keyframes sb-sweat{0%,62%{transform:translate(0px,0px);opacity:0}66%{opacity:1}80%,100%{transform:translate(0px,14px);opacity:0}}
.sb-sweat{animation:sb-sweat 9s ease-in infinite}
`;

export default function Sibil({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="سبیلش رو چرب کرد" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#e9c8a0" />
      <rect x="-10" y="22" width="420" height="20" fill={C.lapis} {...inked} />
      {Array.from({ length: 11 }, (_, i) => (
        <Star8 key={i} x={8 + i * 40} y={32} r={6} fill={C.firouzeh} />
      ))}

      {[70, 330].map((x) => (
        <g key={x}>
          <path d={`M${x - 34} 196 V108 Q${x - 34} 76 ${x} 64 Q${x + 34} 76 ${x + 34} 108 V196Z`} fill={C.turquoise} {...inked} />
          <path d={`M${x - 24} 196 V112 Q${x - 24} 88 ${x} 78 Q${x + 24} 88 ${x + 24} 112 V196Z`} fill="#c99a72" stroke={INK} strokeWidth={2} />
          <path d={`M${x - 10} 196 Q${x - 16} 178 ${x - 8} 166 L${x - 6} 156 L${x + 6} 156 L${x + 8} 166 Q${x + 16} 178 ${x + 10} 196Z`} fill={C.lapis} stroke={INK} strokeWidth={2} />
          <path d={`M${x - 10} 176 h20`} stroke={C.saffron} strokeWidth={2} />
          <path d={`M${x} 156 Q${x - 6} 140 ${x - 12} 134 M${x} 156 Q${x + 4} 138 ${x + 12} 132 M${x} 156 V136`} fill="none" stroke={C.olive} strokeWidth={2} strokeLinecap="round" />
          <circle cx={x - 12} cy={133} r="3.4" fill={C.pomegranate} stroke={INK} strokeWidth={1.3} />
          <circle cx={x + 12} cy={131} r="3.4" fill={C.saffron} stroke={INK} strokeWidth={1.3} />
          <circle cx={x} cy={134} r="3.4" fill={C.pomegranate} stroke={INK} strokeWidth={1.3} />
        </g>
      ))}

      <g className="sb-lamp">
        <path d="M200 42 V66" stroke={INK} strokeWidth={1.6} strokeDasharray="3 2" />
        <path d="M188 66 h24 l-4 14 h-16Z" fill={GOLD} {...inked} strokeWidth={2} />
        <path d="M192 80 Q200 92 208 80" fill={C.saffron} stroke={INK} strokeWidth={2} />
        <circle cx="200" cy="72" r="2.4" fill={C.pomegranate} />
      </g>

      <rect x="-10" y="196" width="420" height="30" fill={C.cream} {...inked} />
      <path d="M-10 211 H410" stroke={C.turquoise} strokeWidth={6} />
      <path d="M-10 211 H410" stroke={C.saffron} strokeWidth={1.6} strokeDasharray="4 6" />
      <rect x="-10" y="226" width="420" height="90" fill="#b98a66" {...inked} />

      <path d="M54 232 L346 232 L384 300 L16 300Z" fill={C.pomegranate} {...inked} />
      <path d="M70 240 L330 240 L360 300 L40 300Z" fill="none" stroke={C.saffron} strokeWidth={3} />
      <path d="M70 240 L330 240 L360 300 L40 300Z" fill="none" stroke={INK} strokeWidth={1} opacity=".5" strokeDasharray="3 5" />
      <ellipse cx="200" cy="278" rx="62" ry="14" fill={C.lapis} stroke={INK} strokeWidth={2} />
      <Star8 x={200} y={278} r={9} fill={C.saffron} />
      <path d="M54 232 l-6 -4 M80 232 l-2 -5 M320 232 l2 -5 M346 232 l6 -4" stroke={C.cream} strokeWidth={2} strokeLinecap="round" />

      <g transform="translate(200 175)">
        <g className="sb-rays" style={{ opacity: 0 }}>
          <g className="sb-spin">
            <g fill="#fff3c2" opacity=".85">
              {Array.from({ length: 12 }, (_, i) => {
                const a = (i * Math.PI) / 6;
                const b = a + 0.12;
                return <path key={i} d={`M0 0 L${(Math.cos(a) * 170).toFixed(1)} ${(Math.sin(a) * 170).toFixed(1)} L${(Math.cos(b) * 170).toFixed(1)} ${(Math.sin(b) * 170).toFixed(1)}Z`} />;
              })}
            </g>
          </g>
        </g>
      </g>

      <rect x="148" y="170" width="104" height="72" rx="14" fill={C.terracotta} {...inked} />
      <path d="M156 184 h88 M156 228 h88" stroke={C.saffron} strokeWidth={3} />
      <Star8 x={200} y={206} r={10} fill={C.saffron} />

      <g transform="translate(78 258) scale(.8)">
        <Person robe={C.olive} sash={C.pomegranate} hat={C.saffron} hatKind="kolah" mood="serious" armL={10} armR={-10} />
        <g transform="translate(0 -75)">
          <g className="sb-shades" style={{ opacity: 0 }}>
            <path d="M-12 -3 h9 q0 6 -4.5 6 q-4.5 0 -4.5 -6Z M3 -3 h9 q0 6 -4.5 6 q-4.5 0 -4.5 -6Z" fill={INK} />
            <path d="M-13 -3 H13" stroke={INK} strokeWidth={1.6} />
            <path d="M-10 -1.6 l2 0 M5 -1.6 l2 0" stroke={C.white} strokeWidth={1} strokeLinecap="round" />
          </g>
        </g>
      </g>

      <g transform="translate(322 258) scale(.8)">
        <Person robe={C.pomegranate} sash={C.saffron} hat={C.white} mood="serious" beard armL={15} armR={-10} armLClass="sb-give" />
        <g transform="translate(12 -88)">
          <path className="sb-sweat" d="M0 -4 Q3 1 0 3 Q-3 1 0 -4Z" fill="#9fd8ef" stroke={INK} strokeWidth={1} />
        </g>
      </g>

      <g transform="translate(290 214)">
        <g className="sb-env" style={{ opacity: 0 }}>
          <rect x="-11" y="-7" width="22" height="14" rx="1.5" fill={C.white} {...inked} strokeWidth={1.8} />
          <path d="M-11 -7 L0 1 L11 -7" fill="none" stroke={INK} strokeWidth={1.5} strokeLinejoin="round" />
          <circle cx="0" cy="1" r="2.4" fill={C.pomegranate} stroke={INK} strokeWidth={1} />
        </g>
      </g>

      <g transform="translate(200 252) scale(1.15)">
        <Person robe={C.lapis} sash={C.saffron} hat={C.white} mood="serious" armL={122} armR={-140} armLClass="sb-twirl" armRClass="sb-pour">
          <path d="M-36 -2 Q-38 -17 -18 -17 L18 -17 Q38 -17 36 -2 Q0 6 -36 -2Z" fill={C.lapis} {...inked} />
          <path d="M-24 -9 Q0 -4 24 -9" fill="none" stroke={C.saffron} strokeWidth={2} strokeDasharray="3 3" />
          <path d="M-38 -3 q-6 1 -6 -4 q4 -3 8 -1Z M38 -3 q6 1 6 -4 q-4 -3 -8 -1Z" fill={C.pomegranate} stroke={INK} strokeWidth={1.6} />
          <g transform="translate(0 -67.5)">
            <g className="sb-grow">
              <path d="M0 -1 Q-6 -4 -11 -1 Q-15 1 -17 -3 Q-18 -8 -13.5 -7.5 Q-16 -4 -13 -2.6 Q-10 3.5 -4 3 Q-1 3 0 1 Q1 3 4 3 Q10 3.5 13 -2.6 Q16 -4 13.5 -7.5 Q18 -8 17 -3 Q15 1 11 -1 Q6 -4 0 -1Z" fill="#3a2a1e" stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
              <path className="sb-shine" d="M-12 0.4 Q-8 -1.6 -3.5 0 M3.5 0 Q8 -1.6 12 0.4" fill="none" stroke={C.white} strokeWidth={1.1} strokeLinecap="round" />
              <Star8 x={14} y={-6} r={2.6} fill={C.white} className="sb-glint" />
            </g>
          </g>
          <g transform="translate(13 -66)">
            <path className="sb-oil" d="M0 -2.4 Q1.8 0 0 1.8 Q-1.8 0 0 -2.4Z" fill={OIL} stroke={INK} strokeWidth={.8} style={{ opacity: 0 }} />
          </g>
          <g className="sb-pour" style={{ transformOrigin: "12px -54px", transformBox: "view-box" }} transform="rotate(-140)">
            <path d="M16 -32 V-41" stroke={INK} strokeWidth={6} strokeLinecap="round" />
            <path d="M16 -32 V-41" stroke={GOLD} strokeWidth={3} strokeLinecap="round" />
            <path d="M16 -33 Q8 -28 9 -20 Q10 -12 16 -11 Q22 -12 23 -20 Q24 -28 16 -33Z" fill={C.turquoise} {...inked} strokeWidth={1.8} />
            <path d="M10.5 -20 h11" stroke={GOLD} strokeWidth={2} />
            <circle cx="16" cy="-16" r="1.6" fill={C.pomegranate} />
            <circle cx="16" cy="-26" r="4.5" fill={SKIN} {...inked} strokeWidth={2} />
          </g>
        </Person>
      </g>

      <rect className="sb-flash" x="-10" y="-10" width="420" height="320" fill={C.white} style={{ opacity: 0 }} />

      {big && <Bubble x={300} y={168} w={84} text="قابل نداره" flip className="sb-say o-bottom" />}
      {big && (
        <text x="200" y="124" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="13" fill={C.pomegranate} direction="rtl" className="sb-rays" style={{ opacity: 0 }}>
          درخشش: ۳ کیلومتر
        </text>
      )}
    </Scene>
  );
}
