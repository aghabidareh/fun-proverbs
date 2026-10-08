export const DONATE_URL = "https://coffeebede.com/aghabidareh";

const INK = "#2b2118";

export default function Donate() {
  return (
    <section aria-labelledby="donate-title" className="mx-auto max-w-4xl px-4 py-20">
      <div className="frame relative flex flex-col items-center gap-6 overflow-hidden rounded-[2.5rem] bg-cream p-8 text-center sm:flex-row sm:p-10 sm:text-right">
        <svg aria-hidden viewBox="0 0 120 130" className="w-28 shrink-0">
          {[0, 1, 2].map((i) => (
            <path key={i} d={`M${45 + i * 14} 40 q-8 -10 0 -20 q8 -10 0 -20`} fill="none" stroke="#c0603f" strokeWidth="3" strokeLinecap="round"
              style={{ animation: `rise 2.6s ${i * 0.7}s ease-out infinite` }} />
          ))}
          <path d="M30 50 L90 50 L84 110 Q60 118 36 110Z" fill="#faf2e1" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <path d="M33 62 L87 62 L83 104 Q60 111 37 104Z" fill="#7a4a2a" />
          <path d="M90 60 q22 4 14 26 q-6 10 -18 8" fill="none" stroke={INK} strokeWidth="3" />
          <ellipse cx="60" cy="118" rx="42" ry="7" fill="#2a9d8f" stroke={INK} strokeWidth="3" />
          <path d="M44 80 l6 6 l6 -6 l6 6 l6 -6 l6 6" fill="none" stroke="#e9a23b" strokeWidth="2.5" />
        </svg>
        <div className="flex-1">
          <h2 id="donate-title" className="font-display text-3xl text-lapis">یه قهوه، برای یه کوه که موش زایید ☕</h2>
          <p className="mt-3 leading-8 text-ink/80">
            اگه این پروژه یه لبخند آورد روی لبت، می‌تونی یه قهوه مهمونم کنی. هر قهوه یعنی یه ضرب‌المثل دیگه که
            زیادی جدی گرفته می‌شه.
          </p>
          <a href={DONATE_URL} target="_blank" rel="noopener noreferrer" className="btn mt-5 bg-terracotta text-lg text-paper">
            مهمونم کن ☕
          </a>
        </div>
      </div>
    </section>
  );
}
