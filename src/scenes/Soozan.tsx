import { Scene, Person, Face, Turban, Star8, Bubble, C, INK, SKIN, inked } from "./parts";
import type { SceneProps } from "./types";

const STEEL = "#c9ced6";

const CSS = `
.sz-hide{display:none}
@keyframes sz-arm{0%{transform:rotate(20deg)}8%{transform:rotate(52deg)}15%{transform:rotate(62deg)}19%{transform:rotate(66deg)}20.5%{transform:rotate(74deg)}22%{transform:rotate(40deg)}24%{transform:rotate(30deg)}26%{transform:rotate(34deg)}28%,30%{transform:rotate(28deg)}35%,38%{transform:rotate(-162deg)}42%{transform:rotate(-78deg)}46%{transform:rotate(-66deg)}50%{transform:rotate(-82deg)}54%{transform:rotate(-66deg)}58%{transform:rotate(-82deg)}62%{transform:rotate(-66deg)}66%{transform:rotate(-82deg)}70%{transform:rotate(-66deg)}74%{transform:rotate(-82deg)}78%{transform:rotate(-66deg)}82%,94%{transform:rotate(-76deg)}95.5%,100%{transform:rotate(20deg)}}
.sz-arm{animation:sz-arm 8s ease-in-out infinite}
@keyframes sz-needle{0%,32%{opacity:1}33%,100%{opacity:0}}
.sz-needle{animation:sz-needle 8s linear infinite}
@keyframes sz-jov{0%,33%{opacity:0}34%,95%{opacity:1}95.5%,100%{opacity:0}}
.sz-jov{animation:sz-jov 8s linear infinite}
@keyframes sz-h1{0%,18%{opacity:1}19%,100%{opacity:0}}
.sz-h1{animation:sz-h1 8s linear infinite}
@keyframes sz-h2{0%,18%{opacity:0}19%,32%{opacity:1}33%,100%{opacity:0}}
.sz-h2{animation:sz-h2 8s linear infinite}
@keyframes sz-h3{0%,32%{opacity:0}33%,100%{opacity:1}}
.sz-h3{animation:sz-h3 8s linear infinite}
@keyframes sz-chase{0%,42%{transform:translateX(0px);opacity:1}88%,92%{transform:translateX(150px);opacity:1}95%{transform:translateX(150px);opacity:0}96%{transform:translateX(0px);opacity:0}100%{transform:translateX(0px);opacity:1}}
.sz-chase{animation:sz-chase 8s ease-in-out infinite}
@keyframes sz-stomp{0%,42%{transform:translateY(0px)}44%,48%,52%,56%,60%,64%,68%,72%,76%,80%,84%{transform:translateY(-8px)}46%,50%,54%,58%,62%,66%,70%,74%,78%,82%,86%,100%{transform:translateY(0px)}}
.sz-stomp{animation:sz-stomp 8s linear infinite}
@keyframes sz-wince{0%,19%{transform:translate(0px,0px)}20%{transform:translate(-2px,1px)}21%{transform:translate(2px,-1px)}22%{transform:translate(-2px,0px)}23%{transform:translate(2px,1px)}24%,100%{transform:translate(0px,0px)}}
.sz-wince{animation:sz-wince 8s linear infinite}
@keyframes sz-akh{0%,19%{transform:scale(0);opacity:0}21%{transform:scale(1.2);opacity:1}24%,30%{transform:scale(1);opacity:1}33%,100%{transform:scale(.6);opacity:0}}
.sz-akh{animation:sz-akh 8s ease-out infinite}
@keyframes sz-glint{0%,4%{transform:scale(0) rotate(0deg)}8%{transform:scale(1.2) rotate(45deg)}12%,100%{transform:scale(0) rotate(90deg)}}
.sz-glint{animation:sz-glint 8s ease-out infinite}
@keyframes sz-flash{0%,35%{transform:scale(0) rotate(0deg)}38%{transform:scale(1.4) rotate(30deg)}43%,100%{transform:scale(0) rotate(80deg)}}
.sz-flash{animation:sz-flash 8s ease-out infinite}
@keyframes sz-flee{0%,40%{transform:translateX(0px);opacity:1}80%{transform:translateX(190px);opacity:1}82%,94%{transform:translateX(190px);opacity:0}95%{transform:translateX(0px);opacity:0}100%{transform:translateX(0px);opacity:1}}
.sz-flee{animation:sz-flee 8s ease-in infinite}
@keyframes sz-hop{0%,100%{transform:translateY(0px)}50%{transform:translateY(-5px)}}
.sz-hop{animation:sz-hop .26s ease-in-out infinite}
@keyframes sz-tL{0%,35%{transform:rotate(15deg)}38%,92%{transform:rotate(165deg)}96%,100%{transform:rotate(15deg)}}
@keyframes sz-tR{0%,35%{transform:rotate(-15deg)}38%,92%{transform:rotate(-165deg)}96%,100%{transform:rotate(-15deg)}}
.sz-tL{animation:sz-tL 8s ease-out infinite}
.sz-tR{animation:sz-tR 8s ease-out infinite}
@keyframes sz-bang{0%,35%{transform:scale(0)}38%{transform:scale(1.4)}41%,52%{transform:scale(1)}55%,100%{transform:scale(0)}}
.sz-bang{animation:sz-bang 8s ease-out infinite}
@keyframes sz-dust{0%{transform:translate(0px,0px) scale(.4);opacity:.9}100%{transform:translate(-16px,-8px) scale(1.4);opacity:0}}
.sz-dust{animation:sz-dust .5s ease-out infinite}
@keyframes sz-say{0%,46%{transform:scale(0)}50%{transform:scale(1.15)}52%,78%{transform:scale(1)}81%,100%{transform:scale(0)}}
.sz-say{animation:sz-say 8s ease-out infinite}
`;

