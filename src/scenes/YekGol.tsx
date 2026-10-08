import { Scene, Cloud, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

function jitter(name: string, from: number, to: number, amp: number, step = 1.5) {
  const fr: string[] = [`0%,${from}%{transform:translate(0px,0px)}`];
  let i = 0;
  for (let p = from + step; p < to; p += step, i++) fr.push(`${p.toFixed(1)}%{transform:translate(${i % 2 ? amp : -amp}px,${i % 3 === 0 ? 0.5 : 0}px)}`);
  fr.push(`${to}%,100%{transform:translate(0px,0px)}`);
  return `@keyframes ${name}{${fr.join("")}}`;
}

const SNOW = "#f6fafc";
const ICE = "#d6eef7";
const PETAL = "#f08fa8";
const CROW = "#3d3a46";

const CSS = `
${jitter("yg-shiver", 70, 99, 1.4)}
.yg-shiver{animation:yg-shiver 7s linear infinite}
@keyframes yg-snow{0%{transform:translate(0px,-30px);opacity:0}10%{opacity:1}50%{transform:translate(-14px,100px)}90%{opacity:1}100%{transform:translate(6px,240px);opacity:0}}
.yg-snow{animation:yg-snow 6s linear infinite}
@keyframes yg-cloud{0%,100%{transform:translateX(-8px)}50%{transform:translateX(10px)}}
.yg-cloud{animation:yg-cloud 9s ease-in-out infinite}
@keyframes yg-sway{0%{transform:rotate(0deg)}6%{transform:rotate(-8deg)}12%{transform:rotate(8deg)}18%{transform:rotate(-8deg)}24%{transform:rotate(8deg)}30%{transform:rotate(0deg)}36%{transform:rotate(10deg)}50%{transform:rotate(-12deg)}56%{transform:rotate(-12deg)}62%,100%{transform:rotate(0deg)}}
.yg-sway{animation:yg-sway 7s ease-in-out infinite}
@keyframes yg-wave{0%,100%{transform:rotate(-25deg)}50%{transform:rotate(25deg)}}
.yg-wave{animation:yg-wave .5s ease-in-out infinite}
@keyframes yg-pump{0%,100%{transform:rotate(-8deg) translateY(0px)}50%{transform:rotate(6deg) translateY(-4px)}}
.yg-pump{animation:yg-pump .6s ease-in-out infinite}
@keyframes yg-cap{0%,68%{transform:scale(0)}76%{transform:scale(.6)}86%{transform:scale(.85)}94%,100%{transform:scale(1)}}
.yg-cap{animation:yg-cap 7s ease-out infinite}
@keyframes yg-shout{0%,3%{transform:scale(0) rotate(0deg)}6%{transform:scale(1.25) rotate(-6deg)}9%,27%{transform:scale(1) rotate(4deg)}31%,100%{transform:scale(0) rotate(0deg)}}
.yg-shout{animation:yg-shout 7s ease-out infinite}
@keyframes yg-bird{0%,30%{transform:translateX(260px)}56%,100%{transform:translateX(-270px)}}
.yg-bird{animation:yg-bird 7s linear infinite}
@keyframes yg-flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}
.yg-flap{animation:yg-flap .28s ease-in-out infinite}
@keyframes yg-wingL{0%,58%{transform:rotate(0deg)}62%,74%{transform:rotate(55deg)}78%,100%{transform:rotate(0deg)}}
@keyframes yg-wingR{0%,58%{transform:rotate(0deg)}62%,74%{transform:rotate(-55deg)}78%,100%{transform:rotate(0deg)}}
.yg-wingL{animation:yg-wingL 7s ease-in-out infinite}
.yg-wingR{animation:yg-wingR 7s ease-in-out infinite}
@keyframes yg-crowhead{0%,58%{transform:rotate(0deg) translateY(0px)}62%,74%{transform:rotate(-14deg) translateY(3px)}78%,100%{transform:rotate(0deg) translateY(0px)}}
.yg-crowhead{animation:yg-crowhead 7s ease-in-out infinite}
@keyframes yg-dots{0%,62%{opacity:0}64%,76%{opacity:1}78%,100%{opacity:0}}
.yg-dots{animation:yg-dots 7s linear infinite}
@keyframes yg-b1{0%,3%{transform:scale(0)}6%{transform:scale(1.1)}8%,28%{transform:scale(1)}31%,100%{transform:scale(0)}}
.yg-b1{animation:yg-b1 7s ease-out infinite}
@keyframes yg-b2{0%,36%{transform:scale(0)}39%{transform:scale(1.1)}41%,56%{transform:scale(1)}59%,100%{transform:scale(0)}}
.yg-b2{animation:yg-b2 7s ease-out infinite}
@keyframes yg-b3{0%,61%{transform:scale(0)}64%{transform:scale(1.1)}66%,76%{transform:scale(1)}79%,100%{transform:scale(0)}}
.yg-b3{animation:yg-b3 7s ease-out infinite}
@keyframes yg-tw{0%,100%{opacity:.25}50%{opacity:1}}
.yg-tw{animation:yg-tw 1.8s ease-in-out infinite}
`;

const FLAKES: [number, number, number, number][] = [
  [40, 30, 3, 0], [90, 70, 2.4, -1.1], [140, 20, 3.2, -2.3], [180, 90, 2.2, -3.6], [230, 40, 3, -4.4],
  [270, 100, 2.6, -0.6], [310, 24, 3.4, -1.8], [350, 80, 2.4, -2.9], [380, 40, 3, -5.2], [60, 120, 2.2, -3.1],
  [120, 140, 2.8, -4.9], [210, 130, 2.4, -1.4], [260, 160, 3, -5.6], [330, 150, 2.4, -2.1], [160, 60, 2, -0.3],
  [20, 90, 2.6, -4.1], [290, 60, 2.2, -3.3], [370, 120, 2.8, -0.9],
];

function Flower() {
  const petals = [0, 60, 120, 180, 240, 300].map((a) => {
    const r = (a * Math.PI) / 180;
    return [Math.cos(r) * 12, Math.sin(r) * 12];
  });
  return (
    <g>
      <path d="M0 52 Q-3 36 0 22" fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" />
      <path d="M0 52 Q-3 36 0 22" fill="none" stroke={C.olive} strokeWidth={3} strokeLinecap="round" />
      <g transform="translate(-1 38)">
        <g className="yg-wave" style={{ transformOrigin: "0px 0px", transformBox: "view-box" }}>
          <path d="M0 0 Q-10 -12 -20 -8 Q-12 2 0 0Z" fill={C.olive} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
        </g>
      </g>
      <g transform="translate(0 32)">
        <g className="yg-pump" style={{ transformOrigin: "0px 0px", transformBox: "view-box" }}>
          <path d="M0 0 Q8 -12 16 -8 Q10 2 0 0Z" fill={C.olive} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
          <path d="M14 -7 L30 -52" stroke={INK} strokeWidth={3.5} strokeLinecap="round" />
          <path d="M14 -7 L30 -52" stroke="#a0703f" strokeWidth={1.5} strokeLinecap="round" />
          <rect x="13" y="-68" width="34" height="16" rx="2" fill={C.white} stroke={INK} strokeWidth={1.8} />
          <text x="30" y="-56" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="9.5" fill={C.pomegranate} direction="rtl">بهار!</text>
        </g>
      </g>
      {petals.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="9" fill={PETAL} stroke={INK} strokeWidth={1.8} />
      ))}
      <circle cx="0" cy="0" r="11" fill={C.saffron} stroke={INK} strokeWidth={2} />
      <path d="M-6 -2 Q-4 -5 -2 -2 M2 -2 Q4 -5 6 -2" fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
      <path d="M-5 2 Q0 9 5 2Z" fill={C.pomegranate} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
      <circle cx="-7" cy="3" r="2" fill="#e58a7a" opacity=".7" />
      <circle cx="7" cy="3" r="2" fill="#e58a7a" opacity=".7" />
      <g transform="translate(0 -14)">
        <g className="yg-cap o-bottom">
          <path d="M-15 4 Q-14 -6 -4 -6 Q0 -11 6 -6 Q15 -5 15 4 Q0 0 -15 4Z" fill={SNOW} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
        </g>
      </g>
    </g>
  );
}

