import type { ReactNode } from "react";
import { Scene, Person, Turban, Cloud, Ground, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const FUR = "#8a5a3b";
const FUR_DK = "#6b4228";
const BELLY = "#c99a6c";

function jitter(name: string, ranges: [number, number][], amp: number, step = 1.5) {
  const fr = ["0%{transform:translate(0px,0px)}"];
  for (const [a, b] of ranges) {
    fr.push(`${a}%{transform:translate(0px,0px)}`);
    let i = 0;
    for (let t = a + step; t < b; t += step, i++) fr.push(`${+t.toFixed(2)}%{transform:translate(${i % 2 ? amp : -amp}px,${i % 3 ? 0 : -amp / 2}px)}`);
    fr.push(`${b}%{transform:translate(0px,0px)}`);
  }
  fr.push("100%{transform:translate(0px,0px)}");
  return `@keyframes ${name}{${fr.join("")}}`;
}

const CSS = `
${jitter("kx-tremble", [[30, 56], [82, 97]], 1.6)}
.kx-tremble{animation:kx-tremble 9s linear infinite}
@keyframes kx-man{0%,20%{transform:scale(1,1)}22%{transform:scale(1.1,.66)}30%{transform:scale(1.08,.68)}33%{transform:scale(1,1)}58%{transform:scale(1,1)}61%{transform:scale(.74,1.12)}64%{transform:scale(.8,1.06)}67%{transform:scale(.72,1.14)}70%{transform:scale(.8,1.06)}73%{transform:scale(.72,1.14)}76%{transform:scale(.78,1.08)}80%{transform:scale(1.05,.95)}83%,100%{transform:scale(1,1)}}
.kx-man{animation:kx-man 9s ease-in-out infinite}
@keyframes kx-fly{0%{transform:translate(-30px,-30px);opacity:1}3%{transform:translate(20px,-40px);opacity:1}6%{transform:translate(30px,-12px);opacity:1}9%{transform:translate(-22px,-20px);opacity:1}12%{transform:translate(-6px,-14px);opacity:1}14%,21%{transform:translate(0px,0px);opacity:1}24%{transform:translate(80px,-90px);opacity:0}97%{transform:translate(-30px,-30px);opacity:0}100%{transform:translate(-30px,-30px);opacity:1}}
.kx-fly{animation:kx-fly 9s ease-in-out infinite}
@keyframes kx-wing{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.3)}}
.kx-wing{animation:kx-wing .08s linear infinite}
@keyframes kx-armL{0%,12%{transform:rotate(15deg)}16%{transform:rotate(-150deg)}20%{transform:rotate(-165deg)}23%,30%{transform:rotate(63deg)}34%{transform:rotate(20deg)}37%{transform:rotate(72deg)}40%{transform:rotate(32deg)}43%{transform:rotate(74deg)}46%{transform:rotate(32deg)}49%{transform:rotate(74deg)}52%{transform:rotate(32deg)}55%,100%{transform:rotate(15deg)}}
.kx-armL{animation:kx-armL 9s ease-in-out infinite}
@keyframes kx-armR{0%{transform:rotate(-20deg)}3%{transform:rotate(-150deg)}5%{transform:rotate(-125deg)}7%{transform:rotate(-155deg)}9%{transform:rotate(-125deg)}12%,100%{transform:rotate(-20deg)}}
.kx-armR{animation:kx-armR 9s ease-in-out infinite}
@keyframes kx-pan{0%,32%{opacity:1}34%,96%{opacity:0}98%,100%{opacity:1}}
.kx-pan{animation:kx-pan 9s linear infinite}
@keyframes kx-leaf{0%,32%{opacity:0}34%,55%{opacity:1}57%,100%{opacity:0}}
.kx-leaf{animation:kx-leaf 9s linear infinite}
@keyframes kx-arms{0%,57%{opacity:1}59%,81%{opacity:0}83%,100%{opacity:1}}
.kx-arms{animation:kx-arms 9s linear infinite}
@keyframes kx-hug{0%,58%{opacity:0}60%,80%{opacity:1}82%,100%{opacity:0}}
.kx-hug{animation:kx-hug 9s linear infinite}
@keyframes kx-bear{0%,56%{transform:translateX(0px) rotate(0deg)}60%{transform:translateX(-62px) rotate(-7deg)}64%{transform:translateX(-58px) rotate(-5deg)}67%{transform:translateX(-63px) rotate(-8deg)}70%{transform:translateX(-58px) rotate(-5deg)}73%{transform:translateX(-63px) rotate(-8deg)}78%{transform:translateX(-60px) rotate(-6deg)}83%,100%{transform:translateX(0px) rotate(0deg)}}
.kx-bear{animation:kx-bear 9s ease-in-out infinite}
@keyframes kx-tilt{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(5deg)}}
.kx-tilt{animation:kx-tilt 3s ease-in-out infinite}
@keyframes kx-turban{0%,43%{transform:translate(0px,0px) rotate(0deg);opacity:1}47%{transform:translate(-50px,-40px) rotate(-130deg);opacity:1}53%{transform:translate(-150px,-80px) rotate(-320deg);opacity:0}96%{transform:translate(0px,-30px) rotate(0deg);opacity:0}99%,100%{transform:translate(0px,0px) rotate(0deg);opacity:1}}
.kx-turban{animation:kx-turban 9s ease-in-out infinite}
@keyframes kx-bonk{0%,22%{transform:scale(0) rotate(0deg);opacity:0}23%{transform:scale(1) rotate(0deg);opacity:1}26%{transform:scale(1.5) rotate(30deg);opacity:1}30%,100%{transform:scale(1.8) rotate(40deg);opacity:0}}
.kx-bonk{animation:kx-bonk 9s ease-out infinite}
@keyframes kx-wind{0%,35%{opacity:0;transform:translateX(0px)}37%{opacity:1}42%{opacity:0;transform:translateX(-40px)}43%{opacity:0;transform:translateX(0px)}44%{opacity:1}49%{opacity:0;transform:translateX(-40px)}50%{opacity:0;transform:translateX(0px)}51%{opacity:1}56%,100%{opacity:0;transform:translateX(-40px)}}
.kx-wind{animation:kx-wind 9s linear infinite}
@keyframes kx-heart{0%{transform:translate(0,0) scale(.4);opacity:0}20%{opacity:1}100%{transform:translate(6px,-46px) scale(1.1);opacity:0}}
.kx-heart{animation:kx-heart 2.4s ease-out infinite}
@keyframes kx-sweat{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(-5px,16px);opacity:0}}
.kx-sweat{animation:kx-sweat .9s ease-in infinite}
@keyframes kx-bang{0%,8%{transform:scale(0)}10%{transform:scale(1.4)}12%,16%{transform:scale(1)}18%,100%{transform:scale(0)}}
.kx-bang{animation:kx-bang 9s ease-out infinite}
@keyframes kx-cloud{0%,100%{transform:translateX(-6px)}50%{transform:translateX(8px)}}
.kx-cloud{animation:kx-cloud 8s ease-in-out infinite}
@keyframes kx-say{0%,23%{transform:scale(0);opacity:0}25%{transform:scale(1.1);opacity:1}26%,33%{transform:scale(1);opacity:1}35%,100%{transform:scale(0);opacity:0}}
.kx-say{animation:kx-say 9s ease-out infinite}
`;

const HEART = "M0 3 C-6 -2 -5 -7 -2 -7 C-1 -7 0 -6 0 -5 C0 -6 1 -7 2 -7 C5 -7 6 -2 0 3Z";

function BearArm({ children }: { children?: ReactNode }) {
  return (
    <g>
      {children}
      <path d="M0 0 Q-6 26 0 50" fill="none" stroke={INK} strokeWidth={22} strokeLinecap="round" />
      <path d="M0 0 Q-6 26 0 50" fill="none" stroke={FUR} strokeWidth={17} strokeLinecap="round" />
      <circle cx="0" cy="52" r="10" fill={FUR_DK} {...inked} strokeWidth={2} />
      <path d="M-5 58 v2 M0 59 v2 M5 58 v2" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
    </g>
  );
}

export default function KhaleKhers({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="دوستی خاله‌خرسه" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#c7d9a8" />
      <Cloud x={40} y={56} s={1} className="kx-cloud" />
      <Cloud x={290} y={40} s={.85} className="kx-cloud" style={{ animationDelay: "-3s" }} />
      <path d="M-10 200 Q60 170 130 190 Q210 160 290 186 Q350 168 410 184 V250 H-10Z" fill="#9dbb7a" {...inked} strokeWidth={2} />
      {[[40, 150, 28], [360, 140, 32]].map(([x, y, r]) => (
        <g key={x}>
          <path d={`M${x - 5} 250 V${y + r - 6} M${x + 5} 250 V${y + r - 6}`} stroke={INK} strokeWidth={2.5} />
          <rect x={x - 6} y={y + r - 8} width="12" height={258 - y - r} fill="#7a4a2e" {...inked} strokeWidth={2} />
          <circle cx={x} cy={y} r={r} fill={C.olive} {...inked} />
          <circle cx={x - r * .5} cy={y + r * .3} r={r * .6} fill="#7fa95a" {...inked} strokeWidth={2} />
          <circle cx={x + 8} cy={y - 8} r="3" fill={C.pomegranate} stroke={INK} strokeWidth={1.2} />
        </g>
      ))}
      <Ground y={250} color="#86a95f" />
      <g fill={C.white} stroke={INK} strokeWidth={1.2}>
        <circle cx="60" cy="270" r="3" /><circle cx="330" cy="276" r="3" /><circle cx="210" cy="288" r="3" />
      </g>
      <g fill={C.saffron}><circle cx="60" cy="270" r="1.2" /><circle cx="330" cy="276" r="1.2" /><circle cx="210" cy="288" r="1.2" /></g>

      <g className="kx-bear o-bottom">
        <ellipse cx="274" cy="282" rx="58" ry="7" fill={INK} opacity=".15" />
        <ellipse cx="250" cy="276" rx="18" ry="9" fill={FUR_DK} {...inked} />
        <ellipse cx="300" cy="276" rx="18" ry="9" fill={FUR_DK} {...inked} />
        <path d="M216 270 Q206 200 236 168 Q270 150 304 168 Q334 200 326 270 Q272 284 216 270Z" fill={FUR} {...inked} />
        <path d="M240 266 Q232 214 252 190 Q272 182 290 190 Q310 214 304 266 Q272 274 240 266Z" fill={BELLY} {...inked} strokeWidth={2} />
        <path d="M262 214 q4 -4 8 0 M276 236 q4 -4 8 0 M256 246 q4 -4 8 0" fill="none" stroke={FUR_DK} strokeWidth={1.6} strokeLinecap="round" />

        <g className="kx-tilt o-bottom">
          <circle cx="240" cy="96" r="13" fill={FUR} {...inked} />
          <circle cx="240" cy="96" r="6" fill={BELLY} />
          <circle cx="300" cy="96" r="13" fill={FUR} {...inked} />
          <circle cx="300" cy="96" r="6" fill={BELLY} />
          <circle cx="270" cy="126" r="40" fill={FUR} {...inked} />
          <ellipse cx="270" cy="142" rx="20" ry="15" fill={BELLY} {...inked} strokeWidth={2} />
          <ellipse cx="270" cy="134" rx="7" ry="5" fill={INK} />
          <path d="M260 146 Q265 152 270 146 Q275 152 280 146" fill="none" stroke={INK} strokeWidth={2} strokeLinecap="round" />
          <path d="M250 120 Q256 113 262 120 M278 120 Q284 113 290 120" fill="none" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
          <circle cx="246" cy="136" r="5" fill="#e58a7a" opacity=".6" />
          <circle cx="294" cy="136" r="5" fill="#e58a7a" opacity=".6" />
          <path d="M252 98 Q270 92 288 98" fill="none" stroke={C.pomegranate} strokeWidth={4} strokeLinecap="round" />
          <circle cx="288" cy="96" r="5" fill={C.pomegranate} {...inked} strokeWidth={1.6} />
          <circle cx="296" cy="94" r="4" fill={C.pomegranate} {...inked} strokeWidth={1.6} />
          {[[300, 90, 0], [244, 92, -.8], [310, 110, -1.6]].map(([x, y, d], i) => (
            <g key={i} transform={`translate(${x} ${y})`}>
              <path className="kx-heart" style={{ animationDelay: `${d}s` }} d={HEART} fill={C.pomegranate} stroke={INK} strokeWidth={1} />
            </g>
          ))}
        </g>

        <g className="kx-arms">
          <g transform="translate(302 176)">
            <g className="kx-armR" style={{ transformOrigin: "0px 0px", transformBox: "view-box" }} transform="rotate(-20)">
              <BearArm />
            </g>
          </g>
          <g transform="translate(238 176)">
            <g className="kx-armL" style={{ transformOrigin: "0px 0px", transformBox: "view-box" }} transform="rotate(15)">
              <BearArm>
                <g className="kx-pan">
                  <path d="M0 54 V92" stroke={INK} strokeWidth={6} strokeLinecap="round" />
                  <path d="M0 54 V92" stroke="#3a3a3a" strokeWidth={3} strokeLinecap="round" />
                  <circle cx="0" cy="106" r="17" fill="#3a3a3a" {...inked} />
                  <circle cx="0" cy="106" r="11" fill="#555" stroke={INK} strokeWidth={1.2} />
                  <path d="M-6 98 Q-2 95 2 97" fill="none" stroke="#9a9a9a" strokeWidth={2} strokeLinecap="round" />
                </g>
                <g className="kx-leaf" style={{ opacity: 0 }}>
                  <path d="M0 56 V66" stroke={INK} strokeWidth={3} />
                  <path d="M0 64 Q-22 90 0 124 Q22 90 0 64Z" fill={C.olive} {...inked} />
                  <path d="M0 68 V118 M0 82 l-9 -6 M0 82 l9 -6 M0 98 l-11 -7 M0 98 l11 -7" fill="none" stroke={INK} strokeWidth={1.2} />
                </g>
              </BearArm>
            </g>
          </g>
        </g>
      </g>

      <g transform="translate(150 230)">
        <g className="kx-bonk" style={{ opacity: 0 }}><Star8 r={18} fill={C.saffron} /></g>
      </g>
      {[[104, 214, 0], [96, 236, -.1], [110, 196, -.2]].map(([x, y, d], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <path className="kx-wind" style={{ opacity: 0, animationDelay: `${d}s` }} d="M20 0 H-14 Q-24 0 -24 -7 Q-24 -13 -18 -13" fill="none" stroke={C.white} strokeWidth={2.6} strokeLinecap="round" />
        </g>
      ))}

      <g transform="translate(140 282) scale(.75)">
        <g className="kx-man o-bottom">
          <g className="kx-tremble">
            <Person robe={C.saffron} sash={C.lapis} hatKind="none" mood="scared" armL={40} armR={-40} />
            <g transform="translate(0 -74)">
              <g className="kx-turban"><Turban color={C.turquoise} /></g>
              <g transform="translate(-16 -6)"><path className="kx-sweat" d="M0 -4 Q3 1 0 3 Q-3 1 0 -4Z" fill="#9fd8ef" stroke={INK} strokeWidth={1} /></g>
              <g transform="translate(16 -8)"><path className="kx-sweat" style={{ animationDelay: "-.45s" }} d="M0 -4 Q3 1 0 3 Q-3 1 0 -4Z" fill="#9fd8ef" stroke={INK} strokeWidth={1} /></g>
            </g>
          </g>
        </g>
      </g>

      <g className="kx-hug" style={{ opacity: 0 }}>
        <path d="M206 236 Q160 228 124 240 Q118 250 128 254 Q160 246 204 252" fill={FUR} {...inked} />
        <circle cx="128" cy="247" r="8" fill={FUR_DK} {...inked} strokeWidth={2} />
        <path d="M206 256 Q166 252 132 262 Q126 272 136 274 Q166 266 206 272" fill={FUR} {...inked} />
        <circle cx="136" cy="268" r="8" fill={FUR_DK} {...inked} strokeWidth={2} />
        <g transform="translate(126 214)"><path className="kx-heart" d={HEART} fill={C.pomegranate} stroke={INK} strokeWidth={1} /></g>
        <g transform="translate(154 208)"><path className="kx-heart" style={{ animationDelay: "-1.2s" }} d={HEART} fill={C.pomegranate} stroke={INK} strokeWidth={1} /></g>
      </g>

      <g transform="translate(140 208)">
        <g className="kx-fly">
          <ellipse cx="0" cy="0" rx="3.5" ry="2.5" fill={INK} />
          <g className="kx-wing o-bottom">
            <ellipse cx="-2" cy="-3.5" rx="2.5" ry="3" fill={C.white} stroke={INK} strokeWidth={.8} opacity=".9" />
            <ellipse cx="2" cy="-3.5" rx="2.5" ry="3" fill={C.white} stroke={INK} strokeWidth={.8} opacity=".9" />
          </g>
        </g>
      </g>
      <g transform="translate(286 76)">
        <text className="kx-bang" style={{ transform: "scale(0)" }} x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="24" fill={C.pomegranate} stroke={INK} strokeWidth={1}>!</text>
      </g>

      {big && <Bubble x={240} y={88} w={86} text="مگس بود!" flip className="kx-say o-bottom" style={{ opacity: 0 }} />}
    </Scene>
  );
}
