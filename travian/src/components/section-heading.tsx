type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="max-w-3xl space-y-3">
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-[0.3em] text-amber-300 uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold text-white lg:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-relaxed text-white/70 lg:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
