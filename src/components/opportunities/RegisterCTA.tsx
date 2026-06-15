import Link from "next/link";

export default function RegisterCTA() {
  return (
    <section
      className="
        rounded-3xl
        border
        border-cyan-500/20
        bg-linear-to-r
        from-cyan-950/20
        via-slate-950
        to-purple-950/20
        p-10
        text-center
      "
    >
      <h2
        className="
          text-3xl
          font-bold
          text-white
        "
      >
        Start Your Career Journey
      </h2>

      <p className="mt-4 text-slate-300">
        Register today to unlock jobs,
        internships, scholarships and
        networking opportunities.
      </p>

      <Link
        href="/register"
        className="
          mt-6
          inline-flex
          rounded-xl
          bg-red-600
          px-6
          py-3
          text-white
        "
      >
        Create Free Account
      </Link>
    </section>
  );
}