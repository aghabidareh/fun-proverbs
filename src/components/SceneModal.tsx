import { Suspense, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Proverb } from "../data/proverbs";
import { scenes } from "../scenes";
import { play } from "../lib/sound";
import { SceneFit } from "../scenes/parts";

const silly = [
  "باشه، جدی نگرفتیم. ولی صحنه هم دیگه تو رو جدی نمی‌گیره.",
  "اعلام می‌شود: این ضرب‌المثل از این لحظه رسماً شوخیه.",
  "خب حالا که جدی نیست، یه دور دیگه نگاش کن 🙃",
];

export default function SceneModal({ proverb, onClose, onRandom }: { proverb: Proverb | null; onClose: () => void; onRandom: () => void }) {
  const dialog = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const [notSerious, setNotSerious] = useState(0);

  useEffect(() => setNotSerious(0), [proverb?.id]);

  useEffect(() => {
    if (!proverb) return;
    const prev = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !dialog.current) return;
      const f = dialog.current.querySelectorAll<HTMLElement>("button, a[href]");
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    addEventListener("keydown", onKey);
    return () => {
      removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prev?.focus?.();
    };
  }, [!!proverb]);

  const Scene = proverb ? scenes[proverb.id] : null;

  return (
    <AnimatePresence>
      {proverb && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-navy/70 p-0 backdrop-blur-[2px] sm:items-center sm:p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 60, scale: 0.94, rotate: -1.5 }} animate={{ y: 0, scale: 1, rotate: 0 }} exit={{ y: 40, scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="paper relative max-h-[94dvh] w-full max-w-4xl overflow-y-auto rounded-t-[2rem] border-[3px] border-ink shadow-[10px_10px_0_#2b2118] sm:rounded-[2rem]"
          >
            <div aria-hidden className="tile-band h-4 border-b-[3px] border-ink" />
            <button
              ref={closeBtn}
              onClick={onClose}
              aria-label="بستن"
              className="absolute left-4 top-6 z-10 grid h-11 w-11 cursor-pointer place-items-center rounded-full border-[3px] border-ink bg-paper text-xl font-black shadow-[3px_3px_0_#2b2118] transition hover:rotate-90 hover:bg-saffron"
            >
              ✕
            </button>

            <div className="p-4 pt-[4.25rem] sm:p-7 sm:pt-[4.5rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={proverb.id}
                  initial={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
                  animate={{ opacity: 1, clipPath: "circle(150% at 50% 50%)" }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45 }}
                >
                  <div
                    className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-[1.4rem] border-[3px] border-ink"
                    style={{
                      maxWidth: "max(16rem, calc((100dvh - 13rem) * 4 / 3))",
                      background: proverb.sky,
                      animation: notSerious ? "modal-silly 1.6s ease-in-out" : undefined,
                    }}
                    key={notSerious}
                  >
                    {Scene && (
                      <SceneFit.Provider value="meet">
                        <Suspense fallback={null}>
                          <Scene playing big />
                        </Suspense>
                      </SceneFit.Provider>
                    )}
                  </div>

                  <h2 id="modal-title" className="mt-6 font-display text-3xl leading-snug text-lapis sm:text-4xl">«{proverb.proverb}»</h2>

                  <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border-[3px] border-ink bg-paper p-4">
                      <dt className="mb-1 text-sm font-extrabold text-turquoise">🧐 معنی واقعی</dt>
                      <dd className="leading-7">{proverb.explanation}</dd>
                    </div>
                    <div className="rounded-2xl border-[3px] border-ink bg-saffron/25 p-4">
                      <dt className="mb-1 text-sm font-extrabold text-terracotta">🎬 اگه جدی بگیریمش</dt>
                      <dd className="leading-7">{proverb.literal}</dd>
                    </div>
                  </dl>
                  <p className="mt-4 rounded-2xl border-[3px] border-dashed border-ink/60 p-4 text-lg font-bold leading-8 text-pomegranate">
                    {notSerious ? silly[(notSerious - 1) % silly.length] : proverb.joke}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={onRandom} className="btn bg-saffron text-lg">یکی دیگه! 🎲</button>
                <button onClick={() => { setNotSerious((n) => n + 1); play("pop"); }} className="btn bg-paper">
                  این ضرب‌المثل رو جدی نگیر 😄
                </button>
              </div>
            </div>
            <style>{`@keyframes modal-silly { 0% { transform: none } 20% { transform: rotate(-8deg) scale(.9) } 45% { transform: rotate(185deg) scale(.8) } 70% { transform: rotate(350deg) scale(1.05) } 100% { transform: rotate(360deg) } }`}</style>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
