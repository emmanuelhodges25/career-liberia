interface Props {
  title: string;
  subtitle: string;
}

export default function DashboardHero({
  title,
  subtitle,
}: Props) {
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
        via-blue-950/40
        to-red-950/20
        p-8
      "
    >
      <div
        className="
          absolute
          -top-20
          -right-20
          h-60
          w-60
          rounded-full
          bg-cyan-500/10
          blur-[100px]
        "
      />

      <h1
        className="
          relative
          text-4xl
          font-black
          text-white
        "
      >
        {title}
      </h1>

      <p className="relative mt-3 text-slate-300">
        {subtitle}
      </p>
    </section>
  );
}