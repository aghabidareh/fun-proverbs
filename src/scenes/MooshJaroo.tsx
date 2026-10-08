import { Scene, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const FUR = "#9a8f86";
const FUR_DK = "#7f746c";
const PINK = "#e9a9a0";
const WOOD = "#8a5a3c";
const STRAW = "#e2b856";
const STRAW_DK = "#b98a2c";

function wiggle(from: number, to: number, step = 3) {
  const fr: string[] = [];
  let i = 0;
  for (let p = from; p < to; p += step, i++) {
    const s = i % 2 ? 1 : -1;
    fr.push(`${p}%{transform:translate(${s * 2}px,-16px) scale(.86,1) rotate(${s * 6}deg)}`);
  }
  return fr.join("");
}

function jam(from: number, to: number, step = 1.5) {
  const fr: string[] = [`0%,${from}%{transform:translate(0px,0px) rotate(0deg)}`];
  let i = 0;
  for (let p = from + step; p < to; p += step, i++) {
    const s = i % 2 ? 1 : -1;
    fr.push(`${p.toFixed(1)}%{transform:translate(${s * 2}px,${i % 3 === 0 ? -1 : 0}px) rotate(${s * 2.5}deg)}`);
  }
  fr.push(`${to}%,100%{transform:translate(0px,0px) rotate(0deg)}`);
  return `@keyframes mj-jam{${fr.join("")}}`;
}

const CSS = `
@keyframes mj-go{0%{transform:translate(0px,0px) scale(1,1) rotate(0deg)}12%{transform:translate(0px,-6px) scale(.97,.97) rotate(0deg)}18%{transform:translate(0px,-14px) scale(.9,.96) rotate(0deg)}${wiggle(21, 51)}52%{transform:translate(0px,-17px) scale(.84,1.03) rotate(0deg)}56%{transform:translate(0px,6px) scale(1.18,.82) rotate(0deg)}60%{transform:translate(0px,0px) scale(.96,1.05) rotate(0deg)}64%,100%{transform:translate(0px,0px) scale(1,1) rotate(0deg)}}
.mj-go{animation:mj-go 6s ease-in-out infinite}
${jam(20, 52)}
.mj-jam{animation:mj-jam 6s linear infinite}
@keyframes mj-head{0%,20%{opacity:1}22%,54%{opacity:0}56%,63%{opacity:1}64%,92%{opacity:0}94%,100%{opacity:1}}
.mj-head{animation:mj-head 6s linear infinite}
@keyframes mj-prof{0%,63%{opacity:0}64%,92%{opacity:1}94%,100%{opacity:0}}
.mj-prof{animation:mj-prof 6s linear infinite}
@keyframes mj-tail{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(8deg)}}
.mj-tail{animation:mj-tail .5s ease-in-out infinite}
@keyframes mj-dust{0%,20%{transform:translate(0px,0px) scale(.4);opacity:0}23%{opacity:.95}36%,100%{transform:translate(var(--dx),-24px) scale(1.7);opacity:0}}
.mj-dust{animation:mj-dust 6s ease-out infinite}
@keyframes mj-burst{0%,54%{transform:scale(0) rotate(0deg);opacity:0}56%{opacity:1}59%{transform:scale(1.3) rotate(30deg);opacity:.9}66%,100%{transform:scale(1.8) rotate(50deg);opacity:0}}
.mj-burst{animation:mj-burst 6s ease-out infinite}
@keyframes mj-dizzywin{0%,57%{opacity:0}59%,78%{opacity:1}81%,100%{opacity:0}}
.mj-dizzywin{animation:mj-dizzywin 6s linear infinite}
@keyframes mj-orbit{to{transform:rotate(360deg)}}
.mj-orbit{animation:mj-orbit 1s linear infinite}
@keyframes mj-effort{0%,22%{opacity:0;transform:translateX(0px)}25%,50%{opacity:1}27%,31%,35%,39%,43%,47%{transform:translateX(3px)}29%,33%,37%,41%,45%,49%{transform:translateX(-2px)}52%,100%{opacity:0;transform:translateX(0px)}}
.mj-effort{animation:mj-effort 6s linear infinite}
@keyframes mj-sweat{0%{transform:translateY(0px);opacity:0}30%{opacity:1}100%{transform:translateY(14px);opacity:0}}
.mj-sweat{animation:mj-sweat .9s ease-in infinite}
@keyframes mj-sweatwin{0%,22%{opacity:0}26%,54%{opacity:1}56%,100%{opacity:0}}
.mj-sweatwin{animation:mj-sweatwin 6s linear infinite}
@keyframes mj-bang{0%,64%{transform:scale(0)}68%{transform:scale(1.3)}71%,90%{transform:scale(1)}93%,100%{transform:scale(0)}}
.mj-bang{animation:mj-bang 6s ease-out infinite}
@keyframes mj-hole{0%,20%,54%,100%{transform:scale(1,1)}24%,32%,40%,48%{transform:scale(1.06,1.03)}28%,36%,44%{transform:scale(.98,1)}}
.mj-hole{animation:mj-hole 6s ease-in-out infinite}
@keyframes mj-frame{0%,20%,54%,100%{transform:rotate(0deg)}30%{transform:rotate(-3deg)}40%{transform:rotate(3deg)}50%{transform:rotate(-2deg)}57%{transform:rotate(6deg)}62%{transform:rotate(-4deg)}}
.mj-frame{animation:mj-frame 6s ease-in-out infinite}
@keyframes mj-b1{0%,22%{transform:scale(0)}25%{transform:scale(1.1)}27%,50%{transform:scale(1)}53%,100%{transform:scale(0)}}
.mj-b1{animation:mj-b1 6s ease-out infinite}
@keyframes mj-b2{0%,64%{transform:scale(0)}67%{transform:scale(1.1)}69%,90%{transform:scale(1)}93%,100%{transform:scale(0)}}
.mj-b2{animation:mj-b2 6s ease-out infinite}
`;

function BackHead() {
  return (
    <g>
      <circle cx="0" cy="-50" r="16" fill={FUR} {...inked} strokeWidth={2.2} />
      <circle cx="-18" cy="-60" r="10" fill={FUR} {...inked} strokeWidth={2.2} />
      <circle cx="18" cy="-60" r="10" fill={FUR} {...inked} strokeWidth={2.2} />
      <circle cx="-18" cy="-60" r="5.5" fill={PINK} />
      <circle cx="18" cy="-60" r="5.5" fill={PINK} />
      <path d="M-6 -60 q6 -4 12 0" fill="none" stroke={FUR_DK} strokeWidth={1.6} strokeLinecap="round" />
    </g>
  );
}

function ProfileHead() {
  return (
    <g>
      <circle cx="10" cy="-60" r="9" fill={FUR} {...inked} strokeWidth={2} />
      <circle cx="10" cy="-60" r="4.5" fill={PINK} />
      <path d="M-6 -50 Q-6 -66 10 -64 Q24 -62 34 -50 Q24 -40 8 -40 Q-6 -40 -6 -50Z" fill={FUR} {...inked} strokeWidth={2.2} />
      <circle cx="35" cy="-50" r="3" fill="#e58a7a" stroke={INK} strokeWidth={1.2} />
      <ellipse cx="18" cy="-52" rx="3" ry="2.6" fill={C.white} stroke={INK} strokeWidth={1.1} />
      <circle cx="19.5" cy="-51.5" r="1.3" fill={INK} />
      <path d="M13 -57 L23 -55" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
      <path d="M30 -47 L42 -45 M30 -49 L42 -51 M31 -45 L40 -40" stroke={INK} strokeWidth={.8} />
      <path d="M20 -44 Q24 -46 28 -44" fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
      <circle cx="14" cy="-46" r="2.2" fill="#e58a7a" opacity=".6" />
    </g>
  );
}

function Broom() {
  return (
    <g>
      <path d="M40 4 L132 -14 Q140 10 132 36 L40 22Z" fill={STRAW} {...inked} strokeWidth={2.2} />
      <path d="M44 9 L130 -4 M44 13 L134 8 M44 17 L134 20 M44 20 L130 30" stroke={STRAW_DK} strokeWidth={1.3} strokeLinecap="round" />
      <path d="M-112 8 Q-114 13 -112 18 L42 18 L42 8Z" fill="#d9a85a" {...inked} strokeWidth={2} />
      <path d="M-100 8 V18 M-60 8 V18 M-20 8 V18 M24 6 V20 M32 5 V21" stroke={C.pomegranate} strokeWidth={2.4} />
      <path d="M-90 13 H-70 M-46 13 H-30" stroke={STRAW_DK} strokeWidth={1} />
    </g>
  );
}

export default function MooshJaroo({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="موش تو سوراخ نمی‌رفت، جارو به دمش می‌بست" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#e7cfa4" />
      <g fill="none" stroke="#cdb185" strokeWidth={1.4}>
        {[30, 70, 110, 150].map((y, r) =>
          Array.from({ length: 11 }, (_, i) => {
            const x = i * 40 + (r % 2 ? 20 : 0);
            return <path key={`${r}-${i}`} d={`M${x} ${y - 6} L${x + 6} ${y} L${x} ${y + 6} L${x - 6} ${y}Z`} />;
          })
        )}
      </g>
      <rect x="-10" y="-10" width="420" height="14" fill={C.turquoise} stroke={INK} strokeWidth={2} />

      <path d="M46 160 V96 Q46 66 76 58 Q106 66 106 96 V160Z" fill="#c9a97a" {...inked} />
      <path d="M62 158 Q56 140 66 128 Q60 120 70 114 H82 Q92 120 86 128 Q96 140 90 158Z" fill={C.turquoise} {...inked} strokeWidth={2} />
      <path d="M64 140 H88" stroke={C.saffron} strokeWidth={2} strokeDasharray="3 3" />
      <path d="M46 160 H106" stroke={INK} strokeWidth={2.5} />

      <g transform="translate(318 84)">
        <g className="mj-frame o-top">
          <path d="M0 -40 L-22 -24 M0 -40 L22 -24" stroke={INK} strokeWidth={1.4} />
          <circle cx="0" cy="-40" r="2" fill={INK} />
          <rect x="-34" y="-24" width="68" height="52" fill={C.saffron} {...inked} />
          <rect x="-27" y="-17" width="54" height="38" fill="#f6e3b8" stroke={INK} strokeWidth={1.6} />
          <path d="M-18 14 L18 14 L18 -2 Z" fill="#f2cf4f" stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
          <circle cx="8" cy="6" r="2.4" fill="#d9a92a" /><circle cx="13" cy="10" r="1.6" fill="#d9a92a" /><circle cx="-4" cy="10" r="1.8" fill="#d9a92a" />
          <path d="M-8 -9 l3 -3 l3 3 M6 -11 l2 -2 l2 2" fill="none" stroke={C.pomegranate} strokeWidth={1.2} strokeLinecap="round" />
        </g>
      </g>

      <rect x="-10" y="198" width="420" height="54" fill={WOOD} stroke={INK} strokeWidth={2.5} />
      <rect x="-10" y="198" width="420" height="8" fill="#a4704c" stroke={INK} strokeWidth={2} />
      <path d="M-10 236 H410" stroke="#6e4630" strokeWidth={1.5} />
      <g transform="translate(200 251)">
        <g className="mj-hole o-bottom">
          <path d="M-16 0 V-14 Q-16 -30 0 -30 Q16 -30 16 -14 V0Z" fill="#1e1612" {...inked} />
          <path d="M-10 -4 V-14 Q-10 -24 0 -24" fill="none" stroke="#3a2b22" strokeWidth={2} />
        </g>
      </g>
      <rect x="182" y="180" width="36" height="13" rx="2" fill={C.cream} stroke={INK} strokeWidth={1.6} />
      <text x="200" y="190.5" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="8.5" fill={INK} direction="rtl">منزل</text>
      <circle cx="200" cy="178" r="1.4" fill={INK} />

      <rect x="-10" y="250" width="420" height="60" fill="#b07a4e" stroke={INK} strokeWidth={2.5} />
      <path d="M-10 270 H410 M-10 292 H410 M60 250 V270 M170 270 V292 M300 250 V270 M90 292 V310 M250 292 V310 M370 270 V292" stroke="#8d5f3c" strokeWidth={1.5} />
      <ellipse cx="200" cy="282" rx="48" ry="6" fill="#8d5f3c" opacity=".5" />

      {[[0, 186, 246, "-20px"], [-5.6, 214, 246, "18px"], [-5.2, 94, 280, "-24px"], [-4.8, 330, 272, "22px"], [-0.3, 200, 228, "6px"], [-5.0, 176, 270, "-14px"]].map(([d, x, y, dx], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <g className="mj-dust" style={{ animationDelay: `${d}s`, "--dx": dx } as React.CSSProperties}>
            <circle cx="0" cy="0" r="6" fill="#d8c3a0" stroke={INK} strokeWidth={1.4} />
            <circle cx="6" cy="-3" r="4.5" fill="#e6d4b4" stroke={INK} strokeWidth={1.2} />
          </g>
        </g>
      ))}

      <g transform="translate(200 274)">
        <g className="mj-go o-bottom">
          <g className="mj-jam">
            <Broom />
          </g>
          <ellipse cx="-14" cy="-2" rx="7" ry="4" fill={PINK} stroke={INK} strokeWidth={1.6} />
          <ellipse cx="14" cy="-2" rx="7" ry="4" fill={PINK} stroke={INK} strokeWidth={1.6} />
          <ellipse cx="0" cy="-26" rx="30" ry="26" fill={FUR} {...inked} />
          <path d="M-18 -36 Q0 -46 18 -36" fill="none" stroke={FUR_DK} strokeWidth={2} strokeLinecap="round" />
          <path d="M-22 -18 q4 4 8 2 M22 -18 q-4 4 -8 2" fill="none" stroke={FUR_DK} strokeWidth={1.6} strokeLinecap="round" />
          <g className="mj-head"><BackHead /></g>
          <g className="mj-prof" style={{ opacity: 0 }}><ProfileHead /></g>
          <g transform="translate(0 -6)">
            <g className="mj-tail o-top">
              <path d="M0 0 Q-8 8 2 14" fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" />
              <path d="M0 0 Q-8 8 2 14" fill="none" stroke={PINK} strokeWidth={2} strokeLinecap="round" />
            </g>
          </g>
          <g transform="translate(3 12)">
            <path d="M0 0 Q-14 -10 -16 0 Q-14 10 0 0Z M0 0 Q14 -10 16 0 Q14 10 0 0Z" fill={C.pomegranate} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
            <path d="M-2 2 L-8 14 M2 2 L8 14" stroke={C.pomegranate} strokeWidth={3} strokeLinecap="round" />
            <circle cx="0" cy="0" r="3.4" fill="#c33a50" stroke={INK} strokeWidth={1.4} />
          </g>
        </g>
      </g>

      <g className="mj-effort" style={{ opacity: 0 }}>
        <path d="M150 238 h-14 M152 248 h-18 M150 258 h-14 M250 238 h14 M248 248 h18 M250 258 h14" stroke={INK} strokeWidth={2} strokeLinecap="round" />
      </g>
      <g className="mj-sweatwin" style={{ opacity: 0 }}>
        <g transform="translate(166 222)"><path className="mj-sweat" d="M0 -5 Q4 1 0 4 Q-4 1 0 -5Z" fill="#9fd8ef" stroke={INK} strokeWidth={1.2} /></g>
        <g transform="translate(236 220)"><path className="mj-sweat" style={{ animationDelay: "-.45s" }} d="M0 -5 Q4 1 0 4 Q-4 1 0 -5Z" fill="#9fd8ef" stroke={INK} strokeWidth={1.2} /></g>
      </g>

      <g transform="translate(200 236)">
        <g className="mj-burst"><Star8 r={30} fill={C.white} /></g>
      </g>
      <g className="mj-dizzywin" style={{ opacity: 0 }}>
        <g transform="translate(200 198)">
          <g className="mj-orbit" style={{ transformOrigin: "0px 0px", transformBox: "view-box" }}>
            <Star8 x={-22} y={0} r={5} fill={C.saffron} />
            <Star8 x={22} y={0} r={5} fill={C.firouzeh} />
            <Star8 x={0} y={-8} r={4} fill={C.pomegranate} />
          </g>
        </g>
      </g>
      <g transform="translate(250 200)">
        <text className="mj-bang" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="22" fill={C.pomegranate} stroke={INK} strokeWidth={1} style={{ transform: "scale(0)" }}>!؟</text>
      </g>

      {big && (
        <g>
          <Bubble x={222} y={196} w={92} text="یه کم دیگه..." className="mj-b1 o-bottom" style={{ transform: "scale(0)" }} />
          <Bubble x={236} y={210} w={56} text="هوف!" className="mj-b2 o-bottom" style={{ transform: "scale(0)" }} />
        </g>
      )}
    </Scene>
  );
}
