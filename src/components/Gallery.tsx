import { Suspense, useEffect, useState } from "react";
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

function Card({ p, i, onOpen }: { p: Proverb; i: number; onOpen: (p: Proverb) => void }) {
  const [ref, inView] = useInView<HTMLDivElement>("300px");
  const [seen, setSeen] = useState(false);
  useEffect(() => { if (inView) setSeen(true); }, [inView]);
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
        {Scene && seen && (
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
        <h3 className={`font-display leading-snug text-lapis ${big ? "text-3xl" : "text-2xl"}`}>«{p.proverb}»</h3>
        <p className="mt-1.5 leading-7 text-ink/75">{p.explanation}</p>
        <button onClick={() => onOpen(p)} className="btn mt-3 bg-paper py-1.5 text-sm group-hover:bg-saffron">
          ببین چی می‌شه! <span aria-hidden className="transition group-hover:-translate-x-1">←</span>
        </button>
      </div>
    </motion.article>
  );
}

export default function Gallery({ items, onOpen }: { items: Proverb[]; onOpen: (p: Proverb) => void }) {
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
        {items.map((p, i) => <Card key={p.id} p={p} i={i} onOpen={onOpen} />)}
      </div>
    </section>
  );
}
