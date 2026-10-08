import type { ReactNode } from "react";
import { Scene, Face, Turban, Star8, Bubble, C, INK, SKIN, inked } from "./parts";
import type { SceneProps } from "./types";

type Kind = "apple" | "orange" | "pom" | "ball" | "moon" | "planet" | "stone" | "pot" | "melon" | "walnut";

const CSS = `
@keyframes gd-armR{0%{transform:rotate(-20deg)}2%,14%{transform:rotate(-100deg)}16%{transform:rotate(-170deg)}19%,33%{transform:rotate(-100deg)}35%{transform:rotate(-170deg)}38%,54%{transform:rotate(-100deg)}56%{transform:rotate(-175deg)}59%{transform:rotate(-20deg)}62%{transform:rotate(-150deg)}64%{transform:rotate(-40deg)}66%{transform:rotate(-150deg)}68%,70%{transform:rotate(-20deg)}71%{transform:rotate(-4deg)}72%{transform:rotate(-24deg)}73%{transform:rotate(-4deg)}74%{transform:rotate(-24deg)}75%{transform:rotate(-4deg)}77%,95%{transform:rotate(-165deg)}99%,100%{transform:rotate(-20deg)}}
.gd-armR{animation:gd-armR 8s ease-in-out infinite}
@keyframes gd-armL{0%{transform:rotate(15deg)}2%{transform:rotate(-120deg)}7%{transform:rotate(-112deg)}11%{transform:rotate(-124deg)}26%{transform:rotate(-112deg)}45%{transform:rotate(-124deg)}56%{transform:rotate(-120deg)}59%{transform:rotate(15deg)}62%{transform:rotate(150deg)}64%{transform:rotate(40deg)}66%{transform:rotate(150deg)}68%,100%{transform:rotate(15deg)}}
.gd-armL{animation:gd-armL 8s ease-in-out infinite}
@keyframes gd-glass{0%,1%{opacity:0}2%,57%{opacity:1}59%,100%{opacity:0}}
.gd-glass{animation:gd-glass 8s linear infinite}
@keyframes gd-iA{0%,1.5%{opacity:0;transform:scale(0)}3%{opacity:1;transform:scale(1.2)}4%,14.5%{opacity:1;transform:scale(1)}15%,100%{opacity:0;transform:scale(1)}}
@keyframes gd-iB{0%,19.5%{opacity:0;transform:scale(0)}21%{opacity:1;transform:scale(1.2)}22%,33.5%{opacity:1;transform:scale(1)}34%,100%{opacity:0;transform:scale(1)}}
@keyframes gd-iC{0%,38.5%{opacity:0;transform:scale(0)}40%{opacity:1;transform:scale(1.2)}41%,55.5%{opacity:1;transform:scale(1)}56%,100%{opacity:0;transform:scale(1)}}
@keyframes gd-iW{0%,75%{opacity:0;transform:scale(0)}77%{opacity:1;transform:scale(1.6)}79%,95%{opacity:1;transform:scale(1)}97%,100%{opacity:0;transform:scale(1)}}
.gd-iA{animation:gd-iA 8s ease-out infinite}
.gd-iB{animation:gd-iB 8s ease-out infinite}
.gd-iC{animation:gd-iC 8s ease-out infinite}
.gd-iW{animation:gd-iW 8s ease-out infinite}
@keyframes gd-tA{0%,14.5%{transform:translate(0px,0px) rotate(0deg);opacity:0}15%{transform:translate(0px,0px) rotate(0deg);opacity:1}19%{transform:translate(70px,-110px) rotate(260deg);opacity:1}24%{transform:translate(140px,-40px) rotate(520deg);opacity:1}26%,100%{transform:translate(150px,-20px) rotate(560deg);opacity:0}}
@keyframes gd-tB{0%,33.5%{transform:translate(0px,0px) rotate(0deg);opacity:0}34%{transform:translate(0px,0px) rotate(0deg);opacity:1}38%{transform:translate(-90px,-120px) rotate(-260deg);opacity:1}43%{transform:translate(-170px,-30px) rotate(-520deg);opacity:1}45%,100%{transform:translate(-180px,-10px) rotate(-560deg);opacity:0}}
@keyframes gd-tC{0%,55.5%{transform:translate(0px,0px) rotate(0deg) scale(1);opacity:0}56%{transform:translate(0px,0px) rotate(0deg) scale(1);opacity:1}62%{transform:translate(30px,-140px) rotate(40deg) scale(.7);opacity:1}66%,100%{transform:translate(40px,-200px) rotate(60deg) scale(.3);opacity:0}}
.gd-tA{animation:gd-tA 8s ease-out infinite}
.gd-tB{animation:gd-tB 8s ease-out infinite}
.gd-tC{animation:gd-tC 8s ease-out infinite}
@keyframes gd-head{0%,9%{transform:rotate(0deg)}10%{transform:rotate(-12deg)}11%{transform:rotate(12deg)}12%{transform:rotate(-12deg)}13%{transform:rotate(12deg)}14%,29%{transform:rotate(0deg)}30%{transform:rotate(-12deg)}31%{transform:rotate(12deg)}32%{transform:rotate(-12deg)}33%,49%{transform:rotate(0deg)}50%{transform:rotate(-15deg)}51%{transform:rotate(15deg)}52%{transform:rotate(-15deg)}53%{transform:rotate(15deg)}54%,77%{transform:rotate(0deg)}80%,94%{transform:rotate(-7deg)}97%,100%{transform:rotate(0deg)}}
.gd-head{animation:gd-head 8s ease-in-out infinite}
@keyframes gd-fs{0%,76%{opacity:1}77%,96%{opacity:0}97%,100%{opacity:1}}
.gd-fs{animation:gd-fs 8s linear infinite}
@keyframes gd-fh{0%,76%{opacity:0}77%,96%{opacity:1}97%,100%{opacity:0}}
.gd-fh{animation:gd-fh 8s linear infinite}
@keyframes gd-stomp{0%,59%{transform:translateY(0px)}61%{transform:translateY(-8px)}62%{transform:translateY(0px)}64%{transform:translateY(-8px)}65%{transform:translateY(0px)}67%{transform:translateY(-8px)}68%,77%{transform:translateY(0px)}79%{transform:translateY(-6px)}81%,100%{transform:translateY(0px)}}
.gd-stomp{animation:gd-stomp 8s ease-in-out infinite}
@keyframes gd-angry{0%,58%{opacity:0;transform:scale(0) rotate(0deg)}60%{opacity:1;transform:scale(1.2) rotate(0deg)}62%{opacity:1;transform:scale(1) rotate(8deg)}64%{opacity:1;transform:scale(1.1) rotate(-8deg)}66%{opacity:1;transform:scale(1) rotate(8deg)}69%{opacity:1;transform:scale(1) rotate(0deg)}71%,100%{opacity:0;transform:scale(0) rotate(0deg)}}
.gd-angry{animation:gd-angry 8s ease-out infinite}
@keyframes gd-thud{0%,23%{transform:translateY(0px)}24%{transform:translateY(-3px)}26%,42%{transform:translateY(0px)}43%{transform:translateY(-3px)}45%,100%{transform:translateY(0px)}}
.gd-thud{animation:gd-thud 8s ease-out infinite}
@keyframes gd-spark{0%,76%{opacity:0}78%,95%{opacity:1}97%,100%{opacity:0}}
.gd-spark{animation:gd-spark 8s linear infinite}
@keyframes gd-tw{0%,100%{transform:scale(.4) rotate(0deg)}50%{transform:scale(1.15) rotate(45deg)}}
.gd-tw{animation:gd-tw 1s ease-in-out infinite}
@keyframes gd-bang{0%,75%{transform:scale(0)}77%{transform:scale(1.4)}79%,94%{transform:scale(1)}96%,100%{transform:scale(0)}}
.gd-bang{animation:gd-bang 8s ease-out infinite}
@keyframes gd-say{0%,78%{transform:scale(0);opacity:0}80%{transform:scale(1.1);opacity:1}82%,94%{transform:scale(1);opacity:1}96%,100%{transform:scale(0);opacity:0}}
.gd-say{animation:gd-say 8s ease-out infinite}
`;

