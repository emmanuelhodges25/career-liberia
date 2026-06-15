import OpportunityBackground from "@/components/layout/OpportunityBackground";
import DashboardHero from "@/components/dashboard/DashboardHero";

export default function SettingsPage() {
  return (
    <>
      <OpportunityBackground />

      <div className="space-y-8">
        <DashboardHero
          title="Settings"
          subtitle="Manage account preferences."
        />

        <div
          className="
            rounded-3xl
            border
            border-cyan-500/20
            bg-white/5
            p-8
            space-y-6
          "
        >
          <div>
            <h3 className="text-white font-semibold">
              Email Notifications
            </h3>

            <p className="text-slate-400">
              Receive updates by email.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold">
              Privacy Settings
            </h3>

            <p className="text-slate-400">
              Manage profile visibility.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold">
              Security
            </h3>

            <p className="text-slate-400">
              Change password and enable 2FA.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}