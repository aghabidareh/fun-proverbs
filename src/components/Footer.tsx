import { useState } from "react";
import { DONATE_URL } from "./Donate";
import { play } from "../lib/sound";
import { toFa } from "../lib/util";

const INK = "#2b2118";

function TinyCat() {
  const [pets, setPets] = useState(0);
  const lines = ["میو؟", "میـــو!", "من فقط یه گربه‌ام، حجله کجا بود؟", "بسه دیگه 😾", "باشه، یه بار دیگه 😸"];
  return (
    <div className="pointer-events-none absolute -top-[46px] h-12 w-full overflow-hidden" aria-hidden={false}>
      <div className="absolute bottom-0 left-0 animate-[cat-walk_26s_linear_infinite]" style={{ animationPlayState: pets % 2 ? "paused" : undefined }}>
        <button
          onClick={() => { setPets((n) => n + 1); play("meow"); }}
          aria-label="یه گربه‌ی کوچولو. نازش کن!"
          className="pointer-events-auto relative cursor-pointer bg-transparent"
        >
          {pets > 0 && (
            <span key={pets} className="absolute -top-9 left-1/2 -translate-x-1/2 animate-[pop_.3s_ease-out] whitespace-nowrap rounded-full border-2 border-ink bg-paper px-2 py-0.5 text-xs font-bold">
              {lines[(pets - 1) % lines.length]}
            </span>
          )}
          <svg viewBox="0 0 60 40" className="w-14" style={{ animation: pets ? "bob .5s ease-in-out 3" : undefined }}>
            <path d="M48 22 q12 -4 8 -16" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" style={{ animation: "wiggle 1s ease-in-out infinite", transformOrigin: "48px 22px", transformBox: "view-box" }} />
            <ellipse cx="34" cy="26" rx="16" ry="9" fill="#e9a23b" stroke={INK} strokeWidth="2.5" />
            <path d="M24 34 v5 M30 35 v5 M40 35 v5 M45 33 v5" stroke={INK} strokeWidth="3" strokeLinecap="round" />
            <circle cx="16" cy="18" r="10" fill="#e9a23b" stroke={INK} strokeWidth="2.5" />
            <path d="M8 11 L9 2 L15 9Z M17 9 L23 2 L24 11Z" fill="#e9a23b" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
            <circle cx="12" cy="18" r="1.6" fill={INK} /><circle cx="19" cy="18" r="1.6" fill={INK} />
            <path d="M14 22 q1.5 1.5 3 0" fill="none" stroke={INK} strokeWidth="1.3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-12 bg-navy text-paper">
      <TinyCat />
      <div aria-hidden className="tile-band h-5 border-y-[3px] border-ink" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center">
        <p className="font-display text-2xl text-saffron">جدی‌نامه</p>
        <p className="max-w-xl leading-8 text-paper/85">
          ساخته شده با عشق، کد، و چندتا ضرب‌المثل که زیادی جدی گرفته شدن.
        </p>
        <p className="text-sm text-paper/60">
          اگه دوست داشتی،{" "}
          <a href={DONATE_URL} target="_blank" rel="noopener noreferrer" className="underline decoration-saffron decoration-2 underline-offset-4 hover:text-saffron">
            یه قهوه مهمونم کن ☕
          </a>
        </p>
        <p className="text-xs text-paper/40">© {toFa(1405)} — هیچ کوهی در فرآیند توسعه این محصول آسیب ندید.</p>
      </div>
    </footer>
  );
}
