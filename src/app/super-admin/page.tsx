import OpportunityBackground from "@/components/layout/OpportunityBackground";
import DashboardHero from "@/components/dashboard/DashboardHero";

export default function SuperAdminPage() {
  return (
    <>
      <OpportunityBackground />

      <div className="space-y-8">
        <DashboardHero
          title="Super Admin"
          subtitle="Full platform management and security controls."
        />

        <div
          className="
            rounded-3xl
            border
            border-yellow-500/20
            bg-white/5
            p-8
          "
        >
          <h2 className="text-white text-2xl font-bold">
            System Controls
          </h2>

          <p className="mt-4 text-slate-400">
            User management, logs, analytics
            and platform controls will be loaded here.
          </p>
        </div>
      </div>
    </>
  );
}