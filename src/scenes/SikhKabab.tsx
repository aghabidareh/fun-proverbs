import { Scene, Face, Turban, Star8, C, INK, SKIN, inked } from "./parts";
import type { SceneProps } from "./types";

const ARM = [-105, -120, -93, -112, -104, -124, -92, -108, -100, -120, -93, -114, -104, -126, -92, -110, -102, -118, -93, -115, -105, -124, -92, -108, -100, -121, -93, -112, -104, -125, -92, -106];
const SWAY = [0, -10, 6, -4, 12, -8, 4, -12, 8, -6, 10, -4, 6, -12, 8, -2];
const STEP = 100 / ARM.length;
const RAW = "#e89a9a";

function armKeys() {
  const fr = ARM.map((a, i) => `${+(i * STEP).toFixed(3)}%{transform:rotate(${a}deg)}`);
  fr.push(`100%{transform:rotate(${ARM[0]}deg)}`);
  return `@keyframes sk-arm{${fr.join("")}}`;
}

function swayKeys() {
  const st = 100 / SWAY.length;
  const fr = SWAY.map((x, i) => `${+(i * st).toFixed(3)}%{transform:translateX(${x}px) rotate(${x * 0.3}deg)}`);
  fr.push("100%{transform:translateX(0px) rotate(0deg)}");
  return `@keyframes sk-sway{${fr.join("")}}`;
}

function lungeKeys() {
  const fr = ["0%{transform:scaleY(1)}"];
  ARM.forEach((a, i) => {
    if (a < -94) return;
    const t = i * STEP;
    fr.push(`${+(t - 0.5).toFixed(3)}%{transform:scaleY(1)}`, `${+(t + 1).toFixed(3)}%{transform:scaleY(2)}`, `${+(t + 3).toFixed(3)}%{transform:scaleY(1)}`);
  });
  fr.push("100%{transform:scaleY(1)}");
  return `@keyframes sk-lunge{${fr.join("")}}`;
}

const CSS = `
${armKeys()}
.sk-arm{animation:sk-arm 8s ease-in-out infinite}
${swayKeys()}
.sk-sway{animation:sk-sway 8s ease-in-out infinite}
${lungeKeys()}
.sk-lunge{animation:sk-lunge 8s ease-out infinite}
@keyframes sk-flick{0%,100%{transform:scaleY(1) skewX(0deg)}50%{transform:scaleY(1.25) skewX(4deg)}}
.sk-flick{animation:sk-flick .45s ease-in-out infinite}
@keyframes sk-spin{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.6)}}
.sk-spin{animation:sk-spin .3s linear infinite}
@keyframes sk-hg{0%,88%{transform:rotate(0deg)}100%{transform:rotate(180deg)}}
.sk-hg{animation:sk-hg 2.6667s ease-in-out infinite}
@keyframes sk-sandT{0%{transform:scaleY(1)}88%,100%{transform:scaleY(0)}}
.sk-sandT{animation:sk-sandT 2.6667s linear infinite}
@keyframes sk-sandB{0%{transform:scaleY(0)}88%,100%{transform:scaleY(1)}}
.sk-sandB{animation:sk-sandB 2.6667s linear infinite}
@keyframes sk-stream{0%,86%{opacity:1}88%,100%{opacity:0}}
.sk-stream{animation:sk-stream 2.6667s linear infinite}
@keyframes sk-h1{0%,32%{opacity:1}33.3%,100%{opacity:0}}
@keyframes sk-h2{0%,32%{opacity:0}33.3%,65%{opacity:1}66.6%,100%{opacity:0}}
@keyframes sk-h3{0%,65%{opacity:0}66.6%,99%{opacity:1}100%{opacity:0}}
.sk-h1{animation:sk-h1 8s linear infinite}
.sk-h2{animation:sk-h2 8s linear infinite}
.sk-h3{animation:sk-h3 8s linear infinite}
@keyframes sk-red{0%{opacity:0}100%{opacity:.6}}
.sk-red{animation:sk-red 8s linear infinite}
@keyframes sk-w2{0%,32%{opacity:0}34%,100%{opacity:1}}
@keyframes sk-w3{0%,65%{opacity:0}67%,99%{opacity:1}100%{opacity:0}}
.sk-w2{animation:sk-w2 8s linear infinite}
.sk-w3{animation:sk-w3 8s linear infinite}
@keyframes sk-dropL{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(-22px,-12px);opacity:0}}
@keyframes sk-dropR{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(20px,-14px);opacity:0}}
.sk-dropL{animation:sk-dropL .7s ease-out infinite}
.sk-dropR{animation:sk-dropR .7s ease-out infinite}
@keyframes sk-hot{0%{transform:translateY(0) scale(.5);opacity:0}20%{opacity:.9}100%{transform:translateY(-26px) scale(1.4);opacity:0}}
.sk-hot{animation:sk-hot 1.2s ease-out infinite}
@keyframes sk-smoke{0%{transform:translate(0,0) scale(.5);opacity:0}15%{opacity:.7}100%{transform:translate(-10px,-60px) scale(1.6);opacity:0}}
.sk-smoke{animation:sk-smoke 2.4s ease-out infinite}
@keyframes sk-glow{0%,100%{opacity:.5}50%{opacity:1}}
.sk-glow{animation:sk-glow .9s ease-in-out infinite}
@keyframes sk-cool{0%,100%{transform:scale(.6) rotate(0deg)}50%{transform:scale(1.1) rotate(45deg)}}
.sk-cool{animation:sk-cool 1.4s ease-in-out infinite}
@keyframes sk-lamp{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}
.sk-lamp{animation:sk-lamp 3s ease-in-out infinite}
@keyframes sk-pop3{0%,66%{transform:scale(0)}69%{transform:scale(1.25)}72%,100%{transform:scale(1)}}
.sk-pop3{animation:sk-pop3 8s ease-out infinite}
`;