export default function YekGol({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="با یه گل بهار نمی‌شه" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#cfe3ef" />
      <rect x="-10" y="-10" width="420" height="70" fill="#b9c7d2" opacity=".55" />

      <path d="M-10 210 L60 90 L100 140 L170 50 L240 150 L290 80 L360 160 L410 110 L410 240 L-10 240Z" fill="#9fb0c4" {...inked} />
      <path d="M43 119 L60 90 L80 115 L70 110 L60 122 L52 112Z M150 78 L170 50 L196 86 L184 80 L172 92 L160 82Z M272 106 L290 80 L310 108 L298 102 L289 112 L281 104Z M395 128 L410 110 L410 136 L404 132Z" fill={SNOW} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
      <path d="M120 130 l12 -16 M210 120 l10 -14 M330 140 l10 -14" stroke="#7f91a8" strokeWidth={2} strokeLinecap="round" />

      <Cloud x={30} y={48} s={1.2} fill="#c3ccd4" className="yg-cloud" />
      <Cloud x={160} y={34} s={1} fill="#b5c0ca" className="yg-cloud" style={{ animationDelay: "-3s" }} />
      <Cloud x={280} y={56} s={1.25} fill="#c3ccd4" className="yg-cloud" style={{ animationDelay: "-5s" }} />

      <path d="M-10 236 Q100 216 200 230 Q300 216 410 232 L410 310 L-10 310Z" fill={SNOW} stroke={INK} strokeWidth={2.5} />
      <path d="M30 262 q10 -5 20 0 M120 286 q10 -5 20 0 M250 290 q10 -5 20 0 M360 266 q10 -5 20 0" fill="none" stroke="#a9c0d0" strokeWidth={1.5} strokeLinecap="round" />

      <ellipse cx="292" cy="274" rx="62" ry="11" fill={ICE} {...inked} strokeWidth={2} />
      <path d="M252 272 l14 -4 M300 278 l20 -6 M276 270 l8 -2" stroke={C.white} strokeWidth={2.2} strokeLinecap="round" />
      <path d="M312 270 l6 3 l-3 4" fill="none" stroke="#9ab7c6" strokeWidth={1.2} />

      <path d="M64 246 L68 150 Q72 132 76 150 L80 246Z" fill="#6b5a4e" {...inked} />
      <path d="M72 170 L40 132 M74 160 L132 150 M72 186 L44 176" stroke={INK} strokeWidth={5} strokeLinecap="round" />
      <path d="M72 170 L40 132 M74 160 L132 150 M72 186 L44 176" stroke="#6b5a4e" strokeWidth={2.4} strokeLinecap="round" />
      <path d="M78 157 Q100 148 132 147 Q132 151 128 151 Q100 153 78 160Z" fill={SNOW} stroke={INK} strokeWidth={1.4} />
      <path d="M44 133 Q52 136 58 146 Q50 142 42 136Z" fill={SNOW} stroke={INK} strokeWidth={1.2} />
      <g fill={ICE} stroke={INK} strokeWidth={1.3} strokeLinejoin="round">
        <path d="M84 158 L87 172 L90 157Z" /><path d="M94 156 L96 166 L99 155Z" /><path d="M104 154 L107 174 L110 154Z" /><path d="M120 152 L122 162 L125 151Z" />
        <path d="M50 176 L52 188 L55 177Z" />
      </g>

      <g transform="translate(114 148)">
        <g transform="translate(-8 -14)">
          <g className="yg-wingL" style={{ transformOrigin: "0px 0px", transformBox: "view-box" }}>
            <path d="M0 0 Q-12 4 -14 14 Q-6 12 0 6Z" fill={CROW} stroke={INK} strokeWidth={1.5} strokeLinejoin="round" />
          </g>
        </g>
        <g transform="translate(8 -14)">
          <g className="yg-wingR" style={{ transformOrigin: "0px 0px", transformBox: "view-box" }}>
            <path d="M0 0 Q12 4 14 14 Q6 12 0 6Z" fill={CROW} stroke={INK} strokeWidth={1.5} strokeLinejoin="round" />
          </g>
        </g>
        <path d="M-4 -2 L-8 6 M4 -2 L6 6" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        <ellipse cx="0" cy="-10" rx="10" ry="11" fill={CROW} {...inked} strokeWidth={2} />
        <path d="M-4 0 L-10 10 L-1 4Z" fill={CROW} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
        <g transform="translate(1 -24)">
          <g className="yg-crowhead">
            <circle cx="0" cy="0" r="8" fill={CROW} {...inked} strokeWidth={2} />
            <path d="M6 -1 L15 2 L6 4Z" fill="#c9b27a" stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
            <circle cx="2.5" cy="-1.5" r="2.6" fill={C.white} stroke={INK} strokeWidth={1} />
            <circle cx="3.2" cy="-1.2" r="1.1" fill={INK} />
            <path d="M-0.3 -2.6 H5.4" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
          </g>
        </g>
        <g className="yg-dots" style={{ opacity: 0 }} fill={INK}>
          <circle cx="12" cy="-40" r="1.6" /><circle cx="18" cy="-40" r="1.6" /><circle cx="24" cy="-40" r="1.6" />
        </g>
      </g>

      <g transform="translate(340 256)">
        <path d="M-12 -46 L-30 -60 M12 -46 L30 -62 M-27 -57 l-5 -1 M28 -59 l4 -4" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
        <circle cx="0" cy="-18" r="20" fill={SNOW} {...inked} />
        <circle cx="0" cy="-46" r="14" fill={SNOW} {...inked} />
        <circle cx="0" cy="-68" r="10" fill={SNOW} {...inked} />
        <path d="M-11 -59 Q0 -54 11 -59 L11 -54 Q0 -50 -11 -54Z M6 -55 L10 -40 L4 -41Z" fill={C.pomegranate} stroke={INK} strokeWidth={1.5} strokeLinejoin="round" />
        <g fill={INK}>
          <circle cx="-4" cy="-70" r="1.4" /><circle cx="4" cy="-70" r="1.4" />
          <circle cx="0" cy="-44" r="1.4" /><circle cx="0" cy="-36" r="1.4" /><circle cx="0" cy="-22" r="1.6" />
        </g>
        <path d="M-1 -67 L-11 -64 L-1 -64.5Z" fill="#e8782f" stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
        <path d="M-4 -63 H3" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
        <path d="M-8 -77 H8 L6 -88 H-6Z" fill="#3a3340" stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
      </g>

      <g transform="translate(200 120)">
        <g className="yg-bird">
          <path d="M-8 0 Q0 -4 10 0 L16 -3 L14 2 L16 6 L10 3 Q0 6 -8 0Z" fill={C.lapis} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
          <circle cx="-5" cy="-1" r=".9" fill={C.white} />
          <path d="M-8 0 l-3 1 l3 1Z" fill={C.saffron} stroke={INK} strokeWidth={.8} />
          <path d="M-4 1 Q-6 6 -2 9 L2 2Z" fill={C.pomegranate} stroke={INK} strokeWidth={1} />
          <g className="yg-flap o-bottom">
            <path d="M0 -1 Q4 -14 12 -16 Q8 -6 4 0Z" fill={C.lapis} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
          </g>
        </g>
      </g>

      {FLAKES.map(([x, y, r, d], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle className="yg-snow" style={{ animationDelay: `${d}s` }} cx="0" cy="0" r={r} fill={C.white} stroke="#8fa6b8" strokeWidth={0.8} />
        </g>
      ))}

      <ellipse cx="200" cy="254" rx="18" ry="4" fill="#a9c0d0" opacity=".6" />
      <g transform="translate(200 202)">
        <g className="yg-shiver">
          <g className="yg-sway o-bottom"><Flower /></g>
        </g>
      </g>
      <Star8 x={182} y={176} r={3} fill={C.saffron} className="yg-tw" />
      <Star8 x={224} y={232} r={2.5} fill={C.saffron} className="yg-tw" style={{ animationDelay: "-.9s" }} />

      <g transform="translate(150 182)">
        <text className="yg-shout" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="15" fill={C.pomegranate} stroke={INK} strokeWidth={.8} direction="rtl" style={{ transform: "scale(0)" }}>بهااار!</text>
      </g>

      {big && (
        <g>
          <Bubble x={190} y={176} w={88} text="بهار! بهااار!" flip className="yg-b1 o-bottom" style={{ transform: "scale(0)" }} />
          <Bubble x={190} y={176} w={110} text="حداقل یه پرستو؟" flip className="yg-b2 o-bottom" />
          <Bubble x={128} y={118} w={40} text="..." className="yg-b3 o-bottom" style={{ transform: "scale(0)" }} />
        </g>
      )}
    </Scene>
  );
}
