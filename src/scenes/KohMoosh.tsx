import { useEffect, useState } from "react";
import { Scene, Person, Mouse, Cloud, Ground, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

function jitter(name: string, from: number, to: number, amp: number, rot = 0, step = 2) {
  const fr: string[] = [`0%,${from}%{transform:translate(0px,0px) rotate(0deg)}`];
  let i = 0;
  for (let p = from + step; p < to; p += step, i++) {
    const s = i % 2 ? 1 : -1;
    const dy = ((i % 3) - 1) * amp * 0.4;
    fr.push(`${p}%{transform:translate(${s * amp}px,${dy.toFixed(1)}px) rotate(${s * rot}deg)}`);
  }
  fr.push(`${to}%,100%{transform:translate(0px,0px) rotate(0deg)}`);
  return `@keyframes ${name}{${fr.join("")}}`;
}

const CSS = `
${jitter("km-quake", 0, 56, 3, 0.7)}
${jitter("km-tremble", 0, 56, 1.6, 2)}
.km-quake{animation:km-quake 8s linear infinite}
.km-tremble{animation:km-tremble 8s linear infinite}
@keyframes km-swell{0%,38%{transform:scale(1,1)}46%{transform:scale(1.03,1.05)}50%{transform:scale(.99,1.01)}55%{transform:scale(1.06,1.09)}59%{transform:scale(.96,.97)}63%,100%{transform:scale(1,1)}}
.km-swell{animation:km-swell 8s ease-in-out infinite}
@keyframes km-strain{0%,57%{opacity:1}59%,100%{opacity:0}}
.km-strain{animation:km-strain 8s linear infinite}
@keyframes km-relief{0%,57%{opacity:0}59%,100%{opacity:1}}
.km-relief{animation:km-relief 8s linear infinite}
@keyframes km-sweat{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(26px);opacity:0}}
.km-sweat{animation:km-sweat 1.1s ease-in infinite}
@keyframes km-bolt{0%,8%{opacity:0}9%{opacity:1}10%{opacity:.2}11%{opacity:1}13%,28%{opacity:0}29%{opacity:1}31%,44%{opacity:0}45%{opacity:1}46%{opacity:.3}47%{opacity:1}49%,53%{opacity:0}54%{opacity:1}55%{opacity:.2}56%{opacity:1}57.5%,100%{opacity:0}}
.km-bolt{animation:km-bolt 8s linear infinite}
.km-bolt2{animation:km-bolt 8s linear infinite;animation-delay:-6.3s}
@keyframes km-flash{0%,8%{opacity:0}9%{opacity:.35}11%{opacity:0}28%{opacity:0}29%{opacity:.3}31%{opacity:0}44%{opacity:0}45%{opacity:.35}48%,53%{opacity:0}54%{opacity:.5}57%,100%{opacity:0}}
.km-flash{animation:km-flash 8s linear infinite}
@keyframes km-puff{0%{transform:translate(0,0) scale(.4);opacity:0}5%{opacity:.95}30%{transform:translate(-26px,-58px) scale(1.7);opacity:0}100%{transform:translate(-26px,-58px) scale(1.7);opacity:0}}
.km-puff{animation:km-puff 8s ease-out infinite}
@keyframes km-cloud{0%,100%{transform:translateX(-6px)}50%{transform:translateX(8px)}}
.km-cloud{animation:km-cloud 7s ease-in-out infinite}
@keyframes km-tw{0%,100%{opacity:1}50%{opacity:.25}}
.km-tw{animation:km-tw 2.6s ease-in-out infinite}
@keyframes km-emerge{0%,59%{transform:translateY(10px) scale(0);opacity:0}61%{opacity:1}63%{transform:translateY(-6px) scale(1.2)}66%,96%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(0) scale(1);opacity:0}}
.km-emerge{animation:km-emerge 8s ease-out infinite}
@keyframes km-look{0%,69%{transform:scaleX(1)}71%,77%{transform:scaleX(-1)}79%,85%{transform:scaleX(1)}87%,91%{transform:scaleX(-1)}93%,100%{transform:scaleX(1)}}
.km-look{animation:km-look 8s steps(1,end) infinite}
@keyframes km-burst{0%,59%{transform:scale(0) rotate(0deg);opacity:0}61%{opacity:1}64%{transform:scale(1.4) rotate(40deg);opacity:.9}70%,100%{transform:scale(2) rotate(60deg);opacity:0}}
.km-burst{animation:km-burst 8s ease-out infinite}
@keyframes km-leanL{0%,62%{transform:rotate(0deg)}68%,94%{transform:rotate(9deg)}100%{transform:rotate(0deg)}}
@keyframes km-leanR{0%,62%{transform:rotate(0deg)}68%,94%{transform:rotate(-9deg)}100%{transform:rotate(0deg)}}
.km-leanL{animation:km-leanL 8s ease-in-out infinite}
.km-leanR{animation:km-leanR 8s ease-in-out infinite}
@keyframes km-q{0%,70%{transform:scale(0)}74%{transform:scale(1.3)}77%,94%{transform:scale(1)}97%,100%{transform:scale(0)}}
.km-q{animation:km-q 8s ease-out infinite}
@keyframes km-squeak{0%,65%{transform:scale(0)}68%{transform:scale(1.25)}71%,90%{transform:scale(1)}93%,100%{transform:scale(0)}}
.km-squeak{animation:km-squeak 8s ease-out infinite}
@keyframes km-sfx{0%{opacity:0;transform:scale(.6)}6%{opacity:1;transform:scale(1)}10%{transform:scale(1.1) rotate(-3deg)}20%{transform:scale(1) rotate(3deg)}30%{transform:scale(1.12) rotate(-2deg)}45%{opacity:1;transform:scale(1.2)}54%,100%{opacity:0;transform:scale(1.4)}}
.km-sfx{animation:km-sfx 8s ease-in-out infinite}
@keyframes km-dance{0%,100%{transform:translateY(0) rotate(-12deg)}25%{transform:translateY(-12px) rotate(0deg)}50%{transform:translateY(0) rotate(12deg)}75%{transform:translateY(-12px) rotate(0deg)}}
.km-dance{animation:km-dance .6s ease-in-out infinite}
@keyframes km-conf{0%{transform:scale(0) rotate(0deg)}40%{transform:scale(1.2) rotate(90deg)}100%{transform:scale(.8) rotate(180deg)}}
.km-conf{animation:km-conf .9s ease-out infinite alternate}
.km-hit{cursor:pointer}
.km-hit:focus-visible{outline:none;stroke:${C.pomegranate};stroke-width:2;stroke-dasharray:3 3}
`;

const MOUNT = "#b98b73";
const MOUNT_DK = "#94695a";

export default function KohMoosh({ playing = true, big = false }: SceneProps) {
  const [party, setParty] = useState(false);
  useEffect(() => {
    if (!party) return;
    const t = setTimeout(() => setParty(false), 3600);
    return () => clearTimeout(t);
  }, [party]);

  const celebrate = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setParty(true);
  };

  return (
    <Scene title="کوه موش زایید" className={playing ? "" : "paused"}>
      <style>{CSS}</style>

      <rect x="-10" y="-10" width="420" height="320" fill="#2b3a67" />
      <g fill={C.cream}>
        <circle className="km-tw" cx="40" cy="30" r="1.6" />
        <circle className="km-tw" cx="120" cy="22" r="1.2" style={{ animationDelay: "-1s" }} />
        <circle className="km-tw" cx="250" cy="28" r="1.4" style={{ animationDelay: "-.6s" }} />
        <circle className="km-tw" cx="300" cy="110" r="1.2" style={{ animationDelay: "-1.8s" }} />
        <circle className="km-tw" cx="60" cy="120" r="1.3" style={{ animationDelay: "-2.2s" }} />
      </g>
      <Star8 x={160} y={30} r={4} fill={C.saffron} className="km-tw" />
      <circle cx="350" cy="44" r="16" fill={C.cream} {...inked} />
      <circle cx="358" cy="38" r="14" fill="#2b3a67" />

      <path d="M-10 250 L-10 190 Q40 160 80 185 Q120 150 160 190 L250 190 Q300 150 340 180 Q380 160 410 175 L410 250Z" fill="#3d4f86" {...inked} />
      <path d="M20 200 q10 -8 20 0 M310 188 q10 -8 20 0" fill="none" stroke={INK} strokeWidth={1.2} opacity=".6" />

      <Cloud x={20} y={86} s={1.15} fill="#5a6494" className="km-cloud" />
      <Cloud x={292} y={78} s={1.05} fill="#5a6494" className="km-cloud" style={{ animationDelay: "-3s" }} />

      <path className="km-bolt" d="M92 82 L76 114 L88 114 L68 156 L102 104 L89 104 L100 82Z" fill={C.saffron} {...inked} strokeWidth={2} />
      <path className="km-bolt2" d="M326 72 L311 106 L323 106 L304 146 L337 96 L324 96 L334 72Z" fill={C.saffron} {...inked} strokeWidth={2} />

      <g className="km-swell o-bottom">
        <g className="km-quake">
          {[0, -6.7, -5.4, -4.1].map((d, i) => (
            <g key={i} transform={`translate(${196 + i * 3} 60)`}>
              <g className="km-puff" style={{ animationDelay: `${d}s` }}>
                <circle cx="0" cy="0" r="9" fill="#8d8aa0" stroke={INK} strokeWidth={1.8} />
                <circle cx="9" cy="-4" r="7" fill="#8d8aa0" stroke={INK} strokeWidth={1.8} />
                <circle cx="-7" cy="-5" r="6" fill="#a19eb3" stroke={INK} strokeWidth={1.6} />
              </g>
            </g>
          ))}
          <path d="M58 256 L148 92 Q170 58 196 58 Q218 58 236 82 L344 256Z" fill={MOUNT} {...inked} />
          <path d="M96 214 Q130 200 160 212 M240 206 Q272 196 300 210 M120 176 Q140 166 156 174 M250 168 Q266 160 282 170 M90 240 Q110 232 128 240 M276 236 Q296 228 318 240" fill="none" stroke={MOUNT_DK} strokeWidth={2.2} strokeLinecap="round" />
          <path d="M148 92 Q170 58 196 58 Q218 58 236 82 L224 98 L212 86 L200 102 L188 88 L174 104 L160 92 L154 102Z" fill={C.white} {...inked} />
          <g fill={C.olive} stroke={INK} strokeWidth={1.8}>
            <path d="M104 236 Q98 222 104 206 Q110 222 104 236Z" />
            <path d="M300 236 Q294 220 300 202 Q306 220 300 236Z" />
            <path d="M118 226 Q113 216 118 204 Q123 216 118 226Z" />
          </g>
          <path d="M190 256 L194 240 L199 246 L204 232 L208 244 L214 238 L218 256Z" fill={INK} />

          <g className="km-strain" style={{ opacity: 0 }}>
            <path d="M156 132 L184 141 M244 132 L216 141" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />
            <path d="M160 145 L182 152 L160 159 M240 145 L218 152 L240 159" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <ellipse cx="152" cy="172" rx="9" ry="6" fill="#e58a7a" opacity=".7" />
            <ellipse cx="248" cy="172" rx="9" ry="6" fill="#e58a7a" opacity=".7" />
            <rect x="178" y="170" width="44" height="20" rx="7" fill={C.white} {...inked} />
            <path d="M178 180 H222 M189 170 V190 M200 170 V190 M211 170 V190" stroke={INK} strokeWidth={1.5} />
            <g transform="translate(148 124)"><path className="km-sweat" d="M0 -6 Q5 2 0 5 Q-5 2 0 -6Z" fill="#9fd8ef" stroke={INK} strokeWidth={1.3} /></g>
            <g transform="translate(254 120)"><path className="km-sweat" style={{ animationDelay: "-.5s" }} d="M0 -6 Q5 2 0 5 Q-5 2 0 -6Z" fill="#9fd8ef" stroke={INK} strokeWidth={1.3} /></g>
          </g>

          <g className="km-relief">
            <path d="M157 136 Q171 127 185 136 M215 136 Q229 127 243 136" fill="none" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
            <path d="M160 150 Q172 140 184 150 Q172 158 160 150Z M216 150 Q228 140 240 150 Q228 158 216 150Z" fill={C.white} stroke={INK} strokeWidth={1.8} />
            <circle cx="174" cy="153" r="3" fill={INK} />
            <circle cx="226" cy="153" r="3" fill={INK} />
            <circle cx="153" cy="170" r="7" fill="#e58a7a" opacity=".6" />
            <circle cx="247" cy="170" r="7" fill="#e58a7a" opacity=".6" />
            <path d="M190 180 Q200 189 210 180" fill="none" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
            <path d="M241 156 Q245 163 241 166 Q237 163 241 156Z" fill="#9fd8ef" stroke={INK} strokeWidth={1.2} />
          </g>
        </g>
      </g>

      <Ground y={250} color="#5f7a45" />
      <path d="M40 268 q6 -6 12 0 M330 276 q6 -6 12 0 M150 284 q6 -6 12 0" fill="none" stroke={INK} strokeWidth={1.3} opacity=".55" />

      <rect className="km-flash" x="-10" y="-10" width="420" height="320" fill={C.white} style={{ opacity: 0 }} />

      <g transform="translate(78 284) scale(.62)">
        <g className="km-leanL o-bottom">
          <g className="km-tremble">
            <Person robe={C.pomegranate} sash={C.saffron} hat={C.cream} mood="scared" armL={165} armR={-165} />
          </g>
        </g>
      </g>
      <g transform="translate(326 284) scale(.62)">
        <g className="km-leanR o-bottom">
          <g className="km-tremble" style={{ animationDelay: "-.15s" }}>
            <Person robe={C.lapis} sash={C.turquoise} hat={C.saffron} hatKind="kolah" mood="scared" beard armL={160} armR={-160} />
          </g>
        </g>
      </g>
      <g transform="translate(326 210)">
        <text className="km-q" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="22" fill={C.saffron} stroke={INK} strokeWidth={1.2}>؟</text>
      </g>

      {big && (
        <g transform="translate(200 34)">
          <text className="km-sfx" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="26" fill={C.saffron} stroke={INK} strokeWidth={1.4} direction="rtl" style={{ opacity: 0 }}>غُرررررمب!</text>
        </g>
      )}

      <g transform="translate(205 250)">
        <g className="km-burst"><Star8 r={18} fill={C.saffron} /></g>
      </g>
      <g transform="translate(206 258)">
        <g className={party ? "km-dance o-bottom" : "km-emerge o-bottom"}>
          <g className={party ? "" : "km-look"}>
            <Mouse scale={1.4} />
            {party && (
              <g transform="scale(1.4)">
                <path d="M-14 -7.5 Q-10.5 -8.5 -7 -7.5 Q-7 -4 -10.5 -3.8 Q-14 -4 -14 -7.5Z" fill={INK} />
                <path d="M-7 -7.2 L-1 -9" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />
                <path d="M-12.5 -6.6 L-11.2 -5.4" stroke={C.white} strokeWidth={.8} strokeLinecap="round" />
              </g>
            )}
          </g>
        </g>
      </g>
      {party && (
        <g>
          <Star8 x={180} y={226} r={5} fill={C.pomegranate} className="km-conf" />
          <Star8 x={232} y={222} r={6} fill={C.firouzeh} className="km-conf" style={{ animationDelay: "-.3s" }} />
          <Star8 x={244} y={246} r={4} fill={C.saffron} className="km-conf" style={{ animationDelay: "-.6s" }} />
          <Star8 x={170} y={250} r={4} fill={C.saffron} className="km-conf" style={{ animationDelay: "-.45s" }} />
          <Bubble x={196} y={232} w={60} text="ایول!" flip />
        </g>
      )}
      {big && !party && <Bubble x={194} y={234} w={56} text="جیک!" flip className="km-squeak o-bottom" />}

      <circle
        className="km-hit"
        cx="203"
        cy="248"
        r="20"
        fill="transparent"
        pointerEvents="all"
        role="button"
        tabIndex={0}
        aria-label="موش رو بزن!"
        onClick={celebrate}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            celebrate(e);
          }
        }}
      />
    </Scene>
  );
}
