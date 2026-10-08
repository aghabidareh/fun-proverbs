import { createContext, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode, type SVGProps } from "react";

export const INK = "#2b2118";
export const SKIN = "#f1c9a0";
export const C = {
  cream: "#f3e7cf",
  paper: "#faf2e1",
  turquoise: "#2a9d8f",
  firouzeh: "#3fb6b0",
  lapis: "#1f3c88",
  navy: "#14213d",
  terracotta: "#c0603f",
  saffron: "#e9a23b",
  pomegranate: "#a4243b",
  olive: "#6b8f4e",
  sand: "#e3c48f",
  white: "#fffaf0",
};

const stroke = { stroke: INK, strokeWidth: 2.5, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };
export const inked = stroke;

export const SceneFit = createContext<"slice" | "meet">("slice");

export function Scene({ children, title, className = "", ...rest }: { children: ReactNode; title: string } & SVGProps<SVGSVGElement>) {
  const fit = useContext(SceneFit);
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={title} className={`scene block w-full h-full ${className}`} preserveAspectRatio={`xMidYMid ${fit}`} {...rest}>
      <title>{title}</title>
      {children}
    </svg>
  );
}

export function Face({ mood = "calm", blush = true }: { mood?: "calm" | "scared" | "smug" | "shocked" | "sad" | "serious"; blush?: boolean }) {
  const mouth = {
    calm: <path d="M-4 7 Q0 10 4 7" fill="none" {...stroke} strokeWidth={1.8} />,
    serious: <path d="M-4 8 L4 8" fill="none" {...stroke} strokeWidth={1.8} />,
    smug: <path d="M-5 7 Q2 11 6 5" fill="none" {...stroke} strokeWidth={1.8} />,
    sad: <path d="M-4 10 Q0 6 4 10" fill="none" {...stroke} strokeWidth={1.8} />,
    scared: <ellipse cx="0" cy="9" rx="3.5" ry="4.5" fill={INK} />,
    shocked: <ellipse cx="0" cy="9" rx="2.5" ry="3" fill={INK} />,
  }[mood];
  const big = mood === "scared" || mood === "shocked";
  return (
    <g>
      <ellipse cx="0" cy="0" rx="13" ry="15" fill={SKIN} {...stroke} />
      <g style={{ animation: "blink 4s infinite" }}>
        <path d={big ? "M-9 -1 Q-5 -6 -1 -1 Q-5 3 -9 -1Z" : "M-9 -1 Q-5 -4 -1 -1 Q-5 1 -9 -1Z"} fill={C.white} stroke={INK} strokeWidth={1.2} />
        <path d={big ? "M1 -1 Q5 -6 9 -1 Q5 3 1 -1Z" : "M1 -1 Q5 -4 9 -1 Q5 1 1 -1Z"} fill={C.white} stroke={INK} strokeWidth={1.2} />
        <circle cx="-5" cy="-1" r={big ? 1.2 : 1.6} fill={INK} />
        <circle cx="5" cy="-1" r={big ? 1.2 : 1.6} fill={INK} />
      </g>
      <path d={mood === "serious" ? "M-10 -6 L-2 -4 M2 -4 L10 -6" : "M-10 -5 Q-5 -9 -1 -5 M1 -5 Q5 -9 10 -5"} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      <path d="M0 -1 Q-2 4 1 5" fill="none" stroke={INK} strokeWidth={1.2} />
      {blush && <><circle cx="-8" cy="5" r="2.6" fill="#e58a7a" opacity=".55" /><circle cx="8" cy="5" r="2.6" fill="#e58a7a" opacity=".55" /></>}
      {mouth}
    </g>
  );
}

