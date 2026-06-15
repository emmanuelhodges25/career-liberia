import OpportunityBackground from "@/components/layout/OpportunityBackground";
import DashboardHero from "@/components/dashboard/DashboardHero";
import StatsCards from "@/components/dashboard/StatsCards";

export default function DashboardPage() {
  return (
    <>
      <OpportunityBackground />

      <div className="space-y-8">
        <DashboardHero
          title="Dashboard"
          subtitle="Manage applications, jobs, profile and opportunities."
        />

        <StatsCards />

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
          "
        >
          <h2
            className="
              text-2xl
              font-bold
              text-white
            "
          >
            Recent Activity
          </h2>

          <p className="mt-4 text-slate-400">
            Activity data will load from API.
          </p>
        </div>
      </div>
    </>
  );
}