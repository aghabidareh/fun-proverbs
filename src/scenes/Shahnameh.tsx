import type { CSSProperties } from "react";
import { Scene, Cloud, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const GOLD = "#e3b23c";
const GOLD_DK = "#b8862a";
const DIV = "#6a9a8e";
const DIV_DK = "#4d7a70";
const PLASTER = "#f2d2b0";

function flap() {
  const fr: string[] = [];
  let i = 0;
  for (let p = 0; p <= 68; p += 4, i++) fr.push(`${p}%{transform:scaleX(${i % 2 ? 0.92 : 0.85})}`);
  fr.push("71%{transform:scaleX(1.04)}73%,96%{transform:scaleX(1)}100%{transform:scaleX(.85)}");
  return `@keyframes sh-cover{${fr.join("")}}`;
}

function shiver() {
  const fr = ["0%,7%{transform:translate(0px,0px) rotate(0deg) scale(1,1)}", "8%{transform:translate(9px,0px) rotate(6deg) scale(1,1)}", "9%{transform:translate(-4px,0px) rotate(-3deg) scale(1,1)}", "10%{transform:translate(2px,0px) rotate(2deg) scale(1,1)}", "11%,18.5%{transform:translate(0px,0px) rotate(0deg) scale(1,1)}", "19.5%{transform:translate(-6px,0px) rotate(-4deg) scale(1,1)}", "21%{transform:translate(3px,0px) rotate(2deg) scale(1,1)}", "22%,28%{transform:translate(0px,0px) rotate(0deg) scale(1,1)}"];
  let i = 0;
  for (let p = 29; p <= 41; p += 1, i++) fr.push(`${p}%{transform:translate(${i % 2 ? 2 : -2}px,0px) rotate(0deg) scale(1,1)}`);
  fr.push("43%{transform:translate(0px,0px) rotate(0deg) scale(1,1)}");
  fr.push("46%,51%{transform:translate(0px,16px) rotate(0deg) scale(1.05,.86)}");
  fr.push("54%,57%{transform:translate(0px,0px) rotate(0deg) scale(1,1)}");
  fr.push("59%{transform:translate(0px,-20px) rotate(-3deg) scale(1,1)}61%{transform:translate(0px,0px) rotate(0deg) scale(1,1)}63%{transform:translate(0px,-16px) rotate(3deg) scale(1,1)}65%{transform:translate(0px,0px) rotate(0deg) scale(1,1)}67%{transform:translate(0px,-10px) rotate(-2deg) scale(1,1)}69%{transform:translate(0px,0px) rotate(0deg) scale(1,1)}");
  fr.push("72%{transform:translate(0px,0px) rotate(0deg) scale(1.04,.95)}74%,78%{transform:translate(0px,0px) rotate(0deg) scale(1,1)}");
  fr.push("81%{transform:translate(0px,-9px) rotate(0deg) scale(.98,1.03)}84%{transform:translate(0px,0px) rotate(0deg) scale(1.02,.98)}87%{transform:translate(0px,-5px) rotate(0deg) scale(1,1)}90%,100%{transform:translate(0px,0px) rotate(0deg) scale(1,1)}");
  return `@keyframes sh-book{${fr.join("")}}`;
}

function band(name: string, t: number) {
  return `@keyframes ${name}{0%,${t}%{transform:scale(0) rotate(0deg)}${t + 2}%{transform:scale(1.3) rotate(10deg)}${t + 3}%,97%{transform:scale(1) rotate(0deg)}99%,100%{transform:scale(0) rotate(0deg)}}.${name}{animation:${name} 10s ease-out infinite}`;
}

function win(name: string, a: number, b: number) {
  return `@keyframes ${name}{0%,${a}%{opacity:0}${a + 1}%,${b}%{opacity:1}${b + 1}%,100%{opacity:0}}.${name}{animation:${name} 10s linear infinite}`;
}

const CSS = `
${flap()}
${shiver()}
.sh-cover{animation:sh-cover 10s ease-in-out infinite}
.sh-book{animation:sh-book 10s ease-in-out infinite}
${band("sh-b1", 10)}
${band("sh-b2", 22)}
${band("sh-b3", 40)}
${band("sh-b4", 67)}
${win("sh-l1", 0, 13)}
${win("sh-l2", 14, 27)}
${win("sh-l3", 28, 42)}
${win("sh-l4", 43, 55)}
${win("sh-l5", 56, 69)}
${win("sh-l6", 72, 95)}
@keyframes sh-scared{0%,70%{opacity:1}71%,97%{opacity:0}98%,100%{opacity:1}}
.sh-scared{animation:sh-scared 10s linear infinite}
@keyframes sh-happy{0%,70%{opacity:0}71%,97%{opacity:1}98%,100%{opacity:0}}
.sh-happy{animation:sh-happy 10s linear infinite}
@keyframes sh-div{0%{transform:translateX(-170px);opacity:1}5%{transform:translateX(0px);opacity:1}7%{transform:translateX(-6px)}8%{transform:translateX(12px)}11%{transform:translateX(0px);opacity:1}14%{transform:translateX(-200px);opacity:1}15%,100%{transform:translateX(-200px);opacity:0}}
.sh-div{animation:sh-div 10s ease-in-out infinite}
@keyframes sh-club{0%,5%{transform:rotate(-70deg)}7%{transform:rotate(-80deg)}8.5%{transform:rotate(40deg)}11%{transform:rotate(30deg)}13%,100%{transform:rotate(-70deg)}}
.sh-club{animation:sh-club 10s ease-in-out infinite}
@keyframes sh-arrow{0%,15%{transform:translateX(230px);opacity:0}15.5%{opacity:1}19%{transform:translateX(0px)}19.6%{transform:translateX(-3px)}20.2%,96%{transform:translateX(0px);opacity:1}98%,100%{transform:translateX(0px);opacity:0}}
.sh-arrow{animation:sh-arrow 10s linear infinite}
@keyframes sh-twang{0%,19.5%{transform:rotate(0deg)}20.2%{transform:rotate(6deg)}21%{transform:rotate(-5deg)}21.8%{transform:rotate(3deg)}23%,100%{transform:rotate(0deg)}}
.sh-twang{animation:sh-twang 10s linear infinite}
@keyframes sh-storm{0%,27%{opacity:0}30%,41%{opacity:1}44%,100%{opacity:0}}
.sh-storm{animation:sh-storm 10s linear infinite}
@keyframes sh-bolt{0%,30%{opacity:0}31%{opacity:1}32%{opacity:.2}33%{opacity:1}34.5%,36%{opacity:0}37%{opacity:1}38%{opacity:.3}39%{opacity:1}40%,100%{opacity:0}}
.sh-bolt{animation:sh-bolt 10s linear infinite}
@keyframes sh-rain{0%{transform:translate(0px,0px)}100%{transform:translate(-10px,30px)}}
.sh-rain{animation:sh-rain .4s linear infinite}
@keyframes sh-sim{0%,43%{transform:translate(270px,-40px);opacity:0}44%{transform:translate(250px,-34px);opacity:1}50%{transform:translate(0px,26px);opacity:1}56%{transform:translate(-290px,-30px);opacity:1}57%,100%{transform:translate(-290px,-30px);opacity:0}}
.sh-sim{animation:sh-sim 10s ease-in-out infinite}
@keyframes sh-flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}
.sh-flap{animation:sh-flap .4s ease-in-out infinite}
@keyframes sh-fireon{0%,55%{opacity:0;transform:scaleY(0)}58%,67%{opacity:1;transform:scaleY(1)}70%,100%{opacity:0;transform:scaleY(0)}}
.sh-fireon{animation:sh-fireon 10s ease-out infinite}
@keyframes sh-flick{0%,100%{transform:scale(1,1)}50%{transform:scale(.85,.7)}}
.sh-flick{animation:sh-flick .3s ease-in-out infinite}
@keyframes sh-page{0%,9%{transform:translate(0px,0px) rotate(0deg);opacity:0}9.5%{opacity:1}16%{transform:translate(70px,-90px) rotate(200deg);opacity:0}100%{transform:translate(70px,-90px) rotate(200deg);opacity:0}}
.sh-page{animation:sh-page 10s ease-out infinite}
@keyframes sh-rays{0%,72%{opacity:0;transform:scale(.4)}78%,94%{opacity:.85;transform:scale(1)}98%,100%{opacity:0;transform:scale(.6)}}
.sh-rays{animation:sh-rays 10s ease-out infinite}
.sh-spin{animation:spin 18s linear infinite}
@keyframes sh-heart{0%,78%{transform:translateY(0px) scale(0)}81%{transform:translateY(-6px) scale(1.3)}84%,94%{transform:translateY(-10px) scale(1)}97%,100%{transform:translateY(-14px) scale(0)}}
.sh-heart{animation:sh-heart 10s ease-out infinite}
@keyframes sh-tw{0%,76%{transform:scale(0) rotate(0deg)}80%{transform:scale(1.3) rotate(45deg)}84%{transform:scale(.6) rotate(70deg)}88%{transform:scale(1.1) rotate(100deg)}95%,100%{transform:scale(0) rotate(140deg)}}
.sh-tw{animation:sh-tw 10s ease-out infinite}
@keyframes sh-sweat{0%,4%{transform:translate(0px,0px);opacity:0}8%{opacity:1}14%{transform:translate(3px,14px);opacity:0}100%{opacity:0}}
.sh-sweat{animation:sh-sweat 2.5s ease-in infinite}
@keyframes sh-say{0%,80%{transform:scale(0)}83%{transform:scale(1.15)}85%,94%{transform:scale(1)}97%,100%{transform:scale(0)}}
.sh-say{animation:sh-say 10s ease-out infinite}
`;

function Plaster({ x, y, r, cls }: { x: number; y: number; r: number; cls: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <g className={cls}>
        <rect x="-14" y="-4.5" width="28" height="9" rx="4" fill={PLASTER} stroke={INK} strokeWidth={1.6} />
        <rect x="-4.5" y="-14" width="9" height="28" rx="4" fill={PLASTER} stroke={INK} strokeWidth={1.6} />
        <circle cx="-2" cy="-2" r=".9" fill={INK} opacity=".5" />
        <circle cx="2" cy="2" r=".9" fill={INK} opacity=".5" />
        <circle cx="2" cy="-2" r=".9" fill={INK} opacity=".5" />
        <circle cx="-2" cy="2" r=".9" fill={INK} opacity=".5" />
      </g>
    </g>
  );
}

function Arrow({ y, delay }: { y: number; delay: string }) {
  return (
    <g className="sh-arrow" style={{ animationDelay: delay } as CSSProperties}>
      <g className="sh-twang o-left" style={{ animationDelay: delay }}>
        <path d={`M248 ${y} H296`} stroke={INK} strokeWidth={4.5} strokeLinecap="round" />
        <path d={`M248 ${y} H296`} stroke="#a87a40" strokeWidth={2} strokeLinecap="round" />
        <path d={`M290 ${y} l8 -6 h6 l-6 6 l6 6 h-6Z`} fill={C.pomegranate} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      </g>
    </g>
  );
}

export default function Shahnameh({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="شاهنامه آخرش خوشه" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#e5c99a" />
      <path d="M-10 214 L40 160 L80 196 L130 140 L180 200 L230 150 L290 206 L340 156 L410 210 V262 H-10Z" fill="#b99a7a" {...inked} />
      <path d="M130 140 L118 154 L126 152 L132 160 L138 150 L144 156Z M340 156 L330 168 L338 166 L344 172 L350 164Z" fill={C.white} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
      <rect x="-10" y="258" width="420" height="60" fill="#c9a46e" {...inked} />
      <path d="M-10 268 H410" stroke={INK} strokeWidth={1} strokeDasharray="2 6" opacity=".5" />

      <g transform="translate(200 160)">
        <g className="sh-rays" style={{ opacity: 0 }}>
          <g className="sh-spin">
            <g fill="#fff3c2">
              {Array.from({ length: 12 }, (_, i) => {
                const a = (i * Math.PI) / 6;
                const b = a + 0.16;
                return <path key={i} d={`M0 0 L${(Math.cos(a) * 190).toFixed(1)} ${(Math.sin(a) * 190).toFixed(1)} L${(Math.cos(b) * 190).toFixed(1)} ${(Math.sin(b) * 190).toFixed(1)}Z`} />;
              })}
            </g>
          </g>
        </g>
      </g>

      <g className="sh-storm" style={{ opacity: 0 }}>
        <rect x="-10" y="-10" width="420" height="320" fill={C.navy} opacity=".38" />
        <Cloud x={40} y={56} s={1.3} fill="#6b6f8f" />
        <Cloud x={250} y={50} s={1.2} fill="#6b6f8f" />
        <path className="sh-bolt" d="M112 64 L96 98 L108 98 L88 142 L124 88 L110 88 L122 64Z" fill={C.saffron} {...inked} strokeWidth={2} />
        <path className="sh-bolt" style={{ animationDelay: "-.3s" }} d="M306 60 L292 92 L304 92 L286 132 L318 84 L305 84 L314 60Z" fill={C.saffron} {...inked} strokeWidth={2} />
        <g className="sh-rain" stroke="#cfe3f0" strokeWidth={1.6} strokeLinecap="round">
          {Array.from({ length: 14 }, (_, i) => (
            <path key={i} d={`M${20 + i * 28} ${70 + (i % 3) * 40} l-6 16 M${34 + i * 28} ${150 + (i % 2) * 50} l-6 16`} />
          ))}
        </g>
      </g>

      <g transform="translate(78 262)">
        <g className="sh-div" style={{ opacity: 0 }}>
          <path d="M-12 0 V-22 M10 0 V-22" stroke={INK} strokeWidth={10} strokeLinecap="round" />
          <path d="M-12 0 V-22 M10 0 V-22" stroke={DIV} strokeWidth={6} strokeLinecap="round" />
          <ellipse cx="0" cy="-46" rx="25" ry="27" fill={DIV} {...inked} />
          <path d="M-22 -30 Q0 -20 22 -30 L20 -18 Q0 -10 -20 -18Z" fill={C.saffron} stroke={INK} strokeWidth={2} />
          <g fill={INK}>
            <circle cx="-14" cy="-24" r="2" /><circle cx="-2" cy="-20" r="2" /><circle cx="10" cy="-23" r="2" />
          </g>
          <g fill={DIV_DK}>
            <circle cx="-10" cy="-54" r="3" /><circle cx="8" cy="-44" r="2.6" /><circle cx="-4" cy="-38" r="2.2" />
          </g>
          <path d="M-14 -90 Q-26 -108 -14 -116 Q-16 -102 -8 -94Z M14 -90 Q26 -108 14 -116 Q16 -102 8 -94Z" fill={C.cream} {...inked} strokeWidth={2} />
          <circle cx="0" cy="-80" r="19" fill={DIV} {...inked} />
          <path d="M-12 -88 L-3 -84 M12 -88 L3 -84" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
          <circle cx="-7" cy="-80" r="3.6" fill={C.saffron} stroke={INK} strokeWidth={1.4} />
          <circle cx="7" cy="-80" r="3.6" fill={C.saffron} stroke={INK} strokeWidth={1.4} />
          <circle cx="-6" cy="-80" r="1.4" fill={INK} />
          <circle cx="8" cy="-80" r="1.4" fill={INK} />
          <path d="M-9 -70 Q0 -64 9 -70 Q0 -60 -9 -70Z" fill={INK} />
          <path d="M-6 -69 l1.5 4 l1.5 -3.5 M3 -68.5 l1.5 3.5 l1.5 -4" fill={C.white} stroke={INK} strokeWidth={.8} />
          <path d="M-22 -58 Q-34 -46 -30 -30" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
          <path d="M-22 -58 Q-34 -46 -30 -30" fill="none" stroke={DIV} strokeWidth={5.5} strokeLinecap="round" />
          <g className="sh-club" style={{ transformOrigin: "20px -58px", transformBox: "view-box" }}>
            <path d="M20 -58 Q34 -60 40 -70" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
            <path d="M20 -58 Q34 -60 40 -70" fill="none" stroke={DIV} strokeWidth={5.5} strokeLinecap="round" />
            <path d="M38 -66 L58 -104 Q66 -112 70 -102 L46 -64Z" fill="#8a5a34" {...inked} strokeWidth={2} />
            <path d="M60 -96 l6 -2 M56 -88 l6 0 M52 -80 l6 1" stroke={INK} strokeWidth={2} strokeLinecap="round" />
            <circle cx="42" cy="-68" r="5" fill={DIV} {...inked} strokeWidth={1.8} />
          </g>
        </g>
      </g>

      <g className="sh-book o-bottom">
        <ellipse cx="204" cy="258" rx="66" ry="6" fill={INK} opacity=".18" />
        <path d="M258 74 L268 80 L268 256 L258 250Z" fill={C.cream} {...inked} strokeWidth={2} />
        <path d="M261 86 V248 M264.5 90 V250" stroke={INK} strokeWidth={.8} opacity=".5" />
        <path d="M140 250 L150 256 L268 256 L258 250Z" fill={C.cream} {...inked} strokeWidth={2} />
        <rect x="144" y="72" width="114" height="178" fill={C.paper} stroke={INK} strokeWidth={1.6} />
        <path d="M232 92 H250 M226 104 H250 M232 116 H250 M228 128 H250 M232 140 H250 M226 152 H250 M232 164 H250 M228 176 H250 M232 188 H250 M226 200 H250" stroke={INK} strokeWidth={1.2} opacity=".45" />

        <g transform="translate(260 140)">
          {[0, 1.2, 2.4].map((d, i) => (
            <g key={i} className="sh-page" style={{ animationDelay: `${d}s` }}>
              <path d="M-8 -10 h16 v20 h-16Z" fill={C.paper} stroke={INK} strokeWidth={1.4} />
              <path d="M-5 -5 h10 M-5 0 h10 M-5 5 h7" stroke={INK} strokeWidth={.8} opacity=".5" />
            </g>
          ))}
        </g>

        <g className="sh-cover o-left">
          <rect x="140" y="70" width="118" height="180" rx="5" fill={C.lapis} {...inked} />
          <rect x="140" y="70" width="12" height="180" rx="3" fill={C.navy} {...inked} strokeWidth={2} />
          <rect x="158" y="78" width="92" height="164" rx="4" fill="none" stroke={GOLD} strokeWidth={3} />
          <rect x="162" y="82" width="84" height="156" rx="3" fill="none" stroke={GOLD} strokeWidth={1} strokeDasharray="3 3" />
          {[[158, 78, 0], [250, 78, 90], [250, 242, 180], [158, 242, 270]].map(([x, y, r], i) => (
            <path key={i} transform={`translate(${x} ${y}) rotate(${r})`} d="M0 0 L16 0 Q10 4 8 8 Q4 10 0 16Z" fill={GOLD} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
          ))}
          <text x="204" y="108" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="19" fill={GOLD} stroke={GOLD_DK} strokeWidth={.6} direction="rtl">شاهنامه</text>
          <path d="M176 116 Q204 122 232 116" fill="none" stroke={GOLD} strokeWidth={1.6} />
          <circle cx="204" cy="214" r="15" fill={C.pomegranate} stroke={GOLD} strokeWidth={2.5} />
          <Star8 x={204} y={214} r={10} fill={GOLD} />

          <g className="sh-scared" style={{ opacity: 0 }}>
            <path d="M176 136 Q184 130 192 138 M216 138 Q224 130 232 136" fill="none" stroke={C.cream} strokeWidth={2.4} strokeLinecap="round" />
            <ellipse cx="186" cy="150" rx="9" ry="10" fill={C.white} stroke={INK} strokeWidth={1.8} />
            <ellipse cx="222" cy="150" rx="9" ry="10" fill={C.white} stroke={INK} strokeWidth={1.8} />
            <circle cx="187" cy="152" r="2.6" fill={INK} />
            <circle cx="221" cy="152" r="2.6" fill={INK} />
            <path d="M186 180 q4 -5 9 0 q4 5 9 0 q4 -5 9 0" fill="none" stroke={C.cream} strokeWidth={2.6} strokeLinecap="round" />
            <g transform="translate(240 132)">
              <path className="sh-sweat" d="M0 -5 Q4 1 0 4 Q-4 1 0 -5Z" fill="#9fd8ef" stroke={INK} strokeWidth={1.1} />
            </g>
          </g>
          <g className="sh-happy">
            <path d="M177 152 Q186 142 195 152 M213 152 Q222 142 231 152" fill="none" stroke={C.cream} strokeWidth={3} strokeLinecap="round" />
            <path d="M184 172 Q204 192 224 172 Q204 182 184 172Z" fill={C.pomegranate} stroke={C.cream} strokeWidth={2.4} strokeLinejoin="round" />
            <ellipse cx="174" cy="168" rx="7" ry="4.5" fill="#e58a7a" opacity=".75" />
            <ellipse cx="234" cy="168" rx="7" ry="4.5" fill="#e58a7a" opacity=".75" />
          </g>

          <Plaster x={168} y={128} r={20} cls="sh-b1" />
          <Plaster x={240} y={196} r={-15} cls="sh-b2" />
          <Plaster x={174} y={224} r={35} cls="sh-b3" />
          <Plaster x={242} y={90} r={-30} cls="sh-b4" />
        </g>

        <Arrow y={122} delay="0s" />
        <Arrow y={158} delay=".15s" />
        <Arrow y={186} delay=".3s" />
      </g>

      <g transform="translate(200 262)">
        <g className="sh-fireon o-bottom" style={{ opacity: 0 }}>
          {[-70, -42, -14, 14, 42, 70].map((x, i) => (
            <g key={x} transform={`translate(${x} 0)`}>
              <g className="sh-flick o-bottom" style={{ animationDelay: `${-i * 0.07}s` }}>
                <path d="M-14 0 Q-20 -14 -10 -24 Q-8 -14 -4 -12 Q-6 -28 4 -36 Q4 -20 9 -16 Q12 -26 16 -24 Q20 -10 14 0Z" fill={C.saffron} {...inked} strokeWidth={1.8} />
                <path d="M-6 0 Q-8 -10 -2 -14 Q0 -8 3 -8 Q6 -12 7 -10 Q9 -5 6 0Z" fill={C.pomegranate} />
              </g>
            </g>
          ))}
        </g>
      </g>

      <g transform="translate(200 70)">
        <g className="sh-sim" style={{ opacity: 0 }}>
          <path d="M18 0 Q52 -16 92 4 Q60 0 18 6Z" fill={C.saffron} {...inked} strokeWidth={1.8} />
          <path d="M18 2 Q56 6 96 26 Q58 16 18 8Z" fill={C.pomegranate} {...inked} strokeWidth={1.8} />
          <path d="M16 -2 Q50 -32 88 -22 Q52 -14 16 4Z" fill={C.lapis} {...inked} strokeWidth={1.8} />
          <circle cx="84" cy="4" r="3" fill={C.firouzeh} stroke={INK} strokeWidth={1.2} />
          <circle cx="88" cy="22" r="3" fill={C.saffron} stroke={INK} strokeWidth={1.2} />
          <circle cx="82" cy="-20" r="3" fill={C.saffron} stroke={INK} strokeWidth={1.2} />
          <ellipse cx="0" cy="0" rx="24" ry="11" fill={C.turquoise} {...inked} />
          <path d="M-10 6 Q4 12 18 6" fill="none" stroke={C.cream} strokeWidth={1.6} />
          <g className="sh-flap o-bottom">
            <path d="M-6 -6 Q8 -44 44 -42 Q28 -28 26 -16 Q14 -10 8 -4Z" fill={C.firouzeh} {...inked} strokeWidth={2} />
            <path d="M6 -14 Q18 -30 36 -36 M10 -8 Q22 -20 32 -24" fill="none" stroke={INK} strokeWidth={1.2} />
          </g>
          <circle cx="-24" cy="-6" r="9" fill={C.turquoise} {...inked} />
          <path d="M-24 -15 Q-22 -26 -14 -28 Q-18 -20 -18 -14 M-26 -14 Q-30 -24 -24 -30" fill="none" stroke={C.pomegranate} strokeWidth={2.4} strokeLinecap="round" />
          <path d="M-32 -8 Q-42 -6 -38 0 L-32 -3Z" fill={C.saffron} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
          <path d="M-29 -8 Q-26 -11 -23 -8 Q-26 -6 -29 -8Z" fill={C.white} stroke={INK} strokeWidth={1} />
          <circle cx="-26" cy="-8" r="1.2" fill={INK} />
        </g>
      </g>

      <g transform="translate(204 66)">
        <g className="sh-heart">
          <path d="M0 12 Q-18 0 -14 -8 Q-10 -16 0 -8 Q10 -16 14 -8 Q18 0 0 12Z" fill={C.pomegranate} {...inked} strokeWidth={2} />
          <path d="M-9 -6 q2 -3 5 -1" fill="none" stroke={C.white} strokeWidth={1.6} strokeLinecap="round" />
        </g>
      </g>
      <Star8 x={124} y={110} r={6} fill={C.white} className="sh-tw" />
      <Star8 x={292} y={100} r={7} fill={C.saffron} className="sh-tw" style={{ animationDelay: "-.4s" }} />
      <Star8 x={290} y={222} r={5} fill={C.white} className="sh-tw" style={{ animationDelay: "-.8s" }} />
      <Star8 x={116} y={210} r={5} fill={C.saffron} className="sh-tw" style={{ animationDelay: "-.2s" }} />

      {big && (
        <g fontFamily="Vazirmatn" fontWeight={900} fontSize="17" textAnchor="middle" direction="rtl" stroke={INK} strokeWidth={1}>
          <text className="sh-l1" x="330" y="40" fill={C.pomegranate} style={{ opacity: 0 }}>دیو سفید!</text>
          <text className="sh-l2" x="330" y="40" fill={C.pomegranate} style={{ opacity: 0 }}>تیرباران!</text>
          <text className="sh-l3" x="330" y="40" fill={C.cream} style={{ opacity: 0 }}>طوفان!</text>
          <text className="sh-l4" x="330" y="40" fill={C.lapis} style={{ opacity: 0 }}>سیمرغ!</text>
          <text className="sh-l5" x="330" y="40" fill={C.saffron} style={{ opacity: 0 }}>آتش!</text>
          <text className="sh-l6" x="70" y="40" fill={C.olive} style={{ opacity: 0 }}>پایان خوش</text>
        </g>
      )}
      {big && <Bubble x={250} y={92} w={124} text="ولی آخرش خوب بود!" className="sh-say o-bottom" />}
    </Scene>
  );
}