function Item({ kind, cx, cy, r }: { kind: Kind; cx: number; cy: number; r: number }) {
  const sw = r > 6 ? 2 : 1.4;
  switch (kind) {
    case "apple":
      return (
        <g>
          <circle cx={cx} cy={cy} r={r} fill="#d0453a" {...inked} strokeWidth={sw} />
          <path d={`M${cx} ${cy - r + 1} q1 -4 3 -5`} stroke={INK} strokeWidth={1.4} fill="none" strokeLinecap="round" />
          <path d={`M${cx + 2} ${cy - r - 2} q5 -3 7 1 q-4 2 -7 -1Z`} fill={C.olive} stroke={INK} strokeWidth={1} />
          <circle cx={cx - r * .4} cy={cy - r * .3} r={r * .2} fill={C.white} opacity=".6" />
        </g>
      );
    case "orange":
      return (
        <g>
          <circle cx={cx} cy={cy} r={r} fill="#ee9a2e" {...inked} strokeWidth={sw} />
          <circle cx={cx - r * .3} cy={cy - r * .2} r=".9" fill="#b86a14" />
          <circle cx={cx + r * .3} cy={cy + r * .2} r=".9" fill="#b86a14" />
          <circle cx={cx} cy={cy - r + 1.5} r="1.3" fill={C.olive} />
        </g>
      );
    case "pom":
      return (
        <g>
          <circle cx={cx} cy={cy} r={r} fill={C.pomegranate} {...inked} strokeWidth={sw} />
          <path d={`M${cx - 3} ${cy - r + 1} l1 -4 l2 3 l2 -3 l1 4Z`} fill={C.pomegranate} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
          <circle cx={cx - r * .4} cy={cy - r * .3} r={r * .18} fill={C.white} opacity=".5" />
        </g>
      );
    case "ball":
      return (
        <g>
          <circle cx={cx} cy={cy} r={r} fill={C.white} {...inked} strokeWidth={sw} />
          <path d={`M${cx - r} ${cy} Q${cx} ${cy - r * .6} ${cx + r} ${cy} M${cx - r * .7} ${cy + r * .7} Q${cx} ${cy + r * .1} ${cx + r * .7} ${cy + r * .7}`} fill="none" stroke={C.lapis} strokeWidth={2} />
          <path d={`M${cx} ${cy - r} Q${cx - r * .4} ${cy} ${cx} ${cy + r}`} fill="none" stroke={C.pomegranate} strokeWidth={2} />
        </g>
      );
    case "moon":
      return (
        <g>
          <circle cx={cx} cy={cy} r={r} fill={C.cream} {...inked} strokeWidth={sw} />
          <circle cx={cx - r * .35} cy={cy - r * .2} r={r * .22} fill="#d8cba8" stroke={INK} strokeWidth={1} />
          <circle cx={cx + r * .35} cy={cy + r * .3} r={r * .16} fill="#d8cba8" stroke={INK} strokeWidth={1} />
          <circle cx={cx + r * .25} cy={cy - r * .45} r={r * .1} fill="#d8cba8" />
        </g>
      );
    case "planet":
      return (
        <g>
          <circle cx={cx} cy={cy} r={r} fill="#e0b860" {...inked} strokeWidth={sw} />
          <path d={`M${cx - r} ${cy - r * .2} Q${cx} ${cy + r * .2} ${cx + r} ${cy - r * .2}`} fill="none" stroke="#c08a3a" strokeWidth={1.6} />
          <ellipse cx={cx} cy={cy + r * .1} rx={r * 1.7} ry={r * .45} fill="none" stroke={INK} strokeWidth={sw + 2} />
          <ellipse cx={cx} cy={cy + r * .1} rx={r * 1.7} ry={r * .45} fill="none" stroke={C.firouzeh} strokeWidth={sw} />
          <path d={`M${cx - r * .95} ${cy - r * .2} A${r} ${r} 0 0 1 ${cx + r * .95} ${cy - r * .2}`} fill="#e0b860" stroke={INK} strokeWidth={sw} />
        </g>
      );
    case "stone":
      return <ellipse cx={cx} cy={cy + r * .15} rx={r} ry={r * .85} fill="#9a958e" {...inked} strokeWidth={sw} />;
    case "pot":
      return (
        <g>
          <rect x={cx - r * .35} y={cy - r * 1.3} width={r * .7} height={r * .6} fill={C.terracotta} {...inked} strokeWidth={sw} />
          <circle cx={cx} cy={cy} r={r} fill={C.terracotta} {...inked} strokeWidth={sw} />
          <path d={`M${cx - r * .8} ${cy - r * .1} Q${cx} ${cy + r * .3} ${cx + r * .8} ${cy - r * .1}`} fill="none" stroke={C.cream} strokeWidth={1.6} />
        </g>
      );
    case "melon":
      return (
        <g>
          <ellipse cx={cx} cy={cy} rx={r * 1.15} ry={r} fill={C.olive} {...inked} strokeWidth={sw} />
          <path d={`M${cx} ${cy - r} Q${cx - r * .6} ${cy} ${cx} ${cy + r} M${cx} ${cy - r} Q${cx + r * .6} ${cy} ${cx} ${cy + r}`} fill="none" stroke="#a9cf7f" strokeWidth={1.8} />
        </g>
      );
    case "walnut":
      return (
        <g>
          <circle cx={cx} cy={cy} r={r} fill="#a87a4a" {...inked} strokeWidth={1.4} />
          <path d={`M${cx} ${cy - r} V${cy + r} M${cx - r * .6} ${cy - r * .3} q1 1 0 2 M${cx + r * .6} ${cy} q-1 1 0 2`} fill="none" stroke={INK} strokeWidth={.9} />
        </g>
      );
  }
}

