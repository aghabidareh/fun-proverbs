import { Scene, Person, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const ADOBE = "#c9a074";
const ADOBE_DK = "#a87e52";
const PLASTER = "#e2c08f";
const GOLD = "#f2c14e";
const GOLD_DK = "#d18f1f";
const HEN_BROWN = "#b5673a";

const CSS = `
@keyframes mh-bubble{0%,17%{transform:scale(0)}21%{transform:scale(1.12)}24%,60%{transform:scale(1)}64%,100%{transform:scale(0)}}
.mh-bubble{animation:mh-bubble 8s ease-out infinite}
@keyframes mh-dot{0%,14%{transform:scale(0)}17%,62%{transform:scale(1)}65%,100%{transform:scale(0)}}
.mh-dot{animation:mh-dot 8s ease-out infinite}
@keyframes mh-goose{0%,100%{transform:translateY(0px) rotate(-2deg)}50%{transform:translateY(-4px) rotate(2deg)}}
.mh-goose{animation:mh-goose 1.6s ease-in-out infinite}
@keyframes mh-tw{0%,100%{transform:scale(.4) rotate(0deg);opacity:.3}50%{transform:scale(1.15) rotate(45deg);opacity:1}}
.mh-tw{animation:mh-tw 1.4s ease-in-out infinite}
@keyframes mh-peck{0%,30%,100%{transform:rotate(0deg)}40%{transform:rotate(-55deg)}48%{transform:rotate(-10deg)}56%{transform:rotate(-55deg)}64%{transform:rotate(0deg)}}
.mh-peck{animation:mh-peck 2.2s ease-in-out infinite}
@keyframes mh-lean{0%,16%{transform:rotate(0deg) translateY(0px)}22%,60%{transform:rotate(4deg) translateY(-3px)}66%,100%{transform:rotate(0deg) translateY(0px)}}
.mh-lean{animation:mh-lean 8s ease-in-out infinite}
@keyframes mh-love{0%,19%{transform:scale(0)}23%,60%{transform:scale(1)}64%,100%{transform:scale(0)}}
.mh-love{animation:mh-love 8s ease-out infinite}
@keyframes mh-heart{0%{transform:translate(0px,0px) scale(.4);opacity:0}15%{opacity:1}100%{transform:translate(-10px,-36px) scale(1.1);opacity:0}}
.mh-heart{animation:mh-heart 1.6s ease-out infinite}
@keyframes mh-heartwin{0%,20%{opacity:0}24%,60%{opacity:1}64%,100%{opacity:0}}
.mh-heartwin{animation:mh-heartwin 8s linear infinite}
@keyframes mh-egg{0%,38%{transform:translate(12px,0px) scale(0)}42%{transform:translate(0px,-4px) scale(1.2)}45%,96%{transform:translate(0px,0px) scale(1)}100%{transform:translate(12px,0px) scale(0)}}
.mh-egg{animation:mh-egg 8s ease-out infinite}
@keyframes mh-hen{0%,34%{transform:translateY(0px) scale(1,1)}38%{transform:translateY(-2px) scale(1.08,.92)}41%{transform:translateY(-6px) scale(.95,1.08)}44%,100%{transform:translateY(0px) scale(1,1)}}
.mh-hen{animation:mh-hen 8s ease-in-out infinite}
@keyframes mh-glint{0%,44%{transform:scale(0) rotate(0deg)}47%{transform:scale(1.3) rotate(40deg)}52%{transform:scale(0) rotate(80deg)}72%{transform:scale(0)}75%{transform:scale(1.2) rotate(40deg)}80%,100%{transform:scale(0) rotate(80deg)}}
.mh-glint{animation:mh-glint 8s ease-out infinite}
@keyframes mh-ahem{0%,46%{transform:scale(0)}49%{transform:scale(1.15)}51%,66%{transform:scale(1)}69%,100%{transform:scale(0)}}
.mh-ahem{animation:mh-ahem 8s ease-out infinite}
@keyframes mh-q{0%,66%{transform:scale(0)}70%{transform:scale(1.25)}73%,90%{transform:scale(1)}94%,100%{transform:scale(0)}}
.mh-q{animation:mh-q 8s ease-out infinite}
@keyframes mh-b1{0%,22%{transform:scale(0)}25%{transform:scale(1.1)}27%,56%{transform:scale(1)}59%,100%{transform:scale(0)}}
.mh-b1{animation:mh-b1 8s ease-out infinite}
@keyframes mh-b2{0%,67%{transform:scale(0)}70%{transform:scale(1.1)}72%,88%{transform:scale(1)}91%,100%{transform:scale(0)}}
.mh-b2{animation:mh-b2 8s ease-out infinite}
@keyframes mh-cloud{0%,100%{transform:translateX(-6px)}50%{transform:translateX(8px)}}
.mh-cloud{animation:mh-cloud 8s ease-in-out infinite}
`;

function Hen({ body = C.white, peck = false }: { body?: string; peck?: boolean }) {
  return (
    <g>
      <path d="M-4 -4 V2 M4 -4 V2 M-4 2 h-4 M4 2 h-4" stroke="#e8902a" strokeWidth={1.8} strokeLinecap="round" />
      <path d="M12 -16 Q24 -30 22 -12 Q20 -4 10 -4Z" fill={body} {...inked} strokeWidth={2} />
      <ellipse cx="0" cy="-14" rx="15" ry="11" fill={body} {...inked} strokeWidth={2} />
      <path d="M-2 -16 Q8 -20 10 -10 Q2 -8 -2 -16Z" fill="none" stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <g transform="translate(-10 -22)">
        <g className={peck ? "mh-peck" : undefined} style={{ transformOrigin: "4px 6px", transformBox: "view-box" }}>
          <path d="M-4 -8 q2 -5 4 -1 q2 -5 4 0 q3 -3 3 2Z" fill={C.pomegranate} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
          <circle cx="0" cy="0" r="7" fill={body} {...inked} strokeWidth={2} />
          <path d="M-6 -1 L-12 1 L-6 3Z" fill={C.saffron} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
          <path d="M-5 3 q-1 5 2 5 q2 -2 0 -5" fill={C.pomegranate} stroke={INK} strokeWidth={1} />
          <circle cx="-2" cy="-2" r="1.2" fill={INK} />
        </g>
      </g>
    </g>
  );
}

function Goose() {
  return (
    <g>
      <path d="M-6 16 V26 M6 16 V26 M-6 26 h-6 M6 26 h-6" stroke="#e8902a" strokeWidth={2.4} strokeLinecap="round" />
      <path d="M26 -2 Q42 -10 40 6 Q34 14 24 10Z" fill={GOLD} {...inked} strokeWidth={2} />
      <ellipse cx="0" cy="2" rx="30" ry="18" fill={GOLD} {...inked} />
      <path d="M-6 -4 Q14 -12 22 6 Q6 10 -6 -4Z" fill={GOLD_DK} stroke={INK} strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M2 0 q6 -2 10 4 M6 -4 q6 0 9 6" fill="none" stroke={INK} strokeWidth={1} />
      <path d="M-22 -6 Q-30 -26 -20 -40" fill="none" stroke={INK} strokeWidth={11} strokeLinecap="round" />
      <path d="M-22 -6 Q-30 -26 -20 -40" fill="none" stroke={GOLD} strokeWidth={7} strokeLinecap="round" />
      <circle cx="-18" cy="-44" r="9" fill={GOLD} {...inked} strokeWidth={2} />
      <path d="M-26 -44 L-38 -41 L-26 -38Z" fill="#e8782f" stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
      <circle cx="-20" cy="-46" r="1.5" fill={INK} />
      <circle cx="-15" cy="-41" r="2" fill="#e58a7a" opacity=".7" />
      <path d="M-26 -52 L-24 -62 L-20 -55 L-17 -64 L-14 -55 L-10 -62 L-10 -52Z" fill="#ffd54a" stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <circle cx="-17" cy="-56" r="1.6" fill={C.pomegranate} />
    </g>
  );
}

function House({ x, door }: { x: number; door: string }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <rect x="0" y="118" width="80" height="140" fill={PLASTER} {...inked} />
      <rect x="-4" y="110" width="88" height="10" fill={ADOBE} {...inked} strokeWidth={2} />
      <path d="M24 258 V214 Q24 196 40 192 Q56 196 56 214 V258Z" fill={door} {...inked} />
      <path d="M40 194 V258" stroke={INK} strokeWidth={1.5} />
      <circle cx="36" cy="230" r="1.6" fill={C.saffron} stroke={INK} strokeWidth={.8} />
      <circle cx="44" cy="230" r="1.6" fill={C.saffron} stroke={INK} strokeWidth={.8} />
      <path d="M26 170 V150 Q26 136 40 134 Q54 136 54 150 V170Z" fill={C.cream} {...inked} strokeWidth={2} />
      <path d="M40 135 V170 M27 152 H53" stroke={INK} strokeWidth={1.4} />
      <rect x="0" y="178" width="80" height="8" fill={C.turquoise} stroke={INK} strokeWidth={1.6} />
    </g>
  );
}

