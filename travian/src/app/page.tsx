import Image from "next/image";
import Link from "next/link";
import {
  campaignTimeline,
  economyPillars,
  factions,
  galleryImages,
  heroMetrics,
  strategyHighlights,
  worldSnapshot,
} from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

const tacticalLayers = [
  {
    name: "قيادة التحالف",
    detail:
      "مجلس القيادة ينسق الهجمات المتزامنة ويعيد توزيع الموارد لحفظ التفوق في كل جبهة.",
    status: "متصل الآن",
  },
  {
    name: "إستطلاع الحدود",
    detail:
      "كشف تحركات الجيوش المعادية قبل ٦ ساعات من الوصول وتوجيه التعزيزات تلقائيًا.",
    status: "على المسار",
  },
  {
    name: "مركز التجهيز",
    detail:
      "إدارة مخزون القمح والحديد وربطه بخطط التدريب لضمان تدفق مستمر للوحدات.",
    status: "يتطلب مراجعة",
  },
];

const supportSystems = [
  {
    title: "لوحة التحركات",
    description:
      "ترصد تحركات الجيش والتحالف وتعرض التنبيهات بصوت واضح قبل أي هجوم أو تعزيز.",
    link: "#timeline",
  },
  {
    title: "محاكي المعارك",
    description:
      "أداة تحليلية دقيقة لتوقع نتيجة أي مواجهة قبل تنفيذها بفضل نماذج حساب الضرر المتقدمة.",
    link: "#factions",
  },
  {
    title: "محلل الاقتصاد",
    description:
      "يحول الموارد إلى جدول زمني واضح ويقترح أفضل أوقات استخدام الذهب للترقية الفورية.",
    link: "#economy",
  },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col gap-24 bg-gradient-to-b from-black via-slate-950 to-black pb-32 text-white lg:gap-28">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(155,125,45,0.18),_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(37,99,235,0.08),transparent)]" />
      </div>

      <section className="relative px-6 pt-20 md:px-10 lg:px-16 lg:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-10">
            <div className="space-y-5">
              <span className="inline-flex items-center justify-center rounded-full border border-amber-300/60 bg-amber-400/10 px-4 py-1 text-xs font-semibold tracking-[0.4em] text-amber-200">
                ترافيان الأصلية
              </span>
              <h1 className="font-display text-4xl leading-tight text-amber-100 sm:text-5xl lg:text-6xl">
                شيد إمبراطوريتك. وجه جيوشك. اصنع أسطورتك في عالم ترافيان.
              </h1>
              <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                لوحة تحكم إستراتيجية متكاملة تمنحك تفاصيل دقيقة عن كل قرية،
                كل تحرك عسكري، وكل تحالف. هنا تبدأ الحملات المدروسة وتنتهي
                بسيطرة كاملة على الخريطة.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <p className="text-sm text-white/60">{metric.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-amber-200">
                    {metric.value}
                  </p>
                  <p className="text-xs text-emerald-300">{metric.trend}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#gallery"
                className="rounded-full bg-gradient-to-l from-amber-500 to-amber-300 px-8 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/30 transition hover:from-amber-400 hover:to-amber-200"
              >
                استعرض المخططات المرئية
              </Link>
              <Link
                href="#timeline"
                className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/80 transition hover:border-amber-300/60 hover:text-amber-200"
              >
                خطط الأسابيع الأربعة
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_-30px_rgba(250,204,21,0.35)]">
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-amber-500/10 via-transparent to-sky-500/20" />
            <div className="grid gap-4">
              {tacticalLayers.map((layer) => (
                <div
                  key={layer.name}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-amber-100">
                      {layer.name}
                    </h3>
                    <span className="text-xs text-emerald-300">
                      {layer.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-white/70">{layer.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="text-xs text-white/50">سجل اليوم</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                «تم تنسيق هجوم ثلاثي على واحة القمح ١٥٪ مع تعزيز الدفاع في
                الحدود الشمالية. المخزون المركزي جاهز للاستجابة السريعة.»
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="factions"
        className="relative px-6 md:px-10 lg:px-16"
      >
        <SectionHeading
          eyebrow="فصائل ترافيان"
          title="اختر حضارتك وحدد ملامح حربك"
          description="لكل فصيل أسلوبه الخاص في شن القتال وتنمية الاقتصاد. تعرف على نقاط القوة وضع خطة توسعك بناءً عليها."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {factions.map((faction) => (
            <article
              key={faction.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-7 transition duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-slate-900/90"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent)]" />
              </div>
              <header className="space-y-2">
                <p className="text-sm text-amber-200/90">{faction.motto}</p>
                <h3 className="font-display text-2xl text-amber-50">
                  {faction.name}
                </h3>
              </header>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {faction.description}
              </p>
              <div className="mt-5 space-y-2 text-sm text-white/65">
                <p className="font-semibold text-white/80">مزايا حاسمة:</p>
                <ul className="space-y-2">
                  {faction.strengths.map((strength) => (
                    <li key={strength} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-400" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
                <p className="pt-3 text-xs text-white/50">
                  نقطة الضعف: {faction.weakness}
                </p>
              </div>
              <footer className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
                {faction.highlight}
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section id="economy" className="px-6 md:px-10 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            eyebrow="الاقتصاد أولًا"
            title="أطلق عجلة الموارد لتدعم طموحك العسكري"
            description="إدارة دقيقة لكل وحدة مورد تعني جيشًا لا يتوقف عن الهجوم أو الدفاع. هذه الركائز الثلاث تبني توازنك."
          />
          <div className="grid gap-6">
            {economyPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-amber-100">
                    {pillar.title}
                  </h3>
                  <span className="rounded-full bg-amber-400/10 px-3 py-1 text-[11px] text-amber-200">
                    أولوية قصوى
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {pillar.impact}
                </p>
                <ul className="mt-5 grid gap-2 text-xs text-white/60">
                  {pillar.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2">
                      <span className="mt-[6px] inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="timeline"
        className="px-6 md:px-10 lg:px-16"
      >
        <SectionHeading
          eyebrow="خطة الأسابيع الأربعة"
          title="خارطة طريق دقيقة من اليوم الأول إلى الهيمنة"
          description="نفذ الخطة الزمنية للوصول إلى المعجزة في أسرع وقت. كل أسبوع مصمم لتكامل التحالف والإمبراطورية."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {campaignTimeline.map((camp) => (
            <div
              key={camp.era}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-slate-900/60 to-slate-950/80 p-6"
            >
              <h3 className="font-display text-xl text-amber-100">
                {camp.era}
              </h3>
              <p className="mt-3 text-sm text-white/70">{camp.goal}</p>
              <p className="mt-4 rounded-2xl border border-amber-200/10 bg-amber-400/10 px-4 py-3 text-xs text-amber-100">
                أولوية الأسبوع: {camp.priority}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            eyebrow="مؤشرات العالم"
            title="لقطة مباشرة لوضع الخريطة"
            description="تحديث لحظي يضعك في قلب المنافسة: من يسيطر على الواحات؟ من اقترب من المعجزة؟"
          />

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {worldSnapshot.map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4"
                >
                  <p className="text-xs text-white/50">{card.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-amber-100">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-amber-300/10 bg-amber-400/10 p-5 text-sm text-amber-100">
              تم رصد حركة جيش معجزة باتجاه الشمال الشرقي. زمن الوصول المتوقع: ١٠ ساعات
              و٢٣ دقيقة مع احتمالية تدخل تحالفي بنسبة ٤٥٪.
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16">
        <SectionHeading
          eyebrow="التحضير للحروب"
          title="محاور تكتيكية تجعل تحالفك عصيًا على الكسر"
          description="ارفع جاهزية التحالف عبر لوحات محكمة ومؤشرات دقيقة تخبرك متى تنطلق ومتى تتراجع."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {strategyHighlights.map((highlight) => (
            <article
              key={highlight.title}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-6"
            >
              <h3 className="font-display text-xl text-amber-100">
                {highlight.title}
              </h3>
              <p className="mt-3 text-sm text-white/70">
                {highlight.description}
              </p>
              <ul className="mt-5 space-y-2 text-xs text-white/60">
                {highlight.focusPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-amber-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="أنظمة مساندة"
              title="أدوات متكاملة تضبط إيقاعك"
              description="تسهل مراقبة الوضع العام وتضمن انسجام قراراتك مع نبض الخريطة في كل ثانية."
            />
            <div className="grid gap-4">
              {supportSystems.map((system) => (
                <Link
                  key={system.title}
                  href={system.link}
                  className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-6 py-4 transition hover:border-amber-300/60 hover:bg-white/10"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-amber-100">
                      {system.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/60">
                      {system.description}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs text-white/50 transition group-hover:border-amber-300/60 group-hover:text-amber-200">
                    فتح الآن
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-white/10 via-slate-900/70 to-slate-950/90 p-6 shadow-[0_40px_120px_-30px_rgba(59,130,246,0.35)]">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent)]" />
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl text-amber-100">
                غرفة العمليات المباشرة
              </h3>
              <span className="text-xs text-emerald-300">نشطة</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              بث مباشر لحركة القوات وطلبات التعزيز مع خريطة تكتيكية تبين نقاط
              الاختراق المتوقعة في التحالفات المنافسة.
            </p>
            <div className="mt-6 grid gap-4 text-xs text-white/60">
              <p>• تحديث الدفاعات في القرية الرئيسية: ٣ دقائق.</p>
              <p>• خطة الهجوم الليلي: إطلاق عند الساعة ٠٢:٣٠.</p>
              <p>• نقاط تجمع الكشافة: خمسة قطاعات جاهزة.</p>
              <p>• حالة الذهب المشترى اليوم: ٨٧٪ من الحد.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="space-y-10 px-6 md:px-10 lg:px-16"
      >
        <SectionHeading
          eyebrow="المعرض التكتيكي"
          title="٥٠ مشهدًا بصريًا متناسقًا يغطي كل مفصل من مفاصل الحرب"
          description="صور عالية التناسق تشرح لك الحالة العامة لكل عنصر في الإمبراطورية: من الهياكل الدفاعية إلى الحملات العسكرية."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {galleryImages.map((image) => (
            <figure
              key={image.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-slate-900/90"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="flex flex-1 flex-col justify-between p-4 text-sm text-white/70">
                <span>{image.title}</span>
                <span className="mt-2 text-xs text-amber-200/80">
                  موحد النمط • جاهز للمشاركة
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-6 rounded-[40px] border border-amber-400/40 bg-gradient-to-br from-amber-500/15 via-slate-950/80 to-black px-6 py-12 md:mx-10 lg:mx-16 lg:px-16 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h2 className="font-display text-3xl text-amber-100 lg:text-4xl">
              جاهز للسيطرة على الخريطة؟
            </h2>
            <p className="text-sm leading-relaxed text-white/70 lg:text-base">
              اربط لوحتك بالتحالف وابدأ في تنفيذ الهجمات المنسقة، أو استخدم
              المحاكي الذكي لتجربة أساليب جديدة. عالم ترافيان ينتظر بصمت أن
              يسمع صدى انتصاراتك.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://www.travian.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-black shadow-xl shadow-amber-400/40 transition hover:bg-amber-300"
              >
                ادخل المعركة الآن
              </Link>
              <Link
                href="#factions"
                className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white/70 transition hover:border-amber-300/60 hover:text-amber-200"
              >
                راجع خيار الحضارات
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/50 p-6 text-sm text-white/60">
            <p className="text-white/80">خط اتصال التحالف الفوري</p>
            <p className="mt-3">
              • قناة القيادة: تم تأكيد هجوم الدخان على القرية ٠٣٤ فجرًا.
            </p>
            <p>• نقطة التعزيز: القرية ٠١٢ بحاجة لـ٢٠٠٠ فارس دروع.</p>
            <p>• تم إطلاق صفارات الإنذار: ارتقبوا تقارير الكشف خلال ٤ دقائق.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
