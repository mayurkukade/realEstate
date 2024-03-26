import { PropertyDetailPageNavbar } from "../PropertyDetailPageNavbar";
import { PlotForSaleDetailCard } from "./PlotForSaleDetailCard";
import { PlotForSaleMoreDetailCard } from "./PlotForSaleMoreDetailCard";
import { PreViewPropertyCard } from "../PreViewPropertyCard";
import { PropertyServicesCard } from "../PropertyServicesCard";

export function PlotForSaleDetailPage() {
  return (
    <div>
      <PropertyDetailPageNavbar></PropertyDetailPageNavbar>
      <PlotForSaleDetailCard></PlotForSaleDetailCard>
      <PlotForSaleMoreDetailCard></PlotForSaleMoreDetailCard>
      <PreViewPropertyCard></PreViewPropertyCard>
      <PropertyServicesCard></PropertyServicesCard>
    </div>
  );
}
