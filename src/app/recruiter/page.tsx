import OpportunityBackground from "@/components/layout/OpportunityBackground";
import DashboardHero from "@/components/dashboard/DashboardHero";
import StatsCards from "@/components/dashboard/StatsCards";

export default function RecruiterDashboardPage() {
  return (
    <>
      <OpportunityBackground />

      <div className="space-y-8">
        <DashboardHero
          title="Recruiter Dashboard"
          subtitle="Manage jobs, applicants and company profile."
        />

        <StatsCards />

        <div
          className="
            rounded-3xl
            border
            border-cyan-500/20
            bg-white/5
            p-8
          "
        >
          <h2 className="text-2xl font-bold text-white">
            Recruiter Overview
          </h2>

          <p className="mt-4 text-slate-400">
            Jobs, applicants and analytics
            will load from backend APIs.
          </p>
        </div>
      </div>
    </>
  );
}