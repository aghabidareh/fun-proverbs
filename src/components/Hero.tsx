import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import KohMoosh from "../scenes/KohMoosh";
import { ArchFrame, Eslimi, FlyingCarpet, Star } from "./Ornaments";
import { useInView } from "../lib/util";

export default function Hero({ onOpen }: { onOpen: () => void }) {
  const root = useRef<HTMLElement>(null);
  const [sceneRef, inView] = useInView<HTMLDivElement>();

  useEffect(() => {
    const el = root.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", String(e.clientX / innerWidth - 0.5));
        el.style.setProperty("--my", String(e.clientY / innerHeight - 0.5));
      });
    };
    addEventListener("pointermove", move);
    return () => { removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);

  const px = (depth: number) => ({ transform: `translate(calc(var(--mx,0) * ${depth}px), calc(var(--my,0) * ${depth}px))` });

  return (
    <section id="top" ref={root} className="relative overflow-hidden pb-16 pt-8 sm:pt-14">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-[6%] top-10" style={px(-30)}><Star size={34} className="animate-[float_5s_ease-in-out_infinite]" /></div>
        <div className="absolute left-[10%] top-24" style={px(40)}><Star size={22} fill="#3fb6b0" className="animate-[float_4s_ease-in-out_infinite_.6s]" /></div>
        <div className="absolute bottom-24 right-[44%]" style={px(25)}><Star size={18} fill="#a4243b" className="animate-[float_6s_ease-in-out_infinite_1s]" /></div>
        <div className="absolute -left-6 bottom-10 w-40 opacity-60" style={px(15)}><Eslimi /></div>
        <div className="absolute -right-8 top-1/2 w-36 rotate-180 opacity-50" style={px(-15)}><Eslimi color="#1f3c88" /></div>
      </div>
      <div className="pointer-events-auto absolute top-4 w-28 animate-[carpet-drift_40s_linear_infinite] sm:w-36" style={{ left: 0 }}>
        <FlyingCarpet />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-[1.05fr_1fr]">
        <div className="text-center md:text-right">
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="mb-3 inline-block -rotate-2 rounded-full border-[3px] border-ink bg-firouzeh px-4 py-1 text-sm font-extrabold text-paper shadow-[3px_3px_0_#2b2118]"
          >
            موزه‌ی ضرب‌المثل‌های تحت‌اللفظی
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-5xl leading-[1.25] text-lapis sm:text-6xl lg:text-7xl"
          >
            وقتی ضرب‌المثل‌ها رو{" "}
            <span className="relative inline-block text-pomegranate">
              جدی
              <svg aria-hidden viewBox="0 0 100 12" className="absolute -bottom-1 right-0 w-full" preserveAspectRatio="none">
                <path d="M2 8 Q25 2 50 7 T98 5" fill="none" stroke="#e9a23b" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{" "}
            می‌گیریم...
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
            className="mx-auto mt-5 max-w-md text-lg leading-8 text-ink/80 md:mx-0"
          >
            اگه ضرب‌المثل‌های فارسی رو کلمه‌به‌کلمه اجرا کنیم، دنیا یه جای خیلی عجیب‌تر می‌شه.
            کوه‌ها موش به دنیا میارن،آب توی هاون کوبیده می‌شه و هیچ‌کس شتر رو نمی‌بینه.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <a href="#gallery" className="btn bg-saffron text-lg">بزن بریم! <span aria-hidden>↙</span></a>
            <button onClick={onOpen} className="btn bg-paper">این کوهه چشه؟ 🏔️</button>
          </motion.div>
        </div>

        <motion.div
          ref={sceneRef}
          initial={{ opacity: 0, scale: 0.92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ type: "spring", delay: 0.15 }}
          className="mx-auto w-full max-w-[520px]"
        >
          <ArchFrame className="aspect-[4/4.2]">
            {inView && <KohMoosh playing big />}
          </ArchFrame>
          <p className="mt-6 text-center font-display text-2xl text-terracotta">«کوه موش زایید»</p>
        </motion.div>
      </div>
    </section>
  );
}
