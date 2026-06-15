import OpportunityBackground from "@/components/layout/OpportunityBackground";
import DashboardHero from "@/components/dashboard/DashboardHero";

export default function EditProfilePage() {
  return (
    <>
      <OpportunityBackground />

      <div className="space-y-8">
        <DashboardHero
          title="Edit Profile"
          subtitle="Update your information."
        />

        <form
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            space-y-5
          "
        >
          <input
            placeholder="Full Name"
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-4
              text-white
            "
          />

          <input
            placeholder="Email"
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-4
              text-white
            "
          />

          <button
            className="
              rounded-xl
              bg-red-600
              px-6
              py-3
              text-white
            "
          >
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}