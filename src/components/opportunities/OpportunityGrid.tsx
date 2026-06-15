interface OpportunityGridProps {
  title: string;
}

export default function OpportunityGrid({
  title,
}: OpportunityGridProps) {
  return (
    <section>
      <h2
        className="
        mb-6
        text-2xl
        font-bold
        text-white
      "
      >
        {title}
      </h2>

      <div
        className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="
            rounded-3xl
            border
            border-cyan-500/20
            bg-white/5
            p-6
            backdrop-blur-xl
          "
          >
            <div className="mb-4 h-12 w-12 rounded-xl bg-cyan-500/10" />

            <h3 className="text-lg font-semibold text-white">
              Opportunity Title
            </h3>

            <p className="mt-2 text-slate-400">
              Real data will load from API.
            </p>

            <button
              className="
              mt-4
              rounded-xl
              bg-red-600
              px-4
              py-2
              text-white
            "
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}