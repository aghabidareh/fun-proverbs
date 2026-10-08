import { Scene, Person, Ground, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const CHICK = "#f7d64a";
const CHICK_DK = "#e0a92a";

const CSS = `
@keyframes jj-leaf{0%{transform:translate(0px,-30px) rotate(0deg);opacity:0}10%{opacity:1}35%{transform:translate(-24px,70px) rotate(140deg)}65%{transform:translate(18px,170px) rotate(300deg)}90%{opacity:1}100%{transform:translate(-6px,250px) rotate(460deg);opacity:0}}
.jj-leaf{animation:jj-leaf 7s linear infinite}
@keyframes jj-sway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}
.jj-sway{animation:jj-sway 4s ease-in-out infinite}
@keyframes jj-hop{0%,100%{transform:translateY(0px)}50%{transform:translateY(-4px)}}
.jj-hop{animation:jj-hop .32s ease-in-out infinite}
@keyframes jj-ra{0%{transform:translate(0px,0px) scaleX(1)}20%{transform:translate(-46px,4px) scaleX(1)}22%{transform:translate(-46px,4px) scaleX(-1)}45%{transform:translate(30px,-3px) scaleX(-1)}47%{transform:translate(30px,-3px) scaleX(1)}70%{transform:translate(-20px,6px) scaleX(1)}72%{transform:translate(-20px,6px) scaleX(-1)}98%{transform:translate(0px,0px) scaleX(-1)}100%{transform:translate(0px,0px) scaleX(1)}}
@keyframes jj-rb{0%,6%{transform:translate(0px,0px) scaleX(1)}8%{transform:translate(0px,0px) scaleX(-1)}40%{transform:translate(190px,-6px) scaleX(-1)}55%{transform:translate(190px,-6px) scaleX(1)}90%,100%{transform:translate(0px,0px) scaleX(1)}}
@keyframes jj-rc{0%{transform:translate(0px,0px) scaleX(1)}25%{transform:translate(-30px,10px) scaleX(1)}27%{transform:translate(-30px,10px) scaleX(-1)}50%{transform:translate(10px,16px) scaleX(-1)}75%{transform:translate(40px,2px) scaleX(-1)}77%{transform:translate(40px,2px) scaleX(1)}100%{transform:translate(0px,0px) scaleX(1)}}
@keyframes jj-rd{0%,10%{transform:translate(0px,0px) scaleX(1)}35%,45%{transform:translate(-110px,8px) scaleX(1)}47%{transform:translate(-110px,8px) scaleX(-1)}80%{transform:translate(0px,0px) scaleX(-1)}82%,100%{transform:translate(0px,0px) scaleX(1)}}
@keyframes jj-re{0%{transform:translate(0px,0px) scaleX(-1)}30%{transform:translate(60px,-4px) scaleX(-1)}32%{transform:translate(60px,-4px) scaleX(1)}60%{transform:translate(-40px,6px) scaleX(1)}62%{transform:translate(-40px,6px) scaleX(-1)}100%{transform:translate(0px,0px) scaleX(-1)}}
.jj-ra{animation:jj-ra 5s linear infinite}
.jj-rb{animation:jj-rb 6s linear infinite}
.jj-rc{animation:jj-rc 5s linear infinite}
.jj-rd{animation:jj-rd 6s linear infinite}
.jj-re{animation:jj-re 5s linear infinite}
@keyframes jj-point{0%,100%{transform:rotate(-80deg)}7%{transform:rotate(-96deg)}14%{transform:rotate(-74deg)}22%{transform:rotate(-100deg)}29%{transform:rotate(-70deg)}37%{transform:rotate(-92deg)}44%{transform:rotate(-78deg)}48%{transform:rotate(-112deg)}52%{transform:rotate(-58deg)}56%{transform:rotate(-108deg)}60%{transform:rotate(-62deg)}64%,84%{transform:rotate(-15deg)}90%{transform:rotate(-80deg)}}
.jj-point{animation:jj-point 8s ease-in-out infinite}
@keyframes jj-scratch{0%,62%{transform:rotate(15deg)}65%{transform:rotate(166deg)}67%{transform:rotate(172deg)}69%{transform:rotate(160deg)}71%{transform:rotate(172deg)}73%{transform:rotate(160deg)}75%{transform:rotate(172deg)}77%{transform:rotate(161deg)}79%{transform:rotate(170deg)}82%,100%{transform:rotate(15deg)}}
.jj-scratch{animation:jj-scratch 8s ease-in-out infinite}
@keyframes jj-tilt{0%,44%{transform:rotate(0deg)}48%{transform:rotate(-6deg)}52%{transform:rotate(5deg)}56%{transform:rotate(-6deg)}60%{transform:rotate(4deg)}64%,80%{transform:rotate(-8deg)}84%,100%{transform:rotate(0deg)}}
.jj-tilt{animation:jj-tilt 8s ease-in-out infinite}
@keyframes jj-n7{0%,14%{opacity:1}15%,100%{opacity:0}}
@keyframes jj-n8{0%,14%{opacity:0}15%,29%{opacity:1}30%,100%{opacity:0}}
@keyframes jj-n9{0%,29%{opacity:0}30%,44%{opacity:1}45%,100%{opacity:0}}
@keyframes jj-nx1{0%,44%{opacity:0}45%,49%{opacity:1}50%,56%{opacity:0}57%,59%{opacity:1}60%,100%{opacity:0}}
@keyframes jj-nx2{0%,49%{opacity:0}50%,56%{opacity:1}57%,59%{opacity:0}60%,62%{opacity:1}63%,100%{opacity:0}}
@keyframes jj-nq{0%,62%{opacity:0}63%,81%{opacity:1}82%,100%{opacity:0}}
@keyframes jj-n1{0%,81%{opacity:0}82%,100%{opacity:1}}
.jj-n7{animation:jj-n7 8s linear infinite}
.jj-n8{animation:jj-n8 8s linear infinite}
.jj-n9{animation:jj-n9 8s linear infinite}
.jj-nx1{animation:jj-nx1 8s linear infinite}
.jj-nx2{animation:jj-nx2 8s linear infinite}
.jj-nq{animation:jj-nq 8s linear infinite}
.jj-n1{animation:jj-n1 8s linear infinite}
@keyframes jj-tick{0%,13%,28%,43%,100%{transform:scale(1)}15%,30%,45%{transform:scale(1.25)}}
.jj-tick{animation:jj-tick 8s ease-out infinite}
@keyframes jj-shk{0%,44%{transform:translate(0px,0px) rotate(0deg)}46%{transform:translate(-2px,1px) rotate(-6deg)}48%{transform:translate(2px,-1px) rotate(5deg)}50%{transform:translate(-2px,0px) rotate(-4deg)}52%{transform:translate(2px,1px) rotate(6deg)}54%{transform:translate(-1px,-1px) rotate(-5deg)}56%{transform:translate(2px,0px) rotate(4deg)}58%{transform:translate(-2px,1px) rotate(-6deg)}60%{transform:translate(1px,0px) rotate(3deg)}62%,100%{transform:translate(0px,0px) rotate(0deg)}}
.jj-shk{animation:jj-shk 8s linear infinite}
@keyframes jj-b1{0%,7%{transform:translateX(0px)}9%,80%{transform:translateX(16px)}84%,100%{transform:translateX(0px)}}
@keyframes jj-b2{0%,21%{transform:translateX(0px)}23%,80%{transform:translateX(16px)}84%,100%{transform:translateX(0px)}}
@keyframes jj-b3{0%,36%{transform:translateX(0px)}38%,80%{transform:translateX(16px)}84%,100%{transform:translateX(0px)}}
.jj-b1{animation:jj-b1 8s ease-out infinite}
.jj-b2{animation:jj-b2 8s ease-out infinite}
.jj-b3{animation:jj-b3 8s ease-out infinite}
@keyframes jj-rattle{0%,44%,62%,100%{transform:translateX(0px)}47%{transform:translateX(-5px)}50%{transform:translateX(6px)}53%{transform:translateX(-4px)}56%{transform:translateX(5px)}59%{transform:translateX(-3px)}}
.jj-rattle{animation:jj-rattle 8s linear infinite}
@keyframes jj-sweatwin{0%,46%{opacity:0}50%,80%{opacity:1}84%,100%{opacity:0}}
.jj-sweatwin{animation:jj-sweatwin 8s linear infinite}
@keyframes jj-drip{0%{transform:translateY(0px);opacity:0}25%{opacity:1}100%{transform:translateY(16px);opacity:0}}
.jj-drip{animation:jj-drip 1s ease-in infinite}
@keyframes jj-q{0%,50%{transform:scale(0) rotate(0deg)}54%{transform:scale(1.3) rotate(-10deg)}58%,80%{transform:scale(1) rotate(8deg)}84%,100%{transform:scale(0) rotate(0deg)}}
.jj-q{animation:jj-q 8s ease-out infinite}
@keyframes jj-b-count{0%{transform:scale(0)}3%{transform:scale(1.1)}5%,42%{transform:scale(1)}45%,100%{transform:scale(0)}}
.jj-b-count{animation:jj-b-count 8s ease-out infinite}
@keyframes jj-b-huh{0%,49%{transform:scale(0)}52%{transform:scale(1.15)}54%,62%{transform:scale(1)}64%,100%{transform:scale(0)}}
.jj-b-huh{animation:jj-b-huh 8s ease-out infinite}
@keyframes jj-b-again{0%,82%{transform:scale(0)}85%{transform:scale(1.15)}87%,97%{transform:scale(1)}100%{transform:scale(0)}}
.jj-b-again{animation:jj-b-again 8s ease-out infinite}
`;

function Chick() {
  return (
    <g>
      <path d="M-3 -3 V0 M3 -3 V0 M-3 0 h-2.5 M3 0 h-2.5" fill="none" stroke={CHICK_DK} strokeWidth={1.6} strokeLinecap="round" />
      <ellipse cx="0" cy="-9" rx="8.5" ry="7" fill={CHICK} {...inked} strokeWidth={1.8} />
      <path d="M-1 -10 Q4 -12 6 -7 Q2 -6 -1 -10Z" fill={CHICK_DK} stroke={INK} strokeWidth={1.1} />
      <path d="M7 -10 L11 -12 L9 -8Z" fill={CHICK} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <circle cx="-6" cy="-16" r="5.5" fill={CHICK} {...inked} strokeWidth={1.8} />
      <path d="M-6 -21.5 q-1 -3 1 -4 M-6 -21.5 q2 -2 3 -1" fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      <path d="M-11 -16.5 L-15.5 -15 L-11 -13.5Z" fill={C.saffron} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
      <circle cx="-8" cy="-17" r="1.1" fill={INK} />
      <circle cx="-5" cy="-13.5" r="1.4" fill="#e58a7a" opacity=".6" />
    </g>
  );
}

function Leaf({ fill }: { fill: string }) {
  return (
    <g>
      <path d="M0 -7 Q7 -2 0 7 Q-7 -2 0 -7Z" fill={fill} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
      <path d="M0 -5 V9" stroke={INK} strokeWidth={1} strokeLinecap="round" />
    </g>
  );
}

const CHICKS: [number, number, string, number, number][] = [
  [212, 258, "jj-ra", 5, 0],
  [240, 268, "jj-rb", 6, -1],
  [270, 254, "jj-rc", 4.5, -2],
  [300, 276, "jj-rd", 7, -3],
  [330, 262, "jj-re", 5.5, -0.5],
  [352, 272, "jj-ra", 6.5, -2.5],
  [226, 280, "jj-rc", 5, -1.5],
  [286, 266, "jj-rb", 7.5, -4],
  [316, 254, "jj-ra", 4, -3],
  [256, 279, "jj-re", 6, -2],
  [344, 252, "jj-rd", 6, -1],
  [204, 271, "jj-rc", 5.5, -4.5],
];

const LEAVES: [number, number, string, number][] = [
  [60, 40, C.terracotta, 0],
  [120, 20, C.saffron, -1.2],
  [190, 34, C.pomegranate, -2.6],
  [250, 18, C.saffron, -3.4],
  [300, 44, C.terracotta, -4.6],
  [350, 26, "#d9822b", -5.5],
  [160, 60, "#d9822b", -6.3],
  [380, 70, C.pomegranate, -2],
];

export default function Jooje({ playing = true, big = false }: SceneProps) {
  const num = { fontFamily: "Vazirmatn", fontWeight: 900, fontSize: 17, fill: C.pomegranate, textAnchor: "middle" as const };
  return (
    <Scene title="جوجه رو آخر پاییز می‌شمارن" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#e8a95b" />
      <circle cx="330" cy="58" r="22" fill="#f6d27a" {...inked} />
      <path d="M-10 200 Q60 150 130 186 Q200 140 270 180 Q340 146 410 176 L410 260 L-10 260Z" fill="#c9774a" {...inked} />
      <path d="M-10 222 Q90 196 180 214 Q280 190 410 210 L410 260 L-10 260Z" fill="#a8873f" {...inked} />
      <path d="M40 214 q8 -6 16 0 M240 204 q8 -6 16 0 M330 200 q8 -6 16 0" fill="none" stroke={INK} strokeWidth={1.2} opacity=".5" />

      <path d="M24 258 L30 150 Q34 130 38 150 L44 258Z" fill="#7a4a2e" {...inked} />
      <path d="M34 170 L14 140 M36 160 L56 132" stroke={INK} strokeWidth={4} strokeLinecap="round" />
      <path d="M34 170 L14 140 M36 160 L56 132" stroke="#7a4a2e" strokeWidth={1.8} strokeLinecap="round" />
      <g className="jj-sway o-bottom">
        <circle cx="10" cy="120" r="26" fill={C.terracotta} {...inked} />
        <circle cx="52" cy="110" r="28" fill="#d9822b" {...inked} />
        <circle cx="30" cy="88" r="24" fill={C.saffron} {...inked} />
        <path d="M18 108 q6 -5 12 0 M46 96 q6 -5 12 0 M24 80 q6 -5 12 0" fill="none" stroke={INK} strokeWidth={1.2} opacity=".6" />
      </g>
      <path d="M362 258 L367 162 Q370 146 373 162 L378 258Z" fill="#7a4a2e" {...inked} />
      <g className="jj-sway o-bottom" style={{ animationDelay: "-2s" }}>
        <circle cx="352" cy="140" r="22" fill={C.pomegranate} {...inked} />
        <circle cx="388" cy="132" r="22" fill={C.terracotta} {...inked} />
        <circle cx="370" cy="112" r="22" fill="#d9822b" {...inked} />
      </g>

      <Ground y={255} color="#c9965a" />
      <g opacity=".95">
        <path d="M110 262 q6 -6 12 0 q6 -6 12 0" fill="none" stroke={C.terracotta} strokeWidth={3} strokeLinecap="round" />
        <path d="M20 278 q6 -6 12 0 q6 -6 12 0" fill="none" stroke={C.pomegranate} strokeWidth={3} strokeLinecap="round" />
        <path d="M150 288 q6 -6 12 0" fill="none" stroke={C.saffron} strokeWidth={3} strokeLinecap="round" />
      </g>

      {LEAVES.map(([x, y, f, d], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <g className="jj-leaf" style={{ animationDelay: `${d}s` }}><Leaf fill={f} /></g>
        </g>
      ))}

      <path d="M124 224 L116 258 M176 224 L184 258" stroke={INK} strokeWidth={6} strokeLinecap="round" />
      <path d="M124 224 L116 258 M176 224 L184 258" stroke="#8a5a3c" strokeWidth={3} strokeLinecap="round" />
      <rect x="120" y="178" width="60" height="46" rx="3" fill="#f6e3b8" stroke={INK} strokeWidth={4} />
      <rect x="120" y="178" width="60" height="46" rx="3" fill="none" stroke="#8a5a3c" strokeWidth={1.5} />
      <path d="M122 190 H178 M122 202 H178 M122 214 H178" stroke={INK} strokeWidth={1.3} />
      <g stroke={INK} strokeWidth={1.2}>
        <circle cx="127" cy="190" r="4" fill={C.turquoise} />
        <circle cx="135" cy="190" r="4" fill={C.turquoise} />
        <circle className="jj-b3" cx="143" cy="190" r="4" fill={C.pomegranate} />
        <circle className="jj-b2" cx="151" cy="190" r="4" fill={C.pomegranate} />
        <circle className="jj-b1" cx="159" cy="190" r="4" fill={C.pomegranate} />
      </g>
      <g className="jj-rattle" stroke={INK} strokeWidth={1.2}>
        {[127, 135, 143, 151, 171].map((x) => <circle key={x} cx={x} cy="202" r="4" fill={C.saffron} />)}
        {[127, 147, 155, 163, 171].map((x) => <circle key={x} cx={x} cy="214" r="4" fill={C.lapis} />)}
      </g>
      <path d="M134 174 V178 M166 174 V178" stroke={INK} strokeWidth={1.5} />
      <g className="jj-tick">
        <rect x="128" y="150" width="44" height="24" rx="3" fill={C.cream} {...inked} strokeWidth={2} />
        <path d="M131 153 h38 v18 h-38Z" fill="none" stroke={C.saffron} strokeWidth={1} strokeDasharray="2 2" />
        <text className="jj-n7" x="150" y="168" {...num} style={{ opacity: 0 }}>۷</text>
        <text className="jj-n8" x="150" y="168" {...num}>۸</text>
        <text className="jj-n9" x="150" y="168" {...num} style={{ opacity: 0 }}>۹</text>
        <g className="jj-shk">
          <text className="jj-nx1" x="150" y="168" {...num} fill={C.lapis} style={{ opacity: 0 }}>۱۷؟</text>
          <text className="jj-nx2" x="150" y="168" {...num} fill={C.lapis} style={{ opacity: 0 }}>۷؟</text>
        </g>
        <text className="jj-nq" x="150" y="168" {...num} style={{ opacity: 0 }}>؟!</text>
        <text className="jj-n1" x="150" y="168" {...num} fill={C.turquoise} style={{ opacity: 0 }}>۱</text>
      </g>

      <g transform="translate(72 262) scale(.85)">
        <g className="jj-tilt o-bottom">
          <Person robe={C.lapis} sash={C.saffron} hat={C.cream} mood="serious" beard armRClass="jj-point" armLClass="jj-scratch" armR={-80} armL={15}>
            <g fill="none" stroke={INK} strokeWidth={1.4}>
              <circle cx="-5" cy="-75" r="4.5" /><circle cx="5" cy="-75" r="4.5" /><path d="M-0.5 -75 H0.5" />
            </g>
          </Person>
        </g>
      </g>
      <g className="jj-sweatwin" style={{ opacity: 0 }}>
        <g transform="translate(58 192)"><path className="jj-drip" d="M0 -5 Q4 1 0 4 Q-4 1 0 -5Z" fill="#9fd8ef" stroke={INK} strokeWidth={1.2} /></g>
        <g transform="translate(88 188)"><path className="jj-drip" style={{ animationDelay: "-.5s" }} d="M0 -5 Q4 1 0 4 Q-4 1 0 -5Z" fill="#9fd8ef" stroke={INK} strokeWidth={1.2} /></g>
      </g>
      <g fontFamily="Vazirmatn" fontWeight={900} fontSize="20" fill={C.saffron} stroke={INK} strokeWidth={1.2} textAnchor="middle">
        <g transform="translate(58 170)"><text className="jj-q" x="0" y="0">؟</text></g>
        <g transform="translate(76 160)"><text className="jj-q" style={{ animationDelay: ".15s" }} x="0" y="0">؟</text></g>
        <g transform="translate(94 170)"><text className="jj-q" style={{ animationDelay: ".3s" }} x="0" y="0">؟</text></g>
      </g>

      {CHICKS.map(([x, y, cls, dur, d], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <g className={cls} style={{ animationDuration: `${dur}s`, animationDelay: `${d}s` }}>
            <g className="jj-hop" style={{ animationDelay: `${-i * 0.07}s` }}><Chick /></g>
          </g>
        </g>
      ))}

      <Star8 x={150} y={142} r={4} fill={C.saffron} className="jj-tick" />

      {big && (
        <g>
          <Bubble x={60} y={158} w={100} text="هفت، هشت، نُه..." className="jj-b-count o-bottom" />
          <Bubble x={60} y={158} w={64} text="هفت؟!" className="jj-b-huh o-bottom" style={{ transform: "scale(0)" }} />
          <Bubble x={60} y={158} w={72} text="از اول!" className="jj-b-again o-bottom" style={{ transform: "scale(0)" }} />
        </g>
      )}
    </Scene>
  );
}
