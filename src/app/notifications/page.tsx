import OpportunityBackground from "@/components/layout/OpportunityBackground";
import DashboardHero from "@/components/dashboard/DashboardHero";

export default function NotificationsPage() {
  return (
    <>
      <OpportunityBackground />

      <div className="space-y-8">
        <DashboardHero
          title="Notifications"
          subtitle="Stay updated on opportunities and messages."
        />

        <div
          className="
            rounded-3xl
            border
            border-cyan-500/20
            bg-white/5
            p-6
          "
        >
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="
                mb-4
                rounded-2xl
                border
                border-white/10
                p-4
              "
            >
              <h3 className="font-medium text-white">
                New Job Opportunity
              </h3>

              <p className="mt-1 text-slate-400">
                Notification data will come from API.
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}