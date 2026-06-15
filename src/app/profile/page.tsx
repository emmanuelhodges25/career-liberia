import Link from "next/link";

import OpportunityBackground from "@/components/layout/OpportunityBackground";
import DashboardHero from "@/components/dashboard/DashboardHero";

export default function ProfilePage() {
  return (
    <>
      <OpportunityBackground />

      <div className="space-y-8">
        <DashboardHero
          title="My Profile"
          subtitle="Manage your personal information."
        />

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
          "
        >
          <div className="flex items-center gap-5">
            <div
              className="
                h-24
                w-24
                rounded-full
                bg-red-600
              "
            />

            <div>
              <h2
                className="
                  text-2xl
                  font-bold
                  text-white
                "
              >
                Your Name
              </h2>

              <p className="text-slate-400">
                user@email.com
              </p>
            </div>
          </div>

          <Link
            href="/profile/edit"
            className="
              mt-6
              inline-flex
              rounded-xl
              bg-red-600
              px-5
              py-3
              text-white
            "
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </>
  );
}