export function Turban({ color = C.white, kind = "turban" }: { color?: string; kind?: "turban" | "kolah" | "scarf" }) {
  if (kind === "kolah")
    return <path d="M-12 -10 L-8 -34 Q0 -40 8 -34 L12 -10 Q0 -14 -12 -10Z" fill={color} {...stroke} />;
  if (kind === "scarf")
    return <path d="M-16 6 Q-18 -20 0 -20 Q18 -20 16 6 Q14 -10 0 -13 Q-14 -10 -16 6Z" fill={color} {...stroke} />;
  return (
    <g>
      <ellipse cx="0" cy="-14" rx="16" ry="9" fill={color} {...stroke} />
      <path d="M-14 -12 Q0 -6 14 -16 M-15 -17 Q0 -11 13 -21" fill="none" stroke={INK} strokeWidth={1.4} />
      <circle cx="0" cy="-21" r="3" fill={C.pomegranate} {...stroke} strokeWidth={1.5} />
    </g>
  );
}

export function Person({
  robe = C.turquoise,
  sash = C.saffron,
  hat = C.white,
  hatKind = "turban",
  mood = "calm",
  armL = 15,
  armR = -15,
  armLClass,
  armRClass,
  headClass,
  beard = false,
  children,
}: {
  robe?: string; sash?: string; hat?: string; hatKind?: "turban" | "kolah" | "scarf" | "none";
  mood?: Parameters<typeof Face>[0]["mood"]; armL?: number; armR?: number;
  armLClass?: string; armRClass?: string; headClass?: string; beard?: boolean; children?: ReactNode;
}) {
  return (
    <g>
      <path d="M-14 0 Q-14 -6 -6 -6 L-4 0Z M4 0 L6 -6 Q14 -6 14 0Z" fill={C.pomegranate} {...stroke} strokeWidth={2} />
      <path d="M-22 -4 Q-20 -40 -12 -58 L12 -58 Q20 -40 22 -4 Q0 2 -22 -4Z" fill={robe} {...stroke} />
      <g fill={C.cream} opacity=".7">
        <circle cx="-10" cy="-20" r="1.8" /><circle cx="2" cy="-30" r="1.8" /><circle cx="10" cy="-14" r="1.8" /><circle cx="-4" cy="-10" r="1.8" />
      </g>
      <path d="M-15 -42 Q0 -38 15 -42 L15 -36 Q0 -32 -15 -36Z" fill={sash} {...stroke} strokeWidth={2} />
      <g className={armLClass} style={{ transformOrigin: "-12px -54px", transformBox: "view-box" }} transform={`rotate(${armL})`}>
        <path d="M-12 -54 Q-18 -40 -16 -28" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
        <path d="M-12 -54 Q-18 -40 -16 -28" fill="none" stroke={robe} strokeWidth={5.5} strokeLinecap="round" />
        <circle cx="-16" cy="-26" r="4.5" fill={SKIN} {...stroke} strokeWidth={2} />
      </g>
      <g className={armRClass} style={{ transformOrigin: "12px -54px", transformBox: "view-box" }} transform={`rotate(${armR})`}>
        <path d="M12 -54 Q18 -40 16 -28" fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
        <path d="M12 -54 Q18 -40 16 -28" fill="none" stroke={robe} strokeWidth={5.5} strokeLinecap="round" />
        <circle cx="16" cy="-26" r="4.5" fill={SKIN} {...stroke} strokeWidth={2} />
      </g>
      <g className={headClass} transform="translate(0 -74)">
        {beard && <path d="M-11 4 Q-12 20 0 24 Q12 20 11 4 Q0 12 -11 4Z" fill={INK} />}
        <Face mood={mood} />
        {hatKind !== "none" && <Turban color={hat} kind={hatKind} />}
      </g>
      {children}
    </g>
  );
}

export function Mouse({ scale = 1, className, style }: { scale?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <g transform={`scale(${scale})`}>
      <g className={className} style={style}>
        <path d="M8 -3 Q20 -2 22 -10" fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
        <ellipse cx="0" cy="-6" rx="10" ry="6.5" fill="#9a8f86" {...stroke} strokeWidth={1.6} />
        <circle cx="-6" cy="-12" r="3.6" fill="#c9a9a0" {...stroke} strokeWidth={1.4} />
        <circle cx="-10" cy="-6" r="1.2" fill={INK} />
        <circle cx="-15.5" cy="-4.5" r="1.3" fill="#e58a7a" />
      </g>
    </g>
  );
}

