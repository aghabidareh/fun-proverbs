import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { proverbs, type Proverb } from "../data/proverbs";
import { pickOther } from "../lib/util";
import { play } from "../lib/sound";

const INK = "#2b2118";

export default function FortuneParrot({ onPick }: { onPick: (p: Proverb) => void }) {
  const [busy, setBusy] = useState(false);
  const [rolling, setRolling] = useState(proverbs[1].proverb);
  const last = useRef<Proverb | undefined>(undefined);
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const go = () => {
    if (busy) return;
    setBusy(true);
    play("whoosh");
    const chosen = pickOther(proverbs, last.current);
    last.current = chosen;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const steps = reduce ? 1 : 14;
    for (let i = 0; i < steps; i++) {
      const t = 40 * i + i * i * 6;
      timers.current.push(window.setTimeout(() => {
        setRolling(i === steps - 1 ? chosen.proverb : pickOther(proverbs).proverb);
        play("pop");
      }, t));
    }
    timers.current.push(window.setTimeout(() => {
      setBusy(false);
      onPick(chosen);
    }, reduce ? 50 : 40 * steps + steps * steps * 6 + 450));
  };

  return (
    <section aria-labelledby="fal-title" className="relative border-y-[3px] border-ink bg-lapis py-12 text-paper">
      <div aria-hidden className="tile-band absolute inset-x-0 top-0 h-4 border-b-[3px] border-ink" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 md:flex-row-reverse md:justify-between">
        <svg viewBox="0 0 220 180" className="w-56 shrink-0 overflow-visible sm:w-64" aria-hidden>
          <rect x="30" y="110" width="160" height="60" rx="6" fill="#c0603f" stroke={INK} strokeWidth="3" />
          <path d="M30 124 H190" stroke={INK} strokeWidth="2" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i} style={{ animation: busy ? `fal-shuffle .35s ${i * 0.05}s ease-in-out infinite alternate` : undefined }}>
              <rect x={42 + i * 23} y={94 + (i % 2) * 6} width="20" height="28" fill={i % 2 ? "#faf2e1" : "#f3d9a4"} stroke={INK} strokeWidth="2" />
              <path d={`M${42 + i * 23} ${94 + (i % 2) * 6} l10 8 l10 -8`} fill="none" stroke={INK} strokeWidth="1.5" />
            </g>
          ))}
          <text x="110" y="152" textAnchor="middle" fontFamily="Lalezar" fontSize="18" fill="#faf2e1" direction="rtl">فال ضرب‌المثل</text>
          <path d="M150 80 H210" stroke={INK} strokeWidth="5" strokeLinecap="round" />
          <motion.g
            animate={busy ? { x: [0, -60, -60, 0], y: [0, -20, 18, 0], rotate: [0, -15, 25, 0] } : { y: [0, -3, 0] }}
            transition={busy ? { duration: 1.4, times: [0, 0.3, 0.6, 1] } : { duration: 2, repeat: Infinity }}
          >
            <path d="M178 80 q-4 26 10 40 l6 -2 q-6 -16 -2 -38Z" fill="#2a9d8f" stroke={INK} strokeWidth="2.5" />
            <ellipse cx="180" cy="62" rx="16" ry="22" fill="#6b8f4e" stroke={INK} strokeWidth="2.5" />
            <path d="M172 58 q10 6 16 22 q-14 -2 -16 -22Z" fill="#2a9d8f" stroke={INK} strokeWidth="2" />
            <circle cx="176" cy="40" r="13" fill="#e9a23b" stroke={INK} strokeWidth="2.5" />
            <path d="M164 40 q-10 2 -8 10 q4 -2 10 -4Z" fill="#faf2e1" stroke={INK} strokeWidth="2" />
            <circle cx="173" cy="37" r="3" fill="#fff" stroke={INK} strokeWidth="1.2" />
            <circle cx="172.4" cy="37" r="1.5" fill={INK} />
            <path d="M178 28 q4 -10 10 -6 M182 30 q6 -8 10 -2" fill="none" stroke="#a4243b" strokeWidth="3" strokeLinecap="round" />
            {busy && <rect x="148" y="44" width="14" height="18" fill="#faf2e1" stroke={INK} strokeWidth="2" transform="rotate(-20 155 53)" />}
          </motion.g>
          <style>{`@keyframes fal-shuffle { to { transform: translateY(-10px) rotate(6deg) } }`}</style>
        </svg>

        <div className="text-center md:text-right">
          <h2 id="fal-title" className="font-display text-3xl text-saffron sm:text-4xl">طوطی فال‌گیر</h2>
          <p className="mt-2 max-w-md text-paper/85 leading-7">
            حافظ سرش شلوغه. امروز طوطی محله یه ضرب‌المثل برات درمیاره، و ما دقیقاً همون کاری رو می‌کنیم که میگه.
          </p>
          <p
            aria-live="polite"
            className="mx-auto mt-5 min-h-[3.5rem] max-w-md rounded-2xl border-[3px] border-dashed border-saffron/70 px-4 py-3 text-lg font-extrabold md:mx-0"
          >
            {busy ? rolling : "یه پاکت، یه ضرب‌المثل، یه فاجعه‌ی تحت‌اللفظی"}
          </p>
          <button onClick={go} disabled={busy} className="btn mt-5 bg-saffron text-xl text-ink disabled:opacity-80">
            {busy ? "طوطی داره فکر می‌کنه..." : "یه ضرب‌المثل تصادفی بگو! 🦜"}
          </button>
        </div>
      </div>
    </section>
  );
}
