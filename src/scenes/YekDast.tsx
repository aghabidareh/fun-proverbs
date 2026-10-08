import { Scene, C, INK, SKIN, inked, Bubble } from "./parts";
import type { SceneProps } from "./types";

const swings = Array.from({ length: 13 }, (_, i) => {
  const p = 4 + i * 4;
  const l = i % 2 === 0;
  return `${p}%{transform:rotate(${l ? -30 : 28}deg) translateX(${l ? -8 : 8}px)}`;
}).join("");

const css = `
.yd-hand{animation:yd-clap 8s ease-in-out infinite;transform-origin:50% 100%}
@keyframes yd-clap{0%{transform:rotate(0) translateX(0)}${swings}58%{transform:rotate(0) translateX(0)}66%{transform:rotate(0) translateY(0)}74%,92%{transform:rotate(16deg) translateY(10px) scale(.93)}100%{transform:rotate(0) translateY(0)}}
.yd-lines{animation:yd-lines 8s linear infinite}
@keyframes yd-lines{0%,52%{opacity:1}56%,100%{opacity:0}}
.yd-sweat{animation:yd-sweat 8s ease-in infinite}
@keyframes yd-sweat{0%,30%{opacity:0;transform:translate(0,0)}34%{opacity:1}56%{opacity:0;transform:translate(5px,34px)}100%{opacity:0}}
.yd-dot{animation:yd-dot 8s infinite}
@keyframes yd-dot{0%,62%{opacity:0;transform:scale(0)}66%,94%{opacity:1;transform:scale(1)}98%,100%{opacity:0;transform:scale(0)}}
.yd-chirp{animation:yd-chirp 8s infinite}
@keyframes yd-chirp{0%,64%{opacity:0}66%,70%,74%,78%,82%,86%{opacity:1}68%,72%,76%,80%,84%,88%{opacity:.1}90%,100%{opacity:0}}
.yd-cricket{animation:yd-hop 8s infinite;transform-origin:50% 100%}
@keyframes yd-hop{0%,64%,100%{transform:translateY(0)}67%,75%,83%{transform:translateY(-2px) scaleY(1.05)}70%,78%,86%{transform:translateY(0)}}
.yd-weed{animation:yd-weed 8s linear infinite}
@keyframes yd-weed{0%,62%{transform:translate(-300px,0) rotate(0)}70%{transform:translate(-170px,-10px) rotate(260deg)}76%{transform:translate(-70px,0) rotate(480deg)}84%{transform:translate(40px,-8px) rotate(700deg)}100%{transform:translate(270px,0) rotate(1100deg)}}
.yd-spot{animation:yd-spot 3s ease-in-out infinite}
@keyframes yd-spot{0%,100%{opacity:.15}40%{opacity:.2}44%{opacity:.11}48%{opacity:.19}}
.yd-fan{animation:yd-fan 8s ease-in-out infinite;transform-origin:50% 100%}
@keyframes yd-fan{0%,64%{transform:translateY(26px) rotate(0)}70%{transform:translateY(0) rotate(-12deg)}75%{transform:rotate(12deg)}80%{transform:rotate(-12deg)}85%{transform:rotate(12deg)}90%{transform:translateY(0) rotate(0)}96%,100%{transform:translateY(26px)}}
`;

function Hand() {
  const f = { fill: SKIN, ...inked, strokeWidth: 2 };
  return (
    <g>
      <rect x="-13" y="-38" width="7" height="26" rx="3.5" {...f} />
      <rect x="-5.5" y="-44" width="7" height="31" rx="3.5" {...f} />
      <rect x="2" y="-41" width="7" height="28" rx="3.5" {...f} />
      <rect x="9.5" y="-34" width="6.5" height="22" rx="3.2" {...f} />
      <rect x="-22" y="-18" width="7" height="19" rx="3.5" transform="rotate(-38 -15 0)" {...f} />
      <path d="M-14 -16 Q-15 6 -10 14 L10 14 Q16 4 16 -16 Q1 -20 -14 -16Z" fill={SKIN} {...inked} />
      <path d="M-6 0 Q0 4 8 -2" fill="none" stroke={INK} strokeWidth={1.2} opacity=".6" />
      <rect x="-13" y="12" width="26" height="14" rx="3" fill={C.pomegranate} {...inked} />
      <path d="M-12 17 H12" stroke={C.saffron} strokeWidth={2} />
      <g fill={C.cream}><circle cx="-6" cy="22" r="1.4" /><circle cx="0" cy="22" r="1.4" /><circle cx="6" cy="22" r="1.4" /></g>
      <path d="M-10 28 l-2 6 M-3 28 l0 7 M4 28 l1 6 M10 28 l2 5" stroke={C.pomegranate} strokeWidth={1.6} strokeLinecap="round" opacity=".6" />
    </g>
  );
}

