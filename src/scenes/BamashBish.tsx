import { Scene, Person, Cloud, Ground, Bubble, C, INK, inked } from "./parts";
import type { SceneProps } from "./types";

const SNOW = "#f7fbff";

const css = `
.bb-shovel{transform-box:view-box;transform-origin:0 0;animation:bb-shovel 7s ease-in-out infinite}
@keyframes bb-shovel{0%,100%{transform:rotate(0)}5%{transform:rotate(-55deg)}9%{transform:rotate(10deg)}16%{transform:rotate(0)}21%{transform:rotate(-55deg)}25%{transform:rotate(10deg)}32%,44%{transform:rotate(0)}48%,70%{transform:rotate(-20deg)}80%{transform:rotate(0)}88%{transform:rotate(-55deg)}92%{transform:rotate(10deg)}}
.bb-fling{animation:bb-fling 7s ease-out infinite}
@keyframes bb-fling{0%,4%{opacity:0;transform:translate(0,0)}6%{opacity:1;transform:translate(0,0)}11%{opacity:1;transform:translate(26px,-16px)}18%{opacity:0;transform:translate(40px,40px)}20%{opacity:0;transform:translate(0,0)}22%{opacity:1;transform:translate(0,0)}27%{opacity:1;transform:translate(26px,-16px)}34%,100%{opacity:0;transform:translate(40px,40px)}}
.bb-cloud{animation:bb-cloud 7s ease-in-out infinite}
@keyframes bb-cloud{0%,30%,100%{transform:scale(1)}36%{transform:scale(1.12,.9)}40%{transform:scale(.92,1.1)}44%{transform:scale(1)}}
.bb-blob{animation:bb-blob 7s cubic-bezier(.55,0,1,.45) infinite}
@keyframes bb-blob{0%,37%{opacity:0;transform:translateY(-46px) scale(.3)}40%{opacity:1;transform:translateY(-40px) scale(.9)}46%{opacity:1;transform:translateY(0) scale(1)}49%{opacity:0;transform:translateY(4px) scale(1.4,.4)}100%{opacity:0;transform:translateY(4px) scale(1.4,.4)}}
.bb-pile{transform-origin:50% 100%;animation:bb-pile 7s ease-out infinite}
@keyframes bb-pile{0%,45%{transform:scale(1)}48%{transform:scale(1.3,3.4)}52%,84%{transform:scale(1.22,3)}96%,100%{transform:scale(1)}}
.bb-owner{animation:bb-owner 7s ease-in-out infinite}
@keyframes bb-owner{0%,45%{transform:translateY(0)}48%,66%{transform:translateY(12px)}70%,76%{transform:translateY(5px)}86%,100%{transform:translateY(0)}}
.bb-tower{transform-origin:50% 100%;animation:bb-tower 7s infinite}
@keyframes bb-tower{0%,45%,56%,100%{transform:rotate(0)}47%{transform:rotate(-1.2deg)}49%{transform:rotate(1deg)}51%{transform:rotate(-.6deg)}53%{transform:rotate(.3deg)}}
.bb-slide{animation:bb-slide 7s ease-in infinite}
@keyframes bb-slide{0%,46%{opacity:1;transform:translateY(0)}64%{opacity:1;transform:translateY(150px)}66%,92%{opacity:0;transform:translateY(150px)}100%{opacity:1;transform:translateY(0)}}
.bb-steam{animation:rise 2.4s ease-out infinite}
.bb-dots{animation:bb-dots 7s infinite}
@keyframes bb-dots{0%,52%{opacity:0}56%,68%{opacity:1}70%,100%{opacity:0}}
`;

function House({ x, w, top, color, cap = 5 }: { x: number; w: number; top: number; color: string; cap?: number }) {
  return (
    <g>
      <rect x={x} y={top} width={w} height={255 - top} fill={color} {...inked} />
      <rect x={x - 3} y={top - 5} width={w + 6} height={6} fill={C.terracotta} {...inked} strokeWidth={2} />
      <path d={`M${x - 5} ${top - 4} Q${x + w * 0.25} ${top - 4 - cap} ${x + w / 2} ${top - 4 - cap * 0.7} Q${x + w * 0.75} ${top - 4 - cap} ${x + w + 5} ${top - 4}Z`} fill={SNOW} {...inked} strokeWidth={2} />
      <path d={`M${x + w / 2 - 8} 255 V${243} Q${x + w / 2} ${233} ${x + w / 2 + 8} 243 V255Z`} fill={C.lapis} {...inked} strokeWidth={2} />
      <path d={`M${x + w / 2 - 6} ${top + 26} V${top + 18} Q${x + w / 2} ${top + 10} ${x + w / 2 + 6} ${top + 18} V${top + 26}Z`} fill={C.firouzeh} {...inked} strokeWidth={1.8} />
    </g>
  );
}

const flakes = [
  [46, 0, 6], [92, 2.2, 7], [140, 4, 6.5], [186, 1, 7.5], [222, 3.3, 6], [336, 0.6, 7], [358, 2.8, 6.4], [110, 5, 7.2], [64, 3.8, 6.8], [200, 5.6, 6.2], [350, 4.6, 7.4],
];