export function Cloud({ x = 0, y = 0, s = 1, fill = C.white, className, style }: { x?: number; y?: number; s?: number; fill?: string; className?: string; style?: React.CSSProperties }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className={className} style={style}>
        <path d="M0 0 Q-4 -14 10 -14 Q14 -26 28 -20 Q38 -30 48 -18 Q62 -18 58 0Z" fill={fill} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
        <path d="M14 -8 q4 -4 8 0 M34 -10 q4 -4 8 0" fill="none" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />
      </g>
    </g>
  );
}

export function Ground({ y = 255, color = C.sand }: { y?: number; color?: string }) {
  return (
    <g>
      <rect x="-10" y={y} width="420" height={310 - y} fill={color} stroke={INK} strokeWidth={2.5} />
      <path d={`M-10 ${y + 8} H410`} stroke={INK} strokeWidth={1} strokeDasharray="2 6" opacity=".5" />
    </g>
  );
}

export function Star8({ x = 0, y = 0, r = 10, fill = C.saffron, className, style }: { x?: number; y?: number; r?: number; fill?: string; className?: string; style?: React.CSSProperties }) {
  const pts = Array.from({ length: 16 }, (_, i) => {
    const a = (i * Math.PI) / 8;
    const rr = i % 2 ? r * 0.55 : r;
    return `${(Math.cos(a) * rr).toFixed(1)},${(Math.sin(a) * rr).toFixed(1)}`;
  }).join(" ");
  return (
    <g transform={`translate(${x} ${y})`}>
      <polygon points={pts} fill={fill} stroke={INK} strokeWidth={1.5} className={className} style={style} />
    </g>
  );
}

const BUBBLE_FONT = 13;
const BUBBLE_LINE = 17;
const BUBBLE_MAX_LINE = 210;
const CANVAS = { w: 400, h: 300, pad: 5 };
let measureCtx: CanvasRenderingContext2D | null = null;

function textWidth(s: string) {
  if (typeof document === "undefined") return s.length * 7.4;
  measureCtx ??= document.createElement("canvas").getContext("2d");
  if (!measureCtx) return s.length * 7.4;
  measureCtx.font = `800 ${BUBBLE_FONT}px Vazirmatn, sans-serif`;
  return measureCtx.measureText(s).width;
}

function wrap(text: string) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let cur = "";
  for (const word of words) {
    const next = cur ? `${cur} ${word}` : word;
    if (cur && textWidth(next) > BUBBLE_MAX_LINE) { lines.push(cur); cur = word; }
    else cur = next;
  }
  if (cur) lines.push(cur);
  return lines.length ? lines : [text];
}

function placementMatrix(el: SVGGraphicsElement | null) {
  let m = new DOMMatrix();
  let n: Element | null = el;
  while (n && n.tagName.toLowerCase() !== "svg") {
    const t = (n as SVGGraphicsElement).transform?.baseVal;
    if (t && t.numberOfItems) {
      const c = t.consolidate();
      if (c) m = new DOMMatrix([c.matrix.a, c.matrix.b, c.matrix.c, c.matrix.d, c.matrix.e, c.matrix.f]).multiply(m);
    }
    n = n.parentElement;
  }
  return m;
}

type BubbleLayout = { lines: string[]; W: number; H: number; left: number; top: number; below: boolean; tail: number };
type Region = { x0: number; y0: number; x1: number; y1: number };
const FULL: Region = { x0: 0, y0: 0, x1: CANVAS.w, y1: CANVAS.h };

function visibleRegion(svg: SVGSVGElement | null | undefined): Region {
  if (!svg) return FULL;
  const { width, height } = svg.getBoundingClientRect();
  if (!width || !height) return FULL;
  const slice = (svg.getAttribute("preserveAspectRatio") ?? "").includes("slice");
  const k = slice ? Math.max(width / CANVAS.w, height / CANVAS.h) : Math.min(width / CANVAS.w, height / CANVAS.h);
  const vw = Math.min(CANVAS.w, width / k), vh = Math.min(CANVAS.h, height / k);
  const x0 = (CANVAS.w - vw) / 2, y0 = (CANVAS.h - vh) / 2;
  return { x0, y0, x1: x0 + vw, y1: y0 + vh };
}

