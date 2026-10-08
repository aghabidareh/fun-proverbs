import { Scene, Person, Bubble, C, INK, SKIN, inked } from "./parts";
import type { SceneProps } from "./types";

const SILVER = "#cdd5da";
const GOLD = "#e9b949";

const css = `
.al-cloche{animation:al-cloche 8s ease-in-out infinite}
@keyframes al-cloche{0%,30%{transform:translate(0,0) rotate(0)}34%{transform:translate(0,-6px) rotate(3deg)}40%,80%{transform:translate(-4px,-30px) rotate(-14deg)}88%,100%{transform:translate(0,0) rotate(0)}}
.al-fly{animation:al-fly 8s ease-in-out infinite}
@keyframes al-fly{0%,38%{transform:translate(0,0)}46%{transform:translate(-30px,-44px)}54%{transform:translate(-90px,-24px)}62%{transform:translate(-150px,-56px)}70%{transform:translate(-72px,-74px)}78%{transform:translate(-14px,-34px)}84%,100%{transform:translate(0,0)}}
.al-wing{animation:al-wing .12s linear infinite alternate}
@keyframes al-wing{from{transform:scaleY(1)}to{transform:scaleY(.25)}}
.al-tada{animation:al-tada 8s ease-out infinite}
@keyframes al-tada{0%,34%{opacity:0;transform:scale(.2)}40%{opacity:1;transform:scale(1.2)}50%{opacity:0;transform:scale(1.5)}100%{opacity:0}}
.al-plate{animation:al-plate 1.4s ease-in-out infinite}
@keyframes al-plate{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-4px) rotate(5deg)}}
.al-tongue{transform-origin:50% 0%;animation:al-tongue 1.4s ease-in-out infinite}
@keyframes al-tongue{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1.1)}}
.al-growl{animation:al-growl 8s infinite}
@keyframes al-growl{0%,8%,30%,52%,74%,100%{opacity:0;transform:translateX(0)}10%,14%,18%,54%,58%,62%{opacity:1;transform:translateX(-2px)}12%,16%,20%,56%,60%,64%{opacity:1;transform:translateX(2px)}}
.al-belly{animation:al-belly 8s infinite}
@keyframes al-belly{0%,9%,22%,53%,66%,100%{transform:translate(0,0)}11%,15%,19%,55%,59%,63%{transform:translate(-1.5px,0)}13%,17%,21%,57%,61%,65%{transform:translate(1.5px,0)}}
.al-tw{animation:al-tw 2.8s ease-in-out infinite}
@keyframes al-tw{0%,100%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1)}}
.al-look{animation:al-look 8s ease-in-out infinite}
@keyframes al-look{0%,34%,90%,100%{transform:translate(0px,-74px) rotate(0)}40%,84%{transform:translate(2px,-74px) rotate(-12deg)}}
`;