const SHELF: [Kind, number, number][][] = [
  [["apple", 48, 8], ["orange", 72, 9], ["moon", 104, 14], ["pom", 136, 10], ["ball", 164, 11], ["apple", 232, 8], ["orange", 256, 9], ["planet", 292, 9], ["stone", 326, 10], ["orange", 352, 9]],
  [["pot", 48, 11], ["ball", 80, 10], ["melon", 114, 12], ["stone", 144, 8], ["stone", 162, 6], ["pom", 238, 10], ["pot", 270, 11], ["ball", 304, 11], ["apple", 338, 8], ["orange", 358, 7]],
  [["orange", 46, 9], ["orange", 66, 9], ["ball", 96, 12], ["pot", 132, 11], ["melon", 272, 13], ["stone", 306, 9], ["pom", 330, 10], ["moon", 356, 10]],
];
const ROWS = [78, 132, 186];

function Body({ armL, armR, armLClass, armRClass, handL, handR, head }: {
  armL: number; armR: number; armLClass: string; armRClass: string; handL: ReactNode; handR: ReactNode; head: ReactNode;
}) {
  const robe = C.lapis;
  return (
    <g>
      <path d="M-14 0 Q-14 -6 -6 -6 L-4 0Z M4 0 L6 -6 Q14 -6 14 0Z" fill={C.pomegranate} {...inked} strokeWidth={2} />
      <path d="M-22 -4 Q-20 -40 -12 -58 L12 -58 Q20 -40 22 -4 Q0 2 -22 -4Z" fill={robe} {...inked} />
      <g fill={C.cream} opacity=".7">
        <circle cx="-10" cy="-20" r="1.8" /><circle cx="2" cy="-30" r="1.8" /><circle cx="10" cy="-14" r="1.8" /><circle cx="-4" cy="-10" r="1.8" />
      </g>
      <path d="M-15 -42 Q0 -38 15 -42 L15 -36 Q0 -32 -15 -36Z" fill={C.saffron} {...inked} strokeWidth={2} />
      <path d="M6 -38 Q10 -30 14 -36" fill="none" stroke={INK} strokeWidth={1.2} />
      <g className={armLClass} style={{ transformOrigin: "-12px -54px", transformBox: "view-box" }} transform={`rotate(${armL})`}>
        {handL}
        <path d="M-12 -54 Q-18 -40 -16 -28" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
        <path d="M-12 -54 Q-18 -40 -16 -28" fill="none" stroke={robe} strokeWidth={5.5} strokeLinecap="round" />
        <circle cx="-16" cy="-26" r="4.5" fill={SKIN} {...inked} strokeWidth={2} />
      </g>
      <g className={armRClass} style={{ transformOrigin: "12px -54px", transformBox: "view-box" }} transform={`rotate(${armR})`}>
        <path d="M12 -54 Q18 -40 16 -28" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
        <path d="M12 -54 Q18 -40 16 -28" fill="none" stroke={robe} strokeWidth={5.5} strokeLinecap="round" />
        {handR}
        <circle cx="16" cy="-26" r="4.5" fill={SKIN} {...inked} strokeWidth={2} />
      </g>
      <g transform="translate(0 -74)">{head}</g>
    </g>
  );
}

