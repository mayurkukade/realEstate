import { PropertyDetailPageNavbar } from "../PropertyDetailPageNavbar";
import { PreViewPropertyCard } from "../PreViewPropertyCard";
import { PropertyServicesCard } from "../PropertyServicesCard";
import { RentalPropertyDetailCard } from "./RentalPropertyDetailCard";
import { RentalPropertyMoreDetailCard } from "./RentalPropertyMoreDetailCard";

export function RentalPropertyDetailPage() {
  return (
    <div>
      <PropertyDetailPageNavbar></PropertyDetailPageNavbar>
      <RentalPropertyDetailCard></RentalPropertyDetailCard>
      <RentalPropertyMoreDetailCard></RentalPropertyMoreDetailCard>
      <PreViewPropertyCard></PreViewPropertyCard>
      <PropertyServicesCard></PropertyServicesCard>
    </div>
  );
}