function AftabeSet({ cx, gold }: { cx: number; gold: boolean }) {
  const m = gold ? GOLD : SILVER;
  return (
    <g>
      <path d={`M${cx - 20} 106 V64 Q${cx - 20} 42 ${cx} 36 Q${cx + 20} 42 ${cx + 20} 64 V106Z`} fill="#c99a5c" {...inked} />
      <path d={`M${cx - 15} 106 V66 Q${cx - 15} 48 ${cx} 43 Q${cx + 15} 48 ${cx + 15} 66 V106Z`} fill="#7a4f2c" opacity=".35" />
      <path d={`M${cx + 5} 84 Q${cx + 14} 82 ${cx + 16} 70`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" />
      <path d={`M${cx + 5} 84 Q${cx + 14} 82 ${cx + 16} 70`} fill="none" stroke={m} strokeWidth={2} strokeLinecap="round" />
      <path d={`M${cx - 6} 76 q-7 3 -4 12`} fill="none" stroke={INK} strokeWidth={2} />
      <path d={`M${cx - 3} 70 h6 l1 5 Q${cx + 9} 80 ${cx + 7} 90 Q${cx} 96 ${cx - 7} 90 Q${cx - 9} 80 ${cx - 4} 75Z`} fill={m} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
      <path d={`M${cx - 4} 70 Q${cx} 64 ${cx + 4} 70Z`} fill={m} stroke={INK} strokeWidth={1.5} />
      <path d={`M${cx - 4} 84 Q${cx} 86 ${cx + 4} 84`} fill="none" stroke={INK} strokeWidth={1} />
      <path d={`M${cx - 15} 95 Q${cx} 110 ${cx + 15} 95Z`} fill={m} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
      <ellipse cx={cx} cy={95} rx={15} ry={2.5} fill={m} stroke={INK} strokeWidth={1.5} />
    </g>
  );
}

export default function AftabeLagan({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="آفتابه‌لگن هفت دست، شام و ناهار هیچی" className={playing ? "" : "paused"}>
      <style>{css}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#f3d9a4" />
      <rect x="-10" y="20" width="420" height="94" fill="#e8c47f" />
      {Array.from({ length: 7 }, (_, i) => <AftabeSet key={i} cx={50 + i * 50} gold={i % 2 === 0} />)}
      {[[66, 72, 0], [216, 76, 1], [316, 70, 2]].map(([x, y, d], i) => (
        <path key={i} className="al-tw" style={{ animationDelay: `${d * 0.7}s` }} d={`M${x} ${y - 5} L${x + 1.3} ${y - 1.3} L${x + 5} ${y} L${x + 1.3} ${y + 1.3} L${x} ${y + 5} L${x - 1.3} ${y + 1.3} L${x - 5} ${y} L${x - 1.3} ${y - 1.3}Z`} fill={C.white} />
      ))}
      <rect x="-10" y="112" width="420" height="12" fill={C.turquoise} stroke={INK} strokeWidth={2} />
      <path d="M-10 118 H410" stroke={C.cream} strokeWidth={2} strokeDasharray="6 6" />
      {big && <text x="200" y="134" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize="9" fill={INK} direction="rtl">۷ دست آفتابه‌لگن · ۰ دونه برنج</text>}

      <rect x="-10" y="190" width="420" height="120" fill={C.terracotta} stroke={INK} strokeWidth={2.5} />

      <g transform="translate(80 238) scale(.95)">
        <g className="al-belly">
          <Person robe={C.lapis} sash={C.saffron} hat={C.white} mood="sad" />
        </g>
      </g>
      <g transform="translate(200 238) scale(.95)">
        <Person robe={C.pomegranate} sash={C.saffron} hat={C.cream} hatKind="kolah" mood="serious" beard>
          <path className="al-tongue" d="M-3.5 -67 Q0 -55 3.5 -67Z" fill="#e8768a" stroke={INK} strokeWidth={1.2} />
          <g className="al-plate">
            <path d="M-18 -40 L-24 -52 M18 -40 L24 -52" stroke={INK} strokeWidth={9} strokeLinecap="round" />
            <path d="M-18 -40 L-24 -52 M18 -40 L24 -52" stroke={C.pomegranate} strokeWidth={5.5} strokeLinecap="round" />
            <ellipse cx="0" cy="-56" rx="24" ry="9" fill={GOLD} {...inked} />
            <ellipse cx="0" cy="-56" rx="15" ry="5" fill="none" stroke={INK} strokeWidth={1.2} />
            <path d="M-12 -59 q4 -2 8 -1" stroke={C.white} strokeWidth={2} strokeLinecap="round" fill="none" />
            <circle cx="-24" cy="-54" r="4.5" fill={SKIN} {...inked} strokeWidth={2} />
            <circle cx="24" cy="-54" r="4.5" fill={SKIN} {...inked} strokeWidth={2} />
          </g>
        </Person>
      </g>
      <g transform="translate(320 238) scale(.95)">
        <Person robe={C.olive} sash={C.cream} hat={C.lapis} hatKind="scarf" mood="shocked" headClass="al-look" />
      </g>

      <path d="M10 202 H390 L404 270 H-4Z" fill="#fbf3e2" {...inked} />
      <path d="M18 209 H382 L394 262 H6Z" fill="none" stroke={C.pomegranate} strokeWidth={2} strokeDasharray="5 4" />

      {[80, 200, 320].map((x, i) => (
        <g key={x} className="al-growl" style={{ animationDelay: `${i * 0.35}s` }} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round">
          <path d={`M${x - 30} 196 q3 -4 0 -8 q-3 -4 0 -8 M${x - 36} 198 q3 -4 0 -8`} />
          <path d={`M${x + 30} 196 q-3 -4 0 -8 q3 -4 0 -8 M${x + 36} 198 q-3 -4 0 -8`} />
        </g>
      ))}

      <g transform="translate(140 0)">
        <path d="M-10 222 L-14 230 H14 L10 222Z" fill={SILVER} {...inked} strokeWidth={2} />
        <path d="M-15 222 Q-19 196 -12 178 H12 Q19 196 15 222Z" fill={SILVER} {...inked} />
        <path d="M-15 200 H15" stroke={INK} strokeWidth={1.4} />
        <path d="M-10 190 Q0 196 10 190" fill="none" stroke={C.pomegranate} strokeWidth={2} />
        <path d="M15 208 h8 v4" fill="none" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
        <path d="M-16 186 q-6 0 -6 8 M16 186 q6 0 6 8" fill="none" stroke={INK} strokeWidth={2} />
        <rect x="-7" y="172" width="14" height="6" fill={SILVER} {...inked} strokeWidth={1.8} />
        <path d="M-9 172 Q-10 158 0 156 Q10 158 9 172Z" fill={C.firouzeh} {...inked} strokeWidth={2} />
        <path d="M9 166 q6 -2 7 -8" fill="none" stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
        <circle cx="0" cy="154" r="2.5" fill={C.saffron} stroke={INK} strokeWidth={1.4} />
      </g>
      <ellipse cx="80" cy="232" rx="22" ry="7" fill={GOLD} {...inked} />
      <ellipse cx="80" cy="232" rx="13" ry="3.5" fill="none" stroke={INK} strokeWidth={1.2} />
      <ellipse cx="200" cy="246" rx="22" ry="7" fill={SILVER} {...inked} />
      <ellipse cx="200" cy="246" rx="13" ry="3.5" fill="none" stroke={INK} strokeWidth={1.2} />
      <g transform="translate(352 236)">
        <path d="M-10 0 Q-13 -16 0 -16 Q13 -16 10 0Z" fill={C.white} {...inked} strokeWidth={2} />
        <path d="M10 -8 q7 -2 8 -9 M-10 -10 q-6 2 -4 9" fill="none" stroke={INK} strokeWidth={2} />
        <path d="M-6 -8 h12" stroke={C.lapis} strokeWidth={2} />
      </g>

      <ellipse cx="270" cy="234" rx="28" ry="7" fill={SILVER} {...inked} />
      <g transform="translate(270 228)">
        <g className="al-fly">
          <g transform="translate(0 -4)">
            <g className="al-wing" fill={C.white} stroke={INK} strokeWidth={1} opacity=".9">
              <ellipse cx="-3" cy="-5" rx="3" ry="4.5" /><ellipse cx="3" cy="-5" rx="3" ry="4.5" />
            </g>
            <ellipse cx="0" cy="0" rx="4.5" ry="3.5" fill={INK} />
            <circle cx="-4" cy="-1" r="1.4" fill={C.pomegranate} />
          </g>
        </g>
      </g>
      <g className="al-tada" stroke={C.saffron} strokeWidth={2.5} strokeLinecap="round">
        <path d="M270 196 v-10 M246 204 l-7 -7 M294 204 l7 -7 M238 220 h-9 M302 220 h9" />
      </g>
      <g transform="translate(270 232)">
        <g className="al-cloche">
          <path d="M-24 0 Q-24 -24 0 -24 Q24 -24 24 0Z" fill={SILVER} {...inked} />
          <path d="M-16 -8 Q-14 -18 -4 -20" fill="none" stroke={C.white} strokeWidth={2.5} strokeLinecap="round" />
          <circle cx="0" cy="-27" r="3.5" fill={GOLD} stroke={INK} strokeWidth={1.6} />
        </g>
      </g>

      {big && <Bubble x={66} y={150} w={74} text="قار و قور" className="al-growl" />}
    </Scene>
  );
}
