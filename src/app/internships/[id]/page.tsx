import OpportunityBackground from "@/components/layout/OpportunityBackground";
import OpportunityDetailLayout from "@/components/opportunities/OpportunityDetailLayout";

export default function InternshipDetailsPage() {
  return (
    <>
      <OpportunityBackground />

      <OpportunityDetailLayout
        category="Internship"
        title="Marketing Intern"
        organization="Startup Liberia"
        location="Monrovia"
      />
    </>
  );
}