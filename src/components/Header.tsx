import { setSound } from "../lib/sound";
import { useSound } from "../lib/util";

export default function Header({ onRandom }: { onRandom: () => void }) {
  const sound = useSound();
  return (
    <header className="sticky top-0 z-30 border-b-[3px] border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5">
        <a href="#top" className="flex items-center gap-2 font-display text-xl text-lapis sm:text-2xl" aria-label="صفحه‌ی اول">
          <span aria-hidden className="grid h-9 w-9 place-items-center rounded-full border-[3px] border-ink bg-saffron text-lg">🐭</span>
          <span className="leading-none">جدی‌نامه</span>
        </a>
        <nav aria-label="منوی اصلی" className="ms-auto flex items-center gap-1 text-sm font-bold sm:gap-3 sm:text-base">
          <a className="rounded-full px-2 py-1 hover:bg-cream sm:px-3" href="#gallery">ضرب‌المثل‌ها</a>
          <button className="rounded-full px-2 py-1 hover:bg-cream sm:px-3 cursor-pointer" onClick={onRandom}>تصادفی 🎲</button>
          <a className="hidden rounded-full px-3 py-1 hover:bg-cream sm:inline" href="#about">درباره‌ی پروژه</a>
          <button
            onClick={() => setSound(!sound)}
            aria-pressed={sound}
            aria-label={sound ? "خاموش کردن صدا" : "روشن کردن صدا"}
            title={sound ? "صدا روشنه" : "صدا خاموشه"}
            className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border-[3px] border-ink bg-cream text-base transition hover:rotate-12"
          >
            {sound ? "🔊" : "🔇"}
          </button>
        </nav>
      </div>
    </header>
  );
}
