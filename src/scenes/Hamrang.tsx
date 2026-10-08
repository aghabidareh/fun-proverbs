import { Scene, Person, Face, Turban, Cloud, Ground, Star8, Bubble, C, INK, SKIN, inked } from "./parts";
import type { SceneProps } from "./types";

const ROBE = "M-22 -4 Q-20 -40 -12 -58 L12 -58 Q20 -40 22 -4 Q0 2 -22 -4Z";
const PAINT = "#2fa596";

const CSS = `
@keyframes hr-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
.hr-bob{animation:hr-bob 1.8s ease-in-out infinite}
@keyframes hr-look{0%,2%{transform:scaleX(1)}3%,5%{transform:scaleX(-1)}6%,8%{transform:scaleX(1)}9%,11%{transform:scaleX(-1)}12%,100%{transform:scaleX(1)}}
.hr-look{animation:hr-look 9s steps(1,end) infinite}
@keyframes hr-armL{0%{transform:rotate(160deg)}3%{transform:rotate(136deg)}6%{transform:rotate(162deg)}9%{transform:rotate(136deg)}12%{transform:rotate(160deg)}15%,31%{transform:rotate(120deg)}34%{transform:rotate(60deg)}37%,96%{transform:rotate(15deg)}100%{transform:rotate(160deg)}}
@keyframes hr-armR{0%{transform:rotate(-160deg)}3%{transform:rotate(-136deg)}6%{transform:rotate(-162deg)}9%{transform:rotate(-136deg)}12%{transform:rotate(-160deg)}15%,31%{transform:rotate(-120deg)}34%{transform:rotate(-60deg)}37%,56%{transform:rotate(-15deg)}58%,60%{transform:rotate(-155deg)}64%,96%{transform:rotate(-15deg)}100%{transform:rotate(-160deg)}}
.hr-armL{animation:hr-armL 9s ease-in-out infinite}
.hr-armR{animation:hr-armR 9s ease-in-out infinite}
@keyframes hr-fs{0%,13%{opacity:1}14%,31%{opacity:0}32%,58%{opacity:1}59%,96%{opacity:0}97%,100%{opacity:1}}
.hr-fs{animation:hr-fs 9s linear infinite}
@keyframes hr-fm{0%,13%{opacity:0}14%,31%{opacity:1}32%,100%{opacity:0}}
.hr-fm{animation:hr-fm 9s linear infinite}
@keyframes hr-fc{0%,58%{opacity:0}59%,96%{opacity:1}97%,100%{opacity:0}}
.hr-fc{animation:hr-fc 9s linear infinite}
@keyframes hr-cloth{0%,13%{transform:translateY(60px) rotate(0deg);opacity:0}16%{transform:translateY(-3px) rotate(0deg);opacity:1}18%,27%{transform:translateY(0) rotate(0deg);opacity:1}29%{transform:translateY(0) rotate(-5deg);opacity:1}31%{transform:translateY(0) rotate(5deg);opacity:1}36%{transform:translateY(70px) rotate(-25deg);opacity:0}100%{transform:translateY(70px) rotate(-25deg);opacity:0}}
.hr-cloth{animation:hr-cloth 9s ease-in-out infinite}
@keyframes hr-bucket{0%,33%{transform:translateY(-190px) rotate(0deg);opacity:0}34%{transform:translateY(-150px) rotate(0deg);opacity:1}38%{transform:translateY(0) rotate(0deg);opacity:1}40%{transform:translateY(0) rotate(-18deg);opacity:1}42%,48%{transform:translateY(0) rotate(150deg);opacity:1}54%{transform:translateY(-190px) rotate(150deg);opacity:1}55%,100%{transform:translateY(-190px) rotate(150deg);opacity:0}}
.hr-bucket{animation:hr-bucket 9s ease-in-out infinite}
@keyframes hr-pour{0%,41%{transform:scaleY(0);opacity:0}43%{transform:scaleY(1);opacity:1}47%{transform:scaleY(1);opacity:1}49%,100%{transform:scaleY(1);opacity:0}}
.hr-pour{animation:hr-pour 9s linear infinite}
@keyframes hr-splash{0%,42%{transform:scale(0);opacity:0}44%{transform:scale(.6);opacity:1}48%{transform:scale(1.3);opacity:1}53%,100%{transform:scale(1.5);opacity:0}}
.hr-splash{animation:hr-splash 9s ease-out infinite}
@keyframes hr-paint{0%,43%{opacity:0}46%,95%{opacity:1}98%,100%{opacity:0}}
.hr-paint{animation:hr-paint 9s linear infinite}
@keyframes hr-dripwin{0%,45%{opacity:0}47%,60%{opacity:1}63%,100%{opacity:0}}
.hr-dripwin{animation:hr-dripwin 9s linear infinite}
@keyframes hr-drip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(16px);opacity:0}}
.hr-drip{animation:hr-drip .8s ease-in infinite}
@keyframes hr-kolah{0%,57%{transform:translate(0px,0px) rotate(0deg);opacity:1}60%{transform:translate(24px,-46px) rotate(70deg);opacity:1}67%{transform:translate(110px,-30px) rotate(220deg);opacity:0}96%{transform:translate(0px,-30px) rotate(0deg);opacity:0}99%,100%{transform:translate(0px,0px) rotate(0deg);opacity:1}}
.hr-kolah{animation:hr-kolah 9s ease-in-out infinite}
@keyframes hr-turb{0%,59%{transform:translateY(-80px);opacity:0}60%{transform:translateY(-70px);opacity:1}63%{transform:translateY(3px);opacity:1}65%,95%{transform:translateY(0);opacity:1}97%,100%{transform:translateY(0);opacity:0}}
.hr-turb{animation:hr-turb 9s ease-in infinite}
@keyframes hr-bang{0%{transform:scale(0)}3%{transform:scale(1.4)}5%,12%{transform:scale(1)}14%,32%{transform:scale(0)}34%{transform:scale(1.3)}36%,40%{transform:scale(1)}42%,100%{transform:scale(0)}}
.hr-bang{animation:hr-bang 9s ease-out infinite}
@keyframes hr-swwin{0%,57%{opacity:1}60%,97%{opacity:0}100%{opacity:1}}
.hr-swwin{animation:hr-swwin 9s linear infinite}
@keyframes hr-sweat{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(-6px,18px);opacity:0}}
.hr-sweat{animation:hr-sweat 1s ease-in infinite}
@keyframes hr-q{0%,72%{transform:scale(0)}75%{transform:scale(1.3)}78%,93%{transform:scale(1)}95%,100%{transform:scale(0)}}
.hr-q{animation:hr-q 9s ease-out infinite}
@keyframes hr-bub{0%,74%{transform:scale(0);opacity:0}77%{transform:scale(1.1);opacity:1}79%,93%{transform:scale(1);opacity:1}95%,100%{transform:scale(0);opacity:0}}
.hr-bub{animation:hr-bub 9s ease-out infinite}
@keyframes hr-cloud{0%,100%{transform:translateX(-6px)}50%{transform:translateX(8px)}}
.hr-cloud{animation:hr-cloud 8s ease-in-out infinite}
@keyframes hr-flag{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}
.hr-flag{animation:hr-flag 1.6s ease-in-out infinite}
`;

