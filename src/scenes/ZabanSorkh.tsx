import { Scene, Turban, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const BEATS = [12, 22, 30, 37, 43, 48, 53, 57, 61, 65, 69, 73, 77, 81, 85];
const LEAVES: [number, number, number, number, string][] = [
  [160, 96, -30, 22, C.olive],
  [178, 80, -10, 30, "#7fa95a"],
  [198, 74, 10, 37, "#5d7f3f"],
  [218, 78, 25, 43, C.olive],
  [238, 92, 40, 48, "#7fa95a"],
  [168, 110, -55, 53, "#5d7f3f"],
  [230, 106, 60, 57, C.olive],
  [150, 118, -75, 61, "#7fa95a"],
  [206, 92, 0, 65, "#5d7f3f"],
  [248, 114, 75, 69, C.olive],
];

function flapKeys() {
  const fr = ["0%{transform:rotate(-4deg) scaleY(1)}", "5%{transform:rotate(4deg) scaleY(1)}", "10%{transform:rotate(-4deg) scaleY(1)}"];
  for (const b of BEATS) {
    fr.push(`${b}%{transform:rotate(-4deg) scaleY(1)}`);
    fr.push(`${b + 1.5}%{transform:rotate(-30deg) scaleY(1.15)}`);
    fr.push(`${b + 3}%{transform:rotate(22deg) scaleY(-.8)}`);
  }
  fr.push("92%{transform:rotate(4deg) scaleY(1)}", "100%{transform:rotate(-4deg) scaleY(1)}");
  return `@keyframes zs-flap{${fr.join("")}}`;
}

function windKeys() {
  const fr = ["0%{opacity:0;transform:translateX(30px)}"];
  for (const b of BEATS) {
    fr.push(`${b + 1}%{opacity:0;transform:translateX(30px)}`);
    fr.push(`${b + 2}%{opacity:1;transform:translateX(10px)}`);
    fr.push(`${b + 4}%{opacity:0;transform:translateX(-40px)}`);
  }
  fr.push("100%{opacity:0;transform:translateX(-40px)}");
  return `@keyframes zs-wind{${fr.join("")}}`;
}

function leafKeys() {
  return LEAVES.map(([, , , t], i) =>
    `@keyframes zs-l${i}{0%,${t}%{transform:translate(0px,0px) rotate(0deg) scale(1);opacity:1}${t + 7}%{transform:translate(-90px,-26px) rotate(-260deg) scale(1);opacity:1}${t + 14}%{transform:translate(-200px,-6px) rotate(-480deg) scale(1);opacity:0}94%{transform:translate(0px,0px) rotate(0deg) scale(0);opacity:0}98%,100%{transform:translate(0px,0px) rotate(0deg) scale(1);opacity:1}}.zs-l${i}{animation:zs-l${i} 8s ease-in infinite}`
  ).join("");
}

const CSS = `
${flapKeys()}
.zs-flap{animation:zs-flap 8s ease-in-out infinite}
${windKeys()}
.zs-wind{animation:zs-wind 8s linear infinite}
${leafKeys()}
@keyframes zs-head{0%,55%{transform:translateY(0px) rotate(0deg)}58%{transform:translateY(0px) rotate(-5deg)}61%{transform:translateY(-2px) rotate(5deg)}64%{transform:translateY(0px) rotate(-6deg)}67%{transform:translateY(-6px) rotate(6deg)}71%{transform:translateY(-16px) rotate(-5deg)}76%{transform:translateY(-26px) rotate(6deg)}81%{transform:translateY(-33px) rotate(-6deg)}86%{transform:translateY(-38px) rotate(5deg)}90%{transform:translateY(-36px) rotate(-3deg)}93%{transform:translateY(2px) rotate(0deg)}95%{transform:translateY(-5px) rotate(0deg)}97%,100%{transform:translateY(0px) rotate(0deg)}}
.zs-head{animation:zs-head 8s ease-in-out infinite}
@keyframes zs-shadow{0%,64%{transform:scale(1);opacity:.25}80%,90%{transform:scale(.55);opacity:.12}94%,100%{transform:scale(1);opacity:.25}}
.zs-shadow{animation:zs-shadow 8s ease-in-out infinite}
@keyframes zs-calm{0%,57%{opacity:1}59%,92%{opacity:0}94%,100%{opacity:1}}
.zs-calm{animation:zs-calm 8s linear infinite}
@keyframes zs-shock{0%,57%{opacity:0}59%,92%{opacity:1}94%,100%{opacity:0}}
.zs-shock{animation:zs-shock 8s linear infinite}
@keyframes zs-sweat{0%{transform:translateY(0);opacity:0}25%{opacity:1}100%{transform:translateY(14px);opacity:0}}
.zs-sweat{animation:zs-sweat .9s ease-in infinite}
@keyframes zs-aud{0%,68%{transform:translate(0px,0px) rotate(0deg);opacity:1}72%{transform:translate(-30px,-24px) rotate(-90deg);opacity:1}78%{transform:translate(-90px,-30px) rotate(-260deg);opacity:0}96%{transform:translate(0px,0px) rotate(0deg);opacity:0}99%,100%{transform:translate(0px,0px) rotate(0deg);opacity:1}}
.zs-aud{animation:zs-aud 8s ease-in infinite}
@keyframes zs-curtL{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-1.5deg)}}
.zs-curtL{animation:zs-curtL 4s ease-in-out infinite}
@keyframes zs-curtR{0%,100%{transform:skewY(0deg)}50%{transform:skewY(1.5deg)}}
.zs-curtR{animation:zs-curtR 4s ease-in-out infinite}
@keyframes zs-light{0%,100%{opacity:.18}50%{opacity:.3}}
.zs-light{animation:zs-light 3s ease-in-out infinite}
@keyframes zs-bulb{0%,100%{opacity:1}50%{opacity:.55}}
.zs-bulb{animation:zs-bulb 1.4s ease-in-out infinite}
@keyframes zs-say{0%,1%{transform:scale(0);opacity:0}3%{transform:scale(1.1);opacity:1}4%,10%{transform:scale(1);opacity:1}12%,100%{transform:scale(0);opacity:0}}
.zs-say{animation:zs-say 8s ease-out infinite}
`;

const SKINF = "#a9cf7f";

function Leaf({ fill }: { fill: string }) {
  return (
    <g>
      <path d="M0 -10 Q8 0 0 10 Q-8 0 0 -10Z" fill={fill} {...inked} strokeWidth={1.6} />
      <path d="M0 -7 V7" stroke={INK} strokeWidth={1} />
    </g>
  );
}

function Wind({ x, y, s = 1, delay }: { x: number; y: number; s?: number; delay: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path className="zs-wind" style={{ opacity: 0, animationDelay: delay }} d="M40 0 H-20 Q-34 0 -34 -10 Q-34 -18 -26 -18 Q-20 -18 -20 -12 M30 10 H-4" fill="none" stroke={C.white} strokeWidth={3} strokeLinecap="round" />
    </g>
  );
}

function Scallops() {
  const parts: string[] = ["M-10 30"];
  for (let x = -10; x < 410; x += 28) parts.push(`Q${x + 14} 46 ${x + 28} 30`);
  return <path d={`${parts.join(" ")} V20 H-10Z`} fill={C.saffron} {...inked} strokeWidth={2} />;
}

export default function ZabanSorkh({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="زبان سرخ، سر سبز می‌ده بر باد" className={playing ? "" : "paused"}>
      <style>{CSS}</style>

      <rect x="-10" y="-10" width="420" height="320" fill="#f2d3a8" />
      <circle cx="300" cy="84" r="22" fill={C.saffron} {...inked} strokeWidth={2} />
      <path d="M-10 214 Q60 170 130 200 Q200 160 280 196 Q340 172 410 196 V250 H-10Z" fill="#e3b77e" {...inked} strokeWidth={2} />
      <path d="M-10 230 Q90 200 180 226 Q270 200 410 222 V250 H-10Z" fill="#d49f63" {...inked} strokeWidth={2} />
      <path className="zs-light" d="M170 20 L230 20 L300 250 L100 250Z" fill={C.white} />

      <rect x="-10" y="246" width="420" height="64" fill="#b07a4e" stroke={INK} strokeWidth={2.5} />
      <path d="M-10 258 H410 M-10 268 H410" stroke={INK} strokeWidth={1} opacity=".4" />
      <path d="M40 246 L30 276 M120 246 L116 276 M200 246 V276 M280 246 L284 276 M360 246 L370 276" stroke={INK} strokeWidth={1} opacity=".35" />
      <rect x="-10" y="276" width="420" height="34" fill="#5a3a2a" stroke={INK} strokeWidth={2.5} />
      {[70, 130, 270, 330].map((x, i) => (
        <path key={x} className="zs-bulb" style={{ animationDelay: `${-i * .35}s` }} d={`M${x - 7} 277 Q${x} 266 ${x + 7} 277Z`} fill={C.saffron} stroke={INK} strokeWidth={1.5} />
      ))}

      <path d="M170 250 L174 232 L226 232 L230 250Z" fill={C.cream} {...inked} />
      <rect x="180" y="196" width="40" height="36" fill={C.paper} {...inked} />
      <path d="M190 198 V230 M200 198 V230 M210 198 V230" stroke={INK} strokeWidth={1.2} opacity=".5" />
      <path d="M172 196 L176 186 L224 186 L228 196Z" fill={C.cream} {...inked} />
      <Star8 x={200} y={241} r={4} fill={C.turquoise} />
      <ellipse className="zs-shadow" cx="200" cy="186" rx="30" ry="4" fill={INK} opacity=".25" />

      <g className="zs-head o-bottom">
        <path d="M168 76 L150 50 M156 60 L144 58 M234 74 L254 48 M246 58 L258 60" stroke="#6b4423" strokeWidth={4} strokeLinecap="round" />
        <path d="M168 76 L150 50 M156 60 L144 58 M234 74 L254 48 M246 58 L258 60" stroke="#8a5a34" strokeWidth={1.6} strokeLinecap="round" />
        <g transform="translate(149 48)"><g transform="rotate(-40)"><Leaf fill="#7fa95a" /></g></g>
        <g transform="translate(256 46)"><g transform="rotate(40)"><Leaf fill={C.olive} /></g></g>
        <path d="M150 128 Q138 100 158 88 Q160 68 182 70 Q196 54 214 66 Q236 60 242 82 Q264 92 252 124 Q200 104 150 128Z" fill="#4f7536" {...inked} />

        <path d="M156 140 Q144 132 146 148 Q150 158 160 152Z" fill={SKINF} {...inked} strokeWidth={2} />
        <path d="M244 140 Q256 132 254 148 Q250 158 240 152Z" fill={SKINF} {...inked} strokeWidth={2} />
        <ellipse cx="200" cy="140" rx="44" ry="48" fill={SKINF} {...inked} />
        <path d="M160 116 Q180 100 200 112 Q222 98 242 118 Q232 100 214 102 Q200 92 186 102 Q168 102 160 116Z" fill="#4f7536" {...inked} strokeWidth={2} />
        <circle cx="172" cy="158" r="6" fill="#e58a7a" opacity=".55" />
        <circle cx="228" cy="158" r="6" fill="#e58a7a" opacity=".55" />

        <g className="zs-calm">
          <path d="M172 136 Q182 128 192 136 Q182 141 172 136Z M208 136 Q218 128 228 136 Q218 141 208 136Z" fill={C.white} stroke={INK} strokeWidth={1.5} />
          <circle cx="184" cy="136" r="2.6" fill={INK} />
          <circle cx="220" cy="136" r="2.6" fill={INK} />
          <path d="M171 134 Q182 129 193 134 M207 134 Q218 129 229 134" fill="none" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
          <path d="M170 124 Q181 118 192 123 M208 123 Q219 118 230 124" fill="none" stroke={INK} strokeWidth={2} strokeLinecap="round" />
        </g>
        <g className="zs-shock" style={{ opacity: 0 }}>
          <circle cx="182" cy="134" r="8" fill={C.white} stroke={INK} strokeWidth={1.6} />
          <circle cx="218" cy="134" r="8" fill={C.white} stroke={INK} strokeWidth={1.6} />
          <circle cx="182" cy="134" r="2" fill={INK} />
          <circle cx="218" cy="134" r="2" fill={INK} />
          <path d="M170 118 Q180 110 190 116 M210 116 Q220 110 230 118" fill="none" stroke={INK} strokeWidth={2} strokeLinecap="round" />
          <g transform="translate(158 124)"><path className="zs-sweat" d="M0 -5 Q4 1 0 4 Q-4 1 0 -5Z" fill="#9fd8ef" stroke={INK} strokeWidth={1.1} /></g>
          <g transform="translate(244 120)"><path className="zs-sweat" style={{ animationDelay: "-.45s" }} d="M0 -5 Q4 1 0 4 Q-4 1 0 -5Z" fill="#9fd8ef" stroke={INK} strokeWidth={1.1} /></g>
        </g>
        <path d="M200 138 Q196 150 202 152" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        <ellipse cx="205" cy="168" rx="11" ry="8" fill="#5a1f22" {...inked} strokeWidth={2} />
        <path d="M196 163 H214" stroke={C.white} strokeWidth={2.4} strokeLinecap="round" />

        <g transform="translate(206 168)">
          <g className="zs-flap o-left">
            <path d="M0 -6 Q30 -16 62 -6 Q92 4 122 -10 Q130 -4 124 4 Q96 20 62 10 Q30 2 0 6Z" fill="#e8262e" {...inked} />
            <path d="M8 0 Q40 -4 62 2 Q90 10 116 -2" fill="none" stroke="#a4161d" strokeWidth={1.8} strokeLinecap="round" />
            <path d="M20 -6 Q36 -10 50 -6" fill="none" stroke="#ff8a8a" strokeWidth={2} strokeLinecap="round" />
          </g>
        </g>

        {LEAVES.map(([x, y, r, , fill], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <g className={`zs-l${i}`}>
              <g transform={`rotate(${r})`}><Leaf fill={fill} /></g>
            </g>
          </g>
        ))}
      </g>

      <Wind x={140} y={80} delay="0s" />
      <Wind x={250} y={58} s={.8} delay="-.08s" />
      <Wind x={100} y={130} s={.9} delay="-.15s" />
      <Wind x={300} y={110} s={.7} delay="-.05s" />
      <Wind x={60} y={70} s={.75} delay="-.2s" />

      <g fill="#3a2a40" stroke={INK} strokeWidth={2}>
        <ellipse cx="150" cy="300" rx="22" ry="18" />
        <ellipse cx="318" cy="298" rx="20" ry="17" />
        <ellipse cx="72" cy="296" rx="20" ry="17" />
      </g>
      <g transform="translate(150 290) scale(1.3)" opacity=".95"><Turban color="#4a3a55" /></g>
      <g transform="translate(318 289) scale(1.2)" opacity=".95"><Turban color="#4a3a55" kind="kolah" /></g>
      <g transform="translate(72 288) scale(1.2)">
        <g className="zs-aud"><Turban color="#4a3a55" /></g>
      </g>

      <g className="zs-curtL o-top">
        <path d="M-10 -10 H64 Q50 70 66 150 Q44 158 36 200 Q30 240 40 280 H-10Z" fill={C.pomegranate} {...inked} />
        <path d="M14 0 Q8 120 18 280 M38 0 Q28 80 44 150" fill="none" stroke="#7a1a2c" strokeWidth={3} strokeLinecap="round" />
        <path d="M52 146 Q60 152 68 148" fill="none" stroke={C.saffron} strokeWidth={5} strokeLinecap="round" />
        <circle cx="68" cy="156" r="4" fill={C.saffron} {...inked} strokeWidth={1.5} />
        <path d="M66 160 L64 176 M68 160 V178 M70 160 L72 176" stroke={C.saffron} strokeWidth={1.8} strokeLinecap="round" />
      </g>
      <g className="zs-curtR o-top">
        <path d="M410 -10 H336 Q350 70 334 150 Q356 158 364 200 Q370 240 360 280 H410Z" fill={C.pomegranate} {...inked} />
        <path d="M386 0 Q392 120 382 280 M362 0 Q372 80 356 150" fill="none" stroke="#7a1a2c" strokeWidth={3} strokeLinecap="round" />
        <path d="M348 146 Q340 152 332 148" fill="none" stroke={C.saffron} strokeWidth={5} strokeLinecap="round" />
        <circle cx="332" cy="156" r="4" fill={C.saffron} {...inked} strokeWidth={1.5} />
        <path d="M334 160 L336 176 M332 160 V178 M330 160 L328 176" stroke={C.saffron} strokeWidth={1.8} strokeLinecap="round" />
      </g>
      <rect x="-10" y="-10" width="420" height="32" fill={C.pomegranate} stroke={INK} strokeWidth={2.5} />
      <Scallops />
      {[40, 120, 200, 280, 360].map((x) => (
        <Star8 key={x} x={x} y={6} r={5} fill={C.saffron} />
      ))}

      {big && <Bubble x={330} y={142} w={104} text="یه نظر کوچیک!" flip className="zs-say o-bottom" style={{ opacity: 0 }} />}
    </Scene>
  );
}
