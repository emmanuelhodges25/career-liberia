import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Building2,
  Rocket,
  FileText,
  PenSquare,
  Users,
  Award,
} from "lucide-react";

const categories = [
  {
    title: "Jobs",
    href: "/jobs",
    icon: Briefcase,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Internships",
    href: "/internships",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Scholarships",
    href: "/scholarships",
    icon: Award,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Programs",
    href: "/programs",
    icon: Users,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Companies",
    href: "/companies",
    icon: Building2,
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Startups",
    href: "/startups",
    icon: Rocket,
    color: "from-red-500 to-pink-600",
  },
  {
    title: "CV Builder",
    href: "/cv-builder",
    icon: FileText,
    color: "from-cyan-500 to-teal-600",
  },
  {
    title: "Letter Builder",
    href: "/letter-builder",
    icon: PenSquare,
    color: "from-violet-500 to-purple-600",
  },
];

export default function QuickCategories() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-black text-white">
          Explore Categories
        </h2>

        <p className="mt-2 text-slate-400">
          Discover jobs, internships,
          scholarships and career opportunities.
        </p>
      </div>

      <div
        className="
          grid
          grid-cols-2
          gap-4
          md:grid-cols-4
        "
      >
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:border-cyan-400/40
              "
            >
              <div
                className={`
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-10
                  bg-linear-to-br
                  ${item.color}
                `}
              />

              <div
                className={`
                  mb-4
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-linear-to-br
                  ${item.color}
                `}
              >
                <Icon
                  size={22}
                  className="text-white"
                />
              </div>

              <h3
                className="
                  text-lg
                  font-semibold
                  text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-slate-400
                "
              >
                Explore opportunities
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}