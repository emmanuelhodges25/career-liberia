import OpportunityBackground from "@/components/layout/OpportunityBackground";
import OpportunityDetailLayout from "@/components/opportunities/OpportunityDetailLayout";

export default function ScholarshipDetailsPage() {
  return (
    <>
      <OpportunityBackground />

      <OpportunityDetailLayout
        category="Scholarship"
        title="STEM Scholarship"
        organization="Education Foundation"
        location="International"
      />
    </>
  );
}