import { useState } from "react";
import "./App.css";
import { Button } from "@material-tailwind/react";

import { PostPropertyCard } from "./components/PostPropertyCard";
import { SalePropertyCard } from "./components/SalePropertyCard";

import { Error_Page } from "./components/Error_Page";

import { PropertyListing } from "./components/PropertyListing";
import { NavbarSalePropertyCard } from "./components/NavbarSalePropertyCard";

import { RentalPropertyListing } from "./components/RentalPropertyListing";

import { NavbarBlue } from "./components/NavbarBlue";
import { SalePropertyCardTwo } from "./components/SalePropertyCardTwo";
import { MoreDetailsCard } from "./components/MoreDetailsCard";
import { HorizontalCard } from "./components/PreViewPropertyCard";
import { CardDefault } from "./components/PropertyServicesCard";

import { NewPropertyListing } from "./components/NewPropertyListing";

import { PlotForSaleListing } from "./components/PlotForSaleListing";

function App() {
  return (
    <div>
      <div id="ErrorPage">{/* <Error_Page></Error_Page> */}</div>

      <div id="ResalePropertyPage">
        {/* <NavbarSalePropertyCard></NavbarSalePropertyCard>
        <PropertyListing></PropertyListing> */}
      </div>

      <div id="RentalPropertyPage">
        {/* <NavbarSalePropertyCard></NavbarSalePropertyCard>
      <RentalPropertyListing></RentalPropertyListing> */}
      </div>

      <div id="RentalPropertyDetailPage">
        {/* <NavbarBlue></NavbarBlue>
        <SalePropertyCardTwo></SalePropertyCardTwo>
        <MoreDetailsCard></MoreDetailsCard>
        <HorizontalCard></HorizontalCard>
        <CardDefault></CardDefault> */}
      </div>

      <div id="NewPropertyPage">
        {/* <NavbarSalePropertyCard></NavbarSalePropertyCard>
        <NewPropertyListing></NewPropertyListing> */}
      </div>

      <div id="PlotForSalePage">
        {/* <NavbarSalePropertyCard></NavbarSalePropertyCard>
        <PlotForSaleListing></PlotForSaleListing> */}
      </div>

      <div id="PostPropertyPage">
      {/* <PostPropertyCard></PostPropertyCard> */}
      </div>
    </div>
  );
}

export default App;
