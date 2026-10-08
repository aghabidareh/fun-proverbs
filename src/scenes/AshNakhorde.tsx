import { Scene, Person, Turban, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const ASH = "#a3a565";
const CHAR = "#2a2420";

const CSS = `
@keyframes an-steam{0%{transform:translateY(6px) scaleY(.8);opacity:0}25%{opacity:.85}100%{transform:translateY(-34px) scaleY(1.2);opacity:0}}
.an-steam{animation:an-steam 2.6s ease-out infinite}
@keyframes an-smoke{0%{transform:translate(0,0) scale(.4);opacity:0}12%{opacity:.95}100%{transform:translate(-14px,-70px) scale(1.9);opacity:0}}
.an-smoke{animation:an-smoke 2.4s ease-out infinite}
@keyframes an-cough{0%,66%,100%{transform:translate(0px,0px) rotate(0deg)}70%{transform:translate(3px,4px) rotate(8deg)}73%{transform:translate(-1px,-2px) rotate(-3deg)}76%{transform:translate(2px,3px) rotate(6deg)}80%{transform:translate(0px,0px) rotate(0deg)}}
.an-cough{animation:an-cough 5s ease-in-out infinite}
@keyframes an-bigpuff{0%,68%{transform:translate(0,0) scale(0);opacity:0}71%{transform:translate(6px,-4px) scale(1);opacity:1}90%{transform:translate(16px,-40px) scale(2.4);opacity:0}100%{opacity:0}}
.an-bigpuff{animation:an-bigpuff 5s ease-out infinite}
@keyframes an-ember{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(8px,-40px);opacity:0}}
.an-ember{animation:an-ember 1.8s ease-out infinite}
@keyframes an-glow{0%,100%{opacity:.4}50%{opacity:1}}
.an-glow{animation:an-glow .9s ease-in-out infinite}
@keyframes an-fan{0%,100%{transform:rotate(-150deg)}50%{transform:rotate(-128deg)}}
.an-fan{animation:an-fan .32s ease-in-out infinite}
@keyframes an-twinkle{0%,100%{transform:scale(.3) rotate(0deg);opacity:.3}50%{transform:scale(1.1) rotate(45deg);opacity:1}}
.an-twinkle{animation:an-twinkle 1.6s ease-in-out infinite}
@keyframes an-say1{0%,8%{transform:scale(0)}12%{transform:scale(1.1)}14%,44%{transform:scale(1)}47%,100%{transform:scale(0)}}
@keyframes an-say2{0%,52%{transform:scale(0)}56%{transform:scale(1.1)}58%,90%{transform:scale(1)}93%,100%{transform:scale(0)}}
.an-say1{animation:an-say1 5s ease-out infinite}
.an-say2{animation:an-say2 5s ease-out infinite}
.an-nohead{display:none}
`;

function CharredHead() {
  return (
    <g>
      <path d="M-13 -4 l-6 -3 l3 5 l-6 1 l6 3 M13 -4 l6 -3 l-3 5 l6 1 l-6 3" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="0" cy="0" rx="13" ry="15" fill={CHAR} {...inked} />
      <g style={{ animation: "blink 3.2s infinite" }}>
        <path d="M-10 -1 Q-5.5 -7 -1 -1 Q-5.5 3 -10 -1Z M1 -1 Q5.5 -7 10 -1 Q5.5 3 1 -1Z" fill={C.white} stroke={INK} strokeWidth={1.2} />
        <circle cx="-5.5" cy="-1" r="1.2" fill={INK} />
        <circle cx="5.5" cy="-1" r="1.2" fill={INK} />
      </g>
      <path d="M-8 -8 q2 -3 0 -5 M6 -8 q2 -3 0 -5" fill="none" stroke="#8d8a8a" strokeWidth={1.2} strokeLinecap="round" />
      <path d="M-7 5 Q-3 3 0 5 Q3 3 7 5 M-7 5 q-2 2 -1 3 M7 5 q2 2 1 3" fill="none" stroke="#5a4a40" strokeWidth={1.6} strokeLinecap="round" />
      <ellipse cx="0" cy="9.5" rx="2.8" ry="3.2" fill="#7a1f2b" stroke={INK} strokeWidth={1.2} />
      <ellipse className="an-glow" cx="0" cy="10" rx="1.4" ry="1.6" fill={C.saffron} />
      <Turban color={C.cream} />
      <path d="M-12 -12 Q-6 -16 -2 -11 Q-6 -8 -12 -12Z M5 -19 Q10 -23 13 -17 Q9 -14 5 -19Z" fill="#3a302a" />
      <path d="M12 -8 l3 1 l-1 3 l3 1 M-15 -18 l-3 -1 l1 -3" fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
      <circle className="an-glow" cx="9" cy="-19" r="1.6" fill={C.saffron} />
    </g>
  );
}

function Puff({ x, y, delay, r = 6 }: { x: number; y: number; delay: string; r?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="an-smoke" style={{ animationDelay: delay }}>
        <circle cx="0" cy="0" r={r} fill="#77706c" stroke={INK} strokeWidth={1.4} />
        <circle cx={r * .8} cy={-r * .5} r={r * .7} fill="#8d8682" stroke={INK} strokeWidth={1.3} />
      </g>
    </g>
  );
}

export default function AshNakhorde({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="آش نخورده و دهن سوخته" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#f0c48a" />

      <rect x="-10" y="40" width="420" height="16" fill={C.turquoise} stroke={INK} strokeWidth={2} />
      {Array.from({ length: 11 }, (_, i) => (
        <Star8 key={i} x={10 + i * 40} y={48} r={5} fill={C.saffron} />
      ))}
      <path d="M290 160 V104 Q290 80 316 72 Q342 80 342 104 V160Z" fill="#c98a55" {...inked} />
      <path d="M306 160 Q300 146 310 138 L310 126 L322 126 L322 138 Q332 146 326 160Z" fill={C.lapis} {...inked} strokeWidth={2} />
      <path d="M312 146 h8" stroke={C.cream} strokeWidth={2} />
      <path d="M40 160 V104 Q40 80 66 72 Q92 80 92 104 V160Z" fill={C.cream} {...inked} />
      <path d="M50 100 L82 132 M82 100 L50 132 M66 84 V160 M42 116 H90" stroke={C.turquoise} strokeWidth={2} />

      <rect x="-10" y="200" width="420" height="110" fill={C.pomegranate} stroke={INK} strokeWidth={2.5} />
      <rect x="-10" y="210" width="420" height="10" fill={C.saffron} stroke={INK} strokeWidth={1.5} />
      <path d="M-10 215 H410" stroke={INK} strokeWidth={1} strokeDasharray="4 6" />
      <path d="M40 300 L80 236 L340 236 L380 300Z" fill={C.paper} {...inked} />
      <path d="M68 286 L94 244 L326 244 L352 286Z" fill="none" stroke={C.terracotta} strokeWidth={2} strokeDasharray="6 5" />

      <ellipse cx="262" cy="274" rx="44" ry="6" fill={INK} opacity=".15" />
      <g>
        {[0, -.9, -1.7].map((d, i) => (
          <g key={i} transform={`translate(${246 + i * 15} 216)`}>
            <path className="an-steam" style={{ animationDelay: `${d}s` }} d="M0 0 Q-6 -8 0 -16 Q6 -24 0 -32" fill="none" stroke={C.white} strokeWidth={3} strokeLinecap="round" />
          </g>
        ))}
        <path d="M250 268 L246 276 L278 276 L274 268Z" fill={C.lapis} {...inked} strokeWidth={2} />
        <path d="M220 236 Q224 270 262 272 Q300 270 304 236Z" fill={C.white} {...inked} />
        <path d="M224 248 Q262 258 300 248" fill="none" stroke={C.lapis} strokeWidth={4} />
        <path d="M232 258 q4 -4 8 0 q4 -4 8 0 M276 258 q4 -4 8 0 q4 -4 8 0" fill="none" stroke={C.turquoise} strokeWidth={2} />
        <ellipse cx="262" cy="236" rx="42" ry="9" fill={ASH} {...inked} />
        <path d="M232 236 q6 -3 12 0 t12 0 M266 238 q6 -3 12 0 t10 0" fill="none" stroke={C.cream} strokeWidth={1.3} />
        <path d="M240 234 Q252 228 264 233 Q276 238 286 232" fill="none" stroke={C.white} strokeWidth={4} strokeLinecap="round" />
        <path d="M248 238 Q262 243 278 237" fill="none" stroke="#6b4423" strokeWidth={2.4} strokeLinecap="round" />
        <g fill="#b9702a">
          <circle cx="256" cy="232" r="1.6" /><circle cx="272" cy="240" r="1.6" /><circle cx="282" cy="236" r="1.4" /><circle cx="244" cy="238" r="1.4" />
        </g>
      </g>
      <g transform="rotate(-18 322 262)">
        <ellipse cx="312" cy="262" rx="7" ry="4.5" fill="#d9d2c3" {...inked} strokeWidth={1.8} />
        <path d="M319 262 H344" stroke={INK} strokeWidth={4.5} strokeLinecap="round" />
        <path d="M319 262 H344" stroke="#d9d2c3" strokeWidth={2} strokeLinecap="round" />
      </g>
      <Star8 x={300} y={228} r={6} fill={C.white} className="an-twinkle" />
      <Star8 x={334} y={250} r={4} fill={C.white} className="an-twinkle" style={{ animationDelay: "-.8s" }} />

      <g transform="translate(140 270)">
        <Person robe={C.olive} sash={C.saffron} headClass="an-nohead" armL={18} armR={-150} armRClass="an-fan" />
        <g transform="translate(0 -74)">
          <g className="an-cough">
            <CharredHead />
          </g>
        </g>
        <Puff x={0} y={-66} delay="0s" />
        <Puff x={1} y={-66} delay="-.8s" r={5} />
        <Puff x={-1} y={-66} delay="-1.6s" />
        <g transform="translate(4 -64)">
          <g className="an-bigpuff">
            <circle cx="0" cy="0" r="7" fill="#5f5955" stroke={INK} strokeWidth={1.5} />
            <circle cx="8" cy="-3" r="5" fill="#77706c" stroke={INK} strokeWidth={1.4} />
          </g>
        </g>
        <g transform="translate(9 -95)">
          <circle className="an-ember" r="1.8" fill={C.saffron} />
          <circle className="an-ember" r="1.4" fill={C.terracotta} cx="-6" style={{ animationDelay: "-.9s" }} />
        </g>
        <g transform="translate(-4 -98)">
          <path className="an-smoke" d="M0 0 q-3 -5 0 -9 q3 -4 0 -8" fill="none" stroke="#8d8682" strokeWidth={2} strokeLinecap="round" style={{ animationDelay: "-1.2s" }} />
        </g>
      </g>

      {big && (
        <>
          <Bubble x={292} y={190} w={112} text="من کاری نکردم!" flip className="an-say1 o-bottom" />
          <Bubble x={124} y={166} w={84} text="می‌دونم..." flip className="an-say2 o-bottom" />
        </>
      )}
    </Scene>
  );
}
