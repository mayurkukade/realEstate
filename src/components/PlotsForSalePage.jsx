import { Navbar, Button, Input } from "@material-tailwind/react";
import { PlotForSaleListing } from "./PlotForSaleListing";
import { PlotForSaleNavbar } from "./PlotForSaleNavbar";

export default function PlotForSalePage() {
  return (
    <div>
      <PlotForSaleNavbar></PlotForSaleNavbar>
      <PlotForSaleListing></PlotForSaleListing>
    </div>
  );
}
