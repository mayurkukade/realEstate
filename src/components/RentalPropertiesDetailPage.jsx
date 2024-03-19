
import React from "react";
import { MoreDetailsCard } from "./contents/MoreDetailsCard";
import { NavbarBlue } from "./contents/NavbarBlue";
import { HorizontalCard } from "./contents/PreViewPropertyCard";
import { CardDefault } from "./contents/PropertyServicesCard";
import { SalePropertyCardTwo } from "./contents/SalePropertyCardTwo";
import { HomeLoanOffersCard } from "./contents/HomeLoanOffersCard";

export function RentalPropertiesDetailPage() {
  return (
    <div>
      <NavbarBlue></NavbarBlue>
      <SalePropertyCardTwo></SalePropertyCardTwo>
      <MoreDetailsCard></MoreDetailsCard>
      <HorizontalCard></HorizontalCard>
      <CardDefault></CardDefault>
      {/* <HomeLoanOffersCard></HomeLoanOffersCard> */}
    </div>
  );
}