import OpportunityBackground from "@/components/layout/OpportunityBackground";
import OpportunityDetailLayout from "@/components/opportunities/OpportunityDetailLayout";

export default function CompanyDetailsPage() {
  return (
    <>
      <OpportunityBackground />

      <OpportunityDetailLayout
        category="Company"
        title="Orange Liberia"
        organization="Telecommunications"
        location="Monrovia"
      />
    </>
  );
}