import { useCallback, useState } from "react";
import { proverbs, type Proverb } from "./data/proverbs";
import { pickOther } from "./lib/util";
import { play } from "./lib/sound";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FortuneParrot from "./components/FortuneParrot";
import Gallery from "./components/Gallery";
import SceneModal from "./components/SceneModal";
import About from "./components/About";
import Donate from "./components/Donate";
import Footer from "./components/Footer";

export default function App() {
  const [open, setOpen] = useState<Proverb | null>(null);

  const show = useCallback((p: Proverb) => {
    play(p.sound);
    setOpen(p);
  }, []);
  const random = useCallback(() => show(pickOther(proverbs, open ?? undefined)), [open, show]);

  return (
    <div className="paper min-h-screen">
      <a href="#gallery" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:right-2 z-50 bg-paper p-2 rounded">
        پرش به ضرب‌المثل‌ها
      </a>
      <Header onRandom={random} />
      <main>
        <Hero onOpen={() => show(proverbs[0])} />
        <FortuneParrot onPick={show} />
        <Gallery items={proverbs} onOpen={show} />
        <About />
        <Donate />
      </main>
      <Footer />
      <SceneModal proverb={open} onClose={() => setOpen(null)} onRandom={random} />
    </div>
  );
}
