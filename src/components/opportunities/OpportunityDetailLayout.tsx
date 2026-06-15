import Link from "next/link";

interface Props {
  category: string;
  title: string;
  organization: string;
  location: string;
}

export default function OpportunityDetailLayout({
  category,
  title,
  organization,
  location,
}: Props) {
  return (
    <div className="space-y-8">
      <div
        className="
          rounded-4xl
          border
          border-cyan-500/20
          bg-white/5
          p-8
          backdrop-blur-xl
        "
      >
        <div
          className="
            inline-flex
            rounded-full
            bg-cyan-500/10
            px-4
            py-2
            text-cyan-300
          "
        >
          {category}
        </div>

        <h1 className="mt-4 text-4xl font-black text-white">
          {title}
        </h1>

        <p className="mt-2 text-slate-400">
          {organization} • {location}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            className="
              rounded-xl
              bg-red-600
              px-6
              py-3
              text-white
            "
          >
            Apply Now
          </button>

          <button
            className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-6
              py-3
              text-white
            "
          >
            Save Opportunity
          </button>
        </div>
      </div>

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
        "
      >
        <h2 className="mb-4 text-2xl font-bold text-white">
          Description
        </h2>

        <p className="text-slate-300">
          Opportunity details will load from API.
        </p>
      </div>

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
        "
      >
        <h2 className="mb-4 text-2xl font-bold text-white">
          Requirements
        </h2>

        <ul className="space-y-2 text-slate-300">
          <li>Requirement 1</li>
          <li>Requirement 2</li>
          <li>Requirement 3</li>
        </ul>
      </div>

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          text-center
        "
      >
        <h2 className="text-2xl font-bold text-white">
          Create Account To Apply
        </h2>

        <Link
          href="/register"
          className="
            mt-5
            inline-flex
            rounded-xl
            bg-red-600
            px-6
            py-3
            text-white
          "
        >
          Register Now
        </Link>
      </div>
    </div>
  );
}