export default function BamashBish({ playing = true, big = false }: SceneProps) {
  const rows = [112, 138, 164, 190, 216];
  return (
    <Scene title="هر که بامش بیش، برفش بیشتر" className={playing ? "" : "paused"}>
      <style>{css}</style>
      <rect x="-10" y="-10" width="420" height="320" fill="#9fb7d1" />
      <path d="M-10 200 L50 150 L90 175 L150 120 L210 180 L260 140 L330 190 L410 150 V260 H-10Z" fill="#c7d6e6" stroke={INK} strokeWidth={2} strokeLinejoin="round" opacity=".8" />
      <path d="M134 134 L150 120 L166 136 L156 132 L150 138 L144 132Z M248 150 L260 140 L274 152 L262 148Z" fill={SNOW} />
      <Cloud x={40} y={60} s={0.8} />
      <Cloud x={130} y={44} s={0.6} />

      <Ground y={255} color="#eef4f8" />

      <House x={42} w={52} top={228} color={C.sand} cap={4} />
      <House x={100} w={54} top={205} color="#e8b98a" cap={5} />
      <House x={160} w={56} top={174} color={C.sand} cap={6} />

      <g className="bb-tower">
        <rect x="240" y="92" width="70" height="163" fill="#e8b98a" {...inked} />
        <path d="M240 140 H310 M240 200 H310" stroke={C.terracotta} strokeWidth={4} />
        <path d="M240 140 H310 M240 200 H310" stroke={INK} strokeWidth={1} strokeDasharray="4 4" />
        {rows.map((y) => (
          <g key={y}>
            <path d={`M252 ${y + 14} V${y + 6} Q258 ${y - 2} 264 ${y + 6} V${y + 14}Z`} fill={C.firouzeh} {...inked} strokeWidth={1.8} />
            <path d={`M286 ${y + 14} V${y + 6} Q292 ${y - 2} 298 ${y + 6} V${y + 14}Z`} fill={C.firouzeh} {...inked} strokeWidth={1.8} />
          </g>
        ))}
        <path d="M267 255 V240 Q275 230 283 240 V255Z" fill={C.lapis} {...inked} strokeWidth={2} />
        <rect x="237" y="87" width="76" height="6" fill={C.terracotta} {...inked} strokeWidth={2} />
        <g className="bb-slide"><path d="M232 92 Q236 82 244 88 Q246 98 238 100 Q230 99 232 92Z" fill={SNOW} {...inked} strokeWidth={1.8} /></g>
        <g className="bb-slide" style={{ animationDelay: ".15s" }}><path d="M318 92 Q314 82 306 88 Q304 98 312 100 Q320 99 318 92Z" fill={SNOW} {...inked} strokeWidth={1.8} /></g>

        <g transform="translate(270 87)">
          <g className="bb-owner">
            <g transform="scale(.34)">
              <Person robe={C.pomegranate} sash={C.saffron} hat={C.cream} hatKind="kolah" mood="serious" armL={20} armR={-40} beard />
              <g transform="translate(28.7 -34)">
                <g className="bb-shovel">
                  <path d="M0 0 L22 38" stroke="#7a4b2a" strokeWidth={6} strokeLinecap="round" />
                  <path d="M0 0 L22 38" stroke={INK} strokeWidth={1.5} strokeLinecap="round" fill="none" opacity=".4" />
                  <path d="M14 38 L34 32 L40 52 L22 58Z" fill="#9aa5ad" stroke={INK} strokeWidth={4} strokeLinejoin="round" />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g transform="translate(286 76)">
          <circle className="bb-fling" r="3.5" fill={SNOW} stroke={INK} strokeWidth={1.2} />
          <circle className="bb-fling" r="2.5" cx="5" cy="3" fill={SNOW} stroke={INK} strokeWidth={1.2} style={{ animationDelay: ".1s" }} />
        </g>

        <g transform="translate(275 88)">
          <path className="bb-pile" d="M-40 0 Q-34 -10 -16 -9 Q0 -14 16 -9 Q34 -10 40 0Z" fill={SNOW} stroke={INK} strokeWidth={2} vectorEffect="non-scaling-stroke" />
        </g>
        <g className="bb-dots" fill={INK}>
          <circle cx="216" cy="70" r="2" /><circle cx="224" cy="70" r="2" /><circle cx="232" cy="70" r="2" />
        </g>
        <g transform="translate(276 72)">
          <path className="bb-blob" d="M-30 6 Q-34 -14 -16 -16 Q-12 -30 4 -26 Q20 -32 26 -16 Q38 -10 30 6 Q0 14 -30 6Z" fill={SNOW} {...inked} />
        </g>
      </g>

      <Cloud x={244} y={52} s={1.05} fill="#7d8894" className="bb-cloud" />

      {flakes.map(([x, d, t], i) => (
        <circle key={i} cx={x} cy={12} r={i % 3 ? 2 : 2.8} fill={SNOW} stroke={INK} strokeWidth={0.8} style={{ animation: `fall ${t}s linear ${d}s infinite` }} />
      ))}

      <g transform="translate(128 268) scale(.42)">
        <Person robe={C.turquoise} hatKind="turban" mood="smug" armL={10} armR={-120} />
        <g transform="translate(32 -66)">
          <path d="M-5 -10 L5 -10 L4 4 L-4 4Z" fill="#c0603f" stroke={INK} strokeWidth={3} />
          <path className="bb-steam" d="M0 -14 q-4 -6 0 -12 q4 -6 0 -12" fill="none" stroke={C.white} strokeWidth={3} strokeLinecap="round" />
        </g>
      </g>

      {big && <Bubble x={240} y={78} w={86} text="از ۱۴۰۲!" flip />}
    </Scene>
  );
}
