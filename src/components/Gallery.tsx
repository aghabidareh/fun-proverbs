import { Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Proverb } from "../data/proverbs";
import { scenes } from "../scenes";
import { toFa, useInView } from "../lib/util";
import { Star } from "./Ornaments";

const span: Record<Proverb["size"], string> = {
  hero: "sm:col-span-2 lg:col-span-4",
  wide: "sm:col-span-2 lg:col-span-4",
  tall: "lg:col-span-2",
  normal: "lg:col-span-2",
};
const aspect: Record<Proverb["size"], string> = {
  hero: "aspect-[16/10]",
  wide: "aspect-[16/10]",
  tall: "aspect-[4/3.6]",
  normal: "aspect-[4/3]",
};
const frames = [
  "rounded-[2rem_2rem_.6rem_.6rem]",
  "rounded-[50%_50%_.6rem_.6rem/22%_22%_.6rem_.6rem]",
  "rounded-xl",
  "rounded-[.6rem_2.5rem_.6rem_2.5rem]",
];
const tilts = ["lg:-rotate-1", "lg:rotate-1", "lg:rotate-0", "lg:-rotate-[.6deg]", "lg:rotate-[.8deg]"];
const tags = ["#c0603f", "#2a9d8f", "#1f3c88", "#a4243b", "#6b8f4e", "#e9a23b"];

function Card({ p, i, onOpen, headingRef }: { p: Proverb; i: number; onOpen: (p: Proverb) => void; headingRef?: React.Ref<HTMLHeadingElement> }) {
  const [ref, inView] = useInView<HTMLDivElement>("250px");
  const [nearRef, near] = useInView<HTMLDivElement>("1200px");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (inView) setMounted(true);
    else if (!near) setMounted(false);
  }, [inView, near]);
  const Scene = scenes[p.id];
  const big = p.size !== "normal";
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
      className={`group flex flex-col ${span[p.size]} ${tilts[i % tilts.length]} transition-transform duration-300 hover:rotate-0`}
    >
      <div
        ref={ref}
        onClick={() => onOpen(p)}
        className={`relative cursor-pointer overflow-hidden border-[3px] border-ink bg-navy shadow-[6px_6px_0_#2b2118] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[10px_10px_0_#2b2118] ${frames[i % frames.length]} ${aspect[p.size]}`}
        style={{ background: p.sky }}
      >
        <div ref={nearRef} aria-hidden className="pointer-events-none absolute inset-0" />
        {Scene && mounted && (
          <Suspense fallback={null}>
            <Scene playing={inView} big={big} />
          </Suspense>
        )}
        <span
          aria-hidden
          className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full border-[3px] border-ink font-display text-lg text-paper"
          style={{ background: tags[i % tags.length] }}
        >
          {toFa(i + 1)}
        </span>
      </div>
      <div className="relative mt-4 px-1">
        <h3 ref={headingRef} tabIndex={headingRef ? -1 : undefined} className={`font-display leading-snug text-lapis ${big ? "text-3xl" : "text-2xl"}`}>«{p.proverb}»</h3>
        <p className="mt-1.5 leading-7 text-ink/75">{p.explanation}</p>
        <button onClick={() => onOpen(p)} className="btn mt-3 bg-paper py-1.5 text-sm group-hover:bg-saffron">
          ببین چی می‌شه! <span aria-hidden className="transition group-hover:-translate-x-1">←</span>
        </button>
      </div>
    </motion.article>
  );
}

const INITIAL = 17;

function MoreTile({ count, onMore }: { count: number; onMore: () => void }) {
  return (
    <div className="flex sm:col-span-2 lg:col-span-4">
      <button
        onClick={onMore}
        className="group relative flex w-full cursor-pointer flex-col items-center justify-center gap-4 overflow-hidden rounded-[50%_50%_.8rem_.8rem/22%_22%_.8rem_.8rem] border-[3px] border-ink bg-lapis px-6 py-10 text-paper shadow-[6px_6px_0_#2b2118] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#2b2118]"
      >
        <span aria-hidden className="tile-band absolute inset-x-0 top-0 h-4 border-b-[3px] border-ink" />
        <span aria-hidden className="flex items-end gap-1.5">
          {[0, 1, 2].map((k) => (
            <svg key={k} viewBox="0 0 30 22" className="w-10 transition-transform duration-300 group-hover:-translate-y-2" style={{ transitionDelay: `${k * 60}ms` }}>
              <rect x="1.5" y="1.5" width="27" height="19" fill={k === 1 ? "#f3d9a4" : "#faf2e1"} stroke="#2b2118" strokeWidth="2.5" />
              <path d="M1.5 1.5 L15 12 L28.5 1.5" fill="none" stroke="#2b2118" strokeWidth="2" />
            </svg>
          ))}
        </span>
        <span className="font-display text-3xl text-saffron sm:text-4xl">{toFa(count)} ضرب‌المثل دیگه هم هست!</span>
        <span className="max-w-sm text-center leading-7 text-paper/85">هنوز کلی کوه و دیگ و شتر منتظرن که جدی گرفته بشن.</span>
        <span className="btn bg-saffron text-ink">بقیه رو هم نشونم بده 👇</span>
      </button>
    </div>
  );
}

export default function Gallery({ items, onOpen }: { items: Proverb[]; onOpen: (p: Proverb) => void }) {
  const [expanded, setExpanded] = useState(false);
  const firstHidden = useRef<HTMLHeadingElement>(null);
  const shown = expanded ? items : items.slice(0, INITIAL);

  useEffect(() => {
    if (expanded) firstHidden.current?.focus({ preventScroll: true });
  }, [expanded]);

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <div className="mb-12 text-center">
        <div className="mb-3 flex items-center justify-center gap-3" aria-hidden>
          <Star size={20} /><span className="h-[3px] w-16 bg-ink" /><Star size={26} fill="#2a9d8f" /><span className="h-[3px] w-16 bg-ink" /><Star size={20} />
        </div>
        <h2 id="gallery-title" className="font-display text-4xl text-pomegranate sm:text-5xl">تالار ضرب‌المثل‌های جدی‌شده</h2>
        <p className="mx-auto mt-3 max-w-xl leading-8 text-ink/75">
          {toFa(items.length)} ضرب‌المثل که یکی اون‌ها رو زیادی جدی گرفته. روی هر صحنه بزن تا ببینی دقیقاً چی شد.
        </p>
      </div>
      <div className="grid grid-flow-dense grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-6">
        {shown.map((p, i) => (
          <Card key={p.id} p={p} i={i} onOpen={onOpen} headingRef={i === INITIAL ? firstHidden : undefined} />
        ))}
        {!expanded && items.length > INITIAL && <MoreTile count={items.length - INITIAL} onMore={() => setExpanded(true)} />}
      </div>
    </section>
  );
}