function LoudHat() {
  return (
    <g>
      <path d="M8 -34 Q22 -52 30 -44 Q20 -44 10 -30Z" fill={C.pomegranate} {...inked} strokeWidth={1.6} />
      <Turban color={C.saffron} kind="kolah" />
      <path d="M-10 -18 L-6 -24 L-2 -18 L2 -24 L6 -18 L10 -24" fill="none" stroke={C.pomegranate} strokeWidth={2} strokeLinejoin="round" />
      <circle cx="-3" cy="-30" r="1.8" fill={C.lapis} />
      <circle cx="4" cy="-31" r="1.8" fill={C.lapis} />
    </g>
  );
}

function Sleeve({ side }: { side: 1 | -1 }) {
  const d = `M${12 * side} -54 Q${18 * side} -40 ${16 * side} -28`;
  return (
    <>
      <path d={d} fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
      <path d={d} fill="none" stroke={C.pomegranate} strokeWidth={5.5} strokeLinecap="round" />
      <path d={d} fill="none" stroke={C.saffron} strokeWidth={5.5} strokeDasharray="3 4" />
      <path className="hr-paint" style={{ opacity: 0 }} d={d} fill="none" stroke={PAINT} strokeWidth={5.5} strokeLinecap="round" />
      <circle cx={16 * side} cy={-26} r={4.5} fill={SKIN} {...inked} strokeWidth={2} />
    </>
  );
}

