interface OpportunityHeroProps {
  title: string;
  description: string;
  badge?: string;
}

export default function OpportunityHero({
  title,
  description,
  badge,
}: OpportunityHeroProps) {
  return (
    <section
      className="
      relative
      overflow-hidden
      rounded-4xl
      border
      border-cyan-500/20
      bg-linear-to-br
      from-slate-950
      via-slate-900
      to-indigo-950
      p-8
      md:p-12
    "
    >
      <div
        className="
        absolute
        right-0
        top-0
        h-72
        w-72
        rounded-full
        bg-cyan-500/10
        blur-3xl
      "
      />

      {badge && (
        <div
          className="
          mb-5
          inline-flex
          rounded-full
          border
          border-cyan-500/30
          bg-cyan-500/10
          px-4
          py-2
          text-sm
          text-cyan-300
        "
        >
          {badge}
        </div>
      )}

      <h1
        className="
        text-4xl
        font-black
        text-white
        md:text-6xl
      "
      >
        {title}
      </h1>

      <p
        className="
        mt-4
        max-w-3xl
        text-lg
        text-slate-300
      "
      >
        {description}
      </p>
    </section>
  );
}