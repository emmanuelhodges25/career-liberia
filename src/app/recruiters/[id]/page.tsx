import OpportunityBackground from "@/components/layout/OpportunityBackground";
import OpportunityDetailLayout from "@/components/opportunities/OpportunityDetailLayout";

export default function RecruiterDetailsPage() {
  return (
    <>
      <OpportunityBackground />

      <OpportunityDetailLayout
        category="Recruiter"
        title="Senior Recruiter"
        organization="Career Liberia"
        location="Monrovia"
      />
    </>
  );
}