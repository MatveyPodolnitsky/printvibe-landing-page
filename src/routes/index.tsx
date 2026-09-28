import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import tshirt from "@/assets/work-tshirt.jpg";
import mug from "@/assets/work-mug.jpg";
import hoodie from "@/assets/work-hoodie.jpg";
import stickers from "@/assets/work-stickers.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PrintVibe — печать на футболках, кружках и наклейках в Гомеле" },
      { name: "description", content: "Салон печати PrintVibe в Гомеле: футболки, худи, кружки, фото и наклейки с вашим дизайном." },
      { property: "og:title", content: "PrintVibe — салон печати в Гомеле" },
      { property: "og:description", content: "Футболки, худи, кружки, фото и наклейки с вашим дизайном." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TG = "https://t.me/ilw_dtl";
const IG = "https://www.instagram.com/printvibe.by/";

const works = [
  { img: tshirt, title: "Футболки с принтом", text: "Яркая печать любых дизайнов: от логотипа до авторского арта. Не выцветает после стирок." },
  { img: hoodie, title: "Худи и свитшоты", text: "Принты на спине и груди для команд, мероприятий и себя любимого." },
  { img: mug, title: "Кружки с фото", text: "Семейные фото, надписи и поздравления — идеальный подарок за один день." },
  { img: stickers, title: "Наклейки и фото", text: "Вырубные стикеры любой формы и печать фотографий в хорошем качестве." },
];

const reviews = [
  { name: "Анна", text: "Заказывала кружки с фото на юбилей родителей — всё сделали быстро и очень качественно. Спасибо!" },
  { name: "Дмитрий", text: "Печатали футболки на всю команду. Цвета сочные, после стирки как новые. Рекомендую." },
  { name: "Катерина", text: "Помогли доработать макет наклеек, результат превзошёл ожидания. Буду обращаться ещё!" },
];

function Btn({ href, children, alt }: { href: string; children: React.ReactNode; alt?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      className={`inline-flex items-center gap-2 px-6 py-3 font-display text-sm font-bold uppercase tracking-wide transition-transform hover:-translate-y-0.5 ${alt ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`}
      style={{ clipPath: "polygon(0 0, 100% 0, 94% 100%, 0 100%)" }}>
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top"><img src={logo.url} alt="PrintVibe" className="h-14 w-auto object-cover" style={{ objectPosition: "center", aspectRatio: "3/1" }} /></a>
          <nav className="hidden gap-7 text-sm font-medium md:flex">
            <a href="#works" className="hover:text-primary">Работы</a>
            <a href="#reviews" className="hover:text-primary">Отзывы</a>
            <a href="#contacts" className="hover:text-primary">Контакты</a>
          </nav>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-4 inline-block bg-primary px-3 py-1 font-display text-xs font-bold uppercase text-primary-foreground">Салон печати · Гомель</p>
          <h1 className="font-display text-4xl font-black leading-tight md:text-6xl">
            Печатаем <span className="text-primary">ваш</span> <span className="text-accent">вайб</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Футболки, худи, кружки, фото и наклейки с любым дизайном. Поможем с макетом и сделаем быстро.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href={TG}>Написать в Telegram</Btn>
            <Btn href={IG} alt>Instagram</Btn>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img src={tshirt} alt="Футболка с принтом" width={816} height={816} className="aspect-square w-full object-cover" />
          <img src={stickers} alt="Наклейки" width={816} height={816} className="mt-10 aspect-square w-full object-cover" />
        </div>
      </section>

      <section id="works" className="bg-ink py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-3xl font-black md:text-5xl">Примеры <span className="text-accent">работ</span></h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {works.map((w) => (
              <article key={w.title} className="group">
                <div className="overflow-hidden">
                  <img src={w.img} alt={w.title} loading="lazy" width={816} height={816} className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm opacity-75">{w.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10"><Btn href={IG} alt>Больше работ в Instagram →</Btn></div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-3xl font-black md:text-5xl">Отзывы <span className="text-primary">клиентов</span></h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <blockquote key={r.name} className="border-l-4 border-accent bg-secondary p-6">
              <p className="text-accent">★★★★★</p>
              <p className="mt-3">«{r.text}»</p>
              <footer className="mt-4 font-display text-sm font-bold text-primary">{r.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="contacts" className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-black md:text-5xl">Контакты</h2>
            <p className="mt-4 max-w-md opacity-85">Напишите нам — обсудим идею, подберём изделие и рассчитаем стоимость.</p>
          </div>
          <div className="space-y-8">
            <ul className="space-y-5 text-lg">
              <li><span className="block text-sm opacity-70">Адрес</span>Гомель, ул. М. Г. Ефремова, 16, этаж 2</li>
              <li><span className="block text-sm opacity-70">Телефон</span><a href="tel:+375257838628" className="font-bold underline-offset-4 hover:underline">+375 25 783-86-28</a></li>
              <li><span className="block text-sm opacity-70">Telegram</span><a href={TG} target="_blank" rel="noreferrer" className="font-bold underline-offset-4 hover:underline">@ilw_dtl</a></li>
              <li><span className="block text-sm opacity-70">Instagram</span><a href={IG} target="_blank" rel="noreferrer" className="font-bold underline-offset-4 hover:underline">@printvibe.by</a></li>
            </ul>
            <div className="max-w-sm border border-primary-foreground/25 bg-primary-foreground/10 p-5">
              <h3 className="font-display text-sm font-bold uppercase tracking-wide">Часы работы</h3>
              <dl className="mt-3 space-y-1.5 text-sm">
                {[["Понедельник — пятница", "10:00–18:00"], ["Суббота", "10:00–14:00"], ["Воскресенье", "Выходной"]].map(([d, h]) => (
                  <div key={d} className="flex justify-between gap-4">
                    <dt className="opacity-80">{d}</dt>
                    <dd className="font-medium">{h}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Btn href={TG} alt>Заказать печать</Btn>
          </div>
        </div>
      </section>

      <footer className="bg-ink py-6 text-center text-sm text-primary-foreground/60">© {new Date().getFullYear()} PrintVibe · Гомель</footer>
    </div>
  );
}