function Skewer() {
  return (
    <g>
      <path d="M16 -30 V114" stroke={INK} strokeWidth={4} strokeLinecap="round" />
      <path d="M16 -30 V114" stroke="#c9ccd1" strokeWidth={1.8} strokeLinecap="round" />
      <rect x="11" y="-36" width="10" height="8" rx="2" fill="#7a4a2e" {...inked} strokeWidth={1.6} />
      <g className="sk-spin">
        {[34, 52, 70, 88, 104].map((y, i) => (
          i % 2 ? (
            <ellipse key={y} cx="16" cy={y} rx="7" ry="5" fill={C.cream} {...inked} strokeWidth={1.6} />
          ) : (
            <g key={y}>
              <rect x="7" y={y - 8} width="18" height="16" rx="6" fill={RAW} {...inked} strokeWidth={1.8} />
              <path d={`M11 ${y - 3} q3 2 6 0 M13 ${y + 3} q3 2 6 0`} fill="none" stroke="#c46a72" strokeWidth={1.2} strokeLinecap="round" />
            </g>
          )
        ))}
      </g>
      <g transform="translate(16 120)"><Star8 r={5} fill="#bfe6f5" className="sk-cool" /></g>
    </g>
  );
}

function Cook() {
  return (
    <g>
      <path d="M-14 0 Q-14 -6 -6 -6 L-4 0Z M4 0 L6 -6 Q14 -6 14 0Z" fill={C.pomegranate} {...inked} strokeWidth={2} />
      <path d="M-22 -4 Q-20 -40 -12 -58 L12 -58 Q20 -40 22 -4 Q0 2 -22 -4Z" fill={C.lapis} {...inked} />
      <g fill={C.cream} opacity=".7">
        <circle cx="-10" cy="-20" r="1.8" /><circle cx="2" cy="-30" r="1.8" /><circle cx="10" cy="-14" r="1.8" /><circle cx="-4" cy="-10" r="1.8" />
      </g>
      <path d="M-15 -42 Q0 -38 15 -42 L15 -36 Q0 -32 -15 -36Z" fill={C.saffron} {...inked} strokeWidth={2} />
      <g style={{ transformOrigin: "-12px -54px", transformBox: "view-box" }} transform="rotate(-70)">
        <path d="M-12 -54 Q-18 -40 -16 -28" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
        <path d="M-12 -54 Q-18 -40 -16 -28" fill="none" stroke={C.lapis} strokeWidth={5.5} strokeLinecap="round" />
        <circle cx="-16" cy="-26" r="4.5" fill={SKIN} {...inked} strokeWidth={2} />
      </g>
      <g className="sk-arm" style={{ transformOrigin: "12px -54px", transformBox: "view-box" }} transform="rotate(-105)">
        <Skewer />
        <path d="M12 -54 Q18 -40 16 -28" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
        <path d="M12 -54 Q18 -40 16 -28" fill="none" stroke={C.lapis} strokeWidth={5.5} strokeLinecap="round" />
        <circle cx="16" cy="-26" r="4.5" fill={SKIN} {...inked} strokeWidth={2} />
      </g>
      <g transform="translate(0 -74)">
        <Face mood="scared" />
        <ellipse className="sk-red" style={{ opacity: .45 }} cx="0" cy="3" rx="11" ry="9" fill={C.pomegranate} />
        <Turban color={C.saffron} />
        <g transform="translate(-14 -4)">
          <path className="sk-dropL" d="M0 -4 Q3 1 0 3 Q-3 1 0 -4Z" fill="#9fd8ef" stroke={INK} strokeWidth={1} />
        </g>
        <g transform="translate(14 -6)">
          <path className="sk-dropR" style={{ animationDelay: "-.35s" }} d="M0 -4 Q3 1 0 3 Q-3 1 0 -4Z" fill="#9fd8ef" stroke={INK} strokeWidth={1} />
        </g>
        <g className="sk-w2" style={{ opacity: 0 }}>
          <g transform="translate(-12 4)"><path className="sk-dropL" style={{ animationDelay: "-.2s" }} d="M0 -4 Q3 1 0 3 Q-3 1 0 -4Z" fill="#9fd8ef" stroke={INK} strokeWidth={1} /></g>
          <g transform="translate(12 2)"><path className="sk-dropR" style={{ animationDelay: "-.55s" }} d="M0 -4 Q3 1 0 3 Q-3 1 0 -4Z" fill="#9fd8ef" stroke={INK} strokeWidth={1} /></g>
        </g>
        <g className="sk-w3">
          <g transform="translate(-10 -24)"><circle className="sk-hot" r="4" fill={C.white} stroke={INK} strokeWidth={1.2} /></g>
          <g transform="translate(8 -26)"><circle className="sk-hot" style={{ animationDelay: "-.6s" }} r="3.5" fill={C.white} stroke={INK} strokeWidth={1.2} /></g>
        </g>
      </g>
    </g>
  );
}

