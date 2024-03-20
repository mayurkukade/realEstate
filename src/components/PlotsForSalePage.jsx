import { Navbar, Button, Input } from "@material-tailwind/react";
import { PlotForSaleListing } from "./PlotForSaleListing";
import { PlotForSaleNavbar } from "./PlotForSaleNavbar";

export function PlotForSalePage() {
  return (
    <div>
      <PlotForSaleNavbar></PlotForSaleNavbar>
      <PlotForSaleListing></PlotForSaleListing>
    </div>
  );
}
