import { PropertyDetailPageNavbar } from "../PropertyDetailPageNavbar";
import { ResalePropertyDetailCard } from "./ResalePropertyDetailCard";
import { ResalePropertyMoreDetailCard } from "./ResalePropertyMoreDetailCard";
import { PreViewPropertyCard } from "../PreViewPropertyCard";
import { PropertyServicesCard } from "../PropertyServicesCard";

export function ResalePropertyDetailPage() {
  return (
    <div>
      <PropertyDetailPageNavbar></PropertyDetailPageNavbar>
      <ResalePropertyDetailCard></ResalePropertyDetailCard>
      <ResalePropertyMoreDetailCard></ResalePropertyMoreDetailCard>
      <PreViewPropertyCard></PreViewPropertyCard>
      <PropertyServicesCard></PropertyServicesCard>
    </div>
  );
}
