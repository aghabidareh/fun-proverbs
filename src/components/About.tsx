import { Eslimi } from "./Ornaments";

const rules = [
  { icon: "📜", title: "قانون اول", text: "هر ضرب‌المثل، کلمه‌به‌کلمه اجرا می‌شه. بدون تخفیف، بدون استعاره." },
  { icon: "🎭", title: "قانون دوم", text: "شخصیت‌ها حق خندیدن ندارن. همه‌چیز با نهایت جدیت و حماسه اتفاق میفته." },
  { icon: "🐈", title: "قانون سوم", text: "هیچ گربه، موش، یا شتری در ساخت این سایت آسیب ندید. فقط کمی گیج شدن." },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative scroll-mt-20 overflow-hidden border-y-[3px] border-ink bg-paper py-20">
      <Eslimi className="absolute -left-10 top-6 w-56 opacity-30" />
      <div className="relative mx-auto max-w-5xl px-4">
        <h2 id="about-title" className="text-center font-display text-4xl text-lapis sm:text-5xl">این دیگه چه سایتیه؟!</h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-9 text-ink/80">
          ضرب‌المثل‌های فارسی پر از تصویرهای عجیب‌اند: کوهی که می‌زاد، آبی که کوبیده می‌شه، دیگی که به دیگ دیگه
          تیکه میندازه. ما همیشه معنی‌شون رو می‌فهمیم و از کنار تصویرشون رد می‌شیم. این پروژه یه بار وایساده و
          اون تصویرها رو جدی گرفته؛ با زبان مینیاتور، کاشی و قالی، ولی با حس شوخی امروز.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {rules.map((r, i) => (
            <li
              key={r.title}
              className={`frame rounded-3xl bg-cream p-6 text-center transition hover:-translate-y-1 ${i === 1 ? "sm:translate-y-4" : ""}`}
            >
              <span aria-hidden className="text-4xl">{r.icon}</span>
              <h3 className="mt-2 font-display text-2xl text-terracotta">{r.title}</h3>
              <p className="mt-2 leading-7">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
