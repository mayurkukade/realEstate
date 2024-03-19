import React from "react";
import { SalePropertyCard } from "./contents/SalePropertyCard";
import { NavbarSalePropertyCard } from "./contents/NavbarSalePropertyCard";
import { PropertyListing } from "./contents/PropertyListing";

export function ResalePropertiesPage() {
  return (
    <div>
      <NavbarSalePropertyCard></NavbarSalePropertyCard>
      {/* <SalePropertyCard></SalePropertyCard> */}
      <PropertyListing></PropertyListing>
    </div>
  );
}