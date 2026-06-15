import OpportunityBackground from "@/components/layout/OpportunityBackground";
import DashboardHero from "@/components/dashboard/DashboardHero";

export default function AdminPage() {
  return (
    <>
      <OpportunityBackground />

      <div className="space-y-8">
        <DashboardHero
          title="Admin Dashboard"
          subtitle="Moderate jobs, users and reports."
        />

        <div
          className="
            rounded-3xl
            border
            border-red-500/20
            bg-white/5
            p-8
          "
        >
          <h2 className="text-white text-2xl font-bold">
            Admin Controls
          </h2>

          <p className="mt-4 text-slate-400">
            Approval workflows will connect to backend.
          </p>
        </div>
      </div>
    </>
  );
}