function layoutBubble(text: string, w: number, flip: boolean, anchor: { x: number; y: number }, s: number, R: Region): BubbleLayout {
  const lines = wrap(text);
  const W = Math.max(w, Math.max(...lines.map(textWidth)) + 22);
  const H = lines.length * BUBBLE_LINE + 13;
  const P = CANVAS.pad / s;
  const minX = (R.x0 - anchor.x) / s + P, maxX = (R.x1 - anchor.x) / s - P;
  const minY = (R.y0 - anchor.y) / s + P, maxY = (R.y1 - anchor.y) / s - P;
  let left = flip ? -W + 14 : -14;
  left = Math.min(Math.max(left, minX), maxX - W);
  let top = -10 - H;
  let below = false;
  if (top < minY) {
    below = true;
    top = 10;
    if (top + H > maxY) top = Math.max(minY, maxY - H);
  }
  const tail = Math.min(Math.max(0, left + 12), left + W - 12);
  return { lines, W, H, left, top, below, tail };
}

export function Bubble({ x, y, w = 90, text, flip = false, className, style }: { x: number; y: number; w?: number; text: string; flip?: boolean; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<SVGGElement>(null);
  const [frame, setFrame] = useState({ ax: x, ay: y, s: 1 });
  const [region, setRegion] = useState<Region>(FULL);
  const [fontTick, setFontTick] = useState(0);

  useLayoutEffect(() => {
    const parent = ref.current?.parentElement as SVGGraphicsElement | null;
    const m = placementMatrix(parent);
    const p = m.transformPoint(new DOMPoint(x, y));
    const s = Math.hypot(m.a, m.b) || 1;
    setFrame((f) => (f.ax === p.x && f.ay === p.y && f.s === s ? f : { ax: p.x, ay: p.y, s }));
  }, [x, y]);

  useLayoutEffect(() => {
    const svg = ref.current?.ownerSVGElement;
    if (!svg) return;
    const update = () => {
      const r = visibleRegion(svg);
      setRegion((o) => (o.x0 === r.x0 && o.y0 === r.y0 && o.x1 === r.x1 && o.y1 === r.y1 ? o : r));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(svg);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let alive = true;
    document.fonts?.ready.then(() => alive && setFontTick((t) => t + 1));
    return () => { alive = false; };
  }, []);

  const L = useMemo(
    () => layoutBubble(text, w, flip, { x: frame.ax, y: frame.ay }, frame.s, region),
    [text, w, flip, frame, region, fontTick],
  );
  const { left, top, W, H, below, tail } = L;
  const r = 3;
  const base = Math.min(Math.max(tail, left + r + 6), left + W - r - 6);
  const d = below
    ? `M${left + r} ${top} H${base - 6} L0 0 L${base + 6} ${top} H${left + W - r} Q${left + W} ${top} ${left + W} ${top + r} V${top + H - r} Q${left + W} ${top + H} ${left + W - r} ${top + H} H${left + r} Q${left} ${top + H} ${left} ${top + H - r} V${top + r} Q${left} ${top} ${left + r} ${top}Z`
    : `M${left + r} ${top} H${left + W - r} Q${left + W} ${top} ${left + W} ${top + r} V${top + H - r} Q${left + W} ${top + H} ${left + W - r} ${top + H} H${base + 6} L0 0 L${base - 6} ${top + H} H${left + r} Q${left} ${top + H} ${left} ${top + H - r} V${top + r} Q${left} ${top} ${left + r} ${top}Z`;

  return (
    <g ref={ref} transform={`translate(${x} ${y})`}>
      <g className={className} style={style}>
        <path d={d} fill={C.white} {...stroke} strokeWidth={2} />
        <text x={left + W / 2} y={top + 6.5 + BUBBLE_LINE * 0.78} textAnchor="middle" fontFamily="Vazirmatn" fontWeight={800} fontSize={BUBBLE_FONT} fill={INK} direction="rtl">
          {L.lines.map((line, i) => (
            <tspan key={i} x={left + W / 2} dy={i ? BUBBLE_LINE : 0}>{line}</tspan>
          ))}
        </text>
      </g>
    </g>
  );
}
