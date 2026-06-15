export default function StatsCards() {
  const stats = [
    {
      title: "Applications",
      value: "0",
    },
    {
      title: "Saved Jobs",
      value: "0",
    },
    {
      title: "Messages",
      value: "0",
    },
    {
      title: "Profile Strength",
      value: "0",
    },
  ];

  return (
    <div
      className="
        grid
        gap-5
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
            backdrop-blur-xl
          "
        >
          <p className="text-slate-400">
            {stat.title}
          </p>

          <h3
            className="
              mt-3
              text-3xl
              font-bold
              text-white
            "
          >
            {stat.value}
          </h3>
        </div>
      ))}
    </div>
  );
}