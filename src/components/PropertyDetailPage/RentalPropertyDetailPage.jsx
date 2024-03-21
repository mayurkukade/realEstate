import { MoreDetailsCard } from "./MoreDetailsCard";
import { NavbarBlue } from "./NavbarBlue";
import { HorizontalCard } from "./PreViewPropertyCard";
import { CardDefault } from "./PropertyServicesCard";
import { SalePropertyCardTwo } from "./SalePropertyCardTwo";

export function RentalPropertyDetailPage() {
  return (
    <div>
      <NavbarBlue></NavbarBlue>
      <SalePropertyCardTwo></SalePropertyCardTwo>
      <MoreDetailsCard></MoreDetailsCard>
      <HorizontalCard></HorizontalCard>
      <CardDefault></CardDefault>
    </div>
  );
}