function LoudGuy() {
  return (
    <g>
      <path d="M-14 0 Q-14 -6 -6 -6 L-4 0Z M4 0 L6 -6 Q14 -6 14 0Z" fill={C.pomegranate} {...inked} strokeWidth={2} />
      <path d={ROBE} fill={C.pomegranate} />
      <g clipPath="url(#hr-robe)">
        <g transform="rotate(28)">
          {[-48, -36, -24, -12, 0, 12, 24, 36].map((x) => (
            <rect key={x} x={x} y={-90} width={6} height={110} fill={C.saffron} />
          ))}
        </g>
        <g fill={C.olive}>
          <circle cx="-8" cy="-48" r="2" /><circle cx="9" cy="-22" r="2" /><circle cx="-12" cy="-12" r="2" />
        </g>
      </g>
      <path d={ROBE} fill="none" {...inked} />
      <path d="M-15 -42 Q0 -38 15 -42 L15 -36 Q0 -32 -15 -36Z" fill={C.lapis} {...inked} strokeWidth={2} />
      <g fill={C.saffron}><circle cx="-8" cy="-39" r="1.3" /><circle cx="0" cy="-37" r="1.3" /><circle cx="8" cy="-39" r="1.3" /></g>
      <g className="hr-paint" style={{ opacity: 0 }}>
        <path d={ROBE} fill={PAINT} {...inked} />
        <g fill={C.cream} opacity=".7">
          <circle cx="-10" cy="-20" r="1.8" /><circle cx="2" cy="-30" r="1.8" /><circle cx="10" cy="-14" r="1.8" /><circle cx="-4" cy="-10" r="1.8" />
        </g>
        <path d="M-15 -42 Q0 -38 15 -42 L15 -36 Q0 -32 -15 -36Z" fill={C.saffron} {...inked} strokeWidth={2} />
      </g>
      <g className="hr-dripwin" style={{ opacity: 0 }}>
        <path className="hr-drip" d="M-18 -4 q2 4 0 6 q-2 -2 0 -6Z" fill={PAINT} stroke={INK} strokeWidth={1} />
        <path className="hr-drip" style={{ animationDelay: "-.4s" }} d="M8 -2 q2 4 0 6 q-2 -2 0 -6Z" fill={PAINT} stroke={INK} strokeWidth={1} />
        <path className="hr-drip" style={{ animationDelay: "-.2s" }} d="M20 -6 q2 4 0 6 q-2 -2 0 -6Z" fill={PAINT} stroke={INK} strokeWidth={1} />
      </g>
      <g className="hr-armL" style={{ transformOrigin: "-12px -54px", transformBox: "view-box" }} transform="rotate(160)">
        <Sleeve side={-1} />
      </g>
      <g className="hr-armR" style={{ transformOrigin: "12px -54px", transformBox: "view-box" }} transform="rotate(-160)">
        <Sleeve side={1} />
      </g>
      <g transform="translate(0 -74)">
        <g className="hr-look">
          <g className="hr-fs"><Face mood="scared" /></g>
          <g className="hr-fm" style={{ opacity: 0 }}><Face mood="smug" /></g>
          <g className="hr-fc" style={{ opacity: 0 }}><Face mood="serious" /></g>
        </g>
        <g className="hr-swwin">
          <g transform="translate(-15 -6)"><path className="hr-sweat" d="M0 -4 Q3 1 0 3 Q-3 1 0 -4Z" fill="#9fd8ef" stroke={INK} strokeWidth={1} /></g>
          <g transform="translate(15 -8)"><path className="hr-sweat" style={{ animationDelay: "-.5s" }} d="M0 -4 Q3 1 0 3 Q-3 1 0 -4Z" fill="#9fd8ef" stroke={INK} strokeWidth={1} /></g>
        </g>
        <g className="hr-kolah"><LoudHat /></g>
        <g className="hr-turb" style={{ opacity: 0 }}><Turban color={C.white} /></g>
      </g>
    </g>
  );
}