function Curtain() {
  return (
    <g>
      <path d="M-10 0 H78 Q62 80 72 160 Q80 230 60 300 H-10Z" fill={C.pomegranate} {...inked} />
      <path d="M18 20 Q12 140 22 300 M42 20 Q36 140 42 300 M62 20 Q52 100 58 160" fill="none" stroke="#6e1426" strokeWidth={2.5} />
      <path d="M-10 166 Q40 176 72 160" fill="none" stroke={C.saffron} strokeWidth={4} />
      <circle cx="70" cy="161" r="4" fill={C.saffron} stroke={INK} strokeWidth={1.5} />
      <path d="M68 165 l-3 14 h10 l-3 -14Z" fill={C.saffron} stroke={INK} strokeWidth={1.2} />
    </g>
  );
}

const audience = [32, 74, 116, 158, 200, 242, 284, 326, 368];

export default function YekDast({ playing = true, big = false }: SceneProps) {
  const scallops = Array.from({ length: 11 }, (_, i) => `Q${i * 40 + 20} 46 ${i * 40 + 40} 28`).join(" ");
  return (
    <Scene title="یک دست صدا ندارد" className={playing ? "" : "paused"}>
      <style>{css}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#1b1b2f" />
      <g opacity=".18" stroke={C.saffron} fill="none" strokeWidth={1.5}>
        <path d="M140 205 V120 Q140 70 200 58 Q260 70 260 120 V205" />
        <path d="M152 205 V124 Q152 82 200 72 Q248 82 248 124 V205" />
      </g>
      <rect x="-10" y="205" width="420" height="50" fill="#5a3520" stroke={INK} strokeWidth={2.5} />
      <path d="M-10 216 H410 M-10 229 H410 M-10 242 H410" stroke="#3e2414" strokeWidth={1.5} />
      <path d="M60 205 l-6 11 M150 216 l-4 13 M260 205 l3 11 M330 229 l4 13 M110 229 l-2 13" stroke="#3e2414" strokeWidth={1.2} />
      <rect x="-10" y="250" width="420" height="9" fill="#2e1c10" stroke={INK} strokeWidth={2} />

      <polygon className="yd-spot" points="186,30 214,30 304,232 96,232" fill="#fff3c4" opacity=".16" />
      <ellipse cx="200" cy="230" rx="104" ry="14" fill="#fff3c4" opacity=".22" />
      <ellipse cx="200" cy="230" rx="22" ry="4" fill="#000" opacity=".35" />

      <g transform="translate(200 223)">
        <g className="yd-weed">
          <circle r="11" fill="#b08a55" opacity=".35" />
          <g fill="none" stroke="#8a6534" strokeWidth={1.6}>
            <circle r="11" />
            <path d="M-10 -3 Q0 -12 9 -5 M-9 5 Q0 -6 10 4 M-4 10 Q-6 -2 2 -11 M4 10 Q8 0 -2 -10 M-11 1 Q0 6 11 -1" />
          </g>
        </g>
      </g>

      <g transform="translate(322 214)">
        <g className="yd-cricket">
          <path d="M-8 6 l-4 4 M-2 7 l-2 4 M4 7 l3 4 M7 3 l8 -6 l3 9" fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
          <ellipse cx="0" cy="3" rx="9" ry="4.5" fill={C.olive} stroke={INK} strokeWidth={1.6} />
          <circle cx="-9" cy="1" r="3.4" fill={C.olive} stroke={INK} strokeWidth={1.4} />
          <circle cx="-10" cy="0" r="1" fill={INK} />
          <path d="M-11 -2 Q-18 -14 -26 -12 M-10 -2 Q-12 -14 -20 -18" fill="none" stroke={INK} strokeWidth={1.1} />
        </g>
        <g className="yd-chirp" stroke={C.cream} strokeWidth={1.5} strokeLinecap="round" fill="none">
          <path d="M8 -10 q4 -4 0 -8 M13 -8 q6 -6 0 -12 M18 -6 q8 -8 0 -16" />
        </g>
      </g>

      <g transform="translate(200 150)">
        <g className="yd-lines" stroke={C.cream} strokeWidth={2} strokeLinecap="round" fill="none" opacity=".85">
          <path d="M-30 -40 Q-44 -14 -32 12 M-40 -30 Q-50 -12 -42 6" />
          <path d="M32 -40 Q46 -14 34 12 M42 -30 Q52 -12 44 6" />
        </g>
        <g className="yd-hand"><Hand /></g>
        <g transform="translate(18 -30)">
          <path className="yd-sweat" d="M0 -5 Q4 1 0 4 Q-4 1 0 -5Z" fill="#8ad3ea" stroke={INK} strokeWidth={1.2} />
        </g>
        <g fill={C.cream}>
          <circle className="yd-dot" cx="-12" cy="-62" r="3" style={{ animationDelay: "0s" }} />
          <circle className="yd-dot" cx="0" cy="-62" r="3" style={{ animationDelay: ".25s" }} />
          <circle className="yd-dot" cx="12" cy="-62" r="3" style={{ animationDelay: ".5s" }} />
        </g>
      </g>

      <Curtain />
      <g transform="translate(400 0) scale(-1 1)"><Curtain /></g>
      <path d={`M0 28 ${scallops} V-10 H0Z`} fill={C.pomegranate} {...inked} />
      <path d={`M0 28 ${scallops}`} fill="none" stroke={C.saffron} strokeWidth={2} strokeDasharray="2 3" transform="translate(0 4)" />
      <rect x="192" y="26" width="16" height="8" rx="2" fill="#444" stroke={INK} strokeWidth={1.5} />

      {big && (
        <g transform="translate(108 186)">
          <path d="M-6 0 L-14 22 M6 0 L14 22" stroke={INK} strokeWidth={2} />
          <rect x="-34" y="-18" width="68" height="20" rx="3" fill={C.cream} {...inked} strokeWidth={2} />
          <text x="0" y="-4" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="9" fill={INK} direction="rtl">اجرای انفرادی</text>
        </g>
      )}
      {big && <Bubble x={312} y={200} w={64} text="جیرجیر" flip className="yd-chirp" />}

      <rect x="-10" y="259" width="420" height="50" fill="#0e0e1c" />
      {[116, 284].map((x, i) => (
        <g key={x} transform={`translate(${x + 12} 266)`}>
          <g className="yd-fan" style={{ animationDelay: `${i * 0.2}s` }}>
            <path d="M0 0 V-14" stroke="#0b0b17" strokeWidth={6} strokeLinecap="round" />
            <path d="M-4 -14 v-8 M-1 -15 v-10 M2 -15 v-9 M5 -13 v-6" stroke="#0b0b17" strokeWidth={3} strokeLinecap="round" />
          </g>
        </g>
      ))}
      {audience.map((x, i) => (
        <g key={x} transform={`translate(${x} ${i % 2 ? 278 : 274})`} fill="#0b0b17" stroke="#3a3a5a" strokeWidth={1.5}>
          <path d="M-22 30 Q-20 8 0 6 Q20 8 22 30Z" />
          <circle cy="-6" r="11" />
          {i % 3 === 0 ? <ellipse cy="-15" rx="12" ry="6" /> : i % 3 === 1 ? <path d="M-9 -12 L-6 -28 Q0 -31 6 -28 L9 -12Z" /> : null}
        </g>
      ))}
    </Scene>
  );
}