function WinceHead() {
  return (
    <g>
      <ellipse cx="0" cy="0" rx="13" ry="15" fill={SKIN} {...inked} />
      <path d="M-9 -3 L-3 -1 L-9 1 M9 -3 L3 -1 L9 1" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M-10 -8 Q-6 -5 -2 -7 M2 -7 Q6 -5 10 -8" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      <path d="M0 -1 Q-2 4 1 5" fill="none" stroke={INK} strokeWidth={1.2} />
      <circle cx="-8" cy="5" r="2.6" fill="#e58a7a" opacity=".55" />
      <circle cx="8" cy="5" r="2.6" fill="#e58a7a" opacity=".55" />
      <path d="M-4 9 Q0 6 4 9 Q0 11 -4 9Z" fill={INK} />
      <path d="M12 -8 Q15 -3 12 -1 Q9 -3 12 -8Z" fill="#9fd8ef" stroke={INK} strokeWidth={1} />
    </g>
  );
}

function House({ x, dome = false, color = C.sand }: { x: number; dome?: boolean; color?: string }) {
  return (
    <g transform={`translate(${x} 262)`}>
      <rect x="-12" y="-22" width="24" height="22" fill={color} stroke={INK} strokeWidth={1.8} />
      <path d="M-4 0 V-8 Q0 -12 4 -8 V0" fill={C.navy} stroke={INK} strokeWidth={1.2} />
      {dome ? (
        <path d="M-10 -22 Q-10 -36 0 -40 Q10 -36 10 -22Z" fill={C.firouzeh} stroke={INK} strokeWidth={1.8} />
      ) : (
        <rect x="-14" y="-25" width="28" height="4" fill={C.terracotta} stroke={INK} strokeWidth={1.4} />
      )}
    </g>
  );
}

const folk = [
  { x: 252, robe: C.pomegranate, hat: C.white, kind: "turban" as const, d: 0 },
  { x: 282, robe: C.lapis, hat: C.saffron, kind: "kolah" as const, d: -0.08 },
  { x: 314, robe: C.olive, hat: C.cream, kind: "scarf" as const, d: -0.16 },
  { x: 344, robe: C.saffron, hat: C.turquoise, kind: "turban" as const, d: -0.04 },
];

