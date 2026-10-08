import { Scene, Star8, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const CAT = C.saffron;
const CAT_DK = "#b5701f";
const MEAT = "#c4503f";
const MEAT_DK = "#9a3a2c";
const BEAM = "#7a4a2e";

const CSS = `
@keyframes gg-jump{0%{transform:translate(0px,0px) scale(1,1)}4%{transform:translate(0px,0px) scale(1.1,.85)}8%,10%{transform:translate(0px,-28px) scale(.96,1.04)}14%{transform:translate(0px,0px) scale(1.15,.85)}17%{transform:translate(0px,0px) scale(1,1)}21%{transform:translate(0px,0px) scale(1.12,.84)}25%,27%{transform:translate(0px,-38px) scale(.95,1.06)}31%{transform:translate(0px,0px) scale(1.15,.85)}34%{transform:translate(0px,0px) scale(1,1)}38%{transform:translate(0px,0px) scale(1.16,.8)}42%,46%{transform:translate(0px,-47px) scale(.9,1.12)}50%{transform:translate(0px,0px) scale(1.2,.8)}53%,100%{transform:translate(0px,0px) scale(1,1)}}
.gg-jump{animation:gg-jump 8s ease-in-out infinite}
@keyframes gg-jumpwin{0%,55%{opacity:1}56%,99%{opacity:0}100%{opacity:1}}
.gg-jumpwin{animation:gg-jumpwin 8s linear infinite}
@keyframes gg-sitwin{0%,55%{opacity:0}56%,99%{opacity:1}100%{opacity:0}}
.gg-sitwin{animation:gg-sitwin 8s linear infinite}
@keyframes gg-snub{0%,60%{transform:rotate(0deg) translateX(0px)}64%,96%{transform:rotate(-20deg) translateX(-3px)}100%{transform:rotate(0deg) translateX(0px)}}
.gg-snub{animation:gg-snub 8s ease-in-out infinite}
@keyframes gg-cross{0%,56%{transform:scale(0)}59%{transform:scale(1.2)}61%,100%{transform:scale(1)}}
.gg-cross{animation:gg-cross 8s ease-out infinite}
@keyframes gg-meat{0%,100%{transform:rotate(-2deg)}20%{transform:rotate(2deg)}40%{transform:rotate(-2deg)}46%{transform:rotate(-2deg)}49%{transform:rotate(9deg)}53%{transform:rotate(-7deg)}58%{transform:rotate(5deg)}64%{transform:rotate(-3deg)}72%{transform:rotate(2deg)}86%{transform:rotate(-2deg)}}
.gg-meat{animation:gg-meat 8s ease-in-out infinite}
@keyframes gg-tail{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(16deg)}}
.gg-tail{animation:gg-tail 1.2s ease-in-out infinite}
@keyframes gg-tailmad{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}
.gg-tailmad{animation:gg-tailmad .5s ease-in-out infinite}
@keyframes gg-orbit{to{transform:rotate(360deg)}}
.gg-orbit{animation:gg-orbit 1.8s linear infinite}
@keyframes gg-buzz{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.3)}}
.gg-buzz{animation:gg-buzz .08s linear infinite}
@keyframes gg-spark{0%,43%{transform:scale(0) rotate(0deg)}45%{transform:scale(1.3) rotate(30deg)}48%,100%{transform:scale(0) rotate(60deg)}}
.gg-spark{animation:gg-spark 8s ease-out infinite}
@keyframes gg-stink{0%{transform:translateY(6px) scaleX(1);opacity:0}30%{opacity:1}100%{transform:translateY(-22px) scaleX(-1);opacity:0}}
.gg-stink{animation:gg-stink 1.6s ease-in-out infinite}
@keyframes gg-stinkwin{0%,66%{opacity:0}70%,96%{opacity:1}99%,100%{opacity:0}}
.gg-stinkwin{animation:gg-stinkwin 8s linear infinite}
@keyframes gg-say{0%,68%{transform:scale(0) rotate(0deg)}72%{transform:scale(1.2) rotate(-6deg)}75%,95%{transform:scale(1) rotate(3deg)}98%,100%{transform:scale(0) rotate(0deg)}}
.gg-say{animation:gg-say 8s ease-out infinite}
@keyframes gg-hmph{0%,62%{transform:translate(0px,0px) scale(0);opacity:0}64%{transform:translate(0px,0px) scale(1);opacity:1}74%,100%{transform:translate(-14px,-6px) scale(1.6);opacity:0}}
.gg-hmph{animation:gg-hmph 8s ease-out infinite}
@keyframes gg-q{0%,8%{transform:scale(0)}10%{transform:scale(1.2)}13%,100%{transform:scale(0)}}
.gg-q{animation:gg-q 8s ease-out infinite}
@keyframes gg-q2{0%,25%{transform:scale(0)}27%{transform:scale(1.2)}30%,100%{transform:scale(0)}}
.gg-q2{animation:gg-q2 8s ease-out infinite}
@keyframes gg-b{0%,68%{transform:scale(0)}71%{transform:scale(1.1)}73%,95%{transform:scale(1)}98%,100%{transform:scale(0)}}
.gg-b{animation:gg-b 8s ease-out infinite}
`;

function Head({ up = false, snooty = false }: { up?: boolean; snooty?: boolean }) {
  return (
    <g>
      <path d="M-12 -6 L-12 -22 L-3 -12Z M12 -6 L12 -22 L3 -12Z" fill={CAT} {...inked} strokeWidth={2} />
      <path d="M-10 -10 L-10 -17 L-6 -12Z M10 -10 L10 -17 L6 -12Z" fill="#f29bb0" />
      <ellipse cx="0" cy="0" rx="15" ry="13" fill={CAT} {...inked} />
      <path d="M-4 -12 l1 5 M0 -13 v5 M4 -12 l-1 5" stroke={CAT_DK} strokeWidth={1.6} strokeLinecap="round" />
      {snooty ? (
        <g>
          <path d="M-11 -1 Q-6 4 -1 -1Z M1 -1 Q6 4 11 -1Z" fill={C.white} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
          <circle cx="-6" cy="0.6" r="1.4" fill={INK} />
          <circle cx="6" cy="0.6" r="1.4" fill={INK} />
          <path d="M-12 -1.5 H-0.5 M0.5 -1.5 H12" stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
          <path d="M-11 -7 Q-6 -10 -2 -8 M2 -8 Q6 -10 11 -7" fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
          <path d="M-3 9 Q0 7 3 9" fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
        </g>
      ) : (
        <g>
          <circle cx="-6" cy="-1" r="5" fill={C.white} stroke={INK} strokeWidth={1.4} />
          <circle cx="6" cy="-1" r="5" fill={C.white} stroke={INK} strokeWidth={1.4} />
          <circle cx="-5" cy={up ? -4 : -1} r="2.2" fill={INK} />
          <circle cx="7" cy={up ? -4 : -1} r="2.2" fill={INK} />
          <path d="M-11 -9 l5 2 M11 -9 l-5 2" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
          <ellipse cx="0" cy="8.5" rx="2.2" ry="2.6" fill={C.pomegranate} stroke={INK} strokeWidth={1} />
        </g>
      )}
      <path d="M-1.8 4 L1.8 4 L0 6Z" fill="#e58a7a" stroke={INK} strokeWidth={1} />
      <path d="M-8 5 L-21 3 M-8 7 L-20 9 M8 5 L21 3 M8 7 L20 9" stroke={INK} strokeWidth={0.9} />
    </g>
  );
}

function Body() {
  return (
    <g>
      <path d="M-17 0 Q-21 -24 -9 -33 L9 -33 Q21 -24 17 0Z" fill={CAT} {...inked} />
      <path d="M-14 -16 q5 2 6 6 M14 -16 q-5 2 -6 6 M-15 -8 q5 1 6 5 M15 -8 q-5 1 -6 5" fill="none" stroke={CAT_DK} strokeWidth={2} strokeLinecap="round" />
      <path d="M-7 -30 Q0 -14 7 -30" fill={C.cream} stroke="none" />
      <ellipse cx="-7" cy="-1" rx="5.5" ry="3.5" fill={CAT} {...inked} strokeWidth={2} />
      <ellipse cx="7" cy="-1" rx="5.5" ry="3.5" fill={CAT} {...inked} strokeWidth={2} />
    </g>
  );
}

function JumpCat() {
  return (
    <g>
      <g transform="translate(14 -4)">
        <g className="gg-tail" style={{ transformOrigin: "0px 0px", transformBox: "view-box" }}>
          <path d="M0 0 Q20 4 22 -14 Q24 -28 16 -30" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
          <path d="M0 0 Q20 4 22 -14 Q24 -28 16 -30" fill="none" stroke={CAT} strokeWidth={5} strokeLinecap="round" />
        </g>
      </g>
      <Body />
      <path d="M-9 -28 Q-22 -50 -12 -72 M9 -28 Q22 -50 12 -72" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
      <path d="M-9 -28 Q-22 -50 -12 -72 M9 -28 Q22 -50 12 -72" fill="none" stroke={CAT} strokeWidth={5} strokeLinecap="round" />
      <circle cx="-12" cy="-73" r="4.2" fill={CAT} stroke={INK} strokeWidth={1.8} />
      <circle cx="12" cy="-73" r="4.2" fill={CAT} stroke={INK} strokeWidth={1.8} />
      <path d="M-14 -76 v-2 M-11 -77 v-2 M10 -77 v-2 M13 -76 v-2" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />
      <g transform="translate(0 -40)"><Head up /></g>
    </g>
  );
}

function SitCat() {
  return (
    <g>
      <g transform="translate(14 -4)">
        <g className="gg-tailmad" style={{ transformOrigin: "0px 0px", transformBox: "view-box" }}>
          <path d="M0 0 Q26 0 28 -16 Q30 -28 22 -30" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
          <path d="M0 0 Q26 0 28 -16 Q30 -28 22 -30" fill="none" stroke={CAT} strokeWidth={5} strokeLinecap="round" />
        </g>
      </g>
      <Body />
      <g transform="translate(0 -20)">
        <g className="gg-cross">
          <path d="M-13 -6 L9 2 M13 -6 L-9 2" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
          <path d="M-13 -6 L9 2" fill="none" stroke={CAT} strokeWidth={5} strokeLinecap="round" />
          <path d="M13 -6 L-9 2" fill="none" stroke="#f0b452" strokeWidth={5} strokeLinecap="round" />
          <circle cx="10" cy="2" r="3.6" fill={CAT} stroke={INK} strokeWidth={1.6} />
          <circle cx="-10" cy="2" r="3.6" fill={CAT} stroke={INK} strokeWidth={1.6} />
        </g>
      </g>
      <g transform="translate(0 -40)">
        <g className="gg-snub" style={{ transformOrigin: "0px 10px", transformBox: "view-box", transform: "rotate(-20deg) translateX(-3px)" }}>
          <Head snooty />
        </g>
      </g>
    </g>
  );
}

export default function GorbeGoosht({ playing = true, big = false }: SceneProps) {
  return (
    <Scene title="گربه دستش به گوشت نمی‌رسید، می‌گفت بو می‌ده" className={playing ? "" : "paused"}>
      <style>{CSS}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#f0c9a8" />
      <rect x="-10" y="150" width="420" height="16" fill={C.turquoise} stroke={INK} strokeWidth={2} />
      {Array.from({ length: 11 }, (_, i) => <Star8 key={i} x={i * 40 + 10} y={158} r={5} fill={C.saffron} />)}
      <rect x="-10" y="166" width="420" height="92" fill="#eef2ea" stroke={INK} strokeWidth={2} />
      <path d="M-10 196 H410 M-10 226 H410 M20 166 V258 M60 166 V258 M100 166 V258 M140 166 V258 M180 166 V258 M220 166 V258 M260 166 V258 M300 166 V258 M340 166 V258 M380 166 V258" stroke="#9cc7c3" strokeWidth={1.2} />

      <rect x="-10" y="256" width="420" height="54" fill={C.cream} stroke={INK} strokeWidth={2.5} />
      {Array.from({ length: 11 }, (_, i) => (
        <rect key={i} x={i * 40 - 10 + ((i % 2) ? 0 : 20)} y={256} width={20} height={20} fill={C.terracotta} opacity=".55" />
      ))}
      {Array.from({ length: 11 }, (_, i) => (
        <rect key={`b${i}`} x={i * 40 - 10 + ((i % 2) ? 20 : 0)} y={276} width={20} height={20} fill={C.terracotta} opacity=".55" />
      ))}

      <path d="M40 258 V218 Q40 208 70 208 Q100 208 100 218 V258Z" fill="#a0703f" {...inked} />
      <ellipse cx="70" cy="212" rx="30" ry="7" fill="#d9a85a" {...inked} strokeWidth={2} />
      <path d="M58 212 q12 -4 24 0 M64 212 q6 -2 12 0" fill="none" stroke="#a0703f" strokeWidth={1.2} />
      <path d="M78 211 L96 186 L108 194 L88 214Z" fill="#c9d3da" {...inked} strokeWidth={2} />
      <path d="M96 186 L104 176 L112 182 L108 194Z" fill="#6b4a2e" {...inked} strokeWidth={2} />

      <rect x="-10" y="38" width="420" height="16" fill={BEAM} {...inked} />
      <path d="M-10 46 H410" stroke="#5e3820" strokeWidth={1.2} strokeDasharray="10 6" />
      <rect x="40" y="58" width="64" height="24" rx="3" fill={C.cream} {...inked} strokeWidth={2} />
      <path d="M52 54 V58 M92 54 V58" stroke={INK} strokeWidth={1.5} />
      <text x="72" y="74.5" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="12" fill={C.pomegranate} direction="rtl">قصابی</text>

      <path d="M140 54 V64" stroke={INK} strokeWidth={2} />
      <g fill={MEAT_DK} stroke={INK} strokeWidth={1.6}>
        <ellipse cx="140" cy="72" rx="5" ry="8" /><ellipse cx="141" cy="88" rx="5" ry="8" /><ellipse cx="140" cy="104" rx="5" ry="8" /><ellipse cx="141" cy="120" rx="5" ry="8" />
      </g>
      <path d="M352 54 V62" stroke={INK} strokeWidth={2} />
      <g fill="#d9b8e0" stroke={INK} strokeWidth={1.5}>
        <circle cx="352" cy="70" r="7" /><circle cx="346" cy="82" r="7" /><circle cx="358" cy="84" r="7" /><circle cx="352" cy="96" r="7" />
      </g>

      <path d="M250 54 V64" stroke={INK} strokeWidth={2.2} />
      <g className="gg-meat o-top">
        <path d="M250 64 Q244 64 244 70 Q244 75 250 75" fill="none" stroke="#7b8790" strokeWidth={2.6} strokeLinecap="round" />
        <circle cx="250" cy="78" r="4" fill={C.cream} {...inked} strokeWidth={1.8} />
        <rect x="247.5" y="78" width="5" height="10" fill={C.cream} stroke={INK} strokeWidth={1.6} />
        <path d="M250 86 Q270 90 268 108 Q266 122 250 122 Q234 122 232 108 Q230 90 250 86Z" fill={MEAT} {...inked} />
        <path d="M240 96 Q250 100 258 94 M238 108 Q248 104 260 110 M246 116 Q252 114 256 117" fill="none" stroke="#f3dcc0" strokeWidth={2} strokeLinecap="round" />
      </g>

      <g transform="translate(250 98)">
        <g className="gg-orbit" style={{ transformOrigin: "0px 0px", transformBox: "view-box" }}>
          <g transform="translate(30 0)">
            <ellipse cx="0" cy="0" rx="2.6" ry="2" fill={INK} />
            <g className="gg-buzz o-bottom">
              <ellipse cx="-1" cy="-3" rx="2" ry="3" fill={C.white} stroke={INK} strokeWidth={.6} opacity=".9" />
              <ellipse cx="1.5" cy="-3" rx="2" ry="3" fill={C.white} stroke={INK} strokeWidth={.6} opacity=".9" />
            </g>
          </g>
        </g>
      </g>

      <g className="gg-stinkwin" style={{ opacity: 0 }} fill="none" stroke={C.olive} strokeWidth={2.4} strokeLinecap="round">
        {[[234, 82, 0], [250, 74, -.5], [266, 82, -1]].map(([x, y, d], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <path className="gg-stink" style={{ animationDelay: `${d}s` }} d="M0 0 q-5 -5 0 -10 q5 -5 0 -10" />
          </g>
        ))}
      </g>

      <g transform="translate(250 123)">
        <g className="gg-spark"><Star8 r={6} fill={C.white} /></g>
      </g>

      <ellipse cx="250" cy="259" rx="22" ry="4" fill="#c4a078" opacity=".6" />
      <g transform="translate(250 258)">
        <g className="gg-jumpwin" style={{ opacity: 0 }}>
          <g className="gg-jump o-bottom"><JumpCat /></g>
        </g>
        <g className="gg-sitwin"><SitCat /></g>
      </g>

      <g transform="translate(222 222)">
        <g className="gg-hmph" style={{ opacity: 0 }}>
          <path d="M0 0 q-4 -2 -8 0 M2 4 q-5 -1 -10 2" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        </g>
      </g>
      <g fontFamily="Vazirmatn" fontWeight={900} fontSize="20" fill={C.pomegranate} stroke={INK} strokeWidth={1} textAnchor="middle">
        <g transform="translate(284 196)"><text className="gg-q" x="0" y="0" style={{ transform: "scale(0)" }}>!</text></g>
        <g transform="translate(284 190)"><text className="gg-q2" x="0" y="0" style={{ transform: "scale(0)" }}>!!</text></g>
      </g>

      {!big && (
        <g transform="translate(196 196)">
          <text className="gg-say" x="0" y="0" textAnchor="middle" fontFamily="Vazirmatn" fontWeight={900} fontSize="14" fill={C.olive} stroke={INK} strokeWidth={.7} direction="rtl">بو می‌ده!</text>
        </g>
      )}
      {big && <Bubble x={232} y={200} w={76} text="بو می‌ده!" flip className="gg-b o-bottom" />}
    </Scene>
  );
}
