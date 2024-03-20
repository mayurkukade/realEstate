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
import { RentalPropertyNavbar } from "./components/RentalPropertyNavbar";
import { ResalePropertyNavbar } from "./components/ResalePropertyNavbar";
import { NewPropertyNavbar } from "./components/NewPropertyNavbar";
import { PlotForSaleNavbar } from "./components/PlotForSaleNavbar";

function App() {
  return (
    <div>
      <div id="ErrorPage">{/* <Error_Page></Error_Page> */}</div>

      <div id="ResalePropertyPage">
        {/* <ResalePropertyNavbar></ResalePropertyNavbar>
        <PropertyListing></PropertyListing> */}
      </div>

      <div id="RentalPropertyPage">
        {/* <RentalPropertyNavbar></RentalPropertyNavbar>
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
        {/* <NewPropertyNavbar></NewPropertyNavbar>
        <NewPropertyListing></NewPropertyListing> */}
      </div>

      <div id="PlotForSalePage">
        <PlotForSaleNavbar></PlotForSaleNavbar>
        <PlotForSaleListing></PlotForSaleListing>
      </div>

      <div id="PostPropertyPage">
        {/* <PostPropertyCard></PostPropertyCard> */}
      </div>
    </div>
  );
}

export default App;