export default function Gerdoo({ playing = true, big = false }: SceneProps) {
  const glass = (
    <g className="gd-glass" style={{ opacity: 0 }}>
      <path d="M-16 -26 V-13" stroke={INK} strokeWidth={5} strokeLinecap="round" />
      <path d="M-16 -26 V-13" stroke="#7a4a2e" strokeWidth={2.5} strokeLinecap="round" />
      <circle cx="-16" cy="-1" r="11" fill="#e8f4f8" stroke={INK} strokeWidth={3} />
      <g transform="rotate(120 -16 -1)">
        <path d="M-26 -1 Q-16 -9 -6 -1 Q-16 6 -26 -1Z" fill={C.white} stroke={INK} strokeWidth={1.2} />
        <circle cx="-12" cy="-1" r="3.4" fill={INK} />
        <circle cx="-11" cy="-2.2" r="1" fill={C.white} />
        <path d="M-25 -7 Q-16 -12 -7 -7" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      </g>
      <path d="M-22 -6 Q-20 -9 -17 -9" fill="none" stroke={C.white} strokeWidth={1.6} strokeLinecap="round" />
    </g>
  );
  const items = (
    <>
      <g transform="translate(16 -26) rotate(100)">
        <g className="gd-iA" style={{ opacity: 0 }}><Item kind="apple" cx={0} cy={-8} r={7} /></g>
        <g className="gd-iB" style={{ opacity: 0 }}><Item kind="ball" cx={0} cy={-9} r={8} /></g>
        <g className="gd-iC" style={{ opacity: 0 }}><Item kind="planet" cx={0} cy={-9} r={7} /></g>
      </g>
      <g transform="translate(16 -26) rotate(165)">
        <g className="gd-iW"><Item kind="walnut" cx={0} cy={-6} r={3.5} /></g>
      </g>
    </>
  );
  const head = (
    <g className="gd-head o-bottom">
      <g className="gd-fs" style={{ opacity: 0 }}><Face mood="serious" /></g>
      <g className="gd-fh"><Face mood="smug" /></g>
      <Turban color={C.white} />
    </g>
  );

  return (
    <Scene title="هر گردی گردو نیست" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#d9c7a6" />
      <rect x="-10" y="-10" width="420" height="22" fill={C.terracotta} stroke={INK} strokeWidth={2} />
      {Array.from({ length: 11 }, (_, i) => (
        <Star8 key={i} x={10 + i * 40} y={1} r={5} fill={C.saffron} />
      ))}
      <rect x="20" y="24" width="360" height="172" fill="#c4a77c" {...inked} />
      <path d="M20 24 V196 M380 24 V196" stroke={INK} strokeWidth={6} />

      <g className="gd-thud">
        {SHELF.map((row, ri) => (
          <g key={ri}>
            {row.map(([k, x, r], i) => (
              <Item key={i} kind={k} cx={x} cy={ROWS[ri] - r} r={r} />
            ))}
          </g>
        ))}
      </g>
      {ROWS.map((y) => (
        <g key={y}>
          <rect x="16" y={y} width="368" height="8" fill="#8a5a34" {...inked} strokeWidth={2} />
          <path d={`M30 ${y + 8} q4 6 8 0 M362 ${y + 8} q4 6 8 0`} fill="none" stroke={INK} strokeWidth={1.4} />
        </g>
      ))}

      <rect x="-10" y="250" width="420" height="60" fill="#a8744a" stroke={INK} strokeWidth={2.5} />
      <path d="M-10 262 H410" stroke={INK} strokeWidth={1} strokeDasharray="2 6" opacity=".5" />
      <path d="M22 280 L30 252 H74 L82 280Z" fill="#c9a060" {...inked} />
      <path d="M28 262 H76" stroke={INK} strokeWidth={1.2} />
      <Item kind="orange" cx={40} cy={244} r={9} />
      <Item kind="orange" cx={60} cy={242} r={10} />
      <Item kind="apple" cx={50} cy={232} r={8} />
      <Item kind="melon" cx={350} cy={262} r={13} />
      <Item kind="ball" cx={322} cy={270} r={10} />
      <Item kind="pot" cx={372} cy={240} r={9} />

      <g transform="translate(215 182)">
        <g className="gd-tA" style={{ opacity: 0 }}><Item kind="apple" cx={0} cy={0} r={8} /></g>
      </g>
      <g transform="translate(215 182)">
        <g className="gd-tB" style={{ opacity: 0 }}><Item kind="ball" cx={0} cy={0} r={10} /></g>
      </g>
      <g transform="translate(215 182)">
        <g className="gd-tC" style={{ opacity: 0 }}><Item kind="planet" cx={0} cy={0} r={9} /></g>
      </g>

      <ellipse cx="200" cy="287" rx="34" ry="5" fill={INK} opacity=".15" />
      <g transform="translate(200 286) scale(1.2)">
        <g className="gd-stomp">
          <Body armL={15} armR={-165} armLClass="gd-armL" armRClass="gd-armR" handL={glass} handR={items} head={head} />
        </g>
      </g>

      <g transform="translate(200 146)">
        <g className="gd-angry" style={{ opacity: 0 }}>
          <path d="M-16 0 Q-20 -12 -8 -12 Q-4 -20 6 -14 Q18 -16 16 -4 Q22 6 10 6 Q2 12 -6 6 Q-20 8 -16 0Z" fill="#6a6a70" {...inked} strokeWidth={2} />
          <path d="M-8 -4 l4 -4 l2 4 l4 -4 l2 4 l4 -4" fill="none" stroke={C.white} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>

      <g className="gd-spark">
        <Star8 x={204} y={168} r={5} fill={C.saffron} className="gd-tw" />
        <Star8 x={236} y={172} r={4} fill={C.white} className="gd-tw" style={{ animationDelay: "-.3s" }} />
        <Star8 x={228} y={152} r={5} fill={C.saffron} className="gd-tw" style={{ animationDelay: "-.6s" }} />
        <Star8 x={206} y={192} r={3.5} fill={C.white} className="gd-tw" style={{ animationDelay: "-.45s" }} />
      </g>
      <g transform="translate(244 154)">
        <text className="gd-bang" style={{ transform: "scale(0)" }} x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="22" fill={C.pomegranate} stroke={INK} strokeWidth={1}>!</text>
      </g>

      {big && <Bubble x={186} y={150} w={80} text="پیدا شد!" flip className="gd-say o-bottom" style={{ opacity: 0 }} />}
    </Scene>
  );
}
