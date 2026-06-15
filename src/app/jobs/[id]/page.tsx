import OpportunityBackground from "@/components/layout/OpportunityBackground";
import OpportunityDetailLayout from "@/components/opportunities/OpportunityDetailLayout";

export default function JobDetailsPage() {
  return (
    <>
      <OpportunityBackground />

      <OpportunityDetailLayout
        category="Job"
        title="Software Engineer"
        organization="HireMe Liberia"
        location="Monrovia"
      />
    </>
  );
}