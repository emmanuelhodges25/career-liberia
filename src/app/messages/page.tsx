import OpportunityBackground from "@/components/layout/OpportunityBackground";
import DashboardHero from "@/components/dashboard/DashboardHero";

export default function MessagesPage() {
  return (
    <>
      <OpportunityBackground />

      <div className="space-y-8">
        <DashboardHero
          title="Messages"
          subtitle="Connect with recruiters, employers and professionals."
        />

        <div className="grid gap-6 lg:grid-cols-[350px_1fr]">
          <div
            className="
              rounded-3xl
              border
              border-cyan-500/20
              bg-white/5
              p-4
            "
          >
            <h2 className="mb-4 text-xl font-semibold text-white">
              Conversations
            </h2>

            {[1, 2, 3].map((chat) => (
              <div
                key={chat}
                className="
                  mb-3
                  rounded-2xl
                  border
                  border-white/10
                  p-4
                  hover:bg-white/5
                "
              >
                <h3 className="text-white">
                  Recruiter Name
                </h3>

                <p className="text-sm text-slate-400">
                  Last message preview...
                </p>
              </div>
            ))}
          </div>

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
              Chat Window
            </h2>

            <p className="mt-4 text-slate-400">
              Real-time Socket.IO chat messages
              will appear here after backend integration.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}