export default function Soozan({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="یه سوزن به خودت بزن، یه جوالدوز به مردم" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#d8c3e0" />
      <circle cx="340" cy="54" r="18" fill={C.cream} {...inked} />
      <path d="M-10 230 Q70 200 150 222 Q230 196 310 218 Q360 206 410 214 L410 262 L-10 262Z" fill="#b9a3c4" {...inked} />
      <House x={232} />
      <House x={262} dome />
      <House x={292} color={C.cream} />
      <House x={326} />
      <House x={356} dome color={C.cream} />
      <path d="M372 262 V244 M372 248 l-4 -4 M372 252 l4 -4" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      <circle cx="372" cy="240" r="6" fill={C.olive} stroke={INK} strokeWidth={1.4} />
      <rect x="-10" y="262" width="420" height="60" fill={C.sand} stroke={INK} strokeWidth={2.5} />
      <path d="M-10 270 H410" stroke={INK} strokeWidth={1} strokeDasharray="2 6" opacity=".5" />
      <path d="M40 282 q6 -6 12 0 M200 292 q6 -6 12 0 M330 296 q6 -6 12 0" fill="none" stroke={INK} strokeWidth={1.3} opacity=".55" />

      {folk.map((f, i) => (
        <g key={i} transform={`translate(${f.x} 284) scale(.3)`}>
          <g className="sz-flee">
            <g className="sz-hop" style={{ animationDelay: `${f.d}s` }}>
              <Person robe={f.robe} sash={C.cream} hat={f.hat} hatKind={f.kind} mood="shocked" armL={165} armR={-165} armLClass="sz-tL" armRClass="sz-tR" />
            </g>
            <g transform="translate(-26 -4)">
              <g className="sz-dust" style={{ animationDelay: `${f.d}s` }}>
                <circle cx="0" cy="0" r="9" fill={C.cream} stroke={INK} strokeWidth={3} />
              </g>
            </g>
            <g transform="translate(0 -120)">
              <text className="sz-bang" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="60" fill={C.pomegranate} stroke={INK} strokeWidth={3}>!</text>
            </g>
          </g>
        </g>
      ))}
      {big && (
        <g className="sz-flee">
          <Bubble x={300} y={236} w={84} text="آآآآآخ!" className="sz-say o-bottom" />
        </g>
      )}

      <g className="sz-chase">
        <g className="sz-stomp">
          <g transform="translate(96 292) scale(1.75)">
            <Person robe={C.terracotta} sash={C.lapis} headClass="sz-hide" armL={40} armRClass="sz-hide" />
            <g transform="translate(0 -74)">
              <g className="sz-h1" style={{ opacity: 0 }}><Face mood="serious" /><Turban color={C.saffron} /></g>
              <g className="sz-h2" style={{ opacity: 0 }}>
                <g className="sz-wince"><WinceHead /><Turban color={C.saffron} /></g>
              </g>
              <g className="sz-h3">
                <Face mood="smug" />
                <path d="M-10 -7 L-2 -4 M2 -4 L10 -7" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
                <Turban color={C.saffron} />
              </g>
            </g>
            <g transform="translate(12 -54)">
              <g className="sz-arm" style={{ transformBox: "view-box", transformOrigin: "0px 0px" }}>
                <g className="sz-jov" style={{ opacity: 0 }}>
                  <path d="M1 4 L7 4 L6.4 104 L4 124 L1.6 104Z" fill={STEEL} {...inked} strokeWidth={1.8} />
                  <path d="M4.6 10 V100" stroke={C.white} strokeWidth={1.2} strokeLinecap="round" />
                  <ellipse cx="4" cy="11" rx="1.4" ry="4" fill={C.terracotta} stroke={INK} strokeWidth={1} />
                  <path d="M4 7 Q-6 0 -2 -8 Q4 -14 -4 -20" fill="none" stroke={C.saffron} strokeWidth={1.8} strokeLinecap="round" />
                </g>
                <path d="M0 0 Q6 14 4 26" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
                <path d="M0 0 Q6 14 4 26" fill="none" stroke={C.terracotta} strokeWidth={5.5} strokeLinecap="round" />
                <circle cx="4" cy="28" r="4.5" fill={SKIN} {...inked} strokeWidth={2} />
                <g className="sz-needle">
                  <path d="M4 31 L4.4 44" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />
                  <g transform="translate(4.4 45)"><Star8 r={2.6} fill={C.white} className="sz-glint" /></g>
                </g>
              </g>
            </g>
          </g>
          <g transform="translate(160 120)">
            <g className="sz-flash"><Star8 r={16} fill={C.white} /></g>
          </g>
        </g>
      </g>

      <g transform="translate(128 132)">
        <text className="sz-akh" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="10" fill={INK} direction="rtl" style={{ opacity: 0 }}>آخ</text>
      </g>
    </Scene>
  );
}
