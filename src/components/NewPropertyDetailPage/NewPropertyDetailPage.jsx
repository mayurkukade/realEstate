import { PropertyDetailPageNavbar } from "../PropertyDetailPageNavbar";
import { NewPropertyDetailCard } from "./NewPropertyDetailCard";
import { NewPropertyMoreDetailCard } from "./NewPropertyMoreDetailCard";
import { PreViewPropertyCard } from "../PreViewPropertyCard";
import { PropertyServicesCard } from "../PropertyServicesCard";

export function NewPropertyDetailPage() {
  return (
    <div>
      <PropertyDetailPageNavbar></PropertyDetailPageNavbar>
      <NewPropertyDetailCard></NewPropertyDetailCard>
      <NewPropertyMoreDetailCard></NewPropertyMoreDetailCard>
      <PreViewPropertyCard></PreViewPropertyCard>
      <PropertyServicesCard></PropertyServicesCard>
    </div>
  );
}