export default function SikhKabab({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="نه سیخ بسوزه نه کباب" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#f1b98a" />
      <circle cx="96" cy="120" r="26" fill="#f6d27a" {...inked} strokeWidth={2} />
      <path d="M-10 190 V150 H40 V130 Q60 104 80 130 V150 H150 Q170 110 200 108 Q230 110 250 150 H300 V124 Q312 112 324 124 V150 H410 V190Z" fill="#d98f62" {...inked} strokeWidth={2} />
      <path d="M200 108 V96" stroke={INK} strokeWidth={2} />
      <circle cx="200" cy="94" r="3" fill={C.saffron} stroke={INK} strokeWidth={1.4} />
      <rect x="-10" y="186" width="420" height="100" fill={C.cream} {...inked} />
      <rect x="-10" y="186" width="420" height="10" fill={C.turquoise} stroke={INK} strokeWidth={2} />
      {Array.from({ length: 11 }, (_, i) => (
        <Star8 key={i} x={10 + i * 40} y={191} r={3.5} fill={C.saffron} />
      ))}
      <rect x="-10" y="270" width="420" height="40" fill="#b07a4e" stroke={INK} strokeWidth={2.5} />
      <path d="M-10 280 H410" stroke={INK} strokeWidth={1} strokeDasharray="2 6" opacity=".5" />

      <path d="M250 -10 V24" stroke={INK} strokeWidth={1.6} />
      <g className="sk-lamp o-top">
        <path d="M250 24 L242 30 L242 46 L250 52 L258 46 L258 30Z" fill={C.saffron} {...inked} strokeWidth={2} />
        <path d="M246 34 h8 M246 42 h8" stroke={INK} strokeWidth={1.2} />
      </g>

      <g transform="translate(338 72)">
        <g className="sk-hg">
          <path d="M-12 -24 H12 M-12 24 H12" stroke={INK} strokeWidth={4} strokeLinecap="round" />
          <path d="M-9 -22 Q-9 -6 0 0 Q9 -6 9 -22Z M-9 22 Q-9 6 0 0 Q9 6 9 22Z" fill="#e8f4f8" {...inked} strokeWidth={2} />
          <g transform="translate(0 -3)"><path className="sk-sandT o-bottom" d="M-6 -12 Q-4 -4 0 0 Q4 -4 6 -12Z" fill={C.saffron} /></g>
          <path className="sk-sandB o-bottom" d="M-7 20 Q0 10 7 20Z" fill={C.saffron} />
          <path className="sk-stream" d="M0 0 V18" stroke={C.saffron} strokeWidth={1.2} />
        </g>
      </g>
      <g fontFamily="Vazirmatn" fontWeight={900} fontSize="11" fill={INK} textAnchor="middle" direction="rtl">
        <text className="sk-h1" style={{ opacity: 0 }} x="338" y="114">۱ ساعت</text>
        <text className="sk-h2" style={{ opacity: 0 }} x="338" y="114">۲ ساعت</text>
        <text className="sk-h3" x="338" y="114">۳ ساعت</text>
      </g>

      {[0, -.8, -1.6].map((d, i) => (
        <g key={i} transform={`translate(${200 + i * 40} 214)`}>
          <circle className="sk-smoke" style={{ animationDelay: `${d}s` }} r="6" fill="#9a8f86" stroke={INK} strokeWidth={1.3} />
        </g>
      ))}

      {[166, 190, 246, 282, 310].map((x, i) => (
        <path key={x} className="sk-flick o-bottom" style={{ animationDelay: `${-i * .11}s` }} d={`M${x - 8} 236 Q${x - 9} 222 ${x} 212 Q${x + 9} 222 ${x + 8} 236Z`} fill={i % 2 ? C.saffron : C.terracotta} {...inked} strokeWidth={1.6} />
      ))}
      <g className="sk-lunge o-bottom">
        <path d="M206 236 Q202 216 214 196 Q218 210 224 204 Q232 220 230 236Z" fill={C.terracotta} {...inked} strokeWidth={1.8} />
        <path d="M212 236 Q210 222 216 212 Q220 222 224 236Z" fill={C.saffron} />
      </g>
      <g className="sk-lunge o-bottom" style={{ animationDelay: "-.12s" }}>
        <path d="M256 236 Q254 220 262 204 Q268 216 272 210 Q276 224 276 236Z" fill={C.saffron} {...inked} strokeWidth={1.8} />
      </g>
      <path d="M150 238 Q160 228 172 236 Q184 226 196 236 Q210 226 222 236 Q236 226 248 236 Q262 226 274 236 Q288 226 300 236 Q314 226 330 238Z" fill="#3a2a24" {...inked} strokeWidth={2} />
      <g className="sk-glow" fill={C.saffron}>
        <circle cx="172" cy="235" r="2" /><circle cx="222" cy="234" r="2" /><circle cx="270" cy="235" r="2" /><circle cx="312" cy="234" r="2" />
      </g>
      <rect x="148" y="236" width="184" height="22" fill="#5a5a60" {...inked} />
      <path d="M156 247 H324" stroke={INK} strokeWidth={1.2} strokeDasharray="4 4" />
      <path d="M160 258 L156 286 M320 258 L324 286 M240 258 V286" stroke={INK} strokeWidth={4} strokeLinecap="round" />

      <rect x="60" y="274" width="64" height="12" fill="#9a5a3e" {...inked} strokeWidth={2} />
      <g transform="translate(92 274) rotate(6) scale(1.05)">
        <g className="sk-sway o-bottom">
          <Cook />
        </g>
      </g>

      {big && (
        <g fontFamily="Vazirmatn" fontWeight={800} fontSize="11" fill={C.cream} textAnchor="middle" direction="rtl">
          <path d="M70 18 V30 M130 18 V30" stroke={INK} strokeWidth={1.6} />
          <rect x="44" y="30" width="112" height="58" rx="5" fill="#5a3a2a" {...inked} />
          <text x="100" y="47">کباب: خام</text>
          <text x="100" y="63">سیخ: سرد</text>
          <g transform="translate(100 79)"><text className="sk-pop3" x="0" y="0" fill={C.saffron}>آشپز: پخته</text></g>
        </g>
      )}
    </Scene>
  );
}