function Crowd({ x, y, s }: { x: number; y: number; s: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className="hr-bob">
        <Person robe={C.turquoise} sash={C.saffron} hat={C.white} mood="serious" />
      </g>
    </g>
  );
}

export default function Hamrang({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="خواهی نشوی رسوا، همرنگ جماعت شو" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <defs>
        <clipPath id="hr-robe"><path d={ROBE} /></clipPath>
      </defs>

      <rect x="-10" y="-10" width="420" height="320" fill="#cfd9e8" />
      <Cloud x={34} y={62} s={1.05} className="hr-cloud" />
      <Cloud x={300} y={50} s={.9} className="hr-cloud" style={{ animationDelay: "-4s" }} />

      <rect x="-10" y="118" width="420" height="122" fill={C.cream} {...inked} />
      <rect x="-10" y="118" width="420" height="12" fill={C.turquoise} stroke={INK} strokeWidth={2} />
      {Array.from({ length: 11 }, (_, i) => (
        <Star8 key={i} x={10 + i * 40} y={124} r={4} fill={C.saffron} />
      ))}
      {[30, 100, 300, 370].map((x) => (
        <g key={x}>
          <path d={`M${x - 22} 236 V170 Q${x - 22} 148 ${x} 142 Q${x + 22} 148 ${x + 22} 170 V236Z`} fill={C.lapis} {...inked} />
          <path d={`M${x - 14} 236 V174 Q${x - 14} 158 ${x} 153 Q${x + 14} 158 ${x + 14} 174 V236`} fill="none" stroke={C.firouzeh} strokeWidth={2} />
        </g>
      ))}
      <path d="M150 240 V104 L250 104 V240Z" fill="#e7d4ad" {...inked} />
      <path d="M164 240 V150 Q164 122 200 112 Q236 122 236 150 V240Z" fill={C.turquoise} {...inked} />
      <path d="M174 240 V156 Q174 134 200 126 Q226 134 226 156 V240" fill="none" stroke={C.saffron} strokeWidth={2} strokeDasharray="2 4" />
      <path d="M168 104 Q168 70 200 62 Q232 70 232 104Z" fill={C.firouzeh} {...inked} />
      <path d="M200 62 V48" stroke={INK} strokeWidth={2.5} />
      <circle cx="200" cy="46" r="3.5" fill={C.saffron} {...inked} strokeWidth={1.6} />
      <path d="M176 92 Q200 80 224 92" fill="none" stroke={C.lapis} strokeWidth={2} />
      <g transform="translate(250 104)">
        <g className="hr-flag o-left">
          <path d="M0 0 L22 -8 L22 4 L0 10Z" fill={C.pomegranate} {...inked} strokeWidth={1.6} />
        </g>
      </g>
      <path d="M250 104 V96" stroke={INK} strokeWidth={2} />

      <Ground y={236} color={C.sand} />
      <path d="M30 256 q6 -5 12 0 M350 258 q6 -5 12 0 M120 278 q6 -5 12 0" fill="none" stroke={INK} strokeWidth={1.2} opacity=".5" />

      <Crowd x={88} y={244} s={.56} />
      <Crowd x={162} y={244} s={.56} />
      <Crowd x={238} y={244} s={.56} />
      <Crowd x={312} y={244} s={.56} />

      <Crowd x={50} y={274} s={.66} />
      <Crowd x={125} y={274} s={.66} />
      <Crowd x={275} y={274} s={.66} />
      <Crowd x={350} y={274} s={.66} />

      <g transform="translate(200 274) scale(.66)">
        <g className="hr-bob">
          <LoudGuy />
          <g className="hr-cloth" style={{ opacity: 0 }}>
            <path d="M-34 -70 L34 -70 L32 -4 Q0 2 -32 -4Z" fill={C.turquoise} {...inked} />
            <path d="M-30 -60 H30 M-30 -14 H30" stroke={C.cream} strokeWidth={2} strokeDasharray="3 4" />
            <path d="M-32 -4 v5 M-24 -3 v5 M-16 -2 v5 M-8 -1 v5 M0 -1 v5 M8 -1 v5 M16 -2 v5 M24 -3 v5 M32 -4 v5" stroke={INK} strokeWidth={1.4} />
            <circle cx="-33" cy="-70" r="4.5" fill={SKIN} {...inked} strokeWidth={2} />
            <circle cx="33" cy="-70" r="4.5" fill={SKIN} {...inked} strokeWidth={2} />
          </g>
        </g>
      </g>

      <g transform="translate(200 140)">
        <g className="hr-bucket" style={{ opacity: 0 }}>
          <path d="M-14 -16 L14 -16 L11 14 L-11 14Z" fill="#9aa3ad" {...inked} />
          <ellipse cx="0" cy="-16" rx="14" ry="4" fill={PAINT} {...inked} strokeWidth={2} />
          <path d="M-14 -14 Q0 -36 14 -14" fill="none" stroke={INK} strokeWidth={2} />
          <path d="M-12 0 H12" stroke={INK} strokeWidth={1.2} />
        </g>
      </g>
      <path className="hr-pour o-top" style={{ opacity: 0 }} d="M196 156 Q192 186 197 214 L205 214 Q210 186 204 156Z" fill={PAINT} {...inked} strokeWidth={2} />
      <g transform="translate(200 214)">
        <g className="hr-splash" style={{ opacity: 0 }}>
          <circle cx="-22" cy="-6" r="5" fill={PAINT} {...inked} strokeWidth={1.6} />
          <circle cx="24" cy="-10" r="4" fill={PAINT} {...inked} strokeWidth={1.6} />
          <circle cx="-14" cy="-22" r="3.5" fill={PAINT} {...inked} strokeWidth={1.6} />
          <circle cx="16" cy="-24" r="3" fill={PAINT} {...inked} strokeWidth={1.6} />
          <circle cx="0" cy="-30" r="4" fill={PAINT} {...inked} strokeWidth={1.6} />
          <circle cx="30" cy="4" r="3" fill={PAINT} {...inked} strokeWidth={1.6} />
          <circle cx="-30" cy="6" r="3" fill={PAINT} {...inked} strokeWidth={1.6} />
        </g>
      </g>

      <g transform="translate(200 192)">
        <text className="hr-bang" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="24" fill={C.pomegranate} stroke={INK} strokeWidth={1}>!</text>
      </g>
      <g transform="translate(200 210)">
        <text className="hr-q" style={{ transform: "scale(0)" }} x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="16" fill={C.lapis} stroke={INK} strokeWidth={.8}>؟</text>
      </g>
      <g transform="translate(162 186)">
        <text className="hr-q" style={{ transform: "scale(0)", animationDelay: ".2s" }} x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="13" fill={C.lapis} stroke={INK} strokeWidth={.7}>؟</text>
      </g>
      <g transform="translate(275 210)">
        <text className="hr-q" style={{ transform: "scale(0)", animationDelay: ".35s" }} x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="13" fill={C.lapis} stroke={INK} strokeWidth={.7}>؟</text>
      </g>

      {big && <Bubble x={214} y={176} w={96} text="من کدومم؟" className="hr-bub o-bottom" style={{ opacity: 0 }} />}
    </Scene>
  );
}