export default function MorghHamsaye({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="مرغ همسایه غازه" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#bfdccb" />
      <circle cx="56" cy="44" r="18" fill="#f6d27a" {...inked} />
      <g className="mh-cloud">
        <path d="M100 60 Q96 48 108 48 Q112 38 124 42 Q132 34 140 44 Q152 44 150 60Z" fill={C.white} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      </g>

      <House x={-30} door={C.turquoise} />
      <House x={338} door={C.lapis} />

      <rect x="-10" y="256" width="420" height="54" fill="#d8bb8a" stroke={INK} strokeWidth={2.5} />
      <path d="M-10 272 H410 M-10 290 H410 M20 256 V272 M80 256 V272 M140 256 V272 M260 256 V272 M320 256 V272 M50 272 V290 M110 272 V290 M230 272 V290 M290 272 V290 M350 272 V290" stroke="#b99a68" strokeWidth={1.3} />

      <path d="M194 258 V160 Q194 150 204 150 Q214 150 214 160 V258Z" fill={ADOBE} {...inked} />
      <path d="M198 176 l6 -2 M206 196 l5 2 M198 214 l7 -1 M205 236 l5 1 M199 248 l4 -2" stroke={ADOBE_DK} strokeWidth={1.4} strokeLinecap="round" />
      <path d="M194 166 H214" stroke={ADOBE_DK} strokeWidth={1.5} />

      <g transform="translate(292 258)">
        <Hen peck />
      </g>

      <g stroke={INK} strokeWidth={2.2} strokeLinecap="round">
        <path d="M150 258 L156 206 M176 258 L170 206" />
        <path d="M152 244 H174 M154 230 H172 M155 216 H171" />
      </g>
      <path d="M150 258 L156 206 M176 258 L170 206" stroke="#a0703f" strokeWidth={1} />

      <g transform="translate(163 208) scale(.8)">
        <g className="mh-lean o-bottom">
          <Person robe={C.terracotta} sash={C.saffron} hat={C.white} mood="smug" armR={-120} armL={-137}>
            <path d="M6 -79 L50 -84 L50 -74 L6 -73Z" fill="#c9962f" {...inked} strokeWidth={2} />
            <path d="M18 -80 V-74 M32 -82 V-74" stroke={INK} strokeWidth={1.4} />
            <rect x="48" y="-87" width="6" height="16" rx="1.5" fill="#e0b24a" {...inked} strokeWidth={1.8} />
            <g transform="translate(-5 -75)">
              <path className="mh-love" d="M0 3 Q-6 -3 -3 -5 Q0 -6 0 -3 Q0 -6 3 -5 Q6 -3 0 3Z" fill={C.pomegranate} stroke={INK} strokeWidth={.9} />
            </g>
          </Person>
        </g>
      </g>

      <g className="mh-heartwin" style={{ opacity: 0 }}>
        {[0, -0.55, -1.1].map((d, i) => (
          <g key={i} transform={`translate(${150 - i * 8} 140)`}>
            <path className="mh-heart" style={{ animationDelay: `${d}s` }} d="M0 2 Q-6 -4 -3 -6 Q0 -7 0 -4 Q0 -7 3 -6 Q6 -4 0 2Z" fill={C.pomegranate} stroke={INK} strokeWidth={1} />
          </g>
        ))}
      </g>

      <g fill={C.white} stroke={INK} strokeWidth={1.6}>
        <circle className="mh-dot" cx="186" cy="128" r="3" />
        <circle className="mh-dot" cx="200" cy="116" r="4" style={{ animationDelay: ".08s" }} />
        <circle className="mh-dot" cx="218" cy="104" r="5" style={{ animationDelay: ".16s" }} />
      </g>
      <g transform="translate(300 86)">
        <g className="mh-bubble">
          <path d="M0 56 C-84 0 -84 -56 -42 -63 C-17 -67 0 -50 0 -36 C0 -50 17 -67 42 -63 C84 -56 84 0 0 56Z" fill="#f9d3dc" {...inked} />
          <path d="M0 46 C-70 0 -70 -48 -40 -54 C-18 -57 -4 -44 0 -30 C4 -44 18 -57 40 -54 C70 -48 70 0 0 46Z" fill="none" stroke={C.pomegranate} strokeWidth={1.4} strokeDasharray="3 3" />
          <g transform="translate(-6 14)">
            <g className="mh-goose"><Goose /></g>
          </g>
          <Star8 x={-40} y={-30} r={6} fill={C.white} className="mh-tw" />
          <Star8 x={44} y={-20} r={5} fill={C.white} className="mh-tw" style={{ animationDelay: "-.5s" }} />
          <Star8 x={36} y={24} r={4} fill={GOLD} className="mh-tw" style={{ animationDelay: "-.9s" }} />
          <Star8 x={-34} y={14} r={4} fill={GOLD} className="mh-tw" style={{ animationDelay: "-.3s" }} />
        </g>
      </g>

      <g transform="translate(96 258)">
        <g className="mh-egg">
          <g transform="translate(-24 -5)">
            <ellipse cx="0" cy="0" rx="5" ry="6.5" fill={GOLD} stroke={INK} strokeWidth={1.6} />
            <path d="M-2 -3 q1 -2 3 -2" fill="none" stroke={C.white} strokeWidth={1.4} strokeLinecap="round" />
          </g>
        </g>
        <g className="mh-hen o-bottom">
          <g transform="scale(-1 1)"><Hen body={HEN_BROWN} /></g>
        </g>
        <g transform="translate(-30 -14)">
          <g className="mh-glint"><Star8 r={6} fill={C.white} /></g>
        </g>
        <g transform="translate(14 -42)">
          <text className="mh-ahem" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="10" fill={INK} direction="rtl" style={{ transform: "scale(0)" }}>اِهِم!</text>
        </g>
      </g>

      <g transform="translate(176 120)">
        <text className="mh-q" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="20" fill={C.saffron} stroke={INK} strokeWidth={1} style={{ transform: "scale(0)" }}>؟</text>
      </g>

      {big && (
        <g>
          <Bubble x={150} y={120} w={64} text="وااای!" flip className="mh-b1 o-bottom" style={{ transform: "scale(0)" }} />
          <Bubble x={286} y={226} w={64} text="قُدقُد" className="mh-b2 o-bottom" style={{ transform: "scale(0)" }} />
        </g>
      )}
    </Scene>
  );
}
