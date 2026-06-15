import Link from "next/link";

import OpportunityBackground from "@/components/layout/OpportunityBackground";
import OpportunityHero from "@/components/opportunities/OpportunityHero";
import OpportunityGrid from "@/components/opportunities/OpportunityGrid";

export default function ScholarshipsPage() {
  return (
    <>
      <OpportunityBackground />

      <div className="relative space-y-10">
        <OpportunityHero
          badge="Verified Employers"
          title="Scholarships"
          description="
          Discover trusted scholarships from top companies,
          startups, NGOs and organizations
          actively hiring across Liberia.
          "
        />

        <OpportunityGrid
          title="Featured scholarships"
        />

        <section
          className="
            rounded-3xl
            border
            border-cyan-500/20
            bg-linear-to-br
            from-cyan-950/20
            via-slate-950
            to-red-950/20
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
            Looking For Scholarships?
          </h2>

          <p
            className="
              mt-4
              text-slate-300
            "
          >
            Create your profile and
            connect with recruiters,
            companies and opportunities.
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
              transition
              hover:bg-red-500
            "
          >
            Join Career Liberia
          </Link>
        </section>
      </div>
    </>
  );
}